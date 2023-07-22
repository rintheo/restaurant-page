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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/ramenhero.png */ \"./src/images/ramenhero.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Slackside+One&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --color-first: #222831;\n  --color-first-hover: hsl(214, 18%, 15%);\n  --color-first-active: hsl(217, 18%, 14%);\n  --color-second: #393e46;\n  --color-second-light: hsl(217, 10%, 45%);\n  --color-second-lighter: hsl(217, 10%, 50%);\n  --color-third: #f96d00;\n  --color-third-hover: hsl(26, 100%, 45%);\n  --color-third-active: hsl(26, 100%, 40%);\n  --color-fourth: #f2f2f2;\n  --height-header: 6rem;\n}\n\n*, *::after, *::before {\n  font-family: 'Kalam', cursive;\n  box-sizing: border-box;\n}\n\nhtml, body,\nh1, h2, h3, h4, h5, h6, \np, ul, ol, li, button {\n  margin: 0;\n  padding: 0;\n}\n\nul, ol, li {\n  list-style: none;\n} \n\na {\n  text-decoration: none;\n}\n\nbody {\n  overflow-y: scroll;\n}\n\n.max-width {\n  width: 100%;\n  max-width: 1200px;\n}\n\n.site-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.header {\n  position: fixed;\n  top: 0;\n  height: var(--height-header);\n  width: 100%;\n  background-color: var(--color-first);\n  color: white;\n  display: flex;\n  justify-content: center;\n  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.25);\n  z-index: 1000;\n}\n\n.header > div {\n  display: flex;\n  align-items: center;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  margin-right: auto;\n}\n\n.logo h1 {\n  position: relative;\n  bottom: 0.75rem;\n  margin-left: 2rem;\n  font-family: 'Slackside One', cursive;\n  font-size: 4rem;\n}\n\n.logo img {\n  height: 4rem;\n  width: 4rem;\n}\n\n.nav ul {\n  display: flex;\n  align-items: center;\n}\n\nbutton {\n  padding: 0.5rem 1rem;\n  border: none;\n  font-size: 1.5rem;\n  font-weight: 700;\n  transition: background-color 0.1s;\n  color: white;\n}\n\n.nav-button {\n  height: var(--height-header);\n  background-color: var(--color-first);\n}\n\n.nav-button:hover {\n  background-color: var(--color-first-hover);\n}\n\n.nav-button:active {\n  background-color: var(--color-first-active);\n}\n\n.order-button {\n  margin: 0 2rem;\n  border-radius: 2rem;\n  background-color: var(--color-third);\n  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.25);\n}\n\n.order-button:hover {\n  background-color: var(--color-third-hover);\n}\n\n.order-button:active {\n  background-color: var(--color-third-active);\n}\n\n.hero {\n  height: calc(100vh - var(--height-header) - 20rem);\n  margin-top: var(--height-header);\n  background-color: var(--color-second);\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: no-repeat;\n  background-position: center;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.hero .container {\n  width: 50%;\n}\n\n.hero h2 {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n.hero p {\n  margin-top: 1rem;\n  font-size: 1.75rem;\n}\n\n.hero button {\n  margin-top: 3rem;\n  transform: scale(1.3);\n}\n\n.featured {\n  background-color: var(--color-fourth);\n}\n\n.featured ul {\n  padding: 2.5rem;\n  display: flex;\n  justify-content: center;\n  gap: 5rem;\n}\n\n.featured img {\n  height: 12.5rem;\n  width: 12.5rem;\n  object-fit: cover;\n  border-radius: 50%;\n  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.25);\n  transition: 0.2s;\n}\n\n.featured img:hover {\n  transform: scale(1.025);\n}\n\n.featured p {\n  font-size: 1.75rem;\n  text-align: center;\n}\n\n.menu-container {\n  margin-top: var(--height-header);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu {\n  margin: 3rem 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));\n  grid-template-rows: 2rem;\n  /* grid-auto-rows: 400px; */\n  gap: 3rem 2rem;\n  justify-content: center;\n}\n\n.menu h3 {\n  grid-column: 1 / -1;\n  text-align: center;\n  font-size: 3rem;\n}\n\n.card {\n  /* background-color: var(--color-second);\n  color: white; */\n  border-radius: 2rem;\n  outline: 1px solid var(--color-second);\n  box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.25);\n  overflow: hidden;\n  transition: 0.1s;\n}\n\n.card:hover {\n  transform: scale(1.01);\n}\n\n.card img {\n  height: 20rem;\n  width: 100%;\n  object-fit: cover;\n}\n\n.card p {\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.contact-container {\n  margin-top: var(--height-header);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.contact-container h2 {\n  width: 100%;\n  margin-bottom: 5rem;\n  padding: 2rem;\n  background-color: var(--color-second);\n  color: white;\n  font-size: 3rem;\n  text-align: center;\n\n}\n\n.contact-container p {\n  font-size: 1.25rem;\n}\n\n.contact-container .card {\n  margin-top: 3rem;\n  width: 100%;\n  max-width: 400px;\n}\n\n.contact-container .card h3 {\n  font-size: 2rem;\n}\n\n\n\n.footer {\n  margin-top: auto;\n  padding: 1rem;\n  background-color: var(--color-second);\n  text-align: center;\n  z-index: 2;\n}\n\n.footer svg {\n  height: 1.65rem;\n  fill: var(--color-second-lighter);\n  display: inline-block;\n  vertical-align: bottom;\n  transition: 0.15s;\n}\n\n.footer svg:hover {\n  fill: var(--color-second-light);\n}\n\n.footer span,\n.footer p {\n  color: var(--color-second-lighter);\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 0.85rem;\n  font-weight: 300;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageload.js */ \"./src/pageload.js\");\n\n\n\nconst navController = (() => {\n  const generateHomePage = () => {\n    _pageload_js__WEBPACK_IMPORTED_MODULE_1__.clearSiteContainer();\n    _pageload_js__WEBPACK_IMPORTED_MODULE_1__.header();\n    _pageload_js__WEBPACK_IMPORTED_MODULE_1__.home();\n    _pageload_js__WEBPACK_IMPORTED_MODULE_1__.footer();\n    generateNavButtonEventListeners();\n    window.scrollTo(0,0);\n  }  \n \n  const generateMenuPage = () => {\n    _pageload_js__WEBPACK_IMPORTED_MODULE_1__.clearSiteContainer();\n    _pageload_js__WEBPACK_IMPORTED_MODULE_1__.header();\n    _pageload_js__WEBPACK_IMPORTED_MODULE_1__.menu();\n    _pageload_js__WEBPACK_IMPORTED_MODULE_1__.footer();\n    generateNavButtonEventListeners();\n    window.scrollTo(0,0);\n  }  \n\n  const generateContactPage = () => {\n    _pageload_js__WEBPACK_IMPORTED_MODULE_1__.clearSiteContainer();\n    _pageload_js__WEBPACK_IMPORTED_MODULE_1__.header();\n    _pageload_js__WEBPACK_IMPORTED_MODULE_1__.contact();\n    _pageload_js__WEBPACK_IMPORTED_MODULE_1__.footer();\n    generateNavButtonEventListeners();\n    window.scrollTo(0,0);\n  }  \n\n  const generateNavButtonEventListeners = () => {\n    const buttonHome = document.getElementById('buttonHome');\n    const buttonMenu = document.getElementById('buttonMenu');\n    const buttonContact = document.getElementById('buttonContact');\n    buttonHome.addEventListener('click', generateHomePage);\n    buttonMenu.addEventListener('click', generateMenuPage);\n    buttonContact.addEventListener('click', generateContactPage);\n  }\n\n\n  // Initial page load\n  generateHomePage();   \n  generateNavButtonEventListeners();  \n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearSiteContainer: () => (/* binding */ clearSiteContainer),\n/* harmony export */   contact: () => (/* binding */ contact),\n/* harmony export */   footer: () => (/* binding */ footer),\n/* harmony export */   header: () => (/* binding */ header),\n/* harmony export */   home: () => (/* binding */ home),\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _images_narutoramenlogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/narutoramenlogo.png */ \"./src/images/narutoramenlogo.png\");\n/* harmony import */ var _images_ramen_tonkotsu_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/ramen-tonkotsu.jpeg */ \"./src/images/ramen-tonkotsu.jpeg\");\n/* harmony import */ var _images_ramen_shio_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/ramen-shio.jpeg */ \"./src/images/ramen-shio.jpeg\");\n/* harmony import */ var _images_ramen_shoyu_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/ramen-shoyu.jpeg */ \"./src/images/ramen-shoyu.jpeg\");\n/* harmony import */ var _images_ramen_miso_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/ramen-miso.jpeg */ \"./src/images/ramen-miso.jpeg\");\n/* harmony import */ var _images_side_gyoza_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/side-gyoza.jpeg */ \"./src/images/side-gyoza.jpeg\");\n/* harmony import */ var _images_side_karaage_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/side-karaage.jpg */ \"./src/images/side-karaage.jpg\");\n/* harmony import */ var _images_side_okonomiyaki_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/side-okonomiyaki.jpg */ \"./src/images/side-okonomiyaki.jpg\");\n/* harmony import */ var _images_side_takoyaki_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/side-takoyaki.jpg */ \"./src/images/side-takoyaki.jpg\");\n/* harmony import */ var _images_drinks_water_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/drinks-water.jpg */ \"./src/images/drinks-water.jpg\");\n/* harmony import */ var _images_drinks_soda_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/drinks-soda.jpg */ \"./src/images/drinks-soda.jpg\");\n/* harmony import */ var _images_drinks_beer_jpeg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/drinks-beer.jpeg */ \"./src/images/drinks-beer.jpeg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst siteContainer = document.querySelector('.site-container'); \n\nconst clearSiteContainer = () => {\n  while (siteContainer.firstChild) {\n    siteContainer.removeChild(siteContainer.firstChild);\n  }\n}\n\nconst header = () => {\n  const header = document.createElement('header');\n  header.classList.add('header');\n\n  const maxWidth = document.createElement('div');\n  maxWidth.classList.add('max-width');\n\n  const logo = document.createElement('div');\n  logo.classList.add('logo');\n\n  const h1 = document.createElement('h1');\n  h1.textContent = 'りんらめん';\n\n  const img = document.createElement('img');\n  img.src = _images_narutoramenlogo_png__WEBPACK_IMPORTED_MODULE_0__;\n  img.alt = 'Rin Ramen Logo';\n\n  const nav = document.createElement('nav');\n  nav.classList.add('nav');\n\n  const ul = document.createElement('ul');\n  const ulItems = ['Home', 'Menu', 'Contact', 'Order Now'];\n\n  for (let ulItem of ulItems) {\n    const li = document.createElement('li');\n\n    const button = document.createElement('button');\n    if (ulItem !== 'Order Now') {\n      button.classList.add('nav-button');\n      button.id = `button${ulItem}`;\n    }\n    else {\n      button.classList.add('order-button');\n    }\n    button.textContent = ulItem;\n\n    li.appendChild(button);\n    ul.appendChild(li);\n  }\n\n  logo.appendChild(h1);\n  logo.appendChild(img);\n  maxWidth.appendChild(logo);\n  nav.appendChild(ul);\n  maxWidth.appendChild(nav);\n  header.appendChild(maxWidth);\n  siteContainer.appendChild(header);\n}\n\nconst home = () => {\n  const main = document.createElement('main');\n\n  const hero = document.createElement('div');\n  hero.classList.add('hero');\n  \n  const maxWidth = document.createElement('div');\n  maxWidth.classList.add('max-width');\n\n  const container = document.createElement('div');\n  container.classList.add('container');\n\n  const h2 = document.createElement('h2');\n  h2.textContent = 'Feed your cravings';\n\n  const p = document.createElement('p');\n  p.textContent = \"With over 50 years of history, our ramen is something you'll always be coming back to.\";\n\n  const button = document.createElement('button');\n  button.classList.add('order-button');\n  button.textContent = 'Order Now';\n\n  const featured = document.createElement('div');\n  featured.classList.add('featured');\n\n  const ul = document.createElement('ul');\n  const ulItems = [\n    {src: _images_ramen_tonkotsu_jpeg__WEBPACK_IMPORTED_MODULE_1__, p: 'Tonkotsu'},\n    {src: _images_ramen_shio_jpeg__WEBPACK_IMPORTED_MODULE_2__, p: 'Shio'},\n    {src: _images_ramen_shoyu_jpeg__WEBPACK_IMPORTED_MODULE_3__, p: 'Shoyu'},\n    {src: _images_ramen_miso_jpeg__WEBPACK_IMPORTED_MODULE_4__, p: 'Miso'},\n  ];\n\n  for (let ulItem of ulItems) {\n    const li = document.createElement('li');\n    \n    const img = document.createElement('img');\n    img.src = ulItem.src;\n    img.alt = `${ulItem.p} Ramen`;\n\n    const p = document.createElement('p');\n    p.textContent = ulItem.p;\n  \n    li.appendChild(img);\n    li.appendChild(p);\n    ul.appendChild(li);\n  }\n\n  container.appendChild(h2);\n  container.appendChild(p);\n  container.appendChild(button);\n  maxWidth.appendChild(container);\n  hero.appendChild(maxWidth);\n  featured.appendChild(ul);\n  main.appendChild(hero);\n  main.appendChild(featured);\n  siteContainer.appendChild(main);\n}\n\nconst footer = () => {\n  const footer = document.createElement('footer');\n  footer.classList.add('footer');\n\n  const p = document.createElement('p');\n\n  const a = document.createElement('a');\n  a.setAttribute(\"href\", 'https://github.com/rintheo/');\n\n  const dummy = document.createElement('div');\n\n  const span = document.createElement('span');\n  const date = new Date().getFullYear();\n  span.textContent = ` © ${date} rintheo`;\n\n  a.appendChild(dummy);\n  p.appendChild(a);\n  p.appendChild(span);  \n  footer.appendChild(p);\n  siteContainer.appendChild(footer);\n\n  dummy.outerHTML = '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>GitHub</title><path d=\"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z\" /></svg>';\n}\n\nconst menu = () => {\n  const menuContainer = document.createElement('div');\n  menuContainer.classList.add('menu-container');\n\n  const maxWidth = document.createElement('div');\n  maxWidth.classList.add('max-width');\n\n  const menuItems = ['Ramen', 'Sides', 'Drinks'];\n  const ramenItems = [\n    {src: _images_ramen_tonkotsu_jpeg__WEBPACK_IMPORTED_MODULE_1__, p: 'Tonkotsu Ramen'},\n    {src: _images_ramen_shio_jpeg__WEBPACK_IMPORTED_MODULE_2__, p: 'Shio Ramen'},\n    {src: _images_ramen_shoyu_jpeg__WEBPACK_IMPORTED_MODULE_3__, p: 'Shoyu Ramen'},\n    {src: _images_ramen_miso_jpeg__WEBPACK_IMPORTED_MODULE_4__, p: 'Miso Ramen'},\n  ];\n  const sidesItems = [\n    {src: _images_side_gyoza_jpeg__WEBPACK_IMPORTED_MODULE_5__, p: 'Gyoza'},\n    {src: _images_side_karaage_jpg__WEBPACK_IMPORTED_MODULE_6__, p: 'Karaage'},\n    {src: _images_side_okonomiyaki_jpg__WEBPACK_IMPORTED_MODULE_7__, p: 'Okonomiyaki'},\n    {src: _images_side_takoyaki_jpg__WEBPACK_IMPORTED_MODULE_8__, p: 'Takoyaki'},\n  ];\n  const drinkItems = [\n    {src: _images_drinks_water_jpg__WEBPACK_IMPORTED_MODULE_9__, p: 'Bottled Water'},\n    {src: _images_drinks_soda_jpg__WEBPACK_IMPORTED_MODULE_10__, p: 'Canned Soda'},\n    {src: _images_drinks_beer_jpeg__WEBPACK_IMPORTED_MODULE_11__, p: 'Canned Beer'},\n  ];\n\n  for (let menuItem of menuItems) {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    const h3 = document.createElement('h3');\n    h3.textContent = menuItem;\n    menu.appendChild(h3);\n\n    let items;\n\n    if (menuItem === 'Ramen') {\n      items = ramenItems;\n    }\n    else if (menuItem === 'Sides') {\n      items = sidesItems;\n    }\n    else if (menuItem === 'Drinks') {\n      items = drinkItems;\n    }\n\n    for (let item of items) {\n      const card = document.createElement('div');\n      card.classList.add('card');\n\n      const img = document.createElement('img');\n      img.src = item.src;\n      img.alt = `${item.p}`;\n  \n      const p = document.createElement('p');\n      p.textContent = item.p;\n\n      card.appendChild(img);\n      card.appendChild(p);\n      menu.appendChild(card);\n    }  \n\n    maxWidth.appendChild(menu);\n  }\n  \n  menuContainer.appendChild(maxWidth);\n  siteContainer.appendChild(menuContainer);\n}\n\nconst contact = () => {\n  const contactContainer = document.createElement('div');\n  contactContainer.classList.add('contact-container');\n\n  const h2 = document.createElement('h2');\n  h2.textContent = \"Contact Us\";\n\n  const p1 = document.createElement('p');\n  p1.textContent = \"Got a question, comment or suggestion?\";\n\n  const p2 = document.createElement('p');\n  p2.textContent = \"We'd love to hear from you!\";\n\n  const card = document.createElement('div');\n  card.classList.add('card');\n\n  const h3 = document.createElement('h3');\n  h3.textContent = \"Rin Ramen\";\n  card.appendChild(h3);\n\n  const contacts = [\n    'feedback@rinramen.com',\n    '+X 123-456-7890',\n    '+X 225-216-7230',\n    '+X 505-646-7160',\n  ];\n\n  for (let contact of contacts) {\n    const p = document.createElement('p');\n    p.textContent = contact;\n    card.appendChild(p);\n  }\n\n  contactContainer.appendChild(h2);\n  contactContainer.appendChild(p1);\n  contactContainer.appendChild(p2);\n  contactContainer.appendChild(card);\n  siteContainer.appendChild(contactContainer);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageload.js?");

