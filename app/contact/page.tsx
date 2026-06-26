"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Globe2,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 5000);
    }, 1200);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl shadow-slate-200/80 overflow-hidden border border-slate-100 grid lg:grid-cols-12">
        {/* LEFT PANEL: HIGH-CONTRAST CORPORATE HUB */}
        <div className="lg:col-span-5 bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Abstract Background Accent */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mt-3">
                Green Leaves
              </h2>
              <p className="text-slate-400 text-xs md:text-sm mt-2 leading-relaxed">
                Connect directly with our engineering advisory desks for
                technical scoping and regulatory project onboarding across
                Nepal.
              </p>
            </div>

            {/* Direct Contact Metrics */}
            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 border border-slate-700/40">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-200">
                    Headquarters
                  </p>
                  <p className="text-sm text-emerald-400 mt-0.5 leading-relaxed font-medium">
                    Ward No. 32, Jadibuti, Kathmandu Metropolitan City,
                    Kathmandu, Nepal
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Inland Revenue Office, Koteshwor Jurisdiction
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 border border-slate-700/40">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-200">
                    Official Desk
                  </p>
                  <a
                    href="mailto:greenleavesconsultingservices@gmail.com"
                    className="text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors break-all block mt-0.5"
                  >
                    greenleavesconsultingservices@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 border border-slate-700/40">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-200">
                    Engineering Line
                  </p>
                  <p className="text-sm text-emerald-400 font-semibold tracking-wide mt-0.5">
                    +977 1-4991532
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 border border-slate-700/40">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-200">
                    Availability
                  </p>
                  <p className="text-sm text-emerald-400 mt-0.5 font-medium">
                    Sunday – Friday: 9:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-8 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-500 font-medium mt-8 lg:mt-0">
            <Globe2 className="w-3.5 h-3.5 text-slate-600" />
            <span>Registered Technical Advisory &bull; Companies Act 2006</span>
          </div>
        </div>

        {/* RIGHT PANEL: IMMERSIVE REQUEST FORM */}
        <div className="lg:col-span-7 p-8 md:p-12 relative flex flex-col justify-center">
          {sent && (
            <div className="absolute inset-0 bg-white/98 z-20 flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 border border-emerald-100 shadow-sm">
                <CheckCircle2 className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Brief Successfully Logged
              </h3>
              <p className="text-slate-500 text-xs max-w-sm mt-2 leading-relaxed">
                Your parameter specifications have passed enterprise alignment
                protocols. An advisory manager will make contact inside 24
                operational hours.
              </p>
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Initialize Project Brief
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Provide your project coordinates below to establish a statutory
              scope review.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  First Name
                </label>
                <input
                  required
                  type="text"
                  disabled={loading}
                  placeholder="Niranjan"
                  className="w-full px-4 py-3 text-xs md:text-sm rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 outline-none transition-all disabled:opacity-50"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  disabled={loading}
                  placeholder="Shrestha"
                  className="w-full px-4 py-3 text-xs md:text-sm rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 outline-none transition-all disabled:opacity-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Corporate Email
                </label>
                <input
                  required
                  type="email"
                  disabled={loading}
                  placeholder="name@organization.com"
                  className="w-full px-4 py-3 text-xs md:text-sm rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 outline-none transition-all disabled:opacity-50"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Contact Number
                </label>
                <input
                  type="tel"
                  disabled={loading}
                  placeholder="+977 98XXXXXXXX"
                  className="w-full px-4 py-3 text-xs md:text-sm rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 outline-none transition-all disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Advisory Service Group
              </label>
              <select
                disabled={loading}
                className="w-full px-4 py-3 text-xs md:text-sm rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 outline-none transition-all cursor-pointer disabled:opacity-50"
              >
                <option>Solar Energy Development & Grid Interconnection</option>
                <option>Wind Resource Assessment & Farm Advisory</option>
                <option>
                  Environmental Impact Assessment (EIA) & Compliance
                </option>
                <option>
                  Transmission Lines & Substation Evacuation Engineering
                </option>
                <option>Green Building & Industrial Energy Efficiency</option>
                <option>
                  General Corporate / Institutional Partnership Scope
                </option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Project Scope Brief
              </label>
              <textarea
                required
                rows={3}
                disabled={loading}
                placeholder="Outline capacity scales, geographical boundaries, and desired engineering deliverables..."
                className="w-full px-4 py-3 text-xs md:text-sm rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:bg-white focus:ring-4 focus:ring-slate-900/5 outline-none resize-none transition-all disabled:opacity-50"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl transition-all duration-150 shadow-md shadow-slate-900/10 active:scale-[0.98] disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Transmit Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 mt-0.5 text-emerald-400" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
