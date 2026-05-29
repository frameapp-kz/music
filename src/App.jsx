import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Player from './components/Player';
import TrackCard from './components/TrackCard';
import { songs } from './data/mockData';
import { Play, Heart, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <div className="flex h-screen w-screen text-white overflow-hidden p-0 md:p-4 gap-4">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 glass-panel rounded-none md:rounded-[2rem] flex flex-col overflow-hidden relative">
        <Header />

        <div className="flex-1 overflow-y-auto px-8 pb-32">
          {/* Hero Section */}
          <section className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-64 rounded-3xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=1600&auto=format&fit=crop&q=80"
                alt="Featured"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-xs font-bold uppercase tracking-widest mb-2 text-white/70">Featured Playlist</span>
                <h2 className="text-5xl font-black mb-4">Chill Vibes 2024</h2>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => playTrack(songs[0])}
                    className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <Play size={20} fill="black" /> Play Now
                  </button>
                  <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </section>

          {/* New Releases */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">New Releases</h3>
              <button className="text-sm font-semibold text-white/50 hover:text-white transition-colors">See all</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {songs.slice(0, 5).map((track) => (
                <TrackCard key={track.id} track={track} onPlay={playTrack} />
              ))}
            </div>
          </section>

          {/* Popular Tracks */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Popular Tracks</h3>
              <button className="text-sm font-semibold text-white/50 hover:text-white transition-colors">See all</button>
            </div>
            <div className="space-y-2">
              {songs.map((track, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={track.id}
                  onClick={() => playTrack(track)}
                  className={`flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group ${currentTrack?.id === track.id ? 'bg-white/10' : ''}`}
                >
                  <span className="w-6 text-center text-sm font-medium text-white/30 group-hover:text-white">
                    {currentTrack?.id === track.id && isPlaying ? (
                      <div className="flex items-end justify-center gap-[2px] h-3">
                        <div className="w-1 bg-white animate-[bounce_1s_infinite_0.1s]" />
                        <div className="w-1 bg-white animate-[bounce_1s_infinite_0.3s]" />
                        <div className="w-1 bg-white animate-[bounce_1s_infinite_0.2s]" />
                      </div>
                    ) : index + 1}
                  </span>
                  <img src={track.cover} alt={track.title} className="w-10 h-10 rounded-md object-cover" />
                  <div className="flex-1">
                    <h4 className={`text-sm font-semibold ${currentTrack?.id === track.id ? 'text-pink-400' : ''}`}>{track.title}</h4>
                    <p className="text-xs text-white/50">{track.artist}</p>
                  </div>
                  <div className="flex items-center gap-8 pr-4">
                    <Heart size={16} className="text-white/30 hover:text-white transition-colors" />
                    <span className="text-xs text-white/30 font-medium">3:45</span>
                    <MoreHorizontal size={16} className="text-white/30 hover:text-white transition-colors" />
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
