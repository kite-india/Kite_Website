const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://kite-india.netlify.app' : undefined,
  images: {
    domains: ['images.unsplash.com', 'cdn.pixabay.com']
  }
}
