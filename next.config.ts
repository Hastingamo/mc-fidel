import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 productionBrowserSourceMaps: false,

  // Disable minification if still OOMing
  // swcMinify: false,

  experimental: {
    // Reduce workers during build
    workerThreads: false,
    cpus: 1,
  },

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
