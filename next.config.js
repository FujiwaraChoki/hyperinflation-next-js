/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "i.imgur.com",
      "www.planet-wissen.de",
      "upload.wikimedia.org",
      "static.dw.com",
      "i.postimg.cc"
    ],
  },
};

module.exports = nextConfig;
