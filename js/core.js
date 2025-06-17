// Core Module - 核心配置與通用函數
// 基本配置常數
export const CONFIG = {
  STORAGE_KEY: "resignationCard_v5",
  PRESETS_KEY: "resignationCard_presets_v2",
  ACHIEVEMENTS_KEY: "resignationCard_achievements_v1",
  TOTAL_CELLS: 100,
  VERSION: "2.0.0",
};

// 心情圖示配置
export const moodIcons = {
  money: "💰",
  burnout: "😴",
  annoying: "💩",
  stuck: "📈",
  bad: "💔",
  bullying: "🎯",
};

// 心情顏色配置
export const moodColors = {
  money: "#10b981",
  burnout: "#6366f1",
  annoying: "#8b5cf6",
  stuck: "#06b6d4",
  bad: "#ec4899",
  bullying: "#ef4444",
};

// 手寫字體陣列
export const handwriteFonts = [
  "Kalam",
  "Patrick Hand",
  "Caveat",
  "Dancing Script",
  "Indie Flower",
  "Shadows Into Light",
  "Amatic SC",
  "Permanent Marker",
  "Covered By Your Grace",
  "Satisfy",
];

// 全域狀態變數
export let isSavingEvent = false;
export let isInitialized = false;
export let filledDates = new Map();
export let customPresets = [];
export let achievements = new Map();

// 設定全域狀態的輔助函數
export function setGlobalState(key, value) {
  switch (key) {
    case "isSavingEvent":
      isSavingEvent = value;
      break;
    case "isInitialized":
      isInitialized = value;
      break;
    case "filledDates":
      filledDates = value;
      break;
    case "customPresets":
      customPresets = value;
      break;
    case "achievements":
      achievements = value;
      break;
  }
}

// 通用工具函數
export function toLocalDateStr(date) {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
}

export function formatDisplayDate(dateInput) {
  if (typeof dateInput === "string") {
    const parts = dateInput.split("-");
    return `${parts[1]}/${parts[2]}`;
  }
  return toLocalDateStr(dateInput).substring(5).replace("-", "/");
}

export function getRandomFont(index) {
  return handwriteFonts[index % handwriteFonts.length];
}
