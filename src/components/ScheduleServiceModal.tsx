import React, { useState } from 'react';
import { X, CheckCircle2, AlertTriangle, ShieldCheck, Clock, Phone } from 'lucide-react';
import { ServiceRequest } from '../types';

interface ScheduleServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrade?: ServiceRequest['trade'];
}

export const ScheduleServiceModal: React.FC<ScheduleServiceModalProps> = ({
  isOpen,
  onClose,
  initialTrade = 'electrical',
}) => {
  const [formData, setFormData] = useState<ServiceRequest>({
    trade: initialTrade,
    isEmergency: false,
    facilityType: 'Industrial Manufacturing',
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    address: '',
    description: '',
    preferredDate: '',
    preferredTime: 'Morning (07:00 - 12:00)',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.phone || !formData.contactName) return;
    const generatedTicket = `ACTN-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header Ribbon */}
        <div className="bg-[#0b1c30] text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xs bg-[#00652c] flex items-center justify-center text-white font-bold font-mono">
              ⚡
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                Schedule Commercial Service
              </h3>
              <p className="text-xs text-slate-300 font-mono">
                Action Electrical &amp; Mechanical Dispatch Hub
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-50 text-[#00652c] rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-mono font-semibold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-xs">
                {formData.isEmergency ? 'Emergency Dispatch Active' : 'Service Request Queued'}
              </span>
              <h4 className="mt-3 text-2xl font-bold text-[#0b1c30] font-display">
                Request Confirmed
              </h4>
              <p className="mt-2 text-sm text-[#565e74] max-w-md mx-auto">
                Our commercial MEP engineering dispatch team has logged your work order. A licensed project superintendent will contact you directly.
              </p>
            </div>

            {/* Ticket Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-md p-4 text-left max-w-md mx-auto font-mono text-xs space-y-1.5">
              <div className="flex justify-between text-slate-500">
                <span>Dispatch Ticket:</span>
                <span className="font-bold text-[#00652c]">{ticketId}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Facility:</span>
                <span className="text-slate-900 font-medium">{formData.companyName}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Selected Trade:</span>
                <span className="text-slate-900 uppercase font-medium">{formData.trade}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Priority:</span>
                <span className={formData.isEmergency ? 'text-red-600 font-bold' : 'text-slate-700'}>
                  {formData.isEmergency ? 'CRITICAL EMERGENCY (24/7)' : 'Standard Commercial Schedule'}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="tel:9045552286"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#00652c] hover:bg-[#004e22] text-white text-sm font-semibold rounded-xs shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dispatch Directly: (904) 555-2286</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 border border-slate-300 text-slate-700 text-sm font-semibold rounded-xs hover:bg-slate-50"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Emergency Priority Alert Bar */}
            <label className={`flex items-start gap-3 p-3.5 rounded-md border cursor-pointer transition-colors ${
              formData.isEmergency 
                ? 'bg-red-50 border-red-300 text-red-950' 
                : 'bg-emerald-50/60 border-emerald-200/80 text-emerald-950'
            }`}>
              <input
                type="checkbox"
                checked={formData.isEmergency}
                onChange={(e) => setFormData({ ...formData, isEmergency: e.target.checked })}
                className="mt-1 w-4 h-4 text-red-600 rounded-xs border-slate-300 focus:ring-red-500"
              />
              <div className="text-xs leading-relaxed">
                <span className="font-bold flex items-center gap-1.5 text-sm">
                  {formData.isEmergency && <AlertTriangle className="w-4 h-4 text-red-600 inline" />}
                  24/7 Critical Emergency MEP Outage
                </span>
                <span className="text-slate-600 block mt-0.5">
                  Check this if immediate high-voltage, chiller shutdown, or plant downtime response is required.
                </span>
              </div>
            </label>

            {/* Trade Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                Primary Trade Required
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium">
                {[
                  { id: 'electrical', label: 'Commercial Electrical' },
                  { id: 'mechanical', label: 'Mechanical & HVAC' },
                  { id: 'controls', label: 'Automation & Controls' },
                  { id: 'generator', label: 'Critical Generators' },
                  { id: 'diagnostics', label: 'Thermal Diagnostics' },
                  { id: 'general', label: 'Multi-Trade MEP' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, trade: item.id as any })}
                    className={`px-3 py-2 rounded-xs border text-left transition-colors cursor-pointer ${
                      formData.trade === item.id
                        ? 'bg-[#00652c] text-white border-[#00652c] font-semibold'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Two-column inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Company / Facility Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Duval Logistics Hub"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c] focus:border-[#00652c]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Facility Type
                </label>
                <select
                  value={formData.facilityType}
                  onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs bg-white focus:ring-1 focus:ring-[#00652c] focus:border-[#00652c]"
                >
                  <option>Industrial Manufacturing</option>
                  <option>Cold Storage &amp; Warehousing</option>
                  <option>Healthcare / Medical Facility</option>
                  <option>Commercial Office Complex</option>
                  <option>Data Center / Telecommunications</option>
                  <option>Retail Hub / Supermarket</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c] focus:border-[#00652c]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(904) 555-0199"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c] focus:border-[#00652c]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="operations@facility.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c] focus:border-[#00652c]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Facility Address / City
                </label>
                <input
                  type="text"
                  placeholder="Jacksonville, FL 32224"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c] focus:border-[#00652c]"
                />
              </div>
            </div>

            {/* Scope / Description */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Scope of Work / Issue Symptoms
              </label>
              <textarea
                rows={3}
                placeholder="Describe equipment (e.g. 480V 1200A switchgear trip, chiller loop pressure drop, PLC alarm fault)..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xs focus:ring-1 focus:ring-[#00652c] focus:border-[#00652c]"
              ></textarea>
            </div>

            {/* Footer Form Controls */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>FL EC13010299 / GA EN215151</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 rounded-xs hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`w-1/2 sm:w-auto px-6 py-2.5 text-xs font-semibold text-white rounded-xs shadow-xs transition-colors cursor-pointer ${
                    formData.isEmergency ? 'bg-red-700 hover:bg-red-800' : 'bg-[#00652c] hover:bg-[#004e22]'
                  }`}
                >
                  {formData.isEmergency ? 'Dispatch Emergency Crew Now' : 'Submit Service Request'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
