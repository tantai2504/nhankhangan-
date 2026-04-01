import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../../constants';
import { Quote } from 'lucide-react';

const Partners = () => {
  const partners = [
    'https://picsum.photos/seed/logo1/200/100',
    'https://picsum.photos/seed/logo2/200/100',
    'https://picsum.photos/seed/logo3/200/100',
    'https://picsum.photos/seed/logo4/200/100',
    'https://picsum.photos/seed/logo5/200/100',
    'https://picsum.photos/seed/logo6/200/100',
  ];

  return (
    <section id="partners" className="bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">Đối tác & Khách hàng</h2>
          <h3 className="text-3xl md:text-4xl text-slate-900 mb-6">Đồng hành cùng các thương hiệu lớn</h3>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24">
          {partners.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 border border-slate-100"
            >
              <img src={logo} alt="Partner Logo" className="max-h-12 w-auto" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-8 right-8 text-slate-100" size={64} />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.author}</h4>
                    <p className="text-slate-500 text-sm">{t.position} - {t.company}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-lg italic leading-relaxed">
                  "{t.content}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study CTA */}
        <div className="mt-20 bg-brand-dark rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">Bạn muốn tối ưu quy trình vật tư như họ?</h4>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Chúng tôi đã giúp hàng trăm doanh nghiệp tiết kiệm hàng tỷ đồng mỗi năm thông qua giải pháp vật tư thông minh.
            </p>
            <a href="#contact" className="btn-accent text-lg px-10 py-4">
              Nhận Case Study & Tư vấn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
