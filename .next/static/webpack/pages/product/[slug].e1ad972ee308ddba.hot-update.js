"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./components/index.js\");\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductDetails = function(param) {\n    var product = param.product, products = param.products;\n    var _this1 = _this;\n    _s();\n    var image = product.image, name = product.name, details = product.details, price = product.price;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref[0], setIndex = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-detail-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(image && image[index])\n                                }, void 0, false, {\n                                    fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                    lineNumber: 15,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 14,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"small-images-container\",\n                                children: image === null || image === void 0 ? void 0 : image.map(function(item, i) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(item),\n                                        className: i === index ? 'small-image selected-image' : 'small-image',\n                                        onMouseEnter: function() {\n                                            return setIndex(i);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 19,\n                                        columnNumber: 15\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-detail-desc\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"reviews\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 31,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 32,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 33,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 34,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineStar, {}, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 35,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"(20)\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Details: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: details\n                            }, void 0, false, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"price\",\n                                children: [\n                                    \"$\",\n                                    price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"quantity\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Quantity: \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"quantity-desc\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"minus\",\n                                                onClick: \"\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineMinus, {}, void 0, false, {\n                                                    fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 50\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 45,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"num\",\n                                                onClick: \"\",\n                                                children: \"0\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 46,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"plus\",\n                                                onClick: \"\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlinePlus, {}, void 0, false, {\n                                                    fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 49\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 47,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"add-to-cart\",\n                                        onClick: \"\",\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"buy-now\",\n                                        onClick: \"\",\n                                        children: \"Buy Now\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"maylike-products-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"You may also like\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"marquee\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"maylike-products-container track\",\n                            children: products.map(function(item) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Product, {\n                                    product: item\n                                }, item._id, false, {\n                                    fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this));\n};\n_s(ProductDetails, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tEQUFDLENBRXpEOzs7Ozs7Z0hBQ0NDLENBQU07d0NBQUNDLElBQUksRUFBQyxDQUFRO3dDQUFDZCxTQUFTLEVBQUMsQ0FBUzt3Q0FBQ1ksT0FBTyxFQUFDLENBQUU7a0RBQUMsQ0FFckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLTGIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTBCOztnR0FDdENlLENBQUU7a0NBQUMsQ0FBaUI7Ozs7OztnR0FDcEJoQixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBUzs4R0FDckJELENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFrQztzQ0FDOUNSLFFBQVEsQ0FBQ1csR0FBRyxDQUFDQyxRQUFRLENBQVJBLElBQUk7OENBQ2hCLE1BQU0sK0RBQUxmLGdEQUFPO29DQUFnQkUsT0FBTyxFQUFFYSxJQUFJO21DQUF2QkEsSUFBSSxDQUFDWSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BDLENBQUM7R0FuRUsxQixjQUFjO0tBQWRBLGNBQWM7O0FBbUdwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzP2RiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1cmxGb3IsIGNsaWVudCB9IGZyb20gXCIuLi8uLi9saWIvY2xpZW50XCI7XG5pbXBvcnQgeyBBaU91dGxpbmVNaW51cywgQWlPdXRsaW5lUGx1cywgQWlGaWxsU3RhciwgQWlPdXRsaW5lU3RhciB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XG5cbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHsgcHJvZHVjdCwgcHJvZHVjdHMgfSkgPT4ge1xuICBjb25zdCB7IGltYWdlLCBuYW1lLCBkZXRhaWxzLCBwcmljZSB9ID0gcHJvZHVjdDtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17dXJsRm9yKGltYWdlICYmIGltYWdlW2luZGV4XSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC1pbWFnZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7aW1hZ2U/Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoaXRlbSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpID09PSBpbmRleCA/ICdzbWFsbC1pbWFnZSBzZWxlY3RlZC1pbWFnZScgOiAnc21hbGwtaW1hZ2UnfVxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SW5kZXgoaSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtZGVzY1wiPlxuICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3c1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cbiAgICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cbiAgICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cbiAgICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cbiAgICAgICAgICAgICAgPEFpT3V0bGluZVN0YXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+KDIwKTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDQ+RGV0YWlsczogPC9oND5cbiAgICAgICAgICA8cD57ZGV0YWlsc308L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj4ke3ByaWNlfTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5XCI+XG4gICAgICAgICAgICA8aDM+UXVhbnRpdHk6IDwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJxdWFudGl0eS1kZXNjXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1pbnVzXCIgb25DbGljaz0nJz48QWlPdXRsaW5lTWludXMgLz48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bVwiIG9uQ2xpY2s9Jyc+MDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGx1c1wiIG9uQ2xpY2s9Jyc+PEFpT3V0bGluZVBsdXMgLz48L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJhZGQtdG8tY2FydFwiIG9uQ2xpY2s9Jyc+XG4gICAgICAgICAgICAgIEFkZCB0byBDYXJ0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ1eS1ub3dcIiBvbkNsaWNrPScnPlxuICAgICAgICAgICAgICBCdXkgTm93XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXlsaWtlLXByb2R1Y3RzLXdyYXBwZXJcIj5cbiAgICAgICAgPGgyPllvdSBtYXkgYWxzbyBsaWtlPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJxdWVlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXlsaWtlLXByb2R1Y3RzLWNvbnRhaW5lciB0cmFja1wiPlxuICAgICAgICAgICAge3Byb2R1Y3RzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPFByb2R1Y3Qga2V5PXtpdGVtLl9pZH0gcHJvZHVjdD17aXRlbX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicHJvZHVjdFwiXXtcbiAgICBzbHVnIHtcbiAgICAgIGN1cnJlbnRcbiAgICB9XG4gIH1gO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XG4gIGNvbnN0IHBhdGhzID0gcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIHNsdWc6IHByb2R1Y3Quc2x1Zy5jdXJyZW50XG4gICAgfVxuICB9KSk7XG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6ICdibG9ja2luZydcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwcm9kdWN0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICcke3NsdWd9J11bMF1gO1xuICBjb25zdCBwcm9kdWN0c1F1ZXJ5ID0gJypbX3R5cGUgPT0gXCJwcm9kdWN0XCJdJztcblxuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2gocHJvZHVjdHNRdWVyeSk7XG4gIGNvbnNvbGUubG9nKCd6enonLCBwcm9kdWN0KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHByb2R1Y3RzLCBwcm9kdWN0IH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXJsRm9yIiwiQWlPdXRsaW5lTWludXMiLCJBaU91dGxpbmVQbHVzIiwiQWlGaWxsU3RhciIsIkFpT3V0bGluZVN0YXIiLCJQcm9kdWN0IiwiUHJvZHVjdERldGFpbHMiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJpbWFnZSIsIm5hbWUiLCJkZXRhaWxzIiwicHJpY2UiLCJpbmRleCIsInNldEluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwibWFwIiwiaXRlbSIsImkiLCJvbk1vdXNlRW50ZXIiLCJoMSIsInAiLCJoNCIsImgzIiwic3BhbiIsIm9uQ2xpY2siLCJidXR0b24iLCJ0eXBlIiwiaDIiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});