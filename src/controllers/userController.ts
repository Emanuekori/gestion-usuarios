import { Request, Response } from 'express';
import pool from '../config/db';
import { RowDataPacket } from 'mysql2';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM users');
    res.json(rows); 
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const getUserByRut = async (req: Request, res: Response) => {
  const { rut } = req.params;
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT * FROM users WHERE rut = ?',
      [rut]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};
