/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform

    styledComponents: true,
  },
  images: {
    domains: ["img.freepik.com"], // Add the domain of the external image
  },
};

export default nextConfig;
