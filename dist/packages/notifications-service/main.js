/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "./packages/notifications-service/src/mock_data.json":
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"type":"TRANSACTION_RECEIVED","data":{"id":1,"amount":4,"unit":"ETH","from":"0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5","to":"0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f"}},{"id":2,"type":"TRANSACTION_SENT","data":{"id":2,"amount":0.4,"unit":"ETH","to":"0xe5e428cbb93a218dad2c908f2f3e2f46575d91a5","from":"0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f"}},{"id":3,"type":"ACCOUNT_CREATED","data":{"id":1,"name":"Big BTC account","currency":"bitcoin"}},{"id":4,"type":"TRANSACTION_SENT","data":{"id":3,"amount":1246,"unit":"XTZ","to":"tz1aiA3JtWw1hPTmmc9uyXK4boY2EjbRCPQ6","from":"tz1gE2Re6TdVLRPh2ZqxZnGkE5WPWEQHHkfS"}},{"id":5,"type":"TRANSACTION_RECEIVED","data":{"id":4,"amount":2,"unit":"XRP","to":"r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV","from":"rEWoXTmxwqqnPdYqtVEuoRgJXARXxf21Sn"}}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const express = __webpack_require__("express");
const mock_data = __webpack_require__("./packages/notifications-service/src/mock_data.json");
const app = express();
app.get('/search', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    yield new Promise((resolve) => setTimeout(resolve, 2000));
    const { type } = req.query;
    if (!type) {
        res.json(mock_data);
    }
    res.send({ message: 'Welcome to notifications!' });
}));
const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map