/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    domains: [
      "fastly.4sqi.net",
      "tailwindui.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "spoonacular.com",
    ],
  },
};

module.exports = nextConfig;
