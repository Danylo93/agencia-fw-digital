"use strict";
exports.id = 421;
exports.ids = [421];
exports.modules = {

/***/ 421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ works)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Navbar/Navbar.jsx + 1 modules
var Navbar = __webpack_require__(9979);
// EXTERNAL MODULE: ./src/components/Footer/Footer.jsx
var Footer = __webpack_require__(2666);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/data/WorksHeader.json
const WorksHeader_namespaceObject = JSON.parse('{"r9":"My amazing works","Q4":"Creative way to showcase your works at their absolute best.","Ik":"Works"}');
;// CONCATENATED MODULE: ./src/components/WorksHeader/index.jsx



const Header = ({ headerRef  })=>{
    (0,external_react_.useEffect)(()=>{
        window.onscroll = ()=>{
            let scrolled = window.pageYOffset;
            if (headerRef.current) {
                let caption = headerRef.current.querySelector(".caption");
                let parlx = headerRef.current.querySelector(".parlx");
                if (caption) {
                    caption.style.transform = "translate3d(0, " + -(scrolled * 0.20) + "px, 0)";
                    caption.style.opacity = 1 - scrolled / 600;
                }
                if (parlx) {
                    parlx.style.transform = "translate3d(0, " + -(scrolled * 0.20) + "px, 0)";
                    parlx.style.opacity = 1 - scrolled / 600;
                }
            }
        };
    }, [
        headerRef
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "works-header fixed-slider hfixd valign",
        ref: headerRef,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-lg-9 col-md-11 static",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "capt mt-50",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "parlx",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "custom-font",
                                        children: WorksHeader_namespaceObject.r9
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: WorksHeader_namespaceObject.Q4
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "bactxt custom-font valign",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "full-width",
                                    children: WorksHeader_namespaceObject.Ik
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const WorksHeader = (Header);

;// CONCATENATED MODULE: ./src/layouts/works.jsx
/* eslint-disable @next/next/no-css-tags */ 





const WorksLayout = ({ children , footerClass  })=>{
    const { 0: marginTop , 1: setMarginTop  } = (0,external_react_.useState)(0);
    const navbarRef = (0,external_react_.useRef)(null);
    const logoRef = (0,external_react_.useRef)(null);
    const headerRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        if (headerRef.current) setMarginTop(headerRef.current.offsetHeight);
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
        else navbar.classList.remove("nav-scroll");
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) navbar.classList.add("nav-scroll");
            else navbar.classList.remove("nav-scroll");
        });
    }, [
        navbarRef
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/style.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/assets/css/base.css"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {
                navbarRef: navbarRef,
                logoRef: logoRef
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(WorksHeader, {
                headerRef: headerRef
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "main-content",
                style: {
                    marginTop: marginTop || 0 + "px"
                },
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        classText: footerClass
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const works = (WorksLayout);


/***/ })

};
;