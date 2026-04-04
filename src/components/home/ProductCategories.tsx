import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { CATEGORIES } from '../../constants';

const PROMO_LINE_1 = 'Sản xuất trực tiếp — Giá gốc tại xưởng — Gia công theo yêu cầu — Giao hàng toàn quốc — In logo thương hiệu — Bán sỉ số lượng lớn';
const PROMO_LINE_2 = 'Băng keo trong ★ Băng keo đục ★ Màng PE ★ Xốp hơi ★ Dây đai PP ★ Vít bắn tôn ★ Chống dột X2000 ★ Băng keo 3M ★ Dao cắt keo ★ Dây rút';

const ProductCategories = () => {
  const [activeCat, setActiveCat] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const expandRef = useRef<HTMLDivElement>(null);

  const filtered = activeCat === 'all'
    ? CATEGORIES.flatMap(c => c.products)
    : CATEGORIES.find(c => c.id === activeCat)?.products || [];

  const activeName = activeCat === 'all'
    ? 'Tất cả sản phẩm'
    : CATEGORIES.find(c => c.id === activeCat)?.name || '';

  const expandedProduct = expandedId ? filtered.find(p => p.id === expandedId) || null : null;

  // Smooth scroll to expanded card
  useEffect(() => {
    if (expandedId && expandRef.current) {
      setTimeout(() => {
        expandRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [expandedId]);

  const handleCardClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="products" className="bg-brand-bg">
      {/* ===== MARQUEE BANNER ===== */}
      <div className="bg-brand-dark overflow-hidden">
        <div className="flex animate-marquee hover:[animation-play-state:paused] py-2.5">
          {[1, 2, 3].map(i => (
            <span key={i} className="shrink-0 text-white/90 text-xs sm:text-sm font-bold whitespace-nowrap mx-4">
              {PROMO_LINE_1.split('—').map((t, j) => (
                <span key={j}>
                  {j > 0 && <span className="text-brand-light mx-2">★</span>}
                  {t.trim()}
                </span>
              ))}
              <span className="text-brand-light mx-4">★</span>
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused] py-2 bg-brand-dark/80 border-t border-white/5">
          {[1, 2, 3].map(i => (
            <span key={i} className="shrink-0 text-brand-light/80 text-[11px] sm:text-xs whitespace-nowrap mx-4 tracking-wide">
              {PROMO_LINE_2}
              <span className="mx-4">★</span>
            </span>
          ))}
        </div>
      </div>

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-2">Sản phẩm chính hãng — Giá gốc tại xưởng</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 mb-3">Hơn 35 sản phẩm sẵn kho, giao ngay</h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            Chọn danh mục bên dưới để xem chi tiết từng sản phẩm — nhấn vào sản phẩm để xem quy cách và thông số.
          </p>
        </motion.div>

        {/* ===== MAIN LAYOUT ===== */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* --- SIDEBAR (Desktop) --- */}
          <div className="hidden lg:block w-[220px] shrink-0">
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden sticky top-24">
              <div className="bg-brand-dark p-4">
                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                  <Icons.LayoutGrid size={16} />
                  Danh mục
                </h4>
              </div>
              <nav className="p-2">
                <button
                  onClick={() => { setActiveCat('all'); setExpandedId(null); }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-bold transition-all mb-1 ${
                    activeCat === 'all' ? 'bg-brand-dark text-white' : 'text-slate-700 hover:bg-brand-bg'
                  }`}
                >
                  Tất cả ({CATEGORIES.flatMap(c => c.products).length})
                </button>
                {CATEGORIES.map(cat => {
                  const Icon = (Icons as any)[cat.icon];
                  return (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveCat(cat.id); setExpandedId(null); }}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all mb-1 flex items-center gap-2 ${
                        activeCat === cat.id ? 'bg-brand-dark text-white' : 'text-slate-600 hover:bg-brand-bg hover:text-brand-dark'
                      }`}
                    >
                      {Icon && <Icon size={15} className="shrink-0" />}
                      <span className="truncate">{cat.name}</span>
                      <span className={`ml-auto text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ${
                        activeCat === cat.id ? 'bg-white/20' : 'bg-slate-100 text-slate-400'
                      }`}>{cat.products.length}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* --- MOBILE TABS (sticky) --- */}
          <div className="lg:hidden sticky top-[56px] z-30 bg-brand-bg/95 backdrop-blur-sm pt-2 pb-3 -mx-4 px-4 flex overflow-x-auto gap-2 no-scrollbar border-b border-slate-200/50">
            <button
              onClick={() => { setActiveCat('all'); setExpandedId(null); }}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeCat === 'all' ? 'bg-brand-dark text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              Tất cả
            </button>
            {CATEGORIES.map(cat => {
              const Icon = (Icons as any)[cat.icon];
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCat(cat.id); setExpandedId(null); }}
                  className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCat === cat.id ? 'bg-brand-dark text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  {Icon && <Icon size={14} />}
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* --- PRODUCT GRID (Bento) --- */}
          <div className="grow">
            <div className="flex items-center justify-between mb-4">
              <p className="text-slate-900 font-bold text-lg">{activeName}</p>
              <p className="text-slate-600 text-sm">{filtered.length} sản phẩm</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4" style={{ gridAutoFlow: 'dense' }}>
              {filtered.map((p) => {
                const isExp = expandedId === p.id;
                return (
                  <motion.div
                    key={p.id}
                    ref={isExp ? expandRef : undefined}
                    layout
                    transition={{ layout: { duration: 0.35, ease: 'easeInOut' } }}
                    onClick={() => handleCardClick(p.id)}
                    className={`bg-white rounded-xl overflow-hidden border cursor-pointer transition-shadow duration-200 ${
                      isExp
                        ? 'col-span-2 row-span-2 border-brand-dark shadow-xl ring-1 ring-brand-dark/20'
                        : 'border-slate-100 hover:border-brand-dark/20 hover:shadow-lg'
                    }`}
                  >
                    {isExp ? (
                      /* ===== EXPANDED 2x2 ===== */
                      <div className="h-full flex flex-col">
                        <div className="relative aspect-square overflow-hidden bg-slate-50">
                          <motion.img
                            key={`img-${p.id}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={(e) => { e.stopPropagation(); setExpandedId(null); }}
                            className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
                          >
                            <Icons.X size={16} className="text-slate-600" />
                          </button>
                        </div>
                        <div className="p-3 sm:p-4">
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{p.name}</h4>
                          <p className="text-slate-600 text-xs leading-relaxed mb-2 line-clamp-2">{p.description}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {p.features.map((f, i) => (
                              <span key={i} className="text-[10px] bg-brand-bg border border-brand-dark/10 px-2 py-0.5 rounded-full text-brand-dark font-semibold">{f}</span>
                            ))}
                          </div>
                          <a
                            href="#contact"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center bg-brand-dark text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
                          >
                            Báo giá
                            <Icons.ArrowRight size={12} className="ml-1" />
                          </a>
                        </div>
                      </div>
                    ) : (
                      /* ===== NORMAL 1x1 — square ===== */
                      <div className="group h-full flex flex-col">
                        <div className="aspect-square overflow-hidden bg-slate-50">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div className="p-2.5">
                          <h5 className="font-bold text-xs sm:text-sm text-slate-900 truncate group-hover:text-brand-dark transition-colors">{p.name}</h5>
                          <p className="text-slate-600 text-[10px] line-clamp-1 mt-0.5">{p.description}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
