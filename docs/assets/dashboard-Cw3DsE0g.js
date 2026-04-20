import { u as C, r as a, j as e, L as f } from "./index-EyA4U2tn.js";
import { L as i, B as p } from "./loader-YZUiUiwx.js";
import { u as k } from "./useAuth-BrlpBzXi.js";
import { c as j, s as c } from "./client-DZDrzSlV.js";
import { b as L } from "./logo-uuobCn-8.js";
import { P as g } from "./plus-Dz-D31Co.js";
import { F as P } from "./film-DuJqO0Rm.js";

const _ = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
];
const S = j("credit-card", _);

const I = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
];
const z = j("log-out", I);

const N = [
  ["path", { d: "M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v2H3z", key: "folder-1" }],
  ["path", { d: "M3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "folder-2" }],
];
const b = j("folder", N);

const q = [
  ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "image-1" }],
  ["circle", { cx: "8.5", cy: "8.5", r: "1.5", key: "image-2" }],
  ["path", { d: "m21 15-5-5L5 21", key: "image-3" }],
];
const y = j("image", q);

const T = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "compass-1" }],
  ["polygon", { points: "16 8 8 12 12 16 16 8", key: "compass-2" }],
];
const h = j("compass", T);

const R = [
  ["path", { d: "M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8Z", key: "sparkles-1" }],
];
const n = j("sparkles", R);

const A = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "globe-1" }],
  ["path", { d: "M2 12h20", key: "globe-2" }],
  ["path", { d: "M12 2a15.3 15.3 0 0 1 0 20", key: "globe-3" }],
  ["path", { d: "M12 2a15.3 15.3 0 0 0 0 20", key: "globe-4" }],
];
const r = j("globe", A);

const D = [
  ["path", { d: "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z", key: "msg-1" }],
];
const m = j("message-circle", D);

const w = [
  ["rect", { x: "9", y: "2", width: "6", height: "4", rx: "1", key: "clip-1" }],
  [
    "path",
    {
      d: "M9 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2",
      key: "clip-2",
    },
  ],
  ["path", { d: "M9 12h6", key: "clip-3" }],
  ["path", { d: "M9 16h6", key: "clip-4" }],
];
const v = j("clipboard", w);

const F = [
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "user-1" }],
  ["circle", { cx: "12", cy: "8", r: "5", key: "user-2" }],
];
const x = j("user", F);

const M = [["path", { d: "m9 18 6-6-6-6", key: "chevron-1" }]];
const E = j("chevron-right", M);

const O = [
  ["path", { d: "M12 16V4", key: "upload-1" }],
  ["path", { d: "m7 9 5-5 5 5", key: "upload-2" }],
  ["path", { d: "M20 17.5a4.5 4.5 0 0 1-1 8.9H6a4 4 0 1 1 .9-7.9", key: "upload-3" }],
];
const B = j("upload-cloud", O);

const V = [
  { key: "projects", label: "Projects", icon: b },
  { key: "assets", label: "Assets", icon: y },
  { key: "discover", label: "Discover", icon: h },
];

function G(t) {
  if (!t) return "";
  const o = t.split("@");
  if (o.length !== 2) return t;
  const [l, s] = o;
  if (l.length <= 2) return `${l[0] || ""}***@${s}`;
  return `${l.slice(0, 2)}****@${s}`;
}

