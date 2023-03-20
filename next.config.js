/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async Headers() {
    return {
      source: "/favicon.ico",
      headers: [
        {
          key: "Content-Type",
          value: "image/x-icon",
        },
      ],
    };
  },
};

module.exports = nextConfig;
