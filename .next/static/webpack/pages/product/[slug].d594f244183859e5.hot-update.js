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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./components/index.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductDetails = function(param) {\n    var product = param.product, products = param.products;\n    var _this1 = _this;\n    _s();\n    var image = product.image, name = product.name, details = product.details, price = product.price;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref[0], setIndex = ref[1];\n    var ref1 = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_4__.useStateContext)(), incQty = ref1.incQty, decQty = ref1.decQty, qty = ref1.qty;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-detail-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(image && image[index]),\n                                    className: \"product-detail-image\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                    lineNumber: 17,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"small-images-container\",\n                                children: image === null || image === void 0 ? void 0 : image.map(function(item, i) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(item),\n                                        className: i === index ? 'small-image selected-image' : 'small-image',\n                                        onMouseEnter: function() {\n                                            return setIndex(i);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 21,\n                                        columnNumber: 15\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-detail-desc\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"reviews\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 33,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 34,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 35,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 36,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineStar, {}, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 37,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"(20)\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 39,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Details: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: details\n                            }, void 0, false, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"price\",\n                                children: [\n                                    \"$\",\n                                    price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"quantity\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Quantity: \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"quantity-desc\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"minus\",\n                                                onClick: decQty,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMinus, {}, void 0, false, {\n                                                    fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 56\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 47,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"num\",\n                                                onClick: \"\",\n                                                children: qty\n                                            }, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"plus\",\n                                                onClick: incQty,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlinePlus, {}, void 0, false, {\n                                                    fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 55\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"add-to-cart\",\n                                        onClick: \"\",\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"buy-now\",\n                                        onClick: \"\",\n                                        children: \"Buy Now\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"maylike-products-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"You may also like\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"marquee\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"maylike-products-container track\",\n                            children: products.map(function(item) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Product, {\n                                    product: item\n                                }, item._id, false, {\n                                    fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/pages/product/[slug].js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this));\n};\n_s(ProductDetails, \"RTuojg2KljAQglIbN7rasYktBNY=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_4__.useStateContext\n    ];\n});\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyxDQUFNO2dEQUFDWSxPQUFPLEVBQUVoQixNQUFNO3NJQUFHZCx5REFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3R0FHekRpQixDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBUzs7Z0hBQ3JCYSxDQUFNO3dDQUFDQyxJQUFJLEVBQUMsQ0FBUTt3Q0FBQ2QsU0FBUyxFQUFDLENBQWE7d0NBQUNZLE9BQU8sRUFBQyxDQUFFO2tEQUFDLENBRXpEOzs7Ozs7Z0hBQ0NDLENBQU07d0NBQUNDLElBQUksRUFBQyxDQUFRO3dDQUFDZCxTQUFTLEVBQUMsQ0FBUzt3Q0FBQ1ksT0FBTyxFQUFDLENBQUU7a0RBQUMsQ0FFckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLTGIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTBCOztnR0FDdENlLENBQUU7a0NBQUMsQ0FBaUI7Ozs7OztnR0FDcEJoQixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBUzs4R0FDckJELENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFrQztzQ0FDOUNYLFFBQVEsQ0FBQ2MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLElBQUk7OENBQ2hCLE1BQU0sK0RBQUxuQixnREFBTztvQ0FBZ0JHLE9BQU8sRUFBRWdCLElBQUk7bUNBQXZCQSxJQUFJLENBQUNZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEMsQ0FBQztHQXBFSzdCLGNBQWM7O1FBR2NELGtFQUFlOzs7S0FIM0NDLGNBQWM7O0FBb0dwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzP2RiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1cmxGb3IsIGNsaWVudCB9IGZyb20gXCIuLi8uLi9saWIvY2xpZW50XCI7XG5pbXBvcnQgeyBBaU91dGxpbmVNaW51cywgQWlPdXRsaW5lUGx1cywgQWlGaWxsU3RhciwgQWlPdXRsaW5lU3RhciB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoeyBwcm9kdWN0LCBwcm9kdWN0cyB9KSA9PiB7XG4gIGNvbnN0IHsgaW1hZ2UsIG5hbWUsIGRldGFpbHMsIHByaWNlIH0gPSBwcm9kdWN0O1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB7IGluY1F0eSwgZGVjUXR5LCBxdHkgfSA9IHVzZVN0YXRlQ29udGV4dCgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoaW1hZ2UgJiYgaW1hZ2VbaW5kZXhdKX0gY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtaW1hZ2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtaW1hZ2VzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2ltYWdlPy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKGl0ZW0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aSA9PT0gaW5kZXggPyAnc21hbGwtaW1hZ2Ugc2VsZWN0ZWQtaW1hZ2UnIDogJ3NtYWxsLWltYWdlJ31cbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEluZGV4KGkpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWRlc2NcIj5cbiAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld3NcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICAgIDxBaU91dGxpbmVTdGFyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPigyMCk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGg0PkRldGFpbHM6IDwvaDQ+XG4gICAgICAgICAgPHA+e2RldGFpbHN9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+JHtwcmljZX08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eVwiPlxuICAgICAgICAgICAgPGgzPlF1YW50aXR5OiA8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicXVhbnRpdHktZGVzY1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaW51c1wiIG9uQ2xpY2s9e2RlY1F0eX0+PEFpT3V0bGluZU1pbnVzIC8+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1cIiBvbkNsaWNrPScnPntxdHl9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbHVzXCIgb25DbGljaz17aW5jUXR5fT48QWlPdXRsaW5lUGx1cyAvPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFkZC10by1jYXJ0XCIgb25DbGljaz0nJz5cbiAgICAgICAgICAgICAgQWRkIHRvIENhcnRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnV5LW5vd1wiIG9uQ2xpY2s9Jyc+XG4gICAgICAgICAgICAgIEJ1eSBOb3dcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heWxpa2UtcHJvZHVjdHMtd3JhcHBlclwiPlxuICAgICAgICA8aDI+WW91IG1heSBhbHNvIGxpa2U8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcnF1ZWVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heWxpa2UtcHJvZHVjdHMtY29udGFpbmVyIHRyYWNrXCI+XG4gICAgICAgICAgICB7cHJvZHVjdHMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICA8UHJvZHVjdCBrZXk9e2l0ZW0uX2lkfSBwcm9kdWN0PXtpdGVtfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwcm9kdWN0XCJde1xuICAgIHNsdWcge1xuICAgICAgY3VycmVudFxuICAgIH1cbiAgfWA7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcbiAgY29uc3QgcGF0aHMgPSBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoe1xuICAgIHBhcmFtczoge1xuICAgICAgc2x1ZzogcHJvZHVjdC5zbHVnLmN1cnJlbnRcbiAgICB9XG4gIH0pKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogJ2Jsb2NraW5nJ1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInByb2R1Y3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJyR7c2x1Z30nXVswXWA7XG4gIGNvbnN0IHByb2R1Y3RzUXVlcnkgPSAnKltfdHlwZSA9PSBcInByb2R1Y3RcIl0nO1xuXG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChwcm9kdWN0c1F1ZXJ5KTtcbiAgY29uc29sZS5sb2coJ3p6eicsIHByb2R1Y3QpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcHJvZHVjdHMsIHByb2R1Y3QgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1cmxGb3IiLCJBaU91dGxpbmVNaW51cyIsIkFpT3V0bGluZVBsdXMiLCJBaUZpbGxTdGFyIiwiQWlPdXRsaW5lU3RhciIsIlByb2R1Y3QiLCJ1c2VTdGF0ZUNvbnRleHQiLCJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImltYWdlIiwibmFtZSIsImRldGFpbHMiLCJwcmljZSIsImluZGV4Iiwic2V0SW5kZXgiLCJpbmNRdHkiLCJkZWNRdHkiLCJxdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJtYXAiLCJpdGVtIiwiaSIsIm9uTW91c2VFbnRlciIsImgxIiwicCIsImg0IiwiaDMiLCJzcGFuIiwib25DbGljayIsImJ1dHRvbiIsInR5cGUiLCJoMiIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});