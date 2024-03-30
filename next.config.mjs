/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3-alpha-sig.figma.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "charankamal20.github.io",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
