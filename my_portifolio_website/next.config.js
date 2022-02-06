const  BLOG_URL  = "https://just-chatting-lac.vercel.app/"

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `${BLOG_URL}/`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/:path*/`,
      },
    ]
  },
}
