import React from 'react';
import { motion } from 'motion/react';
import { AWARDS } from '../../constants';
import { Trophy, Award as AwardIcon, Star } from 'lucide-react';

const AwardsCarousel = () => {
  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">Giải thưởng & Chứng nhận</h2>
          <h3 className="text-3xl md:text-4xl text-slate-900 mb-6">Cam kết chất lượng chuẩn quốc tế</h3>
        </div>

        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
            {AWARDS.map((award, idx) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="min-w-[300px] md:min-w-[400px] snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-dark shadow-lg">
                    <Trophy size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-brand-red font-bold text-lg">{award.year}</span>
                    <div className="h-px w-8 bg-slate-200"></div>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{award.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center space-x-2">
            {AWARDS.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-brand-dark w-6' : 'bg-slate-300'} transition-all`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsCarousel;
