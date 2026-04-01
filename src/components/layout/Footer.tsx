import React from 'react';
import { Facebook, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center text-white font-bold text-xl">
                NKA
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                NHÂN KHANG AN
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nhà cung cấp giải pháp vật tư công nghiệp hàng đầu, đồng hành cùng sự phát triển bền vững của doanh nghiệp Việt.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-light pl-3">Liên kết nhanh</h4>
            <ul className="space-y-4">
              {['Về chúng tôi', 'Danh mục sản phẩm', 'Năng lực cung ứng', 'Đối tác chiến lược', 'Tin tức ngành'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-brand-light transition-colors flex items-center group">
                    <ArrowUpRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Groups */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-red pl-3">Nhóm sản phẩm</h4>
            <ul className="space-y-4">
              {['Keo công nghiệp', 'Dây đai đóng gói', 'Vít & Kim khí', 'Màng PE bảo vệ', 'Chống thấm dột'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-brand-light transition-colors">
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
                <MapPin size={20} className="text-brand-light mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">KCN VSIP, Bình Dương, Việt Nam</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-light flex-shrink-0" />
                <span className="text-slate-400 text-sm">090x.xxx.xxx</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-light flex-shrink-0" />
                <span className="text-slate-400 text-sm">contact@nhankhangan.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© {currentYear} NHÂN KHANG AN. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
