import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,

  experimental: {
    workerThreads: false,
    cpus: 1,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'static.finnhub.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'static2.finnhub.io',
        port: '',
      },
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
