// 土地类型人格测试题目：总分区间版
const questions = [
  {
    title: "走在校园小路上，前面有一个水坑，你通常会？",
    options: [
      { text: "A. 绕过去", score: 1 },
      { text: "B. 踩上去", score: 4 },
      { text: "C. 跳过去", score: 2 },
      { text: "D. 停下来拍照发朋友圈", score: 3 }
    ]
  },
  {
    title: "期末复习周，你的真实状态是？",
    options: [
      { text: "A. 躺平摆烂，随缘", score: 1 },
      { text: "B. 表面淡定，内心焦虑", score: 2 },
      { text: "C. 按计划复习，心态平稳", score: 3 },
      { text: "D. 疯狂刷夜，冲就完了", score: 4 }
    ]
  },
  {
    title: "看到学校操场边的一块土地，你第一反应是？",
    options: [
      { text: "A. 这土能种菜吗？", score: 1 },
      { text: "B. 好想躺上去睡觉", score: 2 },
      { text: "C. 这片土应该承载了很多回忆", score: 3 },
      { text: "D. 想挖一捧带走，留个纪念", score: 4 }
    ]
  },
  {
    title: "你相信“土地”能给人带来什么？",
    options: [
      { text: "A. 安心与归属感", score: 1 },
      { text: "B. 束缚与沉重", score: 2 },
      { text: "C. 力量与生机", score: 3 },
      { text: "D. 神秘与未知", score: 4 }
    ]
  },
  {
    title: "下暴雨时，你更可能会？",
    options: [
      { text: "A. 躲在屋里，看窗外发呆", score: 1 },
      { text: "B. 冲出去踩水坑", score: 4 },
      { text: "C. 隔着窗户拍照记录", score: 2 },
      { text: "D. 担心操场上的草被淹了", score: 3 }
    ]
  }
];

// 结果区间
const results = [
  {
    min: 5,
    max: 8,
    title: "盐碱地・低调努力型",
    detail: "你看起来外表平平无奇，甚至有点 “贫瘠”。但只有你自己知道，你的内心正在悄悄积蓄力量。你习惯在沉默中努力，不张扬，不抱怨。\n期末周的压力，对你来说就像一场春雨，只要熬过去，你就能开出最顽强的花。",
    soilLove: "你是盐碱地，虽然外表贫瘠，但只要遇到一场好雨（或者一场考试），你就能爆发出最惊人的生命力。别急，你只是在蛰伏。",
    keywords: "外冷内热、慢热、倔强、需要被理解"
  },
  {
    min: 9,
    max: 12,
    title: "松弛沙土・快乐摆烂型",
    detail: "主打一个 “我想开了”。风来了，你随之流走；雨来了，你变成泥巴。但你也因此拥有别人没有的潇洒与自由。\n期末周？不存在的。你的策略是 —— 随缘复习，快乐至上。反正天塌下来，你也能找到一片沙地躺下。",
    soilLove: "你是松弛沙土，虽然看似松散，但沙土也能堆起最美的堡垒。你只是选择用轻松的方式，对抗世界的沉重。",
    keywords: "随缘、松弛、自由、适应力强"
  },
  {
    min: 13,
    max: 16,
    title: "珍稀黑土・稳重学霸型",
    detail: "你就是传说中的 “别人家的孩子”。深沉、肥沃、稳定，拥有极强的承载力和爆发力。\n期末周对你来说，不过是按计划走一遍流程。你从不慌乱，也从不畏惧。因为你深知：只要根基扎实，就没什么能把你击垮。",
    soilLove: "你是珍稀黑土，深邃而稳重。你每一次的积累，都在孕育最丰盛的果实。别怕，你的地基很稳，稳到能托起整个天空。",
    keywords: "稳定、靠谱、有潜力、值得信赖"
  },
  {
    min: 17,
    max: 19,
    title: "高敏感黏土・细腻共情者",
    detail: "你的内心世界非常丰富。一点点触动，都能在你心里留下深深的印记。你温柔、细腻，总是能感知到别人的情绪。但这也让你容易内耗。\n期末周里，你可能会因为别人的一句话、一个眼神而辗转反侧。请记住：你不需要对所有人负责，你只需要对自己温柔。",
    soilLove: "你是高敏感黏土，温柔得像会捏碎所有烦恼。你的细腻是天赋，不是包袱。这个期末周，请先对自己好一点。",
    keywords: "敏感、细腻、共情、观察力强"
  },
  {
    min: 20,
    max: 20,
    title: "暴烈红土・行动派冲劲型",
    detail: "你心里有一团火。热情、冲动、充满爆发力。你从不畏惧困难，甚至享受挑战带来的刺激感，但有时候，你也会因为太着急而忽略细节。\n期末周对你来说就是一场战斗 —— 冲就完了，不留退路。这周冲刺复习时，记得稍微给自己降降温。",
    soilLove: "你是暴烈红土，热烈得像一团不灭的火焰。你天生适合燃烧，但也请记得给自己留一点喘息的空间。慢一点，也能赢。",
    keywords: "热烈、冲劲、行动派、生命力爆棚"
  }
];

