import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';

const CtaBanner = () => {
  return (
    <section className="bg-brand-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Cần báo giá nhanh?
            </h3>
            <p className="text-white/70 text-sm md:text-base">
              Gọi ngay hoặc để lại thông tin — chúng tôi phản hồi trong 30 phút.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.a
              href={COMPANY_INFO.phoneHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-white text-brand-dark font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Phone size={20} />
              <span className="text-lg">{COMPANY_INFO.phone}</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-brand-red text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <span>Gửi yêu cầu báo giá</span>
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
