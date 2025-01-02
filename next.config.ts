import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io'], // Add your image hostname here
  },
};


module.exports = nextConfig;

export default nextConfig;
