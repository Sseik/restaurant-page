import "./reset.css";
import "./style.css";
import showHome from "./modules/home.js";

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
  showHome();
  changeActiveButton(homeButton);
});

/* showHome(); */
