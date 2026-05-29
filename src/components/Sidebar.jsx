import React from 'react';
import { Home, Search, Library, PlusCircle, Heart, Download, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Search' },
    { icon: Library, label: 'Library' },
  ];

  const collectionItems = [
    { icon: PlusCircle, label: 'Create Playlist' },
    { icon: Heart, label: 'Liked Songs' },
    { icon: Download, label: 'Downloads' },
  ];

  return (
    <div className="w-72 glass-panel h-full flex flex-col p-8 hidden lg:flex rounded-[2.5rem] relative z-20">
      <div className="flex items-center gap-3 mb-12">
        <div className="relative">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center rotate-3 shadow-2xl">
            <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-lg blur-[1px]" />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-[#0f172a]" />
        </div>
        <div>
          <h1 className="text-2xl font-black tracking-tighter leading-none">Farme</h1>
          <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Music Platform</span>
        </div>
      </div>

      <nav className="space-y-10">
        <div className="space-y-4">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] px-2">Menu</p>
          {menuItems.map((item, idx) => (
            <motion.a
              key={idx}
              whileHover={{ x: 5 }}
              href="#"
              className={`flex items-center gap-4 transition-all px-3 py-2 rounded-2xl ${item.active ? 'bg-white/10 text-white shadow-lg' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
            >
              <item.icon size={22} className={item.active ? 'text-pink-500' : ''} />
              <span className="font-bold tracking-tight text-sm">{item.label}</span>
            </motion.a>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] px-2">Your Collection</p>
          {collectionItems.map((item, idx) => (
            <motion.a
              key={idx}
              whileHover={{ x: 5 }}
              href="#"
              className="flex items-center gap-4 text-white/40 hover:text-white transition-all px-3 py-2 rounded-2xl hover:bg-white/5"
            >
              <item.icon size={22} />
              <span className="font-bold tracking-tight text-sm">{item.label}</span>
            </motion.a>
          ))}
        </div>
      </nav>

      <div className="mt-auto">
        <motion.div
          whileHover={{ y: -5 }}
          className="relative overflow-hidden p-6 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-2xl group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Zap size={60} fill="white" />
          </div>
          <p className="text-sm font-black mb-1 relative z-10">Farme Premium</p>
          <p className="text-[11px] text-white/40 font-bold mb-5 leading-relaxed relative z-10">Experience the sound without limits.</p>
          <button className="w-full py-3 bg-white text-black text-xs font-black rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all active:scale-95 relative z-10">
            Upgrade Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Sidebar;
