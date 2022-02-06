const { CHAT_URL } = process.env;

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/just-chatting',
        destination: `${CHAT_URL}/just-chatting`,
      },
      {
        source: '/just-chatting/:path*',
        destination: `${CHAT_URL}/just-chatting/:path*`,
      },
    ]
  },
}
