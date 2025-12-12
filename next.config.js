/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Ensure canvas-confetti resolves correctly
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "canvas-confetti": require.resolve("canvas-confetti"),
    };

    return config;
  },
};

module.exports = nextConfig;
