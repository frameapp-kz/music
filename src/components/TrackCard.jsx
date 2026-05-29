import React from 'react';
import { Play } from 'lucide-react';

const TrackCard = ({ track, onPlay }) => {
  return (
    <div
      className="glass-card rounded-2xl p-4 cursor-pointer group relative overflow-hidden"
      onClick={() => onPlay(track)}
    >
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
        <img
          src={track.cover}
          alt={track.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-2xl scale-0 group-hover:scale-100 transition-transform">
            <Play size={24} fill="black" className="ml-1" />
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-sm mb-1 truncate">{track.title}</h4>
        <p className="text-xs text-white/50 truncate">{track.artist}</p>
      </div>
    </div>
  );
};

export default TrackCard;
