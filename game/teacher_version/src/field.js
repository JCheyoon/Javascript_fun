"use strict";
import * as sound from "./sound.js";

const carrot_size = 80;

export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector(".game_field");
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener("click", this.onClick);
  }
  init() {
    this.field.innerHTML = "";
    this._addItem("carrot", this.carrotCount, "../carrot/img/carrot.png");
    this._addItem("bug", this.bugCount, "../carrot/img/bug.png");
  }
  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  _addItem(className, count, imagePath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - carrot_size;
    const y2 = this.fieldRect.height - carrot_size;

    for (let i = 0; i < count; i++) {
      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", imagePath);
      item.style.position = "absolute";
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }
  onClick = (event) => {
    const target = event.target;
    if (target.matches(".carrot")) {
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick("carrot");
    } else if (target.matches(".bug")) {
      this.onItemClick && this.onItemClick("bug");
    }
  };
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
