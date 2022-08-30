/**
 * a ServiceWorker to bypass cors and all this stuff. 
 */ 

const serviceWorker = this;

const CACHE_NAME = 'v0.0.0-pre.0';
  const urlsToPrefetch = [
    'https://unpkg.com/markdown-wasm@1.2.0/dist/markdown.js',
    '/markdown.wasm',
    '/favicon.ico',
  ];

const noCors = { mode: 'no-cors' };

const cacheAndReturn = async (request, response) =>
  caches.open(CACHE_NAME).put(request, response.clone()) &&
    response;

serviceWorker.addEventListener('fetch', (interceptedRequest) => 
  interceptedRequest.respondWith(caches.match(interceptedRequest.request)
    .then(async hit => hit || cacheAndReturn(interceptedRequest, (
      await interceptedRequest.preloadResponse ||
        fetch(interceptedReqest.request, noCors)
    )))
  ));

serviceWorker.addEventListener('install', (installEvent) => 
  installEvent.waitUntil(caches.open(CACHE_NAME)
    .addAll(urlsToPrefetch.map((urlToPrefetch) =>
      new Request(urlToPrefetch, noCors))) &&
        log('caches['+CACHE_NAME+'].addAll()')));

serviceWorker.addEventListener('activate', (activateEvent) => 
  activateEvent.waitUntil(serviceWorker.registration.navigationPreload &&
    serviceWorker.registration.navigationPreload.enable()));