let currentQuestionIndex = 0;
let selectedScore = null;
let totalScore = 0;
let userName = "";

const questionTitle = document.getElementById("question-title");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const welcomeBox = document.getElementById("welcome-box");
const nameInput = document.getElementById("name-input");
const startBtn = document.getElementById("start-btn");
const resultBox = document.getElementById("result-box");
const resultHeading = document.getElementById("result-heading");
const resultTitle = document.getElementById("result-title");
const resultDesc = document.getElementById("result-desc");
const resultKeywords = document.getElementById("result-keywords");
const soilLove = document.getElementById("soil-love");
const exportBtn = document.getElementById("export-btn");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

function isWeChatBrowser() {
  return /MicroMessenger/i.test(navigator.userAgent);
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function loadResultFromUrl() {
  const name = getQueryParam("name");
  const score = parseInt(getQueryParam("score"), 10);
  if (name && !Number.isNaN(score)) {
    userName = name;
    totalScore = score;
    welcomeBox.classList.add("hidden");
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    showResult();
    return true;
  }
  return false;
}

// 加载题目
function loadQuestion() {
  selectedScore = null;
  nextBtn.disabled = true;

  const currentQuestion = questions[currentQuestionIndex];

  questionTitle.textContent = currentQuestion.title;
  optionsBox.innerHTML = "";

  progressText.textContent = `第 ${currentQuestionIndex + 1} 题 / 共 ${questions.length} 题`;
  progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

  currentQuestion.options.forEach(option => {
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option");
    optionDiv.textContent = option.text;

    optionDiv.addEventListener("click", () => {
      document.querySelectorAll(".option").forEach(item => {
        item.classList.remove("selected");
      });

      optionDiv.classList.add("selected");
      selectedScore = option.score;
      nextBtn.disabled = false;
    });

    optionsBox.appendChild(optionDiv);
  });

  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.textContent = "查看结果";
  } else {
    nextBtn.textContent = "下一题";
  }
}

// 结果页 logo 现在为文档流内元素，位置由 CSS 与布局控制，无需 JS 动态定位。

// 点击下一题
nextBtn.addEventListener("click", () => {
  if (selectedScore === null) return;

  totalScore += selectedScore;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

startBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.focus();
    return;
  }

  userName = name;
  welcomeBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  loadQuestion();
  // 恢复全局底部 logo，隐藏结果卡片内 logo（如果存在）
  const globalLogo = document.querySelector('.site-logo-global');
  if (globalLogo) {
    globalLogo.style.display = '';
  }
  const resultLogoHide = document.getElementById('result-logo');
  if (resultLogoHide) {
    resultLogoHide.classList.remove('visible');
    resultLogoHide.classList.add('hidden');
  }
});

// 显示结果
function showResult() {
  welcomeBox.classList.add("hidden");
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");

  const finalResult = results.find(result => {
    return totalScore >= result.min && totalScore <= result.max;
  });

  resultHeading.textContent = `${userName}同学，你的土地类型人格是：`;
  resultTitle.textContent = finalResult.title;
  resultDesc.textContent = `你的总分是 ${totalScore} 分。\n\n${finalResult.detail}`;
  resultKeywords.textContent = finalResult.keywords;
  soilLove.textContent = finalResult.soilLove;

  history.replaceState(null, "", `${window.location.pathname}?name=${encodeURIComponent(userName)}&score=${totalScore}`);

  // 隐藏全局底部 logo，显示并定位卡片内 logo
  const globalLogo = document.querySelector('.site-logo-global');
  if (globalLogo) {
    globalLogo.style.display = 'none';
  }

  const resultLogo = document.getElementById('result-logo');
  if (resultLogo) {
    resultLogo.classList.remove('hidden');
    resultLogo.classList.add('visible');
  }
}

exportBtn.addEventListener("click", () => {
  const target = document.querySelector(".result-card--result");
  if (!target) return;

  if (isWeChatBrowser()) {
    const resultUrl = `${window.location.origin}${window.location.pathname}?name=${encodeURIComponent(userName)}&score=${totalScore}`;
    window.location.href = resultUrl;
    return;
  }

  html2canvas(target, {
    scale: 2,
    backgroundColor: null,
    useCORS: true
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = `${userName || "测试"}_结果.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});

// 初始化
if (!loadResultFromUrl()) {
  welcomeBox.classList.remove("hidden");
  quizBox.classList.add("hidden");
  resultBox.classList.add("hidden");
}