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
      {
        protocol: 'https',
        hostname:      "static.finnhub.io",
        port: '',
      },
      {
        protocol: 'https',
        hostname: "static2.finnhub.io",
        port: '',
      },

    ],

   
  },

  
};

export default nextConfig;
