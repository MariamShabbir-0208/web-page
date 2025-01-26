/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: { appDir: true },
}

module.exports = nextConfig
