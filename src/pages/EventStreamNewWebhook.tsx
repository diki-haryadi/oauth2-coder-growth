import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

const EventStreamNewWebhook: React.FC = () => {
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-5xl mx-auto">
    <div className="px-16 pt-10 pb-20">
      <Link to="/dashboard/au/dev-1md8m8doz8ynfucb/events/event-streams/new" className="text-gray-500 text-sm mb-6 inline-block">&larr; Back to Event Streams</Link>
      <h1 className="text-3xl font-semibold text-gray-900 mb-1">New Event Stream</h1>
      <div className="text-gray-500 text-base mb-8">Webhook</div>
      <div className="bg-white rounded-xl border border-gray-200 p-10 max-w-3xl">
        <div className="text-lg font-semibold mb-6">Configurations</div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stream Name <span className="text-red-500">*</span></label>
            <Input placeholder="Add name for event stream" className="bg-white text-gray-900" />
            <div className="text-xs text-gray-400 mt-1">Describe what your stream does. e.g. update user metadata.</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Endpoint <span className="text-red-500">*</span></label>
            <Input placeholder="https://myapp.org/endpoint" className="bg-white text-gray-900" />
            <div className="text-xs text-gray-400 mt-1">Define the URL that we should send message to.</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Authentication method</label>
            <select className="w-full h-11 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
              <option>Bearer</option>
              <option>Basic</option>
              <option>None</option>
            </select>
            <div className="text-xs text-gray-400 mt-1">Method used to authenticate your application</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Authorization Token <span className="text-red-500">*</span></label>
            <Input placeholder="Authorization Token" className="bg-white text-gray-900" />
            <div className="text-xs text-gray-400 mt-1">An HTTP header [Authorization] will be set with the token value you've provided above.</div>
          </div>
        </form>
      </div>
      <div className="flex justify-end gap-4 mt-8 max-w-3xl">
        <Button variant="outline" className="px-6 bg-white border-1 border-gray-200">Discard</Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">Save</Button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default EventStreamNewWebhook; 