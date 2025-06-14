/\*\*

- 📦 模組：社畜解放卡 - 離職集點進度追蹤器
- 🕒 最後更新：2025-06-15T03:04:02+08:00
- 🧑‍💻 作者/更新者：@s123104
- 🔢 版本：v2.4.0
- 📝 摘要：新增第 6 個心情分類「職場霸凌」，調整佈局為電腦 3 列手機 2 列
-
- 🎯 影響範圍：心情系統、UI 佈局、統計顯示、圖表配置、成就系統
- ✅ 測試狀態：已完成功能測試
- 🔒 安全考量：向後兼容，新增心情類型不影響現有數據
- 📊 效能影響：新增第 6 種心情狀態統計和圖表數據
- 🏛️ 架構決策：擴展心情分類系統，優化響應式佈局
  \*/

# 🎯 社畜解放卡 - 離職集點進度追蹤器

[![Version](https://img.shields.io/badge/version-v2.4.0-blue.svg)](https://github.com/s123104/work-freedom-card)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/s123104/work-freedom-card/blob/main/LICENSE)
[![PWA](https://img.shields.io/badge/PWA-enabled-brightgreen.svg)](https://s123104.github.io/work-freedom-card/)

一個幫助社畜記錄工作中各種鳥事，並以遊戲化方式追蹤離職進度的 PWA 應用程式。

## ✨ 主要功能

### 🎮 核心功能

- **100 格集點系統**：每個格子代表一個工作日的心情記錄
- **六大心情分類**：錢途茫茫、身心俱疲、鳥事一堆、缺乏成長、破爛心情、職場霸凌
- **詳細事件記錄**：長按格子可記錄具體發生的事件
- **厭世指數計算**：智能分析文字內容，量化你的厭世程度
- **心情趨勢圖表**：視覺化呈現 14 天心情變化趨勢

<div align="center">

![社畜解放卡](./og-image.png)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/s123104/work-freedom-card/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/s123104/work-freedom-card.svg)](https://github.com/s123104/work-freedom-card/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/s123104/work-freedom-card.svg)](https://github.com/s123104/work-freedom-card/network)

**免費開源的職場壓力管理工具**

記錄每日職場心情與鳥事，集滿 100 點離職點數邁向自由！

[🚀 立即使用](https://s123104.github.io/work-freedom-card/) | [📖 使用指南](#使用指南) | [🛠️ 安裝說明](#安裝說明) | [🤝 貢獻指南](#貢獻指南)

</div>

## ✨ 核心功能

### 🎯 離職集點系統

- **100 點集滿離職**：每次記錄職場負面事件獲得點數
- **六大心情分類**：錢途茫茫、身心俱疲、鳥事一堆、缺乏成長、破爛心情、職場霸凌
- **智能點數計算**：根據事件嚴重程度自動分配點數

### 📊 厭世指數分析

- **即時數據統計**：自動計算總厭世指數和平均值
- **趨勢圖表顯示**：視覺化呈現心情變化趨勢
- **壓力來源分析**：識別主要厭世來源並提供改善建議

### 🏆 成就系統

- **10 種離職成就**：從「初來乍到」到「自由鳥人」
- **進度追蹤**：實時顯示成就解鎖進度
- **激勵機制**：透過成就系統增加使用動機

### 🤖 AI 分析匯出

- **一鍵生成提示詞**：自動整理數據生成 AI 分析提示
- **多平台支援**：支援 ChatGPT、Claude、Gemini、Grok
- **個人化建議**：獲得專業的職涯發展建議

### 📱 PWA 技術支援

- **離線使用**：無網路環境下正常運作
- **安裝至桌面**：支援 iOS、Android、Windows 等平台
- **原生體驗**：媲美原生應用的使用體驗

## 🎨 技術特色

- **🔒 隱私保護**：所有資料存於本地，不上傳任何個人資訊
- **📱 響應式設計**：完美適配手機、平板、桌面等各種裝置
- **⚡ 純前端實現**：HTML5 + CSS3 + JavaScript，無需後端
- **🎯 SEO 優化**：完整的搜尋引擎優化，支援社群分享
- **🌐 PWA 標準**：Service Worker + Web Manifest 完整實現

## 🚀 快速開始

### 線上使用

直接訪問：[https://s123104.github.io/work-freedom-card/](https://s123104.github.io/work-freedom-card/)

### 本地部署

```bash
# 克隆專案
git clone https://github.com/s123104/work-freedom-card.git

# 進入專案目錄
cd work-freedom-card

# 啟動本地服務器（任選一種）
python -m http.server 8000
# 或
npx serve .
# 或
php -S localhost:8000

# 瀏覽器訪問
open http://localhost:8000
```

## 📖 使用指南

### 基本操作

1. **記錄心情**：點擊格子標記日期，長按記錄詳細事件
2. **選擇分類**：選擇對應的心情分類（錢途茫茫、身心俱疲等）
3. **查看統計**：即時查看厭世指數和趨勢分析
4. **解鎖成就**：達成條件自動解鎖相應成就

### 進階功能

- **AI 分析**：點擊「AI 分析匯出」生成專業分析提示詞
- **數據分享**：使用分享功能與朋友分享進度
- **PWA 安裝**：點擊瀏覽器提示安裝至設備

## 🛠️ 安裝說明

### PWA 安裝

#### 📱 iOS (Safari)

1. 點擊底部分享按鈕 📤
2. 向下滑動找到「加入主畫面」
3. 點擊「新增」完成安裝

#### 🤖 Android (Chrome)

1. 點擊右上角三點選單 ⋮
2. 選擇「安裝應用程式」
3. 點擊「安裝」完成

#### 💻 桌面版 (Chrome/Edge)

1. 點擊網址列右側的安裝圖示 ⬇️
2. 點擊「安裝」
3. 應用程式將出現在應用程式列表中

## 🎯 目標用戶

- **職場工作者**：需要管理工作壓力的上班族
- **轉職考慮者**：正在考慮離職或轉職的員工
- **心理健康關注者**：重視心理健康的個人
- **數據分析愛好者**：喜歡透過數據了解自己的用戶

## 🌟 使用場景

- **每日心情記錄**：下班後記錄當天職場心情
- **壓力趨勢分析**：週期性檢視工作壓力變化
- **離職決策參考**：透過數據分析是否該離職
- **職涯規劃討論**：與 AI 助手討論職業發展

## 📊 專案統計

- **開發語言**：HTML5, CSS3, JavaScript
- **框架工具**：Tailwind CSS, Chart.js, Font Awesome
- **檔案大小**：< 2MB（包含所有資源）
- **支援瀏覽器**：Chrome, Firefox, Safari, Edge
- **支援平台**：iOS, Android, Windows, macOS, Linux

## 🤝 貢獻指南

歡迎所有形式的貢獻！

### 如何貢獻

1. Fork 本專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

### 貢獻類型

- 🐛 Bug 修復
- ✨ 新功能開發
- 📝 文檔改進
- 🎨 UI/UX 優化
- 🌐 多語言支援
- 🔧 性能優化

## 📄 授權條款

本專案採用 [MIT License](LICENSE) 授權。

```
MIT License

Copyright (c) 2025 s123104

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🔗 相關連結

- **專案首頁**：[https://s123104.github.io/work-freedom-card/](https://s123104.github.io/work-freedom-card/)
- **GitHub 倉庫**：[https://github.com/s123104/work-freedom-card](https://github.com/s123104/work-freedom-card)
- **問題回報**：[GitHub Issues](https://github.com/s123104/work-freedom-card/issues)
- **功能建議**：[GitHub Discussions](https://github.com/s123104/work-freedom-card/discussions)

## 📞 聯絡資訊

- **作者**：[@s123104](https://github.com/s123104)
- **Email**：透過 GitHub Issues 聯絡
- **社群**：歡迎在 GitHub Discussions 參與討論

## 🙏 致謝

感謝所有為本專案做出貢獻的開發者和使用者！

特別感謝：

- [Tailwind CSS](https://tailwindcss.com/) - 優秀的 CSS 框架
- [Chart.js](https://www.chartjs.org/) - 強大的圖表庫
- [Font Awesome](https://fontawesome.com/) - 豐富的圖標庫
- [Google Fonts](https://fonts.google.com/) - 美觀的字體

---

<div align="center">

**如果這個專案對你有幫助，請給個 ⭐ Star 支持一下！**

Made with ❤️ by [@s123104](https://github.com/s123104)

</div>
