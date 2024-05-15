/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bgimg.jpg */ "./src/assets/bgimg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --header-bcg: #302c34;
    --menu-bcg: #4a4d54;
    --buttons-bcg: #ff3636;
    --menu-card-btns: #ffe6a9;
    --menu-card-unselected: #a1987f;
}

*, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
}

html {
    width: 100%;
}

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: white;
    font-family: "Roboto", sans-serif;
    width: 100%;
}

header {
    display: flex;
    justify-content: space-between;
    background-color: var(--header-bcg);
    padding: 1rem 2rem;
}

.brand {
    margin-left: 4rem;
}

.nav {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-right: 4rem;
}

.nav button {
    background-color: var(--header-bcg);
    border: none;
    color: white;
    align-self: end;
    position: relative;
    top: -15%;
    font-size: 20px;
}

.nav button:hover {
    border-bottom: 1px solid white;
}

#content {
    display: grid;
    width: 100%;
    margin: 6rem 0;
}

.home-container {
    width: 320px;
    margin-left: 6rem;
}

.home-container p {
    margin: 2.5rem 0;
}

button.fake-button {
    background-color: var(--buttons-bcg);
    color: #ffffff;
    padding: 1em 1.5em;
    border: none;
    border-radius: 6px;
    font-size: 16px;
}

button, .brand-text {
    cursor: pointer;
}

.menu-container,
.contact-container {
    text-align: center;
    background-color: var(--header-bcg);
    width: 90%;
    display: grid;
    justify-self: center;
    padding: 4rem 2rem;
    border-radius: 10px;
}

.menu-text {
    font-size: 24px;
    margin-bottom: 2rem;
    border-bottom: 1px solid white;
}

.menu-options {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;
}

.menu-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--menu-bcg);
    border-radius: 20px;
    width: 240px;
    min-width: 240px;
    padding: 1.2rem;
}

.pizza-picture img {
    width: 220px;
    position: relative;
    top: -3%;
    left: -3.5%;
    margin-bottom: 1rem;
}

.pizza-description {
    margin: 1.4rem 0;
}

