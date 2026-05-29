import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const TrackCard = ({ track, onPlay }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card rounded-[2rem] p-4 cursor-pointer group relative overflow-hidden"
      onClick={() => onPlay(track)}
    >
      <div className="relative aspect-square mb-5 overflow-hidden rounded-[1.5rem] shadow-2xl">
        <img
          src={track.cover}
          alt={track.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.1 }
            }}
            className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.5)] transform scale-0 group-hover:scale-100 transition-all duration-300"
          >
            <Play size={28} fill="black" className="ml-1" />
          </motion.div>
        </div>
      </div>
      <div className="px-1">
        <h4 className="font-black text-sm mb-1 truncate tracking-tight text-white/90 group-hover:text-white transition-colors">{track.title}</h4>
        <p className="text-[11px] font-bold text-white/40 truncate uppercase tracking-widest">{track.artist}</p>
      </div>

      {/* Decorative inner glow */}
      <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none" />
    </motion.div>
  );
};

export default TrackCard;
