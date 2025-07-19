/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://eeennsu.github.io/',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  outDir: './out',
  transform: async (config, url) => {
    return {
      loc: `${config.siteUrl}/eunsu-resume${url}`,
      changefreq: 'monthly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};

export default config;
