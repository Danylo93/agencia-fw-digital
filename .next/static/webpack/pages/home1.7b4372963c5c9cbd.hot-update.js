"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home1",{

/***/ "./src/layouts/main.jsx":
/*!******************************!*\
  !*** ./src/layouts/main.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar/Navbar */ \"./src/components/Navbar/Navbar.jsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer/Footer */ \"./src/components/Footer/Footer.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_floating_whatsapp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-floating-whatsapp */ \"./node_modules/react-floating-whatsapp/dist/index.js\");\n/* eslint-disable @next/next/no-css-tags */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar MainLayout = function(param) {\n    var children = param.children, footerClass = param.footerClass;\n    _s();\n    var navbarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var logoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var navbar = navbarRef.current;\n        if (window.pageYOffset > 300) navbar.classList.add(\"nav-scroll\");\n        else navbar.classList.remove(\"nav-scroll\");\n        window.addEventListener(\"scroll\", function() {\n            if (window.pageYOffset > 300) navbar.classList.add(\"nav-scroll\");\n            else navbar.classList.remove(\"nav-scroll\");\n        });\n    }, [\n        navbarRef\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"/assets/css/style.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/layouts/main.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"/assets/css/base.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/layouts/main.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/layouts/main.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                navbarRef: navbarRef,\n                logoRef: logoRef\n            }, void 0, false, {\n                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/layouts/main.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_floating_whatsapp__WEBPACK_IMPORTED_MODULE_5__.FloatingWhatsApp, {\n                phoneNumber: \"5511983626321\",\n                accountName: \"Ag\\xeancia FW Digital\",\n                chatMessage: \"Ola, seja muito bem vindo, em que posso ajuda-lo(a)?\",\n                placeholder: \"Digite aqui a sua mensagem\",\n                statusMessage: \"Marketing e Desenvolvimento\"\n            }, void 0, false, {\n                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/layouts/main.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                classText: footerClass\n            }, void 0, false, {\n                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/layouts/main.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MainLayout, \"NJv/rvX5fPwWhnPtkwq0tuwt7xI=\");\n_c = MainLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainLayout);\nvar _c;\n$RefreshReg$(_c, \"MainLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9tYWluLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQXlDLEdBQ3pDOzs7QUFBMEM7QUFDTztBQUNBO0FBQ3BCO0FBQzZCO0FBRTFELElBQU1NLFVBQVUsR0FBRyxnQkFBK0I7UUFBNUJDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxXQUFXLFNBQVhBLFdBQVc7O0lBQ3pDLElBQU1DLFNBQVMsR0FBR1IsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDOUIsSUFBTVMsT0FBTyxHQUFHVCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUU1QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSVcsTUFBTSxHQUFHRixTQUFTLENBQUNHLE9BQU87UUFFOUIsSUFBSUMsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxFQUFFSCxNQUFNLENBQUNJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzVETCxNQUFNLENBQUNJLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTNDSixNQUFNLENBQUNLLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxXQUFNO1lBQ3RDLElBQUlMLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsRUFBRUgsTUFBTSxDQUFDSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDNURMLE1BQU0sQ0FBQ0ksU0FBUyxDQUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLEVBQUU7UUFBQ1IsU0FBUztLQUFDLENBQUMsQ0FBQztJQUVoQixxQkFDRTs7MEJBQ0UsOERBQUNMLGtEQUFJOztrQ0FDSCw4REFBQ2UsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLFlBQVk7d0JBQUNDLElBQUksRUFBQyx1QkFBdUI7Ozs7OzZCQUFHO2tDQUN0RCw4REFBQ0YsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLFlBQVk7d0JBQUNDLElBQUksRUFBQyxzQkFBc0I7Ozs7OzZCQUFHOzs7Ozs7cUJBQ2hEOzBCQUVQLDhEQUFDbkIsaUVBQU07Z0JBQUNPLFNBQVMsRUFBRUEsU0FBUztnQkFBRUMsT0FBTyxFQUFFQSxPQUFPOzs7OztxQkFBSTtZQUNqREgsUUFBUTswQkFDVCw4REFBQ0YscUVBQWdCO2dCQUFDaUIsV0FBVyxFQUFDLGVBQWU7Z0JBQUNDLFdBQVcsRUFBQyx1QkFBb0I7Z0JBQUNDLFdBQVcsRUFBQyxzREFBc0Q7Z0JBQUNDLFdBQVcsRUFBQyw0QkFBNEI7Z0JBQUNDLGFBQWEsRUFBQyw2QkFBNkI7Ozs7O3FCQUFFOzBCQUN4Tyw4REFBQ3ZCLGlFQUFNO2dCQUFDd0IsU0FBUyxFQUFFbkIsV0FBVzs7Ozs7cUJBQUk7O29CQUNqQyxDQUNIO0FBQ0osQ0FBQztHQTdCS0YsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBK0JoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL21haW4uanN4PzRjYTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1jc3MtdGFncyAqL1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgRmxvYXRpbmdXaGF0c0FwcCB9IGZyb20gJ3JlYWN0LWZsb2F0aW5nLXdoYXRzYXBwJ1xyXG5cclxuY29uc3QgTWFpbkxheW91dCA9ICh7IGNoaWxkcmVuLCBmb290ZXJDbGFzcyB9KSA9PiB7XHJcbiAgY29uc3QgbmF2YmFyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGxvZ29SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgbmF2YmFyID0gbmF2YmFyUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgZWxzZSBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1zY3JvbGxcIik7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSBuYXZiYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1zY3JvbGxcIik7XHJcbiAgICAgIGVsc2UgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtc2Nyb2xsXCIpO1xyXG4gICAgfSk7XHJcbiAgfSwgW25hdmJhclJlZl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvYXNzZXRzL2Nzcy9zdHlsZS5jc3NcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Fzc2V0cy9jc3MvYmFzZS5jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8TmF2YmFyIG5hdmJhclJlZj17bmF2YmFyUmVmfSBsb2dvUmVmPXtsb2dvUmVmfSAvPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxGbG9hdGluZ1doYXRzQXBwIHBob25lTnVtYmVyPVwiNTUxMTk4MzYyNjMyMVwiIGFjY291bnROYW1lPVwiQWfDqm5jaWEgRlcgRGlnaXRhbFwiIGNoYXRNZXNzYWdlPVwiT2xhLCBzZWphIG11aXRvIGJlbSB2aW5kbywgZW0gcXVlIHBvc3NvIGFqdWRhLWxvKGEpP1wiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIGFxdWkgYSBzdWEgbWVuc2FnZW1cIiBzdGF0dXNNZXNzYWdlPVwiTWFya2V0aW5nIGUgRGVzZW52b2x2aW1lbnRvXCIvPlxyXG4gICAgICA8Rm9vdGVyIGNsYXNzVGV4dD17Zm9vdGVyQ2xhc3N9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkxheW91dDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIk5hdmJhciIsIkZvb3RlciIsIkhlYWQiLCJGbG9hdGluZ1doYXRzQXBwIiwiTWFpbkxheW91dCIsImNoaWxkcmVuIiwiZm9vdGVyQ2xhc3MiLCJuYXZiYXJSZWYiLCJsb2dvUmVmIiwibmF2YmFyIiwiY3VycmVudCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmsiLCJyZWwiLCJocmVmIiwicGhvbmVOdW1iZXIiLCJhY2NvdW50TmFtZSIsImNoYXRNZXNzYWdlIiwicGxhY2Vob2xkZXIiLCJzdGF0dXNNZXNzYWdlIiwiY2xhc3NUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/main.jsx\n"));

/***/ })

});