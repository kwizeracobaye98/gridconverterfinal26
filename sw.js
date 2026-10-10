const CACHE_NAME = 'grid-converter-cache-v5';
const APP_SHELL = [
  './',
  './index.html',
  './offline.html',
  './manifest.json',
  './leaflet.css',
  './leaflet.js',
  './offline-map-layer.js',
  './image.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

// Notify controlled pages when a new service worker takes control.
self.addEventListener('activate', event => {
  event.waitUntil(
    self.clients.matchAll().then(clients => {
      clients.forEach(c => c.postMessage({type: 'sw-activated', cache: CACHE_NAME}));
    })
  );
});

self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    // Network-first for app navigations, then cached app shell offline.
    event.respondWith(
      fetch(event.request)
        .then(resp => {
          const responseClone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('./index.html', responseClone));
          return resp;
        })
        .catch(() => caches.match('./index.html').then(cached => cached || caches.match('./offline.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(networkResponse => {
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        return networkResponse;
      }).catch(() => caches.match(event.request));
    })
  );
});
