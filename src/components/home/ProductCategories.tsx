import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { CATEGORIES } from '../../constants';
import { Product } from '../../types';

const ALL_PRODUCTS = CATEGORIES.flatMap(cat => cat.products);

// 4 danh mục chính hiển thị phía trên
const TOP_CATEGORIES = [
  { label: 'Băng keo', icon: 'Package', filter: ['tape-packing', 'tape-paper', 'tape-specialty'], desc: 'Đóng gói, niêm phong, che sơn, cách điện — đa dạng từ trong, đục, giấy, 2 mặt đến chuyên dụng' },
  { label: 'Chống dột', icon: 'Home', filter: ['waterproofing'], desc: 'Xử lý chống dột mái tôn, mái ngói, sân thượng — thi công nhanh, tiết kiệm chi phí sửa chữa' },
  { label: 'Đóng gói', icon: 'ShieldCheck', filter: ['packaging', 'strapping', 'warning'], desc: 'Xốp hơi, màng PE, dây đai, dây rút — bảo vệ hàng hoá khi vận chuyển và lưu kho' },
  { label: 'Kim khí', icon: 'Hammer', filter: ['hardware'], desc: 'Vít bắn tôn, ngói, thạch cao, gỗ — keo nến, dao cắt — dụng cụ thiết yếu cho xây dựng' },
];

