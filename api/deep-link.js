const BACKENDS = {
    production: 'https://api.ziona.app',
    staging: 'https://api.staging.ziona.app',
};

const WELL_KNOWN_ROUTES = {
    assetlinks: '/.well-known/assetlinks.json',
    'apple-app-site-association': '/.well-known/apple-app-site-association',
};

const getHostname = (request) => {
    const forwardedHost = request.headers['x-forwarded-host'];
    const host = Array.isArray(forwardedHost) ? forwardedHost[0] : forwardedHost;
    return (host || request.headers.host || '').split(',')[0].split(':')[0].toLowerCase();
};

const getBackend = (hostname) =>
    hostname === 'staging.ziona.app' ? BACKENDS.staging : BACKENDS.production;

const getRoutePath = (request) => {
    const route = Array.isArray(request.query.route) ? request.query.route[0] : request.query.route;

    if (route in WELL_KNOWN_ROUTES) {
        return { path: WELL_KNOWN_ROUTES[route], isWellKnown: true };
    }

    if (route === 'post' || route === 'profile') {
        const id = Array.isArray(request.query.id) ? request.query.id[0] : request.query.id;
        if (typeof id === 'string' && id.length > 0) {
            return { path: `/${route}/${encodeURIComponent(id)}`, isWellKnown: false };
        }
    }

    return null;
};

export default async function handler(request, response) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
        response.setHeader('Allow', 'GET, HEAD');
        return response.status(405).send('Method Not Allowed');
    }

    const route = getRoutePath(request);
    if (!route) {
        return response.status(404).send('Not Found');
    }

    const backendUrl = new URL(route.path, getBackend(getHostname(request)));
    const backendResponse = await fetch(backendUrl, { redirect: 'follow' });
    const contentType = route.isWellKnown ? 'application/json' : (backendResponse.headers.get('content-type') || 'text/html; charset=utf-8');

    response.statusCode = backendResponse.status;
    response.setHeader('Content-Type', contentType);
    response.setHeader('Cache-Control', route.isWellKnown ? 'public, max-age=3600' : 'public, max-age=300');

    if (request.method === 'HEAD') {
        return response.end();
    }

    return response.send(await backendResponse.text());
}