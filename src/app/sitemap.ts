import type { MetadataRoute } from "next";

const siteUrl = "https://www.philipbflooring.ie";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/our-work",
    "/why-us",
    "/process",
    "/areas-we-cover",
    "/faq",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
