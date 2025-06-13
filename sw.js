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
  // 不使用外部資源，避免跨域問題
  // 以下資源將由瀏覽器自動快取
  // 'https://cdn.tailwindcss.com',
  // 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  // 'https://cdnjs.cloudflare.com/ajax/libs/chart.js/3.9.1/chart.min.js',
  // 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700&family=Kalam:wght@400;700&family=Caveat:wght@400;600;700&family=Dancing+Script:wght@400;600;700&family=Indie+Flower&family=Shadows+Into+Light&family=Amatic+SC:wght@400;700&display=swap'
];

// 安裝 Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: 正在快取檔案");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 攔截請求，優先使用快取
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 如果快取中有資源，則返回快取的資源
      if (cachedResponse) {
        return cachedResponse;
      }

      // 否則發送網路請求
      return fetch(event.request)
        .then((response) => {
          // 如果請求失敗，或者不是 GET 請求，或者是跨域請求，則直接返回
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic" ||
            (event.request.url.startsWith("http") &&
              !event.request.url.includes(self.location.origin))
          ) {
            return response;
          }

          // 複製響應（因為響應流只能使用一次）
          const responseToCache = response.clone();

          // 將新獲取的資源加入快取
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // 如果網路請求失敗且請求的是圖片，返回一個預設圖片
          if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
            return caches.match("./offline-image.png");
          }
          // 如果是 HTML 請求，返回離線頁面
          if (event.request.headers.get("accept").includes("text/html")) {
            return caches.match("./index.html");
          }
          // 其他情況，返回空響應
          return new Response("", {
            status: 408,
            statusText: "Request timed out.",
          });
        });
    })
  );
});

// 清理舊版本快取
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
