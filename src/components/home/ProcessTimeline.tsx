import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../../constants';
import * as Icons from 'lucide-react';

const ProcessTimeline = () => {
  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-light rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red rounded-full blur-[120px]"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-light text-sm font-bold uppercase tracking-widest mb-3">Quy trình vận hành</h2>
          <h3 className="text-3xl md:text-4xl text-white mb-6">5 Bước tối ưu vật tư cho doanh nghiệp</h3>
          <p className="text-slate-400">
            Chúng tôi xây dựng quy trình làm việc chuyên nghiệp, minh bạch, đảm bảo mang lại giá trị thực tế cao nhất cho đối tác.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-dark via-brand-light to-brand-red -translate-y-1/2 opacity-30"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = (Icons as any)[step.icon];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-dark text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 whitespace-nowrap">
                      BƯỚC {step.number}
                    </div>
                    
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-dark/20 rounded-full flex items-center justify-center text-brand-light mb-6 group-hover:scale-110 transition-transform duration-300 border border-brand-light/20">
                      {IconComponent && <IconComponent size={28} />}
                    </div>
                    
                    <h4 className="text-lg md:text-xl font-bold text-white mb-4">{step.title}</h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a href="#contact" className="btn-accent text-lg px-12 py-4 group">
            Bắt đầu hợp tác ngay
            <Icons.ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
