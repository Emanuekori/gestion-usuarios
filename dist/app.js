"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Ruta base
app.get('/', (req, res) => {
    res.json({
        message: '¡Bienvenido a la API de gestión de usuarios!',
        endpoints: {
            getAllUsers: '/api/users',
            getUserByRut: '/api/users/:rut',
            createUser: '/api/users',
            updateUser: '/api/users/:id',
            deleteUser: '/api/users/:id',
        },
    });
});
// Rutas de usuarios
app.use('/api', userRoutes_1.default);
// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error interno del servidor', error: err.message });
});
exports.default = app;
