import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt =
  "Headless Stripe Card Reader Entry at Zippin checkout-free stores";

export default async function Image() {
  return renderOgImage(
    "Headless Stripe Card Reader Entry",
    "Verifone P400 store entry at Zippin, August 2019"
  );
}
