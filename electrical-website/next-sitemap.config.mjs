// const pkg = await import('./src/app/sanity/client.mjs');
// const { client } = pkg;

const sitemapConfig = {
  siteUrl: 'https://www.everythingelectricalsydney.com.au',
  generateRobotsTxt: true,

  sitemapSize: 10000, // ✅ increases limit to avoid splitting into sitemap-0.xml
  generateIndexSitemap: true, // ✅ disable sitemap index if desired (optional)

  additionalPaths: async (config) => {
    // Include only one "canonical" location
    const location = 'sydney';
    return [
      {
        loc: `${config.siteUrl}/all-services?location=${location}`,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
    ];
  },

  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};

export default sitemapConfig;