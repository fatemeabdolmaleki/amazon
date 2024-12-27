import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"cdn.dummyjson.com"
      },
      {
        protocol:"https",
        hostname:"1h3.googleusercontent.com"
      }
    ]
  }
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
