"use strict";
const lineH = document.querySelector(".border_width");
const lineV = document.querySelector(".border_height");
const target = document.querySelector(".target");
const clientText = document.querySelector("#text");

document.addEventListener("mousemove", (event) => {
  clientText.innerHTML = `X: ${event.clientX}, Y: ${event.clientY} `;
  clientText.style.top = event.clientY + 20 + "px";
  clientText.style.left = event.clientX + 20 + "px";

  // console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
  lineH.style.top = event.clientY + "px";
  lineV.style.left = event.clientX + "px";
  target.style.top = event.clientY - 40 + "px";
  target.style.left = event.clientX - 40 + "px";
});
