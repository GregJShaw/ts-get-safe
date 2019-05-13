"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_get_1 = __importDefault(require("lodash.get"));
function safeGet() {
    var args = Array.prototype.slice.call(arguments);
    var obj = args[0];
    var path = args.slice(1).join(".");
    return lodash_get_1.default(obj, path);
}
exports.default = safeGet;
//# sourceMappingURL=index.js.map