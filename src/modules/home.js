import "./home.css";
import { createCard, createWithClasses } from "./helper";
import chefHeadPNG from "../assets/images/ChefHead.png";

const review = `
  Best non-existing restaurant ever! No food tastes bad because it doesn't exist.
`;
const reviewAuthor = "Marco Pixel White";
const workingHours = [
  { days: "Monday-Friday", start: 9, end: 17 },
  { days: "Saturday", start: 10, end: 16 },
  { days: "Sunday", start: null },
];
const location = "221B Baker Street, London, England";

export default function () {
  const contentMain = document.querySelector("#content");
  contentMain.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.textContent = "Pixel Restaurant";

  const reviewCard = createCard();
  const reviewDiv = createWithClasses("div", review, "review");
  const authorDiv = createWithClasses("div", reviewAuthor, "author");
  const chefHeadImage = document.createElement("img");
  chefHeadImage.src = chefHeadPNG;
  authorDiv.appendChild(chefHeadImage);
  reviewCard.append(reviewDiv, authorDiv);

  const scheduleCard = createCard();
  scheduleCard.append(createWithClasses("h3", "Working Hours"));
  for (let item of workingHours) {
    const content = `${item.days}: ${item.start ? item.start + "-" + item.end : "Closed"}`;
    scheduleCard.appendChild(
      createWithClasses("div", content, "working-hours"),
    );
  }

  const locationCard = createCard();
  locationCard.append(
    createWithClasses("h3", "Location"),
    createWithClasses("div", location, "location"),
  );

  contentMain.append(h2, reviewCard, scheduleCard, locationCard);
}
