import { MetadataRoute } from "next";
import { WEBSITE_URL } from "@/lib/constants/links";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [{ url: WEBSITE_URL, lastModified: new Date(), priority: 1 }];
}
