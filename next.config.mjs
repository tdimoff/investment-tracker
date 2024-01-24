/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/investments',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
