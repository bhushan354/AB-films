"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkuniversal_movie_website"] = self["webpackChunkuniversal_movie_website"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {


eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'DM Serif Display', serif;\r\n}\r\n\r\n.nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n  padding: 10px;\r\n  background-color: black;\r\n}\r\n\r\nimg {\r\n  overflow: hidden;\r\n  width: 100%;\r\n  border-radius: 14px;\r\n}\r\n\r\n.nav img {\r\n  width: 55px;\r\n  height: 40px;\r\n  border-radius: 6px;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  gap: 100px;\r\n  font-size: 24px;\r\n  color: #fff;\r\n}\r\n\r\n.nav-list li {\r\n  list-style: none;\r\n}\r\n\r\nfooter {\r\n  background-color: rgb(193, 66, 236);\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\n.license {\r\n  text-decoration: none;\r\n  font-size: 16px;\r\n  color: #fff;\r\n}\r\n\r\n.display {\r\n  background-color: rgb(20, 20, 20);\r\n  display: grid;\r\n  grid-template-columns: 25% 25% 25% 25%;\r\n  gap: 16px;\r\n  padding: 30px 90px;\r\n  text-align: center;\r\n}\r\n\r\n.films {\r\n  border: 1px solid grey;\r\n  border-bottom-right-radius: 50px;\r\n  border-top-left-radius: 50px;\r\n  padding: 12px;\r\n  background: rgb(193, 66, 236);\r\n  background: linear-gradient(180deg, rgba(193, 66, 236, 1) 0%, rgba(202, 104, 235, 1) 0%, rgba(20, 20, 20, 0.7973564425770308) 17%);\r\n}\r\n\r\n.films:hover {\r\n  transform: scale(1.03);\r\n  -webkit-transform: scale(1.03);\r\n  -ms-transform: scale(1.03);\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.film-name {\r\n  font-size: 22px;\r\n  flex-wrap: wrap;\r\n  font-weight: 500;\r\n  color: #fff;\r\n}\r\n\r\n.film-image {\r\n  padding: 6px;\r\n}\r\n\r\n.like {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 4px;\r\n}\r\n\r\n.like i {\r\n  color: red;\r\n  padding: 2px;\r\n  font-size: 25px;\r\n}\r\n\r\n.like i:focus {\r\n  color: #fff;\r\n}\r\n\r\n.like p {\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  color: antiquewhite;\r\n  font-size: 18px;\r\n}\r\n\r\n.comment {\r\n  padding: 8px 14px;\r\n  border: none;\r\n  border-radius: 6px;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  background-color: #cd79f1;\r\n}\r\n\r\n.comment:hover {\r\n  transform: scale(1.03);\r\n  -webkit-transform: scale(1.03);\r\n  -ms-transform: scale(1.03);\r\n  background-color: #fff;\r\n  color: black;\r\n}\r\n\r\n/* popup styling */\r\n\r\n.popupContainer {\r\n  width: 55%;\r\n  height: 90%;\r\n  display: none;\r\n  background: crimson;\r\n  position: fixed;\r\n  border-radius: 10px;\r\n  top: 4%;\r\n  left: 25%;\r\n  text-align: center;\r\n  justify-content: center;\r\n  color: #333;\r\n  overflow-y: scroll;\r\n  transition: filter 0.3s ease-in-out;\r\n}\r\n\r\n.popupContainer2 {\r\n  height: 95%;\r\n}\r\n\r\n.blur-background {\r\n  filter: blur(8px);\r\n  pointer-events: none;\r\n  transition: filter 0.3s ease-in-out;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  right: 0;\r\n  width: 45px;\r\n  border-radius: 22px;\r\n  height: 45px;\r\n  background: floralwhite;\r\n  margin-right: 14px;\r\n  margin-top: -54px;\r\n  font-size: 24px;\r\n  font-family: monospace;\r\n  font-weight: 600;\r\n  border: 5px solid rgb(26, 94, 156);\r\n}\r\n\r\n.subDivOne {\r\n  display: flex;\r\n  height: 55%;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  margin-top: 66px;\r\n}\r\n\r\nimg.movie-img {\r\n  width: 50%;\r\n  height: 450px;\r\n  border-radius: 20px;\r\n}\r\n\r\nh2.movieName {\r\n  margin-top: 16px;\r\n  background-color: bisque;\r\n  color: black;\r\n  border-radius: 6px;\r\n  padding: 14px;\r\n  font-size: 22px;\r\n  width: 38%;\r\n}\r\n\r\n.subDivTwo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  border-radius: 6px;\r\n  background: bisque;\r\n  padding: 12px;\r\n  margin: 12px 8%;\r\n}\r\n\r\n.commentHeading {\r\n  margin-top: 12px;\r\n  background-color: bisque;\r\n  color: black;\r\n  border-radius: 6px;\r\n  padding: 4px;\r\n  width: 30%;\r\n}\r\n\r\ninput.typeName {\r\n  width: 90%;\r\n  padding: 4px;\r\n  height: 28px;\r\n}\r\n\r\ninput.typeComment {\r\n  width: 90%;\r\n  padding: 4px;\r\n  height: 28px;\r\n  margin-top: 6px;\r\n}\r\n\r\n.submitComment {\r\n  margin-top: 6px;\r\n  width: 62px;\r\n  height: 32px;\r\n  box-shadow: 3px 3px lightgray;\r\n  border-radius: 6px;\r\n}\r\n\r\n.description {\r\n  width: 75%;\r\n  background: bisque;\r\n  border-radius: 8px;\r\n}\r\n\r\np#sumTxt {\r\n  font-size: 24px;\r\n  color: darkblue;\r\n  font-weight: 800;\r\n}\r\n\r\n.smallItems {\r\n  background: beige;\r\n  width: 52%;\r\n  margin-top: 5px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.comment-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  border-radius: 6px;\r\n  background: bisque;\r\n  padding: 12px;\r\n  margin: 12px 8%;\r\n}\r\n\r\np.comments {\r\n  background: black;\r\n  color: white;\r\n  width: 114px;\r\n  border-radius: 8px;\r\n  margin: 7px;\r\n}\r\n\r\n.inputComments {\r\n  width: 52%;\r\n  padding: 8px;\r\n  margin-top: 26px;\r\n}\r\n\r\n.forStyling {\r\n  height: 8px;\r\n}\r\n\r\nli.comment-li {\r\n  display: flex;\r\n  background: darksalmon;\r\n  margin: 6px;\r\n  gap: 18px;\r\n  padding: 4px;\r\n  border-radius: 10px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://universal-movie-website/./src/style.css?./node_modules/css-loader/dist/cjs.js");

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  font-family: 'DM Serif Display', serif;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  padding: 10px;\n  background-color: black;\n}\n\nimg {\n  overflow: hidden;\n  width: 100%;\n}\n\n.nav img {\n  width: 55px;\n  height: 40px;\n  border-radius: 6px;\n}\n\n.nav-list {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 100px;\n  font-size: 24px;\n  color: #fff;\n}\n\n.nav-list li {\n  list-style: none;\n}\n\n.nav-list li:hover {\n  color: #cd79f1;\n}\n\nfooter {\n  background-color: rgb(193, 66, 236);\n  text-align: center;\n  padding: 20px;\n}\n\n.license {\n  text-decoration: none;\n  font-size: 16px;\n  color: #fff;\n}\n\n.display {\n  background-color: rgb(20, 20, 20);\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n  gap: 16px;\n  padding: 30px 90px;\n  text-align: center;\n}\n\n.films {\n  border: 1px solid grey;\n  border-bottom-right-radius: 50px;\n  border-top-left-radius: 50px;\n  padding: 12px;\n  background: rgb(193, 66, 236);\n  background: linear-gradient(180deg, rgba(193, 66, 236, 1) 0%, rgba(202, 104, 235, 1) 0%, rgba(20, 20, 20, 0.7973564425770308) 17%);\n}\n\n.films:hover {\n  transform: scale(1.03);\n  -webkit-transform: scale(1.03);\n  -ms-transform: scale(1.03);\n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n.film-name {\n  font-size: 22px;\n  flex-wrap: wrap;\n  font-weight: 500;\n  color: #fff;\n}\n\n.film-image {\n  padding: 6px;\n}\n\n.like {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n}\n\n.like i {\n  padding: 2px;\n  font-size: 25px;\n}\n\n.like p {\n  font-style: italic;\n  font-weight: 300;\n  color: antiquewhite;\n  font-size: 18px;\n}\n\n.comment {\n  padding: 8px 14px;\n  border: none;\n  border-radius: 6px;\n  font-size: 16px;\n  color: #fff;\n  background-color: #cd79f1;\n}\n\n.comment:hover {\n  transform: scale(1.03);\n  -webkit-transform: scale(1.03);\n  -ms-transform: scale(1.03);\n  background-color: #fff;\n  color: black;\n}\n\n.fa-heart {\n  color: grey;\n}\n\n.liked {\n  color: red;\n}\n\n@media screen and (max-width: 768px) {\n  .display {\n    padding: 30px;\n    grid-template-columns: 30% 30% 30%;\n  }\n\n  .nav-list {\n    gap: 20px;\n  }\n\n  .comment {\n    font-size: 12px;\n    padding: 3px 9px;\n  }\n\n  .films {\n    border: 1px solid grey;\n    border-bottom-right-radius: 30px;\n    border-top-left-radius: 30px;\n  }\n\n  .film-name {\n    font-size: 16px;\n  }\n\n  .like p {\n    font-size: 12px;\n  }\n\n  .like i {\n    font-size: 18px;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://universal-movie-website/./src/style.css?./node_modules/css-loader/dist/cjs.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



"use strict";

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://universal-movie-website/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {


"use strict";

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://universal-movie-website/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


"use strict";

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://universal-movie-website/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {


"use strict";

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://universal-movie-website/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {


"use strict";

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://universal-movie-website/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {


"use strict";

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://universal-movie-website/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



"use strict";

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://universal-movie-website/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {


"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://universal-movie-website/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://universal-movie-website/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_displayItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/displayItems.js */ \"./src/module/displayItems.js\");\n/* harmony import */ var _module_addPopupOne_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/addPopupOne.js */ \"./src/module/addPopupOne.js\");\n/* harmony import */ var _module_allCommentsOne_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/allCommentsOne.js */ \"./src/module/allCommentsOne.js\");\n/* harmony import */ var _module_commentsCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/commentsCounter.js */ \"./src/module/commentsCounter.js\");\n/* harmony import */ var _module_displayPopup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/displayPopup.js */ \"./src/module/displayPopup.js\");\n\n\n\n\n\n\n\nawait (0,_module_displayItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n(0,_module_displayPopup_js__WEBPACK_IMPORTED_MODULE_5__.addCommentPopupEvent)();\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://universal-movie-website/./src/index.js?");

