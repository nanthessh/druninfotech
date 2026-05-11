import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const BOT_RESPONSES = {
  default: "Thanks for reaching out! I'm DRUN's AI assistant. How can I help you today?",
  greet: "Hey there! 👋 Welcome to DRUN Technology. What can I help you with?",
  services: "We offer: \n• Web App Development\n• Mobile Apps (iOS/Android)\n• AI Solutions\n• UI/UX Design\n\nWhich interests you most?",
  price: "Our pricing depends on project scope. Typically:\n• MVP: $5k–$15k\n• Full Product: $15k–$50k+\n\nWant a free estimate? Fill our contact form!",
  contact: "You can reach us at:\n📧 drun.infotech@gmail.com\n📞 +91 93602 66792\n\nOr fill the contact form below!",
  timeline: "Our typical timeline:\n• Discovery: 1–2 days\n• Design: 1 week\n• Development: 4–6 weeks\n• Launch: Week 8\n\nFast delivery guaranteed!",
  tech: "Our tech stack:\n• Frontend: React, Next.js\n• Backend: Node.js, Python\n• Mobile: React Native\n• Cloud: AWS, Vercel\n• AI: OpenAI, TensorFlow",
};

function getResponse(msg) {
  const m = msg.toLowerCase();
  if (m.match(/hi|hello|hey/)) return BOT_RESPONSES.greet;
  if (m.match(/service|offer|do you/)) return BOT_RESPONSES.services;
  if (m.match(/price|cost|how much|budget/)) return BOT_RESPONSES.price;
  if (m.match(/contact|email|phone|reach/)) return BOT_RESPONSES.contact;
  if (m.match(/time|timeline|how long|week/)) return BOT_RESPONSES.timeline;
  if (m.match(/tech|stack|language|framework/)) return BOT_RESPONSES.tech;
  return "Great question! For detailed info, please email us at drun.infotech@gmail.com or fill the contact form. We reply within 24 hours! 🚀";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: BOT_RESPONSES.default }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { from: 'user', text: userMsg }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { from: 'bot', text: getResponse(userMsg) }]);
    }, 1000);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand rounded-full flex items-center justify-center shadow-lg glow-lg"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={22} className="text-white" /></motion.div>
            : <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><MessageCircle size={22} className="text-white" /></motion.div>
          }
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-dark-card border border-dark-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">DRUN Assistant</div>
                <div className="flex items-center gap-1 text-xs text-white/70">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm whitespace-pre-line ${
                    msg.from === 'user'
                      ? 'bg-brand text-white rounded-br-none'
                      : 'bg-white/10 text-gray-200 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white/10 px-4 py-2 rounded-xl rounded-bl-none">
                    <div className="flex gap-1">
                      {[0,1,2].map(i => (
                        <motion.div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                          animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {['Services', 'Pricing', 'Timeline'].map(q => (
                <button key={q} onClick={() => { setInput(q); }}
                  className="text-xs bg-brand/10 text-brand px-3 py-1 rounded-full hover:bg-brand/20 transition-colors">
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-dark-border flex gap-2">
              <input
                value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-dark-border rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors"
              />
              <button onClick={send} className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center hover:bg-brand-dark transition-colors flex-shrink-0">
                <Send size={15} className="text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
