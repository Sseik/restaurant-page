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

const drinksMenu = [
  {
    category: "Hot Drinks",
    items: [
      "Espresso",
      "Latte",
      "Cappuccino",
      "Flat White",
      "Herbal Tea",
      "Hot Chocolate",
    ],
    images: [null, null, null, null, null, null],
  },
  {
    category: "Soft Drinks",
    items: ["Pixel Cola", "Fanta", "Sprite", "Orange Juice"],
    images: [null, null, null, null],
  },
];

function createMenu(headingText, menuArr) {
  const menuSection = createWithClasses("section", "", "menu");
  const h2 = document.createElement("h2");
  h2.textContent = headingText;
  menuSection.appendChild(h2);
  for (let section of menuArr) {
    const categoryMenuSection = createWithClasses(
      "section",
      "",
      "category-menu",
    );
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
    categoryMenuSection.append(subheading, listContainer);
    menuSection.appendChild(categoryMenuSection);
  }
  return menuSection;
}

export default function () {
  const contentMain = document.querySelector("#content");
  contentMain.innerHTML = "";

  const foodMenuSection = createMenu("Food", foodMenu);

  const drinksMenuSection = createMenu("Drinks", drinksMenu);

  contentMain.append(foodMenuSection, drinksMenuSection);
}
