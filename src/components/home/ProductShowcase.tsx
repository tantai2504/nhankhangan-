import React from 'react';
import { LayoutGroup } from 'motion/react';
import { Phone } from 'lucide-react';
import { Category } from '../../types';
import { LargeProductCard, SmallProductCard } from './ProductCard';

interface Props {
  category: Category;
  featuredId: string;
  onSelectProduct: (id: string) => void;
}

const ProductShowcase = ({ category, featuredId, onSelectProduct }: Props) => {
  const featured = category.products.find(p => p.id === featuredId) || category.products[0];
  const others = category.products.filter(p => p.id !== featured.id);

  return (
    <LayoutGroup id={`showcase-${category.id}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: grid 3:2 / Mobile: stack */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-5">
          {/* Large card */}
          <div className="lg:col-span-3">
            <LargeProductCard product={featured} />
          </div>

          {/* Small cards */}
          <div className="lg:col-span-2">
            {/* Desktop: vertical scroll */}
            <div className="hidden lg:flex flex-col gap-3 max-h-[520px] overflow-y-auto no-scrollbar pr-1">
              {others.map(p => (
                <div key={p.id}>
                  <SmallProductCard
                    product={p}
                    onClick={() => onSelectProduct(p.id)}
                  />
                </div>
              ))}
              <CtaMiniCard />
            </div>

            {/* Mobile: horizontal scroll */}
            <div className="lg:hidden flex overflow-x-auto gap-3 no-scrollbar snap-x snap-mandatory pb-2">
              {others.map(p => (
                <div key={p.id} className="snap-start shrink-0">
                  <SmallProductCard
                    product={p}
                    onClick={() => onSelectProduct(p.id)}
                  />
                </div>
              ))}
              <div className="snap-start shrink-0">
                <CtaMiniCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutGroup>
  );
};

const CtaMiniCard = () => (
  <div className="shrink-0 w-[160px] lg:w-full bg-brand-dark rounded-xl p-4 flex flex-col items-center justify-center text-center text-white">
    <Phone size={24} className="mb-2 text-brand-light" />
    <p className="font-bold text-sm mb-1">Cần báo giá?</p>
    <p className="text-white/60 text-[10px] mb-3">Giá sỉ tốt nhất</p>
    <a
      href="#contact"
      className="bg-brand-red text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-red-700 active:scale-95 transition-all w-full text-center"
    >
      Liên hệ ngay
    </a>
  </div>
);

export default ProductShowcase;
