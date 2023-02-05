import createElement from "./dom.js";
import { restaurantInfo } from "./index.js";
import { clearContentDiv } from "./index.js";
import roomImage from "/src/room1.jpg";

const image = new Image();
image.src = roomImage;

function createRooms() {
  const rooms = restaurantInfo.showRooms();
  const wrapper = createElement("div", "");
  const contentInner = createElement("div", "");

  wrapper.append(contentInner);

  rooms.forEach((room) => {
    const roomCard = createElement("div", "");
    const img = createElement("img", "");
    const description = createElement("p", `${room.description}`);
    const priceDiv = createElement("div", "");
    const price = createElement("span", `${room.price}`);
    const priceSpan = createElement("span", "PLN / night");

    priceDiv.append(price, priceSpan);

    img.setAttribute("src", `${image.src}`);
    roomCard.classList.add("room-card", "box-shadow", "margin-top");
    priceDiv.setAttribute("style", "display: flex; gap: 1em;");

    roomCard.append(img, description, priceDiv);
    contentInner.append(roomCard);
  });

  wrapper.classList.add("wrapper", "rooms");
  contentInner.classList.add("rooms-grid");

  return wrapper;
}

export function roomsContent() {
  const rooms = createRooms();
  const content = document.getElementById("content");

  clearContentDiv();
  content.append(rooms);
}
