import React from 'react';
import { motion } from 'motion/react';

const ZALO_PHONE = '0944272726';
const ZALO_URL = `https://zalo.me/${ZALO_PHONE}`;

const ZaloButton = () => {
  return (
    <motion.a
      href={ZALO_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-[99] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center group"
      style={{ backgroundColor: '#0068FF' }}
      title="Chat Zalo"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#0068FF] animate-ping opacity-30"></span>

      {/* Zalo logo SVG */}
      <svg viewBox="0 0 32 32" className="w-7 h-7 relative" fill="white">
        <path d="M16.001 0C7.165 0 0 6.39 0 14.275c0 4.493 2.336 8.5 5.987 11.117l-1.066 3.51c-.187.617.49 1.117 1.043.78l3.79-2.32c1.93.7 4.04 1.087 6.246 1.087C24.835 28.45 32 22.06 32 14.176 32 6.39 24.836 0 16.001 0z"/>
        <text x="16" y="19" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#0068FF" fontFamily="Arial">Zalo</text>
      </svg>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 bg-white text-slate-900 px-3 py-1.5 rounded-lg shadow-xl text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-100">
        Chat Zalo
      </div>
    </motion.a>
  );
};

export default ZaloButton;
