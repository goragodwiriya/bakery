const CACHE_NAME = 'bakery-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/assets/css/animations.css',
  '/assets/css/cart.css',
  '/assets/css/modal.css',
  '/assets/css/responsive.css',
  '/assets/js/main.js',
  '/assets/js/animations.js',
  '/assets/js/cart.js',
  '/assets/images/hero-banner.svg',
  '/assets/images/custard-bread.svg',
  '/assets/images/pandan-bread.svg',
  '/assets/images/pumpkin-bread.svg',
  '/assets/fonts/Prompt-Regular.woff2',
  '/assets/fonts/Prompt-Bold.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          response => {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
