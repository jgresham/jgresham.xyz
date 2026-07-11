import type { MetadataRoute } from "next";

const routes: Array<{ path: string; priority: number }> = [
  { path: "", priority: 1.0 },
  { path: "nicenode", priority: 0.9 },
  { path: "geo", priority: 0.85 },
  { path: "eip-7907", priority: 0.8 },
  { path: "mental-poker", priority: 0.75 },
  { path: "based-chess", priority: 0.75 },
  { path: "ethcn", priority: 0.7 },
  { path: "zippin-brazil", priority: 0.65 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `https://jgresham.xyz/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
