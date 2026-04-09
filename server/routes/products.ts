import { Router } from 'express';
import { pool, isDbReady } from '../db';
import { requireAuth } from '../auth';

const router = Router();

interface ProductRow {
  id: string;
  category_id: string;
  name: string;
  description: string;
  image: string;
  features: string;
  is_featured: number;
  industry_tag: string | null;
  sort_order: number;
}

const formatProduct = (r: ProductRow) => ({
  id: r.id,
  category: r.category_id,
  name: r.name,
  description: r.description,
  image: r.image,
  features: r.features ? JSON.parse(r.features) : [],
  isFeatured: !!r.is_featured,
  industryTag: r.industry_tag,
  sort_order: r.sort_order,
});

// GET /api/products — public; returns [] if DB not ready
router.get('/', async (req, res) => {
  if (!isDbReady()) return res.json([]);
  try {
    const [rows] = await pool.query('SELECT * FROM products ORDER BY sort_order, id');
    res.json((rows as ProductRow[]).map(formatProduct));
  } catch (err) {
    res.json([]);
  }
});

// POST /api/products — auth
router.post('/', requireAuth, async (req, res) => {
  if (!isDbReady()) return res.status(503).json({ error: 'Database chưa sẵn sàng. Kiểm tra .env và chạy server/db.sql' });
  try {
    const { id, category, name, description, image, features, isFeatured, industryTag, sort_order } = req.body;
    if (!id || !name || !category) return res.status(400).json({ error: 'id, name, category required' });
    await pool.query(
      'INSERT INTO products (id, category_id, name, description, image, features, is_featured, industry_tag, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [id, category, name, description || '', image || '', JSON.stringify(features || []), isFeatured ? 1 : 0, industryTag || null, sort_order || 0]
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// PUT /api/products/:id — auth
router.put('/:id', requireAuth, async (req, res) => {
  if (!isDbReady()) return res.status(503).json({ error: 'Database chưa sẵn sàng' });
  try {
    const { category, name, description, image, features, isFeatured, industryTag, sort_order } = req.body;
    await pool.query(
      'UPDATE products SET category_id=?, name=?, description=?, image=?, features=?, is_featured=?, industry_tag=?, sort_order=? WHERE id=?',
      [category, name, description, image, JSON.stringify(features || []), isFeatured ? 1 : 0, industryTag || null, sort_order || 0, req.params.id]
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// DELETE /api/products/:id — auth
router.delete('/:id', requireAuth, async (req, res) => {
  if (!isDbReady()) return res.status(503).json({ error: 'Database chưa sẵn sàng' });
  try {
    await pool.query('DELETE FROM products WHERE id=?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
