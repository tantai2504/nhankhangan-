import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Product } from '../../types';

const spring = { type: 'spring' as const, stiffness: 350, damping: 30 };

export const LargeProductCard = ({ product }: { product: Product }) => (
  <motion.div
    layout
    className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100"
  >
    <motion.div
      layoutId={`product-img-${product.id}`}
      transition={spring}
      className="h-64 sm:h-72 lg:h-[340px] overflow-hidden bg-slate-50"
    >
      <motion.img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
        initial={false}
      />
    </motion.div>

    <div className="p-5 lg:p-7">
      <motion.h4
        layoutId={`product-name-${product.id}`}
        transition={spring}
        className="text-xl lg:text-2xl font-bold text-slate-900 mb-2"
      >
        {product.name}
      </motion.h4>
      <p className="text-slate-600 text-sm lg:text-base mb-4">{product.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {product.features.map((f, i) => (
          <span
            key={i}
            className="text-xs bg-brand-bg border border-brand-dark/10 px-3 py-1.5 rounded-lg text-brand-dark font-medium"
          >
            {f}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center text-brand-dark text-xs font-bold">
          <ShieldCheck size={16} className="mr-1" />
          Sản phẩm chất lượng
        </div>
        <a
          href="#contact"
          className="inline-flex items-center bg-brand-dark text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 active:scale-95 transition-all"
        >
          Báo giá
          <ArrowRight size={14} className="ml-1.5" />
        </a>
      </div>
    </div>
  </motion.div>
);

export const SmallProductCard = ({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) => (
  <motion.button
    layout
    onClick={onClick}
    whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
    whileTap={{ scale: 0.97 }}
    className="shrink-0 w-[160px] lg:w-full bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 hover:border-brand-dark/30 transition-colors cursor-pointer text-left"
  >
    {/* Mobile: vertical / Desktop: horizontal */}
    <div className="flex flex-col lg:flex-row">
      <motion.div
        layoutId={`product-img-${product.id}`}
        transition={spring}
        className="lg:w-24 lg:h-24 w-full h-28 overflow-hidden bg-slate-50 shrink-0"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="p-3 grow min-w-0">
        <motion.h4
          layoutId={`product-name-${product.id}`}
          transition={spring}
          className="font-bold text-sm text-slate-900 truncate"
        >
          {product.name}
        </motion.h4>
        <p className="text-slate-500 text-[11px] line-clamp-1 mt-0.5">
          {product.description}
        </p>
        <div className="flex gap-1 mt-1.5 flex-wrap">
          {product.features.slice(0, 2).map((f, i) => (
            <span
              key={i}
              className="text-[10px] bg-brand-bg px-1.5 py-0.5 rounded text-brand-dark font-medium"
            >
              {f}
            </span>
          ))}
          {product.features.length > 2 && (
            <span className="text-[10px] text-brand-dark font-bold">
              +{product.features.length - 2}
            </span>
          )}
        </div>
      </div>
    </div>
  </motion.button>
);
