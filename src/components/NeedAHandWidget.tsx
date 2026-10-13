import React, { useState } from 'react';
import { MessageSquare, X, Phone, ShieldCheck, Zap, ArrowRight, Check } from 'lucide-react';

interface NeedAHandWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSchedule: () => void;
}

export const NeedAHandWidget: React.FC<NeedAHandWidgetProps> = ({
  isOpen,
  onClose,
  onOpenSchedule,
}) => {
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Hello, this is Action Electrical & Mechanical Dispatch. How can we support your commercial facility today?',
      time: 'Now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleQuickAction = (topic: string) => {
    const userMsg = { sender: 'user' as const, text: topic, time: 'Just now' };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botReply = '';
      if (topic.includes('Emergency')) {
        botReply = '⚠️ Emergency priority logged. For critical power outages, breaker trips, or chiller shutdowns, call our on-call superintendent directly at (904) 555-2286. Regional average dispatch response time is under 45 minutes.';
      } else if (topic.includes('Quote')) {
        botReply = 'We offer comprehensive MEP bidding, plan-spec takeoff, and design-build engineering. Click "Schedule Service" above to upload drawings or request a superintendent site visit.';
      } else if (topic.includes('License')) {
        botReply = 'Action is fully licensed and bonded across Florida (EC13010299) and Georgia (EN215151) with an Experience Mod Rate of 0.68. COI can be transmitted within 15 minutes of request.';
      } else {
        botReply = `Thank you for your note regarding "${topic}". Our commercial engineering desk will route this to the appropriate trade estimator.`;
      }
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply, time: 'Just now' }]);
      setIsTyping(false);
    }, 400);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue('');
    setMessages((prev) => [...prev, { sender: 'user', text: userText, time: 'Just now' }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `Understood. For "${userText}", our commercial trade dispatch has logged the inquiry. Would you like to schedule an engineer dispatch or call directly?`,
          time: 'Just now'
        }
      ]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[580px] animate-in fade-in slide-in-from-bottom-5">
      {/* Widget Header */}
      <div className="bg-[#00652c] text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-800 flex items-center justify-center text-white border border-emerald-400/40">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm font-display leading-tight">
              Action MEP Dispatch Desk
            </h4>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-100 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
              <span>24/7 Operations Live</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1 text-emerald-100 hover:text-white rounded-md hover:bg-emerald-800/60 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Quick Option Pills */}
      <div className="p-3 bg-slate-50 border-b border-slate-200 flex flex-wrap gap-1.5 text-xs">
        <button
          onClick={() => handleQuickAction('Emergency 24/7 Outage Response')}
          className="px-2.5 py-1 bg-red-100/80 hover:bg-red-200 text-red-800 rounded-full font-medium transition-colors cursor-pointer"
        >
          🚨 24/7 Emergency Outage
        </button>
        <button
          onClick={() => handleQuickAction('Commercial Project Quote / RFP')}
          className="px-2.5 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-full font-medium transition-colors cursor-pointer"
        >
          📋 Project RFP / Bid
        </button>
        <button
          onClick={() => handleQuickAction('License & COI Verification')}
          className="px-2.5 py-1 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-full font-medium transition-colors cursor-pointer"
        >
          🛡️ License &amp; COI
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 min-h-[220px] max-h-[320px] bg-white text-xs">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-lg p-3 leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[#00652c] text-white rounded-br-none'
                  : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200'
              }`}
            >
              {msg.text}
              <div
                className={`text-[9px] mt-1 font-mono ${
                  msg.sender === 'user' ? 'text-emerald-200 text-right' : 'text-slate-400'
                }`}
              >
                {msg.time}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-1.5 text-slate-400 text-xs italic">
            <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></span>
            <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]"></span>
            <span>Dispatch desk is reviewing...</span>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-3 bg-slate-50 border-t border-slate-200 space-y-2">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            placeholder="Type your facility question..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c] focus:border-[#00652c] bg-white"
          />
          <button
            type="submit"
            className="px-3 py-1.5 bg-[#00652c] hover:bg-[#004e22] text-white text-xs font-semibold rounded-xs transition-colors cursor-pointer"
          >
            Send
          </button>
        </form>

        <div className="flex items-center justify-between pt-1">
          <a
            href="tel:9045552286"
            className="text-[11px] font-mono font-bold text-[#00652c] hover:underline flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            (904) 555-2286
          </a>
          <button
            onClick={() => {
              onClose();
              onOpenSchedule();
            }}
            className="text-[11px] font-semibold text-slate-700 hover:text-[#00652c] flex items-center gap-1 cursor-pointer"
          >
            <span>Open Full Schedule Form</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
