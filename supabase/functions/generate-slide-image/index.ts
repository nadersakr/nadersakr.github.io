import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function urlToDataUrl(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Failed to fetch image", url, res.status);
      return null;
    }
    const contentType = res.headers.get("content-type") || "image/png";
    const buf = new Uint8Array(await res.arrayBuffer());
    let binary = "";
    const chunk = 0x8000;
    for (let i = 0; i < buf.length; i += chunk) {
      binary += String.fromCharCode(...buf.subarray(i, i + chunk));
    }
    const b64 = btoa(binary);
    return `data:${contentType};base64,${b64}`;
  } catch (e) {
    console.error("urlToDataUrl error", url, e);
    return null;
  }
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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");

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

    // Always load the logo first so it's index [0] in referenceImages
    if (project.logo_url) {
      const logoData = await urlToDataUrl(project.logo_url);
      if (logoData) referenceImages.push(logoData);
    }

    if (type === "intro") {
      scriptPrompt = buildIntroScriptPrompt(project.name);
      imagePrompt = buildIntroImagePrompt(
        arText, ar, project.name,
        project.primary_color, project.secondary_color,
        !!project.logo_url
      );
    } else if (type === "feature" && featureId) {
      const { data: feature } = await admin
        .from("features")
        .select("*, feature_screenshots(screenshot_url, sort_order)")
        .eq("id", featureId)
        .single();
      if (!feature) throw new Error("Feature not found");

      const shots = (feature.feature_screenshots || []).sort((a: any, b: any) => a.sort_order - b.sort_order);
      for (const s of shots) {
        const d = await urlToDataUrl(s.screenshot_url);
        if (d) referenceImages.push(d);
      }

      scriptPrompt = buildFeatureScriptPrompt(feature.title, feature.description);
      imagePrompt = buildFeatureImagePrompt(
        arText, ar, feature.title, feature.description,
        project.primary_color, project.secondary_color,
        !!project.logo_url, shots.length
      );
    } else if (type === "outro") {
      scriptPrompt = buildOutroScriptPrompt(project.name, project.outro_text);
      imagePrompt = buildOutroImagePrompt(
        arText, ar, project.name, project.outro_text,
        project.primary_color, project.secondary_color,
        !!project.logo_url,
        !!project.show_google_play,
        !!project.show_app_store
      );
    } else {
      throw new Error("Invalid slide type");
    }

    // 1) Script generation
    const scriptRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "user", content: scriptPrompt }],
      }),
    });
    if (scriptRes.status === 429) return new Response(JSON.stringify({ error: "Rate limit, try again in a moment." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (scriptRes.status === 402) return new Response(JSON.stringify({ error: "AI credits exhausted. Add credits to continue." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (!scriptRes.ok) throw new Error(`Script gen failed: ${await scriptRes.text()}`);
    const scriptJson = await scriptRes.json();
    const script = (scriptJson.choices?.[0]?.message?.content || "").trim().replace(/^["']|["']$/g, "");

    // 2) Image generation — multimodal with reference images
    const userContent: any[] = [{ type: "text", text: imagePrompt }];
    for (const dataUrl of referenceImages) {
      userContent.push({ type: "image_url", image_url: { url: dataUrl } });
    }

    const imgRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [{ role: "user", content: userContent }],
        modalities: ["image", "text"],
      }),
    });
    if (imgRes.status === 429) return new Response(JSON.stringify({ error: "Rate limit, try again in a moment." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (imgRes.status === 402) return new Response(JSON.stringify({ error: "AI credits exhausted. Add credits to continue." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (!imgRes.ok) throw new Error(`Image gen failed: ${await imgRes.text()}`);
    const imgJson = await imgRes.json();
    const dataUrl: string | undefined = imgJson.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    if (!dataUrl) throw new Error("No image returned");

    const base64 = dataUrl.split(",")[1];
    const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
    const path = `${user.id}/${projectId}/${type}-${featureId || "main"}-${Date.now()}.png`;
    const { error: upErr } = await admin.storage.from("generated-slides").upload(path, bytes, {
      contentType: "image/png",
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
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : String(e) }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});