/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMain)
/* harmony export */ });
function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');

  const div = document.createElement('div');
  div.classList.add('about-us');

  const paragraphOne = document.createElement('p'); 
  paragraphOne.textContent = "Our coffee is the best coffee shop you'll find in the city. When you feel like drinking some coffee, come visit us and enjoy our delicious beverages."

  const image = document.createElement('img');
  image.src = "../images/cappuccino.jpg"
  image.alt = "Cappuccino being prepared"

  const paragraphTwo = document.createElement('p'); 
  paragraphTwo.textContent = "Did you know that your daily morning coffee provides you with more than just an energy boost? It's also shown to protect us against Type 2 diabetes and liver diseases as well as lowering the risks of heart failure."

  main.appendChild(div);
  div.appendChild(paragraphOne);
  div.appendChild(image);
  div.appendChild(paragraphTwo);

  return main;
}


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openContact)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");




function createContact() {
  const contact = document.createElement('main');
  contact.classList.add('contact');

  const div = document.createElement('div');
  div.classList.add('contact-us');

  const talkToUs = document.createElement('h2');
  talkToUs.textContent = "Wanna talk to us?";

  const phoneImg = document.createElement('img');
  phoneImg.src = "../images/phone-icon.png";
  phoneImg.alt = "picture of a phone";

  contact.appendChild(div);
  div.appendChild(talkToUs);
  div.appendChild(phoneImg);

  return contact;
}

function openContact() {
  const content = document.querySelector('#content');

  (0,_index__WEBPACK_IMPORTED_MODULE_2__["default"])(content);
  content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
  content.appendChild(createContact());
  content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_1__["default"])());

  return content;
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  footer.textContent = "Copyright © Renato Guedes - 2022"

  return footer;
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  
  header.appendChild(createBrandName());
  header.appendChild(createNav());
  
  return header;
};

function createBrandName() {
  
  const brandDiv = document.createElement('div');
  brandDiv.classList.add('brand');
  
  const brandName = document.createElement('h1');
  brandName.textContent = "Holder Coffee Shop";
  
  brandDiv.appendChild(brandName);

  return brandDiv;  
}

function createNav() {
  
  const navDiv = document.createElement('div');
  navDiv.classList.add('nav');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('button-nav');
  homeBtn.textContent = "Home";
  homeBtn.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__["default"]);

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('button-nav');
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__["default"]);

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('button-nav');
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_0__["default"]);

  navDiv.appendChild(homeBtn);
  navDiv.appendChild(menuBtn);
  navDiv.appendChild(contactBtn);

  return navDiv;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openHome)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.js");





function openHome() {

  const content = document.querySelector('#content');

  (0,_index__WEBPACK_IMPORTED_MODULE_3__["default"])(content);
  content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
  content.appendChild((0,_body__WEBPACK_IMPORTED_MODULE_1__["default"])());
  content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());

  return content;
}


 

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./src/home.js");







(0,_home__WEBPACK_IMPORTED_MODULE_4__["default"])();

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
};





/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openMenu)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/index.js");





function createMenu() {
  const menu = document.createElement('main');
  menu.classList.add('menu');

  const div = document.createElement('div');
  div.classList.add('menu-grid');

  const divEspresso = document.createElement('div');
  div.classList.add('espresso');
  const espressoImg = document.createElement('img');
  espressoImg.src = "../images/espresso.jpg"
  espressoImg.alt = "a delicious espresso coffee"
  const espressoPrice = document.createElement('div');
  espressoPrice.textContent = "Espresso $ 4.00"

  const divLatte = document.createElement('div');
  div.classList.add('latte');
  const latteImg = document.createElement('img');
  latteImg.src = "../images/latte.jpg"
  latteImg.alt = "a latte with a rose drawn on the top"
  const lattePrice = document.createElement('div');
  lattePrice.textContent = "Latte $ 5.00"

  const divIcedCoffee = document.createElement('div');
  div.classList.add('iced-coffee');
  const icedCoffeeImg = document.createElement('img');
  icedCoffeeImg.src = "../images/iced-coffee.jpg"
  icedCoffeeImg.alt = "iced coffee in a plastic cup"
  const icedCoffeePrice = document.createElement('div');
  icedCoffeePrice.textContent = "Iced Coffee $ 5.50"

  const divBagels = document.createElement('div');
  div.classList.add('bagels');
  const bagelsImg = document.createElement('img');
  bagelsImg.src = "../images/bagels.jpg"
  bagelsImg.alt = "bagels in a basket"
  const bagelsPrice = document.createElement('div');
  bagelsPrice.textContent = "Bagels $ 6.00"

  menu.appendChild(div);
  div.appendChild(divEspresso);
  div.appendChild(divLatte);
  div.appendChild(divIcedCoffee);
  div.appendChild(divBagels);

  divEspresso.appendChild(espressoImg);
  divEspresso.appendChild(espressoPrice);

  divLatte.appendChild(latteImg);
  divLatte.appendChild(lattePrice);

  divIcedCoffee.appendChild(icedCoffeeImg);
  divIcedCoffee.appendChild(icedCoffeePrice);

  divBagels.appendChild(bagelsImg);
  divBagels.appendChild(bagelsPrice);

  return menu
}

