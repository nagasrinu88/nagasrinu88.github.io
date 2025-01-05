// /** @type {import('next').NextConfig} */
import withMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['media.licdn.com'],
  }
};

const mdxConfig = withMDX({
  extension: /\.mdx?$/
});



export default mdxConfig(nextConfig);

// const withMDX = require('@next/mdx')({
//     extension: /\.mdx?$/
//   });
  
//   const mdxConfig = withMDX({
//     pageExtensions: ['js', 'jsx', 'md', 'mdx'],
//     experimental: {
//       appDir: false // Ensure app directory is disabled if not using it
//     }
//   });

// export default mdxConfig;
  