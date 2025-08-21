/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // সব https host allow করবে
      },
      {
        protocol: "http",
        hostname: "**", // চাইলে http ও allow করতে পারো
      },
    ],
  },
};

export default nextConfig;
