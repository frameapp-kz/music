import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2 } from 'lucide-react';

const Player = ({ currentTrack, isPlaying, onTogglePlay, onNext, onPrev }) => {
  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 glass-panel border-t border-white/10 px-6 flex items-center justify-between z-50">
      <div className="flex items-center gap-4 w-full md:w-1/3">
        <img
          src={currentTrack.cover}
          alt={currentTrack.title}
          className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover shadow-lg"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold truncate">{currentTrack.title}</h4>
          <p className="text-xs text-white/60 truncate">{currentTrack.artist}</p>
        </div>
        <div className="flex md:hidden items-center gap-4">
          <button onClick={onTogglePlay} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
            {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" className="ml-1" />}
          </button>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center gap-2 w-1/3">
        <div className="flex items-center gap-6">
          <button className="text-white/40 hover:text-white transition-colors">
            <Shuffle size={16} />
          </button>
          <button onClick={onPrev} className="text-white/60 hover:text-white transition-colors">
            <SkipBack size={20} fill="currentColor" />
          </button>
          <button
            onClick={onTogglePlay}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" className="ml-1" />}
          </button>
          <button onClick={onNext} className="text-white/60 hover:text-white transition-colors">
            <SkipForward size={20} fill="currentColor" />
          </button>
          <button className="text-white/40 hover:text-white transition-colors">
            <Repeat size={16} />
          </button>
        </div>
        <div className="w-full max-w-md flex items-center gap-2">
          <span className="text-[10px] text-white/40">1:24</span>
          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-white rounded-full" />
          </div>
          <span className="text-[10px] text-white/40">3:45</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4 w-1/3 justify-end">
        <Volume2 size={18} className="text-white/40" />
        <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-white rounded-full" />
        </div>
        <Maximize2 size={16} className="text-white/40 hover:text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Player;
