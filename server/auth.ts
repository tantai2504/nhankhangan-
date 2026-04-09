import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import { pool, isDbReady } from './db';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const FALLBACK_PASSWORD = process.env.ADMIN_PASSWORD || 'nka@2024';
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'nka-secret-change-me';

// =============================================
// Password hashing — pbkdf2 (built into Node, no extra package)
// =============================================
export function hashPassword(plain: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(plain, salt, 100000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPasswordHash(plain: string, stored: string): boolean {
  try {
    const [salt, expectedHash] = stored.split(':');
    if (!salt || !expectedHash) return false;
    const hash = crypto.pbkdf2Sync(plain, salt, 100000, 64, 'sha512').toString('hex');
    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(expectedHash));
  } catch {
    return false;
  }
}

// =============================================
// Token (HMAC session)
// =============================================
export function createToken(): string {
  const payload = `${ADMIN_USERNAME}:${Date.now() + 7 * 24 * 60 * 60 * 1000}`;
  const sig = crypto.createHmac('sha256', TOKEN_SECRET).update(payload).digest('hex');
  return Buffer.from(`${payload}:${sig}`).toString('base64');
}

export function verifyToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const parts = decoded.split(':');
    if (parts.length !== 3) return false;
    const [user, expStr, sig] = parts;
    if (user !== ADMIN_USERNAME) return false;
    if (Date.now() > Number(expStr)) return false;
    const expected = crypto.createHmac('sha256', TOKEN_SECRET).update(`${user}:${expStr}`).digest('hex');
    return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
}

// =============================================
// DB password lookup
// =============================================
async function getStoredPasswordHash(): Promise<string | null> {
  if (!isDbReady()) return null;
  try {
    const [rows] = await pool.query("SELECT `value` FROM admin_settings WHERE `key` = 'password_hash' LIMIT 1");
    const arr = rows as { value: string }[];
    return arr.length > 0 ? arr[0].value : null;
  } catch {
    return null;
  }
}

async function setStoredPasswordHash(hash: string): Promise<boolean> {
  if (!isDbReady()) return false;
  try {
    await pool.query(
      "INSERT INTO admin_settings (`key`, `value`) VALUES ('password_hash', ?) ON DUPLICATE KEY UPDATE `value` = VALUES(`value`)",
      [hash]
    );
    return true;
  } catch {
    return false;
  }
}

// =============================================
// Login (async — checks DB then falls back to env)
// =============================================
export async function login(username: string, password: string): Promise<string | null> {
  if (username !== ADMIN_USERNAME) return null;

  const storedHash = await getStoredPasswordHash();
  if (storedHash) {
    // DB has a custom password — only this works
    if (verifyPasswordHash(password, storedHash)) return createToken();
    return null;
  }

  // No DB password set yet — use env/fallback
  if (password === FALLBACK_PASSWORD) return createToken();
  return null;
}

// =============================================
// Change password (verify old, write new hash to DB)
// =============================================
export async function changePassword(oldPassword: string, newPassword: string): Promise<{ ok: boolean; error?: string }> {
  if (!isDbReady()) {
    return { ok: false, error: 'Database chưa sẵn sàng — không thể đổi mật khẩu' };
  }

  // Verify old password
  const valid = await login(ADMIN_USERNAME, oldPassword);
  if (!valid) {
    return { ok: false, error: 'Mật khẩu cũ không đúng' };
  }

  // Hash and store new
  const hash = hashPassword(newPassword);
  const saved = await setStoredPasswordHash(hash);
  if (!saved) {
    return { ok: false, error: 'Không lưu được mật khẩu mới' };
  }

  return { ok: true };
}

// =============================================
// Express middleware
// =============================================
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token || !verifyToken(token)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}
