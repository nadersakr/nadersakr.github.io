import { j as e } from "../index-EyA4U2tn.js";

export function renderDiscoverTab({ TOKEN, CompassIcon }) {
  return e.jsxs("div", {
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
        children: e.jsx(CompassIcon, { className: "h-9 w-9" }),
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
}
