import React from 'react';
import { Button } from '../atoms/Button';

const LogStreams: React.FC = () => {
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-4xl mx-auto">
    <div className="px-16 pt-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Log Streams</h1>
          <p className="text-gray-500 mt-2 text-sm max-w-2xl">Stream your logs to third-parties for storage, analysis, and event triggering <a href="#" className="text-blue-600 hover:underline ml-1">Show more</a></p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5" size="default">+ Create Log Stream</Button>
      </div>
      <div className="max-w-3xl">
        <div className="flex items-center bg-blue-50 border border-blue-100 text-blue-700 rounded-lg px-5 py-4 text-sm">
          <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#60A5FA" strokeWidth="2" fill="#DBEAFE" /><path d="M12 8v4m0 4h.01" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span>This feature is not available for free plans. To configure a log stream, please <a href="#" className="text-blue-600 underline">upgrade your account to any paid plan</a>.</span>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default LogStreams; 