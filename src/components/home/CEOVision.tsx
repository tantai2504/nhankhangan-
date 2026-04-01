import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import ceoImg from '../../assets/images/anh-ceo.jpg';

const CEOVision = () => {
  return (
    <section className="bg-white py-16">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={ceoImg}
                alt="CEO Nhân Khang An"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-light/20 rounded-full blur-2xl animate-float-slow"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-red/15 rounded-full blur-xl animate-float-delay"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3"
            >
              Người sáng lập
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative mb-6"
            >
              <Quote className="absolute -top-4 -left-4 text-slate-100" size={60} />
              <p className="text-lg text-slate-700 italic leading-relaxed relative z-10">
                "Tại Nhân Khang An, chúng tôi không định nghĩa thành công bằng doanh số, mà bằng sự thịnh vượng của khách hàng."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <h4 className="text-xl font-bold text-slate-900">Mr. Đỗ Đình Chí</h4>
              <p className="text-brand-dark font-medium text-sm">Founder & CEO - C.TY Nhân Khang An</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-slate-600 text-sm leading-relaxed mb-8"
            >
              Với hơn 10 năm kinh nghiệm trong ngành vật tư công nghiệp, đã dẫn dắt công ty trở thành đối tác chiến lược của hàng trăm doanh nghiệp tại Việt Nam.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-6"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <p className="text-2xl font-bold text-brand-dark">10+</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold">Năm kinh nghiệm</p>
              </motion.div>
              <div className="w-px h-8 bg-slate-200"></div>
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <p className="text-2xl font-bold text-brand-dark">200+</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold">Dự án thành công</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEOVision;
