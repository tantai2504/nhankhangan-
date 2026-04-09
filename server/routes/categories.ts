import { Router } from 'express';
import { pool, isDbReady } from '../db';
import { requireAuth } from '../auth';

const router = Router();

// GET /api/categories — public; returns [] if DB not ready
router.get('/', async (req, res) => {
  if (!isDbReady()) return res.json([]);
  try {
    const [rows] = await pool.query('SELECT * FROM categories ORDER BY sort_order, id');
    res.json(rows);
  } catch (err) {
    res.json([]);
  }
});

// POST /api/categories — auth
router.post('/', requireAuth, async (req, res) => {
  if (!isDbReady()) return res.status(503).json({ error: 'Database chưa sẵn sàng. Vui lòng kiểm tra cấu hình MySQL trong .env và chạy server/db.sql' });
  try {
    const { id, name, icon, description, sort_order } = req.body;
    if (!id || !name) return res.status(400).json({ error: 'id and name required' });
    await pool.query(
      'INSERT INTO categories (id, name, icon, description, sort_order) VALUES (?, ?, ?, ?, ?)',
      [id, name, icon || 'Package', description || '', sort_order || 0]
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// PUT /api/categories/:id — auth
router.put('/:id', requireAuth, async (req, res) => {
  if (!isDbReady()) return res.status(503).json({ error: 'Database chưa sẵn sàng' });
  try {
    const { name, icon, description, sort_order } = req.body;
    await pool.query(
      'UPDATE categories SET name=?, icon=?, description=?, sort_order=? WHERE id=?',
      [name, icon, description, sort_order, req.params.id]
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// DELETE /api/categories/:id — auth
router.delete('/:id', requireAuth, async (req, res) => {
  if (!isDbReady()) return res.status(503).json({ error: 'Database chưa sẵn sàng' });
  try {
    await pool.query('DELETE FROM categories WHERE id=?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
