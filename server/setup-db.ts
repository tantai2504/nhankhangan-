// Script: Initialize MySQL database with proper UTF-8 encoding.
// Reads server/db.sql and executes via mysql2 connection (utf8mb4).
// This avoids the Windows CLI cp1252 encoding bug.
//
// Usage:
//   npm run db:setup
//
// Prerequisites:
//   - MySQL running
//   - .env has correct DB_HOST, DB_USER, DB_PASSWORD
//   - User has CREATE/DROP privileges

import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const SQL_FILE = path.join(process.cwd(), 'server', 'db.sql');

async function main() {
  if (!fs.existsSync(SQL_FILE)) {
    console.error(`✗ SQL file not found: ${SQL_FILE}`);
    process.exit(1);
  }

  // Read SQL with explicit UTF-8 encoding
  const sql = fs.readFileSync(SQL_FILE, { encoding: 'utf8' });
  console.log(`✓ Read ${SQL_FILE} (${sql.length} chars, UTF-8)`);

  // Connect WITHOUT specifying database (because db.sql creates it)
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    multipleStatements: true,        // Allow running multiple statements at once
    charset: 'utf8mb4',
  });

  console.log('✓ Connected to MySQL');

  try {
    // Run all statements at once — mysql2 handles utf8mb4 properly
    console.log('⏳ Executing db.sql...');
    await conn.query(sql);
    console.log('✓ Database setup complete');

    // Verify by counting
    const [catRows] = await conn.query('SELECT COUNT(*) as n FROM nhankhangan.categories');
    const [prodRows] = await conn.query('SELECT COUNT(*) as n FROM nhankhangan.products');
    const cats = (catRows as { n: number }[])[0]?.n || 0;
    const prods = (prodRows as { n: number }[])[0]?.n || 0;

    console.log('');
    console.log(`✓ ${cats} categories seeded`);
    console.log(`✓ ${prods} products seeded`);

    // Sanity check: pick one Vietnamese string and verify it's correct
    const [sample] = await conn.query("SELECT name FROM nhankhangan.categories WHERE id = 'tape-packing'");
    const sampleName = (sample as { name: string }[])[0]?.name;
    console.log('');
    console.log(`Sample category name: "${sampleName}"`);
    if (sampleName && sampleName.includes('Băng keo')) {
      console.log('✓ Vietnamese encoding OK');
    } else {
      console.warn('⚠ Vietnamese encoding may be wrong. Expected "Băng keo đóng gói".');
    }
  } catch (err) {
    console.error('✗ SQL execution failed:', (err as Error).message);
    process.exit(1);
  } finally {
    await conn.end();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
