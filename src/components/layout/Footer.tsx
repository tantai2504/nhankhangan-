import React from 'react';
import { Facebook, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';
import logo from '../../assets/images/Logo-removebg.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={logo} alt="Nhân Khang An" className="h-14 w-auto brightness-0 invert" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Chuyên sản xuất và cung cấp các loại băng keo, màng PE chất lượng cao. Sản xuất trực tiếp — giá gốc tại xưởng.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors">
                <Facebook size={20} />
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors">
                <Mail size={20} />
              </a>
              <a href={COMPANY_INFO.phoneHref} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-light pl-3">Liên kết nhanh</h4>
            <ul className="space-y-4">
              {[
                { name: 'Về chúng tôi', href: '#about' },
                { name: 'Sản phẩm', href: '#products' },
                { name: 'Năng lực', href: '#capabilities' },
                { name: 'Liên hệ', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 hover:text-brand-light transition-colors flex items-center group">
                    <ArrowUpRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Groups */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3">Nhóm sản phẩm</h4>
            <ul className="space-y-4">
              {['Băng keo đóng gói', 'Băng keo Giấy & 2 mặt', 'Chống dột & Cách nhiệt', 'Băng keo chuyên dụng', 'Xốp hơi & Màng PE', 'Dây đai & Dây rút', 'Kim khí & Dụng cụ'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-slate-400 hover:text-brand-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-light pl-3">Thông tin liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-brand-light mt-1 shrink-0" />
                <span className="text-slate-400 text-sm">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-light shrink-0" />
                <a href={COMPANY_INFO.phoneHref} className="text-slate-400 text-sm hover:text-brand-light transition-colors">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-light shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-400 text-sm hover:text-brand-light transition-colors">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
