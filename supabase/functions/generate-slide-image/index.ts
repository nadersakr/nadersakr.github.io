import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

class WaveSpeedApiError extends Error {
  status: number;
  details: string;

  constructor(message: string, status: number, details = "") {
    super(message);
    this.name = "WaveSpeedApiError";
    this.status = status;
    this.details = details;
  }
}

function parsePositiveIntEnv(name: string, fallback: number): number {
  const raw = Deno.env.get(name);
  if (!raw) return fallback;
  const parsed = Number(raw);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.floor(parsed);
}

function normalizeModelId(modelId: string): string {
  return modelId.trim().replace(/^\/+|\/+$/g, "");
}

function pickFirstString(value: unknown): string | null {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length ? trimmed : null;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      const picked = pickFirstString(item);
      if (picked) return picked;
    }
  }

  return null;
}

function extractPredictionPayload(payload: unknown): Record<string, unknown> {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return {};
  const record = payload as Record<string, unknown>;
  const nested = record.data;
  if (nested && typeof nested === "object" && !Array.isArray(nested)) {
    return nested as Record<string, unknown>;
  }
  return record;
}

function extractChoiceContent(payload: Record<string, unknown>): string | null {
  const choices = payload.choices;
  if (!Array.isArray(choices) || choices.length === 0) return null;

  const firstChoice = choices[0];
  if (!firstChoice || typeof firstChoice !== "object" || Array.isArray(firstChoice)) return null;

  const message = (firstChoice as Record<string, unknown>).message;
  if (!message || typeof message !== "object" || Array.isArray(message)) return null;

  const content = (message as Record<string, unknown>).content;
  return pickFirstString(content);
}

async function readResponseDetails(response: Response): Promise<string> {
  const raw = await response.text();
  if (!raw) return "";

  try {
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const parts = [
      typeof parsed.message === "string" ? parsed.message : "",
      typeof parsed.error === "string" ? parsed.error : "",
      raw,
    ].filter(Boolean);
    return parts.join(" | ");
  } catch {
    return raw;
  }
}

