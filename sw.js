const CACHE_NAME = 'app-now-v1';
const ASSETS = [
'index.html',
'https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;700;900&display=swap'
];

// התקנת ה-Service Worker ושמירת קבצים בזיכרון (Cache)
self.addEventListener('install', (event) => {
event.waitUntil(
caches.open(CACHE_NAME).then((cache) => {
return cache.addAll(ASSETS);
})
);
});

// ניהול בקשות רשת - טעינה מהזיכרון במידת האפשר
self.addEventListener('fetch', (event) => {
event.respondWith(
caches.match(event.request).then((response) => {
return response || fetch(event.request);
})
);
});
