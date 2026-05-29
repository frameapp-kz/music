import React from 'react';
import { Search, Bell, User, ChevronLeft, ChevronRight, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-6 md:p-8 relative z-20">
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ x: -2 }}
            className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all border border-white/5"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            whileHover={{ x: 2 }}
            className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all border border-white/5"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-pink-500 transition-colors" size={20} />
          <input
            type="text"
            placeholder="Search music, artists..."
            className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 w-48 md:w-80 lg:w-96 text-sm font-bold focus:outline-none focus:bg-white/10 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-white/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ rotate: 15 }}
          className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all border border-white/5 relative"
        >
          <Bell size={22} />
          <span className="absolute top-3 right-3 w-2 h-2 bg-pink-500 rounded-full border-2 border-[#0f172a]" />
        </motion.button>

        <motion.button
          whileHover={{ rotate: -15 }}
          className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all border border-white/5"
        >
          <Settings size={22} />
        </motion.button>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 bg-white/5 rounded-2xl p-1.5 pr-4 hover:bg-white/10 transition-all cursor-pointer border border-white/10 shadow-xl"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden shadow-lg border border-white/20">
            <User size={22} className="text-white" />
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-black leading-none mb-0.5">Madeniyet</p>
            <p className="text-[10px] font-black text-white/30 uppercase tracking-tighter">Pro Member</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
