/** @type {import('next').NextConfig} */
// Security headers are not applied by Next with output: 'export'. They are set in public/_headers (Netlify) and vercel.json (Vercel).

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
};

export default nextConfig;
