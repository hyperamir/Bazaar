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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/StateContext */ \"./context/StateContext.js\");\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Navbar = function() {\n    _s();\n    var ref = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)(), showCart = ref.showCart, setShowCart = ref.setShowCart, totalQuantities = ref.totalQuantities;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: \"Bazaar Headphones\"\n                }, void 0, false, {\n                    fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Navbar.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Navbar.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"cart-icon\",\n                onClick: setShowCart(true),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineShopping, {}, void 0, false, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Navbar.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"cart-item-qty\",\n                        children: totalQuantities\n                    }, void 0, false, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Navbar.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Navbar.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Navbar.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this));\n};\n_s(Navbar, \"mFEP3A/tk0dXv1fU+iqaINU4OQM=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUNHO0FBQ3NCO0FBQ087OztBQUV6RCxHQUFLLENBQUNJLE1BQU0sR0FBRyxRQUNmLEdBRHFCLENBQUM7O0lBQ3BCLEdBQUssQ0FBOENELEdBQWlCLEdBQWpCQSxzRUFBZSxJQUExREUsUUFBUSxHQUFtQ0YsR0FBaUIsQ0FBNURFLFFBQVEsRUFBRUMsV0FBVyxHQUFzQkgsR0FBaUIsQ0FBbERHLFdBQVcsRUFBRUMsZUFBZSxHQUFLSixHQUFpQixDQUFyQ0ksZUFBZTtJQUU5QyxNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFrQjs7d0ZBQzlCQyxDQUFDO2dCQUFDRCxTQUFTLEVBQUMsQ0FBTTtzR0FDaEJSLGtEQUFJO29CQUFDVSxJQUFJLEVBQUMsQ0FBRzs4QkFBQyxDQUFpQjs7Ozs7Ozs7Ozs7d0ZBRWpDQyxDQUFNO2dCQUFDQyxJQUFJLEVBQUMsQ0FBUTtnQkFBQ0osU0FBUyxFQUFDLENBQVc7Z0JBQUNLLE9BQU8sRUFBRVIsV0FBVyxDQUFDLElBQUk7O2dHQUNsRUosNkRBQWlCOzs7OztnR0FDakJhLENBQUk7d0JBQUNOLFNBQVMsRUFBQyxDQUFlO2tDQUFFRixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEQsQ0FBQztHQWRLSCxNQUFNOztRQUN5Q0Qsa0VBQWU7OztLQUQ5REMsTUFBTTtBQWdCWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzeD8zYWFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEFpT3V0bGluZVNob3BwaW5nIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgeyBzaG93Q2FydCwgc2V0U2hvd0NhcnQsIHRvdGFsUXVhbnRpdGllcyB9ID0gdXNlU3RhdGVDb250ZXh0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb250YWluZXJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgPExpbmsgaHJlZj0nLyc+QmF6YWFyIEhlYWRwaG9uZXM8L0xpbms+XG4gICAgICA8L3A+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjYXJ0LWljb25cIiBvbkNsaWNrPXtzZXRTaG93Q2FydCh0cnVlKX0+XG4gICAgICAgIDxBaU91dGxpbmVTaG9wcGluZyAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW0tcXR5XCI+e3RvdGFsUXVhbnRpdGllc308L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJBaU91dGxpbmVTaG9wcGluZyIsInVzZVN0YXRlQ29udGV4dCIsIk5hdmJhciIsInNob3dDYXJ0Iiwic2V0U2hvd0NhcnQiLCJ0b3RhbFF1YW50aXRpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaHJlZiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n");

/***/ })

});