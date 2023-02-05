import createElement from "/src/dom.js";
import { restaurantInfo } from ".";
import { clearContentDiv } from "/src/index.js";

export function createMenu() {
  const menu = restaurantInfo.showMenu();
  const wrapper = createElement("div", "");
  const contentInner = createElement("div", "");

  wrapper.append(contentInner);

  menu.forEach((danie) => {
    const menuCard = createElement("div", "");
    const h2 = createElement("h2", `${danie.category}`);
    const description = createElement("p", `${danie.description}`);
    const price = createElement("p", `${danie.price}`);

    menuCard.classList.add("margin-top", "menuCard");
    contentInner.classList.add("menu-grid");

    menuCard.append(h2, description, price);
    contentInner.append(menuCard);
    return menuCard;
  });

  wrapper.classList.add("menu", "wrapper");

  return wrapper;
}

export function menuContent() {
  const menu = createMenu();
  const content = document.getElementById("content");

  clearContentDiv();
  content.append(menu);
}
