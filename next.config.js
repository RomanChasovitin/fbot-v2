/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  const nextConfig = {
    experimental: {
      serverActions: true,
    },
  }
  return nextConfig
}
