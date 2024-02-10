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
      {
        hostname: "cdn.sanity.io",
        protocol: "https",
        pathname: "**",
      },
    ],
  },

  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  // headers: () => [
  //   {
  //     source: "/:path*",
  //     headers: [
  //       {
  //         key: "Cache-Control",
  //         value: "no-store",
  //       },
  //     ],
  //   },
  // ],
};

module.exports = nextConfig;
