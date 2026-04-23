import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, Facebook, Send, User, Sparkles, ShoppingBag } from 'lucide-react';
import { MENU_DATA, ADD_ONS } from '../constants';

interface OrderState {
  category: string;
  flavor: string;
  size: string;
  price: number;
  addons: string[];
  customerName: string;
  notes: string;
  pickupDay: string;
  pickupTime: string;
}

export const OrderBuilder = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [order, setOrder] = useState<OrderState>({
    category: '',
    flavor: '',
    size: '',
    price: 0,
    addons: [],
    customerName: '',
    notes: '',
    pickupDay: 'Today',
    pickupTime: '',
  });

  const reset = () => {
    setStep(1);
    setOrder({
      category: '',
      flavor: '',
      size: '',
      price: 0,
      addons: [],
      customerName: '',
      notes: '',
      pickupDay: 'Today',
      pickupTime: '',
    });
  };

  const handleCategorySelect = (catId: string) => {
    setOrder({ ...order, category: catId, flavor: '', size: '', price: 0 });
    setStep(2);
  };

  const handleFlavorSelect = (flavor: string) => {
    setOrder({ ...order, flavor });
    setStep(3);
  };

  const handleSizeSelect = (size: string, price: number) => {
    setOrder({ ...order, size, price });
    setStep(4);
  };

  const toggleAddon = (addon: string) => {
    const newAddons = order.addons.includes(addon)
      ? order.addons.filter((a) => a !== addon)
      : [...order.addons, addon];
    setOrder({ ...order, addons: newAddons });
  };

  const totalPrice = order.price + order.addons.length * 10;

  const generateMessage = () => {
    const addonsStr = order.addons.length > 0 ? order.addons.join(', ') : 'None';
    return `Hello Sip Me! I'd like to order:
    
👤 Name: ${order.customerName}
🥤 Drink: ${order.flavor} (${order.size})
✨ Add-ons: ${addonsStr}
📝 Notes: ${order.notes || 'None'}
⏰ Pickup: ${order.pickupDay} at ${order.pickupTime}
💰 Total: ₱${totalPrice}

Confirm order? Thanks!`;
  };

  const handleComplete = () => {
    const message = generateMessage();
    navigator.clipboard.writeText(message);
    window.open(`https://www.facebook.com/sipme2019`, '_blank');
    onClose();
    reset();
  };

  if (!isOpen) return null;

  const times = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM'];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative bg-white w-full max-w-xl rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] overflow-hidden border border-slate-100 text-slate-800"
      >
        {/* Header */}
        <div className="p-10 pb-6 relative">
          <button onClick={onClose} className="absolute top-10 right-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:text-brand hover:bg-purple-50 transition-all">
            <X size={20} />
          </button>
          <div className="mb-6">
             <div className="flex items-center gap-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Step {step}/7 • CUSTOMIZE</span>
             </div>
             <h3 className="font-display text-3xl font-black tracking-tighter text-slate-900">
               {step === 1 ? 'Start your S!P' : 
                step === 2 ? 'Choose your Flavor' :
                step === 3 ? 'Pick your Size' :
                step === 4 ? 'Any Extras?' :
                step === 5 ? 'Who is this for?' :
                step === 6 ? 'Pickup Time' : 'Review & Send'}
             </h3>
          </div>
          
          {/* Progress Bar */}
          <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(step / 7) * 100}%` }}
              className="h-full bg-brand"
            />
          </div>
        </div>

        <div className="px-10 pb-10 max-h-[75vh] overflow-y-auto scrollbar-hide">
          <AnimatePresence mode="wait">
            {/* Step 1: Category */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h4 className="font-black text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-6 text-center">Select Series</h4>
                <div className="grid grid-cols-1 gap-4">
                  {MENU_DATA.map((cat) => (
                    <button 
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className="p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-brand hover:bg-purple-50/30 transition-all flex items-center justify-between group shadow-sm hover:shadow-xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-brand/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">
                           <ShoppingBag size={20} />
                        </div>
                        <span className="font-display text-xl font-black uppercase tracking-tight text-slate-800 group-hover:text-brand transition-colors">{cat.title}</span>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all">
                        <ChevronRight size={18} />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Flavor */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                {/* Pricing Summary Bar */}
                <div className="bg-purple-50 p-6 rounded-3xl mb-8 flex justify-around border-2 border-brand/5">
                   {MENU_DATA.find(c => c.id === order.category)?.prices.map((p, idx) => (
                     <div key={p.size} className={`flex flex-col items-center px-4 ${idx === 0 ? 'border-r border-purple-200' : ''} flex-1`}>
                        <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">{p.size}</span>
                        <span className="font-display text-4xl font-black text-brand tracking-tighter leading-none italic">₱{p.price}</span>
                     </div>
                   ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-black text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-4 text-center">Available Flavors</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {MENU_DATA.find(c => c.id === order.category)?.items.map((item) => (
                      <button 
                        key={item.name}
                        onClick={() => handleFlavorSelect(item.name)}
                        className={`relative p-5 rounded-2xl border transition-all text-sm font-bold tracking-tight text-center flex flex-col items-center justify-center min-h-[100px] shadow-sm hover:shadow-md ${
                          order.flavor === item.name 
                          ? 'bg-brand text-white border-brand scale-[1.02]' 
                          : 'bg-white text-slate-600 border-slate-100 hover:border-brand/40'
                        }`}
                      >
                        {item.isBestSeller && (
                          <div className={`absolute -top-1 -right-1 px-2 py-0.5 rounded-full text-[7px] font-black uppercase transform rotate-6 border shadow-sm ${
                            order.flavor === item.name ? 'bg-brand-accent text-brand border-white' : 'bg-red-500 text-white border-white'
                          }`}>
                            POPULAR
                          </div>
                        )}
                        <span className="uppercase text-[11px] font-black">{item.name.replace(' (Milk Base)', '').replace(' (Coffee Base)', '')}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Size */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h4 className="font-black text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-6 text-center">Select your Size</h4>
                <div className="grid grid-cols-1 gap-4">
                  {MENU_DATA.find(c => c.id === order.category)?.prices.map((p) => (
                    <button 
                      key={p.size}
                      onClick={() => handleSizeSelect(p.size, p.price)}
                      className="p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-brand hover:shadow-2xl transition-all flex items-center justify-between group shadow-sm"
                    >
                      <div className="flex flex-col items-start">
                        <span className="text-[10px] font-black uppercase text-slate-400 mb-1">{p.size.split(' ')[0]}</span>
                        <span className="font-display text-2xl font-black uppercase tracking-tight text-slate-800">{p.size.split(' ')[1]}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-display text-4xl font-black text-brand italic tracking-tighter group-hover:scale-110 transition-transform">₱{p.price}</span>
                        <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-200 group-hover:bg-brand group-hover:text-white transition-all">
                          <ChevronRight size={16} />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Add-ons */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h4 className="font-black text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-6 text-center">Any Extras? (+₱10)</h4>
                <div className="grid grid-cols-1 gap-3">
                  {ADD_ONS.map((addon) => (
                    <button 
                      key={addon.name}
                      onClick={() => toggleAddon(addon.name)}
                      className={`p-6 rounded-[2rem] border-2 transition-all flex items-center justify-between shadow-sm ${
                        order.addons.includes(addon.name) ? 'border-brand bg-purple-50' : 'border-slate-100 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center ${order.addons.includes(addon.name) ? 'bg-brand text-white' : 'bg-slate-100 text-slate-300'}`}>
                            <Sparkles size={14} />
                         </div>
                         <span className={`font-black uppercase tracking-tight ${order.addons.includes(addon.name) ? 'text-brand' : 'text-slate-600'}`}>{addon.name}</span>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                         order.addons.includes(addon.name) ? 'border-brand bg-brand text-white' : 'border-slate-200'
                      }`}>
                         {order.addons.includes(addon.name) && <Send size={10} />}
                      </div>
                    </button>
                  ))}
                  <button 
                    onClick={() => setStep(5)}
                    className="mt-6 bg-brand text-white p-6 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-vibrant active:scale-95 transition-all w-full flex items-center justify-center gap-2 group"
                  >
                    CONTINUE <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Details */}
            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-[0.2em] ml-2">Your Name *</label>
                    <div className="relative group">
                       <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand transition-colors" />
                       <input 
                         type="text" 
                         placeholder="e.g. Maria" 
                         value={order.customerName}
                         onChange={(e) => setOrder({...order, customerName: e.target.value})}
                         className="w-full pl-14 pr-5 py-5 rounded-[2rem] bg-white border border-slate-100 focus:border-brand focus:ring-4 focus:ring-purple-100 outline-none transition-all font-bold text-lg"
                       />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase text-slate-400 mb-3 tracking-[0.2em] ml-2">Special Instructions</label>
                    <textarea 
                      placeholder="e.g. No sugar, extra ice..." 
                      value={order.notes}
                      onChange={(e) => setOrder({...order, notes: e.target.value})}
                      rows={4}
                      className="w-full px-7 py-5 rounded-[2rem] bg-white border border-slate-100 focus:border-brand focus:ring-4 focus:ring-purple-100 outline-none transition-all font-bold resize-none leading-relaxed"
                    />
                  </div>
                  <button 
                    disabled={!order.customerName}
                    onClick={() => setStep(6)}
                    className="w-full bg-brand disabled:bg-slate-200 text-white p-6 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-vibrant active:scale-95 transition-all flex items-center justify-center gap-2 group"
                  >
                    NEXT <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 6: Pickup */}
            {step === 6 && (
              <motion.div key="step6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-black text-[10px] uppercase text-slate-400 mb-4 flex items-center gap-2 tracking-[0.2em] ml-2">
                       <Sparkles size={14} className="text-brand"/> Pick a Day
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['Today', 'Tomorrow', 'Saturday', 'Sunday'].map((day) => (
                        <button 
                          key={day}
                          onClick={() => setOrder({...order, pickupDay: day})}
                          className={`p-5 rounded-2xl border-2 transition-all font-black text-sm uppercase tracking-tight ${
                            order.pickupDay === day ? 'border-brand bg-purple-50 text-brand shadow-sm' : 'border-slate-100 bg-white text-slate-400'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-[10px] uppercase text-slate-400 mb-4 flex items-center gap-2 tracking-[0.2em] ml-2">
                       Pick a Time
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                       {times.map((time) => (
                         <button 
                          key={time}
                          onClick={() => setOrder({...order, pickupTime: time})}
                          className={`py-4 px-1 rounded-2xl text-[11px] font-black tracking-tighter transition-all border-2 ${
                            order.pickupTime === time ? 'border-brand bg-brand text-white' : 'border-slate-100 bg-white text-slate-400 hover:border-brand/30'
                          }`}
                         >
                           {time}
                         </button>
                       ))}
                    </div>
                  </div>
                  <button 
                    disabled={!order.pickupTime}
                    onClick={() => setStep(7)}
                    className="w-full bg-brand disabled:bg-slate-200 text-white p-6 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-vibrant active:scale-95 transition-all flex items-center justify-center gap-2 group"
                  >
                    REVIEW ORDER <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 7: Summary */}
            {step === 7 && (
              <motion.div key="step7" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="bg-purple-50/50 p-8 rounded-[2.5rem] border-2 border-brand/5 space-y-5 mb-8">
                   {[
                     { label: 'Name', value: order.customerName },
                     { label: 'Series', value: MENU_DATA.find(c => c.id === order.category)?.title },
                     { label: 'Flavor', value: order.flavor },
                     { label: 'Size', value: order.size },
                     { label: 'Add-Ons', value: order.addons.length > 0 ? order.addons.join(', ') : 'None' },
                     { label: 'Pickup', value: `${order.pickupDay} at ${order.pickupTime}`, isHighlight: true }
                   ].map((row) => (
                     <div key={row.label} className="flex justify-between items-baseline group">
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{row.label}</span>
                        <span className={`text-sm font-black text-right ${row.isHighlight ? 'text-brand' : 'text-slate-800'}`}>
                          {row.value}
                        </span>
                     </div>
                   ))}
                   <div className="pt-6 border-t-2 border-brand/10 flex justify-between items-center">
                      <span className="text-xl font-black uppercase tracking-tighter text-slate-800">Total</span>
                      <span className="text-5xl font-display font-black text-brand italic tracking-tighter">₱{totalPrice}</span>
                   </div>
                </div>

                <div className="bg-slate-100/50 p-6 rounded-3xl mb-8">
                   <p className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-[0.1em]">Next Steps:</p>
                   <ul className="text-[11px] font-bold text-slate-500 space-y-2">
                      <li className="flex gap-3">
                         <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center">1</span>
                         <span>Confirm order details and click button below</span>
                      </li>
                      <li className="flex gap-3">
                         <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center">2</span>
                         <span>Your order will be COPIED to your clipboard</span>
                      </li>
                      <li className="flex gap-3">
                         <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center">3</span>
                         <span>Facebook opens automatically — PASTE and send!</span>
                      </li>
                   </ul>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={handleComplete}
                    className="w-full bg-[#11235A] hover:bg-black text-white p-7 rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_-5px_rgba(17,35,90,0.3)] active:scale-95"
                  >
                    <Facebook size={24} />
                    SEND ORDER NOW
                  </button>
                  <button 
                    onClick={() => {
                        navigator.clipboard.writeText(generateMessage());
                    }}
                    className="w-full py-4 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] hover:text-brand transition-colors"
                  >
                    Copy details only
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Back Navigation */}
        {step > 1 && step < 7 && (
          <div className="p-8 pt-0 flex gap-4">
            <button 
              onClick={() => setStep(step - 1)}
              className="flex-1 py-4 rounded-2xl border border-slate-200 font-bold text-slate-400 flex items-center justify-center gap-2 hover:bg-white transition-all text-xs"
            >
              <ChevronLeft size={16} /> Back
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
