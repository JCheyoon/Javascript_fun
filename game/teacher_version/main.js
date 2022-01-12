"use strict";

const carrot_size = 80;
const carrot_count = 5;
const bug_count = 5;
const game_duration_sec = 5;

const field = document.querySelector(".game_field");
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector(".game_btn");
const gameTimer = document.querySelector(".timer");
const gameScore = document.querySelector(".game_score");

const popUp = document.querySelector(".pop-up");
const popText = document.querySelector(".pop-up_massage");
const popRefresh = document.querySelector(".pop-up_refresh");

const carrotSound = new Audio("../carrot/sound/carrot_pull.mp3");
const bugSound = new Audio("../carrot/sound/bug_pull.mp3");
const winSound = new Audio("../carrot/sound/game_win.mp3");
const bgSound = new Audio("../carrot/sound/bg.mp3");
const alertSound = new Audio("../carrot/sound/alert.wav");

let start = false;
let score = 0;
let timer = undefined;

field.addEventListener("click", onFieldClick);
gameBtn.addEventListener("click", () => {
  if (start) {
    stopGame();
  } else {
    startGame();
  }
});

popRefresh.addEventListener("click", () => {
  startGame();
  hidePopUp();
});
function startGame() {
  start = true;
  initGame();
  showStopBtn();
  showTimerScore();
  startGameTimer();
  playSound(bgSound);
}
function stopGame() {
  start = false;
  stopGameTimer();
  playSound(alertSound);
  stopSound(bgSound);
}
function finishGame(win) {
  start = false;
  hideGameBtn();
  if (win) {
    playSound(winSound);
  } else {
    playSound(bugSound);
  }
  stopGameTimer();
  stopSound(bgSound);
  showPopUp(win ? "You Won🎉" : "You Lost💩");
}

function startGameTimer() {
  let remainTimeSec = game_duration_sec;
  updateTimerText(remainTimeSec);
  timer = setInterval(() => {
    if (remainTimeSec <= 0) {
      clearInterval(timer);
      finishGame(carrot_count === score);
      return;
    } else {
      updateTimerText(--remainTimeSec);
    }
  }, 1000);
}
function stopGameTimer() {
  clearInterval(timer);
  hideGameBtn();
  showPopUp("Replay❓");
}
function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}
function showStopBtn() {
  const icon = gameBtn.querySelector(".fas");
  gameScore.innerText = carrot_count;
  icon.classList.add("fa-stop");
  icon.classList.remove("fa-play");
  gameBtn.style.visibility = "visible";
}

function hideGameBtn() {
  gameBtn.style.visibility = "hidden";
}

function showTimerScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

function showPopUp(text) {
  popText.innerText = text;
  popUp.classList.remove("pop-up--hide");
}
function hidePopUp() {
  popUp.classList.add("pop-up--hide");
}
function initGame() {
  score = 0;
  field.innerHTML = "";
  addItem("carrot", carrot_count, "../carrot/img/carrot.png");
  addItem("bug", bug_count, "../carrot/img/bug.png");
}

function onFieldClick(event) {
  if (!start) {
    return;
  }
  const target = event.target;
  if (target.matches(".carrot")) {
    target.remove();
    score++;
    playSound(carrotSound);
    updateScoreBoard();
    if (score === carrot_count) {
      finishGame(true);
    }
  } else if (target.matches(".bug")) {
    finishGame(false);
  }
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}
function updateScoreBoard() {
  gameScore.innerText = carrot_count - score;
}

function addItem(className, count, imagePath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - carrot_size;
  const y2 = fieldRect.height - carrot_size;

  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imagePath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}