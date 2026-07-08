/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
    ],
  },

  // Optional but recommended
  reactStrictMode: true,
};

module.exports = nextConfig;