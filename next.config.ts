import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/shell",
  async rewrites() {
    return [
      { source: "/creator", destination: `${process.env.CREATOR_URL}/` },
      {
        source: "/creator/:path+",
        destination: `${process.env.CREATOR_URL}/:path+`,
      },
      { source: "/", destination: `${process.env.USER_URL}/` },
      {
        source: "/:path+",
        destination: `${process.env.USER_URL}/:path+`,
      },
    ];
  },
};

export default nextConfig;