function openMenu() {
  const content = document.querySelector('#content');

  (0,_index__WEBPACK_IMPORTED_MODULE_2__["default"])(content);
  content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
  content.appendChild(createMenu());
  content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_1__["default"])());

  return content;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ib2R5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcclxuXHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXVzJyk7XHJcblxyXG4gIGNvbnN0IHBhcmFncmFwaE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgXHJcbiAgcGFyYWdyYXBoT25lLnRleHRDb250ZW50ID0gXCJPdXIgY29mZmVlIGlzIHRoZSBiZXN0IGNvZmZlZSBzaG9wIHlvdSdsbCBmaW5kIGluIHRoZSBjaXR5LiBXaGVuIHlvdSBmZWVsIGxpa2UgZHJpbmtpbmcgc29tZSBjb2ZmZWUsIGNvbWUgdmlzaXQgdXMgYW5kIGVuam95IG91ciBkZWxpY2lvdXMgYmV2ZXJhZ2VzLlwiXHJcblxyXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1hZ2Uuc3JjID0gXCIuLi9pbWFnZXMvY2FwcHVjY2luby5qcGdcIlxyXG4gIGltYWdlLmFsdCA9IFwiQ2FwcHVjY2lubyBiZWluZyBwcmVwYXJlZFwiXHJcblxyXG4gIGNvbnN0IHBhcmFncmFwaFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgXHJcbiAgcGFyYWdyYXBoVHdvLnRleHRDb250ZW50ID0gXCJEaWQgeW91IGtub3cgdGhhdCB5b3VyIGRhaWx5IG1vcm5pbmcgY29mZmVlIHByb3ZpZGVzIHlvdSB3aXRoIG1vcmUgdGhhbiBqdXN0IGFuIGVuZXJneSBib29zdD8gSXQncyBhbHNvIHNob3duIHRvIHByb3RlY3QgdXMgYWdhaW5zdCBUeXBlIDIgZGlhYmV0ZXMgYW5kIGxpdmVyIGRpc2Vhc2VzIGFzIHdlbGwgYXMgbG93ZXJpbmcgdGhlIHJpc2tzIG9mIGhlYXJ0IGZhaWx1cmUuXCJcclxuXHJcbiAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhPbmUpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaFR3byk7XHJcblxyXG4gIHJldHVybiBtYWluO1xyXG59XHJcbiIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCByZW1vdmVBbGxDaGlsZE5vZGVzIGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XHJcblxyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXVzJyk7XHJcblxyXG4gIGNvbnN0IHRhbGtUb1VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICB0YWxrVG9Vcy50ZXh0Q29udGVudCA9IFwiV2FubmEgdGFsayB0byB1cz9cIjtcclxuXHJcbiAgY29uc3QgcGhvbmVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBwaG9uZUltZy5zcmMgPSBcIi4uL2ltYWdlcy9waG9uZS1pY29uLnBuZ1wiO1xyXG4gIHBob25lSW1nLmFsdCA9IFwicGljdHVyZSBvZiBhIHBob25lXCI7XHJcblxyXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICBkaXYuYXBwZW5kQ2hpbGQodGFsa1RvVXMpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChwaG9uZUltZyk7XHJcblxyXG4gIHJldHVybiBjb250YWN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcGVuQ29udGFjdCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcblxyXG4gIHJldHVybiBjb250ZW50O1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuXHJcbiAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgUmVuYXRvIEd1ZWRlcyAtIDIwMjJcIlxyXG5cclxuICByZXR1cm4gZm9vdGVyO1xyXG59IiwiaW1wb3J0IG9wZW5Db250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IG9wZW5Ib21lIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IG9wZW5NZW51IGZyb20gXCIuL21lbnVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcbiAgXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUJyYW5kTmFtZSgpKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xyXG4gIFxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCcmFuZE5hbWUoKSB7XHJcbiAgXHJcbiAgY29uc3QgYnJhbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBicmFuZERpdi5jbGFzc0xpc3QuYWRkKCdicmFuZCcpO1xyXG4gIFxyXG4gIGNvbnN0IGJyYW5kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgYnJhbmROYW1lLnRleHRDb250ZW50ID0gXCJIb2xkZXIgQ29mZmVlIFNob3BcIjtcclxuICBcclxuICBicmFuZERpdi5hcHBlbmRDaGlsZChicmFuZE5hbWUpO1xyXG5cclxuICByZXR1cm4gYnJhbmREaXY7ICBcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gIFxyXG4gIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5hdkRpdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcclxuXHJcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdicpO1xyXG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkhvbWUpO1xyXG5cclxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24tbmF2Jyk7XHJcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnKTtcclxuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Db250YWN0KTtcclxuXHJcbiAgbmF2RGl2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xyXG4gIG5hdkRpdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcclxuICBuYXZEaXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XHJcblxyXG4gIHJldHVybiBuYXZEaXY7XHJcbn1cclxuXHJcbiIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCBjcmVhdGVNYWluIGZyb20gXCIuL2JvZHlcIjtcclxuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IHJlbW92ZUFsbENoaWxkTm9kZXMgZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZW5Ib21lKCkge1xyXG5cclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbiAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcblxyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5cclxuICIsImltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCBjcmVhdGVNYWluIGZyb20gXCIuL2JvZHlcIjtcclxuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgb3BlbkhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5cclxuXHJcbm9wZW5Ib21lKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xyXG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5cclxuIiwiXHJcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCByZW1vdmVBbGxDaGlsZE5vZGVzIGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcblxyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWdyaWQnKTtcclxuXHJcbiAgY29uc3QgZGl2RXNwcmVzc28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnZXNwcmVzc28nKTtcclxuICBjb25zdCBlc3ByZXNzb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGVzcHJlc3NvSW1nLnNyYyA9IFwiLi4vaW1hZ2VzL2VzcHJlc3NvLmpwZ1wiXHJcbiAgZXNwcmVzc29JbWcuYWx0ID0gXCJhIGRlbGljaW91cyBlc3ByZXNzbyBjb2ZmZWVcIlxyXG4gIGNvbnN0IGVzcHJlc3NvUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlc3ByZXNzb1ByaWNlLnRleHRDb250ZW50ID0gXCJFc3ByZXNzbyAkIDQuMDBcIlxyXG5cclxuICBjb25zdCBkaXZMYXR0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdsYXR0ZScpO1xyXG4gIGNvbnN0IGxhdHRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgbGF0dGVJbWcuc3JjID0gXCIuLi9pbWFnZXMvbGF0dGUuanBnXCJcclxuICBsYXR0ZUltZy5hbHQgPSBcImEgbGF0dGUgd2l0aCBhIHJvc2UgZHJhd24gb24gdGhlIHRvcFwiXHJcbiAgY29uc3QgbGF0dGVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGxhdHRlUHJpY2UudGV4dENvbnRlbnQgPSBcIkxhdHRlICQgNS4wMFwiXHJcblxyXG4gIGNvbnN0IGRpdkljZWRDb2ZmZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnaWNlZC1jb2ZmZWUnKTtcclxuICBjb25zdCBpY2VkQ29mZmVlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaWNlZENvZmZlZUltZy5zcmMgPSBcIi4uL2ltYWdlcy9pY2VkLWNvZmZlZS5qcGdcIlxyXG4gIGljZWRDb2ZmZWVJbWcuYWx0ID0gXCJpY2VkIGNvZmZlZSBpbiBhIHBsYXN0aWMgY3VwXCJcclxuICBjb25zdCBpY2VkQ29mZmVlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpY2VkQ29mZmVlUHJpY2UudGV4dENvbnRlbnQgPSBcIkljZWQgQ29mZmVlICQgNS41MFwiXHJcblxyXG4gIGNvbnN0IGRpdkJhZ2VscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdiYWdlbHMnKTtcclxuICBjb25zdCBiYWdlbHNJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBiYWdlbHNJbWcuc3JjID0gXCIuLi9pbWFnZXMvYmFnZWxzLmpwZ1wiXHJcbiAgYmFnZWxzSW1nLmFsdCA9IFwiYmFnZWxzIGluIGEgYmFza2V0XCJcclxuICBjb25zdCBiYWdlbHNQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJhZ2Vsc1ByaWNlLnRleHRDb250ZW50ID0gXCJCYWdlbHMgJCA2LjAwXCJcclxuXHJcbiAgbWVudS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChkaXZFc3ByZXNzbyk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKGRpdkxhdHRlKTtcclxuICBkaXYuYXBwZW5kQ2hpbGQoZGl2SWNlZENvZmZlZSk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKGRpdkJhZ2Vscyk7XHJcblxyXG4gIGRpdkVzcHJlc3NvLmFwcGVuZENoaWxkKGVzcHJlc3NvSW1nKTtcclxuICBkaXZFc3ByZXNzby5hcHBlbmRDaGlsZChlc3ByZXNzb1ByaWNlKTtcclxuXHJcbiAgZGl2TGF0dGUuYXBwZW5kQ2hpbGQobGF0dGVJbWcpO1xyXG4gIGRpdkxhdHRlLmFwcGVuZENoaWxkKGxhdHRlUHJpY2UpO1xyXG5cclxuICBkaXZJY2VkQ29mZmVlLmFwcGVuZENoaWxkKGljZWRDb2ZmZWVJbWcpO1xyXG4gIGRpdkljZWRDb2ZmZWUuYXBwZW5kQ2hpbGQoaWNlZENvZmZlZVByaWNlKTtcclxuXHJcbiAgZGl2QmFnZWxzLmFwcGVuZENoaWxkKGJhZ2Vsc0ltZyk7XHJcbiAgZGl2QmFnZWxzLmFwcGVuZENoaWxkKGJhZ2Vsc1ByaWNlKTtcclxuXHJcbiAgcmV0dXJuIG1lbnVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblxyXG4gIHJlbW92ZUFsbENoaWxkTm9kZXMoY29udGVudCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG5cclxuICByZXR1cm4gY29udGVudDtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=