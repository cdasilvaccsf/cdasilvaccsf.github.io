const version = 'v10';

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(version);
  await cache.addAll(resources);
};

self.addEventListener('install', (event) => {
  console.log(`${version} installing...`);

  event.waitUntil(
    addResourcesToCache([
      'index.html',
      'index.css',
      'icon192.png',
      'icon512.png',
	  'manifest.json',
    ])
  );
});

self.addEventListener('fetch', (event) => {
	event.respondWith(caches.match(event.request));
  });