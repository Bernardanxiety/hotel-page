(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(667),c=t.n(s),d=new URL(t(829),t.b),p=i()(r());p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Solitreo&display=swap);"]);var l=c()(d);p.push([n.id,'*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\n/* body */\n.body-init {\n  font-size: 2.4rem;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,\n    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  color: #fff;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n}\n\n/* helper classes */\n.margin-top > * + * {\n  margin-top: var(--top, 1em);\n}\n\n/* header */\n.header,\n.footer {\n  background-color: rgba(0, 0, 0, 1);\n  color: #fff;\n  display: flex;\n  justify-content: center;\n}\n\n.header nav ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  gap: 1.5em;\n}\n\n.navBtn {\n  appearance: none;\n  color: #fff;\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  padding: 1.5em;\n  cursor: pointer;\n}\n\n.navBtn:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n/* content */\n#content {\n  flex-grow: 1;\n  font-family: Solitreo, cursive;\n  color: #fff;\n  font-size: clamp(1.7rem, 2vw, 2.2rem);\n}\n\n.background-image {\n  background-image: url('+l+');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  position: relative;\n}\n\n.background-image::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n#content > * {\n  position: relative;\n  z-index: 10;\n}\n\n.wrapper {\n  width: min(90%, 1000px);\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n}\n\n.wrapper.home {\n  text-align: center;\n}\n\n.wrapper.home .description {\n  text-align: left;\n}\n\n.welcome-message {\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n/* menu */\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-auto-flow: row;\n  gap: 3rem;\n}\n\n.menuCard {\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: min-content 1fr min-content;\n}\n\n.box-shadow {\n  box-shadow: 1px 1px 5px #fff;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n}\n\n/* rooms */\n.rooms-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-auto-flow: row;\n  gap: 3rem;\n}\n\n.room-card {\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: max-content 1fr min-content;\n}\n/* footer */\n.footer {\n  padding: 1rem 0;\n  font-weight: 100;\n  font-size: 1.4rem;\n}\n\n.footer a {\n  color: inherit;\n}\n',""]);const u=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=t(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),d=0;d<a.length;d++){var p=t(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},829:(n,e,t)=>{n.exports=t.p+"33f4d075e7244e77738c.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o={};(()=>{t.d(o,{H:()=>k,f:()=>S});var n=t(379),e=t.n(n),r=t(795),a=t.n(r),i=t(569),s=t.n(i),c=t(565),d=t.n(c),p=t(216),l=t.n(p),u=t(589),m=t.n(u),f=t(426),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,t.p;var h=t(829);function v(n,e){const t=document.createElement(n);return t.innerText=e,t}function b(){const n=function(){const n=v("div",""),e=v("div",""),t=v("p","Welcome to Marriott Warsaw Hotel"),o=v("h1","Reserve your next city center break in Warsaw, Poland"),r=v("p","Discover an upscale city center hotel with warm service and 5-star amenities when you visit Warsaw Marriott Hotel. Spacious hotel rooms await, featuring plush bedding, flat-screen TVs and stunning views of Warsaw. For those looking for extra space, our suites will add another layer of splendor to your trip, offering separate living, dining and sleeping areas, as well as access to the M Club. For relaxation, guests can unwind at our gym and indoor pool, whirlpool or dry sauna. Culinary experience will be lifted up by dining and drinking at one of our hotel's several restaurants, including Panorama Sky Bar and Floor No2 restaurant. Host a meeting or special event in Warsaw at one of our 25 versatile meeting, conference and wedding venues and take advantage of our delicious catering and expert planning services to ensure an 5-star occasion. Additional services include 24-hour room service, on-site parking, valet dry-cleaning and florist.");return n.classList="wrapper home",t.classList.add("welcome-message"),r.classList.add("description"),e.classList.add("margin-top"),n.append(e),e.append(t,o,r),n}(),e=document.getElementById("content");k(),e.append(n)}function y(){const n=S.showMenu(),e=v("div",""),t=v("div","");return e.append(t),n.forEach((n=>{const e=v("div",""),o=v("h2",`${n.category}`),r=v("p",`${n.description}`),a=v("p",`${n.price}`);e.classList.add("margin-top","menuCard","box-shadow"),t.classList.add("menu-grid"),e.append(o,r,a),t.append(e)})),e.classList.add("menu","wrapper"),e}function w(){const n=y(),e=document.getElementById("content");k(),e.append(n)}const x=t.p+"aa4a97aaba0bcd6bfe12.jpg",C=new Image;function E(){const n=function(){const n=S.showRooms(),e=v("div",""),t=v("div","");return e.append(t),n.forEach((n=>{const e=v("div",""),o=v("img",""),r=v("p",`${n.description}`),a=v("div",""),i=v("span",`${n.price}`),s=v("span","PLN / night");a.append(i,s),o.setAttribute("src",`${C.src}`),e.classList.add("room-card","box-shadow","margin-top"),a.setAttribute("style","display: flex; gap: 1em;"),e.append(o,r,a),t.append(e)})),e.classList.add("wrapper","rooms"),t.classList.add("rooms-grid"),e}(),e=document.getElementById("content");k(),e.append(n)}C.src=x,document.getElementById("content");const S=function(){const n=[{category:"Pasta",description:"Tagliolini al nero di seppia, tomato, prawns, mussels, garlic & white wine",price:"85zł"},{category:"Meat",description:"Lamb chops, roasted seasonal vegetables, potatoes puree, red wine sauce ",price:"125zł"},{category:"Fish And Seafood",description:"Gamberoni piccanti, fried prawns, tomato, garlic & parsley ",price:"90zł"},{category:"Sides",description:"Broccoli sautéed",price:"25zł"},{category:"Desserts",description:"Tiramisu, ladyfingers, Kahula, coffee",price:"40zł"},{category:"Sweet Wine",description:"Moscato D’Astin DOCG, Italy USA 750 ml ",price:"220zł"}],e=[{url:"/src/room1.jpg",description:"Executive Room, M Club lounge access, Guest room, 2 Doubles, High floor",price:"679"},{url:"/src/room1.jpg",description:"Executive Room, M Club lounge access, Guest room, 2 Doubles, High floor",price:"679"},{url:"/src/room1.jpg",description:"Executive Room, M Club lounge access, Guest room, 2 Doubles, High floor",price:"679"}];return{showMenu:function(){return n},getLocalisation:function(){return"Warsaw"},showRooms:function(){return e}}}();function k(){for(;M.lastChild;)M.removeChild(M.lastChild)}const L=document.body,M=document.getElementById("content");L.classList="body-init",M.classList.add("background-image"),function(){const n=document.body,e=function(){const n=v("header",""),e=v("nav",""),t=v("ul",""),o=v("li",""),r=v("li",""),a=v("li",""),i=v("button"),s=v("button"),c=v("button");n.classList.add("header"),n.appendChild(e),e.appendChild(t),t.appendChild(o),t.appendChild(r),t.appendChild(a),o.appendChild(i),r.appendChild(s),a.appendChild(c),i.textContent="Home",s.textContent="Menu",c.textContent="Rooms",i.id="btnHome",s.id="btnMenu",c.id="btnRooms";const d=t.querySelectorAll("button");return d.forEach((n=>n.classList.add("navBtn"))),document.getElementById("content"),d.forEach((n=>{let e;switch(n.id){case"btnHome":e=b;break;case"btnMenu":e=w;break;case"btnRooms":e=E}n.addEventListener("click",e)})),n}(),t=function(){const n=v("footer",""),e=v("p",""),t=v("a","Bernardanxiety");return t.setAttribute("href","https://github.com/Bernardanxiety"),n.classList.add("footer"),e.innerHTML="Copyright &copy; 2023 ",e.append(t),n.append(e),n}();n.prepend(e),n.append(t)}(),b(),y(),(new Image).src=h})()})();