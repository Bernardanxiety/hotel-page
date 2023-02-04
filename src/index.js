import "./style.css";
import createElement from "/src/dom.js";
import Pizza from "./pizza.jpeg";
import RestaurantImg from "./restaurant.jpg";
import { mainPage } from "/src/main-page.js";
import homeContent from "/src/home.js";

const restaurantInfo = (function () {
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

const body = document.body;
// const headerDiv = header();
const content = document.getElementById("content");

body.classList = "body-init";
content.classList.add("background-image");

function init() {
  mainPage();
  homeContent();
}

init();
function clearContentDiv() {
  const body = document.body;
  while (body.lastChild) {
    body.removeChild(body.lastChild);
  }
}

const pizzaImage = new Image();
const restaurantImage = new Image();
pizzaImage.src = Pizza;
restaurantImage.src = RestaurantImg;
