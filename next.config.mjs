/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for the Docker multi-stage build to produce a minimal server.js
  output: "standalone",
};

export default nextConfig;
