import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nhankhangan',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4',
});

// Track DB availability — set false if connection fails at startup
export const dbState = { available: false };

export async function testConnection() {
  try {
    const conn = await pool.getConnection();
    dbState.available = true;
    console.log('✓ MySQL connected');
    conn.release();
  } catch (err) {
    dbState.available = false;
    console.error('⚠ MySQL connection failed:', (err as Error).message);
    console.error('  → Frontend sẽ dùng dữ liệu tĩnh trong constants.ts');
    console.error('  → Để dùng database, hãy:');
    console.error('    1. Chạy: mysql -u root -p < server/db.sql');
    console.error('    2. Cập nhật DB_USER, DB_PASSWORD trong .env');
    console.error('    3. Restart server');
  }
}

// Helper for routes: returns true if DB ready
export const isDbReady = () => dbState.available;
