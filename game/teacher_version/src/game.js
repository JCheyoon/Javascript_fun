"use strict";
import Field from "./field.js";
import * as sound from "./sound.js";
//Builder pattern
export class GameBuilder {
  withGameDuration(duration) {
    this.gameDuration = duration;
    return this;
  }

  withCarrotCount(num) {
    this.carrotCount = num;
    return this;
  }

  withBugCount(num) {
    this.bugCount = num;
    return this;
  }

  build() {
    console.log(this);
    return new Game(this.gameDuration, this.carrotCount, this.bugCount);
  }
}

// ---------
export default class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.gameTimer = document.querySelector(".timer");
    this.gameScore = document.querySelector(".game_score");
    this.gameBtn = document.querySelector(".game_btn");
    this.gameBtn.addEventListener("click", () => {
      if (this.started) {
        this.stop();
      } else {
        this.start();
      }
    });

    this.gameField = new Field(carrotCount, bugCount);
    this.gameField.setClickListener(this.onItemClick);

    this.started = false;
    this.score = 0;
    this.timer = undefined;
  }
  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop;
  }

  finish(win) {
    this.started = false;
    this.hideGameBtn();
    if (win) {
      sound.playWin();
    } else {
      sound.playBug();
    }
    this.stopGameTimer();
    sound.stopBg();
    this.onGameStop && this.onGameStop(win ? "win" : "lose");
  }
  start() {
    this.started = true;
    this.initGame();
    this.showStopBtn();
    this.showTimerScore();
    this.startGameTimer();
    sound.playBg();
  }
  stop() {
    this.started = false;
    this.stopGameTimer();
    sound.playAlert();
    sound.stopBg();
    this.onGameStop && this.onGameStop("cancel");
  }

  onItemClick = (item) => {
    if (!this.started) {
      return;
    }
    if (item === "carrot") {
      this.score++;
      this.updateScoreBoard();
      if (this.score === this.carrotCount) {
        this.finish(true);
      }
    } else if (item === "bug") {
      this.finish(false);
    }
  };

  startGameTimer() {
    let remainTimeSec = this.gameDuration;
    this.updateTimerText(remainTimeSec);
    this.timer = setInterval(() => {
      if (remainTimeSec <= 0) {
        clearInterval(this.timer);
        this.finish(this.carrotCount === this.score);
      } else {
        this.updateTimerText(--remainTimeSec);
      }
    }, 1000);
  }
  stopGameTimer() {
    clearInterval(this.timer);
  }
  updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    this.gameTimer.innerText = `${minutes}:${seconds}`;
  }
  showStopBtn() {
    const icon = this.gameBtn.querySelector(".fas");
    this.gameScore.innerText = this.carrotCount;
    icon.classList.add("fa-stop");
    icon.classList.remove("fa-play");
    this.gameBtn.style.visibility = "visible";
  }

  hideGameBtn() {
    this.gameBtn.style.visibility = "hidden";
  }

  showTimerScore() {
    this.gameTimer.style.visibility = "visible";
    this.gameScore.style.visibility = "visible";
  }

  initGame() {
    this.score = 0;
    this.gameScore.innerText = this.carrotCount;
    this.gameField.init();
  }

  updateScoreBoard() {
    this.gameScore.innerText = this.carrotCount - this.score;
  }
}
