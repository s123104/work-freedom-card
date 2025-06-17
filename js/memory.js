// Memory Management Module - 記憶體管理與優化
// 記憶體監控配置
const MEMORY_CONFIG = {
  WARNING_THRESHOLD: 80 * 1024 * 1024, // 80MB 警告閾值
  CRITICAL_THRESHOLD: 100 * 1024 * 1024, // 100MB 危險閾值
  CHECK_INTERVAL: 30000, // 30秒檢查一次
  CLEANUP_INTERVAL: 300000, // 5分鐘清理一次
};

// 記憶體監控狀態
let memoryMonitor = null;
let cleanupTimer = null;
let memoryStats = {
  currentUsage: 0,
  peakUsage: 0,
  lastCleanup: Date.now(),
  warningCount: 0,
};

// WeakMap 用於追蹤物件生命週期
const objectRegistry = new WeakMap();
const eventListeners = new Map();

// 啟動記憶體監控
export function startMemoryMonitoring() {
  if (memoryMonitor) return;

  console.log("🧠 啟動記憶體監控系統");

  // 定期檢查記憶體使用情況
  memoryMonitor = setInterval(checkMemoryUsage, MEMORY_CONFIG.CHECK_INTERVAL);

  // 定期執行記憶體清理
  cleanupTimer = setInterval(
    performMemoryCleanup,
    MEMORY_CONFIG.CLEANUP_INTERVAL
  );

  // 監聽頁面可見性變化
  document.addEventListener("visibilitychange", handleVisibilityChange);

  // 監聽記憶體壓力事件 (如果支援)
  if ("memory" in performance) {
    window.addEventListener("beforeunload", logMemoryStats);
  }
}

// 停止記憶體監控
export function stopMemoryMonitoring() {
  if (memoryMonitor) {
    clearInterval(memoryMonitor);
    memoryMonitor = null;
  }

  if (cleanupTimer) {
    clearInterval(cleanupTimer);
    cleanupTimer = null;
  }

  document.removeEventListener("visibilitychange", handleVisibilityChange);
  window.removeEventListener("beforeunload", logMemoryStats);

  console.log("🧠 記憶體監控系統已停止");
}

// 檢查記憶體使用情況
function checkMemoryUsage() {
  try {
    if (!("memory" in performance)) {
      return; // 瀏覽器不支援記憶體 API
    }

    const memInfo = performance.memory;
    const currentUsage = memInfo.usedJSHeapSize;
    const totalHeapSize = memInfo.totalJSHeapSize;
    const heapLimit = memInfo.jsHeapSizeLimit;

    memoryStats.currentUsage = currentUsage;
    memoryStats.peakUsage = Math.max(memoryStats.peakUsage, currentUsage);

    // 記憶體使用率
    const usagePercentage = (currentUsage / heapLimit) * 100;

    // 警告檢查
    if (currentUsage > MEMORY_CONFIG.WARNING_THRESHOLD) {
      memoryStats.warningCount++;
      console.warn(
        `⚠️ 記憶體使用警告: ${formatBytes(
          currentUsage
        )} (${usagePercentage.toFixed(1)}%)`
      );

      if (currentUsage > MEMORY_CONFIG.CRITICAL_THRESHOLD) {
        console.error(`🚨 記憶體使用危險: ${formatBytes(currentUsage)}`);
        performEmergencyCleanup();
      }
    }

    // 更新記憶體統計顯示
    updateMemoryDisplay(currentUsage, totalHeapSize, heapLimit);
  } catch (error) {
    console.error("記憶體檢查錯誤:", error);
  }
}

// 執行記憶體清理
function performMemoryCleanup() {
  console.log("🧹 執行記憶體清理...");

  try {
    // 清理過期的事件監聽器
    cleanupEventListeners();

    // 清理未使用的 DOM 引用
    cleanupDOMReferences();

    // 清理快取資料
    cleanupCacheData();

    // 觸發垃圾回收 (如果支援)
    if (window.gc) {
      window.gc();
    }

    memoryStats.lastCleanup = Date.now();
    console.log("✅ 記憶體清理完成");
  } catch (error) {
    console.error("記憶體清理錯誤:", error);
  }
}

// 緊急記憶體清理
function performEmergencyCleanup() {
  console.log("🆘 執行緊急記憶體清理...");

  // 暫停非關鍵動畫
  pauseNonCriticalAnimations();

  // 清理大型物件
  cleanupLargeObjects();

  // 執行一般清理
  performMemoryCleanup();

  // 顯示使用者通知
  showMemoryWarning();
}