/***/ }),

/***/ "./src/module/addPopupOne.js":
/*!***********************************!*\
  !*** ./src/module/addPopupOne.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addComment: () => (/* binding */ addComment),\n/* harmony export */   createPopup: () => (/* binding */ createPopup)\n/* harmony export */ });\n/* harmony import */ var _allCommentsOne_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allCommentsOne.js */ \"./src/module/allCommentsOne.js\");\n/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsCounter.js */ \"./src/module/commentsCounter.js\");\n\n\n\nconst createPopup = (details) => {\n  const popupContent = document.createElement('div');\n  popupContent.setAttribute('class', 'popupContainer2');\n  popupContent.innerHTML = `\n  \n  <div class=\"wholePopup\">\n\n  <button class=\"close-btn\">X</button>\n\n      <div class=\"subDivOne\">\n          <img class=\"movie-img\" src=\"${details.image.medium}\" alt=\"Poster\"></img>\n          <h2 class=\"movieName\">${details.name}</h2>\n          <form action=\"\" class=\"form\"></form>\n      </div>\n\n      <div class=\"subDivTwo\">\n\n          <div class=\"description\">\n              <p id=\"sumTxt\">Description:</p> ${details.summary}\n          </div>\n          <div class=\"smallItems\"><span class=\"generes\">Genre: </span> ${details.genres}</div>\n\n          <div class=\"smallItems\"><span class=\"titles\">OfficialSite: </span> <a href=\"${details.officialSite}\"\n                  target=\"_blank\">OfficialSite</a>\n          </div>\n\n          <div class=\"smallItems\"><span class=\"titles\">ID: </span> ${details.id}</div>\n          <div class=\"smallItems\"><span class=\"titles\">IMDb Rating: </span> ${details.rating.average}</div>\n\n      </div>\n\n      <div class=\"comment-container\">\n\n          <p class=\"comments\">Comments(<span class=\"commentsCount\"></span>)</p>\n\n          <div class=\"inputComment\">\n              <input required type=\"text\" class=\"typeName\" id=\"typeName\" placeholder=\"Your Name\"><br>\n              <input required type=\"text\" class=\"typeComment\" id=\"typeComment\" placeholder=\"Your comment\"><br>\n              <button type=\"submit\" class=\"submitComment\" id=\"${details.id}\">Submit</button>\n          </div>\n\n          <div class=\"commentDisplay\">\n          </div>\n\n      </div>\n\n      <div class=\"forStyling\n      \"></div>\n\n  </div>\n\n  `;\n\n  return popupContent;\n};\n\nconst addComment = async () => {\n  const counter = (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const commentForm = document.querySelector('.inputComment');\n  const formSubmitBtn = document.querySelector('.submitComment');\n  const commentSection = document.querySelector('.commentDisplay');\n  document.querySelector('.commentsCount').innerHTML = counter;\n  commentForm.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const name = commentForm.elements[0];\n    const comment = commentForm.elements[1];\n    if (!(name === '' || comment === '')) {\n      await (0,_allCommentsOne_js__WEBPACK_IMPORTED_MODULE_0__.renderComment)(formSubmitBtn.id, name.value, comment.value);\n      const commentslist = await (0,_allCommentsOne_js__WEBPACK_IMPORTED_MODULE_0__.generateComment)(formSubmitBtn.id);\n      commentSection.innerHTML = '';\n      commentSection.append(commentslist);\n      const counter = (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      document.querySelector('.commentsCount').innerHTML = counter;\n      commentForm.reset();\n    }\n  });\n};\n\n//# sourceURL=webpack://universal-movie-website/./src/module/addPopupOne.js?");

