const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const toggleBtn = document.getElementById("toggle-theme");

let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  const h = hours < 10 ? "0" + hours : hours;
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function start() {
  if (timer !== null) return;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
}

// Theme toggle handler
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  // change icon text
  if (document.body.classList.contains("dark")) {
    toggleBtn.innerText = "☀️";
  } else {
    toggleBtn.innerText = "🌙";
  }
});

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

// Initialize display
updateDisplay();