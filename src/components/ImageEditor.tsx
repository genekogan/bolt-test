import React, { useState } from 'react';
import { Plus, Settings, Edit2, Trash2 } from 'lucide-react';

interface Screenshot {
  id: number;
  url: string;
  caption: string;
}

export function ImageEditor() {
  const [screenshots, setScreenshots] = useState<Screenshot[]>([
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
      caption: "Opening scene - City skyline at dusk"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
      caption: "Character introduction - Coffee shop interior"
    }
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);

  const handleCaptionEdit = (id: number, newCaption: string) => {
    setScreenshots(prev =>
      prev.map(shot =>
        shot.id === id ? { ...shot, caption: newCaption } : shot
      )
    );
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    setScreenshots(prev => prev.filter(shot => shot.id !== id));
  };

  return (
    <div className="flex flex-col h-full bg-[var(--panel-bg)] rounded-lg overflow-hidden border border-[var(--border-color)]">
      <div className="p-4 border-b border-[var(--border-color)] flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white/90">Generated Images</h2>
        <button className="p-1 text-white/60 hover:text-white">
          <Settings size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-custom">
        <div className="grid grid-cols-1 gap-4">
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="bg-[var(--app-bg)] rounded-lg overflow-hidden border border-[var(--border-color)]">
              <img
                src={screenshot.url}
                alt={screenshot.caption}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                {editingId === screenshot.id ? (
                  <input
                    type="text"
                    defaultValue={screenshot.caption}
                    onBlur={(e) => handleCaptionEdit(screenshot.id, e.target.value)}
                    autoFocus
                    className="w-full p-2 bg-[var(--panel-bg)] border border-[var(--border-color)] rounded text-white"
                  />
                ) : (
                  <div className="flex justify-between items-start">
                    <p className="text-white/90 flex-1">{screenshot.caption}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingId(screenshot.id)}
                        className="text-white/60 hover:text-white"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(screenshot.id)}
                        className="text-white/60 hover:text-red-400"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-[var(--border-color)]">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          <span>Generate New Image</span>
        </button>
      </div>
    </div>
  );
}