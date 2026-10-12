// Base URL of the OXON API, with no trailing slash.
export function getApiBaseUrl() {
    const rawBase =
        process.env.NEXT_PUBLIC_API_BASE_URL ||
        process.env.API_BASE_URL ||
        process.env.NEXT_PUBLIC_WEBSITE_API_BASE_URL ||
        'https://veepee-backend.vercel.app/api/v1';
    return rawBase.replace(/\/+$/, '');
}
