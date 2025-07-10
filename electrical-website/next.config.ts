import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'],  // Add this line
  },
  // other config options here if you have any
};

export default nextConfig;
