import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "BasedChess — Verifiable Onchain Chess";

export default async function Image() {
  return renderOgImage("BasedChess", "Openly verifiable chess onchain. Every move is signed by the player.");
}
