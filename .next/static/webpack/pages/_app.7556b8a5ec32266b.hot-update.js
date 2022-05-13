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

/***/ "./components/Cart.jsx":
/*!*****************************!*\
  !*** ./components/Cart.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/StateContext */ \"./context/StateContext.js\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Cart = function() {\n    _s();\n    var ref = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext)(), cartItems = ref.cartItems, totalPrice = ref.totalPrice, totalQuantities = ref.totalQuantities, setShowCart = ref.setShowCart;\n    var cartRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    console.log('xxx', cartRef);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cart-wrapper\",\n        ref: cartRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"cart-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                className: \"cart-heading\",\n                onClick: function() {\n                    return setShowCart(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineLeft, {}, void 0, false, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Cart.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"heading\",\n                        children: \"Your Cart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Cart.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"cart-num-items\",\n                        children: [\n                            \"(\",\n                            totalQuantities,\n                            \" items)\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Cart.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Cart.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Cart.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/components/Cart.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this));\n};\n_s(Cart, \"j9earPbALgCC2oXXD2Lzc5Rwqtw=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateContext\n    ];\n});\n_c = Cart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ1Q7QUFDb0U7QUFDaEQ7QUFDYjtBQUNzQjtBQUNuQjs7O0FBRXRDLEdBQUssQ0FBQ1csSUFBSSxHQUFHLFFBQ2IsR0FEbUIsQ0FBQzs7SUFDbEIsR0FBSyxDQUEyREYsR0FBaUIsR0FBakJBLHNFQUFlLElBQXZFRyxTQUFTLEdBQStDSCxHQUFpQixDQUF6RUcsU0FBUyxFQUFFQyxVQUFVLEdBQW1DSixHQUFpQixDQUE5REksVUFBVSxFQUFFQyxlQUFlLEdBQWtCTCxHQUFpQixDQUFsREssZUFBZSxFQUFFQyxXQUFXLEdBQUtOLEdBQWlCLENBQWpDTSxXQUFXO0lBQzNELEdBQUssQ0FBQ0MsT0FBTyxHQUFHZiw2Q0FBTTtJQUV0QmdCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUssTUFBQ0YsT0FBTztJQUV6QixNQUFNLDZFQUNIRyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFjO1FBQUNDLEdBQUcsRUFBRUwsT0FBTzs4RkFDdkNHLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWdCO2tHQUM1QkUsQ0FBTTtnQkFDTEMsSUFBSSxFQUFDLENBQVE7Z0JBQ2JILFNBQVMsRUFBQyxDQUFjO2dCQUN4QkksT0FBTyxFQUFFLFFBQVE7b0JBQUZULE1BQU0sQ0FBTkEsV0FBVyxDQUFDLEtBQUs7OztnR0FFL0JWLHlEQUFhOzs7OztnR0FDYm9CLENBQUk7d0JBQUNMLFNBQVMsRUFBQyxDQUFTO2tDQUFDLENBQVM7Ozs7OztnR0FDbENLLENBQUk7d0JBQUNMLFNBQVMsRUFBQyxDQUFnQjs7NEJBQUMsQ0FBQzs0QkFBQ04sZUFBZTs0QkFBQyxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwRSxDQUFDO0dBckJLSCxJQUFJOztRQUN3REYsa0VBQWU7OztLQUQzRUUsSUFBSTtBQXVCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FydC5qc3g/YTJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVNaW51cywgQWlPdXRsaW5lUGx1cywgQWlPdXRsaW5lTGVmdCwgQWlPdXRsaW5lU2hvcHBpbmcgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IFRpRGVsZXRlT3V0bGluZSB9IGZyb20gJ3JlYWN0LWljb25zL3RpJztcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCIuLi9saWIvY2xpZW50XCI7XG5cbmNvbnN0IENhcnQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2FydEl0ZW1zLCB0b3RhbFByaWNlLCB0b3RhbFF1YW50aXRpZXMsIHNldFNob3dDYXJ0IH0gPSB1c2VTdGF0ZUNvbnRleHQoKTtcbiAgY29uc3QgY2FydFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnNvbGUubG9nKCd4eHgnLGNhcnRSZWYpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtd3JhcHBlclwiIHJlZj17Y2FydFJlZn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJ0LWhlYWRpbmdcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dDYXJ0KGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBaU91dGxpbmVMZWZ0Lz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+WW91ciBDYXJ0PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcnQtbnVtLWl0ZW1zXCI+KHt0b3RhbFF1YW50aXRpZXN9IGl0ZW1zKTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJMaW5rIiwiQWlPdXRsaW5lTWludXMiLCJBaU91dGxpbmVQbHVzIiwiQWlPdXRsaW5lTGVmdCIsIkFpT3V0bGluZVNob3BwaW5nIiwiVGlEZWxldGVPdXRsaW5lIiwidG9hc3QiLCJ1c2VTdGF0ZUNvbnRleHQiLCJ1cmxGb3IiLCJDYXJ0IiwiY2FydEl0ZW1zIiwidG90YWxQcmljZSIsInRvdGFsUXVhbnRpdGllcyIsInNldFNob3dDYXJ0IiwiY2FydFJlZiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cart.jsx\n");

/***/ })

});