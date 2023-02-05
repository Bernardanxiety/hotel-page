import "./style.css";
import createElement from "/src/dom.js";
import Pizza from "./pizza.jpeg";
import RestaurantImg from "./restaurant.jpg";
import { mainPage } from "/src/main-page.js";
import { homeContent } from "/src/home.js";

export const restaurantInfo = (function () {
  const name = "Some restaurant";
  const menu = [
    {
      category: "asd",
    },
    {
      category: "asd",
    },
    {
      category: "asd",
    },
    {
      category: "asd",
    },
    {
      category: "asd",
    },
    {
      category: "asd",
    },
  ];

  const localisation = "Warsaw";

  function getLocalisation() {
    return localisation;
  }
  function showMenu() {
    return menu;
  }

  return {
    showMenu,
    getLocalisation,
  };
})();

export function clearContentDiv() {
  while (content.lastChild) {
    content.removeChild(content.lastChild);
  }
}

const body = document.body;
const content = document.getElementById("content");

body.classList = "body-init";
content.classList.add("background-image");

function init() {
  mainPage();
  homeContent();
}

init();

const pizzaImage = new Image();
const restaurantImage = new Image();
pizzaImage.src = Pizza;
restaurantImage.src = RestaurantImg;
