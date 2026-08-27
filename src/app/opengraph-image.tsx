import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0B0C",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "9999px",
              background: "#F0703F",
            }}
          />
          <div
            style={{
              fontSize: "22px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#9C9A95",
            }}
          >
            {site.location}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "92px",
              lineHeight: 1.05,
              letterSpacing: "-3px",
              color: "#F5F4F2",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: "20px",
              fontSize: "38px",
              letterSpacing: "-1px",
              color: "#9C9A95",
            }}
          >
            {site.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #26262A",
            paddingTop: "32px",
            fontSize: "24px",
            color: "#6B6A67",
          }}
        >
          <div style={{ display: "flex" }}>
            React · Next.js · React Native · Node
          </div>
          <div style={{ display: "flex", color: "#9C9A95" }}>{site.email}</div>
        </div>
      </div>
    ),
    size,
  );
}
