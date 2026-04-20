import { j as e } from "../index-EyA4U2tn.js";
import { L as i, B as p } from "../loader-YZUiUiwx.js";
import { P as g } from "../plus-Dz-D31Co.js";
import { F as P } from "../film-DuJqO0Rm.js";

export function renderProjectsTab({
    projects,
    creating,
    onNewProject,
    renderProjectCard,
    TOKEN,
}) {
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
                    onClick: onNewProject,
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
                        creating
                            ? e.jsx(i, { size: 16, label: "Creating project" })
                            : e.jsx(g, { className: "h-4 w-4" }),
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
        children: projects.map((proj) => renderProjectCard(proj)),
    });
}
