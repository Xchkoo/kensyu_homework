const input = document.getElementById("password");
const bar = document.getElementById("bar-inner");
const text = document.getElementById("strength-text");

input.addEventListener("input", () => {
  const value = input.value;
  const score = calculateStrength(value);
  updateUI(score);
});

function calculateStrength(pwd) {
  let score = 0;

  // 1. 长度
  if (pwd.length >= 8) score++;

  // 2. 字符种类
  if (/[a-z]/.test(pwd)) score++;   // 小写
  if (/[A-Z]/.test(pwd)) score++;   // 大写
  if (/[0-9]/.test(pwd)) score++;   // 数字
  if (/[^A-Za-z0-9]/.test(pwd)) score++; // 特殊字符

  return score;
}

function updateUI(score) {
  let level = "";
  let width = "";
  let color = "";

  if (score <= 2) {
    level = "弱";
    width = "33%";
    color = "red";
  } else if (score <= 4) {
    level = "中";
    width = "66%";
    color = "orange";
  } else {
    level = "强";
    width = "100%";
    color = "green";
  }

  bar.style.width = width;
  bar.style.background = color;
  text.innerText = "当前强度：" + level;
}