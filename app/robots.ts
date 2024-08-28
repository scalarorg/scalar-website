import { MetadataRoute } from 'next';

import { WEBSITE_URL } from '@/lib/constants/links';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  };
}
