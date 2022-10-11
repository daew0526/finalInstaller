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

/***/ "./src/client/js/calculator.js":
/*!*************************************!*\
  !*** ./src/client/js/calculator.js ***!
  \*************************************/
/***/ (() => {

eval("var $steps = document.getElementById('steps');\nvar $display = document.getElementById('display');\nvar $area_btn = document.getElementById('area-btn');\nvar data = {\n  prev: '',\n  curr: '',\n  operator: undefined,\n  pressedResult: false\n};\n$area_btn.addEventListener('click', function (e) {\n  var target = e.target;\n\n  if (target.tagName !== 'BUTTON') {\n    return;\n  } //리셋\n\n\n  if (target.id == \"reset\") {\n    reset_data();\n    return;\n  } //숫자\n\n\n  if (target.classList.contains('num')) {\n    on_num(data.operator, target);\n  } //연산자\n\n\n  if (target.classList.contains('op')) {\n    on_ops(target);\n  } //=\n\n\n  if (target.id == 'btn_result') {\n    show_result();\n  }\n\n  target.blur();\n});\n/*숫자버튼*/\n\nfunction on_num(bool, target) {\n  var val = target.dataset.val;\n  var prevOrcurr = bool ? 'curr' : 'prev';\n\n  if (val == \"-1\") {\n    data[prevOrcurr] = String(Number(data[prevOrcurr]) * -1);\n  } else {\n    data[prevOrcurr] += val;\n  }\n\n  $display.textContent = data[prevOrcurr];\n}\n/*연산자*/\n\n\nfunction on_ops(target) {\n  $steps.classList.remove('off');\n  var val_op = target.dataset.val;\n  data.operator = val_op;\n\n  if (data.prev == undefined) {\n    return;\n  }\n\n  if (!data.pressedResult && data.curr) {\n    show_result();\n  }\n\n  show_middleStep();\n  data.curr = '';\n  data.pressedResult = false;\n}\n/*=*/\n\n\nfunction show_result() {\n  if (data.prev == undefined || data.curr == undefined || !data.operator) {\n    return;\n  }\n\n  data.pressedResult = true;\n  show_finalStep();\n  data.prev = caculSwitch();\n  $display.textContent = data.prev;\n} //show_result\n\n\nfunction caculSwitch() {\n  var prev = data.prev,\n      curr = data.curr,\n      operator = data.operator;\n\n  switch (operator) {\n    case \"+\":\n      return Number(prev) + Number(curr);\n\n    case \"-\":\n      return Number(prev) - Number(curr);\n\n    case \"*\":\n      return Number(prev) * Number(curr);\n\n    case \"/\":\n      return Number(prev) / Number(curr);\n  }\n}\n\nfunction operator_to_string() {\n  var operator = data.operator;\n\n  switch (operator) {\n    case \"+\":\n      return \"+\";\n\n    case \"-\":\n      return \"-\";\n\n    case \"*\":\n      return \"×\";\n\n    case \"/\":\n      return \"÷\";\n  }\n}\n\nfunction show_middleStep() {\n  var step_str = \"\".concat(data.prev, \" \").concat(operator_to_string());\n  $steps.textContent = step_str;\n}\n\nfunction show_finalStep() {\n  var cacul_str = \"\".concat(data.prev, \" \").concat(operator_to_string(), \" \").concat(data.curr);\n  $steps.textContent = \"\".concat(cacul_str, \" =\");\n}\n/*리셋*/\n\n\nfunction reset_data() {\n  data.prev = '';\n  data.curr = '';\n  $steps.textContent = '&nbsp';\n  $steps.classList.add('off');\n  $display.textContent = '0';\n  data.operator = undefined;\n  data.pressedResult = true;\n}\n\n//# sourceURL=webpack://installer/./src/client/js/calculator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/calculator.js"]();
/******/ 	
/******/ })()
;