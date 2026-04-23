/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/HeaderContent';
import { Menu } from './components/Menu';
import { Gallery, Footer } from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, ShoppingBag, MapPin } from 'lucide-react';
import { OrderBuilder } from './components/OrderBuilder';
import { useState } from 'react';

export default function App() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Updated Hero Section to match Style Reference */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover grayscale-[30%] opacity-60"
              alt="Sip Me Shop Front"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-brand-dark/90 backdrop-blur-[1px]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              {/* Location Badge */}
              <div className="bg-amber-500/90 text-black px-4 py-1.5 rounded-full flex items-center gap-2 mb-8 shadow-lg border border-black/10">
                <MapPin size={16} />
                <span className="font-bold text-xs uppercase tracking-wider">Cebu City, 6017</span>
              </div>
              
              <div className="relative inline-block">
                {/* Floating Tags from Reference */}
                <motion.div 
                  animate={{ y: [0, -10, 0], rotate: [-12, -15, -12] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-16 -left-12 bg-purple-900 border-2 border-white/20 text-white px-4 py-2 rounded-2xl rotate-[-12deg] shadow-xl font-black text-xl z-20"
                >
                  ₱45
                </motion.div>
                
                <h1 className="font-display text-[7rem] md:text-[12rem] font-black text-brand leading-none tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] select-none">
                  Sip Me
                </h1>

                <motion.div 
                  animate={{ y: [0, 10, 0], rotate: [12, 10, 12] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-12 bg-amber-600 border-2 border-white/20 text-black px-4 py-2 rounded-2xl rotate-[12deg] shadow-xl font-black text-xl z-20"
                >
                  ₱55
                </motion.div>
              </div>

              <div className="mt-8 space-y-2">
                <p className="text-2xl md:text-3xl text-white/90 font-medium tracking-tight drop-shadow-md">
                  Premium bubble tea and espresso.
                </p>
                <p className="text-xl md:text-2xl text-white/50 font-bold drop-shadow-md italic">
                  Unbeatable prices. <span className="text-white/80 not-italic">Every single day.</span>
                </p>
              </div>
              
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setIsOrderOpen(true)}
                  className="bg-purple-950 text-white px-10 py-4 rounded-full font-black text-lg hover:bg-purple-900 transition-all shadow-2xl flex items-center gap-3 active:scale-95 border border-white/10"
                >
                  <ShoppingBag size={20} />
                  PLACE AN ORDER
                </button>
                <a 
                  href="https://www.facebook.com/sipme2019" 
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black/40 backdrop-blur-md text-white/80 border border-white/20 px-10 py-4 rounded-full font-black text-lg hover:bg-black/60 transition-all flex items-center gap-3"
                >
                  <Facebook size={20} />
                  FIND US ON FACEBOOK
                </a>
              </div>
            </motion.div>
          </div>

          {/* Decorative Corner Gradients */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Value Proposition Micro-section */}
        <section className="py-12 border-y border-slate-100 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                 {[
                   { label: 'Milk Tea', price: '₱45', detail: '16oz Regular' },
                   { label: 'Fruit Soda', price: '₱45', detail: 'Refreshing' },
                   { label: 'Coffee', price: '₱45', detail: 'Brewed Fresh' }
                 ].map((item, i) => (
                   <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                   >
                     <div className="text-right">
                        <p className="text-[10px] font-black text-brand uppercase tracking-tighter transition-colors group-hover:text-amber-500">{item.detail}</p>
                        <p className="font-display text-lg font-bold text-slate-400 group-hover:text-slate-900 transition-colors">{item.label}</p>
                     </div>
                     <div className="w-px h-10 bg-slate-200" />
                     <p className="font-display text-4xl font-black text-brand group-hover:scale-110 transition-transform">{item.price}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        <Menu />
        
        <Gallery />

        {/* Closing CTA */}
        <section className="py-24 bg-brand text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1544203034-c4b212f4f281?auto=format&fit=crop&q=80&w=400" 
                className="w-96 transform rotate-12"
                alt=""
              />
           </div>
           
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight">
                 Ready to get <br /> <span className="text-brand-accent italic">your fix?</span>
              </h2>
              <p className="text-purple-100 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                 Don't just take our word for it. Join the hundreds of Cebu City locals who make Sip Me their daily habit.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <button 
                   onClick={() => setIsOrderOpen(true)}
                   className="bg-white text-brand px-10 py-5 rounded-3xl font-extrabold text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                 >
                    <ShoppingBag size={24} />
                    Start Order Builder
                 </button>
                 <a 
                   href="https://www.facebook.com/sipme2019" 
                   target="_blank"
                   rel="noreferrer"
                   className="bg-brand-dark border-2 border-white/20 text-white px-10 py-5 rounded-3xl font-extrabold text-xl hover:bg-brand-dark/50 transition-all flex items-center justify-center gap-3"
                 >
                    <Facebook size={24} />
                    Visit Facebook
                 </a>
              </div>
           </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {isOrderOpen && (
          <OrderBuilder isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      {!isOrderOpen && (
        <motion.div 
          initial={{ y: 100, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            delay: 1.2, 
            type: "spring", 
            stiffness: 260, 
            damping: 20 
          }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[90]"
        >
          <button 
            onClick={() => setIsOrderOpen(true)}
            className="group relative bg-[#11235A] text-white px-10 py-5 rounded-full font-black text-lg flex items-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all outline outline-4 outline-white"
          >
            <ShoppingBag size={24} className="group-hover:rotate-12 transition-transform" />
            PLACE AN ORDER
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
        </motion.div>
      )}
    </div>
  );
}
