import React from 'react';
import { Image, Video, Music, Settings } from 'lucide-react';

export function Navigation() {
  return (
    <div className="border-b border-[var(--border-color)] bg-[var(--panel-bg)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-bold">Screenplay AI</span>
            <nav className="flex space-x-4">
              <button className="px-3 py-2 text-white/90 hover:text-white flex items-center gap-2">
                <Image size={18} />
                <span>Image</span>
              </button>
              <button className="px-3 py-2 text-white/60 hover:text-white flex items-center gap-2">
                <Video size={18} />
                <span>Video</span>
              </button>
              <button className="px-3 py-2 text-white/60 hover:text-white flex items-center gap-2">
                <Music size={18} />
                <span>Audio</span>
              </button>
            </nav>
          </div>
          <div className="ml-auto">
            <button className="p-2 text-white/60 hover:text-white">
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}