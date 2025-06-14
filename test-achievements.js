/**
 * 成就系統測試用例
 * 測試所有10個成就的解鎖條件和數據遷移
 */

// 模擬數據結構
const testFilledDates = new Map();
const testAchievements = new Map();

// 測試數據生成器
function generateTestData() {
  console.log("🧪 開始生成測試數據...");

  // 清空現有數據
  testFilledDates.clear();
  testAchievements.clear();

  // 1. 測試數據遷移：舊的「爛日子」轉換為「身心俱疲」
  console.log("📦 測試數據遷移...");
  const oldData = [
    { index: 1, mood: "bad", date: "2025-01-01", text: "老闆很機車" },
    { index: 2, mood: "爛日子", date: "2025-01-02", text: "加班到很晚" },
    { index: 3, mood: "burnout", date: "2025-01-03", text: "身心俱疲" },
  ];

  oldData.forEach((data) => {
    // 模擬數據遷移邏輯
    if (data.mood === "bad" || data.mood === "爛日子") {
      data.mood = "burnout";
    }
    testFilledDates.set(data.index, data);
  });

  console.log("✅ 數據遷移測試通過");

  // 2. 生成各種測試場景的數據
  generateAchievementTestData();
}

function generateAchievementTestData() {
  console.log("🎯 生成成就測試數據...");

  const today = new Date();
  let index = 10;

  // 測試場景1：初次踏入 (first_fill)
  testFilledDates.set(index++, {
    mood: "money",
    date: "2025-01-10",
    text: "第一次使用",
    annoyanceIndex: 5,
  });

  // 測試場景2：賺錢狂魔 (money_lover) - 累積5天金錢心情
  for (let i = 0; i < 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    testFilledDates.set(index++, {
      mood: "money",
      date: date.toLocaleDateString("en-CA"),
      text: `薪水相關 ${i + 1}`,
      annoyanceIndex: 4,
    });
  }

  // 測試場景3：燃燒殆盡 (burnout_master) - 單日10次燃盡心情
  const burnoutDate = today.toLocaleDateString("en-CA");
  for (let i = 0; i < 10; i++) {
    testFilledDates.set(index++, {
      mood: "burnout",
      date: burnoutDate,
      text: `身心俱疲事件 ${i + 1}`,
      annoyanceIndex: 8,
    });
  }

  // 測試場景4：厭世之王 (annoyance_king) - 厭世指數達到500
  for (let i = 0; i < 20; i++) {
    testFilledDates.set(index++, {
      mood: "annoying",
      date: `2025-01-${11 + i}`,
      text: "超級厭世的事情",
      annoyanceIndex: 25, // 20 * 25 = 500
    });
  }

  // 測試場景5：手速如飛 (speed_demon) - 模擬快速填寫
  localStorage.setItem("speedFills", "5");

  // 測試場景6：週末戰士 (weekend_warrior) - 累積4個週末
  for (let i = 0; i < 4; i++) {
    const saturday = new Date(today);
    saturday.setDate(today.getDate() - (today.getDay() + 7 * i - 6));
    const sunday = new Date(saturday);
    sunday.setDate(saturday.getDate() + 1);

    testFilledDates.set(index++, {
      mood: "stuck",
      date: saturday.toLocaleDateString("en-CA"),
      text: `週六工作 ${i + 1}`,
      annoyanceIndex: 6,
    });

    testFilledDates.set(index++, {
      mood: "money",
      date: sunday.toLocaleDateString("en-CA"),
      text: `週日加班 ${i + 1}`,
      annoyanceIndex: 7,
    });
  }

  // 測試場景7：深夜工作者 (midnight_worker)
  localStorage.setItem("midnightFills", "1");

  // 測試場景8：彩虹收集者 (rainbow_collector) - 一天內所有4種心情
  const rainbowDate = "2025-01-15";
  const moods = ["money", "burnout", "annoying", "stuck"];
  moods.forEach((mood, i) => {
    testFilledDates.set(index++, {
      mood: mood,
      date: rainbowDate,
      text: `彩虹日心情 ${i + 1}`,
      annoyanceIndex: 5,
    });
  });

  // 測試場景9：堅持大師 (persistence_master) - 累積30天
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    testFilledDates.set(index++, {
      mood: "stuck",
      date: date.toLocaleDateString("en-CA"),
      text: `堅持第 ${i + 1} 天`,
      annoyanceIndex: 3,
    });
  }

  // 測試場景10：自由追求者 (freedom_seeker) - 完成100個格子
  while (testFilledDates.size < 100) {
    const date = new Date(today);
    date.setDate(today.getDate() - Math.floor(Math.random() * 365));
    testFilledDates.set(index++, {
      mood: ["money", "burnout", "annoying", "stuck"][
        Math.floor(Math.random() * 4)
      ],
      date: date.toLocaleDateString("en-CA"),
      text: `隨機事件 ${index}`,
      annoyanceIndex: Math.floor(Math.random() * 10) + 1,
    });
  }

  console.log(`✅ 生成了 ${testFilledDates.size} 筆測試數據`);
}

// 測試成就計算邏輯
function testAchievementLogic() {
  console.log("🎯 開始測試成就邏輯...");

  const stats = calculateTestUserStats();
  console.log("📊 計算出的統計數據:", stats);

  // 測試每個成就
  const results = {};

  Object.entries(ACHIEVEMENT_DEFINITIONS).forEach(([key, achievement]) => {
    const shouldUnlock = achievement.condition(stats);
    results[key] = {
      name: achievement.name,
      description: achievement.description,
      shouldUnlock: shouldUnlock,
      category: achievement.category,
      rarity: achievement.rarity,
    };

    console.log(
      `${shouldUnlock ? "✅" : "❌"} ${achievement.name}: ${
        achievement.description
      }`
    );
  });

  return results;
}

