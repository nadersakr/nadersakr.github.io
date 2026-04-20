import { u as C, r as a, j as e, L as f } from "./index-EyA4U2tn.js";
import { L as i, B as p } from "./loader-YZUiUiwx.js";
import { u as k } from "./useAuth-BrlpBzXi.js";
import { c as j, s as c } from "./client-DZDrzSlV.js";
import { b as L } from "./logo-uuobCn-8.js";
import { P as g } from "./plus-Dz-D31Co.js";
import { F as P } from "./film-DuJqO0Rm.js";

/* ─── Icon definitions ────────────────────────────────────────────────────── */

const _creditCard = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
];
const S = j("credit-card", _creditCard);

const _logOut = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
];
const z = j("log-out", _logOut);

const _folder = [
  ["path", { d: "M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v2H3z", key: "folder-1" }],
  ["path", { d: "M3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "folder-2" }],
];
const b = j("folder", _folder);

const _image = [
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "image-1" }],
  ["circle", { cx: "8.5", cy: "8.5", r: "1.5", key: "image-2" }],
  ["path", { d: "m21 15-5-5L5 21", key: "image-3" }],
];
const y = j("image", _image);

const _compass = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "compass-1" }],
  ["polygon", { points: "16 8 8 12 12 16 16 8", key: "compass-2" }],
];
const h = j("compass", _compass);

const _sparkles = [
  ["path", { d: "M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8Z", key: "sparkles-1" }],
];
const n = j("sparkles", _sparkles);

const _globe = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "globe-1" }],
  ["path", { d: "M2 12h20", key: "globe-2" }],
  ["path", { d: "M12 2a15.3 15.3 0 0 1 0 20", key: "globe-3" }],
  ["path", { d: "M12 2a15.3 15.3 0 0 0 0 20", key: "globe-4" }],
];
const r = j("globe", _globe);

const _msg = [
  ["path", { d: "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z", key: "msg-1" }],
];
const m = j("message-circle", _msg);

const _clipboard = [
  ["rect", { x: "9", y: "2", width: "6", height: "4", rx: "1", key: "clip-1" }],
  ["path", { d: "M9 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2", key: "clip-2" }],
  ["path", { d: "M9 12h6", key: "clip-3" }],
  ["path", { d: "M9 16h6", key: "clip-4" }],
];
const v = j("clipboard", _clipboard);

const _user = [
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "user-1" }],
  ["circle", { cx: "12", cy: "8", r: "5", key: "user-2" }],
];
const x = j("user", _user);

const _chevronRight = [["path", { d: "m9 18 6-6-6-6", key: "chevron-1" }]];
const E = j("chevron-right", _chevronRight);

const _uploadCloud = [
  ["path", { d: "M12 16V4", key: "upload-1" }],
  ["path", { d: "m7 9 5-5 5 5", key: "upload-2" }],
  ["path", { d: "M20 17.5a4.5 4.5 0 0 1-1 8.9H6a4 4 0 1 1 .9-7.9", key: "upload-3" }],
];
const B = j("upload-cloud", _uploadCloud);

/* ─── Nav items ───────────────────────────────────────────────────────────── */

const NAV_ITEMS = [
  { key: "projects", label: "Projects", icon: b },
  { key: "assets",   label: "Assets",   icon: y },
  { key: "discover", label: "Discover", icon: h },
];

/* ─── Design tokens (inline) ─────────────────────────────────────────────── */

const TOKEN = {
  navy:        "#0f1e45",
  blue:        "#1d3d8b",
  blueMid:     "#2952b3",
  blueLight:   "#4f72d4",
  bluePale:    "#eef2fc",
  blueGhost:   "#f0f4ff",
  white:       "#ffffff",
  surface:     "#f5f8fd",
  border:      "#e4e9f5",
  borderHover: "#c7d4f0",
  textPrimary:   "#0d1832",
  textSecondary: "#5a6887",
  textMuted:     "#9ba8c4",
  radiusSm: 8,
  radiusMd: 12,
  radiusLg: 16,
  radiusXl: 20,
};

