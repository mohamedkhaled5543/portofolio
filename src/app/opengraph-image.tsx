import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0b0d",
          backgroundImage:
            "linear-gradient(rgba(237,239,242,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(237,239,242,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#9aa3b0",
            fontSize: 24,
            fontFamily: "monospace",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#ff7a29",
            }}
          />
          {site.role}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 68,
            fontWeight: 700,
            color: "#edeff2",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Turn repetitive business processes into intelligent systems.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 28,
            color: "#4fd1c5",
            fontFamily: "monospace",
          }}
        >
          {site.name}
        </div>
      </div>
    ),
    { ...size }
  );
}