const ProductCategories = () => {
  const [activeGroup, setActiveGroup] = useState<number | null>(null); // null = all
  const [featuredId, setFeaturedId] = useState(ALL_PRODUCTS[0].id);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Filtered products based on active group
  const filtered = activeGroup !== null
    ? ALL_PRODUCTS.filter(p => TOP_CATEGORIES[activeGroup].filter.includes(p.category))
    : ALL_PRODUCTS;

  const featured = filtered.find(p => p.id === featuredId) || filtered[0];
  const others = filtered.filter(p => p.id !== featured.id);
  const currentIdx = filtered.findIndex(p => p.id === featured.id);

  // Auto-play: cycle through products
  const goToNext = useCallback(() => {
    const idx = currentIdx < filtered.length - 1 ? currentIdx + 1 : 0;
    setFeaturedId(filtered[idx].id);
  }, [currentIdx, filtered]);

  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(goToNext, 3500);
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlay, goToNext]);

  // Pause auto-play on interaction, resume after 8s
  const pauseAutoPlay = () => {
    setIsAutoPlay(false);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const handleSelect = (p: Product) => {
    if (p.id === featuredId) return;
    pauseAutoPlay();
    setFeaturedId(p.id);
  };

  const goPrev = () => {
    pauseAutoPlay();
    const idx = currentIdx > 0 ? currentIdx - 1 : filtered.length - 1;
    setFeaturedId(filtered[idx].id);
  };

  const goNextManual = () => {
    pauseAutoPlay();
    goToNext();
  };

  // Reset featured when group changes
  useEffect(() => {
    const prods = activeGroup !== null
      ? ALL_PRODUCTS.filter(p => TOP_CATEGORIES[activeGroup].filter.includes(p.category))
      : ALL_PRODUCTS;
    setFeaturedId(prods[0]?.id || ALL_PRODUCTS[0].id);
  }, [activeGroup]);

  return (
    <section id="products" className="bg-brand-bg">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">Sản phẩm chính hãng — Giá gốc tại xưởng</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 mb-3">Hơn {ALL_PRODUCTS.length} sản phẩm sẵn kho</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Sản xuất trực tiếp, đa dạng quy cách — phục vụ đóng gói, xây dựng, sản xuất công nghiệp. Nhận gia công theo yêu cầu.
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {/* All */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => { setActiveGroup(null); pauseAutoPlay(); }}
            className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl text-center transition-all duration-300 border-2 ${
              activeGroup === null
                ? 'bg-brand-dark text-white border-brand-dark shadow-lg'
                : 'bg-white text-slate-600 border-slate-200 hover:border-brand-dark/30 hover:shadow-md'
            }`}
          >
            <Icons.LayoutGrid size={20} className="mb-1" />
            <span className="font-bold text-sm">Tất cả</span>
            <span className={`text-[10px] mt-0.5 ${activeGroup === null ? 'text-white/70' : 'text-slate-400'}`}>{ALL_PRODUCTS.length} sản phẩm</span>
          </motion.button>

          {TOP_CATEGORIES.map((cat, idx) => {
            const Icon = (Icons as any)[cat.icon];
            const count = ALL_PRODUCTS.filter(p => cat.filter.includes(p.category)).length;
            const isActive = activeGroup === idx;
            return (
              <motion.button
                key={idx}
                whileTap={{ scale: 0.96 }}
                onClick={() => { setActiveGroup(idx); pauseAutoPlay(); }}
                className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl text-center transition-all duration-300 border-2 ${
                  isActive
                    ? 'bg-brand-dark text-white border-brand-dark shadow-lg'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-brand-dark/30 hover:shadow-md'
                }`}
              >
                {Icon && <Icon size={20} className="mb-1" />}
                <span className="font-bold text-sm">{cat.label}</span>
                <span className={`text-[10px] mt-0.5 ${isActive ? 'text-white/70' : 'text-slate-400'}`}>{count} sản phẩm</span>
              </motion.button>
            );
          })}
        </div>

        {/* Group description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeGroup ?? 'all'}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center text-sm text-slate-600 mb-6 max-w-xl mx-auto"
          >
            {activeGroup !== null
              ? TOP_CATEGORIES[activeGroup].desc
              : 'Chọn danh mục để lọc sản phẩm theo nhu cầu của bạn'
            }
          </motion.p>
        </AnimatePresence>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 items-start">

          {/* ===== FEATURED SPOTLIGHT ===== */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 relative"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-80 lg:h-[420px] overflow-hidden">
                  <motion.img
                    key={`img-${featured.id}`}
                    initial={{ scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    src={featured.image}
                    alt={featured.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                  {/* Title on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <motion.h4
                      key={`t-${featured.id}`}
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg"
                    >
                      {featured.name}
                    </motion.h4>
                    <motion.p
                      key={`d-${featured.id}`}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-white/80 text-sm mt-1 hidden sm:block"
                    >
                      {featured.description}
                    </motion.p>
                  </div>

                  {/* Nav arrows */}
                  <button onClick={goPrev} className="absolute top-1/2 -translate-y-1/2 left-3 w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg active:scale-90 hover:bg-white transition-all">
                    <Icons.ChevronLeft size={20} className="text-slate-700" />
                  </button>
                  <button onClick={goNextManual} className="absolute top-1/2 -translate-y-1/2 right-3 w-10 h-10 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg active:scale-90 hover:bg-white transition-all">
                    <Icons.ChevronRight size={20} className="text-slate-700" />
                  </button>

                  {/* Counter + autoplay indicator */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {currentIdx + 1} / {filtered.length}
                    </div>
                    <button
                      onClick={() => setIsAutoPlay(!isAutoPlay)}
                      className="bg-black/50 backdrop-blur-sm text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                      title={isAutoPlay ? 'Tạm dừng' : 'Tự động chạy'}
                    >
                      {isAutoPlay ? <Icons.Pause size={14} /> : <Icons.Play size={14} />}
                    </button>
                  </div>

                  {/* Progress bar (auto-play) */}
                  {isAutoPlay && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                      <motion.div
                        key={`prog-${featured.id}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3.5, ease: 'linear' }}
                        className="h-full bg-brand-light"
                      />
                    </div>
                  )}
                </div>

                {/* Details below image */}
                <motion.div
                  key={`info-${featured.id}`}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="p-5 lg:p-6"
                >
                  <p className="text-slate-600 text-sm mb-4 sm:hidden">{featured.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featured.features.map((f, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.03 }}
                        className="text-xs bg-brand-dark/5 border border-brand-dark/10 px-3 py-1.5 rounded-full text-brand-dark font-semibold"
                      >
                        {f}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ===== SMALL CARDS ===== */}
          <SmallCardsPanel others={others} featured={featured} onSelect={handleSelect} />
        </div>
      </div>
    </section>
  );
};

/* ===== Small Cards Panel with scroll buttons ===== */
const SmallCardsPanel = ({ others, featured, onSelect }: {
  others: typeof ALL_PRODUCTS;
  featured: typeof ALL_PRODUCTS[0];
  onSelect: (p: typeof ALL_PRODUCTS[0]) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 10);
    setCanScrollDown(el.scrollTop < el.scrollHeight - el.clientHeight - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    return () => el.removeEventListener('scroll', checkScroll);
  }, [others]);

  const scroll = (dir: 'up' | 'down') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ top: dir === 'down' ? 280 : -280, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Desktop: grid with scroll buttons */}
      <div className="hidden lg:block relative">
        {/* Scroll up button */}
        {canScrollUp && (
          <button
            onClick={() => scroll('up')}
            className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 w-10 h-10 bg-white rounded-full border border-slate-200 flex items-center justify-center shadow-md hover:shadow-lg hover:bg-slate-50 transition-all"
          >
            <Icons.ChevronUp size={20} className="text-slate-600" />
          </button>
        )}

        {/* Scrollable grid — height matches large card */}
        <div
          ref={scrollRef}
          className="max-h-[520px] overflow-y-auto no-scrollbar scroll-smooth"
        >
          <div className="grid grid-cols-2 gap-3">
            {others.map((p, idx) => (
              <motion.button
                key={p.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(idx * 0.02, 0.3) }}
                whileHover={{ y: -3, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onSelect(p)}
                className={`bg-white rounded-xl overflow-hidden border cursor-pointer text-left transition-all duration-200 ${
                  p.id === featured.id ? 'border-brand-dark ring-2 ring-brand-dark/20' : 'border-slate-100 hover:border-brand-dark/30'
                }`}
              >
                <div className="h-20 overflow-hidden bg-slate-50">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-2">
                  <h5 className="font-bold text-[11px] text-slate-900 truncate">{p.name}</h5>
                  <p className="text-[9px] text-slate-600 truncate mt-0.5">{p.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Scroll down button */}
        {canScrollDown && (
          <button
            onClick={() => scroll('down')}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 w-10 h-10 bg-white rounded-full border border-slate-200 flex items-center justify-center shadow-md hover:shadow-lg hover:bg-slate-50 transition-all"
          >
            <Icons.ChevronDown size={20} className="text-slate-600" />
          </button>
        )}

        {/* Fade hint at bottom */}
        {canScrollDown && (
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none"></div>
        )}
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="lg:hidden mt-4">
        <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3">Xem thêm sản phẩm</p>
        <div className="flex overflow-x-auto gap-3 no-scrollbar snap-x snap-mandatory pb-2">
          {others.slice(0, 12).map(p => (
            <button
              key={p.id}
              onClick={() => onSelect(p)}
              className="snap-start shrink-0 w-28 bg-white rounded-xl overflow-hidden border border-slate-100 active:scale-95 transition-transform text-left"
            >
              <div className="h-24 overflow-hidden bg-slate-50">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <p className="p-2 font-bold text-[11px] text-slate-900 truncate">{p.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
