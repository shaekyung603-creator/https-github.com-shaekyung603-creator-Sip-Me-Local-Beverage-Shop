import { MapPin, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

export const Gallery = () => {
  return (
    <section id="visit" className="py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-brand mb-4 uppercase tracking-tighter">
            Our <span className="text-brand-accent">Hype</span> Space
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Where the magic happens. Come say hi and get your daily dose of refreshment!
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 h-[600px]">
          <div className="col-span-2 row-span-2 rounded-[2.5rem] overflow-hidden shadow-vibrant border-4 border-white group">
             <img 
               src="https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/663140268_1360752019418462_7259113878359239121_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHUpJqYFaXXgY2ppavJzcSWukj7wbSCiua6SPvBtIKK5tVkU2GjkRT6KjiYM_izZRgh6pMz7zuS6z8Wi1Ltt_zG&_nc_ohc=3vfZXQp_0iQQ7kNvwHqvhQI&_nc_oc=AdpISdAyjKsRPsh-vzKyagq1KtNFRdAP5E8GIRWiryQoRU5vj8m5euEA5YUQVbUrUIo&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=zW4yhAf5dLSyJRGJ32GChg&oh=00_Af2_W6DFB_an9WFXC53MBOTzk5VnIF-U0K0ceiWREKZT3w&oe=69F04134" 
               alt="Sip Me Main Stall" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-vibrant border-4 border-white group">
             <img 
               src="https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/668838669_1360752082751789_2332229674338809390_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEuib0C-c9zLIu2M32SxmgOQDqnsIjWnihAOqewiNaeKFdTk4KzuVGmTlXt3WTqms4pHd0xfWdyZEisHPo6_eAl&_nc_ohc=5R0G2Etli7cQ7kNvwEiJfxd&_nc_oc=AdpCsHDoA4W18bSLz8MkSsDHdXipJqetXq1Y1SFIMhei-UBDWb9eWpnflPPVNVQFuHk&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&_nc_gid=6ptT9Q3Y3RRsv_XJl6XF_Q&oh=00_Af3vcD4CnuCZG8LI1csN24WlT64AsJJLjFsRmozkGPqdkQ&oe=69F032CB" 
               alt="Counter View" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-vibrant border-4 border-white group">
             <img 
               src="https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/667762908_1360752132751784_8068786694587597771_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFTUX9rh_F7lPMaa3C7rARzOdjny2hLY9o52OfLaEtj2jfsfmyMNA74Y-q3ENasokKpacZHttVla4cmquslemNq&_nc_ohc=fYyj304OpcwQ7kNvwEy8maj&_nc_oc=AdqqJr99dxn_PqeNA6z3RWKq2E_Vw4-UuZyEauyM6Kw2Vw_NmZbi7PDL3jyw27QSLR8&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=cCixqh4zEB7esk4aH9d8Hg&oh=00_Af30h-rH-Hk_gzJBx9OMkTct3r7IfydoNdCHYewiV55CLQ&oe=69F01E02" 
               alt="Beverage Close-up" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="col-span-2 rounded-[2.5rem] overflow-hidden shadow-vibrant border-4 border-white group">
             <img 
               src="https://scontent.fceb6-4.fna.fbcdn.net/v/t39.30808-6/667820180_1360753096085021_1840143531394576005_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF7wv7XRgC0I-4YAyqsLIbYw_AuqI9pO-LD8C6oj2k74itCOCDBc-kp2ecMV4glN6Rp_rEqAnjGD0moDYTrfDs_&_nc_ohc=r2Uouc7GixIQ7kNvwEN6ae_&_nc_oc=Adpmc7Bli1O9czO84Zdmmt-cDIiWK8v024MUomyiNhS809oLuMI65MtyQeX_10nO23I&_nc_zt=23&_nc_ht=scontent.fceb6-4.fna&_nc_gid=qzmDPanBNHFBfx827MqSYA&oh=00_Af0iw0LzGyv_AP9zQv_EqDC0moulSuxkIUeXeKJ6t_PCtw&oe=69F03559" 
               alt="Shop Atmosphere" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-light p-6 border-t border-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-purple-200">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center border-2 border-brand-accent shadow-sm">
                <span className="text-white font-black text-lg italic">S!P</span>
             </div>
             <div>
                <h4 className="font-display text-2xl font-black text-brand uppercase tracking-tighter leading-none">Sip Me</h4>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">Premium Milk Tea & Coffee</p>
             </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black text-brand uppercase tracking-widest">
             <div className="flex items-center gap-2">
                <span className="text-slate-400">Coffee</span>
                <span className="bg-brand text-white px-2 py-0.5 rounded italic">Tall ₱45</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-slate-400">Soda</span>
                <span className="bg-brand text-white px-2 py-0.5 rounded italic">From ₱45</span>
             </div>
             <div className="flex items-center gap-3 text-slate-800">
                <MapPin size={14} className="text-brand" />
                <span>Cebu City, 6017</span>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">© 2024 SIP ME • CEBU CITY BRANCH</p>
           <div className="flex gap-4">
              <a href="https://www.facebook.com/sipme2019" target="_blank" rel="noreferrer" className="bg-brand-accent text-brand-dark p-2 rounded-full shadow-sm hover:scale-110 transition-transform">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="bg-brand-accent text-brand-dark p-2 rounded-full shadow-sm hover:scale-110 transition-transform">
                <Instagram size={16} />
              </a>
           </div>
        </div>
      </div>
    </footer>
  );
};
