"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Loading-Screen/loading-screen.jsx":
/*!**********************************************************!*\
  !*** ./src/components/Loading-Screen/loading-screen.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_loadingPace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/loadingPace */ \"./src/common/loadingPace.js\");\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/app.json */ \"./src/data/app.json\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar LoadingScreen = function() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var bodyEl = document.querySelector(\"body\");\n        if (_data_app_json__WEBPACK_IMPORTED_MODULE_4__.showLoading) {\n            (0,_common_loadingPace__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            if (bodyEl.classList.contains(\"hideX\")) bodyEl.classList.remove(\"hideX\");\n        } else if (_data_app_json__WEBPACK_IMPORTED_MODULE_4__.isMobile) {\n            !(0,_common_loadingPace__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        } else {\n            bodyEl.classList.add(\"hideX\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(_data_app_json__WEBPACK_IMPORTED_MODULE_4__.showLoading === true ? \"showX\" : \"hideX\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"preloader\",\n                    rel: \"preload\"\n                }, void 0, false, {\n                    fileName: \"/Users/danylo/Documents/Codando/Projetos/agencia-fw-digital/src/components/Loading-Screen/loading-screen.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/danylo/Documents/Codando/Projetos/agencia-fw-digital/src/components/Loading-Screen/loading-screen.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            _data_app_json__WEBPACK_IMPORTED_MODULE_4__.showLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"pace\",\n                strategy: \"beforeInteractive\",\n                src: \"/assets/js/pace.min.js\"\n            }, void 0, false, {\n                fileName: \"/Users/danylo/Documents/Codando/Projetos/agencia-fw-digital/src/components/Loading-Screen/loading-screen.jsx\",\n                lineNumber: 29,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(LoadingScreen, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = LoadingScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingScreen);\nvar _c;\n$RefreshReg$(_c, \"LoadingScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nLVNjcmVlbi9sb2FkaW5nLXNjcmVlbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUFrQztBQUNEO0FBQ2tCO0FBQ1Q7QUFFMUMsSUFBTUksYUFBYSxHQUFHLFdBQU07O0lBQzFCSixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJSyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUUzQyxJQUFJSix1REFBbUIsRUFBRTtZQUN2QkQsK0RBQVcsRUFBRSxDQUFDO1lBQ2QsSUFBSUcsTUFBTSxDQUFDSSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRUwsTUFBTSxDQUFDSSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRSxPQUFPLElBQUlSLG9EQUFnQixFQUFFO1lBQzNCLENBQUNELCtEQUFXLEVBQUUsQ0FBQztRQUNqQixPQUFNO1lBQ0pHLE1BQU0sQ0FBQ0ksU0FBUyxDQUFDSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgscUJBQ0U7OzBCQUNFLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUUsRUFBQyxDQUFtRCxPQUFqRFosdURBQW1CLEtBQUssSUFBSSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUU7MEJBQ25FLDRFQUFDVyxLQUFHO29CQUFDRSxFQUFFLEVBQUMsV0FBVztvQkFBQ0MsR0FBRyxFQUFDLFNBQVM7Ozs7O3lCQUMzQjs7Ozs7cUJBQ0Y7WUFHSmQsdURBQW1CLGtCQUNqQiw4REFBQ0Ysb0RBQU07Z0JBQ0xlLEVBQUUsRUFBQyxNQUFNO2dCQUNURSxRQUFRLEVBQUMsbUJBQW1CO2dCQUM1QkMsR0FBRyxFQUFDLHdCQUF3Qjs7Ozs7cUJBQzVCOztvQkFFTCxDQUNIO0FBQ0osQ0FBQztHQS9CS2YsYUFBYTtBQUFiQSxLQUFBQSxhQUFhO0FBaUNuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmctU2NyZWVuL2xvYWRpbmctc2NyZWVuLmpzeD9hYzUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG5pbXBvcnQgbG9hZGluZ1BhY2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9sb2FkaW5nUGFjZVwiO1xyXG5pbXBvcnQgYXBwRGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9hcHAuanNvblwiO1xyXG5cclxuY29uc3QgTG9hZGluZ1NjcmVlbiA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGJvZHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuICAgIGlmIChhcHBEYXRhLnNob3dMb2FkaW5nKSB7XHJcbiAgICAgIGxvYWRpbmdQYWNlKCk7XHJcbiAgICAgIGlmIChib2R5RWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVhcIikpIGJvZHlFbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVhcIik7XHJcbiAgICB9IGVsc2UgaWYgKGFwcERhdGEuaXNNb2JpbGUpIHtcclxuICAgICAgIWxvYWRpbmdQYWNlKCk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGJvZHlFbC5jbGFzc0xpc3QuYWRkKFwiaGlkZVhcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YXBwRGF0YS5zaG93TG9hZGluZyA9PT0gdHJ1ZSA/IFwic2hvd1hcIiA6IFwiaGlkZVhcIn1gfT5cclxuICAgICAgICA8ZGl2IGlkPVwicHJlbG9hZGVyXCIgcmVsPVwicHJlbG9hZFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtcclxuICAgICAgICBhcHBEYXRhLnNob3dMb2FkaW5nICYmXHJcbiAgICAgICAgICA8U2NyaXB0XHJcbiAgICAgICAgICAgIGlkPVwicGFjZVwiXHJcbiAgICAgICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2pzL3BhY2UubWluLmpzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nU2NyZWVuO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiU2NyaXB0IiwibG9hZGluZ1BhY2UiLCJhcHBEYXRhIiwiTG9hZGluZ1NjcmVlbiIsImJvZHlFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNob3dMb2FkaW5nIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJpc01vYmlsZSIsImFkZCIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwicmVsIiwic3RyYXRlZ3kiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Loading-Screen/loading-screen.jsx\n"));

/***/ })

});