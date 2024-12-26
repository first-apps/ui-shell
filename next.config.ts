import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/creator", destination: `${process.env.CREATOR_URL}/` },
      {
        source: "/creator/:path+",
        destination: `${process.env.CREATOR_URL}/:path+`,
      },
      {
        source: "/creator/_next/:path+",
        destination: `${process.env.CREATOR_URL}/_next/:path+`,
      },
      { source: "/", destination: `${process.env.USER_URL}/` },
      {
        source: "/:path+",
        destination: `${process.env.USER_URL}/:path+`,
      },
      {
        source: "/_next/:path+",
        destination: `${process.env.USER_URL}/_next/:path+`,
      },
    ];
  },
};

export default nextConfig;
