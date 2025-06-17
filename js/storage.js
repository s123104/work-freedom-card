// Storage Module - 資料儲存與管理
import { CONFIG, setGlobalState } from "./core.js";

// 載入資料
export function loadData() {
  try {
    const data = localStorage.getItem(CONFIG.STORAGE_KEY);
    const filledDates = data ? new Map(JSON.parse(data)) : new Map();
    setGlobalState("filledDates", filledDates);
    return filledDates;
  } catch (error) {
    console.error("載入資料時發生錯誤:", error);
    return new Map();
  }
}

// 儲存資料
export function saveData() {
  try {
    const { filledDates } = getCurrentState();
    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify([...filledDates]));
  } catch (error) {
    console.error("儲存資料時發生錯誤:", error);
  }
}

// 載入成就資料
export function loadAchievements() {
  try {
    const data = localStorage.getItem(CONFIG.ACHIEVEMENTS_KEY);
    const achievements = data ? new Map(JSON.parse(data)) : new Map();
    setGlobalState("achievements", achievements);
    return achievements;
  } catch (error) {
    console.error("載入成就資料時發生錯誤:", error);
    return new Map();
  }
}

// 儲存成就資料
export function saveAchievements() {
  try {
    const { achievements } = getCurrentState();
    localStorage.setItem(
      CONFIG.ACHIEVEMENTS_KEY,
      JSON.stringify([...achievements])
    );
  } catch (error) {
    console.error("儲存成就資料時發生錯誤:", error);
  }
}

// 載入自訂預設選項
export function loadCustomPresets() {
  try {
    const data = localStorage.getItem(CONFIG.PRESETS_KEY);
    const customPresets = data ? JSON.parse(data) : [];
    setGlobalState("customPresets", customPresets);
    return customPresets;
  } catch (error) {
    console.error("載入自訂預設選項時發生錯誤:", error);
    return [];
  }
}

// 儲存自訂預設選項
export function saveCustomPresets() {
  try {
    const { customPresets } = getCurrentState();
    localStorage.setItem(CONFIG.PRESETS_KEY, JSON.stringify(customPresets));
  } catch (error) {
    console.error("儲存自訂預設選項時發生錯誤:", error);
  }
}

// 清除所有資料
export function clearAllData() {
  try {
    localStorage.removeItem(CONFIG.STORAGE_KEY);
    localStorage.removeItem(CONFIG.ACHIEVEMENTS_KEY);
    localStorage.removeItem(CONFIG.PRESETS_KEY);

    setGlobalState("filledDates", new Map());
    setGlobalState("achievements", new Map());
    setGlobalState("customPresets", []);

    console.log("所有資料已清除");
  } catch (error) {
    console.error("清除資料時發生錯誤:", error);
  }
}

// 資料遷移功能
export function performDataMigration() {
  // 檢查是否需要資料遷移
  const oldKeys = ["resignationCard_v4", "resignationCard_v3"];
  let migrationCount = 0;

  for (const oldKey of oldKeys) {
    const oldData = localStorage.getItem(oldKey);
    if (oldData) {
      try {
        // 遷移舊資料邏輯
        console.log(`遷移資料從 ${oldKey} 到 ${CONFIG.STORAGE_KEY}`);
        localStorage.removeItem(oldKey);
        migrationCount++;
      } catch (error) {
        console.error(`遷移 ${oldKey} 時發生錯誤:`, error);
      }
    }
  }

  return migrationCount;
}

// 取得當前狀態的輔助函數
function getCurrentState() {
  // 這裡需要從主應用程式取得當前狀態
  // 暫時用 window 物件作為狀態容器
  return {
    filledDates: window.filledDates || new Map(),
    achievements: window.achievements || new Map(),
    customPresets: window.customPresets || [],
  };
}
