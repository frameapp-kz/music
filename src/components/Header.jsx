import React from 'react';
import { Search, Bell, User, ChevronLeft, ChevronRight } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 md:p-6">
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-white/50 hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-white/50 hover:text-white transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" size={18} />
          <input
            type="text"
            placeholder="Search artists..."
            className="bg-white/10 border border-white/10 rounded-full py-2 pl-10 pr-4 w-40 md:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-white/30"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-2 bg-white/10 rounded-full p-1 pr-3 hover:bg-white/20 transition-colors cursor-pointer border border-white/10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 flex items-center justify-center overflow-hidden">
            <User size={20} className="text-white" />
          </div>
          <span className="text-sm font-medium">User</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
