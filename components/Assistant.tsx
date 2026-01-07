
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAssistant } from '../services/gemini';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Hello! I'm your EduStream Admission Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatWithAssistant(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', text: response || "I'm sorry, I couldn't process that. Please try again." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Error connecting to service. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-100 mb-4 animate-in fade-in zoom-in duration-200">
          {/* Header */}
          <div className="bg-blue-600 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-robot"></i>
              </div>
              <span className="font-bold">Admission Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 p-1 rounded">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Chat area */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none shadow-sm' 
                    : 'bg-white text-slate-700 rounded-bl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Ask about courses, eligibility..."
                className="flex-grow bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                className="bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-blue-700 disabled:opacity-50"
                disabled={isLoading}
              >
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 hover:scale-110 transition-all group"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-alt'} text-xl`}></i>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default Assistant;
