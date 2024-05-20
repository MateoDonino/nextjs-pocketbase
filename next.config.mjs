/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "d2ihpvt6nd5q28.cloudfront.net",
      },
      {
        hostname: "localhost",
      },
      {
        hostname: "127.0.0.1",
      },
    ],
  },
};

export default nextConfig;