.pizza-sizes {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.pizza-sizes button {
    background-color: var(--menu-card-btns);
    padding: 0.3rem 0.6rem;
    border: none;
    border-radius: 8px;
}

.pizza-cart-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button.cart-icon {
    background-color: var(--buttons-bcg);
    border: none;
    border-radius: 8px;
    padding: 0.5rem 2rem;
}

.cart-icon img {
    width: 24px;
    height: 24px;
    filter: invert(100%) sepia(0%) saturate(15%) hue-rotate(310deg) 
            brightness(105%) contrast(106%);
}

.contact-container {
    padding-bottom: 7rem;
}

.contact-us {
    border-bottom: 1px solid white;
}

.contact-options {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5rem;
    gap: 3rem;
}

.contact-card {
    background-color: var(--menu-bcg);
    border-radius: 20px;
    width: 340px;
    min-width: 240px;
    padding: 1.2rem;
}

.contact-title {
    margin-bottom: 2rem;
}

.phone {
    margin-bottom: 0.6rem;
}


.created-by {
    color: #E5E7EB;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 40px;
    font-size: 20px;
    font-weight: 400;
    position: relative;
    top: 70%;
}


@media screen and (max-width: 600px) {
    
    .brand {
        margin-left: 0.5rem;
    }

    .nav {
        margin-right: 0.5rem;
        flex-wrap: nowrap;
        gap: 0.7rem;
    }
}

@media screen and (max-width: 475px) {
    
    header {
        flex-direction: column;
        align-items: center;
    }

    .brand-text {
        margin-bottom: 2rem;
        text-align: center;
    }

    h1 {
        font-size: 24px;
    }

    .nav button {
        font-size: 18px;
    }

    .home-container {
        width: 320px;
        margin: auto;
        text-align: center;
    }

    .menu-container {
        min-width: 300px;
    }

    .contact-card {
        width: 95%;
    }

    h2 {
        font-size: 20px;
    }
}

@media screen and (max-width: 340px) {
    
    .home-container {
        width: 95%;
    }

    .nav {
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;
    }

    .brand {
        margin: auto;
    }

}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,sBAAsB;IACtB,yBAAyB;IACzB,+BAA+B;AACnC;;AAEA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,yDAA0C;IAC1C,4BAA4B;IAC5B,sBAAsB;IACtB,4BAA4B;IAC5B,YAAY;IACZ,iCAAiC;IACjC,WAAW;AACf;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,cAAc;IACd,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,kBAAkB;IAClB,mCAAmC;IACnC,UAAU;IACV,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iCAAiC;IACjC,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,uCAAuC;IACvC,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ;2CACuC;AAC3C;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,iCAAiC;IACjC,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;;AAGA;IACI,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,QAAQ;AACZ;;;AAGA;;IAEI;QACI,mBAAmB;IACvB;;IAEA;QACI,oBAAoB;QACpB,iBAAiB;QACjB,WAAW;IACf;AACJ;;AAEA;;IAEI;QACI,sBAAsB;QACtB,mBAAmB;IACvB;;IAEA;QACI,mBAAmB;QACnB,kBAAkB;IACtB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,YAAY;QACZ,YAAY;QACZ,kBAAkB;IACtB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,eAAe;IACnB;AACJ;;AAEA;;IAEI;QACI,UAAU;IACd;;IAEA;QACI,eAAe;QACf,uBAAuB;QACvB,YAAY;IAChB;;IAEA;QACI,YAAY;IAChB;;AAEJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\n:root {\r\n    --header-bcg: #302c34;\r\n    --menu-bcg: #4a4d54;\r\n    --buttons-bcg: #ff3636;\r\n    --menu-card-btns: #ffe6a9;\r\n    --menu-card-unselected: #a1987f;\r\n}\r\n\r\n*, *::after, *::before {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n}\r\n\r\nhtml {\r\n    width: 100%;\r\n}\r\n\r\nbody {\r\n    background-image: url(../assets/bgimg.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    color: white;\r\n    font-family: \"Roboto\", sans-serif;\r\n    width: 100%;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: var(--header-bcg);\r\n    padding: 1rem 2rem;\r\n}\r\n\r\n.brand {\r\n    margin-left: 4rem;\r\n}\r\n\r\n.nav {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 2rem;\r\n    margin-right: 4rem;\r\n}\r\n\r\n.nav button {\r\n    background-color: var(--header-bcg);\r\n    border: none;\r\n    color: white;\r\n    align-self: end;\r\n    position: relative;\r\n    top: -15%;\r\n    font-size: 20px;\r\n}\r\n\r\n.nav button:hover {\r\n    border-bottom: 1px solid white;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    width: 100%;\r\n    margin: 6rem 0;\r\n}\r\n\r\n.home-container {\r\n    width: 320px;\r\n    margin-left: 6rem;\r\n}\r\n\r\n.home-container p {\r\n    margin: 2.5rem 0;\r\n}\r\n\r\nbutton.fake-button {\r\n    background-color: var(--buttons-bcg);\r\n    color: #ffffff;\r\n    padding: 1em 1.5em;\r\n    border: none;\r\n    border-radius: 6px;\r\n    font-size: 16px;\r\n}\r\n\r\nbutton, .brand-text {\r\n    cursor: pointer;\r\n}\r\n\r\n.menu-container,\r\n.contact-container {\r\n    text-align: center;\r\n    background-color: var(--header-bcg);\r\n    width: 90%;\r\n    display: grid;\r\n    justify-self: center;\r\n    padding: 4rem 2rem;\r\n    border-radius: 10px;\r\n}\r\n\r\n.menu-text {\r\n    font-size: 24px;\r\n    margin-bottom: 2rem;\r\n    border-bottom: 1px solid white;\r\n}\r\n\r\n.menu-options {\r\n    display: flex;\r\n    gap: 3rem;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.menu-card {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    background-color: var(--menu-bcg);\r\n    border-radius: 20px;\r\n    width: 240px;\r\n    min-width: 240px;\r\n    padding: 1.2rem;\r\n}\r\n\r\n.pizza-picture img {\r\n    width: 220px;\r\n    position: relative;\r\n    top: -3%;\r\n    left: -3.5%;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.pizza-description {\r\n    margin: 1.4rem 0;\r\n}\r\n\r\n.pizza-sizes {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.pizza-sizes button {\r\n    background-color: var(--menu-card-btns);\r\n    padding: 0.3rem 0.6rem;\r\n    border: none;\r\n    border-radius: 8px;\r\n}\r\n\r\n.pizza-cart-price {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\nbutton.cart-icon {\r\n    background-color: var(--buttons-bcg);\r\n    border: none;\r\n    border-radius: 8px;\r\n    padding: 0.5rem 2rem;\r\n}\r\n\r\n.cart-icon img {\r\n    width: 24px;\r\n    height: 24px;\r\n    filter: invert(100%) sepia(0%) saturate(15%) hue-rotate(310deg) \r\n            brightness(105%) contrast(106%);\r\n}\r\n\r\n.contact-container {\r\n    padding-bottom: 7rem;\r\n}\r\n\r\n.contact-us {\r\n    border-bottom: 1px solid white;\r\n}\r\n\r\n.contact-options {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    margin-top: 5rem;\r\n    gap: 3rem;\r\n}\r\n\r\n.contact-card {\r\n    background-color: var(--menu-bcg);\r\n    border-radius: 20px;\r\n    width: 340px;\r\n    min-width: 240px;\r\n    padding: 1.2rem;\r\n}\r\n\r\n.contact-title {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.phone {\r\n    margin-bottom: 0.6rem;\r\n}\r\n\r\n\r\n.created-by {\r\n    color: #E5E7EB;\r\n    display: flex;\r\n    text-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 40px;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    position: relative;\r\n    top: 70%;\r\n}\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n    \r\n    .brand {\r\n        margin-left: 0.5rem;\r\n    }\r\n\r\n    .nav {\r\n        margin-right: 0.5rem;\r\n        flex-wrap: nowrap;\r\n        gap: 0.7rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 475px) {\r\n    \r\n    header {\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .brand-text {\r\n        margin-bottom: 2rem;\r\n        text-align: center;\r\n    }\r\n\r\n    h1 {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .nav button {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .home-container {\r\n        width: 320px;\r\n        margin: auto;\r\n        text-align: center;\r\n    }\r\n\r\n    .menu-container {\r\n        min-width: 300px;\r\n    }\r\n\r\n    .contact-card {\r\n        width: 95%;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 340px) {\r\n    \r\n    .home-container {\r\n        width: 95%;\r\n    }\r\n\r\n    .nav {\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        margin: auto;\r\n    }\r\n\r\n    .brand {\r\n        margin: auto;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/contacts.js":
/*!****************************!*\
  !*** ./src/js/contacts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContacts)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/index.js");


function createContacts() {
    const content = document.querySelector('#content');
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(content);

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container")

    const contactUs = document.createElement("h1");
    contactUs.classList.add("contact-us");
    contactUs.textContent = "Contact Us";

    const contactOptions = document.createElement("div");
    contactOptions.classList.add("contact-options");

    // first option
    const contactCardOne = document.createElement("div");
    contactCardOne.classList.add("contact-card");
    const contactTitleOne = document.createElement("h2");
    contactTitleOne.classList.add("contact-title");
    contactTitleOne.textContent = "Ron Restaurant";
    const contactInfoOne = document.createElement("div");
    contactInfoOne.classList.add("contact-info");
    const phoneOne = document.createElement("div");
    phoneOne.classList.add("phone");
    phoneOne.textContent = "444-555-6666";
    const emailOne = document.createElement("div");
    emailOne.classList.add("email");
    emailOne.textContent = "totallyRealEmail@notFake.com";

    // second option
    const contactCardTwo = document.createElement("div");
    contactCardTwo.classList.add("contact-card");
    const contactTitleTwo = document.createElement("h2");
    contactTitleTwo.classList.add("contact-title");
    contactTitleTwo.textContent = "Davie Restaurant";
    const contactInfoTwo = document.createElement("div");
    contactInfoTwo.classList.add("contact-info");
    const phoneTwo = document.createElement("div");
    phoneTwo.classList.add("phone");
    phoneTwo.textContent = "444-555-6666";
    const emailTwo = document.createElement("div");
    emailTwo.classList.add("email");
    emailTwo.textContent = "totallyRealEmail@notFake.com";

    // footer
    const footer = createFooter();

    content.appendChild(contactContainer);
    content.appendChild(footer);
    contactContainer.appendChild(contactUs);
    contactContainer.appendChild(contactOptions);

    // first option
    contactOptions.appendChild(contactCardOne);
    contactCardOne.appendChild(contactTitleOne);
    contactCardOne.appendChild(contactInfoOne);
    contactInfoOne.appendChild(phoneOne);
    contactInfoOne.appendChild(emailOne);

    // second option
    contactOptions.appendChild(contactCardTwo);
    contactCardTwo.appendChild(contactTitleTwo);
    contactCardTwo.appendChild(contactInfoTwo);
    contactInfoTwo.appendChild(phoneTwo);
    contactInfoTwo.appendChild(emailTwo);

    return content;
}


function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("created-by");
    footer.textContent = "Created by Renato Guedes";

    return footer;
}

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHome)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/index.js");
/* harmony import */ var _assets_bgimg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/bgimg.jpg */ "./src/assets/bgimg.jpg");



function createHome() {
    const content = document.querySelector('#content');
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(content);

    const headline = document.createElement("div");
    headline.classList.add("home-container");

    const h1 = document.createElement("h1");
    h1.textContent = "Holder Pizza";

    const p = document.createElement("p");
    p.textContent = "We've been making pizza in the wood-fired oven for 15 years now. When you take a bite, you'll taste the fresh tomatoes and spices: basil, oregano, marjoram. Hurry up and come and see it for yourself!"

    const button = document.createElement("button");
    button.classList.add("fake-button");
    button.textContent = "Make an Order";
    button.addEventListener("click", () => {
        alert("This is a fake website");
    });

    headline.appendChild(h1);
    headline.appendChild(p);
    headline.appendChild(button);
    content.appendChild(headline);

    return content;
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeAllChildNodes)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/js/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _contacts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.js */ "./src/js/contacts.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");






