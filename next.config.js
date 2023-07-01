/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i2.mjj.rip',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
