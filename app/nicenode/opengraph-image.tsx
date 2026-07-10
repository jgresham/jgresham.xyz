import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "NiceNode — Run an Ethereum Node with One Click";

export default async function Image() {
  return renderOgImage(
    "NiceNode",
    "The easiest way to run an Ethereum node. No command line. 25k+ downloads."
  );
}
