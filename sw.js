/**
 * 📦 模組：Service Worker
 * 🕒 最後更新：2025-01-14T10:30:00+08:00
 * 🧑‍💻 作者/更新者：@s123104
 * 🔢 版本：v1.0.0
 * 📝 摘要：社畜解放卡 PWA Service Worker
 */

const CACHE_NAME = "work-freedom-card-v10";
const urlsToCache = [
  "./",
  "./index.html",
  "./script.js",
  "./styles.css",
  "./manifest.json",
  "./tailwind.config.js",
  "./icon.png",
  "./icon-192.png",
  "./icon-512.png",
  "./og-image.png",
  "./robots.txt",
  "./sitemap.xml",
  "./llms.txt",
  "./README.md",
];

// 安裝事件
self.addEventListener("install", (event) => {
  // 強制跳過等待，立即激活新的 Service Worker
  self.skipWaiting();

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Service Worker: 緩存文件");
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log("Service Worker: 緩存失敗", error);
      })
  );
});

// 激活事件
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("Service Worker: 清除舊緩存", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // 強制接管所有客戶端
        return self.clients.claim();
      })
  );
});

// 攔截請求
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // 如果緩存中有，直接返回
      if (response) {
        return response;
      }

      // 否則從網路獲取
      return fetch(event.request).catch(() => {
        // 網路失敗時，對於導航請求返回離線頁面
        if (event.request.destination === "document") {
          return caches.match("./index.html");
        }
      });
    })
  );
});
