import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "EIP-7907 — Increase Ethereum Contract Code Size Limit";

export default async function Image() {
  return renderOgImage(
    "EIP-7907",
    "Doubling Ethereum's contract code size limit + metered gas. Contributed spec & impl."
  );
}
