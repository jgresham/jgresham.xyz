import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "BasedChess: Chess onchain";

export default async function Image() {
  return renderOgImage("BasedChess", "Chess onchain — openly verifiable.");
}
