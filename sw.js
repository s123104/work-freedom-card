/**
 * 📦 模組：Service Worker
 * 🕒 最後更新：2025-06-14T04:08:54+08:00
 * 🧑‍💻 作者/更新者：@s123104
 * 🔢 版本：v1.0.0
 * 📝 摘要：社畜解放卡 PWA 的離線功能支援
 */

const CACHE_NAME = "work-freedom-card-v1";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://cdn.tailwindcss.com",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/chart.js/3.9.1/chart.min.js",
  "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Kalam:wght@400;700&family=Caveat:wght@400;600;700&family=Dancing+Script:wght@400;600;700&family=Indie+Flower&family=Shadows+Into+Light&family=Amatic+SC:wght@400;700&display=swap",
];

// 安裝 Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Service Worker: 正在快取檔案");
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// 啟動 Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== CACHE_NAME;
            })
            .map((cacheName) => {
              console.log("Service Worker: 正在移除舊的快取", cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// 攔截網路請求
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // 如果在快取中找到回應，則返回快取的回應
      if (response) {
        return response;
      }

      // 複製請求，因為請求只能使用一次
      const fetchRequest = event.request.clone();

      // 嘗試從網路獲取回應
      return fetch(fetchRequest)
        .then((response) => {
          // 檢查回應是否有效
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          // 複製回應，因為回應只能使用一次
          const responseToCache = response.clone();

          // 將回應加入快取
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // 如果網路請求失敗，嘗試返回離線頁面
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
        });
    })
  );
});
