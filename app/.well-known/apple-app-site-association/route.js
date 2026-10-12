// Lets iOS open veepeeimpex.com product links in the OXON app. Set
// APPLE_TEAM_ID (the 10-character Apple Developer Team ID) and redeploy; until
// then this returns 404. Must be served as JSON without a redirect.
export const dynamic = 'force-dynamic';

const BUNDLE_ID = 'com.veepeeimpex.oxon';

export function GET() {
  const teamId = (process.env.APPLE_TEAM_ID || '').trim();
  if (!/^[A-Z0-9]{10}$/.test(teamId)) {
    return new Response('Not configured', { status: 404 });
  }

  return Response.json({
    applinks: {
      details: [
        {
          appIDs: [`${teamId}.${BUNDLE_ID}`],
          components: [{ '/': '/products/*' }],
        },
      ],
    },
  });
}
