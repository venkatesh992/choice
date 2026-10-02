"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const serviceOptions = [
  "Turnkey Brand Launch",
  "Web & Portfolios",
  "E-Commerce & WooCommerce",
  "SaaS & Mobile Apps",
  "Digital Marketing"
];

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState(serviceOptions[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service: selectedService,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit inquiry. Please try again.");
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Decorative ambient backdrop glow */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#757C54]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#252D00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative bg-white/90 backdrop-blur-xl p-5 md:p-7 rounded-[28px] border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-14 h-14 bg-[#757C54]/10 text-[#757C54] rounded-2xl mx-auto flex items-center justify-center shadow-inner">
                <CheckCircle2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Inquiry Received</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. Your details have been recorded, and one of our product leads will review and respond within 24 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-[#757C54] hover:text-[#5B6141] transition-colors pt-2 underline underline-offset-4 cursor-pointer"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category selector pills */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                  I am interested in
                </label>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {serviceOptions.map((opt) => {
                    const isSelected = selectedService === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setSelectedService(opt)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all duration-200 border cursor-pointer ${
                          isSelected
                            ? "bg-[#757C54] text-white border-[#757C54] shadow-sm shadow-[#757C54]/20"
                            : "bg-slate-50 text-slate-600 border-slate-200/70 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Two Column Name & Email */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
                    Your Name <span className="text-[#757C54]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full h-9 px-3.5 text-xs bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#757C54]/30 focus:border-[#757C54] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
                    Work Email <span className="text-[#757C54]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full h-9 px-3.5 text-xs bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#757C54]/30 focus:border-[#757C54] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp (Optional) */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
                  Phone / WhatsApp <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full h-9 px-3.5 text-xs bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#757C54]/30 focus:border-[#757C54] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
                  Tell us about your project <span className="text-[#757C54]">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a brief overview of your goals, objectives, or timeline..."
                  className="w-full p-3 text-xs bg-slate-50/70 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#757C54]/30 focus:border-[#757C54] focus:bg-white transition-all text-slate-800 placeholder:text-slate-400 resize-none leading-relaxed"
                ></textarea>
              </div>

              {errorMessage && (
                <p className="text-xs text-rose-600 font-semibold bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                  {errorMessage}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-10 bg-[#757C54] hover:bg-[#5B6141] text-white text-xs font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg shadow-[#757C54]/20 disabled:opacity-70 group cursor-pointer"
              >
                {loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-slate-400">
                Guaranteed privacy. We will never share or sell your information.
              </p>
            </form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
