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

/***/ "./src/common/loadingPace.js":
/*!***********************************!*\
  !*** ./src/common/loadingPace.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nvar loadingPace = function() {\n    var preloader = document.querySelector(\"#preloader\");\n    //    Pace.on(\"start\", () => preloader.classList.remove(\"isdone\"));\n    //Pace.on(\"done\", () => preloader.classList.add(\"isdone\"));\n    if (document.querySelector(\"body\").classList.contains(\"pace-done\")) preloader.classList.add(\"isdone\");\n    document.addEventListener(\"load\", function() {\n        return preloader.classList.add(\"isdone\");\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadingPace);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2xvYWRpbmdQYWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFNQSxXQUFXLEdBQUcsV0FBTTtJQUN4QixJQUFJQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUVwRCxtRUFBbUU7SUFFbkUsMkRBQTJEO0lBRTNELElBQUlELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFDaEVKLFNBQVMsQ0FBQ0csU0FBUyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFcENKLFFBQVEsQ0FBQ0ssZ0JBQWdCLENBQUMsTUFBTSxFQUFFO2VBQU1OLFNBQVMsQ0FBQ0csU0FBUyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUFFRCwrREFBZU4sV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21tb24vbG9hZGluZ1BhY2UuanM/N2YwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkaW5nUGFjZSA9ICgpID0+IHtcclxuICBsZXQgcHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVsb2FkZXJcIik7XHJcblxyXG4gIC8vICAgIFBhY2Uub24oXCJzdGFydFwiLCAoKSA9PiBwcmVsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZShcImlzZG9uZVwiKSk7XHJcblxyXG4gIC8vUGFjZS5vbihcImRvbmVcIiwgKCkgPT4gcHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJpc2RvbmVcIikpO1xyXG5cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFjZS1kb25lXCIpKVxyXG4gICAgcHJlbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJpc2RvbmVcIik7XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaXNkb25lXCIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRpbmdQYWNlO1xyXG4iXSwibmFtZXMiOlsibG9hZGluZ1BhY2UiLCJwcmVsb2FkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/loadingPace.js\n"));

/***/ })

});