// Minimal service worker — exists purely so browsers recognise this as an installable app.
// It doesn't cache or intercept anything, so the app always loads fresh from the network,
// exactly like it does today in a normal browser tab.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', () => {
  // Intentionally not intercepting — always let the network handle requests.
});
