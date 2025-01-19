"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const asyncHandler_1 = __importDefault(require("../utils/asyncHandler"));
const router = express_1.default.Router();
router.get('/users', (0, asyncHandler_1.default)(userController_1.getAllUsers));
router.get('/users/:rut', (0, asyncHandler_1.default)(userController_1.getUserByRut));
// Rutas para crear, actualizar y eliminar usuarios...
exports.default = router;
