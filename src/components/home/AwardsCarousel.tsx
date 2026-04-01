import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AWARDS } from '../../constants';
import { Award, X } from 'lucide-react';

const AwardsCarousel = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedAward = AWARDS.find(a => a.id === selected);

  return (
    <section className="bg-slate-50 py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">Chứng nhận & Thành viên</h2>
          <h3 className="text-3xl md:text-4xl text-slate-900 mb-4">Được công nhận bởi các tổ chức uy tín</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Nhân Khang An tự hào là thành viên của nhiều hiệp hội và câu lạc bộ doanh nhân hàng đầu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {AWARDS.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(award.id)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brand-dark/20 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Year badge */}
                <div className="absolute top-3 right-3 bg-brand-dark text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {award.year}
                </div>
                {/* Zoom hint */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-slate-600 text-[10px] font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Nhấn để xem
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 bg-brand-dark/10 rounded-lg flex items-center justify-center text-brand-dark shrink-0 mt-0.5">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-brand-dark transition-colors">{award.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            >
              <div className="relative">
                <img
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  className="w-full h-auto max-h-[60vh] object-contain bg-slate-50"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-colors shadow-lg"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-brand-dark font-bold text-sm">{selectedAward.year}</span>
                  <div className="h-px grow bg-slate-200"></div>
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">{selectedAward.title}</h4>
                <p className="text-slate-500 text-sm">{selectedAward.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AwardsCarousel;
