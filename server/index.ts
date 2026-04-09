import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { testConnection } from './db';
import { login, changePassword, requireAuth } from './auth';
import categoriesRouter from './routes/categories';
import productsRouter from './routes/products';
import companyRouter from './routes/company';
import uploadRouter from './routes/upload';

dotenv.config();

const app = express();
const PORT = Number(process.env.SERVER_PORT || 4000);
const DIST_DIR = path.join(process.cwd(), 'dist');
// Auto-detect production: serve frontend if build exists
const SERVE_FRONTEND = fs.existsSync(DIST_DIR);

app.use(cors());
app.use(express.json({ limit: '5mb' }));

// Serve uploaded images
app.use('/uploads', express.static(path.join(process.cwd(), 'public', 'uploads')));

// Health check
app.get('/api/health', (_req, res) => res.json({ ok: true, time: new Date().toISOString() }));

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'username and password required' });
  const token = await login(username, password);
  if (!token) return res.status(401).json({ error: 'Sai tài khoản hoặc mật khẩu' });
  res.json({ token });
});

// Change password endpoint
app.post('/api/admin/change-password', requireAuth, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    return res.status(400).json({ error: 'Vui lòng nhập đầy đủ mật khẩu cũ và mới' });
  }
  if (newPassword.length < 6) {
    return res.status(400).json({ error: 'Mật khẩu mới phải có ít nhất 6 ký tự' });
  }
  const result = await changePassword(oldPassword, newPassword);
  if (!result.ok) return res.status(400).json({ error: result.error });
  res.json({ ok: true });
});

// API routes
app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);
app.use('/api/company', companyRouter);
app.use('/api/upload', uploadRouter);

// =====================================================
// Serve frontend build (dist/) + SPA fallback
// Auto-enabled when dist/ exists (after `npm run build`)
// =====================================================
if (SERVE_FRONTEND) {
  app.use(express.static(DIST_DIR));

  // SPA fallback — any non-API/non-uploads route returns index.html
  app.get(/^(?!\/api|\/uploads).*/, (_req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });
}

async function start() {
  await testConnection();
  app.listen(PORT, () => {
    console.log(`✓ Server running on http://localhost:${PORT}`);
    if (SERVE_FRONTEND) {
      console.log(`  → Frontend: http://localhost:${PORT}/`);
      console.log(`  → Admin:    http://localhost:${PORT}/admin/login`);
    } else {
      console.log(`  → API only. Run "npm run build" first to serve frontend on this port`);
      console.log(`  → Or use "npm run dev" for hot-reload (Vite at :3000)`);
    }
  });
}

start();
