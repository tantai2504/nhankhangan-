// Script: Initialize MySQL database with proper UTF-8 encoding.
// Reads server/db.sql and executes via mysql2 connection (utf8mb4).
// This avoids the Windows CLI cp1252 encoding bug.
//
// Usage:
//   npm run db:setup
//
// Prerequisites:
//   - MySQL running
//   - Database already exists (script connects to DB_NAME from .env)
//   - User has CREATE TABLE privileges on that database
//
// Compatible with shared hosting (aaPanel/cPanel) where users
// cannot CREATE DATABASE — script strips those statements automatically.

import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const SQL_FILE = path.join(process.cwd(), 'server', 'db.sql');
const DB_NAME = process.env.DB_NAME || 'nhankhangan';

async function main() {
  if (!fs.existsSync(SQL_FILE)) {
    console.error(`✗ SQL file not found: ${SQL_FILE}`);
    process.exit(1);
  }

  // Read SQL with explicit UTF-8 encoding
  let sql = fs.readFileSync(SQL_FILE, { encoding: 'utf8' });
  console.log(`✓ Read ${SQL_FILE} (${sql.length} chars, UTF-8)`);

  // Strip CREATE DATABASE / USE statements — DB must already exist on shared hosting
  sql = sql
    .replace(/CREATE\s+DATABASE[^;]*;/gi, '')
    .replace(/USE\s+\S+;/gi, '');

  // Connect DIRECTLY to the user's database (no CREATE DATABASE needed)
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: DB_NAME,
    multipleStatements: true,
    charset: 'utf8mb4',
  });

  console.log(`✓ Connected to MySQL database "${DB_NAME}"`);

  try {
    console.log('⏳ Executing db.sql (creating tables + seeding data)...');
    await conn.query(sql);
    console.log('✓ Database setup complete');

    // Verify by counting
    const [catRows] = await conn.query('SELECT COUNT(*) as n FROM categories');
    const [prodRows] = await conn.query('SELECT COUNT(*) as n FROM products');
    const cats = (catRows as { n: number }[])[0]?.n || 0;
    const prods = (prodRows as { n: number }[])[0]?.n || 0;

    console.log('');
    console.log(`✓ ${cats} categories seeded`);
    console.log(`✓ ${prods} products seeded`);

    // Sanity check: pick one Vietnamese string and verify it's correct
    const [sample] = await conn.query("SELECT name FROM categories WHERE id = 'tape-packing'");
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
