/**
 * @type {import('next').NextConfig}
 **/
// const isProd = process.env.NODE_ENV === 'production'

const convertDaysToSecs = days => {
  return days * 24 * 60 * 60
}

module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: [
      'images.unsplash.com',
      'img.traveltriangle.com',
      'i0.wp.com',
      'rajaampatbiodiversity.com',
      'www.tripsavvy.com',
      'cdn.pixabay.com',
      'kite2022.sgp1.digitaloceanspaces.com',
      'kite-frontend-storage-79e65883162600-staging.s3.ap-south-1.amazonaws.com'
    ],
    minimumCacheTTL: convertDaysToSecs(7)
  }
}