// 清理事件監聽器
function cleanupEventListeners() {
  let cleanedCount = 0;

  eventListeners.forEach((listeners, element) => {
    // 檢查元素是否還在 DOM 中
    if (!document.contains(element)) {
      listeners.forEach(({ event, handler }) => {
        element.removeEventListener(event, handler);
      });
      eventListeners.delete(element);
      cleanedCount++;
    }
  });

  if (cleanedCount > 0) {
    console.log(`🗑️ 清理了 ${cleanedCount} 個無效事件監聽器`);
  }
}

// 清理 DOM 引用
function cleanupDOMReferences() {
  // 清理可能的循環引用
  const elements = document.querySelectorAll("[data-temp]");
  elements.forEach((el) => {
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  });
}

// 清理快取資料
function cleanupCacheData() {
  // 清理過期的圖片快取
  if (window.imageCache) {
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    for (const [key, data] of window.imageCache.entries()) {
      if (now - data.timestamp > oneHour) {
        window.imageCache.delete(key);
      }
    }
  }

  // 清理過期的計算結果快取
  if (window.calculationCache) {
    window.calculationCache.clear();
  }
}

// 暫停非關鍵動畫
function pauseNonCriticalAnimations() {
  // 暫停裝飾性動畫
  const animations = document.getAnimations();
  animations.forEach((animation) => {
    if (!animation.effect?.target?.dataset?.critical) {
      animation.pause();
    }
  });
}

// 清理大型物件
function cleanupLargeObjects() {
  // 清理圖表實例
  if (window.dailyChart) {
    window.dailyChart.destroy();
    window.dailyChart = null;
  }

  // 清理大型陣列
  if (window.largeDataArrays) {
    window.largeDataArrays.length = 0;
  }
}

// 處理頁面可見性變化
function handleVisibilityChange() {
  if (document.hidden) {
    // 頁面不可見時減少監控頻率
    if (memoryMonitor) {
      clearInterval(memoryMonitor);
      memoryMonitor = setInterval(
        checkMemoryUsage,
        MEMORY_CONFIG.CHECK_INTERVAL * 2
      );
    }
  } else {
    // 頁面重新可見時恢復正常監控
    if (memoryMonitor) {
      clearInterval(memoryMonitor);
      memoryMonitor = setInterval(
        checkMemoryUsage,
        MEMORY_CONFIG.CHECK_INTERVAL
      );
    }
  }
}

// 安全的事件監聽器註冊
export function addEventListenerSafe(element, event, handler, options = {}) {
  element.addEventListener(event, handler, options);

  // 記錄監聽器以便後續清理
  if (!eventListeners.has(element)) {
    eventListeners.set(element, []);
  }
  eventListeners.get(element).push({ event, handler, options });
}

// 安全的事件監聽器移除
export function removeEventListenerSafe(element, event, handler) {
  element.removeEventListener(event, handler);

  const listeners = eventListeners.get(element);
  if (listeners) {
    const index = listeners.findIndex(
      (l) => l.event === event && l.handler === handler
    );
    if (index !== -1) {
      listeners.splice(index, 1);
    }

    if (listeners.length === 0) {
      eventListeners.delete(element);
    }
  }
}

// 記憶體統計工具
export function getMemoryStats() {
  const stats = { ...memoryStats };

  if ("memory" in performance) {
    const memInfo = performance.memory;
    stats.current = formatBytes(memInfo.usedJSHeapSize);
    stats.total = formatBytes(memInfo.totalJSHeapSize);
    stats.limit = formatBytes(memInfo.jsHeapSizeLimit);
    stats.percentage = (
      (memInfo.usedJSHeapSize / memInfo.jsHeapSizeLimit) *
      100
    ).toFixed(1);
  }

  return stats;
}

// 記憶體使用量格式化
function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

// 更新記憶體顯示
function updateMemoryDisplay(current, total, limit) {
  const memoryIndicator = document.getElementById("memory-indicator");
  if (memoryIndicator) {
    const percentage = (current / limit) * 100;
    memoryIndicator.textContent = `${formatBytes(
      current
    )} (${percentage.toFixed(1)}%)`;

    // 根據使用率調整顏色
    memoryIndicator.className =
      percentage > 80
        ? "memory-critical"
        : percentage > 60
        ? "memory-warning"
        : "memory-normal";
  }
}

// 顯示記憶體警告
function showMemoryWarning() {
  const notification = document.createElement("div");
  notification.className = "memory-warning-notification";
  notification.innerHTML = `
    <div class="memory-warning-content">
      <i class="fas fa-exclamation-triangle"></i>
      <span>記憶體使用量過高，已執行自動優化</span>
      <button onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;

  document.body.appendChild(notification);

  // 3秒後自動消失
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}

// 記錄記憶體統計
function logMemoryStats() {
  const stats = getMemoryStats();
  console.log("📊 記憶體使用統計:", {
    peak: formatBytes(stats.peakUsage),
    warnings: stats.warningCount,
    runtime: (Date.now() - stats.lastCleanup) / 1000 + "秒",
  });
}
