// Frontend API client for backend
const TOKEN_KEY = 'nka_admin_token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (t: string) => localStorage.setItem(TOKEN_KEY, t);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);
export const isLoggedIn = () => !!getToken();

async function request<T>(url: string, opts: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(opts.headers as Record<string, string> || {}),
  };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(url, { ...opts, headers });
  if (res.status === 401) {
    clearToken();
    throw new Error('Phiên đăng nhập đã hết hạn');
  }
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || 'Request failed');
  }
  return res.json();
}

// ===== Auth =====
export const apiLogin = (username: string, password: string) =>
  request<{ token: string }>('/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });

export const apiChangePassword = (oldPassword: string, newPassword: string) =>
  request<{ ok: boolean }>('/api/admin/change-password', {
    method: 'POST',
    body: JSON.stringify({ oldPassword, newPassword }),
  });

// ===== Categories =====
export interface ApiCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  sort_order: number;
}

export const apiGetCategories = () => request<ApiCategory[]>('/api/categories');

export const apiCreateCategory = (data: ApiCategory) =>
  request('/api/categories', { method: 'POST', body: JSON.stringify(data) });

export const apiUpdateCategory = (id: string, data: Partial<ApiCategory>) =>
  request(`/api/categories/${id}`, { method: 'PUT', body: JSON.stringify(data) });

export const apiDeleteCategory = (id: string) =>
  request(`/api/categories/${id}`, { method: 'DELETE' });

// ===== Products =====
export interface ApiProduct {
  id: string;
  category: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  isFeatured: boolean;
  industryTag?: string | null;
  sort_order: number;
}

export const apiGetProducts = () => request<ApiProduct[]>('/api/products');

export const apiCreateProduct = (data: ApiProduct) =>
  request('/api/products', { method: 'POST', body: JSON.stringify(data) });

export const apiUpdateProduct = (id: string, data: Partial<ApiProduct>) =>
  request(`/api/products/${id}`, { method: 'PUT', body: JSON.stringify(data) });

export const apiDeleteProduct = (id: string) =>
  request(`/api/products/${id}`, { method: 'DELETE' });

// ===== Company =====
export const apiGetCompany = () => request<Record<string, string>>('/api/company');

export const apiUpdateCompany = (data: Record<string, string>) =>
  request('/api/company', { method: 'PUT', body: JSON.stringify(data) });

// ===== Upload =====
export async function apiUploadImage(file: File): Promise<{ url: string }> {
  const fd = new FormData();
  fd.append('file', file);
  const token = getToken();
  const res = await fetch('/api/upload', {
    method: 'POST',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: fd,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || 'Upload failed');
  }
  return res.json();
}
