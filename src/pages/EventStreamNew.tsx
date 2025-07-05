import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventStreamNew: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-5xl mx-auto">
    <div className="px-16 pt-10">
      <button onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/events/event-streams')} className="bg-white text-gray-500 text-sm mb-6 inline-block">&larr; Back to Event Streams</button>
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">New Event Stream</h1>
      <div className="mb-2 text-xs font-semibold text-gray-500">DESTINATIONS</div>
      <div className="flex gap-8 mt-2">
        <div onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/events/event-streams/new/webhook')} className="flex-1 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition group bg-white cursor-pointer">
          <div className="flex items-center mb-3">
            <svg className="w-7 h-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16v2a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h8a2 2 0 012 2v2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12h6m0 0l-3-3m3 3l-3 3" /></svg>
            <span className="text-lg font-semibold text-gray-900">Webhooks</span>
          </div>
          <div className="text-gray-500 text-sm">Specify an URL you'd like Auth0 to post events to.</div>
        </div>
        <div onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/events/event-streams/new/aws')} className="flex-1 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition group bg-white cursor-pointer">
          <div className="flex items-center mb-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-7 h-7 mr-3" />
            <span className="text-lg font-semibold text-gray-900">AWS EventBridge</span>
          </div>
          <div className="text-gray-500 text-sm">Stream real-time Auth0 data to over 15 targets like AWS Lambda.</div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default EventStreamNew; 