const STATUS_STYLE = {
  completed:   { bg: "#ecfdf5", color: "#059669", label: "Completed"   },
  in_progress: { bg: "#fffbeb", color: "#d97706", label: "In Progress" },
  draft:       { bg: "#f5f3ff", color: "#7c3aed", label: "Draft"       },
};

/* ─── Helpers ─────────────────────────────────────────────────────────────── */

function maskEmail(email) {
  if (!email) return "";
  const [local, domain] = email.split("@");
  if (!domain) return email;
  if (local.length <= 2) return `${local[0] || ""}***@${domain}`;
  return `${local.slice(0, 2)}****@${domain}`;
}

function fallbackAvatar(name, email) {
  const label = name || (email ? email.split("@")[0] : "User");
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(label)}&background=E2E8F0&color=1E293B&size=128&bold=true&format=png`;
}

function extractProfile(user) {
  const meta = user?.user_metadata ?? {};
  const name =
    meta.full_name ||
    meta.name ||
    meta.user_name ||
    meta.preferred_username ||
    (user?.email ? user.email.split("@")[0] : "") ||
    "User";
  const avatar = meta.avatar_url || meta.picture || meta.photo_url || meta.photoURL || "";
  return { name, avatar, email: user?.email || "", id: user?.id || "" };
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "0 KB";
  const mb = bytes / 1024 / 1024;
  if (mb >= 1) return `${mb.toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

/** Gradient avatar initials — used when no photo URL is available */
function InitialsAvatar({ name, size = 40 }) {
  const initials = name
    ? name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
    : "U";
  return e.jsx("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: "linear-gradient(135deg, #4f72d4, #1d3d8b)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: size * 0.38,
      fontWeight: 600,
      flexShrink: 0,
      fontFamily: "inherit",
    },
    children: initials,
  });
}

/** Single project card with hover lift */
function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = a.useState(false);
  const st = STATUS_STYLE[project.status] || STATUS_STYLE.draft;
  const dateStr = new Date(project.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return e.jsxs(f, {
    to: "/projects/$projectId",
    params: { projectId: project.id },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: "block",
      background: hovered ? "#fafbff" : TOKEN.white,
      borderRadius: TOKEN.radiusLg,
      border: `1.5px solid ${hovered ? TOKEN.borderHover : TOKEN.border}`,
      padding: "20px",
      textDecoration: "none",
      transition: "all 0.18s ease",
      transform: hovered ? "translateY(-2px)" : "none",
      boxShadow: hovered ? "0 8px 24px rgba(29,61,139,0.08)" : "none",
    },
    children: [
      e.jsxs("div", {
        style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 },
        children: [
          e.jsx("div", {
            style: {
              width: 44,
              height: 44,
              borderRadius: 10,
              background: project.primary_color,
              flexShrink: 0,
              boxShadow: `0 4px 12px ${project.primary_color}40`,
            },
          }),
          e.jsx("span", {
            style: {
              fontSize: 11,
              fontWeight: 500,
              padding: "3px 9px",
              borderRadius: 20,
              background: st.bg,
              color: st.color,
            },
            children: st.label,
          }),
        ],
      }),
      e.jsx("h3", {
        style: { fontSize: 15, fontWeight: 600, color: TOKEN.textPrimary, marginBottom: 4 },
        children: project.name,
      }),
      e.jsx("p", {
        style: { fontSize: 12, color: TOKEN.textMuted },
        children: dateStr,
      }),
    ],
  });
}

/** Menu item row inside the account popover */
function MenuRow({ icon: Icon, label, chevron }) {
  const [hovered, setHovered] = a.useState(false);
  return e.jsxs("button", {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "9px 10px",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 400,
      color: "rgba(226,232,240,0.9)",
      background: hovered ? "rgba(255,255,255,0.07)" : "transparent",
      border: "none",
      cursor: "pointer",
      transition: "background 0.12s",
    },
    children: [
      e.jsx(Icon, { className: "h-4 w-4" }),
      e.jsx("span", { children: label }),
      chevron
        ? e.jsx(E, { style: { marginLeft: "auto", opacity: 0.5, width: 14, height: 14 } })
        : null,
    ],
  });
}

