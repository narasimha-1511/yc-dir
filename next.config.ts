import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ['avatars.githubusercontent.com','imgs.search.brave.com'],
    dangerouslyAllowSVG: true,
    remotePatterns: [
        {
          protocol: 'https',
          hostname: '*'
        }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
