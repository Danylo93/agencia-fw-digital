"use strict";
exports.id = 754;
exports.ids = [754];
exports.modules = {

/***/ 9296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createLoop)
/* harmony export */ });
function createLoop(clientsRef) {
    if (!clientsRef) return;
    let clientsElem = clientsRef.current;
    if (clientsElem) {
        let currentPosition = 0;
        let LOOP = ()=>{
            if (currentPosition <= -51) currentPosition = -33;
            else currentPosition -= 0.035;
            let translate = `translateX(${currentPosition}%)`;
            clientsElem.style.transform = translate;
        };
        let clientsLoop = setInterval(LOOP, 10);
        clientsElem.addEventListener("mouseover", ()=>clearInterval(clientsLoop));
        clientsElem.addEventListener("mouseout", ()=>clientsLoop = setInterval(LOOP, 10));
    }
}


/***/ }),

/***/ 9466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);


const NoSsr = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.children
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.resolve(NoSsr), {
    ssr: false
}));


/***/ })

};
;