// NINJA AIRS Version20.4 cache reset service worker
const CACHE_VERSION='ninja-airs-v20-4-reset';
self.addEventListener('install',event=>{self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{event.respondWith(fetch(event.request));});