const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contacts = document.querySelector("#contacts");
const brandText = document.querySelector(".brand-text");

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
}

home.addEventListener("click", _home_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
brandText.addEventListener("click", _home_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
menu.addEventListener("click", _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
contacts.addEventListener("click", _contacts_js__WEBPACK_IMPORTED_MODULE_2__["default"])

;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/js/index.js");
/* harmony import */ var _assets_pizza1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/pizza1.png */ "./src/assets/pizza1.png");
/* harmony import */ var _assets_pizza2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/pizza2.png */ "./src/assets/pizza2.png");
/* harmony import */ var _assets_pizza3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/pizza3.png */ "./src/assets/pizza3.png");
/* harmony import */ var _assets_shopping_cart_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/shopping_cart.png */ "./src/assets/shopping_cart.png");







function createMenu() {
    const content = document.querySelector('#content');
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(content);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuText = document.createElement("div");
    menuText.classList.add("menu-text");
    menuText.textContent = "Menu";
    
    const menuOptions = document.createElement("div");
    menuOptions.classList.add("menu-options");

    const menuCardOne = createCardOne();
    const menuCardTwo = createCardTwo();
    const menuCardThree = createCardThree();

    // appending children
    content.appendChild(menuContainer);
    menuContainer.appendChild(menuText);
    menuContainer.appendChild(menuOptions);
    menuOptions.appendChild(menuCardOne);
    menuOptions.appendChild(menuCardTwo);
    menuOptions.appendChild(menuCardThree);


    return content;
}

