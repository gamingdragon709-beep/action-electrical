import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="w-full bg-[#f8f9ff] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00652c] font-mono">
            GET IN TOUCH
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b1c30] font-display">
            Contact Action MEP Dispatch
          </h1>
          <p className="mt-4 text-base text-[#565e74] leading-relaxed">
            Need emergency dispatch, project estimation, or a facility walk-through? Our commercial superintendents are standing by 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Hub */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-xs border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-xl font-bold text-[#0b1c30] font-display">
                Headquarters &amp; Dispatch
              </h2>

              <div className="space-y-4 text-sm text-[#3f493f]">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#00652c] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">24/7 Dispatch Desk</div>
                    <a href="tel:9045552286" className="text-base font-bold text-[#00652c] font-mono hover:underline">
                      (904) 555-2286
                    </a>
                    <div className="text-xs text-slate-500 font-mono">Direct emergency hotline</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00652c] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Operations Facility</div>
                    <div className="text-xs sm:text-sm text-slate-600">
                      11762 Industrial Parkway Drive<br />
                      Suite 6<br />
                      Jacksonville, FL 32224
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#00652c] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Operational Hours</div>
                    <div className="text-xs text-slate-600">Office: Monday – Friday 7:00 AM – 5:00 PM EST</div>
                    <div className="text-xs font-semibold text-emerald-800">Emergency MEP: 24 Hours / 7 Days / 365 Days</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-600 space-y-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Florida Master Electrical License: EC13010299</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Georgia Electrical License: EN215151</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-xs border border-slate-200 shadow-xs">
            {sent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-[#00652c] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1c30] font-display">
                  Inquiry Dispatched!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, {formData.name}. Our commercial trade estimator will review your project details and follow up with you promptly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2 bg-[#00652c] text-white text-xs font-semibold rounded-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-[#0b1c30] font-display mb-2">
                  Send a Direct Message
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Facility / Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(904) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Message / Request Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your facility requirements, emergency service, or project drawings..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-[#00652c] hover:bg-[#004e22] text-white text-xs font-semibold rounded-xs shadow-xs transition-colors cursor-pointer"
                  >
                    Dispatch Inquiry to Estimating
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
