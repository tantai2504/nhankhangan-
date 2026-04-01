import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2, ChevronDown, Phone, Building2, PackageSearch } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'Chào Anh/Chị! Nhân Khang An có thể hỗ trợ gì cho doanh nghiệp của mình hôm nay ạ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{ text: `Bạn là trợ lý AI chuyên nghiệp của công ty Nhân Khang An (NKA). 
            Slogan: "Bạn thịnh vượng - Chúng tôi hạnh phúc".
            Lĩnh vực: Cung cấp vật tư công nghiệp (Keo, Dây đai, Vít, Màng PE, Chống thấm).
            Phong cách: Chuyên nghiệp, tận tâm, tập trung giải pháp B2B.
            Nhiệm vụ: Tư vấn giải pháp, KHÔNG BÁN HÀNG TRỰC TIẾP. Gợi ý khách hàng để lại thông tin để chuyên gia liên hệ.
            
            Câu hỏi của khách hàng: ${userMessage}` }]
          }
        ],
        config: {
          systemInstruction: "Hãy trả lời ngắn gọn, chuyên nghiệp bằng tiếng Việt. Nếu khách hàng hỏi về giá, hãy giải thích rằng NKA cung cấp giải pháp tùy chỉnh theo quy mô doanh nghiệp nên cần tư vấn trực tiếp để có giá tốt nhất."
        }
      });

      const botResponse = response.text || "Xin lỗi, tôi gặp chút trục trặc. Anh/Chị vui lòng để lại số điện thoại để chúng tôi gọi lại tư vấn nhé!";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);

      // Logic to trigger lead form after 3 messages
      if (messages.length >= 4 && !showLeadForm) {
        setTimeout(() => setShowLeadForm(true), 1000);
      }
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Tôi đang bận một chút, Anh/Chị có thể gọi hotline 090x.xxx.xxx để được hỗ trợ ngay lập tức ạ!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickActions = [
    { label: 'Tư vấn Logistics', icon: PackageSearch },
    { label: 'Giải pháp Xây dựng', icon: Building2 },
    { label: 'Báo giá doanh nghiệp', icon: Phone },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed inset-x-4 bottom-24 md:absolute md:inset-auto md:bottom-20 md:right-0 bg-white rounded-2xl shadow-2xl w-auto md:w-[400px] h-[70vh] md:h-[500px] flex flex-col border border-slate-200 overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-brand-dark p-4 flex justify-between items-center text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">AI Assistant NKA</h4>
                  <p className="text-[10px] text-brand-light flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                    Đang trực tuyến
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                    ? 'bg-brand-dark text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none">
                    <Loader2 size={16} className="animate-spin text-brand-dark" />
                  </div>
                </div>
              )}
              
              {showLeadForm && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-brand-light/10 border border-brand-light/30 p-4 rounded-xl space-y-3"
                >
                  <p className="text-xs font-bold text-brand-dark">Để lại thông tin để nhận giải pháp chi tiết:</p>
                  <input type="text" placeholder="Tên của bạn" className="w-full text-xs p-2 rounded border border-slate-200 outline-none focus:border-brand-dark" />
                  <input type="tel" placeholder="Số điện thoại" className="w-full text-xs p-2 rounded border border-slate-200 outline-none focus:border-brand-dark" />
                  <button className="w-full bg-brand-dark text-white text-xs font-bold py-2 rounded hover:bg-blue-700 transition-colors">Gửi thông tin</button>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {!isLoading && messages.length < 3 && (
              <div className="px-4 py-2 flex flex-wrap gap-2 bg-slate-50">
                {quickActions.map((action, idx) => (
                  <button 
                    key={idx}
                    onClick={() => {
                      setInput(action.label);
                    }}
                    className="text-[10px] font-bold bg-white border border-slate-200 px-2 py-1 rounded-full text-slate-600 hover:border-brand-dark hover:text-brand-dark transition-all flex items-center"
                  >
                    <action.icon size={12} className="mr-1" />
                    {action.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100 flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Nhập tin nhắn..."
                className="flex-grow text-sm outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="text-brand-dark hover:text-brand-red disabled:text-slate-300 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-red text-white rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        {isOpen ? <ChevronDown size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-dark border-2 border-white rounded-full"></span>
        )}
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg shadow-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-100">
            Tư vấn giải pháp AI
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default AIChatbot;
