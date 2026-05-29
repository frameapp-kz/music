import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Player = ({ currentTrack, isPlaying, onTogglePlay, onNext, onPrev }) => {
  if (!currentTrack) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 md:bottom-6 left-0 md:left-1/2 md:-translate-x-1/2 right-0 md:right-auto md:w-[95%] lg:w-[90%] xl:w-[80%] h-24 glass-panel md:rounded-[2rem] border-t md:border border-white/10 px-6 md:px-10 flex items-center justify-between z-50 shadow-2xl"
    >
      <div className="flex items-center gap-4 w-full md:w-1/4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative group cursor-pointer"
        >
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="w-14 h-14 rounded-2xl object-cover shadow-2xl border border-white/10"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
             <Maximize2 size={16} className="text-white" />
          </div>
        </motion.div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-black truncate tracking-tight">{currentTrack.title}</h4>
          <p className="text-xs text-white/40 font-bold truncate">{currentTrack.artist}</p>
        </div>
        <button className="hidden md:block text-white/20 hover:text-pink-500 transition-colors">
          <Heart size={20} />
        </button>
      </div>

      <div className="hidden md:flex flex-col items-center gap-3 w-2/4">
        <div className="flex items-center gap-8">
          <button className="text-white/20 hover:text-white transition-colors">
            <Shuffle size={18} />
          </button>
          <button onClick={onPrev} className="text-white/40 hover:text-white transition-all hover:scale-110 active:scale-95">
            <SkipBack size={24} fill="currentColor" />
          </button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onTogglePlay}
            className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all"
          >
            {isPlaying ? <Pause size={24} fill="black" /> : <Play size={24} fill="black" className="ml-1" />}
          </motion.button>
          <button onClick={onNext} className="text-white/40 hover:text-white transition-all hover:scale-110 active:scale-95">
            <SkipForward size={24} fill="currentColor" />
          </button>
          <button className="text-white/20 hover:text-white transition-colors">
            <Repeat size={18} />
          </button>
        </div>
        <div className="w-full flex items-center gap-4">
          <span className="text-[10px] font-black text-white/20 w-10 text-right">1:24</span>
          <div className="flex-1 h-1.5 carved-bar rounded-full relative overflow-hidden group cursor-pointer">
            <motion.div
              initial={{ width: "30%" }}
              animate={{ width: isPlaying ? "60%" : "30%" }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity }}
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"
            />
          </div>
          <span className="text-[10px] font-black text-white/20 w-10">3:45</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4 w-1/4 justify-end">
        <Volume2 size={20} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
        <div className="w-24 h-1.5 carved-bar rounded-full overflow-hidden cursor-pointer group">
          <div className="h-full w-2/3 bg-white/40 group-hover:bg-white transition-colors rounded-full" />
        </div>
        <button className="ml-2 text-white/20 hover:text-white transition-colors">
           <Maximize2 size={18} />
        </button>
      </div>

      {/* Mobile Play Button */}
      <div className="md:hidden flex items-center">
         <button
            onClick={onTogglePlay}
            className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg"
          >
            {isPlaying ? <Pause size={24} fill="black" /> : <Play size={24} fill="black" className="ml-1" />}
          </button>
      </div>
    </motion.div>
  );
};

export default Player;