function H(t, o) {
  const l = t || (o ? o.split("@")[0] : "User");
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(l)}&background=E2E8F0&color=1E293B&size=128&bold=true&format=png`;
}

function J(t) {
  const o = t?.user_metadata ?? {};
  const l =
    o.full_name ||
    o.name ||
    o.user_name ||
    o.preferred_username ||
    (t?.email ? t.email.split("@")[0] : "") ||
    "User";
  const s = o.avatar_url || o.picture || o.photo_url || o.photoURL || "";
  return {
    name: l,
    avatar: s,
    email: t?.email || "",
    id: t?.id || "",
  };
}

function K(t) {
  if (!Number.isFinite(t)) return "0 KB";
  const o = t / 1024 / 1024;
  if (o >= 1) return `${o.toFixed(1)} MB`;
  return `${Math.max(1, Math.round(t / 1024))} KB`;
}

function Q() {
  const { user: t, loading: o, signOut: l } = k();
  const s = C();
  const [d, u] = a.useState([]);
  const [W, U] = a.useState(0);
  const [Y, Z] = a.useState(!0);
  const [$, ee] = a.useState(!1);
  const [te, oe] = a.useState("projects");
  const [ae, ie] = a.useState([]);
  const [le, se] = a.useState(!1);
  const ce = a.useRef(null);
  const pe = J(t);
  const de = H(pe.name, pe.email);
  const [fe, ue] = a.useState(pe.avatar || de);

  a.useEffect(() => {
    !o && !t && s({ to: "/login" });
  }, [o, t, s]);

  a.useEffect(() => {
    if (!t) return;
    async function me() {
      const [_, S] = await Promise.all([
        c.from("projects").select("*").order("created_at", { ascending: !1 }),
        c.from("credits").select("balance").single(),
      ]);
      _.data && u(_.data);
      S.data && U(S.data.balance);
      Z(!1);
    }
    me();
  }, [t]);

  a.useEffect(() => {
    const _ = J(t);
    const S = H(_.name, _.email);
    ue(_.avatar || S);
  }, [t]);

  a.useEffect(() => {
    if (typeof document > "u" || !le) return;
    const _ = (S) => {
      if (ce.current && !ce.current.contains(S.target)) se(!1);
    };
    document.addEventListener("mousedown", _);
    return () => document.removeEventListener("mousedown", _);
  }, [le]);

  const ge = async () => {
    if (!t || $) return;
    ee(!0);
    const { data: _, error: S } = await c
      .from("projects")
      .insert({ user_id: t.id, name: "Untitled Project" })
      .select()
      .single();
    ee(!1);
    _ && s({ to: "/projects/$projectId", params: { projectId: _.id } });
    if (S) console.error("Failed creating project", S.message);
  };

  const he = (o) => {
    const _ = Array.from(o.target.files || []);
    ie(_);
  };

  const ve = () => {
    const _ = H(pe.name, pe.email);
    if (fe !== _) ue(_);
  };

  const be = ({ icon: o, label: _, chevron: S }) =>
    e.jsxs("button", {
      className:
        "flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-muted",
      style: {
        color: "#f8fafc",
        opacity: 0.95,
      },
      children: [
        e.jsx(o, { className: "h-4 w-4" }),
        e.jsx("span", { className: "text-sm", children: _ }),
        S ? e.jsx(E, { className: "ml-auto h-4 w-4 opacity-70" }) : null,
      ],
    });

  const _e = () => {
    if (te === "projects") {
      return e.jsxs("section", {
        children: [
          e.jsxs("div", {
            className: "mb-8 flex flex-wrap items-center justify-between gap-3",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("h1", {
                    className: "font-display text-3xl font-bold text-foreground",
                    children: "Projects",
                  }),
                  e.jsx("p", {
                    className: "mt-1 text-muted-foreground",
                    children: "Create and manage your app promo videos",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm",
                    children: [
                      e.jsx(S, { className: "h-4 w-4 text-primary" }),
                      e.jsx("span", { className: "font-medium text-foreground", children: W }),
                      e.jsx("span", { className: "text-muted-foreground", children: "credits" }),
                    ],
                  }),
                  e.jsxs(p, {
                    className: "gap-2",
                    onClick: ge,
                    disabled: $,
                    children: [
                      $
                        ? e.jsx(i, { size: 16, label: "Creating project" })
                        : e.jsx(g, { className: "h-4 w-4" }),
                      $ ? "Creating..." : "New Project",
                    ],
                  }),
                ],
              }),
            ],
          }),
          d.length === 0
            ? e.jsxs("div", {
              className:
                "flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card py-20",
              children: [
                e.jsx("div", {
                  className:
                    "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10",
                  children: e.jsx(P, { className: "h-8 w-8 text-primary" }),
                }),
                e.jsx("h3", {
                  className: "font-display text-xl font-semibold text-foreground",
                  children: "No projects yet",
                }),
                e.jsx("p", {
                  className: "mt-2 max-w-sm text-center text-sm text-muted-foreground",
                  children:
                    "Create your first project to start generating stunning promo videos for your app.",
                }),
                e.jsxs(p, {
                  className: "mt-6 gap-2",
                  onClick: ge,
                  disabled: $,
                  children: [
                    $
                      ? e.jsx(i, { size: 16, label: "Creating project" })
                      : e.jsx(g, { className: "h-4 w-4" }),
                    $ ? "Creating..." : "Create First Project",
                  ],
                }),
              ],
            })
            : e.jsx("div", {
              className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
              children: d.map((o) =>
                e.jsxs(
                  f,
                  {
                    to: "/projects/$projectId",
                    params: { projectId: o.id },
                    className:
                      "group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-start justify-between",
                        children: [
                          e.jsx("div", {
                            className: "h-12 w-12 rounded-xl border border-border",
                            style: { backgroundColor: o.primary_color },
                          }),
                          e.jsx("span", {
                            className:
                              "rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground",
                            children: o.status,
                          }),
                        ],
                      }),
                      e.jsx("h3", {
                        className: "mt-4 font-display text-lg font-semibold text-foreground",
                        children: o.name,
                      }),
                      e.jsx("p", {
                        className: "mt-1 text-xs text-muted-foreground",
                        children: new Date(o.created_at).toLocaleDateString(),
                      }),
                    ],
                  },
                  o.id,
                ),
              ),
            }),
        ],
      });
    }

    if (te === "assets") {
      return e.jsxs("section", {
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h1", {
                className: "font-display text-3xl font-bold text-foreground",
                children: "Assets",
              }),
              e.jsx("p", {
                className: "mt-1 text-muted-foreground",
                children:
                  "Upload your screenshots and media assets here. Backend processing can be added later.",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "rounded-2xl border border-dashed border-border bg-card p-6",
            children: [
              e.jsxs("label", {
                className:
                  "flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm transition-colors hover:bg-muted",
                children: [
                  e.jsx(B, { className: "h-4 w-4 text-primary" }),
                  e.jsx("span", {
                    className: "font-medium text-foreground",
                    children: "Choose files",
                  }),
                  e.jsx("input", {
                    type: "file",
                    multiple: !0,
                    className: "sr-only",
                    onChange: he,
                  }),
                ],
              }),
              e.jsx("p", {
                className: "mt-3 text-xs text-muted-foreground",
                children: "Placeholder uploader: files are selected locally only for now.",
              }),
              ae.length > 0
                ? e.jsx("div", {
                  className: "mt-4 space-y-2",
                  children: ae.map((o) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2",
                        children: [
                          e.jsx("span", {
                            className: "text-sm text-foreground",
                            children: o.name,
                          }),
                          e.jsx("span", {
                            className: "text-xs text-muted-foreground",
                            children: K(o.size),
                          }),
                        ],
                      },
                      `${o.name}-${o.size}`,
                    ),
                  ),
                })
                : null,
            ],
          }),
        ],
      });
    }

    return e.jsxs("section", {
      className: "space-y-6",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx("h1", {
              className: "font-display text-3xl font-bold text-foreground",
              children: "Discover",
            }),
            e.jsx("p", {
              className: "mt-1 text-muted-foreground",
              children: "Placeholder section for future discovery features.",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "rounded-2xl border border-border bg-card p-8",
          children: [
            e.jsx("h3", {
              className: "font-display text-xl font-semibold text-foreground",
              children: "Coming soon",
            }),
            e.jsx("p", {
              className: "mt-2 text-sm text-muted-foreground",
              children: "You can continue building Discover content here later.",
            }),
          ],
        }),
      ],
    });
  };

  return o || Y
    ? e.jsx("div", {
      className: "flex min-h-screen items-center justify-center bg-background",
      children: e.jsx(i, { size: 44, label: "Loading dashboard" }),
    })
    : t
      ? e.jsxs("div", {
        className: "min-h-screen bg-background",
        style: { background: "#f5f8fd" },
        children: [
          e.jsxs("div", {
            className: "flex min-h-screen w-full",
            children: [
              e.jsxs("aside", {
                className: "flex w-[72px] shrink-0 flex-col border-r border-border bg-card p-2",
                style: {
                  background: "#ffffff",
                },
                children: [
                  e.jsxs(f, {
                    to: "/",
                    className: "flex items-center justify-center rounded-lg p-2",
                    children: [
                      e.jsx("img", {
                        src: L,
                        alt: "Appmotion",
                        className: "h-8 w-8 object-contain",
                      }),
                      e.jsx("span", { className: "sr-only", children: "Appmotion" }),
                    ],
                  }),
                  e.jsx("div", { className: "mt-4 h-px w-full bg-border" }),
                  e.jsx("div", {
                    className: "flex flex-1 items-center justify-center",
                    children: e.jsx("nav", {
                      className: "w-full space-y-2",
                      children: V.map((o) => {
                        const _ = te === o.key;
                        return e.jsxs(
                          "button",
                          {
                            onClick: () => oe(o.key),
                            className:
                              "flex aspect-square w-full flex-col items-center justify-center gap-1 rounded-xl border px-1 py-2 text-center text-[11px] font-medium leading-[1.1] transition-colors hover:bg-muted",
                            style: _
                              ? {
                                borderColor: "#c7d8ff",
                                background: "linear-gradient(180deg, #edf3ff 0%, #e6eeff 100%)",
                                color: "#1d3d8b",
                                boxShadow: "0 10px 18px rgba(29, 61, 139, 0.12)",
                              }
                              : {
                                borderColor: "transparent",
                                background: "transparent",
                              },
                            children: [
                              e.jsx(o.icon, {
                                className: _ ? "h-6 w-6 shrink-0" : "h-4 w-4 shrink-0",
                              }),
                              e.jsx("span", { className: "text-center", children: o.label }),
                            ],
                          },
                          o.key,
                        );
                      }),
                    }),
                  }),
                  e.jsxs("div", {
                    className: "relative",
                    ref: ce,
                    children: [
                      e.jsxs("button", {
                        onClick: () => se(!le),
                        "aria-label": "Open account menu",
                        className:
                          "flex w-full items-center justify-center rounded-xl border border-border bg-background p-1 transition-colors hover:bg-muted",
                        children: [
                          e.jsx("img", {
                            src: fe,
                            alt: pe.name,
                            className: "h-9 w-9 rounded-full object-cover",
                            onError: ve,
                          }),
                        ],
                      }),
                      le
                        ? e.jsxs("div", {
                          className: "absolute left-0 z-20 w-72 rounded-2xl p-4 shadow-xl",
                          style: {
                            bottom: "calc(100% + 10px)",
                            background: "#232833",
                            color: "#f8fafc",
                            border: "1px solid rgba(148, 163, 184, 0.3)",
                          },
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                e.jsx("img", {
                                  src: fe,
                                  alt: pe.name,
                                  className: "h-12 w-12 rounded-full object-cover",
                                  onError: ve,
                                }),
                                e.jsxs("div", {
                                  className: "min-w-0",
                                  children: [
                                    e.jsx("p", {
                                      className: "text-lg font-semibold",
                                      children: pe.name,
                                    }),
                                    e.jsx("p", {
                                      className: "text-xs",
                                      style: { color: "rgba(226, 232, 240, 0.8)" },
                                      children: G(pe.email),
                                    }),
                                    e.jsxs("p", {
                                      className: "text-xs",
                                      style: { color: "rgba(226, 232, 240, 0.7)" },
                                      children: ["ID ", pe.id || "-"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("button", {
                              className:
                                "mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium",
                              style: {
                                background: "rgba(148, 163, 184, 0.2)",
                                color: "#f8fafc",
                              },
                              onClick: () => l(),
                              children: [e.jsx(z, { className: "h-4 w-4" }), "Log out"],
                            }),
                            e.jsx("div", {
                              className: "my-4 h-px w-full",
                              style: { background: "rgba(148, 163, 184, 0.25)" },
                            }),
                            e.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                e.jsx(be, { icon: n, label: "AIGC watermark settings" }),
                                e.jsx(be, { icon: r, label: "Language", chevron: !0 }),
                                e.jsx(be, { icon: m, label: "Contact us" }),
                                e.jsx(be, { icon: v, label: "Platform terms & conditions" }),
                                e.jsx(be, { icon: x, label: "Account management" }),
                              ],
                            }),
                          ],
                        })
                        : null,
                    ],
                  }),
                ],
              }),
              e.jsx("main", {
                className: "min-w-0 flex-1 px-6 py-8",
                children: _e(),
              }),
            ],
          }),
        ],
      })
      : null;
}

export { Q as component };
