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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_loadingPace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/loadingPace */ \"./src/common/loadingPace.js\");\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/app.json */ \"./src/data/app.json\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar LoadingScreen = function() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var bodyEl = document.querySelector(\"body\");\n        if (_data_app_json__WEBPACK_IMPORTED_MODULE_4__.showLoading) {\n            (0,_common_loadingPace__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            if (bodyEl.classList.contains(\"hideX\")) bodyEl.classList.remove(\"hideX\");\n        } else if (_data_app_json__WEBPACK_IMPORTED_MODULE_4__.isMobile) {} else {\n            bodyEl.classList.add(\"hideX\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(_data_app_json__WEBPACK_IMPORTED_MODULE_4__.showLoading === true ? \"showX\" : \"hideX\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"preloader\",\n                    rel: \"preload\"\n                }, void 0, false, {\n                    fileName: \"/Users/danylo/Documents/Codando/Projetos/agencia-fw-digital/src/components/Loading-Screen/loading-screen.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/danylo/Documents/Codando/Projetos/agencia-fw-digital/src/components/Loading-Screen/loading-screen.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            _data_app_json__WEBPACK_IMPORTED_MODULE_4__.showLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"pace\",\n                strategy: \"beforeInteractive\",\n                src: \"/assets/js/pace.min.js\"\n            }, void 0, false, {\n                fileName: \"/Users/danylo/Documents/Codando/Projetos/agencia-fw-digital/src/components/Loading-Screen/loading-screen.jsx\",\n                lineNumber: 29,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(LoadingScreen, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = LoadingScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingScreen);\nvar _c;\n$RefreshReg$(_c, \"LoadingScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nLVNjcmVlbi9sb2FkaW5nLXNjcmVlbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUFrQztBQUNEO0FBQ2tCO0FBQ1Q7QUFFMUMsSUFBTUksYUFBYSxHQUFHLFdBQU07O0lBQzFCSixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJSyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUUzQyxJQUFJSix1REFBbUIsRUFBRTtZQUN2QkQsK0RBQVcsRUFBRSxDQUFDO1lBQ2QsSUFBSUcsTUFBTSxDQUFDSSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRUwsTUFBTSxDQUFDSSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRSxPQUFPLElBQUlSLG9EQUFnQixFQUFFLENBRTdCLE9BQU07WUFDSkUsTUFBTSxDQUFDSSxTQUFTLENBQUNJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxxQkFDRTs7MEJBQ0UsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRSxFQUFDLENBQW1ELE9BQWpEWix1REFBbUIsS0FBSyxJQUFJLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBRTswQkFDbkUsNEVBQUNXLEtBQUc7b0JBQUNFLEVBQUUsRUFBQyxXQUFXO29CQUFDQyxHQUFHLEVBQUMsU0FBUzs7Ozs7eUJBQzNCOzs7OztxQkFDRjtZQUdKZCx1REFBbUIsa0JBQ2pCLDhEQUFDRixvREFBTTtnQkFDTGUsRUFBRSxFQUFDLE1BQU07Z0JBQ1RFLFFBQVEsRUFBQyxtQkFBbUI7Z0JBQzVCQyxHQUFHLEVBQUMsd0JBQXdCOzs7OztxQkFDNUI7O29CQUVMLENBQ0g7QUFDSixDQUFDO0dBL0JLZixhQUFhO0FBQWJBLEtBQUFBLGFBQWE7QUFpQ25CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy1TY3JlZW4vbG9hZGluZy1zY3JlZW4uanN4P2FjNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBsb2FkaW5nUGFjZSBmcm9tIFwiLi4vLi4vY29tbW9uL2xvYWRpbmdQYWNlXCI7XHJcbmltcG9ydCBhcHBEYXRhIGZyb20gXCIuLi8uLi9kYXRhL2FwcC5qc29uXCI7XHJcblxyXG5jb25zdCBMb2FkaW5nU2NyZWVuID0gKCkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgYm9keUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4gICAgaWYgKGFwcERhdGEuc2hvd0xvYWRpbmcpIHtcclxuICAgICAgbG9hZGluZ1BhY2UoKTtcclxuICAgICAgaWYgKGJvZHlFbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlWFwiKSkgYm9keUVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlWFwiKTtcclxuICAgIH0gZWxzZSBpZiAoYXBwRGF0YS5pc01vYmlsZSkge1xyXG4gICAgICBcclxuICAgIH1lbHNlIHtcclxuICAgICAgYm9keUVsLmNsYXNzTGlzdC5hZGQoXCJoaWRlWFwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHthcHBEYXRhLnNob3dMb2FkaW5nID09PSB0cnVlID8gXCJzaG93WFwiIDogXCJoaWRlWFwifWB9PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwcmVsb2FkZXJcIiByZWw9XCJwcmVsb2FkXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGFwcERhdGEuc2hvd0xvYWRpbmcgJiZcclxuICAgICAgICAgIDxTY3JpcHRcclxuICAgICAgICAgICAgaWQ9XCJwYWNlXCJcclxuICAgICAgICAgICAgc3RyYXRlZ3k9XCJiZWZvcmVJbnRlcmFjdGl2ZVwiXHJcbiAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvanMvcGFjZS5taW4uanNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTY3JlZW47XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJTY3JpcHQiLCJsb2FkaW5nUGFjZSIsImFwcERhdGEiLCJMb2FkaW5nU2NyZWVuIiwiYm9keUVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2hvd0xvYWRpbmciLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImlzTW9iaWxlIiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJyZWwiLCJzdHJhdGVneSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Loading-Screen/loading-screen.jsx\n"));

/***/ })

});