"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/components/About/Testimonials/index.jsx":
/*!*****************************************************!*\
  !*** ./src/components/About/Testimonials/index.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NoSSR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../NoSSR */ \"./src/components/NoSSR/index.jsx\");\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\");\n/* harmony import */ var _data_About_Testimonials_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/About/Testimonials.json */ \"./src/data/About/Testimonials.json\");\n/* eslint-disable @next/next/no-img-element */ \n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Split = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"src_components_Split_index_jsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../../Split */ \"./src/components/Split/index.jsx\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"../components/About/Testimonials/index.jsx -> \" + \"../../Split\"\n        ]\n    },\n    ssr: false\n});\n_c = Split;\n\n\n\nvar testimonialsSliderSettings = {\n    dots: true,\n    infinite: true,\n    speed: 1000,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    arrows: false\n};\nvar Testimonials = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var elem = document.querySelector(\".background.bg-img[data-background]\");\n        if (elem) elem.style.backgroundImage = \"url(\".concat(elem.getAttribute(\"data-background\"), \")\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"block-sec\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"background bg-img section-padding pb-0\",\n                    \"data-background\": \"/assets/img/1.jpg\",\n                    \"data-overlay-dark\": \"6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"vid-area\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"vid-icon\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"vid\",\n                                                    onClick: function() {\n                                                        return setIsOpen(true);\n                                                    },\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"vid-butn\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"icon\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                                className: \"fas fa-play\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                                lineNumber: 39,\n                                                                columnNumber: 27\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                            lineNumber: 38,\n                                                            columnNumber: 25\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                        lineNumber: 37,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"cont\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Split, {\n                                                    className: \"wow\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-5 offset-lg-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"testim-box\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"head-box\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        className: \"wow fadeIn\",\n                                                        \"data-wow-delay\": \".5s\",\n                                                        children: \"Nossos clientes satisfeitos\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                        lineNumber: 55,\n                                                        columnNumber: 21\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                        className: \"wow fadeInLeft\",\n                                                        \"data-wow-delay\": \".5s\",\n                                                        children: \"O que nossos Clientes est\\xe3o dizendo?\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, testimonialsSliderSettings), {\n                                                className: \"slic-item wow fadeInUp slick-dotted\",\n                                                \"data-wow-delay\": \".5s\",\n                                                children: _data_About_Testimonials_json__WEBPACK_IMPORTED_MODULE_6__.testimonials.map(function(testimonial) {\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"item\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: testimonial.content\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                                lineNumber: 62,\n                                                                columnNumber: 27\n                                                            }, _this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"info\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \"img\",\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                            className: \"img-box\",\n                                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                                src: testimonial.img,\n                                                                                alt: \"\"\n                                                                            }, void 0, false, {\n                                                                                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                                                lineNumber: 66,\n                                                                                columnNumber: 33\n                                                                            }, _this)\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                                            lineNumber: 65,\n                                                                            columnNumber: 31\n                                                                        }, _this)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                                        lineNumber: 64,\n                                                                        columnNumber: 29\n                                                                    }, _this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \"cont\",\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                            className: \"author\",\n                                                                            children: [\n                                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                                                    className: \"author-name custom-font\",\n                                                                                    children: testimonial.name\n                                                                                }, void 0, false, {\n                                                                                    fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                                                    lineNumber: 71,\n                                                                                    columnNumber: 33\n                                                                                }, _this),\n                                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                                    className: \"author-details\",\n                                                                                    children: testimonial.details\n                                                                                }, void 0, false, {\n                                                                                    fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                                                    lineNumber: 72,\n                                                                                    columnNumber: 33\n                                                                                }, _this)\n                                                                            ]\n                                                                        }, void 0, true, {\n                                                                            fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                                            lineNumber: 70,\n                                                                            columnNumber: 31\n                                                                        }, _this)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                                        lineNumber: 69,\n                                                                        columnNumber: 29\n                                                                    }, _this)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                                lineNumber: 63,\n                                                                columnNumber: 27\n                                                            }, _this)\n                                                        ]\n                                                    }, testimonial.id, true, {\n                                                        fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                        lineNumber: 61,\n                                                        columnNumber: 25\n                                                    }, _this);\n                                                })\n                                            }), void 0, false, {\n                                                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoSSR__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/danylo/Downloads/Main_files/ruko_react/src/components/About/Testimonials/index.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Testimonials, \"R6oiTacYga5DaYN6hPJc8sHhe7Y=\");\n_c1 = Testimonials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c, _c1;\n$RefreshReg$(_c, \"Split\");\n$RefreshReg$(_c1, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BYm91dC9UZXN0aW1vbmlhbHMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNEMsR0FDNUM7Ozs7O0FBQTRDO0FBQ1g7QUFDRTtBQUNuQyxJQUFNSSxLQUFLLEdBQUdELG1EQUFPLENBQUM7V0FBTSxrTEFBcUI7Q0FBQTs7Ozs7O0lBQUlFLEdBQUcsRUFBRSxLQUFLO0VBQUc7QUFBNURELEtBQUFBLEtBQUs7QUFDcUI7QUFDVztBQUMwQjtBQUVyRSxJQUFNSywwQkFBMEIsR0FBRztJQUNqQ0MsSUFBSSxFQUFFLElBQUk7SUFDVkMsUUFBUSxFQUFFLElBQUk7SUFDZEMsS0FBSyxFQUFFLElBQUk7SUFDWEMsWUFBWSxFQUFFLENBQUM7SUFDZkMsY0FBYyxFQUFFLENBQUM7SUFDakJDLE1BQU0sRUFBRSxLQUFLO0NBQ2Q7QUFFRCxJQUFNQyxZQUFZLEdBQUcsV0FBTTs7SUFDekIsSUFBNEJoQixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXBDaUIsTUFBTSxHQUFlakIsR0FBZSxHQUE5QixFQUFFa0IsU0FBUyxHQUFJbEIsR0FBZSxHQUFuQjtJQUV4QkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSWtCLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMscUNBQXFDLENBQUM7UUFDeEUsSUFBSUYsSUFBSSxFQUFFQSxJQUFJLENBQUNHLEtBQUssQ0FBQ0MsZUFBZSxHQUFHLE1BQUssQ0FBdUMsTUFBQyxDQUF0Q0osSUFBSSxDQUFDSyxZQUFZLENBQUMsaUJBQWlCLENBQUMsRUFBQyxHQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRTs7MEJBQ0UsOERBQUNDLFNBQU87Z0JBQUNDLFNBQVMsRUFBQyxXQUFXOzBCQUM1Qiw0RUFBQ0MsS0FBRztvQkFBQ0QsU0FBUyxFQUFDLHdDQUF3QztvQkFBQ0UsaUJBQWUsRUFBQyxtQkFB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Q0o7QUFDSCxDQUFDO0dBeEVLVSxZQUFZO0FBQVpBLE1BQUFBLFlBQVk7QUEwRWxCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fib3V0L1Rlc3RpbW9uaWFscy9pbmRleC5qc3g/NWIxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFNwbGl0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi8uLi9TcGxpdFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5pbXBvcnQgTm9TU1IgZnJvbSAnLi4vLi4vTm9TU1InO1xyXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tICdyZWFjdC1tb2RhbC12aWRlbyc7XHJcbmltcG9ydCBUZXN0aW1vbmlhbHNEYXRhIGZyb20gJy4uLy4uLy4uL2RhdGEvQWJvdXQvVGVzdGltb25pYWxzLmpzb24nO1xyXG5cclxuY29uc3QgdGVzdGltb25pYWxzU2xpZGVyU2V0dGluZ3MgPSB7XHJcbiAgZG90czogdHJ1ZSxcclxuICBpbmZpbml0ZTogdHJ1ZSxcclxuICBzcGVlZDogMTAwMCxcclxuICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgYXJyb3dzOiBmYWxzZVxyXG59O1xyXG5cclxuY29uc3QgVGVzdGltb25pYWxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kLmJnLWltZ1tkYXRhLWJhY2tncm91bmRdJyk7XHJcbiAgICBpZiAoZWxlbSkgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmFja2dyb3VuZCcpfSlgO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJsb2NrLXNlY1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZCBiZy1pbWcgc2VjdGlvbi1wYWRkaW5nIHBiLTBcIiBkYXRhLWJhY2tncm91bmQ9XCIvYXNzZXRzL2ltZy8xLmpwZ1wiIGRhdGEtb3ZlcmxheS1kYXJrPVwiNlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZC1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZFwiIG9uQ2xpY2s9eygpID0+IHNldElzT3Blbih0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZC1idXRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGxheVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwbGl0IGNsYXNzTmFtZT1cIndvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L1NwbGl0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgb2Zmc2V0LWxnLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIndvdyBmYWRlSW5cIiBkYXRhLXdvdy1kZWxheT1cIi41c1wiPk5vc3NvcyBjbGllbnRlcyBzYXRpc2ZlaXRvczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIndvdyBmYWRlSW5MZWZ0XCIgZGF0YS13b3ctZGVsYXk9XCIuNXNcIj5PIHF1ZSBub3Nzb3MgQ2xpZW50ZXMgZXN0w6NvIGRpemVuZG8/PC9oND5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnRlc3RpbW9uaWFsc1NsaWRlclNldHRpbmdzfSBjbGFzc05hbWU9XCJzbGljLWl0ZW0gd293IGZhZGVJblVwIHNsaWNrLWRvdHRlZFwiIGRhdGEtd293LWRlbGF5PVwiLjVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgVGVzdGltb25pYWxzRGF0YS50ZXN0aW1vbmlhbHMubWFwKCh0ZXN0aW1vbmlhbCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBrZXk9e3Rlc3RpbW9uaWFsLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57IHRlc3RpbW9uaWFsLmNvbnRlbnQgfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZXN0aW1vbmlhbC5pbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiYXV0aG9yLW5hbWUgY3VzdG9tLWZvbnRcIj57IHRlc3RpbW9uaWFsLm5hbWUgfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yLWRldGFpbHNcIj57IHRlc3RpbW9uaWFsLmRldGFpbHMgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8Tm9TU1I+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvTm9TU1I+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFscyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNsaWRlciIsImR5bmFtaWMiLCJTcGxpdCIsInNzciIsIk5vU1NSIiwiTW9kYWxWaWRlbyIsIlRlc3RpbW9uaWFsc0RhdGEiLCJ0ZXN0aW1vbmlhbHNTbGlkZXJTZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJUZXN0aW1vbmlhbHMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJlbGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJnZXRBdHRyaWJ1dGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiZGF0YS1iYWNrZ3JvdW5kIiwiZGF0YS1vdmVybGF5LWRhcmsiLCJvbkNsaWNrIiwic3BhbiIsImkiLCJoNiIsImRhdGEtd293LWRlbGF5IiwiaDQiLCJ0ZXN0aW1vbmlhbHMiLCJtYXAiLCJ0ZXN0aW1vbmlhbCIsInAiLCJjb250ZW50IiwiaW1nIiwic3JjIiwiYWx0IiwibmFtZSIsImRldGFpbHMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/About/Testimonials/index.jsx\n"));

/***/ })

});