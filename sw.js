const CACHE_NAME = 'nmr-v1';
         const ASSETS = [
           '/1H-NMR-Gen/',
           '/1H-NMR-Gen/index.html',
           '/1H-NMR-Gen/manifest.json',
           '/1H-NMR-Gen/tesseract.min.js',
           '/1H-NMR-Gen/icon-192.png',
           '/1H-NMR-Gen/icon-512.png'
         ];
   
        self.addEventListener('install', (e) => {
          e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
        });
   
        self.addEventListener('fetch', (e) => {
          e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
        });
