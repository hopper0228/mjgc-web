import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.readdy.ai",
      },
      {
        protocol: "https",
        hostname: "public.readdy.ai",
      },
      {
        protocol: "https",
        hostname: "readdy.ai",
      },
    ],
  },
};

export default nextConfig;