/***/ }),

/***/ "./src/module/addPopupTwo.js":
/*!***********************************!*\
  !*** ./src/module/addPopupTwo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addClosePopupEvent: () => (/* binding */ addClosePopupEvent),\n/* harmony export */   showDetails: () => (/* binding */ showDetails)\n/* harmony export */ });\nconst baseApi = 'https://api.tvmaze.com/shows/';\n\nconst showDetails = async (id) => {\n  try {\n    const response = await fetch(`${baseApi}${id}`);\n    if (!response.ok) {\n      throw new Error(`HTTP error! Status: ${response.status}`);\n    }\n    return await response.json();\n  } catch (error) {\n    console.error('Fetch error:', error);\n    throw error;\n  }\n};\n\nconst addClosePopupEvent = () => {\n  const closeBtn = document.querySelector('.close-btn');\n  closeBtn.addEventListener('click', () => {\n    const popupModal = document.querySelector('.popupContainer');\n    popupModal.style.display = 'none';\n    document.body.style.overflow = 'scroll';\n  });\n};\n\n//# sourceURL=webpack://universal-movie-website/./src/module/addPopupTwo.js?");

/***/ }),

/***/ "./src/module/allCommentsOne.js":
/*!**************************************!*\
  !*** ./src/module/allCommentsOne.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateComment: () => (/* binding */ generateComment),\n/* harmony export */   renderComment: () => (/* binding */ renderComment)\n/* harmony export */ });\nconst apiKey = '1qXMsA9cV2Pv46sO3dUb';\nconst end = '/comments';\nconst commUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\n\nconst renderComment = async (id, name, comment) => {\n  const response = await fetch(`${commUrl}${apiKey}${end}`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: id, username: name, comment }),\n  });\n  return response;\n};\n\nconst fetchComment = async (id) => {\n  const reponseComment = await fetch(`${commUrl}${apiKey}${end}?item_id=${id}`);\n  const itemData = await reponseComment.json();\n\n  if (!reponseComment.ok) {\n    return null;\n  }\n  return itemData;\n};\n\nconst createComments = ({ comment, username, creationDate }) => {\n  const cDate = creationDate;\n\n  const commentli = document.createElement('li');\n  commentli.className = 'comment-li';\n  commentli.innerHTML = `\n  <p class=\"date\"><span><i class=\"fa-solid fa-user\"> </i><span>${username} </span> </span><span>${cDate} </span></p>\n  <p class = \"user-comment\"><span> ${comment} </span></p>\n  `;\n  return commentli;\n};\n\nconst generateComment = async (id) => {\n  const commentUl = document.createElement('ul');\n  commentUl.id = 'comments-section';\n  commentUl.innerHTML = '';\n  const comments = await fetchComment(id);\n\n  if (comments === null) {\n    const noCommentLi = document.createElement('p');\n    noCommentLi.className = 'no_comment_li';\n    noCommentLi.textContent = 'Be the first to comment';\n    commentUl.append(noCommentLi);\n  } else {\n    comments.forEach((comment) => {\n      commentUl.append(createComments(comment));\n    });\n  }\n  return commentUl;\n};\n\n//# sourceURL=webpack://universal-movie-website/./src/module/allCommentsOne.js?");

