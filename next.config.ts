import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force rebuild: 2026-01-12T09:20
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
};

export default nextConfig;
// Last deploy: 2026-01-12T09:26:58Z
