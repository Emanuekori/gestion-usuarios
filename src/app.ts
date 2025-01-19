import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

// Ruta base
app.get('/', (req: Request, res: Response) => {
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
app.use('/api', userRoutes);

// Middleware para manejar errores
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor', error: err.message });
});

export default app;