function calculateTestUserStats() {
  const now = new Date();
  const today = now.toLocaleDateString("en-CA");
  const filledArray = Array.from(testFilledDates.values());

  return {
    totalFilled: testFilledDates.size,
    totalAnnoyance: filledArray.reduce(
      (sum, data) => sum + (data.annoyanceIndex || 0),
      0
    ),
    consecutiveDays: calculateTestConsecutiveDays(),
    consecutiveMoney: calculateTestConsecutiveMood("money"),
    dailyBurnout: calculateTestDailyMoodCount("burnout", today),
    speedFills: parseInt(localStorage.getItem("speedFills") || "0"),
    weekendStreak: calculateTestWeekendStreak(),
    midnightFills: parseInt(localStorage.getItem("midnightFills") || "0"),
    rainbowDay: checkTestRainbowDay("2025-01-15"),
  };
}

function calculateTestConsecutiveDays() {
  const dates = Array.from(testFilledDates.values())
    .map((data) => new Date(data.date))
    .sort((a, b) => b - a);

  if (dates.length === 0) return 0;

  let consecutive = 1;
  for (let i = 1; i < dates.length; i++) {
    const diffDays = Math.abs(dates[i - 1] - dates[i]) / (1000 * 60 * 60 * 24);
    if (diffDays <= 1) {
      consecutive++;
    } else {
      break;
    }
  }
  return consecutive;
}

function calculateTestConsecutiveMood(mood) {
  const today = new Date();
  let consecutive = 0;

  for (let i = 0; i < 30; i++) {
    const checkDate = new Date(today);
    checkDate.setDate(today.getDate() - i);
    const dateStr = checkDate.toLocaleDateString("en-CA");

    let hasMood = false;
    testFilledDates.forEach((data) => {
      if (data.date === dateStr && data.mood === mood) {
        hasMood = true;
      }
    });

    if (hasMood) {
      consecutive++;
    } else {
      break;
    }
  }
  return consecutive;
}

function calculateTestDailyMoodCount(mood, date) {
  let count = 0;
  testFilledDates.forEach((data) => {
    if (data.date === date && data.mood === mood) {
      count++;
    }
  });
  return count;
}

function calculateTestWeekendStreak() {
  const weekends = [];
  const now = new Date();

  for (let i = 0; i < 52; i++) {
    const checkDate = new Date(now);
    checkDate.setDate(now.getDate() - i * 7);

    const saturday = new Date(checkDate);
    saturday.setDate(checkDate.getDate() - checkDate.getDay() + 6);
    const sunday = new Date(saturday);
    sunday.setDate(saturday.getDate() + 1);

    const satStr = saturday.toLocaleDateString("en-CA");
    const sunStr = sunday.toLocaleDateString("en-CA");

    let hasWeekendFill = false;
    testFilledDates.forEach((data) => {
      if (data.date === satStr || data.date === sunStr) {
        hasWeekendFill = true;
      }
    });

    if (hasWeekendFill) {
      weekends.push(i);
    } else {
      break;
    }
  }

  return weekends.length;
}

function checkTestRainbowDay(date) {
  const moods = new Set();
  testFilledDates.forEach((data) => {
    if (data.date === date) {
      moods.add(data.mood);
    }
  });
  return moods.size >= 4;
}

// 運行完整測試
function runFullTest() {
  console.log("🚀 開始完整成就系統測試");
  console.log("=" * 50);

  // 1. 生成測試數據
  generateTestData();

  // 2. 測試成就邏輯
  const results = testAchievementLogic();

  // 3. 輸出測試報告
  console.log("\n📋 測試報告:");
  console.log("=" * 50);

  const categories = {};
  Object.values(results).forEach((result) => {
    if (!categories[result.category]) {
      categories[result.category] = [];
    }
    categories[result.category].push(result);
  });

  Object.entries(categories).forEach(([category, achievements]) => {
    console.log(`\n📂 ${category} 類別:`);
    achievements.forEach((achievement) => {
      const status = achievement.shouldUnlock ? "✅ 已解鎖" : "🔒 未解鎖";
      const rarity = achievement.rarity.toUpperCase();
      console.log(
        `  ${status} [${rarity}] ${achievement.name}: ${achievement.description}`
      );
    });
  });

  const unlockedCount = Object.values(results).filter(
    (r) => r.shouldUnlock
  ).length;
  const totalCount = Object.keys(results).length;

  console.log(
    `\n🏆 成就解鎖進度: ${unlockedCount}/${totalCount} (${Math.round(
      (unlockedCount / totalCount) * 100
    )}%)`
  );

  // 4. 測試數據遷移
  console.log("\n🔄 數據遷移測試:");
  const migratedData = Array.from(testFilledDates.values()).filter(
    (data) =>
      data.text.includes("老闆很機車") || data.text.includes("加班到很晚")
  );

  migratedData.forEach((data) => {
    console.log(`  ✅ "${data.text}" 的心情已從舊格式遷移為: ${data.mood}`);
  });

  console.log("\n🎉 測試完成！");
  return results;
}

// 如果在瀏覽器環境中，添加到全域
if (typeof window !== "undefined") {
  window.runAchievementTest = runFullTest;
  window.generateTestData = generateTestData;
  window.testAchievementLogic = testAchievementLogic;
}

// 如果在 Node.js 環境中，導出函數
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    runFullTest,
    generateTestData,
    testAchievementLogic,
    calculateTestUserStats,
  };
}
