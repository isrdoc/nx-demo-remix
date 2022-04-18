"use strict";
var _utilsPrismaDb = require("./lib/utils-prisma-db");
Object.keys(_utilsPrismaDb).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _utilsPrismaDb[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _utilsPrismaDb[key];
        }
    });
});

//# sourceMappingURL=index.js.map