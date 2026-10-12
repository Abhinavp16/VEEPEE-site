/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/account-deletion', destination: '/delete-account', permanent: true },
      { source: '/data-deletion', destination: '/delete-account', permanent: true },
    ];
  },
};

export default nextConfig;