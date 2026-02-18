const sitemapConfig = {
  siteUrl: "https://www.everythingelectricalsydney.com.au",
  generateRobotsTxt: true,
  sitemapSize: 10000, // ✅ increases limit to avoid splitting into sitemap-0.xml
  generateIndexSitemap: true, // ✅ disable sitemap index if desired (optional)

  // Keep the thank-you confirmation page out of the sitemap
  exclude: ["/thankyou"],

  additionalPaths: async (config) => {
    // Include only one "canonical" location
    const location = "sydney";
    return [
      {
        loc: `${config.siteUrl}/all-services?location=${location}`,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
    ];
  },

  robotsTxtOptions: {
    // Tell crawlers not to index the thank-you page
    policies: [{ userAgent: "*", allow: "/", disallow: ["/thankyou"] }],
  },
};

export default sitemapConfig;
