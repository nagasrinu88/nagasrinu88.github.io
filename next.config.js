const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // ...existing code...
  basePath: '',
  assetPrefix: './',
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    unoptimized: true,
  },
};

module.exports = withMDX(nextConfig);