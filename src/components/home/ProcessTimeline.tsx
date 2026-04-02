import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../../constants';
import * as Icons from 'lucide-react';

const ProcessTimeline = () => {
  return (
    <section className="bg-slate-900 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-light rounded-full blur-[120px]"
        ></motion.div>
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red rounded-full blur-[120px]"
        ></motion.div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-brand-light text-sm font-bold uppercase tracking-widest mb-3">Quy trình vận hành</h2>
          <h3 className="text-3xl md:text-4xl text-white mb-6">5 Bước tối ưu vật tư cho doanh nghiệp</h3>
          <p className="text-slate-400">
            Chúng tôi xây dựng quy trình làm việc chuyên nghiệp, minh bạch, đảm bảo mang lại giá trị thực tế cao nhất cho đối tác.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Connecting Line (Desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-dark via-brand-light to-brand-red -translate-y-1/2 opacity-30 origin-left"
          ></motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = (Icons as any)[step.icon];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, type: 'spring', stiffness: 80 }}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                    className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 whitespace-nowrap"
                    >
                      BƯỚC {step.number}
                    </motion.div>

                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 md:w-16 md:h-16 bg-brand-dark/20 rounded-full flex items-center justify-center text-brand-light mb-6 group-hover:bg-brand-light/20 transition-colors duration-300 border border-brand-light/20"
                    >
                      {IconComponent && <IconComponent size={28} />}
                    </motion.div>

                    <h4 className="text-lg md:text-xl font-bold text-white mb-4">{step.title}</h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(250,46,39,0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-accent text-lg px-12 py-4 group"
          >
            Bắt đầu hợp tác ngay
            <Icons.ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
