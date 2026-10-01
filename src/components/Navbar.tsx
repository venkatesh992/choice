"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Digital Marketing", href: "/marketing" },
    { name: "Projects", href: "/work" },
  ];

  return (
    <>
      <nav className="w-full bg-white border-b border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sticky top-0 z-50 rounded-b-[40px]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <Image 
              src="/chocie%20logo%201.jpeg" 
              alt="Choice Web Solutions Logo" 
              width={240} 
              height={120} 
              className="object-contain h-12 w-auto mix-blend-multiply" 
              unoptimized 
              priority 
            />
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="relative px-4 py-2 rounded-full group transition-all"
                >
                  <span className={`relative z-10 text-[14px] font-bold tracking-wide transition-colors ${isActive ? 'text-black' : 'text-slate-500 group-hover:text-black'}`}>
                    {link.name}
                  </span>
                  
                  {/* Subtle hover background */}
                  <div className="absolute inset-0 bg-slate-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity scale-95 group-hover:scale-100 duration-200" />
                  
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-[21px] left-0 w-full h-[3px] bg-black"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:flex px-7 py-2.5 bg-[#111111] text-white text-[13px] font-bold tracking-wide uppercase rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95">
              Book a consultation
            </Link>
            
            <button 
              className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
          
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col lg:hidden"
          >
            <div className="px-4 py-4 flex items-center justify-between border-b border-slate-100 h-20">
              <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <Image 
                  src="/chocie%20logo%201.jpeg" 
                  alt="Choice Web Solutions Logo" 
                  width={200} 
                  height={100} 
                  className="object-contain h-10 w-auto mix-blend-multiply" 
                  unoptimized 
                />
              </Link>
              <button 
                className="p-2 text-slate-900 bg-slate-100 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col px-6 py-12 gap-6 overflow-y-auto">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-bold tracking-tight ${pathname === link.href ? 'text-slate-900' : 'text-slate-400'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-4 bg-[#111111] text-white font-bold tracking-wide uppercase rounded-2xl shadow-lg"
                >
                  Book a consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
