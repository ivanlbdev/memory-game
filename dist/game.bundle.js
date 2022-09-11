/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_game_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/game.scss */ \"./src/styles/game.scss\");\n/* harmony import */ var _js_gameMemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/gameMemory */ \"./src/js/gameMemory.js\");\n\n\nlet game;\nconst gameSettings = {\n  listImages: ['image_1', 'image_2', 'image_3', 'image_4', 'image_5', 'image_6', 'image_7', 'image_8']\n};\nwindow.addEventListener('load', () => {\n  game = new _js_gameMemory__WEBPACK_IMPORTED_MODULE_1__.GameMemory(gameSettings);\n});\nwindow.addEventListener('resize', () => {\n  game.resizeBlocks();\n});\n\n//# sourceURL=webpack://memory_game/./src/game.js?");

/***/ }),

/***/ "./src/js/gameMemory.js":
/*!******************************!*\
  !*** ./src/js/gameMemory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameMemory\": () => (/* binding */ GameMemory)\n/* harmony export */ });\nclass GameMemory {\n  #currentChoice = [];\n  #findValues = [];\n  #lock = 1;\n  luckClick = 0;\n  badClick = 0;\n\n  constructor(settings) {\n    this.countItemsInRow = settings.countItemsInRow || 4;\n    this.marginBlocks = settings.marginBlocks || 10;\n    this.baseClass = settings.baseClass || 'game';\n    this.classItem = `${this.baseClass}__item` || 'game__item';\n    this.frontClass = `${this.baseClass}__front` || 'game__front';\n    this.backClass = `${this.baseClass}__back` || 'game__back';\n    this.winClass = `${this.baseClass}__win` || 'game__win';\n    this.values = this.#shakeArrayAndMulti(settings.listImages) || [];\n    this.blockGame = document.querySelector(`.${this.baseClass}__container`);\n    this.parentNodeGame = document.querySelector(`.${this.baseClass}`);\n    this.headerGame = document.querySelector(`.${this.baseClass}__header`) || 0;\n    this.#makeGame();\n    this.nodesItems = this.blockGame.querySelectorAll(`.${this.classItem}`);\n    this.#clickHandler();\n  }\n\n  #shakeArrayAndMulti(arr) {\n    return [...arr, ...arr].sort(() => Math.random() - 0.5);\n  }\n\n  #checkSize() {\n    const workWidth = this.parentNodeGame.offsetWidth;\n    const workHeight = this.parentNodeGame.offsetHeight - (this.headerGame?.offsetHeight || 0);\n    const base = workHeight > workWidth ? workWidth : workHeight;\n    const result = Math.floor(base / this.countItemsInRow - this.marginBlocks * (this.countItemsInRow - 1));\n    return {\n      card: result,\n      container: result * this.countItemsInRow + this.countItemsInRow * this.marginBlocks\n    };\n  }\n\n  #makeElem(element, className = '', inner = [], nodes = [], style = []) {\n    const elem = document.createElement(element);\n    className !== '' ? elem.className = className : 0;\n    let content = '';\n    inner.map(item => content += item);\n    elem.innerHTML = inner;\n    nodes.map(item => elem.append(item));\n    return elem;\n  }\n\n  #makeGame() {\n    const sizes = this.#checkSize();\n    const itemSize = sizes.card;\n    this.blockGame.style.width = `${sizes.container}px`;\n    this.values.map(item => {\n      const backButtonItem = this.#makeElem('div', this.backClass, [`<img src=\"./images/${item}.jpg\">`]);\n      const frontButtonItem = this.#makeElem('div', this.frontClass, [`<svg class=\"a-logo\" width=\"${Math.floor(itemSize * 0.6)}px\" height=\"${Math.floor(itemSize * 0.2)}px\"> <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#logo\" /> </svg> <svg class=\"a-logo-quest\" height=\"${Math.floor(itemSize * 0.4)}px\" width=\"${Math.floor(itemSize * 0.1)}px\"> <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#logo-quest\" /> </svg>`]);\n      const buttonItem = this.#makeElem('div', this.classItem, [], [frontButtonItem, backButtonItem]);\n      buttonItem.style.height = `${itemSize}px`;\n      buttonItem.style.width = `${itemSize}px`;\n      buttonItem.setAttribute('data-value', item);\n      this.blockGame.append(buttonItem);\n      setTimeout(() => {\n        this.#flipCard(1, buttonItem);\n      }, 700);\n      setTimeout(() => {\n        this.#flipCard(0, buttonItem);\n        this.#lock = 0;\n      }, 4500);\n    });\n  }\n\n  resizeBlocks() {\n    const sizes = this.#checkSize();\n    const itemSize = sizes.card;\n    this.blockGame.style.width = `${sizes.container}px`;\n\n    for (let item of this.nodesItems) {\n      item.style.height = `${itemSize}px`;\n      item.style.width = `${itemSize}px`;\n      item.querySelector('.a-logo').setAttribute('width', `${Math.floor(itemSize * 0.6)}px`);\n      item.querySelector('.a-logo').setAttribute('height', `${Math.floor(itemSize * 0.2)}px`);\n      item.querySelector('.a-logo-quest').setAttribute('width', `${Math.floor(itemSize * 0.1)}px`);\n      item.querySelector('.a-logo-quest').setAttribute('height', `${Math.floor(itemSize * 0.4)}px`);\n    }\n  }\n\n  #clickHandler() {\n    for (let node of this.nodesItems) {\n      node.addEventListener('click', event => {\n        this.#clickElem(event.currentTarget);\n      });\n    }\n  }\n\n  #clickElem(elem) {\n    !this.#lock && this.#openItem(elem);\n  }\n\n  #flipCard(isOpen, node) {\n    node.classList.toggle('a-card-animate');\n    setTimeout(() => {\n      isOpen ? node.classList.add(`${this.classItem}-open`) : node.classList.remove(`${this.classItem}-open`);\n    }, 100);\n  }\n\n  #openItem(elem) {\n    if (!elem.classList.contains(`${this.classItem}-open`)) {\n      const value = elem.getAttribute('data-value');\n      this.#flipCard(1, elem);\n      this.#currentChoice.push(value);\n      this.#currentChoice.length === 2 ? this.#checkCurrentValues() : 0;\n    }\n  }\n\n  #closeItems() {\n    for (let node of this.nodesItems) {\n      const value = node.getAttribute('data-value');\n      !this.#findValues.includes(value) && node.classList.contains(`${this.classItem}-open`) ? this.#flipCard(0, node) : 0;\n    }\n  }\n\n  #checkCurrentValues() {\n    this.#currentChoice[0] === this.#currentChoice[1] && !this.#findValues.includes(this.#currentChoice[0]) ? this.#isWinAndPush(this.#currentChoice[0]) : this.#lockItems();\n    this.#currentChoice = [];\n  }\n\n  #lockItems() {\n    this.badClick += 1;\n    this.#lock = 1;\n    setTimeout(() => {\n      this.#closeItems();\n      this.#lock = 0;\n    }, 1000);\n  }\n\n  #isWinAndPush(value) {\n    this.#findValues.push(value);\n    this.luckClick += 1;\n\n    if (this.#findValues.length === 8) {\n      console.log({\n        'Удачные попытки': this.luckClick,\n        'Неудачные попытки': this.badClick\n      });\n    }\n\n    this.#findValues.length === 8 ? this.#renderWin() : 0;\n  }\n\n  #renderWin() {\n    const header = this.#makeElem('p', `${this.winClass}-big`, ['Ура! Ты выиграл']);\n    const image = this.#makeElem('img');\n    image.setAttribute('src', './images/win.png');\n    const textHref = this.#makeElem('a', '', ['Скачать стикерпак']);\n    textHref.setAttribute('href', '#');\n    const container = this.#makeElem('div', `${this.winClass}`, [], [header, image, textHref]);\n    setTimeout(() => {\n      this.parentNodeGame.innerHTML = '';\n      this.parentNodeGame.append(container);\n    }, 1000);\n    document.body.style.overflow = 'hidden';\n  }\n\n}\n\n//# sourceURL=webpack://memory_game/./src/js/gameMemory.js?");

/***/ }),

/***/ "./src/styles/game.scss":
/*!******************************!*\
  !*** ./src/styles/game.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://memory_game/./src/styles/game.scss?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game.js");
/******/ 	
/******/ })()
;