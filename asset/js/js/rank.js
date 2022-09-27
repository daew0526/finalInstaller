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

/***/ "./src/client/js/rank.js":
/*!*******************************!*\
  !*** ./src/client/js/rank.js ***!
  \*******************************/
/***/ (() => {

eval("const selected = document.querySelector(\"#rank-select\");\nconst rankContainer = document.querySelector(\".rank_container\");\nconst fakeDocument = document.createDocumentFragment();\n\nfunction paintNotice(rank) {\n  rankContainer.innerText = \"\";\n\n  for (let i = 0; i < rank.length; i++) {\n    const li = document.createElement(\"li\");\n    const img = document.createElement(\"img\");\n    const title = document.createElement(\"a\");\n    const metaText = document.createElement(\"small\");\n    const hr = document.createElement(\"hr\");\n    img.src = `${rank[i].resulturl}`;\n    img.style.width = \"100px\";\n    title.href = `/installer/${rank[i]._id}`;\n    title.innerText = `\n    ${rank[i].title}\n    `;\n    metaText.innerText = `views : ${rank[i].meta.view}\n    like : ${rank[i].meta.like}\n    date : ${rank[i].createAt}`;\n    li.appendChild(img);\n    li.appendChild(title);\n    li.appendChild(metaText);\n    li.appendChild(hr);\n    fakeDocument.append(li);\n  }\n\n  rankContainer.append(fakeDocument);\n}\n\nasync function handleSelected() {\n  const value = selected.options[selected.selectedIndex].value;\n  const response = await fetch(`/api/installer/rank/filter`, {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      value\n    })\n  });\n\n  if (response.status === 301) {\n    const rankContainer = await response.json();\n    paintNotice(rankContainer.rank);\n  } else {\n    return;\n  }\n}\n\nfunction init() {\n  selected.addEventListener(\"input\", handleSelected);\n}\n\ninit();\n\n//# sourceURL=webpack://installer/./src/client/js/rank.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/rank.js"]();
/******/ 	
/******/ })()
;