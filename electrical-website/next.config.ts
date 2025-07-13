/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
    domains: [
      'upload.wikimedia.org',
      'www.gstatic.com',
      'lh3.googleusercontent.com',
      'ssl.gstatic.com'
    ],
  },
};

module.exports = nextConfig;
