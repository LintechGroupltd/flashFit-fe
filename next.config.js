const withPWAInit = require("@ducanh2912/next-pwa").default;

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withPWA(nextConfig);
