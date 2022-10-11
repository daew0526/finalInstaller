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

/***/ "./src/client/js/updatePaint.js":
/*!**************************************!*\
  !*** ./src/client/js/updatePaint.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CirclePaint\": () => (/* binding */ CirclePaint),\n/* harmony export */   \"FloorPaint\": () => (/* binding */ FloorPaint),\n/* harmony export */   \"StraightPaint\": () => (/* binding */ StraightPaint),\n/* harmony export */   \"imgPaint\": () => (/* binding */ imgPaint),\n/* harmony export */   \"squarePaint\": () => (/* binding */ squarePaint),\n/* harmony export */   \"updatePaint\": () => (/* binding */ updatePaint)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar updatePaint = /*#__PURE__*/_createClass(function updatePaint(_id, sx, sy, ex, ey, color) {\n  _classCallCheck(this, updatePaint);\n\n  this.id = _id;\n  this.sx = sx;\n  this.sy = sy;\n  this.ex = ex;\n  this.ey = ey;\n  this.color = color;\n});\nvar squarePaint = /*#__PURE__*/function (_updatePaint) {\n  _inherits(squarePaint, _updatePaint);\n\n  var _super = _createSuper(squarePaint);\n\n  function squarePaint(_id, sx, sy, ex, ey, color, border, name) {\n    var _this;\n\n    _classCallCheck(this, squarePaint);\n\n    _this = _super.call(this, _id, sx, sy, ex, ey, color);\n    _this.border = border;\n    _this.name = name;\n    return _this;\n  }\n\n  return _createClass(squarePaint);\n}(updatePaint);\nvar imgPaint = /*#__PURE__*/function (_updatePaint2) {\n  _inherits(imgPaint, _updatePaint2);\n\n  var _super2 = _createSuper(imgPaint);\n\n  function imgPaint(_id, sx, sy, ex, ey, name) {\n    var _this2;\n\n    _classCallCheck(this, imgPaint);\n\n    _this2 = _super2.call(this, _id, sx, sy, ex, ey, color);\n    _this2.name = name;\n    _this2.list = list;\n    return _this2;\n  }\n\n  return _createClass(imgPaint);\n}(updatePaint);\nvar CirclePaint = /*#__PURE__*/function (_updatePaint3) {\n  _inherits(CirclePaint, _updatePaint3);\n\n  var _super3 = _createSuper(CirclePaint);\n\n  function CirclePaint(_id, sx, sy, ex, ey, color, border, name) {\n    var _this3;\n\n    _classCallCheck(this, CirclePaint);\n\n    _this3 = _super3.call(this, _id, sx, sy, ex, ey, color);\n    _this3.border = border;\n    _this3.name = name;\n    return _this3;\n  }\n\n  return _createClass(CirclePaint);\n}(updatePaint);\nvar StraightPaint = /*#__PURE__*/function (_updatePaint4) {\n  _inherits(StraightPaint, _updatePaint4);\n\n  var _super4 = _createSuper(StraightPaint);\n\n  function StraightPaint(_id, sx, sy, ex, ey, color, border, name) {\n    var _this4;\n\n    _classCallCheck(this, StraightPaint);\n\n    _this4 = _super4.call(this, _id, sx, sy, ex, ey, color);\n    _this4.border = border;\n    _this4.name = name;\n    return _this4;\n  }\n\n  return _createClass(StraightPaint);\n}(updatePaint);\nvar FloorPaint = /*#__PURE__*/function (_updatePaint5) {\n  _inherits(FloorPaint, _updatePaint5);\n\n  var _super5 = _createSuper(FloorPaint);\n\n  function FloorPaint(_id, sx, sy, ex, ey, color, border, name) {\n    var _this5;\n\n    _classCallCheck(this, FloorPaint);\n\n    _this5 = _super5.call(this, _id, sx, sy, ex, ey, color);\n    _this5.border = border;\n    _this5.name = name;\n    return _this5;\n  }\n\n  return _createClass(FloorPaint);\n}(updatePaint);\n\n//# sourceURL=webpack://installer/./src/client/js/updatePaint.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/updatePaint.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;