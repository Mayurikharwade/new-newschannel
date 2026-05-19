/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "computervignanam.net" },
      { protocol: "https", hostname: "graphics.computervignanam.net" },
      { protocol: "https", hostname: "placehold.co" },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    
  },
};

export default nextConfig;