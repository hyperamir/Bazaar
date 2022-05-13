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

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cart */ \"./components/Cart.jsx\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Navbar = function() {\n    _s();\n    var ref = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)(), showCart = ref.showCart, setShowCart = ref.setShowCart, totalQuantities = ref.totalQuantities;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: \"Bazaar Headphones\"\n                }, void 0, false, {\n                    fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Navbar.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Navbar.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"cart-icon\",\n                onClick: function() {\n                    return setShowCart(function(prev) {\n                        return !prev;\n                    });\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineShopping, {}, void 0, false, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Navbar.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"cart-item-qty\",\n                        children: totalQuantities\n                    }, void 0, false, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Navbar.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Navbar.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            showCart && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Navbar.jsx\",\n                lineNumber: 19,\n                columnNumber: 20\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Navbar.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this));\n};\n_s(Navbar, \"mFEP3A/tk0dXv1fU+iqaINU4OQM=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRztBQUNzQjtBQUNPO0FBQ2hDOzs7QUFFekIsR0FBSyxDQUFDSyxNQUFNLEdBQUcsUUFDZixHQURxQixDQUFDOztJQUNwQixHQUFLLENBQThDRixHQUFpQixHQUFqQkEsc0VBQWUsSUFBMURHLFFBQVEsR0FBbUNILEdBQWlCLENBQTVERyxRQUFRLEVBQUVDLFdBQVcsR0FBc0JKLEdBQWlCLENBQWxESSxXQUFXLEVBQUVDLGVBQWUsR0FBS0wsR0FBaUIsQ0FBckNLLGVBQWU7SUFFOUMsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBa0I7O3dGQUM5QkMsQ0FBQztnQkFBQ0QsU0FBUyxFQUFDLENBQU07c0dBQ2hCVCxrREFBSTtvQkFBQ1csSUFBSSxFQUFDLENBQUc7OEJBQUMsQ0FBaUI7Ozs7Ozs7Ozs7O3dGQUVqQ0MsQ0FBTTtnQkFBQ0MsSUFBSSxFQUFDLENBQVE7Z0JBQUNKLFNBQVMsRUFBQyxDQUFXO2dCQUFDSyxPQUFPLEVBQUUsUUFBUTtvQkFBRlIsTUFBTSxDQUFOQSxXQUFXLENBQUNTLFFBQVEsQ0FBUkEsSUFBSTt3QkFBSSxNQUFNLEVBQUxBLElBQUk7Ozs7Z0dBQ2pGZCw2REFBaUI7Ozs7O2dHQUNqQmUsQ0FBSTt3QkFBQ1AsU0FBUyxFQUFDLENBQWU7a0NBQUVGLGVBQWU7Ozs7Ozs7Ozs7OztZQUVqREYsUUFBUSxnRkFBS0YsNkNBQUk7Ozs7Ozs7Ozs7O0FBR3hCLENBQUM7R0FmS0MsTUFBTTs7UUFDeUNGLGtFQUFlOzs7S0FEOURFLE1BQU07QUFpQlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci5qc3g/M2FhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVTaG9wcGluZyB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcbmltcG9ydCB7IHVzZVN0YXRlQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4vQ2FydFwiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc2hvd0NhcnQsIHNldFNob3dDYXJ0LCB0b3RhbFF1YW50aXRpZXMgfSA9IHVzZVN0YXRlQ29udGV4dCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGFpbmVyXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPkJhemFhciBIZWFkcGhvbmVzPC9MaW5rPlxuICAgICAgPC9wPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2FydC1pY29uXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0NhcnQocHJldiA9PiAhcHJldil9PlxuICAgICAgICA8QWlPdXRsaW5lU2hvcHBpbmcgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FydC1pdGVtLXF0eVwiPnt0b3RhbFF1YW50aXRpZXN9PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd0NhcnQgJiYgPENhcnQgLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQWlPdXRsaW5lU2hvcHBpbmciLCJ1c2VTdGF0ZUNvbnRleHQiLCJDYXJ0IiwiTmF2YmFyIiwic2hvd0NhcnQiLCJzZXRTaG93Q2FydCIsInRvdGFsUXVhbnRpdGllcyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJocmVmIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJwcmV2Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n");

/***/ })

});