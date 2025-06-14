/*
 * 📦 模組：社畜解放卡 - Tailwind CSS 配置
 * 🕒 最後更新：2025-01-14T15:30:00+08:00
 * 🧑‍💻 作者/更新者：@s123104
 * 🔢 版本：v1.4.0
 * 📝 摘要：從 index.html 拆分出的 Tailwind 配置
 */

tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9f4",
          100: "#dcf4e4",
          200: "#bbe8cc",
          300: "#8cd5a8",
          400: "#5bb97d",
          500: "#3da35d",
          600: "#2d8049",
          700: "#26663d",
          800: "#215233",
          900: "#1d432b",
        },
        secondary: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
        accent: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["Noto Sans TC", "sans-serif"],
        "handwrite-1": ["Kalam", "cursive"],
        "handwrite-2": ["Caveat", "cursive"],
        "handwrite-3": ["Dancing Script", "cursive"],
        "handwrite-4": ["Indie Flower", "cursive"],
        "handwrite-5": ["Shadows Into Light", "cursive"],
        "handwrite-6": ["Amatic SC", "cursive"],
      },
      animation: {
        "bounce-in": "bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "fade-in": "fadeIn 1s ease-out",
        "slide-up": "slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "quote-slide": "quoteSlide 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "quote-fade": "quoteFade 0.6s ease-out",
        "feedback-pop": "feedbackPop 2s ease-out forwards",
      },
    },
  },
};
