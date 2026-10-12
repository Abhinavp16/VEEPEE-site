const isDev = process.env.NODE_ENV !== 'production';

// Origin of the backend API, so the browser may call it (and nothing else).
const apiOrigin = (() => {
  try {
    return new URL(
      process.env.NEXT_PUBLIC_API_BASE_URL ||
        process.env.NEXT_PUBLIC_WEBSITE_API_BASE_URL ||
        'https://veepee-backend.vercel.app/api/v1'
    ).origin;
  } catch {
    return '';
  }
})();

const contentSecurityPolicy = [
  "default-src 'self'",
  // Next.js inlines its bootstrap scripts, so inline scripts stay allowed.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  `connect-src 'self' ${apiOrigin}${isDev ? ' ws: http://localhost:* http://127.0.0.1:*' : ''}`.trim(),
  // The contact page embeds a Google map.
  'frame-src https://www.google.com https://maps.google.com',
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/account-deletion', destination: '/delete-account', permanent: true },
      { source: '/data-deletion', destination: '/delete-account', permanent: true },
    ];
  },
};

export default nextConfig;
