/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fastly.4sqi.net','res.cloudinary.com'],
  },
};

module.exports = nextConfig;