function createCardOne() {

    const menuCardOne = document.createElement("div");
    menuCardOne.classList.add("menu-card");

    // menu-card one's children
    const pizzaPictureOne = document.createElement("div");
    pizzaPictureOne.classList.add("pizza-picture");

    const pizzaNameOne = document.createElement("div");
    pizzaNameOne.classList.add("pizza-name");
    pizzaNameOne.textContent = "Mushroom-chicken"
    
    const pizzaDescriptionOne = document.createElement("div");
    pizzaDescriptionOne.classList.add("pizza-description");
    pizzaDescriptionOne.textContent = "Chicken breast, fresh mushrooms, canned cucumber, mozzarella cheese, mushroom sauce"
    
    const pizzaSizesOne = document.createElement("div");
    pizzaSizesOne.classList.add("pizza-sizes");
    
    const pizzaCartPriceOne = document.createElement("div");
    pizzaCartPriceOne.classList.add("pizza-cart-price");

    // menu-card one's grandchildren
    const pizzaImgOne = document.createElement("img");
    pizzaImgOne.src = _assets_pizza1_png__WEBPACK_IMPORTED_MODULE_1__;
    pizzaImgOne.alt = "mushroom-chicken pizza";

    const pizzaSizesButtonOne = document.createElement("button");
    pizzaSizesButtonOne.textContent = "25 cm"

    const pizzaSizesButtonTwo = document.createElement("button");
    pizzaSizesButtonTwo.textContent = "30 cm"

    const pizzaSizesButtonThree = document.createElement("button");
    pizzaSizesButtonThree.textContent = "35 cm"

    const cartIconButton = document.createElement("button");
    cartIconButton.classList.add("cart-icon")
    const cartIcon = document.createElement("img");
    cartIcon.src = _assets_shopping_cart_png__WEBPACK_IMPORTED_MODULE_4__;
    cartIcon.alt = "shopping cart icon";

    const price = document.createElement("div");
    price.textContent = "$ 19.80"

    // menu-card one's children
    menuCardOne.appendChild(pizzaPictureOne);
    menuCardOne.appendChild(pizzaNameOne);
    menuCardOne.appendChild(pizzaDescriptionOne);
    menuCardOne.appendChild(pizzaSizesOne);
    menuCardOne.appendChild(pizzaCartPriceOne);

    // menu-card one's grandchildren
    pizzaPictureOne.appendChild(pizzaImgOne);
    pizzaSizesOne.appendChild(pizzaSizesButtonOne);
    pizzaSizesOne.appendChild(pizzaSizesButtonTwo);
    pizzaSizesOne.appendChild(pizzaSizesButtonThree);
    pizzaCartPriceOne.appendChild(cartIconButton);
    cartIconButton.appendChild(cartIcon);
    pizzaCartPriceOne.appendChild(price);

    cartIconButton.addEventListener("click", () => {
        alert("This is a fake website")
    })

    return menuCardOne;
}


