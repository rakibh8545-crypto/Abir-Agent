// Service Worker for AI Code Agent PWA
const CACHE_NAME = 'ai-code-agent-v1';
const urlsToCache = [
  '/Abir-Agent/app.html',
  '/Abir-Agent/manifest.json',
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(() => {
        console.log('Some resources failed to cache');
      });
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - Network first strategy for API calls, Cache first for assets
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // API calls - Network first
  if (url.hostname === 'api.anthropic.com') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Don't cache API responses
          return response;
        })
        .catch(() => {
          return new Response(
            JSON.stringify({ error: 'Offline - API not available' }),
            { status: 503, headers: { 'Content-Type': 'application/json' } }
          );
        })
    );
    return;
  }

  // Assets - Cache first
  event.respondWith(
    caches.match(request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(request)
          .then(response => {
            // Clone the response
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, responseClone);
            });
            return response;
          })
          .catch(() => {
            // Return offline page if available
            return caches.match('/Abir-Agent/app.html');
          });
      })
  );
});

// Background sync for offline support
self.addEventListener('sync', event => {
  if (event.tag === 'sync-messages') {
    event.waitUntil(syncMessages());
  }
});

async function syncMessages() {
  try {
    // Sync pending messages when back online
    const pendingMessages = await getPendingMessages();
    for (const message of pendingMessages) {
      await sendMessage(message);
    }
    await clearPendingMessages();
  } catch (error) {
    console.error('Sync failed:', error);
  }
}

async function getPendingMessages() {
  // This would retrieve from IndexedDB in a real implementation
  return [];
}

async function clearPendingMessages() {
  // Clear pending messages from IndexedDB
}

async function sendMessage(message) {
  // Send message to API
}
