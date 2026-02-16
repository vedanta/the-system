/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages configuration - clean URLs from pages branch
  assetPrefix: '',
  basePath: '',

  // Disable server-side features for static export
}

module.exports = nextConfig