import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">Liên hệ hợp tác</h2>
            <h3 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
              Sẵn sàng tối ưu <br />
              <span className="text-brand-dark">vật tư cho doanh nghiệp của bạn</span>
            </h3>
            <p className="text-slate-600 text-lg mb-10">
              Để lại thông tin, đội ngũ chuyên gia của Nhân Khang An sẽ liên hệ tư vấn giải pháp phù hợp nhất trong vòng 24h.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-dark/5 rounded-lg flex items-center justify-center text-brand-dark flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Hotline tư vấn 24/7</h4>
                  <p className="text-brand-dark text-xl font-bold">090x.xxx.xxx</p>
                  <p className="text-slate-500 text-sm">Hỗ trợ kỹ thuật & báo giá nhanh</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-dark/5 rounded-lg flex items-center justify-center text-brand-dark flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email bộ phận kinh doanh</h4>
                  <p className="text-slate-600">contact@nhankhangan.vn</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-dark/5 rounded-lg flex items-center justify-center text-brand-dark flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Văn phòng & Kho bãi</h4>
                  <p className="text-slate-600">Khu công nghiệp VSIP, Bình Dương, Việt Nam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle size={48} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Gửi yêu cầu thành công!</h4>
                  <p className="text-slate-600">
                    Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                  </p>
                </div>
                <button 
                  onClick={() => setFormState('idle')}
                  className="btn-secondary"
                >
                  Gửi yêu cầu khác
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Họ và tên *</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Số điện thoại *</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="090x xxx xxx"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Tên doanh nghiệp</label>
                  <input 
                    type="text" 
                    placeholder="Công ty TNHH ABC"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nhóm sản phẩm quan tâm</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all bg-white">
                    <option>Chọn nhóm sản phẩm</option>
                    <option>Keo & Vật liệu đóng gói</option>
                    <option>Dây đai - Vật tư cố định</option>
                    <option>Vít - Kim khí</option>
                    <option>Màng PE - Xốp bảo vệ</option>
                    <option>Vật liệu chống dột - thấm</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nội dung yêu cầu</label>
                  <textarea 
                    rows={4}
                    placeholder="Mô tả nhu cầu vật tư của doanh nghiệp bạn..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all"
                  ></textarea>
                </div>

                <button 
                  disabled={formState === 'submitting'}
                  type="submit" 
                  className="w-full btn-accent py-4 text-lg font-bold flex items-center justify-center space-x-2"
                >
                  {formState === 'submitting' ? (
                    <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <span>Nhận tư vấn giải pháp ngay</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-500 italic">
                  * Chúng tôi cam kết bảo mật thông tin doanh nghiệp của bạn.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
