import createElement from "/src/dom.js";

function homePage() {
  const wrapper = createElement("div", "");
  const contentInner = createElement("div", "");
  const welcome = createElement("p", "Welcome to Marriott Warsaw Hotel");
  const h1 = createElement(
    "h1",
    "Reserve your next city center break in Warsaw, Poland"
  );
  const description = createElement(
    "p",
    `Discover an upscale city center hotel with warm service and 5-star amenities when you visit Warsaw Marriott Hotel. Spacious hotel rooms await, featuring plush bedding, flat-screen TVs and stunning views of Warsaw. For those looking for extra space, our suites will add another layer of splendor to your trip, offering separate living, dining and sleeping areas, as well as access to the M Club. For relaxation, guests can unwind at our gym and indoor pool, whirlpool or dry sauna. Culinary experience will be lifted up by dining and drinking at one of our hotel's several restaurants, including Panorama Sky Bar and Floor No2 restaurant. Host a meeting or special event in Warsaw at one of our 25 versatile meeting, conference and wedding venues and take advantage of our delicious catering and expert planning services to ensure an 5-star occasion. Additional services include 24-hour room service, on-site parking, valet dry-cleaning and florist.`
  );

  wrapper.classList = "wrapper home";
  welcome.classList.add("welcome-message");
  description.classList.add("description");
  contentInner.classList.add("margin-top");

  wrapper.append(contentInner);
  contentInner.append(welcome, h1, description);

  return wrapper;
}

export default function homeContent() {
  const contentInner = homePage();
  const content = document.getElementById("content");

  content.append(contentInner);
}