/***/ }),

/***/ "./src/module/commentsCounter.js":
/*!***************************************!*\
  !*** ./src/module/commentsCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentCount: () => (/* binding */ commentCount),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countCom = () => {\n  const numb = document.getElementById('comments-section').children.length;\n  return numb;\n};\n\nconst commentCount = (commentList) => commentList.length;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countCom);\n\n//# sourceURL=webpack://universal-movie-website/./src/module/commentsCounter.js?");
=======
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_module01_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/module01.js */ \"./src/module/module01.js\");\n/* harmony import */ var _module_module01_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_module_module01_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _module_displayItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/displayItems.js */ \"./src/module/displayItems.js\");\n\n\n\n\n(0,_module_displayItems_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://universal-movie-website/./src/index.js?");


/***/ }),

/***/ "./src/module/displayItems.js":
/*!************************************!*\
  !*** ./src/module/displayItems.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData.js */ \"./src/module/fetchData.js\");\n/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayLikes.js */ \"./src/module/displayLikes.js\");\n/* harmony import */ var _renderLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderLike.js */ \"./src/module/renderLike.js\");\n\n\n\n\nconst displayItems = async () => {\n  const [likesData, baseData] = await Promise.all([(0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()]);\n  const combinedData = baseData.map((show) => {\n    const likes = likesData.find((like) => like.item_id == show.id);\n    return {\n      ...show,\n      likes: likes ? likes.likes : 0,\n    };\n  });\n  let items = '';\n  combinedData.forEach((values, index) => {\n    items += `\n          <div class=\"films\">\n              <div class=\"film-image\">\n                  <img src=\"${values.image.medium}\" alt=\"film image\"/>\n              </div>\n              <div class=\"title\">\n                  <div class=\"film-name\">\n                  ${values.name}\n                  </div>\n                  <div class=\"like\">\n                      <i id=\"heart-icon-${index}\" class=\"fa-solid fa-heart\"></i>\n                      <p id=\"like-count-${values.id}\">${values.likes}</p>\n                      <p class=\"likes\">likes</p>\n                  </div>\n                  <button data-id=\"${values.id}\" class=\"comment\">Comments</button>\n\n              </div>\n          </div>`;\n  });\n  document.querySelector('.display').innerHTML = items;\n\n  combinedData.forEach((values, index) => {\n    const heartIcon = document.getElementById(`heart-icon-${index}`);\n    heartIcon.addEventListener('click', (e) => {\n      e.preventDefault();\n      (0,_renderLike_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(values.id.toString());\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayItems);\n\n//# sourceURL=webpack://universal-movie-website/./src/module/displayItems.js?");

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData.js */ \"./src/module/fetchData.js\");\n/* harmony import */ var _displayLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayLikes.js */ \"./src/module/displayLikes.js\");\n/* harmony import */ var _renderLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderLike.js */ \"./src/module/renderLike.js\");\n/* harmony import */ var _itemsCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemsCounter.js */ \"./src/module/itemsCounter.js\");\n\n\n\n\n\nconst displayItems = async () => {\n  const [likesData, baseData] = await Promise.all([(0,_displayLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()]);\n  const combinedData = baseData.map((show) => {\n    const likes = likesData.find((like) => like.item_id == show.id);\n    return {\n      ...show,\n      likes: likes ? likes.likes : 0,\n    };\n  });\n  let items = '';\n  combinedData.forEach((values, index) => {\n    items += `\n          <div class=\"films\">\n              <div class=\"film-image\">\n                  <img src=\"${values.image.medium}\" alt=\"film image\"/>\n              </div>\n              <div class=\"title\">\n                  <div class=\"film-name\">\n                  ${values.name}\n                  </div>\n                  <div class=\"like\">\n                      <i id=\"heart-icon-${index}\" class=\"fa-solid fa-heart\"></i>\n                      <p id=\"like-count-${values.id}\">${values.likes}</p>\n                      <p class=\"likes\">likes</p>\n                  </div>\n                  <button class=\"comment\">Comments</button>\n              </div>\n          </div>`;\n  });\n  document.querySelector('.display').innerHTML = items;\n  document.querySelector('#amount').innerHTML = (0,_itemsCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  combinedData.forEach((values, index) => {\n    const heartIcon = document.getElementById(`heart-icon-${index}`);\n    heartIcon.addEventListener('click', (e) => {\n      e.preventDefault();\n      (0,_renderLike_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(values.id.toString());\n      heartIcon.classList.add('liked');\n      setTimeout(() => {\n        heartIcon.classList.remove('liked');\n      }, 500);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayItems);\n\n//# sourceURL=webpack://universal-movie-website/./src/module/displayItems.js?");


