import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon: gold "V" monogram on the brand teal. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#173532",
          borderRadius: 8,
          color: "#D9B98A",
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        V
      </div>
    ),
    size,
  );
}
