import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Save, Loader2, CheckCircle, Eye, EyeOff, KeyRound, AlertCircle } from 'lucide-react';
import { apiChangePassword, clearToken } from '../services/api';

const AdminSettings = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (newPassword.length < 6) {
      setError('Mật khẩu mới phải có ít nhất 6 ký tự');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }
    if (oldPassword === newPassword) {
      setError('Mật khẩu mới phải khác mật khẩu cũ');
      return;
    }

    setLoading(true);
    try {
      await apiChangePassword(oldPassword, newPassword);
      setSuccess(true);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      // Auto logout after 2s — force re-login with new password
      setTimeout(() => {
        clearToken();
        navigate('/admin/login', { replace: true });
      }, 2500);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <KeyRound size={24} className="text-brand-dark" />
          Cài đặt tài khoản
        </h1>
        <p className="text-sm text-slate-500 mt-1">Đổi mật khẩu admin để bảo mật trang quản trị</p>
      </div>

      {/* Account info card */}
      <div className="bg-gradient-to-br from-brand-dark to-blue-800 text-white rounded-xl p-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Lock size={20} />
          </div>
          <div>
            <p className="text-xs text-white/60 uppercase tracking-wider">Tài khoản hiện tại</p>
            <p className="font-bold text-lg">admin</p>
          </div>
        </div>
      </div>

      {/* Password change form */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-base font-bold text-slate-900 mb-4">Đổi mật khẩu</h2>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2.5 rounded-lg mb-4 flex items-start gap-2">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-2.5 rounded-lg mb-4 flex items-start gap-2">
            <CheckCircle size={16} className="shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Đổi mật khẩu thành công!</p>
              <p className="text-xs mt-0.5">Tự động đăng xuất sau 2 giây để đăng nhập lại với mật khẩu mới...</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Old password */}
          <div>
            <label className="text-xs font-bold text-slate-600 uppercase block mb-1.5">Mật khẩu hiện tại</label>
            <div className="relative">
              <input
                type={showOld ? 'text' : 'password'}
                value={oldPassword}
                onChange={e => setOldPassword(e.target.value)}
                required
                placeholder="Nhập mật khẩu hiện tại"
                className="w-full px-4 py-2.5 pr-10 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none"
              />
              <button type="button" onClick={() => setShowOld(!showOld)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                {showOld ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* New password */}
          <div>
            <label className="text-xs font-bold text-slate-600 uppercase block mb-1.5">Mật khẩu mới</label>
            <div className="relative">
              <input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                required
                minLength={6}
                placeholder="Ít nhất 6 ký tự"
                className="w-full px-4 py-2.5 pr-10 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none"
              />
              <button type="button" onClick={() => setShowNew(!showNew)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Tối thiểu 6 ký tự, nên dùng cả chữ và số</p>
          </div>

          {/* Confirm password */}
          <div>
            <label className="text-xs font-bold text-slate-600 uppercase block mb-1.5">Xác nhận mật khẩu mới</label>
            <input
              type={showNew ? 'text' : 'password'}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
              placeholder="Nhập lại mật khẩu mới"
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading || success}
            className="w-full flex items-center justify-center gap-2 bg-brand-dark text-white font-bold py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            {loading ? 'Đang lưu...' : 'Đổi mật khẩu'}
          </button>
        </form>
      </div>

      {/* Info note */}
      <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800">
        <p className="font-bold mb-1">⚠ Lưu ý bảo mật:</p>
        <ul className="list-disc list-inside space-y-0.5">
          <li>Mật khẩu mới sẽ được lưu mã hoá (PBKDF2) trong database</li>
          <li>Sau khi đổi, bạn sẽ phải đăng nhập lại trên tất cả thiết bị</li>
          <li>Nếu quên mật khẩu, có thể reset bằng cách xoá row <code className="bg-amber-100 px-1 rounded">password_hash</code> trong bảng <code className="bg-amber-100 px-1 rounded">admin_settings</code></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSettings;
