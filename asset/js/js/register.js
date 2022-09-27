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

/***/ "./src/client/js/register.js":
/*!***********************************!*\
  !*** ./src/client/js/register.js ***!
  \***********************************/
/***/ (() => {

eval("const installerContainer = document.querySelector(\".installer\");\nconst likeBtn = document.querySelector(\".installer__like\");\nconst CLICKED_CLASS = \"clicked\";\nlet clicked = false;\n\nconst handleLikeBtnClick = async () => {\n  const id = installerContainer.dataset.installerId;\n  const userId = likeBtn.dataset.userId;\n  const responsive = await fetch(`/api/installer/${id}/like`, {\n    method: \"PATCH\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      userId,\n      clicked\n    })\n  });\n\n  if (!clicked) {\n    if (responsive.status === 201) {\n      likeBtn.classList.add(CLICKED_CLASS);\n      clicked = true;\n    }\n  } else {\n    if (responsive.status === 404) {\n      likeBtn.classList.remove(CLICKED_CLASS);\n      clicked = false;\n    }\n  }\n};\n\nfunction init() {\n  if (installerContainer) {\n    const id = installerContainer.dataset.installerId;\n    fetch(`/api/installer/${id}/view`, {\n      method: \"PATCH\"\n    });\n  }\n\n  if (likeBtn) {\n    likeBtn.addEventListener(\"click\", handleLikeBtnClick);\n  }\n}\n\ninit();\n\n//# sourceURL=webpack://installer/./src/client/js/register.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/register.js"]();
/******/ 	
/******/ })()
;