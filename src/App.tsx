import React from 'react';
import { ChatPanel } from './components/ChatPanel';
import { ImageEditor } from './components/ImageEditor';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--app-bg)]">
      <Navigation />
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 h-[calc(100vh-64px)]">
        <ChatPanel />
        <ImageEditor />
      </div>
    </div>
  );
}

export default App;