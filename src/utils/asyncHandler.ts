import { Request, Response, NextFunction } from 'express';

// Maneja errores de funciones asincrónicas
const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next); // Pasa el error al middleware de errores
  };
};

export default asyncHandler;
