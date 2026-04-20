import { r as a, j as e } from "./index-EyA4U2tn.js";

const DIALOG_THEME = {
    primary: "#7c3aed",
    white: "#ffffff",
    border: "#e4e9f5",
    textPrimary: "#0d1832",
    textSecondary: "#5a6887",
};

export function ConfirmDialog({
    open,
    title,
    description,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    tone = "default",
    busy = false,
    onConfirm,
    onCancel,
}) {
    a.useEffect(() => {
        if (!open) return;
        const onKeyDown = (ev) => {
            if (ev.key === "Escape" && !busy && onCancel) onCancel();
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open, busy, onCancel]);

    if (!open) return null;

    const danger = tone === "danger";
    const confirmBg = danger ? "#dc2626" : DIALOG_THEME.primary;

    return e.jsx("div", {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": title || "Confirm action",
        onClick: (ev) => {
            if (ev.target === ev.currentTarget && !busy && onCancel) onCancel();
        },
        style: {
            position: "fixed",
            inset: 0,
            background: "rgba(12,18,35,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            zIndex: 150,
        },
        children: e.jsxs("div", {
            style: {
                width: "100%",
                maxWidth: 420,
                borderRadius: 16,
                border: `1px solid ${DIALOG_THEME.border}`,
                background: DIALOG_THEME.white,
                boxShadow: "0 24px 60px rgba(13, 24, 50, 0.24)",
                padding: 22,
            },
            children: [
                e.jsx("h3", {
                    style: {
                        margin: 0,
                        color: DIALOG_THEME.textPrimary,
                        fontSize: 18,
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                    },
                    children: title || "Are you sure?",
                }),
                description
                    ? e.jsx("p", {
                        style: {
                            marginTop: 10,
                            marginBottom: 0,
                            color: DIALOG_THEME.textSecondary,
                            fontSize: 14,
                            lineHeight: 1.55,
                        },
                        children: description,
                    })
                    : null,
                e.jsxs("div", {
                    style: {
                        marginTop: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: 10,
                    },
                    children: [
                        e.jsx("button", {
                            type: "button",
                            onClick: onCancel,
                            disabled: busy,
                            style: {
                                minWidth: 92,
                                padding: "9px 14px",
                                borderRadius: 10,
                                border: `1px solid ${DIALOG_THEME.border}`,
                                background: DIALOG_THEME.white,
                                color: DIALOG_THEME.textSecondary,
                                fontSize: 13,
                                fontWeight: 600,
                                cursor: busy ? "not-allowed" : "pointer",
                                opacity: busy ? 0.65 : 1,
                            },
                            children: cancelLabel,
                        }),
                        e.jsx("button", {
                            type: "button",
                            onClick: onConfirm,
                            disabled: busy,
                            style: {
                                minWidth: 110,
                                padding: "9px 14px",
                                borderRadius: 10,
                                border: "none",
                                background: confirmBg,
                                color: "#fff",
                                fontSize: 13,
                                fontWeight: 700,
                                cursor: busy ? "not-allowed" : "pointer",
                                opacity: busy ? 0.75 : 1,
                            },
                            children: busy ? "Working..." : confirmLabel,
                        }),
                    ],
                }),
            ],
        }),
    });
}
