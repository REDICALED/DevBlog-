/** @type {import('next').NextConfig} */

const nextBundleAnalyzer = require('@next/bundle-analyzer');

const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
    compiler: {
      styledComponents: true,
    },
  };
  
  module.exports = nextBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true'
  })(nextConfig)
  