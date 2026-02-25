import { createCard, createWithClasses } from "./helper.js";
import "./menu.css";

const foodMenu = [
  {
    category: "Soups",
    items: [
      "Borsch",
      "Chicken Broth",
      "Onion Soup",
      "Mushroom Cream Soup",
      "Beef Ramen",
      "Pork Ramen",
    ],
    images: [null, null, null, null, null, null],
  },
  {
    category: "Pasta",
    items: ["Carbonara", "Fetuccini Alfredo", "Pasta Amatriciana"],
    images: [null, null, null],
  },
  {
    category: "Salads",
    items: ["Ceasar Salad", "Tuna Salad"],
    images: [null, null],
  },
  {
    category: "Dessserts",
    items: [
      "New York Cheesecake",
      "Basque Cheesecake",
      "Napoleon Cake",
      "Brownie",
      "Chocolate Muffin",
    ],
    images: [null, null, null, null, null],
  },
];

export default function () {
  const contentMain = document.querySelector("#content");
  contentMain.innerHTML = "";

  const foodMenuDiv = createWithClasses("section", "", "menu");
  const heading1 = document.createElement("h2");
  heading1.textContent = "Food";
  foodMenuDiv.appendChild(heading1);
  for (let section of foodMenu) {
    const categoryMenuDiv = createWithClasses("section", "", "category-menu");
    const subheading = createWithClasses("h3", section.category);
    const listContainer = createWithClasses("div", "", "container");
    const leftArrow = document.createElement("img");
    const itemList = createWithClasses("ul", "", "item-list");
    for (let item of section.items) {
      const listItem = createWithClasses("li", item, "menu-item");
      itemList.appendChild(listItem);
    }
    const rightArrow = document.createElement("img");
    listContainer.append(leftArrow, itemList, rightArrow);
    categoryMenuDiv.append(subheading, listContainer);
    foodMenuDiv.appendChild(categoryMenuDiv);
  }

  const heading2 = document.createElement("h2");
  heading2.textContent = "Drinks";

  contentMain.append(foodMenuDiv, heading2);
}
