import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "NiceNode: Run an Ethereum Node — Just Press Start";

export default async function Image() {
  return renderOgImage(
    "NiceNode",
    "Run an Ethereum node — just press start. Founder, 2022–2024."
  );
}
