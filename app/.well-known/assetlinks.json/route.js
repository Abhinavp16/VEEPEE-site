// Lets Android verify that the OXON app may open veepeeimpex.com product links.
// Set ANDROID_APP_SHA256_FINGERPRINTS to the comma-separated SHA-256 signing
// certificate fingerprints (Play App Signing key and the upload key), then
// redeploy. Until then this returns 404 and links open in the browser.
export const dynamic = 'force-dynamic';

const PACKAGE_NAME = 'com.veepeeimpex.oxon';

export function GET() {
  const fingerprints = (process.env.ANDROID_APP_SHA256_FINGERPRINTS || '')
    .split(',')
    .map((value) => value.trim().toUpperCase())
    .filter((value) => /^([0-9A-F]{2}:){31}[0-9A-F]{2}$/.test(value));

  if (fingerprints.length === 0) {
    return new Response('Not configured', { status: 404 });
  }

  return Response.json([
    {
      relation: ['delegate_permission/common.handle_all_urls'],
      target: {
        namespace: 'android_app',
        package_name: PACKAGE_NAME,
        sha256_cert_fingerprints: fingerprints,
      },
    },
  ]);
}
