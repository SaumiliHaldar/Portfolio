/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Use the primary custom domain as the canonical URL for SEO best practices.
  // Using multiple domains without redirects can cause duplicate content issues on search engines.
  siteUrl: process.env.SITE_URL || 'https://saumilihaldar.in',
  generateRobotsTxt: true, // Automatically generate a robots.txt file
  sitemapSize: 7000,
};
