"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home/AboutBanner.js":
/*!****************************************!*\
  !*** ./components/Home/AboutBanner.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_src_images_aboutCenter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/src/images/aboutCenter.png */ \"./public/src/images/aboutCenter.png\");\n/* harmony import */ var _public_src_images_aboutLeft_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/src/images/aboutLeft.png */ \"./public/src/images/aboutLeft.png\");\n/* harmony import */ var _public_src_images_aboutRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/src/images/aboutRight.png */ \"./public/src/images/aboutRight.png\");\n/* harmony import */ var _public_src_images_aboutImage_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/src/images/aboutImage.png */ \"./public/src/images/aboutImage.png\");\nvar _this = undefined;\n\n\n\n\n\n\nvar AboutBanner = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-3 py-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: _public_src_images_aboutImage_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                alt: \"topBannerImage\",\n                className: \"\"\n            }, void 0, false, {\n                fileName: \"D:\\\\web\\\\dico\\\\components\\\\Home\\\\AboutBanner.js\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\web\\\\dico\\\\components\\\\Home\\\\AboutBanner.js\",\n            lineNumber: 11,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\web\\\\dico\\\\components\\\\Home\\\\AboutBanner.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, _this);\n};\n_c = AboutBanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutBanner);\nvar _c;\n$RefreshReg$(_c, \"AboutBanner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvQWJvdXRCYW5uZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQThCO0FBQzhCO0FBQ0o7QUFDRTtBQUNLO0FBRy9ELElBQU1LLFdBQVcsR0FBRyxXQUFNO0lBQ3RCLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXO2tCQUN0Qiw0RUFBQ0QsS0FBRztZQUFDQyxTQUFTLEVBQUMsYUFBYTtzQkFJeEIsNEVBQUNQLG1EQUFLO2dCQUFDUSxHQUFHLEVBQUVKLHlFQUFVO2dCQUFFSyxHQUFHLEVBQUMsZ0JBQWdCO2dCQUFDRixTQUFTLEVBQUMsRUFBRTs7Ozs7cUJBQUc7Ozs7O2lCQUMxRDs7Ozs7YUFDSixDQUNSO0NBQ0w7QUFYS0YsS0FBQUEsV0FBVztBQWFqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZS9BYm91dEJhbm5lci5qcz9iNzUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgY2VudGVyIGZyb20gJy4uLy4uL3B1YmxpYy9zcmMvaW1hZ2VzL2Fib3V0Q2VudGVyLnBuZydcclxuaW1wb3J0IGxlZnQgZnJvbSAnLi4vLi4vcHVibGljL3NyYy9pbWFnZXMvYWJvdXRMZWZ0LnBuZydcclxuaW1wb3J0IHJpZ2h0IGZyb20gJy4uLy4uL3B1YmxpYy9zcmMvaW1hZ2VzL2Fib3V0UmlnaHQucG5nJ1xyXG5pbXBvcnQgYWJvdXRJbWFnZSBmcm9tICcuLi8uLi9wdWJsaWMvc3JjL2ltYWdlcy9hYm91dEltYWdlLnBuZydcclxuXHJcblxyXG5jb25zdCBBYm91dEJhbm5lciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0zIHB5LTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXtsZWZ0fSBhbHQ9XCJ0b3BCYW5uZXJJbWFnZVwiIGNsYXNzTmFtZT0nbGVmdEltYWdlJyAvPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Y2VudGVyfSBhbHQ9XCJ0b3BCYW5uZXJJbWFnZVwiIGNsYXNzTmFtZT0nY2VudGVySW1hZ2UnIC8+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtyaWdodH0gYWx0PVwidG9wQmFubmVySW1hZ2VcIiBjbGFzc05hbWU9J3JpZ2h0SW1hZ2UnIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YWJvdXRJbWFnZX0gYWx0PVwidG9wQmFubmVySW1hZ2VcIiBjbGFzc05hbWU9JycgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRCYW5uZXI7Il0sIm5hbWVzIjpbIkltYWdlIiwiY2VudGVyIiwibGVmdCIsInJpZ2h0IiwiYWJvdXRJbWFnZSIsIkFib3V0QmFubmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Home/AboutBanner.js\n");

/***/ })

});