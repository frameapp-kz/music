import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Player from './components/Player';
import TrackCard from './components/TrackCard';
import { songs } from './data/mockData';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LiquidBackground = () => (
  <div className="liquid-bg">
    <svg width="0" height="0" className="absolute">
      <defs>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>

    <motion.div
      animate={{
        x: [0, 100, -100, 0],
        y: [0, -100, 100, 0],
        scale: [1, 1.2, 0.8, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="blob w-[500px] h-[500px] bg-pink-500/30 left-[10%] top-[10%]"
    />
    <motion.div
      animate={{
        x: [0, -150, 150, 0],
        y: [0, 150, -150, 0],
        scale: [1, 0.9, 1.3, 1],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="blob w-[600px] h-[600px] bg-blue-500/30 right-[10%] bottom-[10%]"
    />
    <motion.div
      animate={{
        x: [0, 200, -200, 0],
        y: [0, 200, -200, 0],
        scale: [1, 1.5, 0.7, 1],
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="blob w-[400px] h-[400px] bg-purple-500/30 left-[40%] top-[30%]"
    />
  </div>
);

function App() {
  const [currentTrack, setCurrentTrack] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const nextTrack = () => {
    const currentIndex = songs.findIndex(s => s.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentTrack(songs[nextIndex]);
  };

  const prevTrack = () => {
    const currentIndex = songs.findIndex(s => s.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentTrack(songs[prevIndex]);
  };

  return (
    <div className="flex h-screen w-screen text-white overflow-hidden p-0 md:p-4 gap-4 relative">
      <LiquidBackground />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 glass-panel rounded-none md:rounded-[2.5rem] flex flex-col overflow-hidden relative z-10">
        <Header />

        <div className="flex-1 overflow-y-auto px-6 md:px-10 pb-32">
          {/* Hero Section */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-72 md:h-80 rounded-[2rem] overflow-hidden group shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&auto=format&fit=crop&q=80"
                alt="Featured"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-xs font-black uppercase tracking-[0.3em] mb-3 text-pink-400 block">Featured Playlist</span>
                  <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Midnight Melodies</h2>
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => playTrack(songs[0])}
                      className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-3 shadow-xl"
                    >
                      <Play size={20} fill="black" /> Play Now
                    </button>
                    <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 shadow-lg">
                      <Heart size={24} />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* New Releases */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black tracking-tight">New Releases</h3>
              <button className="text-sm font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest">See all</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {songs.slice(0, 5).map((track, i) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <TrackCard track={track} onPlay={playTrack} />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Popular Tracks */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-black tracking-tight">Top Charts</h3>
              <button className="text-sm font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest">See all</button>
            </div>
            <div className="space-y-3">
              {songs.map((track, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={track.id}
                  onClick={() => playTrack(track)}
                  className={`flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all cursor-pointer group border border-transparent hover:border-white/10 ${currentTrack?.id === track.id ? 'bg-white/10 border-white/10' : ''}`}
                >
                  <span className="w-8 text-center text-sm font-black text-white/20 group-hover:text-white">
                    {currentTrack?.id === track.id && isPlaying ? (
                      <div className="flex items-end justify-center gap-[3px] h-4">
                        <motion.div animate={{ height: [4, 16, 8, 16, 4] }} transition={{ duration: 1, repeat: Infinity }} className="w-1 bg-pink-500 rounded-full" />
                        <motion.div animate={{ height: [8, 4, 16, 4, 8] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-1 bg-pink-500 rounded-full" />
                        <motion.div animate={{ height: [12, 16, 4, 16, 12] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1 bg-pink-500 rounded-full" />
                      </div>
                    ) : index + 1}
                  </span>
                  <img src={track.cover} alt={track.title} className="w-12 h-12 rounded-xl object-cover shadow-lg" />
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-sm font-bold truncate ${currentTrack?.id === track.id ? 'text-pink-400' : ''}`}>{track.title}</h4>
                    <p className="text-xs text-white/40 font-medium truncate">{track.artist}</p>
                  </div>
                  <div className="hidden md:flex items-center gap-10 pr-6">
                    <Heart size={18} className="text-white/20 hover:text-pink-500 transition-colors" />
                    <span className="text-xs text-white/20 font-black tracking-tighter">03:45</span>
                    <MoreHorizontal size={18} className="text-white/20 hover:text-white transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Music Player */}
      <Player
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onNext={nextTrack}
        onPrev={prevTrack}
      />
    </div>
  );
}

export default App;
