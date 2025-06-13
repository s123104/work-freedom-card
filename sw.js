/**
 * 📦 模組：Service Worker
 * 🕒 最後更新：2025-06-14T04:08:54+08:00
 * 🧑‍💻 作者/更新者：@s123104
 * 🔢 版本：v1.0.0
 * 📝 摘要：社畜解放卡 PWA 的離線功能支援
 */

// 社畜解放卡 Service Worker
const CACHE_NAME = "work-freedom-card-v1.5.0";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
];

// 安裝 Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(ASSETS);
    })
  );
});

// 攔截請求
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // 如果在快取中找到，則返回快取的版本
      if (response) {
        return response;
      }

      // 否則發送網路請求
      return fetch(event.request).then((response) => {
        // 檢查是否有效的回應
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // 複製回應以便快取和返回
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// 清理舊版快取
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
