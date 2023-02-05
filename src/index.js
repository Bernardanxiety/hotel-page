import "./style.css";
import createElement from "/src/dom.js";
import Pizza from "./pizza.jpeg";
import RestaurantImg from "./restaurant.jpg";
import { mainPage } from "/src/main-page.js";
import { homeContent } from "/src/home.js";
import { createMenu } from "/src/menu.js";

export const restaurantInfo = (function () {
  const name = "Some restaurant";
  const menu = [
    {
      category: "Pasta",
      description:
        "Tagliolini al nero di seppia, tomato, prawns, mussels, garlic & white wine",
      price: "85zł",
    },
    {
      category: "Meat",
      description:
        "Lamb chops, roasted seasonal vegetables, potatoes puree, red wine sauce ",
      price: "125zł",
    },
    {
      category: "Fish And Seafood",
      description:
        "Gamberoni piccanti, fried prawns, tomato, garlic & parsley ",
      price: "90zł",
    },
    {
      category: "Sides",
      description: "Broccoli sautéed",
      price: "25zł",
    },
    {
      category: "Desserts",
      description: "Tiramisu, ladyfingers, Kahula, coffee",
      price: "40zł",
    },
    {
      category: "Sweet Wine",
      description: "Moscato D’Astin DOCG, Italy USA 750 ml ",
      price: "220zł",
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
  createMenu();
}

init();

const pizzaImage = new Image();
const restaurantImage = new Image();
pizzaImage.src = Pizza;
restaurantImage.src = RestaurantImg;
