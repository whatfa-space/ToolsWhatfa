/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i2.mjj.rip',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i3.mjj.rip',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
