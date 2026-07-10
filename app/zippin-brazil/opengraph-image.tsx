import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Zippin Brazil — Checkout-Free Store Launch";

export default async function Image() {
  return renderOgImage(
    "Zippin São Paulo",
    "Led on-site launch of Zippin's 2nd checkout-free store in Brazil."
  );
}
