"use strict";
const input = document.querySelector("#name");
const main = document.querySelector(".main");

function getIconElement() {
  const icon = document.createElement("span");
  icon.classList.add("material-icons");
  icon.textContent = "delete";
  icon.addEventListener("click", function (event) {
    const p = event.target.parentElement;
    main.removeChild(p);
  });
  return icon;
}

function addItem() {
  if (input.value === "") return;

  const newP = document.createElement("p");
  newP.classList.add("list-item");
  newP.textContent = input.value;

  const trashIcon = getIconElement();
  newP.appendChild(trashIcon);

  main.appendChild(newP);
  input.value = "";
}

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});

document.querySelector(".btn").addEventListener("click", function () {
  addItem();
});
