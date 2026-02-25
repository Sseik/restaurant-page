import { createWithClasses } from "./helper.js";
import "./menu.css";
import borschPNG from "../assets/images/Food/Borsch.png";
import fallbackPNG from "../assets/images/FallbackImage.png";

const foodMenu = [
  {
    category: "Soups",
    items: [
      { name: "Borsch", image: borschPNG },
      { name: "Chicken Broth" },
      { name: "Onion Soup" },
      { name: "Mushroom Cream Soup" },
      { name: "Beef Ramen" },
      { name: "Pork Ramen" },
    ],
  },
  {
    category: "Pasta",
    items: [
      { name: "Carbonara" },
      { name: "Fetuccini Alfredo" },
      { name: "Pasta all'Amatriciana" },
    ],
  },
  {
    category: "Salads",
    items: [{ name: "Ceasar Salad" }, { name: "Tuna Salad" }],
  },
  {
    category: "Dessserts",
    items: [
      { name: "New York Cheesecake" },
      { name: "Basque Cheesecake" },
      { name: "Napoleon Cake" },
      { name: "Brownie" },
      { name: "Chocolate Muffin" },
    ],
  },
];

const drinksMenu = [
  {
    category: "Hot Drinks",
    items: [
      { name: "Espresso" },
      { name: "Latte" },
      { name: "Cappuccino" },
      { name: "Flat White" },
      { name: "Herbal Tea" },
      { name: "Hot Chocolate" },
    ],
  },
  {
    category: "Soft Drinks",
    items: [
      { name: "Pixel Cola" },
      { name: "Fanta" },
      { name: "Sprite" },
      { name: "Orange Juice" },
    ],
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
      const listItem = createWithClasses("li", "", "menu-item");
      const image = document.createElement("img");
      image.src = item.image ?? fallbackPNG;
      image.alt = `Picture of ${item.name}`;
      const nameDiv = createWithClasses("div", item.name, "name");
      listItem.append(image, nameDiv);
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
