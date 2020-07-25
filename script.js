//selectors

const inputItem = document.querySelector(".itemInput");
const addButton = document.querySelector(".button-add");
const optionsButton = document.querySelector(".button-options");
const itemsList = document.querySelector(".list");
// const deleteButton = document.querySelector(".delete-button");
let itemToAdd;

//listeners
inputItem.addEventListener("change", (e) => {
  itemToAdd = e.target.value;
});
addButton.addEventListener("click", () => {
  itemToAdd != null ? addItem() : console.log(`Add item first`);
});
optionsButton.addEventListener("click", () =>
  console.log("click options button")
);
itemsList.addEventListener("click", (e) => optionsDelete(e));

//functions

const addItem = () => {
  //creating tags
  const item = document.createElement("div");
  const itemName = document.createElement("li");
  const itemOptionButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  //adding properties
  item.classList.add("itemDiv");
  itemName.classList.add("itemName");
  itemOptionButton.classList.add("option-button");
  deleteButton.classList.add("delete-button");
  itemName.innerText = itemToAdd;
  itemOptionButton.innerHTML =
    '<i class="fa fa-ellipsis-v" aria-hidden="true"></i>';
  deleteButton.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

  //inserting into html
  item.appendChild(itemName);
  item.appendChild(itemOptionButton);
  item.appendChild(deleteButton);

  //append to list
  itemsList.appendChild(item);
  inputItem.value = "";
};

const optionsDelete = (e) => {
  if (e.target.classList == "delete-button") e.target.parentElement.remove();
  if (e.target.classList == "option-button") console.log("option");
};

// W skrócie to miała być aplikacja internetowa do zapisywania listy zakupów.
// Miało być w localStorage, możliwość drag&drop, edycji, kasowania, kategoria,
// jednostka kg/litr/gram itd. Aplikacja z jak największą ilością użytecznych bajerów w js.
// Niestety źle podszedłem do projektu przez co wyszło słabo, a trudny nie był.
// Pewnie ktoś mnie wygryzł, chyba że cudem dostrzegą we mnie potencjał i mnie wezmą.
