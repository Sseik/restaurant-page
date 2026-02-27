import "./reset.css";
import "./style.css";
import loadHome from "./modules/home.js";

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
  loadHome();
  changeActiveButton(homeButton);
});

menuButton.addEventListener("click", () => {
  import("./modules/menu.js").then((module) => {
    module.default();
  });
  changeActiveButton(menuButton);
});

aboutButton.addEventListener("click", () => {
  import("./modules/about.js").then((module) => {
    module.default();
  });
  changeActiveButton(aboutButton);
});

loadHome();
changeActiveButton(homeButton);
