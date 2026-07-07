import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "MentalPoker: Trustless Poker";

export default async function Image() {
  return renderOgImage(
    "MentalPoker",
    "Trustless poker, onchain — no trusted third party."
  );
}
