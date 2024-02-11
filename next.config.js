const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: "custom",
    loaderFile: "./image_loader.ts",
    path: "/",
  },
  // output: "export",
};

module.exports = nextConfig;
