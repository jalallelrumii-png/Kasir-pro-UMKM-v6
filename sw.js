const CACHE_NAME = 'kasir-v6-apple-std';
const ASSETS = ['./', './index.html', './manifest.json', 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css', 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
