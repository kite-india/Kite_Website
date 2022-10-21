/**
 * @type {import('next').NextConfig}
 **/
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  assetPrefix: isProd ? 'https://kite-india.netlify.app' : undefined,
  images: {
    domains: [
      'images.unsplash.com',
      'img.traveltriangle.com',
      'i0.wp.com',
      'rajaampatbiodiversity.com',
      'www.tripsavvy.com'
    ]
  }
}
