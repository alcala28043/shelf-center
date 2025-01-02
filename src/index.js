"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rutas
app.get('/', (req, res) => {
    res.send('¡Hola, mundo! Esta es tu API backend en Firebase Hosting.');
});
app.get('/api/example', (req, res) => {
    res.json({ mensaje: '¡Este es un ejemplo de endpoint!' });
});
// Iniciar servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});