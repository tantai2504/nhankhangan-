import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Loader2 } from 'lucide-react';
import { apiGetCategories, apiCreateCategory, apiUpdateCategory, apiDeleteCategory, ApiCategory } from '../services/api';

const empty: ApiCategory = { id: '', name: '', icon: 'Package', description: '', sort_order: 0 };

const AdminCategories = () => {
  const [list, setList] = useState<ApiCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<ApiCategory | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const data = await apiGetCategories();
      setList(data);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleSave = async () => {
    if (!editing) return;
    if (!editing.id || !editing.name) {
      setError('ID và Tên là bắt buộc');
      return;
    }
    try {
      if (isNew) {
        await apiCreateCategory(editing);
      } else {
        await apiUpdateCategory(editing.id, editing);
      }
      setEditing(null);
      setIsNew(false);
      load();
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Xoá danh mục này? Tất cả sản phẩm thuộc danh mục cũng sẽ bị xoá.')) return;
    try {
      await apiDeleteCategory(id);
      load();
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Quản lý danh mục</h1>
          <p className="text-sm text-slate-500 mt-1">{list.length} danh mục</p>
        </div>
        <button
          onClick={() => { setEditing({ ...empty }); setIsNew(true); setError(''); }}
          className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 active:scale-95 transition-all"
        >
          <Plus size={18} /> Thêm danh mục
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2 rounded-lg mb-4">{error}</div>
      )}

      {loading ? (
        <div className="flex justify-center py-20"><Loader2 className="animate-spin text-brand-dark" size={32} /></div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr className="text-left text-xs font-bold text-slate-600 uppercase">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Tên</th>
                <th className="px-4 py-3">Icon</th>
                <th className="px-4 py-3">Thứ tự</th>
                <th className="px-4 py-3 w-32">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {list.map(c => (
                <tr key={c.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3 font-mono text-xs text-slate-500">{c.id}</td>
                  <td className="px-4 py-3 font-bold text-slate-900">{c.name}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{c.icon}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{c.sort_order}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <button onClick={() => { setEditing(c); setIsNew(false); setError(''); }} className="p-2 hover:bg-blue-50 rounded text-blue-600">
                        <Edit2 size={15} />
                      </button>
                      <button onClick={() => handleDelete(c.id)} className="p-2 hover:bg-red-50 rounded text-red-600">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setEditing(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">{isNew ? 'Thêm danh mục' : 'Sửa danh mục'}</h2>
              <button onClick={() => setEditing(null)} className="p-1 hover:bg-slate-100 rounded">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-3">
              <Field label="ID (slug)" value={editing.id} onChange={v => setEditing({ ...editing, id: v })} disabled={!isNew} />
              <Field label="Tên hiển thị" value={editing.name} onChange={v => setEditing({ ...editing, name: v })} />
              <Field label="Icon (lucide-react)" value={editing.icon} onChange={v => setEditing({ ...editing, icon: v })} hint="VD: Package, Home, Wrench, ShieldCheck, Hammer..." />
              <Field label="Mô tả" value={editing.description} onChange={v => setEditing({ ...editing, description: v })} textarea />
              <Field label="Thứ tự sắp xếp" value={String(editing.sort_order)} onChange={v => setEditing({ ...editing, sort_order: Number(v) || 0 })} />
            </div>
            <div className="flex gap-2 justify-end mt-6">
              <button onClick={() => setEditing(null)} className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-bold">Huỷ</button>
              <button onClick={handleSave} className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-lg font-bold text-sm">
                <Save size={16} /> Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Field = ({ label, value, onChange, textarea, disabled, hint }: { label: string; value: string; onChange: (v: string) => void; textarea?: boolean; disabled?: boolean; hint?: string }) => (
  <div>
    <label className="text-xs font-bold text-slate-600 uppercase block mb-1">{label}</label>
    {textarea ? (
      <textarea value={value} onChange={e => onChange(e.target.value)} disabled={disabled} rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none disabled:bg-slate-50" />
    ) : (
      <input value={value} onChange={e => onChange(e.target.value)} disabled={disabled} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none disabled:bg-slate-50" />
    )}
    {hint && <p className="text-[10px] text-slate-400 mt-1">{hint}</p>}
  </div>
);

export default AdminCategories;
