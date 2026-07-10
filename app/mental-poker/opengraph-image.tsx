import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "MentalPoker — Trustless Onchain Poker";

export default async function Image() {
  return renderOgImage(
    "MentalPoker",
    "Trustless poker onchain using commutative encryption. No trusted third party."
  );
}
