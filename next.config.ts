import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Menambahkan konfigurasi untuk mendukung SVG sebagai komponen React
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
