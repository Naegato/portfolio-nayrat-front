const strapiUrl = new URL(process.env.NEXT_PUBLIC_STRAPI_URL || '')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [400, 768, 1000, 1400, 1920],
    loader: 'default',
    domains: ['localhost', '127.0.0.1', strapiUrl.hostname],
  }
}

module.exports = nextConfig
