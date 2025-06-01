"use strict";
const fruit = document.getElementById("heading");
const unorder = document.querySelector(".unorder_list");
fruit.setAttribute("id", "Fruits");
console.log(fruit.id);
const el = document.getElementById("demo1");
console.log("innerText:", el.innerText);
console.log("innerHTML:", el.innerHTML);
console.log("textContent:", el.textContent);
const new1 = document.createElement("li");
new1.textContent = "hello";
new1.classList.add("list_Item");
unorder.appendChild(new1);
const items = document.querySelectorAll(".list_Item");
for (let i = 0; i < items.length; i++) {
  items[i].style.color = "blue";
}
new1.setAttribute("id", "newElement");
document.querySelector("#newElement").textContent = "Pineapple";
console.log(unorder);
document.getElementById("newForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.getElementById("newInput");
  const value = input.value.trim();
  if (!value) {
    alert("you must type something in input");
    return;
  }
  const ul = document.getElementById("newlist");
  const li = document.createElement("li");

  li.textContent = value;
  ul.appendChild(li);
  input.value = "";
});

const newParagraph = document.createElement("p");
newParagraph.textContent = "Hola";
document.body.appendChild(newParagraph);
