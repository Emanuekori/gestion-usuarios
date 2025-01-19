"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByRut = exports.getAllUsers = void 0;
const db_1 = __importDefault(require("../config/db"));
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Especifica que el resultado es un arreglo de filas
        const [rows] = yield db_1.default.query('SELECT * FROM users');
        res.json(rows); // Retorna las filas como respuesta
    }
    catch (error) {
        console.error(error); // Log para depuración
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});
exports.getAllUsers = getAllUsers;
const getUserByRut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rut } = req.params;
    try {
        // Especifica que el resultado es un arreglo de filas
        const [rows] = yield db_1.default.query('SELECT * FROM users WHERE rut = ?', [rut]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(rows[0]); // Retorna el primer usuario encontrado
    }
    catch (error) {
        console.error(error); // Log para depuración
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
});
exports.getUserByRut = getUserByRut;