function createCardTwo() {

    const menuCardTwo = document.createElement("div");
    menuCardTwo.classList.add("menu-card");

    // menu-card two's children
    const pizzaPictureTwo = document.createElement("div");
    pizzaPictureTwo.classList.add("pizza-picture");

    const pizzaNameTwo = document.createElement("div");
    pizzaNameTwo.classList.add("pizza-name");
    pizzaNameTwo.textContent = "Pepperoni"
    
    const pizzaDescriptionTwo = document.createElement("div");
    pizzaDescriptionTwo.classList.add("pizza-description");
    pizzaDescriptionTwo.textContent = "Princi pepperoni made of beef, mozzarella cheese, salt, spices and olives on the top"
    
    const pizzaSizesTwo = document.createElement("div");
    pizzaSizesTwo.classList.add("pizza-sizes");
    
    const pizzaCartPriceTwo = document.createElement("div");
    pizzaCartPriceTwo.classList.add("pizza-cart-price");

    // menu-card two's grandchildren
    const pizzaImgTwo = document.createElement("img");
    pizzaImgTwo.src = _assets_pizza2_png__WEBPACK_IMPORTED_MODULE_2__;
    pizzaImgTwo.alt = "pepperoni pizza";

    const pizzaSizesButtonOne = document.createElement("button");
    pizzaSizesButtonOne.textContent = "25 cm"

    const pizzaSizesButtonTwo = document.createElement("button");
    pizzaSizesButtonTwo.textContent = "30 cm"

    const pizzaSizesButtonThree = document.createElement("button");
    pizzaSizesButtonThree.textContent = "35 cm"

    const cartIconButton = document.createElement("button");
    cartIconButton.classList.add("cart-icon")
    const cartIcon = document.createElement("img");
    cartIcon.src = _assets_shopping_cart_png__WEBPACK_IMPORTED_MODULE_4__;
    cartIcon.alt = "shopping cart icon";

    const price = document.createElement("div");
    price.textContent = "$ 16.75"

    // menu-card one's children
    menuCardTwo.appendChild(pizzaPictureTwo);
    menuCardTwo.appendChild(pizzaNameTwo);
    menuCardTwo.appendChild(pizzaDescriptionTwo);
    menuCardTwo.appendChild(pizzaSizesTwo);
    menuCardTwo.appendChild(pizzaCartPriceTwo);

    // menu-card one's grandchildren
    pizzaPictureTwo.appendChild(pizzaImgTwo);
    pizzaSizesTwo.appendChild(pizzaSizesButtonOne);
    pizzaSizesTwo.appendChild(pizzaSizesButtonTwo);
    pizzaSizesTwo.appendChild(pizzaSizesButtonThree);
    pizzaCartPriceTwo.appendChild(cartIconButton);
    cartIconButton.appendChild(cartIcon);
    pizzaCartPriceTwo.appendChild(price);

    cartIconButton.addEventListener("click", () => {
        alert("This is a fake website")
    })

    return menuCardTwo;
}


