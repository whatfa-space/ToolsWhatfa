/** @type {import('next').NextConfig} */
// import intlPlugin from 'next-intl/plugin'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const intlPlugin = require('next-intl/plugin')
const withNextIntl = intlPlugin(
  // This is the default (also the `src` folder is supported out of the box)
  // './i18n.ts'
  './src/i18n.ts'
)

const nextConfig = {
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

module.exports = withNextIntl(nextConfig)
