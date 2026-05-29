import React from 'react';
import { Home, Search, Library, PlusCircle, Heart, Download } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 glass-panel h-full flex flex-col p-6 hidden md:flex">
      <div className="flex items-center gap-2 mb-10">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-pink-500 rounded-full blur-[2px]" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Farme</h1>
      </div>

      <nav className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold text-white/50 uppercase tracking-wider px-2">Menu</p>
          <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors px-2 py-1">
            <Home size={20} />
            <span className="font-medium">Home</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors px-2 py-1">
            <Search size={20} />
            <span className="font-medium">Search</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors px-2 py-1">
            <Library size={20} />
            <span className="font-medium">Library</span>
          </a>
        </div>

        <div className="space-y-3 pt-4">
          <p className="text-xs font-semibold text-white/50 uppercase tracking-wider px-2">Your Collection</p>
          <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors px-2 py-1">
            <PlusCircle size={20} />
            <span className="font-medium">Create Playlist</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors px-2 py-1">
            <Heart size={20} />
            <span className="font-medium">Liked Songs</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors px-2 py-1">
            <Download size={20} />
            <span className="font-medium">Downloads</span>
          </a>
        </div>
      </nav>

      <div className="mt-auto">
        <div className="glass-card p-4 rounded-2xl">
          <p className="text-sm font-semibold mb-2">Farme Premium</p>
          <p className="text-xs text-white/60 mb-4">Listen to music without ads and offline.</p>
          <button className="w-full py-2 bg-white text-black text-xs font-bold rounded-xl hover:bg-white/90 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
