const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  // async redirects() { // Can't use redirects with static site generation
  //   return [
  //     {
  //       source: "/",
  //       destination: "/home",
  //       permanent: true,
  //     },
  //   ];
  // },
  images: {
    domains: ["localhost"],
    unoptimized: true, // Needed for exporting a static site
    // loader: "",
  },

  output: "export", // Needed to build static site
};

module.exports = nextConfig;
