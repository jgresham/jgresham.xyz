import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Ethcn — Shadcn UI for Ethereum Apps";

export default async function Image() {
  return renderOgImage(
    "Ethcn",
    "Shadcn-style components for Ethereum apps. One-command install with wallet awareness."
  );
}
