export function createCard() {
  return createWithClasses("div", "", "card");
}

export function createWithClasses(tag, content, ...args) {
  const element = document.createElement(tag);
  element.textContent = content;
  element.classList.add(...args);
  return element;
}
