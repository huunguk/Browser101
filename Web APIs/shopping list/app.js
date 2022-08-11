const items = document.querySelector(".items");
const input = document.querySelector(".footer_input");
const addBtn = document.querySelector(".footer_button");
const form = document.querySelector(".new-form");


form.addEventListener('submit', event => {
  event.preventDefault();
  onAdd();
})


function onAdd() {
  //1. 사용자가 입력한 텍스트를 받아온다.
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  console.log(text);
  //2. 새로운 아이템을 만든다. (텍스트 + 삭제 버튼)
  const item = createItem(text);
  //3. items 컨테이너안에 새로 만든 아이템을 추가.
  items.appendChild(item);
  //4. 새로 추가된 아이템(item)으로 스크롤링
  item.scrollIntoView({ block: "center" });
  //5. 인풋을 초기화.
  input.value = "";
  input.focus();
}

let id = 0;

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item_row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
        <div class="item">
         <span class="item_name">${text}</span>
           <button class="item_delete" data-id=${id}>
              <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        <div class="item_divider"></div>`;
  id++;
  return itemRow;
}



items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
