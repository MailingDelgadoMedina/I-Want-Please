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
      "ss3.4sqi.net",
    ],
  },
};

module.exports = nextConfig;
