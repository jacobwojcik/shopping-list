//SELECTORS
const inputItem = document.querySelector(".itemInput");
const addButton = document.querySelector(".button-add");
const optionsButton = document.querySelector(".button-options");
const itemsList = document.querySelector(".list");
const imageItems = document.querySelectorAll("img");
const dragList = document.querySelector(".drag-menu");
const modalBg = document.querySelector(".modal-bg");
const modalButton = document.querySelector(".modal-btn");

//LISTENERS
let itemToAdd;

inputItem.addEventListener("change", (e) => {
  itemToAdd = e.target.value;
});
addButton.addEventListener("click", () => {
  itemToAdd != null ? addItem() : console.log(`Add item first`);
});
optionsButton.addEventListener("click", () => {
  modalBg.classList.add("modal-active");
  modalBg.classList.remove("modal-close");
});
itemsList.addEventListener("click", (e) => optionsDelete(e));
modalButton.addEventListener("click", () => {
  modalBg.classList.add("modal-close");
  modalBg.classList.remove("modal-active");
});

//FUNCTIONS

const addItem = (itemText) => {
  //creating tags
  const item = document.createElement("div");
  const itemName = document.createElement("li");
  const inputCheckbox = document.createElement("input");
  const checkbox = document.createElement("span");
  const itemOptionButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  //adding properties
  item.classList.add("itemDiv");
  inputCheckbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");
  itemName.classList.add("itemName");
  itemOptionButton.classList.add("option-button");
  deleteButton.classList.add("delete-button");
  itemName.innerText = itemText || itemToAdd;
  itemOptionButton.innerHTML =
    '<i class="fa fa-ellipsis-v" aria-hidden="true"></i>';
  deleteButton.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

  //inserting into html
  item.appendChild(inputCheckbox);
  item.appendChild(checkbox);
  item.appendChild(itemName);
  item.appendChild(itemOptionButton);
  item.appendChild(deleteButton);

  //append to list
  itemsList.appendChild(item);
  inputItem.value = "";
};

//handling option and delete buttons
const optionsDelete = (e) => {
  if (e.target.classList == "delete-button") e.target.parentElement.remove();
  if (e.target.classList == "option-button") console.log("option");
  // if (e.target.type == "checkbox")
  //   e.target.parentElement.style.background = "black";
  // else {
  //   console.log(e.target.type);
  // }
};

//drag and drop items
let draggedItem = null;
for (let i = 0; i < 6; i++) {
  const itemToDrop = imageItems[i];

  itemToDrop.addEventListener("dragstart", () => {
    console.log("drag started");
    dragList.style.display = "flex";
    draggedItem = itemToDrop;
    setTimeout(() => (itemToDrop.style.opacity = 0), 0);
  });

  itemToDrop.addEventListener("dragend", () => {
    console.log("drag end");
    setTimeout(() => {
      draggedItem.style.display = "block";
      dragList.style.display = "none";
      draggedItem = "null";
      itemToDrop.style.opacity = 1;
    }, 0);
  });
}
dragList.addEventListener("dragover", (e) => e.preventDefault());
dragList.addEventListener("drop", (e) => {
  console.log("dropped");
  addItem(draggedItem.name);
});
