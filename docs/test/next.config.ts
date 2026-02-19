import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mkdocs-plus-react-example',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;