// const pkg = await import('./src/app/sanity/client.mjs');
// const { client } = pkg;

const sitemapConfig = {
  siteUrl: 'https://www.everythingelectricalsydney.com.au',
  generateRobotsTxt: true,

  sitemapSize: 10000, // ✅ increases limit to avoid splitting into sitemap-0.xml
  generateIndexSitemap: true, // ✅ disable sitemap index if desired (optional)

  // additionalPaths: async (config) => {
  //   const slugs = await client.fetch(`*[_type == "post" && defined(slug.current)].slug.current`);

  //   return slugs.map((slug) => ({
  //     loc: `${config.siteUrl}/blog/${slug}`,
  //     changefreq: 'monthly',
  //     priority: 0.7,
  //     lastmod: new Date().toISOString(),
  //   }));
  // },

  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};

export default sitemapConfig;