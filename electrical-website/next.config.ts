/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/webp", "image/avif"],
    domains: ["www.everythingelectricalsydney.com.au"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ssl.gstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  redirects: async () => {
    //redirects
    return [
      {
        source: "/review",
        destination:
          "https://www.google.com/search?client=safari&sca_esv=d06f5a1c24924b00&rls=en&channel=30&biw=2010&bih=1115&sxsrf=AE3TifMbmstVgX2nBxyeJwta9WLvUS3eoA:1753418214653&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_BrlSgmRx-EOxuNNUDKdhET4PZUGcqygSqS6sTRD_9MT86C9S3RqYZirX2hmj7h7LsK4g6onPmnybh8WryNLoJMidzoeH2T1qsHJ26iIXePQyaPpw%3D%3D&q=Everything+Electrical+Sydney+Reviews&sa=X&ved=2ahUKEwic3M7ul9eOAxV1rlYBHdsdFEkQ0bkNegQIHRAD",
        permanent: true,
      },
      {
        source: "/electrician-sydney/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/electrician-sydney/commercial",
        destination: "/services/commercial-electrical",
        permanent: true,
      },
      {
        source: "/electrician-sydney/strata",
        destination: "/services/real-estate-strata",
        permanent: true,
      },

      {
        source: "/all-services/:slug",
        destination: "/all-services?location=:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
