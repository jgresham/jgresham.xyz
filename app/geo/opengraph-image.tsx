import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Geo: Search & Notifications for geobrowser.io";

export default async function Image() {
  return renderOgImage(
    "Geo: Search & Notifications",
    "Senior Backend Developer, Wonderland — geobrowser.io"
  );
}
