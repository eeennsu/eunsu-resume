/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://eeennsu.github.io/',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  outDir: './out',
  changefreq: 'monthly',
  priority: 1,
};

export default config;
