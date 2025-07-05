import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const runtimes = [
  'Node 12 (Deprecated)',
  'Node 16 (Deprecated)',
  'Node 18 (Not Recommended)',
  'Node 22 (Recommended)',
];

export default function CredentialsExchangeTrigger() {
  const [tab, setTab] = useState<'installed' | 'custom'>('installed');
  const [showModal, setShowModal] = useState(false);
  const [runtime, setRuntime] = useState(runtimes[3]);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white w-screen p-0">
      {/* Header */}
      <div className="flex items-center justify-between px-12 pt-10 pb-6">
        <div>
          <button
            className="text-sm text-gray-500 mb-2 flex items-center gap-1 hover:underline focus:outline-none"
            onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/triggers')}
            type="button"
          >
            <span className="text-lg">&larr;</span> Choose trigger
          </button>
          <h1 className="text-3xl font-bold mb-1">Credentials Exchange</h1>
          <div className="text-gray-500 text-base">Customize the trigger before an access token is returned for machine-to-machine applications.</div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button className="flex items-center gap-2 px-5 py-2 rounded bg-gray-100 text-gray-400 font-semibold text-base cursor-not-allowed" disabled>
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#D1D5DB" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Apply
          </button>
          <div className="text-xs text-gray-400">All changes are live</div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex w-full px-12 pb-12 gap-8">
        {/* Flow Diagram */}
        <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center justify-center min-h-[600px] relative overflow-hidden">
          {/* Dotted background */}
          <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)',backgroundSize:'18px 18px'}}></div>
          <div className="relative z-10 flex flex-col items-center mt-24">
            {/* Start Node */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center border-4 border-white shadow-lg">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#fff" strokeWidth="1.5"/><rect x="4" y="4" width="16" height="16" rx="4" stroke="#fff" strokeWidth="2"/></svg>
              </div>
              <div className="text-lg font-semibold mt-2">Start</div>
              <div className="text-gray-400 text-sm">M2M authentication</div>
            </div>
            {/* Arrow */}
            <div className="h-10 flex items-center">
              <svg width="2" height="40" viewBox="0 0 2 40" fill="none"><line x1="1" y1="0" x2="1" y2="40" stroke="#E5E7EB" strokeWidth="2"/></svg>
            </div>
            {/* Complete Node */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center border-4 border-white shadow-lg">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="text-lg font-semibold mt-2">Complete</div>
              <div className="text-gray-400 text-sm">Token issued</div>
              <div className="absolute left-24 top-8 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">Complete</div>
            </div>
          </div>
        </div>
        {/* Add Action Panel */}
        <div className="w-[350px] bg-white border border-gray-100 rounded-2xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold text-lg">Add Action</div>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 hover:bg-gray-50" onClick={()=>setShowModal(true)}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><path d="M12 8v8M8 12h8" stroke="#111827" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="flex border-b border-gray-200 mb-4">
            <button className={`flex-1 py-2 text-center font-medium text-base ${tab==='installed'?'text-blue-700 border-b-2 border-blue-700':'text-gray-500'}`} onClick={()=>setTab('installed')}>Installed</button>
            <button className={`flex-1 py-2 text-center font-medium text-base ${tab==='custom'?'text-blue-700 border-b-2 border-blue-700':'text-gray-500'}`} onClick={()=>setTab('custom')}>Custom</button>
          </div>
          <input className="w-full border border-gray-200 rounded px-3 py-2 mb-4 text-sm" placeholder="Search actions..." disabled />
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-sm">
            {tab==='installed' ? (
              <>
                <div>You do not have any installed actions</div>
                <button className="text-blue-700 underline mt-1" onClick={()=>navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/library/actions/packaged')}>Install Action</button>
              </>
            ) : (
              <>
                <div>You do not have any custom actions</div>
                <button className="text-blue-700 underline mt-1" onClick={()=>setShowModal(true)}>Create Action</button>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Modal for Create Action */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" onClick={()=>setShowModal(false)}>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M6 6l12 12M6 18L18 6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            <div className="text-xl font-semibold mb-6">Create Action</div>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name<span className="text-red-500">*</span></label>
                <input className="w-full border border-gray-300 rounded px-3 py-2" placeholder="" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Trigger<span className="text-red-500">*</span></label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100" value="Credentials Exchange" disabled>
                  <option>Credentials Exchange</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Runtime<span className="text-red-500">*</span></label>
                <select className="w-full border border-gray-300 rounded px-3 py-2" value={runtime} onChange={e=>setRuntime(e.target.value)}>
                  {runtimes.map(rt => <option key={rt} value={rt}>{rt}</option>)}
                </select>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button type="button" className="px-4 py-2 rounded border border-gray-300 text-gray-700 bg-white" onClick={()=>setShowModal(false)}>Cancel</button>
                <button type="button" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold opacity-60 cursor-not-allowed" disabled>Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 