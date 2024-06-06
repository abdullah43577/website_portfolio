/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
