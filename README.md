<!--
  📦 模組：社畜解放卡
  🕒 最後更新：2025-06-14T20:40:26+08:00
  🧑‍💻 作者/更新者：@s123104
  🔢 版本：v1.7.0
  📝 摘要：移除圖標白色背景，優化PWA安裝指引排版和圖標
-->

<div align="center">

# 🪪 社畜解放卡 | Work Freedom Card

[![GitHub license](https://img.shields.io/github/license/s123104/work-freedom-card)](https://github.com/s123104/work-freedom-card/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/s123104/work-freedom-card)](https://github.com/s123104/work-freedom-card/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/s123104/work-freedom-card)](https://github.com/s123104/work-freedom-card/network)
[![PWA Ready](https://img.shields.io/badge/PWA-ready-brightgreen.svg)](https://github.com/s123104/work-freedom-card)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/s123104/work-freedom-card/pulls)

<img src="https://s123104.github.io/web/og-image.png" alt="社畜解放卡預覽" width="600px">

> 一張卡，記下你的每一次職場厭世  
> 一個 App，為你紀錄通往自由的 100 步

[🚀 立即體驗](https://s123104.github.io/work-freedom-card) | [📱 安裝教學](#-pwa-安裝教學) | [📖 說明文件](#-專案簡介) | [🤝 貢獻指南](#-貢獻指南)

</div>

---

## 📌 專案簡介

**《社畜解放卡》**是一款支援 PWA 的開源前端工具，結合每日心情紀錄、離職點數收集、厭世指數分析與 AI 洞察建議，幫助你掌握職場情緒、倒數自由之日。

### ✨ 主要特色

- 🔄 **無需後端**：純前端實現，一個 HTML 檔案即可運行
- 🔒 **隱私至上**：所有資料存於本地，不上傳任何資訊
- 📊 **數據視覺化**：直觀圖表展示你的職場情緒趨勢
- 🏆 **成就系統**：10 種隱藏成就，記錄你的離職之路
- 🤖 **AI 整合**：一鍵匯出資料至 AI 助手進行職涯分析
- 📱 **跨平台 PWA**：可安裝於各種裝置，支援離線使用

---

## 🖼️ 功能特色

- ✅ **離職集點**：記錄每日職場心情，集滿 100 點即可「畢業」
- 🔥 **心情分類**：錢途茫茫(黃)、身心俱疲(紅)、鳥事一堆(藍紫)、缺乏成長(灰)
- 💬 **事件記錄**：支援文字輸入與常見事件快速鍵
- 📊 **厭世指數分析**：自動計算厭世指數，分析主要厭世來源
- 🏷️ **厭世來源分頁**：三排五列網格布局，支持分頁瀏覽
- 🏆 **成就系統**：解鎖 10 種不同的離職成就，記錄你的職場生存之路
- 📈 **圖表趨勢**：視覺化你的離職進度和心情趨勢
- 🤖 **AI Prompt 匯出**：一鍵生成 AI 提示詞，可直接貼到 ChatGPT 等 AI 工具進行深度分析
- 📲 **PWA 支援**：可安裝到手機主畫面，離線使用

---

## 🧑‍💻 技術堆疊

| 技術                        | 說明                                      |
| --------------------------- | ----------------------------------------- |
| `HTML5 + CSS3 + JavaScript` | 單一檔案設計，純前端                      |
| `Tailwind CSS`              | 用於樣式快速開發與響應式設計              |
| `Chart.js`                  | 用於每日趨勢圖表視覺化                    |
| `Font Awesome`              | 圖示與 UX 增強                            |
| `LocalStorage`              | 儲存使用者資料，支援離線使用              |
| `PWA`                       | Progressive Web App，支援安裝與全螢幕使用 |
| `Service Worker`            | 實現離線功能與資源快取                    |
| `Web Manifest`              | 提供完整 PWA 安裝體驗                     |
| `JSON-LD`                   | 支援 SEO 結構化資料                       |
| `AI Export`                 | 一鍵產出完整 JSON 資料與專屬分析指令      |

---

## 📦 安裝與使用

### 方式一：直接使用線上版

訪問 [https://s123104.github.io/work-freedom-card](https://s123104.github.io/work-freedom-card) 即可開始使用。

### 方式二：部署到自己的 GitHub Pages

1. Fork [本專案](https://github.com/s123104/work-freedom-card)
2. 將內容放入你的 GitHub Pages 資料夾，如 `username.github.io/work-freedom-card`
3. 開啟 GitHub Pages（Settings → Pages → 選取分支）

### 方式三：本機使用

```bash
# 克隆專案
git clone https://github.com/s123104/work-freedom-card.git

# 進入專案目錄
cd work-freedom-card

# 直接在瀏覽器中打開
open index.html  # macOS
# 或
start index.html  # Windows
```

> 無需任何建置工具，打開 `index.html` 即可使用。

---

## 📱 PWA 安裝教學

### iOS (Safari) 安裝步驟

1. 使用 Safari 開啟 [社畜解放卡](https://s123104.github.io/work-freedom-card)
2. 點擊底部「分享」按鈕 <img src="https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons/images/app-icon-main_2x.png" width="20">
3. 向上滑動，選擇「加入主畫面」
4. 點擊右上角「加入」完成安裝

### Android (Chrome) 安裝步驟

1. 使用 Chrome 開啟 [社畜解放卡](https://s123104.github.io/work-freedom-card)
2. 等待系統提示或點擊右上角「⋮」→「安裝應用程式」
3. 點擊「安裝」確認

**離線使用**：安裝 PWA 後，即使在沒有網路的情況下也能正常使用所有功能！

---

## 🏆 成就系統

解鎖各種隱藏成就，記錄你的離職之路！目前包含 10 種成就：

| 成就名稱     | 解鎖條件                   |
| ------------ | -------------------------- |
| 第一步       | 記錄第一個厭世事件         |
| 小有成就     | 記錄 10 個厭世事件         |
| 半路出家     | 記錄 50 個厭世事件         |
| 自由之路     | 集滿 100 點，準備離職！    |
| 極度厭世     | 厭世指數超過 100           |
| 錢途茫茫     | 記錄 10 次「錢途茫茫」心情 |
| 身心俱疲     | 記錄 10 次「身心俱疲」心情 |
| 鳥事專家     | 記錄 10 次「鳥事一堆」心情 |
| 永遠原地踏步 | 記錄 10 次「缺乏成長」心情 |
| 創意無限     | 創建 5 個自訂爛事標籤      |

---

## 📤 匯出分析用 AI Prompt

內建 GPT / Claude 分析格式，點擊「匯出至 AI」即可生成完整 Prompt，適用於：

- ChatGPT
- Claude.ai
- Gemini
- 任何支援 JSON 輸入的 LLM

生成的 Prompt 包含：

- 完整的職場心情記錄（JSON 格式）
- 分析指引（模式識別、壓力源分析、趨勢洞察等）
- 離職建議與職涯改善方向

---

## 🔒 資料安全與隱私

- **本地儲存**：所有資料僅存於瀏覽器的 `localStorage`，不會上傳至任何伺服器
- **無追蹤**：不包含任何分析或追蹤程式碼
- **資料控制**：提供一鍵清除功能，使用者完全掌控自己的資料
- **開源透明**：程式碼完全開源，歡迎檢視與貢獻

---

## 💡 延伸應用建議

| 模組               | 說明                                   |
| ------------------ | -------------------------------------- |
| `工作壓力排行榜`   | 匿名分享厭世指數，生成共感牆           |
| `主管地獄指數`     | 統計每位主管被抱怨次數與關鍵字         |
| `匿名週報生成器`   | 自動整理職場日誌，生成 PDF or Markdown |
| `Slack / Line Bot` | 每日提醒記錄心情與爛事                 |

---

## 🧑‍🎨 設計理念

- **無需登入**：匿名使用，降低使用門檻
- **單一檔案**：極簡架構，方便部署與分享
- **數據驅動**：用數據轉化情緒，用幽默記錄痛苦
- **實用主義**：不靠後端，也能有完整互動與 AI 整合

---

## 🤝 貢獻指南

歡迎貢獻程式碼、提出建議或回報問題！

1. Fork 本專案
2. 創建你的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 開啟 Pull Request

---

## 📜 版本歷史

查看 [CHANGELOG.md](https://github.com/s123104/work-freedom-card/blob/master/CHANGELOG.md) 了解完整版本歷史。

---

## 📚 授權條款

MIT License. 歡迎自由使用、改作、部署與分享，只需保留作者資訊。

```
© 2025 s123104 (https://github.com/s123104)

本專案開源並採用 MIT 授權，您可以自由 fork、修改、重新發佈
但請在明顯處標註原作者或附上 GitHub 來源連結 🙌
```

---

## 🧙‍♂️ 關於作者

由 [@s123104](https://github.com/s123104) 精神燃燒製作  
如果你也在倒數離職，我們就是朋友 ☕💼🧠

---

<div align="center">

> 社畜解放卡 —— 紀錄你的厭世日常，分析你的職涯趨勢，找到屬於你的自由之路。

</div>
