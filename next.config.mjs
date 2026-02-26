/** @type {import('next').NextConfig} */
// En-têtes de sécurité : avec output: 'export', Next ne les applique pas.
// Ils sont définis dans public/_headers (Netlify) et vercel.json (Vercel).

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
};

export default nextConfig;
