self.addEventListener("install", event => event.waitUntil(self.skipWaiting()));
self.addEventListener("activate", event =>
  event.waitUntil(self.clients.claim())
);
workbox.precaching.precacheAndRoute(self.__precacheManifest);
workbox.precaching.precacheAndRoute([
  "https://yoyo-gift-api.herokuapp.com/giftCards"
]);
// app-shell
workbox.routing.registerRoute("/", workbox.strategies.networkFirst());
