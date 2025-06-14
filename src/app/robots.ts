import { SITE_URL } from '@shared/consts/commons';
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
};

export default robots;