async function sleep(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function runWaveSpeedPrediction({
  apiKey,
  modelId,
  input,
  timeoutMs,
  pollIntervalMs,
}: {
  apiKey: string;
  modelId: string;
  input: Record<string, unknown>;
  timeoutMs: number;
  pollIntervalMs: number;
}): Promise<Record<string, unknown>> {
  const normalizedModel = normalizeModelId(modelId);
  if (!normalizedModel) throw new Error("WaveSpeed model id is missing");

  const submitRes = await fetch(`https://api.wavespeed.ai/api/v3/${normalizedModel}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!submitRes.ok) {
    const details = await readResponseDetails(submitRes);
    throw new WaveSpeedApiError("WaveSpeed request failed", submitRes.status, details);
  }

  const submitPayload = extractPredictionPayload(await submitRes.json());
  const submitStatus = String(submitPayload.status || "").toLowerCase();
  const taskId = typeof submitPayload.id === "string" ? submitPayload.id : "";

  if (submitStatus === "completed") {
    return submitPayload;
  }

  if (submitStatus === "failed" || submitStatus === "canceled") {
    const errorText = pickFirstString(submitPayload.error) || "Unknown WaveSpeed error";
    throw new Error(`WaveSpeed request failed: ${errorText}`);
  }

  if (!taskId) {
    return submitPayload;
  }

  const resultUrl = `https://api.wavespeed.ai/api/v3/predictions/${encodeURIComponent(taskId)}/result`;
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    await sleep(pollIntervalMs);

    const pollRes = await fetch(resultUrl, {
      method: "GET",
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    if (!pollRes.ok) {
      if ([404, 409, 425, 500, 502, 503, 504].includes(pollRes.status)) {
        continue;
      }
      const details = await readResponseDetails(pollRes);
      throw new WaveSpeedApiError("WaveSpeed polling failed", pollRes.status, details);
    }

    const pollPayload = extractPredictionPayload(await pollRes.json());
    const pollStatus = String(pollPayload.status || "").toLowerCase();

    if (pollStatus === "completed") {
      return pollPayload;
    }

    if (pollStatus === "failed" || pollStatus === "canceled") {
      const errorText = pickFirstString(pollPayload.error) || "Unknown WaveSpeed error";
      throw new Error(`WaveSpeed request failed: ${errorText}`);
    }

    if (!pollStatus) {
      const fallbackOutput = pickFirstString(
        pollPayload.outputs ?? pollPayload.output ?? pollPayload.image_url ?? pollPayload.image ?? pollPayload.text ?? pollPayload.result,
      );
      if (fallbackOutput) {
        return pollPayload;
      }
    }
  }

  throw new Error(`WaveSpeed request timed out after ${timeoutMs}ms`);
}

function extractScriptText(prediction: Record<string, unknown>): string {
  const candidates: string[] = [];
  const pushCandidate = (value: unknown) => {
    const picked = pickFirstString(value);
    if (picked) candidates.push(picked);
  };

  pushCandidate(prediction.text);
  pushCandidate(prediction.output_text);
  pushCandidate(prediction.response);
  pushCandidate(prediction.result);
  pushCandidate(extractChoiceContent(prediction));
  pushCandidate(prediction.outputs);
  pushCandidate(prediction.output);

  const script = candidates.find((candidate) => {
    const normalized = candidate.trim();
    return normalized.length > 0 && !/^https?:\/\//i.test(normalized) && !normalized.startsWith("data:");
  });

  if (!script) throw new Error("WaveSpeed did not return script text");
  return script.trim().replace(/^["']|["']$/g, "");
}

function extractImageSource(prediction: Record<string, unknown>): string {
  const candidates: string[] = [];
  const pushCandidate = (value: unknown) => {
    const picked = pickFirstString(value);
    if (picked) candidates.push(picked);
  };

  pushCandidate(prediction.image_url);
  pushCandidate(prediction.image);
  pushCandidate(prediction.output);
  pushCandidate(prediction.outputs);

  const imageSource = candidates.find((candidate) => {
    return /^https?:\/\//i.test(candidate) || candidate.startsWith("data:image/");
  });

  if (!imageSource) {
    throw new Error("WaveSpeed did not return an image URL");
  }

  return imageSource;
}

async function downloadGeneratedImage(source: string): Promise<{ bytes: Uint8Array; contentType: string }> {
  if (source.startsWith("data:image/")) {
    const match = source.match(/^data:([^;,]+);base64,(.*)$/);
    if (!match) throw new Error("Invalid image data URL from WaveSpeed");

    const contentType = match[1] || "image/png";
    const base64 = match[2].replace(/\s+/g, "");
    const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
    return { bytes, contentType };
  }

  const res = await fetch(source);
  if (!res.ok) {
    throw new Error(`Failed to download generated image: ${res.status} ${res.statusText}`);
  }

  return {
    bytes: new Uint8Array(await res.arrayBuffer()),
    contentType: res.headers.get("content-type") || "image/png",
  };
}

function extensionFromContentType(contentType: string): string {
  const normalized = contentType.toLowerCase();
  if (normalized.includes("jpeg") || normalized.includes("jpg")) return "jpg";
  if (normalized.includes("webp")) return "webp";
  if (normalized.includes("png")) return "png";
  return "png";
}

// ─── PROMPT BUILDERS ────────────────────────────────────────────────────────

function buildIntroImagePrompt(
  arText: string,
  ar: "16:9" | "9:16",
  appName: string,
  primaryColor: string,
  secondaryColor: string,
  hasLogo: boolean,
): string {
  const logoInstruction = hasLogo
    ? `The FIRST reference image is the app's official logo — reproduce every detail of it pixel-perfectly. Place it as the visual centerpiece: large, centered, elevated on a glowing pedestal of light. Do NOT redesign, simplify, or alter it in any way.`
    : `Render the app name "${appName}" in bold, ultra-modern editorial typography — oversized, centered, with a chromatic shimmer effect.`;

  const compositionHint = ar === "9:16"
    ? "vertical stack: logo at the top third, tagline in the middle, atmospheric gradient filling the lower third"
    : "cinematic wide composition: logo center-left, atmospheric depth extending right with light rays converging toward it";

  return `
You are a world-class motion graphics art director creating a premium app promo intro frame.

SUBJECT: App intro reveal for "${appName}"
ASPECT RATIO: Fill the ENTIRE ${arText} canvas edge-to-edge — zero letterboxing, zero padding.

LOGO / BRAND:
${logoInstruction}

VISUAL STYLE:
- Aesthetic: Luxury tech — think Apple keynote meets A24 film title sequence
- Lighting: Single dramatic spotlight from above-left casting a long soft shadow beneath the logo; rim-lit edges glowing in ${secondaryColor}; volumetric god-rays piercing through atmospheric haze
- Background: Deep obsidian-to-midnight gradient, not plain black — subtle iridescent sheen like polished carbon fiber, with microscopic hexagonal texture barely visible at 10% opacity
- Atmosphere: Thin wisps of luminous smoke at the base of the logo; floating micro-particles catching the light like suspended stardust
- Color accents: Use ${primaryColor} as the dominant glow source and ${secondaryColor} for thin neon-outline reflections on surfaces
- Depth: Strong foreground-to-background depth — soft bokeh circles of light in the background, sharp crisp logo in the foreground
- Typography (if app name shown): Use a modern geometric sans-serif, extra-bold weight, with a subtle gradient fill matching ${primaryColor} → ${secondaryColor}

COMPOSITION: ${compositionHint}

QUALITY: 8K render quality. Photorealistic materials. No cartoonish or flat elements. No generic stock-photo backgrounds. No people or faces.
`.trim();
}

function buildFeatureImagePrompt(
  arText: string,
  ar: "16:9" | "9:16",
  featureTitle: string,
  featureDescription: string,
  primaryColor: string,
  secondaryColor: string,
  hasLogo: boolean,
  screenshotCount: number
): string {
  const logoInstruction = hasLogo
    ? `The FIRST reference image is the app logo — if shown, reproduce it exactly without any alteration. Place it subtly in the upper corner at small scale as a brand watermark.`
    : "";

  const screenshotInstruction = screenshotCount > 0
    ? `
SCREENSHOTS (CRITICAL — THIS IS THE MOST IMPORTANT INSTRUCTION):
The ${hasLogo ? "remaining" : ""} reference image(s) are REAL app screenshots. You MUST:
1. Place each screenshot INSIDE a sleek, ultra-thin-bezeled smartphone mockup (matte black aluminum chassis, mirror-polished sides, realistic screen reflection with a subtle catchlight in the top-left corner)
2. Reproduce the screenshot UI pixel-for-pixel inside the device — do NOT invent, blur, or replace any UI elements
3. Arrange ${screenshotCount} device(s) in a dynamic ${screenshotCount > 1 ? "floating group with slight rotation differentials (-8° to +8°) and staggered depth" : "angled 15° perspective tilt with a long shadow beneath"}
4. Add a soft ${primaryColor} glow bleeding from the screen edge onto surrounding surfaces (screen-spill lighting effect)
`.trim()
    : `Show a premium floating smartphone mockup with a beautifully designed abstract UI hinting at the feature, rendered in ${primaryColor} and ${secondaryColor} tones.`;

  const compositionHint = ar === "9:16"
    ? "Device(s) occupy the center 70% of the frame. Feature title text is anchored at the top 20% in large bold type. Atmospheric background fills top and bottom."
    : "Device(s) positioned right-of-center at 60% width. Left side contains the feature title and a 2-line description in a glowing card. Wide cinematic depth.";

  return `
You are a world-class app marketing art director crafting a premium feature showcase frame.

FEATURE: "${featureTitle}"
DESCRIPTION: ${featureDescription}
ASPECT RATIO: Fill the ENTIRE ${arText} canvas edge-to-edge — zero letterboxing.

${logoInstruction}

${screenshotInstruction}

VISUAL STYLE:
- Aesthetic: Premium product photography meets sci-fi holographic UI — think Samsung Galaxy campaign or Google Pixel launch video
- Lighting: Three-point studio lighting: key light (warm ${primaryColor} tinted) from upper-left, fill light (cool ${secondaryColor} tinted) from lower-right, backlight creating a dramatic rim on device edges
- Background: Dark gradient environment — deep charcoal to near-black, with a subtle radial bloom of ${primaryColor} at 15% opacity behind the devices, suggesting a glowing stage
- Surface: Devices hover above a glass floor with a faint photorealistic reflection fading into darkness below
- Atmosphere: Sparse floating geometric micro-elements (tiny rings, dots, hairline grid) in ${secondaryColor} at 20% opacity — adds tech sophistication without clutter
- Feature title: Rendered in crisp white or light ${primaryColor} — large, bold, sans-serif, with a thin underline accent bar in ${secondaryColor}
- Depth of field: Foreground device sharp; background particles soft bokeh

COMPOSITION: ${compositionHint}

QUALITY: 8K render, photorealistic device materials, cinematic color grading, no watermarks, no UI chrome outside the device screen.
`.trim();
}

function buildOutroImagePrompt(
  arText: string,
  ar: "16:9" | "9:16",
  appName: string,
  outroText: string,
  primaryColor: string,
  secondaryColor: string,
  hasLogo: boolean,
  showGooglePlay: boolean,
  showAppStore: boolean
): string {
  const logoInstruction = hasLogo
    ? `The reference image is the app logo — reproduce it with absolute precision. Feature it prominently at the top-center or center, large enough to be the hero element. No alterations.`
    : `Render "${appName}" in a massive, commanding typographic treatment — extra-bold, centered, with a metallic ${primaryColor} gradient fill and a ${secondaryColor} outer glow.`;

  const badgeInstruction = [
    showGooglePlay && "an official Google Play Store badge (black badge, white text, Play triangle icon)",
    showAppStore && "an official Apple App Store badge (black badge, white text, Apple logo)",
  ]
    .filter(Boolean)
    .join(" and ");

  const badgeSection = badgeInstruction
    ? `STORE BADGES: Place ${badgeInstruction} side-by-side at the bottom-center. Badges should be crisp, correctly proportioned, clearly legible — not stretched or distorted. Add a very subtle glow halo behind the badge row.`
    : "";

  const compositionHint = ar === "9:16"
    ? "Vertical hierarchy: logo at top-center (30% height), tagline large in the middle (50% height), store badges anchored at the bottom (20% height). Generous breathing room between sections."
    : "Centered composition: logo at absolute center, tagline below it, badges beneath tagline. Background light burst radiates outward from behind the logo.";

  return `
You are a world-class motion graphics director creating the climactic outro frame of an app promo video.

APP: "${appName}"
TAGLINE: "${outroText || "Download Now"}"
ASPECT RATIO: Fill the ENTIRE ${arText} canvas — no letterboxing, no padding.

LOGO / HERO:
${logoInstruction}

TAGLINE:
Render "${outroText || "Download Now"}" in a bold, editorial typeface — large, confident, centered beneath the logo. Apply a brilliant white-to-${primaryColor} gradient fill. Optionally add a very subtle motion-blur streak effect suggesting momentum and energy.

${badgeSection}

VISUAL STYLE:
- Aesthetic: Climactic product reveal — the emotional peak of the promo. Think: end card of an iPhone launch video or a Netflix series finale title card
- Lighting: An explosive radial burst of pure white light emanating from directly behind the logo, fading to deep dark edges. Like a sunrise in outer space.
- Color drama: ${primaryColor} and ${secondaryColor} used as vivid chromatic lens flares cutting diagonally across the frame — sharp and electric
- Background: Near-black deep space gradient with faint nebula-like wisps in ${primaryColor} at 8% opacity, massive depth
- Foreground atmosphere: Light dust particles caught in the burst, floating upward slowly — golden and luminous
- Energy: The composition should feel like an arrival, a reveal, a moment of triumph — something worth downloading

COMPOSITION: ${compositionHint}

QUALITY: Ultra-high-end cinematic render. Photorealistic materials. Aspirational, emotional, premium. No generic stock backgrounds. No people.
`.trim();
}

function buildIntroScriptPrompt(appName: string): string {
  return `You are an award-winning app trailer voice-over writer. 
Write a single punchy cinematic narration line (maximum 12 words) that introduces the app "${appName}". 
The line should feel like an epic movie trailer — bold, intriguing, aspirational. 
It should make the audience lean forward. 
Return ONLY the narration line. No quotes, no explanation, no punctuation at the end unless it's an ellipsis or em dash.`;
}

function buildFeatureScriptPrompt(featureTitle: string, featureDescription: string): string {
  return `You are an award-winning app trailer voice-over writer.
Write a single cinematic narration line (maximum 14 words) that showcases this app feature.
Feature name: ${featureTitle}
Feature details: ${featureDescription}
The line should highlight the USER BENEFIT, not just describe the feature. Make it visceral and compelling — like a Jony Ive product description meets a Super Bowl ad.
Return ONLY the narration line. No quotes, no explanation.`;
}

function buildOutroScriptPrompt(appName: string, outroText: string): string {
  return `You are an award-winning app trailer voice-over writer.
Write a single powerful closing narration line (maximum 10 words) for the app "${appName}".
Closing message hint: "${outroText || "Get it now"}"
This is the final line of the promo — it should land with weight, inspire action, and leave the viewer with a strong emotional impression. 
Think: the last line of an Apple keynote. Confident. Short. Unforgettable.
Return ONLY the narration line. No quotes, no explanation.`;
}

// ─── MAIN HANDLER ────────────────────────────────────────────────────────────

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const WAVESPEED_API_KEY = Deno.env.get("WAVESPEED_API_KEY");
    const WAVESPEED_SCRIPT_MODEL = Deno.env.get("WAVESPEED_SCRIPT_MODEL")?.trim() || "google/gemini-2.5-flash";
    const WAVESPEED_IMAGE_MODEL = Deno.env.get("WAVESPEED_IMAGE_MODEL")?.trim() || "wavespeed-ai/z-image/turbo";
    const WAVESPEED_FEATURE_IMAGE_MODEL = Deno.env.get("WAVESPEED_FEATURE_IMAGE_MODEL")?.trim() || WAVESPEED_IMAGE_MODEL;
    const WAVESPEED_IMAGE_SOURCE_FIELD = Deno.env.get("WAVESPEED_IMAGE_SOURCE_FIELD")?.trim() || "";
    const WAVESPEED_TIMEOUT_MS = parsePositiveIntEnv("WAVESPEED_TIMEOUT_MS", 300000);
    const WAVESPEED_POLL_INTERVAL_MS = parsePositiveIntEnv("WAVESPEED_POLL_INTERVAL_MS", 1500);

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    if (!WAVESPEED_API_KEY) throw new Error("WAVESPEED_API_KEY missing");

    const authHeader = req.headers.get("Authorization") ?? "";
    const userClient = createClient(SUPABASE_URL, Deno.env.get("SUPABASE_ANON_KEY")!, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData } = await userClient.auth.getUser();
    const user = userData.user;
    if (!user) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const admin = createClient(SUPABASE_URL, SERVICE_KEY);
    const { projectId, type, featureId, sortOrder, aspectRatio } = await req.json();
    const ar: "16:9" | "9:16" = aspectRatio === "9:16" ? "9:16" : "16:9";
    const arText = ar === "9:16" ? "9:16 vertical portrait (1080×1920, mobile/reels format)" : "16:9 horizontal widescreen (1920×1080)";

    const { data: project } = await admin.from("projects").select("*").eq("id", projectId).eq("user_id", user.id).single();
    if (!project) throw new Error("Project not found");

    let scriptPrompt = "";
    let imagePrompt = "";
    const referenceImages: string[] = [];

    const hasLogo = typeof project.logo_url === "string" && project.logo_url.trim().length > 0;

    // Keep logo first in order, so prompts that depend on ordering remain accurate.
    if (hasLogo) {
      referenceImages.push(project.logo_url.trim());
    }

    if (type === "intro") {
      scriptPrompt = buildIntroScriptPrompt(project.name);
      imagePrompt = buildIntroImagePrompt(
        arText, ar, project.name,
        project.primary_color, project.secondary_color,
        hasLogo
      );
    } else if (type === "feature" && featureId) {
      const { data: feature } = await admin
        .from("features")
        .select("*, feature_screenshots(screenshot_url, sort_order)")
        .eq("id", featureId)
        .single();
      if (!feature) throw new Error("Feature not found");

      const rawShots = Array.isArray(feature.feature_screenshots)
        ? feature.feature_screenshots as Array<{ screenshot_url: unknown; sort_order: unknown }>
        : [];

      const shots = [...rawShots].sort((a, b) => {
        const left = typeof a.sort_order === "number" ? a.sort_order : 0;
        const right = typeof b.sort_order === "number" ? b.sort_order : 0;
        return left - right;
      });

      for (const shot of shots) {
        if (typeof shot.screenshot_url === "string" && shot.screenshot_url.trim()) {
          referenceImages.push(shot.screenshot_url.trim());
        }
      }

      scriptPrompt = buildFeatureScriptPrompt(feature.title, feature.description);
      imagePrompt = buildFeatureImagePrompt(
        arText, ar, feature.title, feature.description,
        project.primary_color, project.secondary_color,
        hasLogo, shots.length
      );
    } else if (type === "outro") {
      scriptPrompt = buildOutroScriptPrompt(project.name, project.outro_text);
      imagePrompt = buildOutroImagePrompt(
        arText, ar, project.name, project.outro_text,
        project.primary_color, project.secondary_color,
        hasLogo,
        !!project.show_google_play,
        !!project.show_app_store
      );
    } else {
      throw new Error("Invalid slide type");
    }

    // 1) Script generation via WaveSpeed Any LLM
    const scriptPrediction = await runWaveSpeedPrediction({
      apiKey: WAVESPEED_API_KEY,
      modelId: "wavespeed-ai/any-llm",
      input: {
        prompt: scriptPrompt,
        model: WAVESPEED_SCRIPT_MODEL,
        priority: "latency",
        temperature: 0.7,
        max_tokens: 80,
        enable_sync_mode: false,
      },
      timeoutMs: WAVESPEED_TIMEOUT_MS,
      pollIntervalMs: WAVESPEED_POLL_INTERVAL_MS,
    });
    const script = extractScriptText(scriptPrediction);

    // 2) Image generation via WaveSpeed model (feature model falls back to base model)
    const preferredImageModel = type === "feature" ? WAVESPEED_FEATURE_IMAGE_MODEL : WAVESPEED_IMAGE_MODEL;
    const fallbackImageModel = WAVESPEED_IMAGE_MODEL;

    const imageInput: Record<string, unknown> = {
      prompt: imagePrompt,
      size: ar,
      enable_sync_mode: false,
    };

    if (referenceImages.length > 0) {
      const sourceImage = type === "feature" && hasLogo && referenceImages.length > 1
        ? referenceImages[1]
        : referenceImages[0];

      if (WAVESPEED_IMAGE_SOURCE_FIELD) {
        imageInput[WAVESPEED_IMAGE_SOURCE_FIELD] = WAVESPEED_IMAGE_SOURCE_FIELD.toLowerCase().includes("images")
          ? referenceImages
          : sourceImage;
      } else {
        imageInput.images = referenceImages;
      }
    }

    const canFallbackToBaseModel = type === "feature" && preferredImageModel !== fallbackImageModel;

    let imagePrediction: Record<string, unknown>;
    try {
      imagePrediction = await runWaveSpeedPrediction({
        apiKey: WAVESPEED_API_KEY,
        modelId: preferredImageModel,
        input: imageInput,
        timeoutMs: WAVESPEED_TIMEOUT_MS,
        pollIntervalMs: WAVESPEED_POLL_INTERVAL_MS,
      });
    } catch (error) {
      if (!canFallbackToBaseModel) throw error;
      console.warn("Feature image model failed; retrying with default image model", error);
      imagePrediction = await runWaveSpeedPrediction({
        apiKey: WAVESPEED_API_KEY,
        modelId: fallbackImageModel,
        input: imageInput,
        timeoutMs: WAVESPEED_TIMEOUT_MS,
        pollIntervalMs: WAVESPEED_POLL_INTERVAL_MS,
      });
    }

    let generatedImageSource: string;
    try {
      generatedImageSource = extractImageSource(imagePrediction);
    } catch (error) {
      if (!canFallbackToBaseModel) throw error;
      console.warn("Feature image response was missing output; retrying with default image model", error);
      imagePrediction = await runWaveSpeedPrediction({
        apiKey: WAVESPEED_API_KEY,
        modelId: fallbackImageModel,
        input: imageInput,
        timeoutMs: WAVESPEED_TIMEOUT_MS,
        pollIntervalMs: WAVESPEED_POLL_INTERVAL_MS,
      });
      generatedImageSource = extractImageSource(imagePrediction);
    }
    const { bytes, contentType } = await downloadGeneratedImage(generatedImageSource);
    const extension = extensionFromContentType(contentType);
    const path = `${user.id}/${projectId}/${type}-${featureId || "main"}-${Date.now()}.${extension}`;

    const { error: upErr } = await admin.storage.from("generated-slides").upload(path, bytes, {
      contentType,
      upsert: true,
    });
    if (upErr) throw upErr;
    const { data: { publicUrl } } = admin.storage.from("generated-slides").getPublicUrl(path);

    if (type === "feature" && featureId) {
      await admin.from("generated_images").delete().eq("project_id", projectId).eq("type", "feature").eq("feature_id", featureId);
    } else {
      await admin.from("generated_images").delete().eq("project_id", projectId).eq("type", type).is("feature_id", null);
    }

    const { data: row, error: insErr } = await admin.from("generated_images").insert({
      project_id: projectId,
      type,
      feature_id: featureId || null,
      image_url: publicUrl,
      script,
      sort_order: sortOrder ?? 0,
    }).select().single();
    if (insErr) throw insErr;

    return new Response(JSON.stringify({ image_url: publicUrl, script, id: row.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-slide-image error", e);

    if (e instanceof WaveSpeedApiError) {
      if (e.status === 429) {
        return new Response(JSON.stringify({ error: "WaveSpeed rate limit reached. Try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      if (e.status === 402) {
        return new Response(JSON.stringify({ error: "WaveSpeed credits exhausted. Add credits to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      if (e.status === 401 || e.status === 403) {
        return new Response(JSON.stringify({ error: "WaveSpeed authentication failed. Check WAVESPEED_API_KEY." }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});