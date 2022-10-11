/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/home.js":
/*!*******************************!*\
  !*** ./src/client/js/home.js ***!
  \*******************************/
/***/ (() => {

eval("var outer = document.querySelector('.outer');\nvar innerList = document.querySelector('.inner-list');\nvar inners = document.querySelectorAll('.inner');\nvar currentIndex = 0; // 현재 슬라이드 화면 인덱스\n\ninners.forEach(function (inner) {\n  inner.style.width = \"\".concat(outer.clientWidth, \"px\"); // inner의 width를 모두 outer의 width로 만들기\n});\ninnerList.style.width = \"\".concat(outer.clientWidth * inners.length, \"px\"); // innerList의 width를 inner의 width * inner의 개수로 만들기\n\nvar buttonLeft = document.querySelector('.button-left');\nvar buttonRight = document.querySelector('.button-right');\nbuttonLeft.addEventListener('click', function () {\n  currentIndex--;\n  currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경\n\n  innerList.style.marginLeft = \"-\".concat(outer.clientWidth * currentIndex, \"px\"); // index만큼 margin을 주어 옆으로 밀기\n\n  clearInterval(interval); // 기존 동작되던 interval 제거\n\n  interval = getInterval(); // 새로운 interval 등록\n});\nbuttonRight.addEventListener('click', function () {\n  currentIndex++;\n  currentIndex = currentIndex >= inners.length ? inners.length - 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경\n\n  innerList.style.marginLeft = \"-\".concat(outer.clientWidth * currentIndex, \"px\"); // index만큼 margin을 주어 옆으로 밀기\n\n  clearInterval(interval); // 기존 동작되던 interval 제거\n\n  interval = getInterval(); // 새로운 interval 등록\n});\n\nfunction getInterval() {\n  return setInterval(function () {\n    currentIndex++;\n    currentIndex = currentIndex >= inners.length ? 0 : currentIndex;\n    innerList.style.marginLeft = \"-\".concat(outer.clientWidth * currentIndex, \"px\");\n  }, 2000);\n}\n\nvar interval = getInterval(); // interval 등록\n\n//# sourceURL=webpack://installer/./src/client/js/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/home.js"]();
/******/ 	
/******/ })()
;