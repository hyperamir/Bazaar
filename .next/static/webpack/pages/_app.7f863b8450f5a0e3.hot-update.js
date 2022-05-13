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

/***/ "./context/StateContext.js":
/*!*********************************!*\
  !*** ./context/StateContext.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar StateContext = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showCart = ref[0], setShowCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = ref1[0], setCartItems = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalPrice = ref2[0], setTotalPrice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalQuantities = ref3[0], setTotalQuantities = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), qty = ref4[0], setQty = ref4[1];\n    var foundProduct;\n    var index;\n    var toggleCartItemQuantity = function(id, value) {\n        foundProduct = cartItems.find(function(item) {\n            return item._id === id;\n        });\n        index = cartItems.findIndex(function(product) {\n            return product._id === id;\n        });\n        if (value === 'inc') {\n            setCartItems(_toConsumableArray(cartItems).concat([\n                _objectSpread({}, foundProduct, {\n                    quantity: foundProduct.quantity + 1\n                })\n            ]));\n            setTotalPrice(function(prev) {\n                return prev + foundProduct.price;\n            });\n            setTotalQuantities(function(prev) {\n                return prev + 1;\n            });\n        } else if (value === 'dec') {\n            if (foundProduct.quantity > 1) {\n                setCartItems(_toConsumableArray(cartItems).concat([\n                    _objectSpread({}, foundProduct, {\n                        quantity: foundProduct.quantity - 1\n                    })\n                ]));\n                setTotalPrice(function(prev) {\n                    return prev - foundProduct.price;\n                });\n                setTotalQuantities(function(prev) {\n                    return prev - 1;\n                });\n            }\n        }\n    };\n    var onAdd = function(product, quantity) {\n        var checkProductInCart = cartItems.find(function(item) {\n            return item._id === product._id;\n        });\n        setTotalPrice(function(prev) {\n            return prev + product.price * quantity;\n        });\n        setTotalQuantities(function(prev) {\n            return prev + quantity;\n        });\n        if (checkProductInCart) {\n            var updatedCartItem = cartItems.map(function(cartProduct) {\n                if (cartProduct._id === product._id) return _objectSpread({}, cartProduct, {\n                    quantity: cartProduct.quantity + quantity\n                });\n            });\n            setCartItems(updatedCartItem);\n        } else {\n            product.quantity = quantity;\n            setCartItems(_toConsumableArray(cartItems).concat([\n                _objectSpread({}, product)\n            ]));\n        }\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"\".concat(qty, \" \").concat(product.name, \" added to the cart.\"));\n    };\n    var incQty = function() {\n        setQty(function(prev) {\n            return prev + 1;\n        });\n    };\n    var decQty = function() {\n        setQty(function(prev) {\n            if (prev - 1 < 1) return 1;\n            return prev - 1;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            showCart: showCart,\n            setShowCart: setShowCart,\n            cartItems: cartItems,\n            totalPrice: totalPrice,\n            totalQuantities: totalQuantities,\n            qty: qty,\n            incQty: incQty,\n            decQty: decQty,\n            onAdd: onAdd\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/context/StateContext.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, _this));\n};\n_s(StateContext, \"KihS6PmrKTQEzGuhoGAbmjGjdWo=\");\n_c = StateContext;\nvar useStateContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);\n};\n_s1(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StateContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQUNVLE1BQU0sR0FBRyxRQUNqQixHQUR1QixDQUFDO1FBQ3BCdEIsTUFBTSxDQUFDWSxRQUFRLENBQVJBLElBQUksRUFBSSxDQUFDO1lBQ2QsRUFBRSxFQUFFQSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUNBLElBQUksR0FBRyxDQUFDO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDSHhCLE9BQU8sQ0FBQ21DLFFBQVE7UUFDZmxCLEtBQUssRUFBRSxDQUFDO1lBQ05kLFFBQVEsRUFBUkEsUUFBUTtZQUNSQyxXQUFXLEVBQVhBLFdBQVc7WUFDWEMsU0FBUyxFQUFUQSxTQUFTO1lBQ1RFLFVBQVUsRUFBVkEsVUFBVTtZQUNWRSxlQUFlLEVBQWZBLGVBQWU7WUFDZkUsR0FBRyxFQUFIQSxHQUFHO1lBQ0hzQixNQUFNLEVBQU5BLE1BQU07WUFDTkMsTUFBTSxFQUFOQSxNQUFNO1lBQ05SLEtBQUssRUFBTEEsS0FBSztRQUNQLENBQUM7a0JBRUF4QixRQUFROzs7Ozs7QUFHZixDQUFDO0dBN0VZRCxZQUFZO0tBQVpBLFlBQVk7QUErRWxCLEdBQUssQ0FBQ21DLGVBQWUsR0FBRyxRQUFRLEdBQUZ6QyxDQUFDOztJQUFEQSxNQUFNLENBQU5BLGlEQUFVLENBQUNLLE9BQU87QUFBQSxDQUFDO0lBQTNDb0MsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcz9iMWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2hvd0NhcnQsIHNldFNob3dDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RvdGFsUHJpY2UsIHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0b3RhbFF1YW50aXRpZXMsIHNldFRvdGFsUXVhbnRpdGllc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3F0eSwgc2V0UXR5XSA9IHVzZVN0YXRlKDEpO1xuXG4gIGxldCBmb3VuZFByb2R1Y3Q7XG4gIGxldCBpbmRleDtcblxuICBjb25zdCB0b2dnbGVDYXJ0SXRlbVF1YW50aXR5ID0gKGlkLCB2YWx1ZSkgPT4ge1xuICAgIGZvdW5kUHJvZHVjdCA9IGNhcnRJdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5faWQgPT09IGlkKTtcbiAgICBpbmRleCA9IGNhcnRJdGVtcy5maW5kSW5kZXgocHJvZHVjdCA9PiBwcm9kdWN0Ll9pZCA9PT0gaWQpO1xuXG4gICAgaWYgKHZhbHVlID09PSAnaW5jJykge1xuICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXMsIHsgLi4uZm91bmRQcm9kdWN0LCBxdWFudGl0eTogZm91bmRQcm9kdWN0LnF1YW50aXR5ICsgMSB9XSk7XG4gICAgICBzZXRUb3RhbFByaWNlKHByZXYgPT4gcHJldiArIGZvdW5kUHJvZHVjdC5wcmljZSk7XG4gICAgICBzZXRUb3RhbFF1YW50aXRpZXMocHJldiA9PiBwcmV2ICsgMSlcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZGVjJykge1xuICAgICAgaWYgKGZvdW5kUHJvZHVjdC5xdWFudGl0eSA+IDEpIHtcbiAgICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXMsIHsgLi4uZm91bmRQcm9kdWN0LCBxdWFudGl0eTogZm91bmRQcm9kdWN0LnF1YW50aXR5IC0gMSB9XSk7XG4gICAgICAgIHNldFRvdGFsUHJpY2UocHJldiA9PiBwcmV2IC0gZm91bmRQcm9kdWN0LnByaWNlKTtcbiAgICAgICAgc2V0VG90YWxRdWFudGl0aWVzKHByZXYgPT4gcHJldiAtIDEpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25BZGQgPSAocHJvZHVjdCwgcXVhbnRpdHkpID0+IHtcbiAgICBjb25zdCBjaGVja1Byb2R1Y3RJbkNhcnQgPSBjYXJ0SXRlbXMuZmluZChpdGVtID0+IGl0ZW0uX2lkID09PSBwcm9kdWN0Ll9pZCk7XG5cbiAgICBzZXRUb3RhbFByaWNlKHByZXYgPT4gcHJldiArIHByb2R1Y3QucHJpY2UgKiBxdWFudGl0eSk7XG4gICAgc2V0VG90YWxRdWFudGl0aWVzKHByZXYgPT4gcHJldiArIHF1YW50aXR5KTtcblxuICAgIGlmIChjaGVja1Byb2R1Y3RJbkNhcnQpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbSA9IGNhcnRJdGVtcy5tYXAoY2FydFByb2R1Y3QgPT4ge1xuICAgICAgICBpZiAoY2FydFByb2R1Y3QuX2lkID09PSBwcm9kdWN0Ll9pZCkgcmV0dXJuIHtcbiAgICAgICAgICAuLi5jYXJ0UHJvZHVjdCxcbiAgICAgICAgICBxdWFudGl0eTogY2FydFByb2R1Y3QucXVhbnRpdHkgKyBxdWFudGl0eVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2R1Y3QucXVhbnRpdHkgPSBxdWFudGl0eTtcbiAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCB7IC4uLnByb2R1Y3QgfV0pO1xuICAgIH1cbiAgICB0b2FzdC5zdWNjZXNzKGAke3F0eX0gJHtwcm9kdWN0Lm5hbWV9IGFkZGVkIHRvIHRoZSBjYXJ0LmApO1xuXG4gIH1cblxuICBjb25zdCBpbmNRdHkgPSAoKSA9PiB7XG4gICAgc2V0UXR5KHByZXYgPT4gcHJldiArIDEpO1xuICB9XG5cbiAgY29uc3QgZGVjUXR5ID0gKCkgPT4ge1xuICAgIHNldFF0eShwcmV2ID0+IHtcbiAgICAgIGlmIChwcmV2IC0gMSA8IDEpIHJldHVybiAxO1xuICAgICAgcmV0dXJuIHByZXYgLSAxO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgc2hvd0NhcnQsXG4gICAgICAgIHNldFNob3dDYXJ0LFxuICAgICAgICBjYXJ0SXRlbXMsXG4gICAgICAgIHRvdGFsUHJpY2UsXG4gICAgICAgIHRvdGFsUXVhbnRpdGllcyxcbiAgICAgICAgcXR5LFxuICAgICAgICBpbmNRdHksXG4gICAgICAgIGRlY1F0eSxcbiAgICAgICAgb25BZGRcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VTdGF0ZUNvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KENvbnRleHQpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2FzdCIsIkNvbnRleHQiLCJTdGF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsInNob3dDYXJ0Iiwic2V0U2hvd0NhcnQiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJ0b3RhbFByaWNlIiwic2V0VG90YWxQcmljZSIsInRvdGFsUXVhbnRpdGllcyIsInNldFRvdGFsUXVhbnRpdGllcyIsInF0eSIsInNldFF0eSIsImZvdW5kUHJvZHVjdCIsImluZGV4IiwidG9nZ2xlQ2FydEl0ZW1RdWFudGl0eSIsImlkIiwidmFsdWUiLCJmaW5kIiwiaXRlbSIsIl9pZCIsImZpbmRJbmRleCIsInByb2R1Y3QiLCJxdWFudGl0eSIsInByZXYiLCJwcmljZSIsIm9uQWRkIiwiY2hlY2tQcm9kdWN0SW5DYXJ0IiwidXBkYXRlZENhcnRJdGVtIiwibWFwIiwiY2FydFByb2R1Y3QiLCJzdWNjZXNzIiwibmFtZSIsImluY1F0eSIsImRlY1F0eSIsIlByb3ZpZGVyIiwidXNlU3RhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});