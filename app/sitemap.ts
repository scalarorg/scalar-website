import { MetadataRoute } from 'next';

import { WEBSITE_URL } from '@/lib/constants/links';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: WEBSITE_URL, lastModified: new Date(), priority: 1 }];
}