/* ─── Main dashboard component ───────────────────────────────────────────── */

export function component() {
  const { user: user, loading: authLoading, signOut: signOut } = k();
  const navigate = C();

  /* state */
  const [projects,    setProjects]    = a.useState([]);
  const [credits,     setCredits]     = a.useState(0);
  const [dataLoading, setDataLoading] = a.useState(true);
  const [creating,    setCreating]    = a.useState(false);
  const [activeTab,   setActiveTab]   = a.useState("projects");
  const [assetFiles,  setAssetFiles]  = a.useState([]);
  const [menuOpen,    setMenuOpen]    = a.useState(false);

  const menuRef    = a.useRef(null);
  const profile    = extractProfile(user);
  const avatarFb   = fallbackAvatar(profile.name, profile.email);
  const [avatarSrc, setAvatarSrc] = a.useState(profile.avatar || avatarFb);

  /* redirect if logged out */
  a.useEffect(() => {
    if (!authLoading && !user) navigate({ to: "/login" });
  }, [authLoading, user, navigate]);

  /* fetch projects + credits */
  a.useEffect(() => {
    if (!user) return;
    async function load() {
      const [projRes, credRes] = await Promise.all([
        c.from("projects").select("*").order("created_at", { ascending: false }),
        c.from("credits").select("balance").single(),
      ]);
      if (projRes.data) setProjects(projRes.data);
      if (credRes.data) setCredits(credRes.data.balance);
      setDataLoading(false);
    }
    load();
  }, [user]);

  /* sync avatar when user changes */
  a.useEffect(() => {
    const p = extractProfile(user);
    setAvatarSrc(p.avatar || fallbackAvatar(p.name, p.email));
  }, [user]);

  /* close menu on outside click */
  a.useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  /* create new project */
  const handleNewProject = async () => {
    if (!user || creating) return;
    setCreating(true);
    const { data, error } = await c
      .from("projects")
      .insert({ user_id: user.id, name: "Untitled Project" })
      .select()
      .single();
    setCreating(false);
    if (data) navigate({ to: "/projects/$projectId", params: { projectId: data.id } });
    if (error) console.error("Failed creating project:", error.message);
  };

  const handleFileChange = (ev) => {
    setAssetFiles(Array.from(ev.target.files || []));
  };

  const handleAvatarError = () => {
    const fb = fallbackAvatar(profile.name, profile.email);
    if (avatarSrc !== fb) setAvatarSrc(fb);
  };

  /* ── Loading screen ──────────────────────────────────────────────────── */

  if (authLoading || dataLoading) {
    return e.jsx("div", {
      style: {
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: TOKEN.surface,
      },
      children: e.jsx(i, { size: 44, label: "Loading dashboard" }),
    });
  }

  if (!user) return null;

  /* ── Tab content ─────────────────────────────────────────────────────── */

  const renderProjects = () => {
    if (projects.length === 0) {
      return e.jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: TOKEN.radiusLg,
          border: `1.5px dashed ${TOKEN.border}`,
          background: TOKEN.white,
          padding: "72px 24px",
          textAlign: "center",
        },
        children: [
          e.jsx("div", {
            style: {
              width: 72,
              height: 72,
              borderRadius: 20,
              background: TOKEN.bluePale,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
              color: TOKEN.blue,
            },
            children: e.jsx(P, { className: "h-9 w-9" }),
          }),
          e.jsx("h3", {
            style: { fontSize: 20, fontWeight: 700, color: TOKEN.textPrimary, marginBottom: 8 },
            children: "No projects yet",
          }),
          e.jsx("p", {
            style: {
              fontSize: 14,
              color: TOKEN.textSecondary,
              maxWidth: 320,
              lineHeight: 1.65,
              marginBottom: 24,
            },
            children:
              "Create your first project to start generating stunning promo videos for your app.",
          }),
          e.jsxs(p, {
            onClick: handleNewProject,
            disabled: creating,
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: TOKEN.blue,
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              border: "none",
              cursor: creating ? "not-allowed" : "pointer",
              opacity: creating ? 0.7 : 1,
            },
            children: [
              creating ? e.jsx(i, { size: 16, label: "Creating project" }) : e.jsx(g, { className: "h-4 w-4" }),
              creating ? "Creating…" : "Create First Project",
            ],
          }),
        ],
      });
    }

    return e.jsx("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 16,
      },
      children: projects.map((proj) =>
        e.jsx(ProjectCard, { project: proj }, proj.id)
      ),
    });
  };

  const renderAssets = () =>
    e.jsxs("div", {
      style: { display: "flex", flexDirection: "column", gap: 16 },
      children: [
        e.jsxs("div", {
          style: {
            borderRadius: TOKEN.radiusLg,
            border: `1.5px dashed ${TOKEN.border}`,
            background: TOKEN.white,
            padding: 32,
          },
          children: [
            e.jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
                textAlign: "center",
              },
              children: [
                e.jsx("div", {
                  style: {
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: TOKEN.bluePale,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: TOKEN.blue,
                  },
                  children: e.jsx(B, { className: "h-8 w-8" }),
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      style: { fontSize: 15, fontWeight: 600, color: TOKEN.textPrimary, marginBottom: 4 },
                      children: "Drop files here or browse",
                    }),
                    e.jsx("p", {
                      style: { fontSize: 13, color: TOKEN.textMuted },
                      children: "Screenshots, icons, and media assets",
                    }),
                  ],
                }),
                e.jsxs("label", {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: TOKEN.blueGhost,
                    color: TOKEN.blue,
                    border: `1.5px solid ${TOKEN.border}`,
                    padding: "9px 20px",
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                  },
                  children: [
                    "Choose Files",
                    e.jsx("input", {
                      type: "file",
                      multiple: true,
                      style: { display: "none" },
                      onChange: handleFileChange,
                    }),
                  ],
                }),
              ],
            }),
            assetFiles.length > 0 &&
              e.jsx("div", {
                style: { marginTop: 20, display: "flex", flexDirection: "column", gap: 8 },
                children: assetFiles.map((file) =>
                  e.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 14px",
                      borderRadius: 10,
                      background: TOKEN.surface,
                      border: `1px solid ${TOKEN.border}`,
                    },
                    children: [
                      e.jsx("span", {
                        style: { fontSize: 13, fontWeight: 500, color: TOKEN.textPrimary },
                        children: file.name,
                      }),
                      e.jsx("span", {
                        style: { fontSize: 12, color: TOKEN.textMuted },
                        children: formatBytes(file.size),
                      }),
                    ],
                  }, `${file.name}-${file.size}`)
                ),
              }),
          ],
        }),
      ],
    });

  const renderDiscover = () =>
    e.jsxs("div", {
      style: {
        borderRadius: TOKEN.radiusLg,
        border: `1.5px solid ${TOKEN.border}`,
        background: TOKEN.white,
        padding: "56px 24px",
        textAlign: "center",
      },
      children: [
        e.jsx("div", {
          style: {
            width: 72,
            height: 72,
            borderRadius: 20,
            background: TOKEN.bluePale,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: TOKEN.blue,
            margin: "0 auto 20px",
          },
          children: e.jsx(h, { className: "h-9 w-9" }),
        }),
        e.jsx("h3", {
          style: { fontSize: 20, fontWeight: 700, color: TOKEN.textPrimary, marginBottom: 8 },
          children: "Discover",
        }),
        e.jsx("p", {
          style: {
            fontSize: 14,
            color: TOKEN.textSecondary,
            maxWidth: 360,
            margin: "0 auto",
            lineHeight: 1.65,
          },
          children:
            "Explore templates, trending video styles, and curated inspiration for your next promo. Coming soon.",
        }),
      ],
    });

  const tabContent = {
    projects: renderProjects,
    assets:   renderAssets,
    discover: renderDiscover,
  };

  const tabMeta = {
    projects: { title: "Projects",  subtitle: "Create and manage your app promo videos" },
    assets:   { title: "Assets",    subtitle: "Upload screenshots and media assets" },
    discover: { title: "Discover",  subtitle: "Explore templates and inspiration" },
  };

  /* ── Render ──────────────────────────────────────────────────────────── */

  return e.jsxs("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      background: TOKEN.surface,
    },
    children: [
      /* ── Sidebar ───────────────────────────────────────────────────── */
      e.jsxs("aside", {
        style: {
          width: 76,
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: TOKEN.white,
          borderRight: `1.5px solid ${TOKEN.border}`,
          padding: "12px 0",
          gap: 4,
        },
        children: [
          /* logo */
          e.jsxs(f, {
            to: "/",
            style: {
              width: 42,
              height: 42,
              borderRadius: 12,
              // background: `linear-gradient(135deg, ${TOKEN.blueLight}, ${TOKEN.navy})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
              flexShrink: 0,
            },
            children: [
              e.jsx("img", {
                src: L,
                alt: "Appmotion",
                style: { width: 24, height: 24, objectFit: "contain" },
              }),
              e.jsx("span", { className: "sr-only", children: "Appmotion" }),
            ],
          }),

          /* divider */
          e.jsx("div", {
            style: { width: 32, height: 1, background: TOKEN.border, margin: "4px 0 8px" },
          }),

          /* nav */
          e.jsx("nav", {
            style: { width: "100%", display: "flex", flexDirection: "column", gap: 4, padding: "0 6px" },
            children: NAV_ITEMS.map(({ key, label, icon: Icon }) => {
              const active = activeTab === key;
              return e.jsxs("button", {
                onClick: () => setActiveTab(key),
                title: label,
                style: {
                  width: "100%",
                  height: 54,
                  borderRadius: 12,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  border: active ? `1.5px solid ${TOKEN.borderHover}` : "1.5px solid transparent",
                  background: active ? TOKEN.bluePale : "transparent",
                  color: active ? TOKEN.blue : TOKEN.textMuted,
                  fontSize: 10,
                  fontWeight: active ? 600 : 400,
                  transition: "all 0.15s",
                  cursor: "pointer",
                },
                children: [
                  e.jsx(Icon, { style: { width: active ? 20 : 16, height: active ? 20 : 16, transition: "all 0.15s" } }),
                  e.jsx("span", { children: label }),
                ],
              }, key);
            }),
          }),

          /* spacer */
          e.jsx("div", { style: { flex: 1 } }),

          /* account button + popover */
          e.jsxs("div", {
            ref: menuRef,
            style: { position: "relative", paddingBottom: 4 },
            children: [
              e.jsx("button", {
                onClick: () => setMenuOpen((o) => !o),
                "aria-label": "Open account menu",
                style: {
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  padding: 0,
                  border: `2px solid ${menuOpen ? TOKEN.blueLight : TOKEN.border}`,
                  background: "transparent",
                  cursor: "pointer",
                  transition: "border-color 0.15s",
                  overflow: "hidden",
                },
                children: e.jsx("img", {
                  src: avatarSrc,
                  alt: profile.name,
                  style: { width: "100%", height: "100%", objectFit: "cover" },
                  onError: handleAvatarError,
                }),
              }),

              menuOpen && e.jsxs("div", {
                style: {
                  position: "absolute",
                  bottom: "calc(100% + 10px)",
                  left: 0,
                  width: 272,
                  borderRadius: TOKEN.radiusLg,
                  background: "#1a2540",
                  color: "#f1f5f9",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: 16,
                  zIndex: 50,
                  boxShadow: "0 20px 48px rgba(0,0,0,0.32)",
                },
                children: [
                  /* profile header */
                  e.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 14,
                      paddingBottom: 14,
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    },
                    children: [
                      e.jsx("img", {
                        src: avatarSrc,
                        alt: profile.name,
                        style: { width: 46, height: 46, borderRadius: "50%", objectFit: "cover", flexShrink: 0 },
                        onError: handleAvatarError,
                      }),
                      e.jsxs("div", {
                        style: { minWidth: 0 },
                        children: [
                          e.jsx("p", {
                            style: { fontSize: 15, fontWeight: 600, marginBottom: 2 },
                            children: profile.name,
                          }),
                          e.jsx("p", {
                            style: { fontSize: 12, color: "rgba(148,163,184,0.85)" },
                            children: maskEmail(profile.email),
                          }),
                          e.jsxs("div", {
                            style: {
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 5,
                              marginTop: 6,
                              background: "rgba(255,255,255,0.08)",
                              borderRadius: 6,
                              padding: "3px 8px",
                              fontSize: 11,
                              color: "rgba(196,210,240,0.9)",
                            },
                            children: [
                              e.jsx(S, { style: { width: 13, height: 13 } }),
                              ` ${credits} credits`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),

                  /* log out */
                  e.jsxs("button", {
                    onClick: () => signOut(),
                    style: {
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "9px",
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#f8fafc",
                      background: "rgba(148,163,184,0.18)",
                      border: "none",
                      cursor: "pointer",
                      marginBottom: 14,
                      transition: "background 0.12s",
                    },
                    children: [e.jsx(z, { style: { width: 15, height: 15 } }), "Log out"],
                  }),

                  /* divider */
                  e.jsx("div", {
                    style: { height: 1, background: "rgba(148,163,184,0.2)", marginBottom: 10 },
                  }),

                  /* menu items */
                  e.jsxs("div", {
                    style: { display: "flex", flexDirection: "column", gap: 2 },
                    children: [
                      e.jsx(MenuRow, { icon: n, label: "AIGC watermark settings" }),
                      e.jsx(MenuRow, { icon: r, label: "Language", chevron: true }),
                      e.jsx(MenuRow, { icon: m, label: "Contact us" }),
                      e.jsx(MenuRow, { icon: v, label: "Platform terms & conditions" }),
                      e.jsx(MenuRow, { icon: x, label: "Account management" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),

      /* ── Main content ──────────────────────────────────────────────── */
      e.jsxs("main", {
        style: { flex: 1, minWidth: 0, padding: "40px 36px", overflowY: "auto" },
        children: [
          /* page header */
          e.jsxs("div", {
            style: {
              marginBottom: 28,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            },
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("h1", {
                    style: {
                      fontSize: 28,
                      fontWeight: 800,
                      color: TOKEN.textPrimary,
                      letterSpacing: "-0.5px",
                      lineHeight: 1.2,
                    },
                    children: tabMeta[activeTab].title,
                  }),
                  e.jsx("p", {
                    style: { marginTop: 5, fontSize: 14, color: TOKEN.textSecondary },
                    children: tabMeta[activeTab].subtitle,
                  }),
                ],
              }),

              /* header actions — only show on projects tab */
              activeTab === "projects" && e.jsxs("div", {
                style: { display: "flex", alignItems: "center", gap: 10 },
                children: [
                  e.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      background: TOKEN.white,
                      border: `1.5px solid ${TOKEN.border}`,
                      borderRadius: 10,
                      padding: "7px 14px",
                      fontSize: 13,
                      color: TOKEN.textSecondary,
                    },
                    children: [
                      e.jsx(S, { style: { width: 14, height: 14, color: TOKEN.blue } }),
                      e.jsx("span", {
                        style: { fontWeight: 700, color: TOKEN.textPrimary, marginLeft: 2 },
                        children: credits,
                      }),
                      e.jsx("span", { children: " credits" }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: handleNewProject,
                    disabled: creating,
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      background: TOKEN.blue,
                      color: "#fff",
                      padding: "9px 18px",
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: 600,
                      border: "none",
                      cursor: creating ? "not-allowed" : "pointer",
                      opacity: creating ? 0.7 : 1,
                      transition: "opacity 0.15s",
                    },
                    children: [
                      creating
                        ? e.jsx(i, { size: 16, label: "Creating project" })
                        : e.jsx(g, { className: "h-4 w-4" }),
                      creating ? "Creating…" : "New Project",
                    ],
                  }),
                ],
              }),
            ],
          }),

          /* tab body */
          tabContent[activeTab]?.(),
        ],
      }),
    ],
  });
}