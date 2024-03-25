const withPWAInit = require("@ducanh2912/next-pwa").default;

const withPWA = withPWAInit({
    dest: "public",
});

const nextConfig = {};

module.exports = withPWA(nextConfig);