function createCardThree() {

    const menuCardThree = document.createElement("div");
    menuCardThree.classList.add("menu-card");

    // menu-card two's children
    const pizzaPictureThree = document.createElement("div");
    pizzaPictureThree.classList.add("pizza-picture");

    const pizzaNameThree = document.createElement("div");
    pizzaNameThree.classList.add("pizza-name");
    pizzaNameThree.textContent = "Filet Special"
    
    const pizzaDescriptionThree = document.createElement("div");
    pizzaDescriptionThree.classList.add("pizza-description");
    pizzaDescriptionThree.textContent = "Filet mignon, tomato sauce, shredded corned beef, Catupiry, mozzarela cheese, purple onion"
    
    const pizzaSizesThree = document.createElement("div");
    pizzaSizesThree.classList.add("pizza-sizes");
    
    const pizzaCartPriceThree = document.createElement("div");
    pizzaCartPriceThree.classList.add("pizza-cart-price");

    // menu-card two's grandchildren
    const pizzaImgThree = document.createElement("img");
    pizzaImgThree.src = _assets_pizza3_png__WEBPACK_IMPORTED_MODULE_3__;
    pizzaImgThree.alt = "filet special pizza";

    const pizzaSizesButtonOne = document.createElement("button");
    pizzaSizesButtonOne.textContent = "25 cm"

    const pizzaSizesButtonTwo = document.createElement("button");
    pizzaSizesButtonTwo.textContent = "30 cm"

    const pizzaSizesButtonThree = document.createElement("button");
    pizzaSizesButtonThree.textContent = "35 cm"

    const cartIconButton = document.createElement("button");
    cartIconButton.classList.add("cart-icon")
    const cartIcon = document.createElement("img");
    cartIcon.src = _assets_shopping_cart_png__WEBPACK_IMPORTED_MODULE_4__;
    cartIcon.alt = "shopping cart icon";

    const price = document.createElement("div");
    price.textContent = "$ 22.50"

    // menu-card one's children
    menuCardThree.appendChild(pizzaPictureThree);
    menuCardThree.appendChild(pizzaNameThree);
    menuCardThree.appendChild(pizzaDescriptionThree);
    menuCardThree.appendChild(pizzaSizesThree);
    menuCardThree.appendChild(pizzaCartPriceThree);

    // menu-card one's grandchildren
    pizzaPictureThree.appendChild(pizzaImgThree);
    pizzaSizesThree.appendChild(pizzaSizesButtonOne);
    pizzaSizesThree.appendChild(pizzaSizesButtonTwo);
    pizzaSizesThree.appendChild(pizzaSizesButtonThree);
    pizzaCartPriceThree.appendChild(cartIconButton);
    cartIconButton.appendChild(cartIcon);
    pizzaCartPriceThree.appendChild(price);


    cartIconButton.addEventListener("click", () => {
        alert("This is a fake website")
    })

    return menuCardThree;
}

/***/ }),

/***/ "./src/assets/bgimg.jpg":
/*!******************************!*\
  !*** ./src/assets/bgimg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/bgimg.jpg";

/***/ }),

/***/ "./src/assets/pizza1.png":
/*!*******************************!*\
  !*** ./src/assets/pizza1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/pizza1.png";

/***/ }),

/***/ "./src/assets/pizza2.png":
/*!*******************************!*\
  !*** ./src/assets/pizza2.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/pizza2.png";

/***/ }),

/***/ "./src/assets/pizza3.png":
/*!*******************************!*\
  !*** ./src/assets/pizza3.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/pizza3.png";

/***/ }),

/***/ "./src/assets/shopping_cart.png":
/*!**************************************!*\
  !*** ./src/assets/shopping_cart.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/shopping_cart.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main6133a0c99e2fc21e2bb5.js.map