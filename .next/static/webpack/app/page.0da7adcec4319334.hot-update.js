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

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n\n\nconst Navbar = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].xPaddings, \" py-8 relative\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-[50%] inset-0 gradient-01\"\n            }, void 0, false, {\n                fileName: \"/home/tadiwa/repos/Motions/components/Navbar.jsx\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerWidth, \" mx-auto flex justify-between gap-8\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/search.svg\",\n                        alt: \"search\",\n                        className: \"w-[24px] h-[24px] object-contain\"\n                    }, void 0, false, {\n                        fileName: \"/home/tadiwa/repos/Motions/components/Navbar.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-extrabold text-[24px] leading-[30.24px] text-crimson\",\n                        children: \"Travel Astro\"\n                    }, void 0, false, {\n                        fileName: \"/home/tadiwa/repos/Motions/components/Navbar.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/menu.svg\",\n                        alt: \"menu\",\n                        className: \"w-[24px] h-[24px] object-contain\"\n                    }, void 0, false, {\n                        fileName: \"/home/tadiwa/repos/Motions/components/Navbar.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tadiwa/repos/Motions/components/Navbar.jsx\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tadiwa/repos/Motions/components/Navbar.jsx\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, undefined);\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFK0I7QUFFL0IsTUFBTUMsU0FBUyxrQkFDYiw4REFBQ0M7UUFBSUMsV0FBVyxHQUFvQixPQUFqQkgseURBQWdCLEVBQUM7OzBCQUNsQyw4REFBQ0s7Z0JBQUlGLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0U7Z0JBQUlGLFdBQVcsR0FBcUIsT0FBbEJILDBEQUFpQixFQUFDOztrQ0FDbkMsOERBQUNPO3dCQUNDQyxLQUFJO3dCQUNKQyxLQUFJO3dCQUNKTixXQUFVOzs7Ozs7a0NBRVosOERBQUNPO3dCQUFHUCxXQUFVO2tDQUE0RDs7Ozs7O2tDQUcxRSw4REFBQ0k7d0JBQ0NDLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pOLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWZaRjtBQXFCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci5qc3g/M2FhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IChcbiAgPG5hdiBjbGFzc05hbWU9e2Ake3N0eWxlcy54UGFkZGluZ3N9IHB5LTggcmVsYXRpdmVgfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctWzUwJV0gaW5zZXQtMCBncmFkaWVudC0wMVwiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbm5lcldpZHRofSBteC1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGdhcC04YH0+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIi9zZWFyY2guc3ZnXCJcbiAgICAgICAgYWx0PVwic2VhcmNoXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1bMjRweF0gaC1bMjRweF0gb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgLz5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LVsyNHB4XSBsZWFkaW5nLVszMC4yNHB4XSB0ZXh0LWNyaW1zb25cIj5cbiAgICAgICAgVHJhdmVsIEFzdHJvXG4gICAgICA8L2gyPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCIvbWVudS5zdmdcIlxuICAgICAgICBhbHQ9XCJtZW51XCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1bMjRweF0gaC1bMjRweF0gb2JqZWN0LWNvbnRhaW5cIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiTmF2YmFyIiwibmF2IiwiY2xhc3NOYW1lIiwieFBhZGRpbmdzIiwiZGl2IiwiaW5uZXJXaWR0aCIsImltZyIsInNyYyIsImFsdCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n"));

/***/ })

});