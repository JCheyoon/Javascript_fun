"use strict";
const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_btn");

function onAdd() {
  //1.get customers text
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  //2.create items by that text(text, delete button)
  const item = createItem(text);

  //3.put new items in the item container
  items.appendChild(item);

  //3-1 Move to added item
  item.scrollIntoView({ block: "center" });
  //4.reset text input
  input.value = "";
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item_name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item_delete");
  deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item_divider");

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}
addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});
