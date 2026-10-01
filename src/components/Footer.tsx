import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 shadow-[0_-8px_30px_rgba(0,0,0,0.04)] rounded-t-[40px] pt-12 pb-8 mt-12 relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-16">
          
          {/* Brand Col (Left) */}
          <div className="lg:w-5/12">
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/choice%20logo1.jpeg" 
                alt="Choice Web Solutions Logo" 
                width={240} 
                height={120} 
                className="object-contain h-12 w-auto mix-blend-multiply" 
                unoptimized 
              />
            </Link>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Digital engineering that <br /> drives <span className="italic font-serif text-slate-700">real</span> results
            </h2>
            
            <p className="text-slate-500 mb-8 font-medium">
              Enterprise web, mobile, and digital marketing.
            </p>
            
            <div className="flex gap-3">
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all border border-slate-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all border border-slate-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all border border-slate-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Links Cols (Right) */}
          <div className="lg:w-6/12 flex flex-wrap sm:flex-nowrap justify-between gap-10 lg:gap-0 pt-4">
            
            {/* Navigate Col */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-black text-black mb-6 uppercase tracking-widest text-sm">Navigate</h3>
              <ul className="space-y-4 text-[14px] text-slate-500 font-bold tracking-wide">
                <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-black transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-black transition-colors">Services</Link></li>
                <li><Link href="/marketing" className="hover:text-black transition-colors">Digital Marketing</Link></li>
                <li><Link href="/work" className="hover:text-black transition-colors">Projects</Link></li>
              </ul>
            </div>

            {/* Connect Col */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-black text-black mb-6 uppercase tracking-widest text-sm">Connect</h3>
              <ul className="space-y-4 text-[14px] text-slate-500 font-bold tracking-wide">
                <li><Link href="/contact" className="hover:text-black transition-colors">Book a call</Link></li>
                <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
              </ul>
            </div>

            {/* Legal Col */}
            <div className="w-1/2 sm:w-auto">
              <h3 className="font-black text-black mb-6 uppercase tracking-widest text-sm">Legal</h3>
              <ul className="space-y-4 text-[14px] text-slate-500 font-bold tracking-wide">
                <li><Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-black transition-colors">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Choice Web Solutions. All rights reserved.</p>
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