/***/ }),

/***/ "./src/images/drinks-beer.jpeg":
/*!*************************************!*\
  !*** ./src/images/drinks-beer.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"816842a2a1b9c5eb9b76.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/drinks-beer.jpeg?");

/***/ }),

/***/ "./src/images/drinks-soda.jpg":
/*!************************************!*\
  !*** ./src/images/drinks-soda.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6eeefdddc5693ba7be90.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/drinks-soda.jpg?");

/***/ }),

/***/ "./src/images/drinks-water.jpg":
/*!*************************************!*\
  !*** ./src/images/drinks-water.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"97726a060b128f99c60f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/drinks-water.jpg?");

/***/ }),

/***/ "./src/images/narutoramenlogo.png":
/*!****************************************!*\
  !*** ./src/images/narutoramenlogo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"30dc7420251198cec281.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/narutoramenlogo.png?");

/***/ }),

/***/ "./src/images/ramen-miso.jpeg":
/*!************************************!*\
  !*** ./src/images/ramen-miso.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d063826446fdcc1dd5d.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramen-miso.jpeg?");

/***/ }),

/***/ "./src/images/ramen-shio.jpeg":
/*!************************************!*\
  !*** ./src/images/ramen-shio.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"807e44720c34ee7855cc.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramen-shio.jpeg?");

/***/ }),

