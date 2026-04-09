import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [form, setForm] = useState({ name: '', phone: '', company: '', productGroup: '', message: '' });

  const updateField = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setFormState('submitting');
    // TODO: Replace with actual API call to /api/contact endpoint
    setTimeout(() => {
      setFormState('success');
      setForm({ name: '', phone: '', company: '', productGroup: '', message: '' });
    }, 1500);
  };

  const contactItems = [
    {
      icon: Phone,
      title: 'Hotline tư vấn 24/7',
      content: COMPANY_INFO.phone,
      sub: 'Hỗ trợ kỹ thuật & báo giá nhanh',
      highlight: true,
    },
    {
      icon: Mail,
      title: 'Email bộ phận kinh doanh',
      content: COMPANY_INFO.email,
      sub: '',
      highlight: false,
    },
    {
      icon: MapPin,
      title: 'Văn phòng & Kho bãi',
      content: COMPANY_INFO.address,
      sub: '',
      highlight: false,
    },
  ];

  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">Liên hệ hợp tác</h2>
            <h3 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
              Sẵn sàng tối ưu <br />
              <span className="text-brand-dark">vật tư cho doanh nghiệp của bạn</span>
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mb-10">
              Để lại thông tin, đội ngũ chuyên gia của Nhân Khang An sẽ liên hệ tư vấn giải pháp phù hợp nhất trong vòng 24h.
            </p>

            <div className="space-y-6">
              {contactItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-start space-x-4 group cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-brand-dark/5 rounded-lg flex items-center justify-center text-brand-dark shrink-0 group-hover:bg-brand-dark/10 transition-colors duration-300"
                  >
                    <item.icon size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className={item.highlight ? 'text-brand-dark text-xl font-bold' : 'text-slate-600'}>{item.content}</p>
                    {item.sub && <p className="text-slate-500 text-sm">{item.sub}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 p-5 sm:p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="relative"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle size={48} />
                    </div>
                    {/* Celebration particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, x: 0, y: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          x: Math.cos(i * 60 * Math.PI / 180) * 50,
                          y: Math.sin(i * 60 * Math.PI / 180) * 50,
                        }}
                        transition={{ delay: 0.4 + i * 0.05, duration: 0.6 }}
                        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
                        style={{ backgroundColor: ['#176bbf', '#67bed9', '#fa2e27', '#22c55e', '#eab308', '#8b5cf6'][i] }}
                      />
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Gửi yêu cầu thành công!</h4>
                    <p className="text-slate-600">
                      Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                    </p>
                  </motion.div>
                  <motion.button
                    onClick={() => setFormState('idle')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary"
                  >
                    Gửi yêu cầu khác
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Họ và tên *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={e => updateField('name', e.target.value)}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all duration-300 hover:border-brand-dark/30"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Số điện thoại *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={e => updateField('phone', e.target.value)}
                        placeholder="090x xxx xxx"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all duration-300 hover:border-brand-dark/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Tên doanh nghiệp</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => updateField('company', e.target.value)}
                      placeholder="Công ty TNHH ABC"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all duration-300 hover:border-brand-dark/30"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nhóm sản phẩm quan tâm</label>
                    <select value={form.productGroup} onChange={e => updateField('productGroup', e.target.value)} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all duration-300 bg-white hover:border-brand-dark/30">
                      <option>Chọn nhóm sản phẩm</option>
                      <option>Băng keo đóng gói</option>
                      <option>Băng keo Giấy & Băng keo 2 mặt</option>
                      <option>Vật liệu Chống dột & Cách nhiệt</option>
                      <option>Băng keo chuyên dụng</option>
                      <option>Vật liệu đóng gói (Xốp hơi & Màng PE)</option>
                      <option>Dây đai & Dây rút</option>
                      <option>Vật liệu Cảnh báo</option>
                      <option>Kim khí & Dụng cụ</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nội dung yêu cầu</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => updateField('message', e.target.value)}
                      placeholder="Mô tả nhu cầu vật tư của doanh nghiệp bạn..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all duration-300 hover:border-brand-dark/30"
                    ></textarea>
                  </div>

                  <motion.button
                    disabled={formState === 'submitting'}
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(250,46,39,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-accent py-4 text-lg font-bold flex items-center justify-center space-x-2"
                  >
                    {formState === 'submitting' ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full inline-block"
                      ></motion.span>
                    ) : (
                      <>
                        <Sparkles size={20} />
                        <span>Nhận tư vấn giải pháp ngay</span>
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                  <p className="text-center text-xs text-slate-500 italic">
                    * Chúng tôi cam kết bảo mật thông tin doanh nghiệp của bạn.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
