/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }
        ]
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'saumilihaldar.vercel.app' }],
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex'
          }
        ]
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.saumilihaldar.in' }],
        destination: 'https://saumilihaldar.in/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'saumilihaldar.vercel.app' }],
        destination: 'https://saumilihaldar.in/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
