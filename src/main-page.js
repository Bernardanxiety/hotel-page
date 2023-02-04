import createElement from "/src/dom.js";

function header() {
  const header = createElement("header", "");
  const nav = createElement("nav", "");
  const ul = createElement("ul", "");
  const li1 = createElement("li", "");
  const li2 = createElement("li", "");
  const li3 = createElement("li", "");
  const btnHome = createElement("button");
  const btnMenu = createElement("button");
  const btnContact = createElement("button");

  header.classList.add("header");

  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  li1.appendChild(btnHome);
  li2.appendChild(btnMenu);
  li3.appendChild(btnContact);

  btnHome.textContent = "Home";
  btnMenu.textContent = "Menu";
  btnContact.textContent = "Contact";

  const buttons = ul.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.add("navBtn"));

  return header;
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
