let time = 10;
const timer = document.querySelector('#timer');

const interval = setInterval(() => {
  time--;

  timer.textContent = `残り ${time} 秒`;

  if (time <= 0) {
    clearInterval(interval); // 停止计时
    alert('考试结束');
  }
}, 1000);