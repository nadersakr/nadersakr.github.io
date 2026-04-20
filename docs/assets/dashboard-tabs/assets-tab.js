import { j as e } from "../index-EyA4U2tn.js";

function formatBytes(bytes) {
    if (!Number.isFinite(bytes)) return "0 KB";
    const mb = bytes / 1024 / 1024;
    if (mb >= 1) return `${mb.toFixed(1)} MB`;
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

export function renderAssetsTab({ assetFiles, onFileChange, TOKEN, UploadIcon }) {
    return e.jsxs("div", {
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
                                children: e.jsx(UploadIcon, { className: "h-8 w-8" }),
                            }),
                            e.jsxs("div", {
                                children: [
                                    e.jsx("p", {
                                        style: {
                                            fontSize: 15,
                                            fontWeight: 600,
                                            color: TOKEN.textPrimary,
                                            marginBottom: 4,
                                        },
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
                                        onChange: onFileChange,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    assetFiles.length > 0 &&
                    e.jsx("div", {
                        style: { marginTop: 20, display: "flex", flexDirection: "column", gap: 8 },
                        children: assetFiles.map((file) =>
                            e.jsxs(
                                "div",
                                {
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
                                },
                                `${file.name}-${file.size}`,
                            ),
                        ),
                    }),
                ],
            }),
        ],
    });
}
