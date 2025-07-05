import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

const orgEvents = [
  'organization.connection.added',
  'organization.connection.removed',
  'organization.connection.updated',
  'organization.created',
  'organization.deleted',
  'organization.member.added',
  'organization.member.deleted',
  'organization.member.role.assigned',
  'organization.member.role.deleted',
  'organization.updated',
];

const EventStreamNewAWS: React.FC = () => {
  const [orgOpen, setOrgOpen] = useState(true);
  const [checked, setChecked] = useState<string[]>([]);
  const allChecked = checked.length === orgEvents.length;

  const toggleAll = () => {
    setChecked(allChecked ? [] : orgEvents);
  };
  const toggleOne = (event: string) => {
    setChecked(checked.includes(event) ? checked.filter(e => e !== event) : [...checked, event]);
  };

  return (
    <div className="px-16 pt-10 pb-20">
      <Link to="/dashboard/au/dev-1md8m8doz8ynfucb/events/event-streams/new" className="text-gray-500 text-sm mb-6 inline-block">&larr; Back to Event Streams</Link>
      <h1 className="text-3xl font-semibold text-gray-900 mb-1">New Event Stream</h1>
      <div className="text-gray-500 text-base mb-8">AWS EventBridge</div>
      <div className="bg-white rounded-xl border border-gray-200 p-10 max-w-5xl flex gap-12">
        <div className="flex-1">
          <div className="text-lg font-semibold mb-6">Configurations</div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stream Name <span className="text-red-500">*</span></label>
              <Input placeholder="Add name for event stream" className="bg-white text-gray-900" />
              <div className="text-xs text-gray-400 mt-1">Describe what your stream does. e.g. update user metadata.</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">AWS Account ID <span className="text-red-500">*</span></label>
              <Input placeholder="AWS Account ID" className="bg-white text-gray-900" />
              <div className="text-xs text-gray-400 mt-1">The AWS account that will be used.</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">AWS Region <span className="text-red-500">*</span></label>
              <Input placeholder="us-west-1" className="bg-white text-gray-900" />
              <div className="text-xs text-gray-400 mt-1">Designate an AWS geographic zone. e.g. us-west-1</div>
            </div>
          </form>
        </div>
        <div className="flex-1">
          <div className="text-lg font-semibold mb-6">Select Events</div>
          <div className="text-sm text-gray-500 mb-2">Select the Auth0 events that you wish to react to.</div>
          <div className="border rounded-lg border-gray-200 bg-gray-50">
            <button type="button" className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-gray-700" onClick={() => setOrgOpen(v => !v)}>
              <span>Organization</span>
              <svg className={`w-4 h-4 ml-2 transition-transform ${orgOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none"><path d="M6 8l4 4 4-4" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {orgOpen && (
              <div className="px-4 pb-4 pt-2">
                <label className="flex items-center mb-2 cursor-pointer">
                  <input type="checkbox" className="mr-2" checked={allChecked} onChange={toggleAll} />
                  <span className="font-medium">Select all events</span>
                </label>
                {orgEvents.map(ev => (
                  <label key={ev} className="flex items-center mb-1 cursor-pointer">
                    <input type="checkbox" className="mr-2" checked={checked.includes(ev)} onChange={() => toggleOne(ev)} />
                    <span>{ev}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-8 max-w-5xl">
        <Button variant="outline" className="px-6">Discard</Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">Save</Button>
      </div>
    </div>
  );
};

export default EventStreamNewAWS; 