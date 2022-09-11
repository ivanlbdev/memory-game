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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _js_loads__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/loads */ \"./src/js/loads.js\");\n\n\n\n//# sourceURL=webpack://memory_game/./src/index.js?");

/***/ }),

/***/ "./src/js/loads.js":
/*!*************************!*\
  !*** ./src/js/loads.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _popUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUp */ \"./src/js/popUp.js\");\n\nconst popUpData = {\n  baseClass: 'pop-window',\n  innerElem: {\n    tag: 'iframe',\n    class: 'game-frame',\n    attributes: [{\n      name: 'src',\n      value: 'game.html'\n    }]\n  }\n};\nwindow.addEventListener('load', () => {\n  document.querySelector('.a-button-large__button').addEventListener('click', () => {\n    const pop = new _popUp__WEBPACK_IMPORTED_MODULE_0__.PopUp(popUpData);\n  });\n});\n\n//# sourceURL=webpack://memory_game/./src/js/loads.js?");

/***/ }),

/***/ "./src/js/popUp.js":
/*!*************************!*\
  !*** ./src/js/popUp.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PopUp\": () => (/* binding */ PopUp)\n/* harmony export */ });\nclass PopUp {\n  constructor(settings) {\n    this.baseClass = settings.baseClass;\n    this.innerTag = settings.innerElem?.tag || 'div';\n    this.innerTagClass = settings.innerElem?.class || '';\n    this.innerTagAtr = settings.innerElem?.attributes || [];\n    this.makePopUp();\n    this.closeEvent();\n  }\n\n  makePopUp() {\n    const container = document.createElement('div');\n    container.className = this.baseClass;\n    const content = document.createElement('div');\n    content.className = `${this.baseClass}__content`;\n    const closer = document.createElement('div');\n    closer.className = `${this.baseClass}__close`;\n    closer.innerHTML = '<svg class=\"a-cross\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#cross\" /></svg>';\n    const frame = document.createElement(this.innerTag);\n    frame.className = this.innerTagClass;\n    this.innerTagAtr.map(item => {\n      frame.setAttribute(item.name, item.value);\n    });\n    content.append(closer);\n    content.append(frame);\n    container.append(content);\n    document.body.append(container);\n  }\n\n  closeEvent() {\n    const block = document.querySelector(`.${this.baseClass}`);\n    const closer = block.querySelector(`.${this.baseClass}__close`);\n    closer.addEventListener('click', () => {\n      this.destroyPopUp();\n    });\n  }\n\n  destroyPopUp() {\n    document.querySelector(`.${this.baseClass}`).remove();\n  }\n\n}\n\n//# sourceURL=webpack://memory_game/./src/js/popUp.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://memory_game/./src/styles/index.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;