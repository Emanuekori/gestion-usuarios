import pool from '../config/db';

const testConnection = async () => {
  try {
    const [result] = await pool.query('SELECT 1');
    console.log('Conexión exitosa:', result);
    process.exit(0);
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }
};

testConnection();