/***/ }),

/***/ "./src/module/displayLikes.js":
/*!************************************!*\
  !*** ./src/module/displayLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


"use strict";

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchLikes = async () => {\n  const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3Q9ZYh3KJIO90p2c2KK2/likes/';\n  const response = await fetch(involvementApiUrl);\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);\n\n//# sourceURL=webpack://universal-movie-website/./src/module/displayLikes.js?");

/***/ }),


/***/ "./src/module/displayPopup.js":
/*!************************************!*\
  !*** ./src/module/displayPopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCommentPopupEvent: () => (/* binding */ addCommentPopupEvent)\n/* harmony export */ });\n/* harmony import */ var _addPopupOne_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPopupOne.js */ \"./src/module/addPopupOne.js\");\n/* harmony import */ var _allCommentsOne_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allCommentsOne.js */ \"./src/module/allCommentsOne.js\");\n/* harmony import */ var _addPopupTwo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addPopupTwo.js */ \"./src/module/addPopupTwo.js\");\n\n\n\n\n\nconst displayPopup = async (id) => {\n  const popupModal = document.querySelector('.popupContainer');\n  const { body } = document;\n  body.style.overflow = 'hidden';\n\n  popupModal.innerHTML = '';\n\n  try {\n    const movieDetail = await (0,_addPopupTwo_js__WEBPACK_IMPORTED_MODULE_2__.showDetails)(id);\n    popupModal.append((0,_addPopupOne_js__WEBPACK_IMPORTED_MODULE_0__.createPopup)(movieDetail));\n    popupModal.style.display = 'flex';\n\n    const commentLine = document.querySelector('.commentDisplay');\n    const comments = await (0,_allCommentsOne_js__WEBPACK_IMPORTED_MODULE_1__.generateComment)(id);\n    commentLine.append(comments);\n\n    (0,_addPopupTwo_js__WEBPACK_IMPORTED_MODULE_2__.addClosePopupEvent)();\n    (0,_addPopupOne_js__WEBPACK_IMPORTED_MODULE_0__.addComment)();\n  } catch (error) {\n    console.error('Display Popup error:', error);\n  }\n};\n\nconst addCommentPopupEvent = () => {\n  const commentBtns = document.querySelectorAll('.comment');\n  commentBtns.forEach((btn) => {\n    btn.addEventListener('click', async (e) => {\n      e.preventDefault();\n      const commentId = btn.getAttribute('data-id');\n      displayPopup(commentId);\n    });\n  });\n};\n\n\n//# sourceURL=webpack://universal-movie-website/./src/module/displayPopup.js?");

