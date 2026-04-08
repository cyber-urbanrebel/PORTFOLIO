/**
 * Service Worker — Edwin Mburu Kamau Portfolio
 * Strategy: Cache-first for assets, network-first for HTML
 */
'use strict';

var CACHE_NAME  = 'ekk-portfolio-v1';
var CACHE_URLS  = [
  '/PORTFOLIO/',
  '/PORTFOLIO/index.html',
  '/PORTFOLIO/manifest.json'
];

/* ── Install: pre-cache shell ─────────────────────────────── */
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CACHE_URLS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

/* ── Activate: remove stale caches ───────────────────────── */
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key)   { return caches.delete(key);   })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* ── Fetch: stale-while-revalidate for same-origin ───────── */
self.addEventListener('fetch', function (event) {
  var url = new URL(event.request.url);

  /* Only intercept same-origin GET requests */
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  /* HTML pages: network-first so content is always fresh */
  if (event.request.headers.get('accept') &&
      event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then(function (response) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, clone);
          });
          return response;
        })
        .catch(function () {
          return caches.match(event.request).then(function (cached) {
            return cached || caches.match('/PORTFOLIO/index.html');
          });
        })
    );
    return;
  }

  /* All other assets: cache-first */
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      var networkFetch = fetch(event.request).then(function (response) {
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, response.clone());
        });
        return response;
      });
      return cached || networkFetch;
    })
  );
});
