import type { MetadataRoute } from "next";

const routes = [
  "",
  "geo",
  "nicenode",
  "zippin-brazil",
  "ethcn",
  "mental-poker",
  "based-chess",
  "eip-7907",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://jgresham.xyz/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
