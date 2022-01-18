"use strict";

export default class PopUP {
  constructor() {
    this.popUp = document.querySelector(".pop-up");
    this.popText = document.querySelector(".pop-up_massage");
    this.popRefresh = document.querySelector(".pop-up_refresh");
    this.popRefresh.addEventListener("click", () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }
  setClickListener(onClick) {
    this.onClick = onClick;
  }

  show(text) {
    this.popText.innerText = text;
    this.popUp.classList.remove("pop-up--hide");
  }
  hide() {
    this.popUp.classList.add("pop-up--hide");
  }
}
