import createElement from "/src/dom.js";
import { restaurantInfo } from ".";

export function createMenu() {
  const menu = restaurantInfo.showMenu();
  console.log(menu);
}
