import createElement from "/src/dom.js";
import { clearContentDiv } from "/src/index.js";
import { homeContent } from "/src/home.js";
import { menuContent } from "/src/menu.js";
import { roomsContent } from "/src/rooms.js";

const content = document.getElementById("content");

function header() {
  const header = createElement("header", "");
  const nav = createElement("nav", "");
  const ul = createElement("ul", "");
  const li1 = createElement("li", "");
  const li2 = createElement("li", "");
  const li3 = createElement("li", "");
  const btnHome = createElement("button");
  const btnMenu = createElement("button");
  const btnRooms = createElement("button");

  header.classList.add("header");

  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  li1.appendChild(btnHome);
  li2.appendChild(btnMenu);
  li3.appendChild(btnRooms);

  btnHome.textContent = "Home";
  btnMenu.textContent = "Menu";
  btnRooms.textContent = "Rooms";

  btnHome.id = "btnHome";
  btnMenu.id = "btnMenu";
  btnRooms.id = "btnRooms";

  const buttons = ul.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.add("navBtn"));
  const content = document.getElementById("content");

  addListeners(buttons);

  return header;
}

function addListeners(a) {
  a.forEach((btn) => {
    const id = btn.id;
    let log;
    switch (id) {
      case "btnHome":
        log = homeContent;
        break;
      case "btnMenu":
        log = menuContent;
        break;
      case "btnRooms":
        log = roomsContent;
        break;
    }
    btn.addEventListener("click", log);
  });
}

function footer() {
  const footer = createElement("footer", "");
  const p = createElement("p", "");
  const a = createElement("a", "Bernardanxiety");
  a.setAttribute("href", "https://github.com/Bernardanxiety");

  footer.classList.add("footer");

  p.innerHTML = "Copyright &copy; 2023 ";

  p.append(a);
  footer.append(p);
  return footer;
}

export function mainPage() {
  const body = document.body;
  const headerDiv = header();
  const footerDiv = footer();

  body.prepend(headerDiv);
  body.append(footerDiv);
}
