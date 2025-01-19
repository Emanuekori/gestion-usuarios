import pool from '../config/db';

const seedDatabase = async () => {
  try {
    console.log('Iniciando población de datos...');

    const seedData = [
      ['12345678-9', 'Juan Pérez', 'juan.perez@example.com'],
      ['98765432-1', 'María González', 'maria.gonzalez@example.com'],
      ['11223344-5', 'Carlos López', 'carlos.lopez@example.com'],
      ['22334455-6', 'Ana Martínez', 'ana.martinez@example.com'],
      ['33445566-7', 'Luis Fernández', 'luis.fernandez@example.com'],
      ['20103391-8', 'Emanuel Fernández', 'emanuel.fernandez@example.com'],
    ];

    for (const [rut, name, email] of seedData) {
      await pool.query(
        'INSERT IGNORE INTO users (rut, name, email, createdAt) VALUES (?, ?, ?, NOW())',
        [rut, name, email]
      );
    }

    console.log('Base de datos poblada exitosamente.');
    process.exit(0);
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    process.exit(1);
  }
};

seedDatabase();
