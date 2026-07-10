import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Johns Gresham — Software Engineer";

export default async function Image() {
  return renderOgImage(
    "Johns Gresham",
    "Software engineer • AI, Ethereum, robotics. Founder of NiceNode."
  );
}
