import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "EIP-7907: Meter Contract Code Size And Increase Limit";

export default async function Image() {
  return renderOgImage(
    "EIP-7907",
    "Meter Contract Code Size And Increase Limit"
  );
}
