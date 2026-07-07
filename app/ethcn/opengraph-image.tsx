import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Ethcn: Shadcn UI component library for Ethereum apps";

export default async function Image() {
  return renderOgImage(
    "Ethcn",
    "Shadcn UI component library for Ethereum apps"
  );
}
