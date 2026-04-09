import { Router } from 'express';
import { pool, isDbReady } from '../db';
import { requireAuth } from '../auth';

const router = Router();

// GET /api/company — public; returns {} if DB not ready
router.get('/', async (req, res) => {
  if (!isDbReady()) return res.json({});
  try {
    const [rows] = await pool.query('SELECT `key`, `value` FROM company_info');
    const obj: Record<string, string> = {};
    (rows as { key: string; value: string }[]).forEach(r => { obj[r.key] = r.value; });
    res.json(obj);
  } catch (err) {
    res.json({});
  }
});

// PUT /api/company — auth, replaces all keys provided
router.put('/', requireAuth, async (req, res) => {
  if (!isDbReady()) return res.status(503).json({ error: 'Database chưa sẵn sàng' });
  try {
    const data = req.body as Record<string, string>;
    for (const [key, value] of Object.entries(data)) {
      await pool.query(
        'INSERT INTO company_info (`key`, `value`) VALUES (?, ?) ON DUPLICATE KEY UPDATE `value`=VALUES(`value`)',
        [key, value]
      );
    }
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
