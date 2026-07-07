import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Zippin's 2nd Checkout-Free Store — São Paulo, Brazil";

export default async function Image() {
  return renderOgImage(
    "Zippin's 2nd Checkout-Free Store",
    "Leading the on-site launch in São Paulo, Brazil — November 2019"
  );
}
