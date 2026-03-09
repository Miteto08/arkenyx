/** @type {import('next').NextConfig} */
// API routes (e.g. /api/reviews) require a server; output: 'export' is disabled. Security headers: see public/_headers (Netlify) and vercel.json (Vercel).

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
};

export default nextConfig;
