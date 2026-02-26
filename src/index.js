import "./reset.css";
import "./style.css";

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");
const buttons = [homeButton, menuButton, aboutButton];

function changeActiveButton(button) {
  buttons.forEach((el) =>
    el === button ? el.classList.add("active") : el.classList.remove("active"),
  );
}

homeButton.addEventListener("click", () => {
  import("./modules/home.js").then((module) => {
    module.default();
  });
  changeActiveButton(homeButton);
});

menuButton.addEventListener("click", () => {
  import("./modules/menu.js").then((module) => {
    module.default();
  });
  changeActiveButton(homeButton);
});

aboutButton.addEventListener("click", () => {
  import("./modules/about.js").then((module) => {
    module.default();
  });
  changeActiveButton(homeButton);
});

import("./modules/home.js").then((module) => {
  module.default();
});

changeActiveButton(homeButton);
