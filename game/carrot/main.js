"use strict";

const musicToggle = document.querySelector(".music-toggle");
const music = new Audio("sound/bg.mp3");
music.loop = true;

const alert = new Audio("sound/alert.wav");
const carrotPull = new Audio("sound/carrot_pull.mp3");
const bugPull = new Audio("sound/bug_pull.mp3");
const gameWin = new Audio("sound/game_win.mp3");

const playBtn = document.querySelector(".play_btn");
const timer = document.querySelector(".timer");
const numOfCarrotDisplay = document.querySelector(".carrot_num");
const retryBtn = document.querySelector(".retry-btn");
const carrotsUl = document.querySelector("ul.carrots");
const bugsUl = document.querySelector("ul.bugs");
const play = document.querySelector(".fa-play");
const pause = document.querySelector(".fa-pause");
const musicOn = document.querySelector(".fa-volume-up");
const musicOff = document.querySelector(".fa-volume-mute");
const modal = document.querySelector(".retry");
const modalMessage = document.querySelector(".message");

let seconds = 9;
let numOfCarrots = 7;
let timerId;
let isPlaying = false;
let isMusicPlaying = false;
let isFirstPlay = true;

function myTimer() {
  if (seconds >= 0) {
    timer.innerHTML = `00:0${seconds--}`;
    // seconds = seconds - 1
  } else {
    handleLose();
  }
}

function handlePlay() {
  if (isFirstPlay) {
    music.play();
    isMusicPlaying = true;
    isFirstPlay = false;
  }
  alert.play();
  play.style.display = "none";
  pause.style.display = "inline-block";
  modal.style.display = "none";
  isPlaying = true;
  // start timer
  seconds = 9;
  timer.innerHTML = "00:10";
  timerId = setInterval(myTimer, 1000);

  // set num of carrots
  numOfCarrots = 10;
  numOfCarrotDisplay.textContent = numOfCarrots;
  // display carrots and bugs
  displayCarrotsAndBugs();
}

function stopGame() {
  play.style.display = "inline-block";
  pause.style.display = "none";
  isPlaying = false;
  modal.style.display = "flex";
  // stop timer
  clearInterval(timerId);
}

function handleStop() {
  modalMessage.textContent = "Replay❓";
  stopGame();
}

function handleLose() {
  modalMessage.textContent = "You lost! 💩";
  stopGame();
}

function handleWin() {
  modalMessage.textContent = "You won! 🎉";
  gameWin.play();
  stopGame();
}

function getItem(name, index) {
  const img = document.createElement("img");
  img.setAttribute("src", `img/${name}.png`);
  if (index !== undefined) {
    img.setAttribute("data-id", index.toString());
  }
  const li = document.createElement("li");
  li.appendChild(img);
  return li;
}

function displayCarrotsAndBugs() {
  carrotsUl.innerHTML = "";
  bugsUl.innerHTML = "";
  for (let i = 0; i < numOfCarrots; i++) {
    const carrot = getItem("carrot", i);
    carrot.style.bottom = `${Math.random() * 40}%`;
    carrot.style.left = `${Math.random() * 90}%`;
    carrot.setAttribute("data-id", i.toString());
    carrotsUl.appendChild(carrot);

    const bug = getItem("bug");
    bug.style.bottom = `${Math.random() * 40}%`;
    bug.style.left = `${Math.random() * 90}%`;
    bugsUl.appendChild(bug);
  }
}

playBtn.addEventListener("click", function () {
  if (!isPlaying) {
    handlePlay();
  } else {
    handleStop();
  }
});

retryBtn.addEventListener("click", () => {
  handlePlay();
});

bugsUl.addEventListener("click", () => {
  bugPull.play();
  handleLose();
});

carrotsUl.addEventListener("click", (event) => {
  carrotPull.play();
  numOfCarrots = numOfCarrots - 1;
  numOfCarrotDisplay.textContent = numOfCarrots;

  const id = event.target.dataset.id;
  const li = document.querySelector(`li[data-id="${id}"]`);
  carrotsUl.removeChild(li);

  if (numOfCarrots === 0) {
    handleWin();
  }
});

musicToggle.addEventListener("click", () => {
  if (isMusicPlaying) {
    music.pause();
    isMusicPlaying = false;
    musicOff.style.display = "none";
    musicOn.style.display = "inline-block";
  } else {
    music.play();
    isMusicPlaying = true;
    musicOff.style.display = "inline-block";
    musicOn.style.display = "none";
  }
});
