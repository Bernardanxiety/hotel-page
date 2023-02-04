export default function createElement(a, b) {
  const element = document.createElement(a);
  element.innerText = b;
  return element;
}
