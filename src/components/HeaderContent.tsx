import { motion } from 'motion/react';
import { Facebook } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand shadow-lg border-b border-brand-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-brand-accent shadow-sm">
              <span className="text-brand font-black text-lg italic">S!P</span>
            </div>
            <div>
              <h1 className="text-white font-black text-2xl leading-none uppercase tracking-tighter">Sip Me</h1>
              <p className="text-brand-light/60 text-[10px] font-bold uppercase tracking-widest hidden sm:block">Premium Milk Tea & Coffee</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="bg-brand-dark px-4 py-2 rounded-full border border-brand-ui/40 flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-white text-xs font-bold whitespace-nowrap">Accepting Orders: Cebu City</span>
            </div>
            <a href="https://www.facebook.com/sipme2019" target="_blank" rel="noreferrer" className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark font-black px-6 py-2 rounded-full shadow-md transform active:scale-95 transition-all text-sm flex items-center gap-2">
              <Facebook size={16} />
              <span>VISIT FACEBOOK</span>
            </a>
          </div>
          <div className="md:hidden">
            <a href="https://www.facebook.com/sipme2019" target="_blank" rel="noreferrer" className="p-2 text-brand-accent">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
