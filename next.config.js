/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "radioco-production.up.railway.app",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.radio.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "is2-ssl.mzstatic.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "is3-ssl.mzstatic.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "is4-ssl.mzstatic.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "public.radio.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "s3.radio.co",
        pathname: "**",
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
