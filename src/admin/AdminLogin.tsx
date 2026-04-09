import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, Loader2 } from 'lucide-react';
import { apiLogin, setToken, isLoggedIn } from '../services/api';
import logo from '../assets/images/Logo-removebg.png';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (isLoggedIn()) navigate('/admin', { replace: true });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { token } = await apiLogin(username, password);
      setToken(token);
      navigate('/admin', { replace: true });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark to-blue-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="NKA" className="h-16 mb-3" />
          <h1 className="text-xl font-bold text-slate-900">Quản trị Nhân Khang An</h1>
          <p className="text-sm text-slate-500 mt-1">Đăng nhập để quản lý sản phẩm</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-bold text-slate-700 block mb-1.5">Tên đăng nhập</label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                placeholder="admin"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-slate-700 block mb-1.5">Mật khẩu</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-dark text-white font-bold py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? <Loader2 size={20} className="animate-spin" /> : 'Đăng nhập'}
          </button>
        </form>

        <a href="/" className="block text-center text-xs text-slate-400 hover:text-brand-dark mt-6 transition-colors">
          ← Về trang chủ
        </a>
      </div>
    </div>
  );
};

export default AdminLogin;
