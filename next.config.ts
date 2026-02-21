import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /* config options here */    domains: [
  //     "static.finnhub.io",
  //     "static2.finnhub.io",
  //     "cdn.finnhub.io",
  //     "coin-images.coingecko.com",
  //           "images.investinglive.com",
  //           //  "data.bloomberglp.com"  
  //   ],
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
