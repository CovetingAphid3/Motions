"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./components/InsightCard.jsx":
/*!************************************!*\
  !*** ./components/InsightCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\nconst InsightCard = (param)=>/*#__PURE__*/ {\n    let { imgUrl , title , subtitle , index  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_1__.fadeIn)(\"up\", \"spring\", index * 0.5, 1),\n        className: \"flex md:flex-row flex-col gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: \"planet-01\",\n                className: \"md:w-[270px] w-full h-[250px] rounded-[32px] object-cover\"\n            }, void 0, false, {\n                fileName: \"/home/tadiwa/repos/Motions/components/InsightCard.jsx\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 md:ml-[62px] flex flex-col max-w-[650px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"font-normal lg:text-[42px] text-[26px] text-white\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/home/tadiwa/repos/Motions/components/InsightCard.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white\",\n                                children: subtitle\n                            }, void 0, false, {\n                                fileName: \"/home/tadiwa/repos/Motions/components/InsightCard.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/tadiwa/repos/Motions/components/InsightCard.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/arrow.svg\",\n                            alt: \"arrow\",\n                            className: \"w-[40%] h-[40%] object-contain\"\n                        }, void 0, false, {\n                            fileName: \"/home/tadiwa/repos/Motions/components/InsightCard.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/tadiwa/repos/Motions/components/InsightCard.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tadiwa/repos/Motions/components/InsightCard.jsx\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tadiwa/repos/Motions/components/InsightCard.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_c = InsightCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InsightCard);\nvar _c;\n$RefreshReg$(_c, \"InsightCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luc2lnaHRDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUV1QztBQUVFO0FBRXpDLE1BQU1FLGNBQWMsdUJBQ2xCO1FBRG1CLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRTtXQUNyRCw4REFBQ0M7UUFDQ0MsVUFBVVAscURBQU1BLENBQUMsTUFBTSxVQUFVSyxRQUFRLEtBQUs7UUFDOUNHLFdBQVU7OzBCQUVWLDhEQUFDQztnQkFDQ0MsS0FBS1I7Z0JBQ0xTLEtBQUk7Z0JBQ0pILFdBQVU7Ozs7OzswQkFFWiw4REFBQ0Y7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDRjt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFHSixXQUFVOzBDQUNYTDs7Ozs7OzBDQUVILDhEQUFDVTtnQ0FBRUwsV0FBVTswQ0FDVko7Ozs7Ozs7Ozs7OztrQ0FJTCw4REFBQ0U7d0JBQ0NFLFdBQVU7a0NBRVYsNEVBQUNDOzRCQUNDQyxLQUFJOzRCQUNKQyxLQUFJOzRCQUNKSCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUliO0tBOUJEUDtBQWlDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0luc2lnaHRDYXJkLmpzeD9kOGVjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmltcG9ydCB7IGZhZGVJbiB9IGZyb20gJy4uL3V0aWxzL21vdGlvbic7XG5cbmNvbnN0IEluc2lnaHRDYXJkID0gKHsgaW1nVXJsLCB0aXRsZSwgc3VidGl0bGUsIGluZGV4IH0pID0+IChcbiAgPGRpdlxuICAgIHZhcmlhbnRzPXtmYWRlSW4oJ3VwJywgJ3NwcmluZycsIGluZGV4ICogMC41LCAxKX1cbiAgICBjbGFzc05hbWU9XCJmbGV4IG1kOmZsZXgtcm93IGZsZXgtY29sIGdhcC00XCJcbiAgPlxuICAgIDxpbWdcbiAgICAgIHNyYz17aW1nVXJsfVxuICAgICAgYWx0PVwicGxhbmV0LTAxXCJcbiAgICAgIGNsYXNzTmFtZT1cIm1kOnctWzI3MHB4XSB3LWZ1bGwgaC1bMjUwcHhdIHJvdW5kZWQtWzMycHhdIG9iamVjdC1jb3ZlclwiXG4gICAgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIG1kOm1sLVs2MnB4XSBmbGV4IGZsZXgtY29sIG1heC13LVs2NTBweF1cIj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIGxnOnRleHQtWzQycHhdIHRleHQtWzI2cHhdIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LVsxNnB4XSBmb250LW5vcm1hbCBsZzp0ZXh0LVsyMHB4XSB0ZXh0LVsxNHB4XSB0ZXh0LXNlY29uZGFyeS13aGl0ZVwiPlxuICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwibGc6ZmxleCBoaWRkZW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctWzEwMHB4XSBoLVsxMDBweF0gcm91bmRlZC1mdWxsIGJnLXRyYW5zcGFyZW50IGJvcmRlci1bMXB4XSBib3JkZXItd2hpdGVcIlxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2Fycm93LnN2Z1wiXG4gICAgICAgICAgYWx0PVwiYXJyb3dcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctWzQwJV0gaC1bNDAlXSBvYmplY3QtY29udGFpblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbnNpZ2h0Q2FyZDsiXSwibmFtZXMiOlsibW90aW9uIiwiZmFkZUluIiwiSW5zaWdodENhcmQiLCJpbWdVcmwiLCJ0aXRsZSIsInN1YnRpdGxlIiwiaW5kZXgiLCJkaXYiLCJ2YXJpYW50cyIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImg0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InsightCard.jsx\n"));

/***/ })

});