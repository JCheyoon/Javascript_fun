"use strict";
const lineH = document.querySelector(".border.width");
const lineV = document.querySelector(".border.height");
const target = document.querySelector(".target");
const clientText = document.querySelector("#text");
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height /2;

document.addEventListener("mousemove", (event) => {
  const x = event.clientX
  const y = event.clientY

  lineV.style.transform = `translateX(${x}px)`
  lineH.style.transform = `translateY(${y}px)`
  target.style.transform = `translate(${x - targetHalfWidth}px,${y - targetHalfHeight}px)`
  // lineH.style.top = event.clientY + "px";
  // lineV.style.left = event.clientX + "px";
  // target.style.top = event.clientY + "px";
  // target.style.left = event.clientX + "px";
  clientText.style.transform = `translate(${x + 20}px,${y +20}px)`
  // clientText.style.top = event.clientY  + "px";
  // clientText.style.left = event.clientX  + "px";
  clientText.innerHTML = `X: ${x}px, Y: ${y}px`;



});
