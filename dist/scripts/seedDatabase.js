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
const db_1 = __importDefault(require("../config/db"));
const seedDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Iniciando población de datos...');
        // Datos para insertar
        const seedData = [
            ['12345678-9', 'Juan Pérez', 'juan.perez@example.com'],
            ['98765432-1', 'María González', 'maria.gonzalez@example.com'],
            ['11223344-5', 'Carlos López', 'carlos.lopez@example.com'],
            ['22334455-6', 'Ana Martínez', 'ana.martinez@example.com'],
            ['33445566-7', 'Luis Fernández', 'luis.fernandez@example.com'],
            ['20103391-8', 'Emanuel Fernández', 'emanuel.fernandez@example.com'],
        ];
        // Inserción de datos
        for (const [rut, name, email] of seedData) {
            yield db_1.default.query('INSERT IGNORE INTO users (rut, name, email, createdAt) VALUES (?, ?, ?, NOW())', [rut, name, email]);
        }
        console.log('Base de datos poblada exitosamente.');
        process.exit(0);
    }
    catch (error) {
        console.error('Error al poblar la base de datos:', error);
        process.exit(1);
    }
});
seedDatabase();
