/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
  }),

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  async rewrites() {
    return [
      {
        source: "/api/vehicle-enquiry-endpoint", // Match your API endpoint
        destination:
          "https://uat.driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles", // Replace with actual URL
      },
    ];
  },
};

module.exports = nextConfig;
