import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOgImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#030712",
          padding: "64px 80px 56px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "9999px",
              background: "#f3c497",
              color: "#030712",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            JG
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: "3.5px",
              color: "#f3c497",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            JOHNS GRESHAM
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.08,
              maxWidth: 1020,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#9ca3af",
              maxWidth: 960,
              lineHeight: 1.3,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 28,
              height: 3,
              background: "#f3c497",
              borderRadius: 999,
            }}
          />
          <div style={{ display: "flex", fontSize: 18, color: "#6b7280" }}>
            jgresham.xyz
          </div>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
