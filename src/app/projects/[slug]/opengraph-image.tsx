import { ImageResponse } from "next/og";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";

export const runtime = "edge";

export const alt = "Project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function ProjectOpenGraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);

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
            {project ? project.platforms.join("  ·  ") : "Case study"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "86px",
              lineHeight: 1.05,
              letterSpacing: "-3px",
              color: "#F5F4F2",
            }}
          >
            {project ? project.title : "Selected work"}
          </div>
          <div
            style={{
              marginTop: "22px",
              maxWidth: "900px",
              fontSize: "34px",
              lineHeight: 1.3,
              letterSpacing: "-1px",
              color: "#9C9A95",
            }}
          >
            {project ? project.tagline : "Web platforms and mobile apps"}
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
            {project ? project.stack.slice(0, 4).join(" · ") : ""}
          </div>
          <div style={{ display: "flex", color: "#9C9A95" }}>{site.name}</div>
        </div>
      </div>
    ),
    size,
  );
}
