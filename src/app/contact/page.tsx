import { Mail, MessageSquare, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="px-4 py-12 md:py-24 max-w-[1200px] mx-auto min-h-screen">
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Let's discuss your project.</h1>
          <p className="text-lg text-slate-600 mb-12 max-w-md">
            Connect directly with our engineering and marketing teams for a discovery consultation and detailed milestone plan.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Business Inquiries</h3>
                <p className="text-lg font-medium text-slate-900">contact@choicewebsolutions.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Direct / WhatsApp</h3>
                <p className="text-lg font-medium text-slate-900">+91 [Your Phone Number]</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-200 text-slate-700 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Headquarters</h3>
                <p className="text-lg font-medium text-slate-900">[Your City, State, India]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form (Tactical Workstation style) */}
        <div className="bg-white p-8 md:p-12 rounded-[32px] border border-slate-200 shadow-lg shadow-slate-100">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  className="w-full h-[34px] px-3 py-[8px] text-[12px] bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Work Email</label>
                <input 
                  type="email" 
                  className="w-full h-[34px] px-3 py-[8px] text-[12px] bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Interest Area</label>
              <select className="w-full h-[34px] px-3 py-[8px] text-[12px] bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none">
                <option>Engineering (Web / Mobile Apps)</option>
                <option>Digital Marketing (SEO / PPC)</option>
                <option>Both Engineering & Marketing</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Project Details</label>
              <textarea 
                rows={5}
                className="w-full px-3 py-3 text-[12px] bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                placeholder="Tell us about your objectives and timeline..."
              ></textarea>
            </div>

            <button type="submit" className="w-full h-[40px] mt-4 bg-[#0F172A] text-white text-[13px] font-bold uppercase tracking-wider rounded-md hover:bg-slate-800 transition-all shadow-md">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
