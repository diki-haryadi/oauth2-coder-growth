import React, { useState, useRef, useEffect } from 'react';

const ActionLogs: React.FC = () => {
  const [connected, setConnected] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-1">Actions Real-time Logs</h1>
        <div className="text-gray-500 mb-8 max-w-2xl">
          The Actions Real-time Logs feature displays all logs in real-time for the custom code in your account. These logs are helpful while debugging your Actions, Custom Database scripts, and Custom Social Connections.{' '}
          <a href="#" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Learn More <svg className="inline w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 3h7v7m0-7L10 14M5 19h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        </div>
        <div className="bg-[#181818] rounded-xl p-6 relative flex flex-col min-h-[420px] max-w-full">
          <div className="flex items-center justify-between mb-4">
            <input
              className="w-72 px-4 py-2 rounded border border-[#333] bg-[#181818] text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Search"
            />
            <div className="flex items-center gap-3">
              <span className={`flex items-center px-3 py-1 rounded text-xs font-semibold ${connected ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'}`}> 
                <span className={`w-2 h-2 rounded-full mr-2 ${connected ? 'bg-green-400' : 'bg-red-400'}`}></span>
                {connected ? 'CONNECTED' : 'DISCONNECTED'}
              </span>
              {connected ? (
                <button onClick={() => setConnected(false)} className="px-4 py-2 rounded border border-gray-700 text-gray-200 bg-[#181818] hover:bg-[#232323] flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2" strokeWidth="2" /><path d="M9 12h6" strokeWidth="2" /></svg>
                  Pause Connection
                </button>
              ) : (
                <button onClick={() => setConnected(true)} className="px-4 py-2 rounded border border-blue-600 text-blue-500 bg-[#181818] hover:bg-[#232323] flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21" fill="currentColor" /></svg>
                  Start Connection
                </button>
              )}
              <div className="relative" ref={menuRef}>
                <button onClick={() => setMenuOpen(v => !v)} className="w-10 h-10 flex items-center justify-center rounded border border-[#333] bg-[#181818] text-gray-300 hover:bg-[#232323]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></svg>
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#232323] rounded-xl shadow-2xl border border-[#333] z-50 p-2 text-gray-200">
                    <div className="px-4 py-2 hover:bg-[#181818] rounded cursor-pointer">Local Time</div>
                    <div className="px-4 py-2 hover:bg-[#181818] rounded cursor-pointer">Download</div>
                    <div className="border-t border-[#333] my-1" />
                    <div className="px-4 py-2 hover:bg-[#181818] rounded cursor-pointer text-red-400">&times; Clear Logs</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto text-green-200 font-mono text-sm px-2">
            <div className="pt-2">
              <span className="text-gray-400">03:16:32</span>: <span className="text-gray-400">Log streaming connected...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionLogs; 