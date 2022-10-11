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

/***/ "./src/client/js/paint.js":
/*!********************************!*\
  !*** ./src/client/js/paint.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"circle\": () => (/* binding */ circle),\n/* harmony export */   \"floor\": () => (/* binding */ floor),\n/* harmony export */   \"img\": () => (/* binding */ img),\n/* harmony export */   \"square\": () => (/* binding */ square),\n/* harmony export */   \"straight\": () => (/* binding */ straight)\n/* harmony export */ });\n/* harmony import */ var _updatePaint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatePaint */ \"./src/client/js/updatePaint.js\");\n\nvar square = [];\nvar img = [];\nvar circle = [];\nvar straight = [];\nvar floor = [];\nvar paint;\nvar drawContainer = document.querySelector(\".drawingless\");\nvar paints = drawContainer.dataset.paints; //캔버스\n\nvar ctx = document.getElementById(\"canvas\").getContext(\"2d\");\nvar ctx3 = document.getElementById(\"floor1\").getContext(\"2d\");\nvar ctx4 = document.getElementById(\"floor2\").getContext(\"2d\");\nvar ctx5 = document.getElementById(\"img1\").getContext(\"2d\"); //바닥\n\nfunction drawFloor() {\n  var i, r;\n\n  for (i = floor.length - 1; i > -1; i--) {\n    r = floor[i];\n    ctx3.lineWidth = r.border;\n    ctx4.lineWidth = r.border;\n\n    if (r.color == 1) {\n      draw1();\n      ctx3.fillRect(r.sx, r.sy, r.ex - r.sx, r.ey - r.sy);\n      ctx3.strokeRect(r.sx, r.sy, r.ex - r.sx, r.ey - r.sy);\n    } else if (r.color == 2) {\n      draw2();\n      ctx4.fillRect(r.sx, r.sy, r.ex - r.sx, r.ey - r.sy);\n      ctx4.strokeRect(r.sx, r.sy, r.ex - r.sx, r.ey - r.sy);\n    }\n  }\n} //사각형\n\n\nfunction drawSquare() {\n  var i, r;\n\n  for (i = square.length - 1; i > -1; i--) {\n    r = square[i];\n    ctx.lineWidth = r.border;\n    ctx.fillStyle = r.color;\n    ctx.fillRect(r.sx, r.sy, r.ex - r.sx, r.ey - r.sy);\n    ctx.strokeRect(r.sx, r.sy, r.ex - r.sx, r.ey - r.sy);\n  }\n} //원\n\n\nfunction drawCircle() {\n  var i, r;\n\n  for (i = circle.length - 1; i > -1; i--) {\n    r = circle[i];\n    ctx.lineWidth = r.border;\n    ctx.beginPath();\n\n    if (r.ex >= r.sx) {\n      ctx.arc(r.sx, r.sy, r.ex - r.sx, 0, 360);\n    } else if (r.ex < r.sx) {\n      ctx.arc(r.sx, r.sy, r.sx - r.ex, 0, 360);\n    }\n\n    ctx.fillStyle = r.color;\n    ctx.fill();\n    ctx.stroke();\n  }\n} //직선\n\n\nfunction drawStraight() {\n  var i, r;\n\n  for (i = straight.length - 1; i > -1; i--) {\n    r = straight[i];\n    ctx.lineWidth = r.border;\n    ctx.beginPath();\n    ctx.moveTo(r.sx, r.sy);\n    ctx.lineTo(r.ex, r.ey);\n    ctx.stroke();\n  }\n} //이미지\n\n\nfunction drawImg() {\n  var i, r;\n\n  for (i = img.length - 1; i > -1; i--) {\n    r = img[i];\n    ctx5.drawImage(r.img, r.sx, r.sy);\n  }\n}\n\nfunction loadPaint() {\n  var paintArr = JSON.parse(paints);\n  paintArr.forEach(function (el) {\n    switch (el.name) {\n      case \"square\":\n        paint = new _updatePaint__WEBPACK_IMPORTED_MODULE_0__.squarePaint(el._id, el.sxPos, el.syPos, el.exPos, el.eyPos, el.color, el.border, el.name);\n        square.push(paint);\n        break;\n\n      case \"circle\":\n        paint = new _updatePaint__WEBPACK_IMPORTED_MODULE_0__.CirclePaint(el._id, el.sxPos, el.syPos, el.exPos, el.eyPos, el.color, el.border, el.name);\n        circle.push(paint);\n        break;\n\n      case \"straight\":\n        paint = new _updatePaint__WEBPACK_IMPORTED_MODULE_0__.StraightPaint(el._id, el.sxPos, el.syPos, el.exPos, el.eyPos, el.color, el.border, el.name);\n        straight.push(paint);\n        break;\n\n      case \"image\":\n        paint = new _updatePaint__WEBPACK_IMPORTED_MODULE_0__.imgPaint(el._id, el.sxPos, el.syPos, el.exPos, el.eyPos, el.color, el.name, el.list);\n        img.push(paint);\n        break;\n\n      case \"floor\":\n        paint = new _updatePaint__WEBPACK_IMPORTED_MODULE_0__.FloorPaint(el._id, el.sxPos, el.syPos, el.exPos, el.eyPos, el.color, el.border, el.name);\n        floor.push(paint);\n        break;\n    }\n  });\n}\n\nfunction init() {\n  if (paints) {\n    loadPaint();\n    drawFloor();\n    drawSquare();\n    drawCircle();\n    drawStraight();\n    drawImg();\n  }\n}\n\ninit();\n\n//# sourceURL=webpack://installer/./src/client/js/paint.js?");

