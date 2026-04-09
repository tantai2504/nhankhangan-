import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, Loader2, ChevronDown, Phone, Building2, PackageSearch, Scissors } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { CATEGORIES, COMPANY_INFO } from '../../constants';

// Build product knowledge base from constants
const buildProductKB = () => {
  return CATEGORIES.map(cat => {
    const products = cat.products.map(p =>
      `  - ${p.name}: ${p.description} Quy cách: ${p.features.join(', ')}.`
    ).join('\n');
    return `【${cat.name}】\n${products}`;
  }).join('\n\n');
};

const SYSTEM_PROMPT = `Bạn là trợ lý tư vấn AI của ${COMPANY_INFO.name} (viết tắt: NKA).
Slogan: "${COMPANY_INFO.slogan}"

═══ THÔNG TIN CÔNG TY ═══
• Loại hình: Sản xuất trực tiếp băng keo và màng PE — KHÔNG qua trung gian, giá gốc tại xưởng.
• Nhận gia công theo yêu cầu: kích thước, độ dày, in logo thương hiệu.
• Giao hàng toàn quốc, linh hoạt từ đơn nhỏ đến số lượng lớn.
• Nguyên liệu chất lượng cao, thân thiện môi trường.
• Người sáng lập: Mr. Đỗ Đình Chí — 10+ năm kinh nghiệm.
• Địa chỉ: ${COMPANY_INFO.address}
• SĐT: ${COMPANY_INFO.phone}
• Email: ${COMPANY_INFO.email}

═══ DANH MỤC SẢN PHẨM CHI TIẾT ═══
${buildProductKB()}

═══ QUY TẮC TRẢ LỜI ═══
1. Trả lời bằng tiếng Việt, ngắn gọn (tối đa 3-4 câu), thân thiện nhưng chuyên nghiệp.
2. Khi khách hỏi về sản phẩm → tra cứu danh mục ở trên và trả lời chính xác quy cách, loại.
3. Khi khách hỏi giá → giải thích NKA sản xuất trực tiếp nên giá cạnh tranh, nhưng cần tư vấn cụ thể theo số lượng. Gợi ý gọi ${COMPANY_INFO.phone} hoặc để lại thông tin.
4. Khi khách hỏi gia công/in logo → xác nhận NKA nhận gia công theo yêu cầu (kích thước, độ dày, in logo).
5. Luôn khéo léo gợi ý khách để lại SĐT hoặc gọi hotline để được tư vấn chi tiết hơn.
6. KHÔNG bịa sản phẩm không có trong danh mục. Nếu không chắc, nói "để em chuyển câu hỏi cho bộ phận chuyên môn".
7. Xưng "em" gọi khách "Anh/Chị".`;

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'Chào Anh/Chị! Em là trợ lý tư vấn của Nhân Khang An. Anh/Chị cần tìm hiểu về sản phẩm nào ạ? 😊' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadSent, setLeadSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Show lead form after 4+ messages — properly cleaned up
  useEffect(() => {
    if (messages.length >= 4 && !showLeadForm) {
      const timer = setTimeout(() => setShowLeadForm(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [messages.length, showLeadForm]);

  // Build conversation history for context
  const buildChatHistory = (userMessage: string) => {
    const history = messages.slice(-8).map(m => ({
      role: m.role === 'user' ? 'user' as const : 'model' as const,
      parts: [{ text: m.text }]
    }));
    history.push({ role: 'user', parts: [{ text: userMessage }] });
    return history;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: buildChatHistory(userMessage),
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
          maxOutputTokens: 300,
        }
      });

      const botResponse = response.text || "Xin lỗi, em gặp chút trục trặc. Anh/Chị vui lòng gọi hotline " + COMPANY_INFO.phone + " để được hỗ trợ ngay ạ!";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: `Em đang bận một chút, Anh/Chị có thể gọi hotline ${COMPANY_INFO.phone} để được hỗ trợ ngay lập tức ạ!` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickActions = [
    { label: 'Băng keo đóng gói', icon: PackageSearch },
    { label: 'Gia công in logo', icon: Scissors },
    { label: 'Chống dột & cách nhiệt', icon: Building2 },
    { label: 'Báo giá số lượng lớn', icon: Phone },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100]">
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
                  <h4 className="font-bold text-sm">Tư vấn Nhân Khang An</h4>
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
            <div className="grow overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${
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
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none flex items-center space-x-1">
                    <span className="w-2 h-2 bg-brand-dark/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-brand-dark/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-brand-dark/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}

              {showLeadForm && !leadSent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-brand-light/10 border border-brand-light/30 p-4 rounded-xl space-y-3"
                >
                  <p className="text-xs font-bold text-brand-dark">Để lại thông tin để nhận báo giá chi tiết:</p>
                  <input type="text" placeholder="Tên của bạn" value={leadName} onChange={e => setLeadName(e.target.value)} className="w-full text-xs p-2 rounded border border-slate-200 outline-none focus:border-brand-dark" />
                  <input type="tel" placeholder="Số điện thoại" value={leadPhone} onChange={e => setLeadPhone(e.target.value)} className="w-full text-xs p-2 rounded border border-slate-200 outline-none focus:border-brand-dark" />
                  <button
                    disabled={!leadName.trim() || !leadPhone.trim()}
                    onClick={() => {
                      setLeadSent(true);
                      setMessages(prev => [...prev, { role: 'bot', text: `Cảm ơn ${leadName}! Em đã ghi nhận SĐT ${leadPhone}. Bộ phận kinh doanh sẽ liên hệ Anh/Chị trong thời gian sớm nhất ạ.` }]);
                    }}
                    className="w-full bg-brand-dark text-white text-xs font-bold py-2 rounded hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Gửi thông tin
                  </button>
                </motion.div>
              )}
              {leadSent && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-50 border border-green-200 p-3 rounded-xl text-center">
                  <p className="text-xs text-green-700 font-bold">Đã gửi thông tin thành công!</p>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {!isLoading && messages.length < 3 && (
              <div className="px-3 py-2 flex flex-wrap gap-1.5 bg-slate-50 border-t border-slate-100">
                {quickActions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setInput(action.label); }}
                    className="text-[10px] font-bold bg-white border border-slate-200 px-2.5 py-1.5 rounded-full text-slate-600 hover:border-brand-dark hover:text-brand-dark transition-all flex items-center"
                  >
                    <action.icon size={12} className="mr-1" />
                    {action.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-100 flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Hỏi về sản phẩm, giá, gia công..."
                className="grow text-sm outline-none"
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

        {!isOpen && (
          <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg shadow-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-100">
            Tư vấn sản phẩm
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default AIChatbot;
