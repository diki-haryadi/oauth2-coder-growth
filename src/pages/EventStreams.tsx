import React from 'react';
import { Button } from '../atoms/Button';
import { useNavigate } from 'react-router-dom';

const EventStreams: React.FC = () => {
  const navigate = useNavigate();
  const handleCreate = () => {
    navigate('/dashboard/au/dev-1md8m8doz8ynfucb/events/event-streams/new');
  };
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-5xl mx-auto">
    <div className="px-16 pt-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Event Streams</h1>
          <p className="text-gray-500 mt-2 text-sm max-w-2xl">React to events that happened in the Auth0 ecosystem through various type of streams like Webhooks and AWS EventBridge.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5" size="default" onClick={handleCreate}>+ Create Event Stream</Button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 flex flex-col items-center justify-center py-24 mt-6">
        {/* Placeholder illustration */}
        <div className="mb-8">
          <svg width="120" height="100" viewBox="0 0 120 100" fill="none"><rect width="120" height="100" rx="16" fill="#F3F4F6"/><rect x="30" y="30" width="60" height="40" rx="8" fill="#E0E7FF"/><rect x="50" y="50" width="20" height="10" rx="2" fill="#6366F1"/></svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">You don't have an Event Stream yet</h2>
        <p className="text-gray-500 mb-6 text-center max-w-md">React to events that happened in Auth0 by sending this data to your own Webhook and more.</p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5" size="default" onClick={handleCreate}>+ Create Event Stream</Button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default EventStreams; 