/***/ }),

/***/ "./src/client/js/updatePaint.js":
/*!**************************************!*\
  !*** ./src/client/js/updatePaint.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CirclePaint\": () => (/* binding */ CirclePaint),\n/* harmony export */   \"FloorPaint\": () => (/* binding */ FloorPaint),\n/* harmony export */   \"StraightPaint\": () => (/* binding */ StraightPaint),\n/* harmony export */   \"imgPaint\": () => (/* binding */ imgPaint),\n/* harmony export */   \"squarePaint\": () => (/* binding */ squarePaint),\n/* harmony export */   \"updatePaint\": () => (/* binding */ updatePaint)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar updatePaint = /*#__PURE__*/_createClass(function updatePaint(_id, sx, sy, ex, ey, color) {\n  _classCallCheck(this, updatePaint);\n\n  this.id = _id;\n  this.sx = sx;\n  this.sy = sy;\n  this.ex = ex;\n  this.ey = ey;\n  this.color = color;\n});\nvar squarePaint = /*#__PURE__*/function (_updatePaint) {\n  _inherits(squarePaint, _updatePaint);\n\n  var _super = _createSuper(squarePaint);\n\n  function squarePaint(_id, sx, sy, ex, ey, color, border, name) {\n    var _this;\n\n    _classCallCheck(this, squarePaint);\n\n    _this = _super.call(this, _id, sx, sy, ex, ey, color);\n    _this.border = border;\n    _this.name = name;\n    return _this;\n  }\n\n  return _createClass(squarePaint);\n}(updatePaint);\nvar imgPaint = /*#__PURE__*/function (_updatePaint2) {\n  _inherits(imgPaint, _updatePaint2);\n\n  var _super2 = _createSuper(imgPaint);\n\n  function imgPaint(_id, sx, sy, ex, ey, name) {\n    var _this2;\n\n    _classCallCheck(this, imgPaint);\n\n    _this2 = _super2.call(this, _id, sx, sy, ex, ey, color);\n    _this2.name = name;\n    _this2.list = list;\n    return _this2;\n  }\n\n  return _createClass(imgPaint);\n}(updatePaint);\nvar CirclePaint = /*#__PURE__*/function (_updatePaint3) {\n  _inherits(CirclePaint, _updatePaint3);\n\n  var _super3 = _createSuper(CirclePaint);\n\n  function CirclePaint(_id, sx, sy, ex, ey, color, border, name) {\n    var _this3;\n\n    _classCallCheck(this, CirclePaint);\n\n    _this3 = _super3.call(this, _id, sx, sy, ex, ey, color);\n    _this3.border = border;\n    _this3.name = name;\n    return _this3;\n  }\n\n  return _createClass(CirclePaint);\n}(updatePaint);\nvar StraightPaint = /*#__PURE__*/function (_updatePaint4) {\n  _inherits(StraightPaint, _updatePaint4);\n\n  var _super4 = _createSuper(StraightPaint);\n\n  function StraightPaint(_id, sx, sy, ex, ey, color, border, name) {\n    var _this4;\n\n    _classCallCheck(this, StraightPaint);\n\n    _this4 = _super4.call(this, _id, sx, sy, ex, ey, color);\n    _this4.border = border;\n    _this4.name = name;\n    return _this4;\n  }\n\n  return _createClass(StraightPaint);\n}(updatePaint);\nvar FloorPaint = /*#__PURE__*/function (_updatePaint5) {\n  _inherits(FloorPaint, _updatePaint5);\n\n  var _super5 = _createSuper(FloorPaint);\n\n  function FloorPaint(_id, sx, sy, ex, ey, color, border, name) {\n    var _this5;\n\n    _classCallCheck(this, FloorPaint);\n\n    _this5 = _super5.call(this, _id, sx, sy, ex, ey, color);\n    _this5.border = border;\n    _this5.name = name;\n    return _this5;\n  }\n\n  return _createClass(FloorPaint);\n}(updatePaint);\n\n//# sourceURL=webpack://installer/./src/client/js/updatePaint.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/js/paint.js");
/******/ 	
/******/ })()
;