import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_DATA, ADD_ONS } from '../constants';
import { Sparkles, ShoppingBag } from 'lucide-react';

export const Menu = () => {
  const [activeTab, setActiveTab] = useState(MENU_DATA[0].id);

  return (
    <section id="menu" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-black text-brand mb-4 uppercase tracking-tighter">
              Digital <span className="text-brand-accent">Menu</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs">Refreshment level: Maximum</p>
          </motion.div>
        </div>

        {/* Categories Tab Bar - Simplified Pill Style */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {MENU_DATA.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-8 py-4 rounded-full font-black uppercase tracking-widest transition-all text-xs border-2 ${
                activeTab === category.id
                  ? 'bg-brand text-brand-accent border-brand shadow-vibrant scale-105'
                  : 'bg-white text-slate-400 border-slate-100 hover:border-brand/20 hover:text-brand'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {MENU_DATA.filter((cat) => cat.id === activeTab).map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#9333ea] rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative border-4 border-white/20"
              >
                {/* Banner Header Style - Simplified & Attractive */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12 border-b border-white/20 pb-8">
                  <div className="flex gap-8">
                    {category.prices.map((p) => (
                      <div key={p.size} className="flex flex-col">
                        <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-1">{p.size}</p>
                        <p className="font-display text-5xl font-black text-brand-accent leading-none tracking-tighter italic">₱{p.price}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-right">
                    <h3 className="font-display text-5xl md:text-7xl font-black text-white uppercase tracking-tighter opacity-10 leading-none">
                      {category.title.split(' ')[0]}
                    </h3>
                  </div>
                </div>

                {/* Specific Layouts based on category type */}
                {category.id === 'frappe' ? (
                  <div className="space-y-12">
                    <div className="relative">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-2 px-8 inline-block mb-6">
                        <span className="text-white font-black uppercase tracking-widest text-lg italic">Milk Base</span>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {category.items.filter(i => i.name.includes('Milk')).map((item) => (
                          <MenuItemCard key={item.name} item={item} />
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <div className="bg-brand-dark/40 border border-white/20 rounded-full py-2 px-8 inline-block mb-6">
                        <span className="text-white font-black uppercase tracking-widest text-lg italic">Coffee Base</span>
                      </div>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {category.items.filter(i => i.name.includes('Coffee')).map((item) => (
                          <MenuItemCard key={item.name} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.items.map((item) => (
                      <MenuItemCard key={item.name} item={item} />
                    ))}
                  </div>
                )}

                {/* Add-ons Footer */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="bg-brand-accent text-brand-dark px-4 py-2 rounded-xl font-black text-sm rotate-[-4deg] border-2 border-white">
                      ADD ₱10
                    </div>
                    <div className="flex gap-6">
                      {ADD_ONS.map(addon => (
                        <div key={addon.name} className="flex flex-col items-center gap-2">
                           <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
                              <Sparkles size={20} className="text-brand-accent" />
                           </div>
                           <span className="text-[10px] font-black text-white uppercase tracking-widest">{addon.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="bg-white text-brand px-8 py-4 rounded-2xl font-black uppercase tracking-tight flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl">
                    <ShoppingBag size={20} />
                    Customize Item
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

interface MenuItemCardProps {
  item: any;
  [key: string]: any;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 border border-white/10 hover:bg-white/20 transition-all group relative overflow-hidden flex flex-col items-center text-center"
    >
      {item.isBestSeller && (
        <div className="absolute top-3 right-3">
          <div className="bg-brand-accent text-brand text-[7px] font-black px-2 py-1 rounded-full shadow-lg border border-white/20 uppercase tracking-widest">
            Best
          </div>
        </div>
      )}
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
         <Sparkles size={24} className="text-brand-accent/40 group-hover:text-brand-accent transition-colors" />
      </div>
      <h4 className="font-display text-base font-black uppercase leading-tight text-white tracking-tight group-hover:text-brand-accent transition-colors">
        {item.name.replace(' (Milk Base)', '').replace(' (Coffee Base)', '')}
      </h4>
    </motion.div>
  );
};
