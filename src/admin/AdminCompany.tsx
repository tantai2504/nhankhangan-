import React, { useState, useEffect } from 'react';
import { Save, Loader2, CheckCircle } from 'lucide-react';
import { apiGetCompany, apiUpdateCompany } from '../services/api';

const FIELDS = [
  { key: 'name', label: 'Tên công ty đầy đủ' },
  { key: 'shortName', label: 'Tên ngắn (hiển thị header)' },
  { key: 'phone', label: 'Số điện thoại' },
  { key: 'phoneHref', label: 'SĐT dạng href (tel:0944272726)' },
  { key: 'email', label: 'Email' },
  { key: 'address', label: 'Địa chỉ', textarea: true },
  { key: 'slogan', label: 'Slogan' },
];

const AdminCompany = () => {
  const [data, setData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    apiGetCompany().then(setData).catch(e => setError((e as Error).message)).finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSuccess(false);
    try {
      await apiUpdateCompany(data);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-brand-dark" size={32} /></div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Thông tin công ty</h1>
        <p className="text-sm text-slate-500 mt-1">Cập nhật thông tin hiển thị trên website</p>
      </div>

      {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2 rounded-lg mb-4">{error}</div>}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-2 rounded-lg mb-4 flex items-center gap-2">
          <CheckCircle size={16} /> Đã lưu thành công
        </div>
      )}

      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
        {FIELDS.map(f => (
          <div key={f.key}>
            <label className="text-xs font-bold text-slate-600 uppercase block mb-1">{f.label}</label>
            {f.textarea ? (
              <textarea
                value={data[f.key] || ''}
                onChange={e => setData({ ...data, [f.key]: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none"
              />
            ) : (
              <input
                value={data[f.key] || ''}
                onChange={e => setData({ ...data, [f.key]: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none"
              />
            )}
          </div>
        ))}

        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full flex items-center justify-center gap-2 bg-brand-dark text-white py-3 rounded-lg font-bold hover:bg-blue-700 active:scale-95 disabled:opacity-50"
        >
          {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
        </button>
      </div>
    </div>
  );
};

export default AdminCompany;
