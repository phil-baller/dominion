/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "via.placeholder.com",
        pathname: "**",
        protocol: "https",
      },
      {
        hostname: "utfs.io",
        protocol: "https",
        pathname: "**",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = nextConfig;