/***/ "./src/images/ramen-shoyu.jpeg":
/*!*************************************!*\
  !*** ./src/images/ramen-shoyu.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5bbd6cbd09e379ba915a.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramen-shoyu.jpeg?");

/***/ }),

/***/ "./src/images/ramen-tonkotsu.jpeg":
/*!****************************************!*\
  !*** ./src/images/ramen-tonkotsu.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"555ec75be866c081be60.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramen-tonkotsu.jpeg?");

/***/ }),

/***/ "./src/images/ramenhero.png":
/*!**********************************!*\
  !*** ./src/images/ramenhero.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"28197077d9aff992124a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ramenhero.png?");

/***/ }),

/***/ "./src/images/side-gyoza.jpeg":
/*!************************************!*\
  !*** ./src/images/side-gyoza.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bdb983bf814da2ea00e1.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/side-gyoza.jpeg?");

/***/ }),

/***/ "./src/images/side-karaage.jpg":
/*!*************************************!*\
  !*** ./src/images/side-karaage.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5282a7fa0414e5b24c6b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/side-karaage.jpg?");

/***/ }),

/***/ "./src/images/side-okonomiyaki.jpg":
/*!*****************************************!*\
  !*** ./src/images/side-okonomiyaki.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"52938f5ad65faf409cf6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/side-okonomiyaki.jpg?");

/***/ }),

/***/ "./src/images/side-takoyaki.jpg":
/*!**************************************!*\
  !*** ./src/images/side-takoyaki.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ea11c81df7a7179b825.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/side-takoyaki.jpg?");

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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;