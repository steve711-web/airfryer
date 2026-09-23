import type { MetadataRoute } from "next";

const BASE_URL = "https://www.airfryerconvert.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/oven-to-air-fryer", "/air-fryer-wattage-cost", "/air-fryer-size-calculator"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