/***/ }),


/***/ "./src/module/fetchData.js":
/*!*********************************!*\
  !*** ./src/module/fetchData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


"use strict";

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchDataFromAPI = async () => {\n  const apiURL = 'https://api.tvmaze.com/shows';\n  const response = await fetch(apiURL);\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchDataFromAPI);\n\n//# sourceURL=webpack://universal-movie-website/./src/module/fetchData.js?");

/***/ }),


/***/ "./src/module/renderLike.js":
/*!**********************************!*\
  !*** ./src/module/renderLike.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

=======
/***/ "./src/module/itemsCounter.js":
/*!************************************!*\
  !*** ./src/module/itemsCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   amount: () => (/* binding */ amount),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemCounter = () => {\n  const elements = document.querySelector('.display').children.length;\n  return elements;\n};\n\nconst amount = (displayItems) => displayItems.length;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);\n\n//# sourceURL=webpack://universal-movie-website/./src/module/itemsCounter.js?");

/***/ }),

/***/ "./src/module/module01.js":
/*!********************************!*\
  !*** ./src/module/module01.js ***!
  \********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://universal-movie-website/./src/module/module01.js?");

/***/ }),

/***/ "./src/module/renderLike.js":
/*!**********************************!*\
  !*** ./src/module/renderLike.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderLike = async (id) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3Q9ZYh3KJIO90p2c2KK2/likes/', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: id }),\n  });\n  if (response.ok) {\n    const likeCountElement = document.getElementById(`like-count-${id}`);\n    if (likeCountElement) {\n      const currentLikes = parseInt(likeCountElement.innerText, 10) || 0;\n      likeCountElement.innerText = (currentLikes + 1).toString();\n    }\n  }\n  return response;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderLike);\n\n//# sourceURL=webpack://universal-movie-website/./src/module/renderLike.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);