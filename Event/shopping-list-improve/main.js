"use strict";
const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_btn");
const form = document.querySelector(".new-form")

form.addEventListener('submit',(event) => {
  event.preventDefault(); // 페이지가 자동로딩되는걸 방지
  onAdd()

})
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
// <div data-name="cheyoon" data-image="cheyoon.jpg" data-id="a23Av5-sadW43qsC" data-something-else="something"></div>
// div.dataset.name
// div.dataset.image
// div.dataset.id
// div.dataset.somethingElse

let rowNum = 0; // UUID쓰는게좋음 , 원래 숫자를 글로벌에서 증가시키면서 쓰는건 좋지 않음.
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row"); // <li class="item_row">
  itemRow.setAttribute("data-cheyoon-number",rowNum.toString()) // <li class ="item_row" data-cheyoon-number ="rowNum"></li>
  itemRow.innerHTML =` <div class="item">
            <span class="item_name">${text}</span>
                <button class="item_delete"> 
                 <i class="fas fa-trash-alt" data-cheyoon-number="${rowNum}"></i>
            </button>
          </div>
          <div class="item_divider"></div>`
  rowNum++
  return  itemRow;
}

items.addEventListener('click',(event) => {
  const id = event.target.dataset.cheyoonNumber // data-cheyoon-number
  if(id){
    const toBeDeleted = document.querySelector(`.item_row[data-cheyoon-number="${id}"]`)
    toBeDeleted.remove()

  }

})