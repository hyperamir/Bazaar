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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": function() { return /* binding */ StateContext; },\n/* harmony export */   \"useStateContext\": function() { return /* binding */ useStateContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar StateContext = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showCart = ref[0], setShowCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), cartItems = ref1[0], setCartItems = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), totalPrice = ref2[0], setTotalPrice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), totalQuantities = ref3[0], setTotalQuantities = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), qty = ref4[0], setQty = ref4[1];\n    var onAdd = function(product, quantity) {\n        var checkProductInCart = cartItems.find(function(item) {\n            return item._id === product._id;\n        });\n        setTotalPrice(function(prev) {\n            return prev + product.price * quantity;\n        });\n        setTotalQuantities(function(prev) {\n            return prev + quantity;\n        });\n        if (checkProductInCart) {\n            var updatedCartItem = cartItems.map(function(cartProduct) {\n                if (cartProduct._id === product._id) return _objectSpread({}, cartProduct, {\n                    quantity: cartProduct.quantity + quantity\n                });\n            });\n            setCartItems(updatedCartItem);\n        } else {\n            product.quantity = quantity;\n            setCartItems(_toConsumableArray(cartItems).concat([\n                _objectSpread({}, product)\n            ]));\n        }\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"\".concat(qty, \" \").concat(product.name, \" added to the cart.\"));\n    };\n    var incQty = function() {\n        setQty(function(prev) {\n            return prev + 1;\n        });\n    };\n    var decQty = function() {\n        setQty(function(prev) {\n            if (prev - 1 < 1) return 1;\n            return prev - 1;\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            showCart: showCart,\n            cartItems: cartItems,\n            totalPrice: totalPrice,\n            totalQuantities: totalQuantities,\n            qty: qty,\n            incQty: incQty,\n            decQty: decQty,\n            onAdd: onAdd\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/amir/PROJECTS/React-practice/bazaar/context/StateContext.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_s(StateContext, \"p1CYYCNjfhYD1xTRqJtxsYapqoo=\");\n_c = StateContext;\nvar useStateContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);\n};\n_s1(useStateContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"StateContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQ0EsSUFBSSxHQUFHLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLDZFQUNIcEIsT0FBTyxDQUFDNkIsUUFBUTtRQUNmQyxLQUFLLEVBQUUsQ0FBQztZQUNOM0IsUUFBUSxFQUFSQSxRQUFRO1lBQ1JFLFNBQVMsRUFBVEEsU0FBUztZQUNURSxVQUFVLEVBQVZBLFVBQVU7WUFDVkUsZUFBZSxFQUFmQSxlQUFlO1lBQ2ZFLEdBQUcsRUFBSEEsR0FBRztZQUNIZ0IsTUFBTSxFQUFOQSxNQUFNO1lBQ05DLE1BQU0sRUFBTkEsTUFBTTtZQUNOZixLQUFLLEVBQUxBLEtBQUs7UUFDUCxDQUFDO2tCQUVBWCxRQUFROzs7Ozs7QUFHZixDQUFDO0dBeERZRCxZQUFZO0tBQVpBLFlBQVk7QUEwRGxCLEdBQUssQ0FBQzhCLGVBQWUsR0FBRyxRQUFRLEdBQUZwQyxDQUFDOztJQUFEQSxNQUFNLENBQU5BLGlEQUFVLENBQUNLLE9BQU87QUFBQSxDQUFDO0lBQTNDK0IsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcz9iMWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2hvd0NhcnQsIHNldFNob3dDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt0b3RhbFByaWNlLCBzZXRUb3RhbFByaWNlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt0b3RhbFF1YW50aXRpZXMsIHNldFRvdGFsUXVhbnRpdGllc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbcXR5LCBzZXRRdHldID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3Qgb25BZGQgPSAocHJvZHVjdCwgcXVhbnRpdHkpID0+IHtcbiAgICBjb25zdCBjaGVja1Byb2R1Y3RJbkNhcnQgPSBjYXJ0SXRlbXMuZmluZChpdGVtID0+IGl0ZW0uX2lkID09PSBwcm9kdWN0Ll9pZCk7XG5cbiAgICBzZXRUb3RhbFByaWNlKHByZXYgPT4gcHJldiArIHByb2R1Y3QucHJpY2UgKiBxdWFudGl0eSk7XG4gICAgc2V0VG90YWxRdWFudGl0aWVzKHByZXYgPT4gcHJldiArIHF1YW50aXR5KTtcblxuICAgIGlmIChjaGVja1Byb2R1Y3RJbkNhcnQpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbSA9IGNhcnRJdGVtcy5tYXAoY2FydFByb2R1Y3QgPT4ge1xuICAgICAgICBpZiAoY2FydFByb2R1Y3QuX2lkID09PSBwcm9kdWN0Ll9pZCkgcmV0dXJuIHtcbiAgICAgICAgICAuLi5jYXJ0UHJvZHVjdCxcbiAgICAgICAgICBxdWFudGl0eTogY2FydFByb2R1Y3QucXVhbnRpdHkgKyBxdWFudGl0eVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2R1Y3QucXVhbnRpdHkgPSBxdWFudGl0eTtcbiAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCB7IC4uLnByb2R1Y3QgfV0pO1xuICAgIH1cbiAgICB0b2FzdC5zdWNjZXNzKGAke3F0eX0gJHtwcm9kdWN0Lm5hbWV9IGFkZGVkIHRvIHRoZSBjYXJ0LmApO1xuXG4gIH1cblxuICBjb25zdCBpbmNRdHkgPSAoKSA9PiB7XG4gICAgc2V0UXR5KHByZXYgPT4gcHJldiArIDEpO1xuICB9XG5cbiAgY29uc3QgZGVjUXR5ID0gKCkgPT4ge1xuICAgIHNldFF0eShwcmV2ID0+IHtcbiAgICAgIGlmIChwcmV2IC0gMSA8IDEpIHJldHVybiAxO1xuICAgICAgcmV0dXJuIHByZXYgLSAxO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgc2hvd0NhcnQsXG4gICAgICAgIGNhcnRJdGVtcyxcbiAgICAgICAgdG90YWxQcmljZSxcbiAgICAgICAgdG90YWxRdWFudGl0aWVzLFxuICAgICAgICBxdHksXG4gICAgICAgIGluY1F0eSxcbiAgICAgICAgZGVjUXR5LFxuICAgICAgICBvbkFkZFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVN0YXRlQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQ29udGV4dCk7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRvYXN0IiwiQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsImNoaWxkcmVuIiwic2hvd0NhcnQiLCJzZXRTaG93Q2FydCIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsInRvdGFsUHJpY2UiLCJzZXRUb3RhbFByaWNlIiwidG90YWxRdWFudGl0aWVzIiwic2V0VG90YWxRdWFudGl0aWVzIiwicXR5Iiwic2V0UXR5Iiwib25BZGQiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJjaGVja1Byb2R1Y3RJbkNhcnQiLCJmaW5kIiwiaXRlbSIsIl9pZCIsInByZXYiLCJwcmljZSIsInVwZGF0ZWRDYXJ0SXRlbSIsIm1hcCIsImNhcnRQcm9kdWN0Iiwic3VjY2VzcyIsIm5hbWUiLCJpbmNRdHkiLCJkZWNRdHkiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU3RhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ })

});