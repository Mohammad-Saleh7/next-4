/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/recipe-images/**",
      },

      { protocol: "https", hostname: "dummyjson.com", pathname: "/icon/**" },
    ],
  },
};

export default nextConfig;
