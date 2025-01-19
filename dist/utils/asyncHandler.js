"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Maneja errores de funciones asincrónicas
const asyncHandler = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next); // Pasa el error al middleware de errores
    };
};
exports.default = asyncHandler;
