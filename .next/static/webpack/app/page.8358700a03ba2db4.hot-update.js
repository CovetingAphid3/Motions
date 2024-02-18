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

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"socials\": function() { return /* binding */ socials; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"world-1\",\n        imgUrl: \"/water.jpg\",\n        title: \"Enchanting Destinations\"\n    },\n    {\n        id: \"world-2\",\n        imgUrl: \"/road.jpg\",\n        title: \"Mystical Getaways\"\n    },\n    {\n        id: \"world-3\",\n        imgUrl: \"/planet-03.png\",\n        title: \"Astro Discoveries\"\n    },\n    {\n        id: \"world-4\",\n        imgUrl: \"/coast.jpg\",\n        title: \"Tropical Escapes\"\n    },\n    {\n        id: \"world-5\",\n        imgUrl: \"/city.jpg\",\n        title: \"Urban Adventures\"\n    }\n];\nconst startingFeatures = [\n    \"Explore captivating worlds and find your perfect travel escape\",\n    \"Embark on your journey with a travel blessing for a safe and joyful adventure\",\n    \"No need to hesitate, dive into the exploration and savor the excitement\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/vrpano.svg\",\n        title: \"New Horizons Await\",\n        subtitle: \"Discover fresh destinations with our latest update, offering new and exciting places for you to explore on your travels.\"\n    },\n    {\n        imgUrl: \"/headset.svg\",\n        title: \"Immersive Experiences\",\n        subtitle: \"Experience travel like never before. Our latest update brings you closer to the heart of each destination for an immersive journey.\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/woman.jpg\",\n        title: \"Astro Travel Launch Captivates Travel Enthusiasts\",\n        subtitle: \"Experience the buzz as the launch of Travel Astro captivates travelers worldwide. Unleash the spirit of exploration!\"\n    },\n    {\n        imgUrl: \"/nature.jpg\",\n        title: \"7 Tips for Mastering the Art of Travel\",\n        subtitle: \"Unlock the secrets to becoming a travel pro with these 7 essential tips. Navigate the globe with confidence and expertise.\"\n    },\n    {\n        imgUrl: \"/houses.jpg\",\n        title: \"One Platform, Countless Adventures\",\n        subtitle: \"Embark on a virtual journey to explore the beauty of the world. Our platform opens doors to endless travel possibilities from the comfort of your home.\"\n    }\n];\nconst socials = [\n    {\n        name: \"twitter\",\n        url: \"/twitter.svg\"\n    },\n    {\n        name: \"linkedin\",\n        url: \"/linkedin.svg\"\n    },\n    {\n        name: \"instagram\",\n        url: \"/instagram.svg\"\n    },\n    {\n        name: \"facebook\",\n        url: \"/facebook.svg\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxnQkFBZ0I7SUFDM0I7UUFDRUMsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7Q0FDRCxDQUFDO0FBRUssTUFBTUMsbUJBQW1CO0lBQzlCO0lBQ0E7SUFDQTtDQUNELENBQUM7QUFFSyxNQUFNQyxjQUFjO0lBQ3pCO1FBQ0VILFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNFO0lBQ0o7SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDRTtJQUNKO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFdBQVc7SUFDdEI7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0U7SUFDSjtJQUNBO1FBQ0VKLFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNFO0lBQ0o7SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDRTtJQUNKO0NBQ0QsQ0FBQztBQUVLLE1BQU1FLFVBQVU7SUFDckI7UUFDRUMsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLEtBQUs7SUFDUDtJQUNBO1FBQ0VELE1BQU07UUFDTkMsS0FBSztJQUNQO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9pbmRleC5qcz8zNzM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBleHBsb3JlV29ybGRzID0gW1xuICB7XG4gICAgaWQ6ICd3b3JsZC0xJyxcbiAgICBpbWdVcmw6ICcvd2F0ZXIuanBnJyxcbiAgICB0aXRsZTogJ0VuY2hhbnRpbmcgRGVzdGluYXRpb25zJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnd29ybGQtMicsXG4gICAgaW1nVXJsOiAnL3JvYWQuanBnJyxcbiAgICB0aXRsZTogJ015c3RpY2FsIEdldGF3YXlzJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnd29ybGQtMycsXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wMy5wbmcnLFxuICAgIHRpdGxlOiAnQXN0cm8gRGlzY292ZXJpZXMnLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC00JyxcbiAgICBpbWdVcmw6ICcvY29hc3QuanBnJyxcbiAgICB0aXRsZTogJ1Ryb3BpY2FsIEVzY2FwZXMnLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC01JyxcbiAgICBpbWdVcmw6ICcvY2l0eS5qcGcnLFxuICAgIHRpdGxlOiAnVXJiYW4gQWR2ZW50dXJlcycsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRpbmdGZWF0dXJlcyA9IFtcbiAgJ0V4cGxvcmUgY2FwdGl2YXRpbmcgd29ybGRzIGFuZCBmaW5kIHlvdXIgcGVyZmVjdCB0cmF2ZWwgZXNjYXBlJyxcbiAgJ0VtYmFyayBvbiB5b3VyIGpvdXJuZXkgd2l0aCBhIHRyYXZlbCBibGVzc2luZyBmb3IgYSBzYWZlIGFuZCBqb3lmdWwgYWR2ZW50dXJlJyxcbiAgJ05vIG5lZWQgdG8gaGVzaXRhdGUsIGRpdmUgaW50byB0aGUgZXhwbG9yYXRpb24gYW5kIHNhdm9yIHRoZSBleGNpdGVtZW50Jyxcbl07XG5cbmV4cG9ydCBjb25zdCBuZXdGZWF0dXJlcyA9IFtcbiAge1xuICAgIGltZ1VybDogJy92cnBhbm8uc3ZnJyxcbiAgICB0aXRsZTogJ05ldyBIb3Jpem9ucyBBd2FpdCcsXG4gICAgc3VidGl0bGU6XG4gICAgICAnRGlzY292ZXIgZnJlc2ggZGVzdGluYXRpb25zIHdpdGggb3VyIGxhdGVzdCB1cGRhdGUsIG9mZmVyaW5nIG5ldyBhbmQgZXhjaXRpbmcgcGxhY2VzIGZvciB5b3UgdG8gZXhwbG9yZSBvbiB5b3VyIHRyYXZlbHMuJyxcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9oZWFkc2V0LnN2ZycsXG4gICAgdGl0bGU6ICdJbW1lcnNpdmUgRXhwZXJpZW5jZXMnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgJ0V4cGVyaWVuY2UgdHJhdmVsIGxpa2UgbmV2ZXIgYmVmb3JlLiBPdXIgbGF0ZXN0IHVwZGF0ZSBicmluZ3MgeW91IGNsb3NlciB0byB0aGUgaGVhcnQgb2YgZWFjaCBkZXN0aW5hdGlvbiBmb3IgYW4gaW1tZXJzaXZlIGpvdXJuZXkuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBpbnNpZ2h0cyA9IFtcbiAge1xuICAgIGltZ1VybDogJy93b21hbi5qcGcnLFxuICAgIHRpdGxlOiAnQXN0cm8gVHJhdmVsIExhdW5jaCBDYXB0aXZhdGVzIFRyYXZlbCBFbnRodXNpYXN0cycsXG4gICAgc3VidGl0bGU6XG4gICAgICAnRXhwZXJpZW5jZSB0aGUgYnV6eiBhcyB0aGUgbGF1bmNoIG9mIFRyYXZlbCBBc3RybyBjYXB0aXZhdGVzIHRyYXZlbGVycyB3b3JsZHdpZGUuIFVubGVhc2ggdGhlIHNwaXJpdCBvZiBleHBsb3JhdGlvbiEnLFxuICB9LFxuICB7XG4gICAgaW1nVXJsOiAnL25hdHVyZS5qcGcnLFxuICAgIHRpdGxlOiAnNyBUaXBzIGZvciBNYXN0ZXJpbmcgdGhlIEFydCBvZiBUcmF2ZWwnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgJ1VubG9jayB0aGUgc2VjcmV0cyB0byBiZWNvbWluZyBhIHRyYXZlbCBwcm8gd2l0aCB0aGVzZSA3IGVzc2VudGlhbCB0aXBzLiBOYXZpZ2F0ZSB0aGUgZ2xvYmUgd2l0aCBjb25maWRlbmNlIGFuZCBleHBlcnRpc2UuJyxcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9ob3VzZXMuanBnJyxcbiAgICB0aXRsZTogJ09uZSBQbGF0Zm9ybSwgQ291bnRsZXNzIEFkdmVudHVyZXMnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgJ0VtYmFyayBvbiBhIHZpcnR1YWwgam91cm5leSB0byBleHBsb3JlIHRoZSBiZWF1dHkgb2YgdGhlIHdvcmxkLiBPdXIgcGxhdGZvcm0gb3BlbnMgZG9vcnMgdG8gZW5kbGVzcyB0cmF2ZWwgcG9zc2liaWxpdGllcyBmcm9tIHRoZSBjb21mb3J0IG9mIHlvdXIgaG9tZS4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNvY2lhbHMgPSBbXG4gIHtcbiAgICBuYW1lOiAndHdpdHRlcicsXG4gICAgdXJsOiAnL3R3aXR0ZXIuc3ZnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdsaW5rZWRpbicsXG4gICAgdXJsOiAnL2xpbmtlZGluLnN2ZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnaW5zdGFncmFtJyxcbiAgICB1cmw6ICcvaW5zdGFncmFtLnN2ZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZmFjZWJvb2snLFxuICAgIHVybDogJy9mYWNlYm9vay5zdmcnLFxuICB9LFxuXTtcbiJdLCJuYW1lcyI6WyJleHBsb3JlV29ybGRzIiwiaWQiLCJpbWdVcmwiLCJ0aXRsZSIsInN0YXJ0aW5nRmVhdHVyZXMiLCJuZXdGZWF0dXJlcyIsInN1YnRpdGxlIiwiaW5zaWdodHMiLCJzb2NpYWxzIiwibmFtZSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});