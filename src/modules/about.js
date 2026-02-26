import { createCard, createWithClasses } from "./helper.js";
import wavingChefGIF from "../assets/images/ChefWaving.gif";
import handsetPNG from "../assets/images/Handset.png";
import "./about.css";

const contactMethods = [
  { name: "Phone Number", value: "111-222-333" },
  { name: "Email", value: "contact@restaurant.pix" },
];

export default function () {
  const contentMain = document.querySelector("#content");
  contentMain.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.textContent = "About";

  const infoCard = createCard();
  infoCard.classList.add("info");
  const gifImage = document.createElement("img");
  gifImage.src = wavingChefGIF;
  const infoCardHeading = document.createElement("h3");
  infoCardHeading.textContent = "Why don't we have prices?";
  const infoParagraph = document.createElement("p");
  infoParagraph.textContent = `
  Because the only thing you can eat with is your eyes!
  Frankly, we are more of an art gallery than a restaurant but who cares?
  `;
  infoCard.append(gifImage, infoCardHeading, infoParagraph);

  const contactInfoCard = createCard();
  const contactInfoCardHeading = document.createElement("h3");
  contactInfoCardHeading.textContent = "Contact Information";
  const handsetImage = document.createElement("img");
  handsetImage.src = handsetPNG;
  contactInfoCardHeading.appendChild(handsetImage);
  const contactMethodsDiv = document.createElement("div");
  for (let contactMethod of contactMethods) {
    const contactMethodDiv = createWithClasses("div", "", "contact-method");
    const contactMethodSpan = createWithClasses("span", contactMethod.name + ": ", "name");
    contactMethodDiv.append(contactMethodSpan, contactMethod.value);
    contactMethodsDiv.appendChild(contactMethodDiv);
  }
  contactInfoCard.append(contactInfoCardHeading, contactMethodsDiv);

  contentMain.append(h2, infoCard, contactInfoCard);
}
