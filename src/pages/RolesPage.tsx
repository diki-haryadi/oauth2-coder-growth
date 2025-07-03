import React, { useState } from 'react';

export default function RolesPage() {
  const [showCreate, setShowCreate] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <div className="min-h-screen bg-white w-full p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Roles</h1>
            <div className="text-gray-600 mt-2">Create and manage Roles for your applications. Roles contain collections of Permissions and can be assigned to Users.</div>
          </div>
          <button className="bg-blue-600 text-white font-medium rounded px-5 py-2 text-base hover:bg-blue-700" onClick={() => setShowCreate(true)}>+ Create Role</button>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-12 flex flex-col items-center justify-center" style={{ minHeight: 320 }}>
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="mb-6">
            <rect x="10" y="30" width="100" height="40" rx="8" fill="#F3F4F6" />
            <rect x="20" y="40" width="20" height="10" rx="2" fill="#E5E7EB" />
            <rect x="50" y="40" width="20" height="10" rx="2" fill="#E5E7EB" />
            <rect x="80" y="40" width="20" height="10" rx="2" fill="#E5E7EB" />
            <circle cx="30" cy="55" r="6" fill="#A5B4FC" />
            <circle cx="60" cy="55" r="6" fill="#FCA5A5" />
            <circle cx="90" cy="55" r="6" fill="#6EE7B7" />
            <rect x="45" y="20" width="30" height="8" rx="2" fill="#E5E7EB" />
            <rect x="55" y="10" width="10" height="8" rx="2" fill="#A5B4FC" />
          </svg>
          <div className="text-xl font-semibold mb-2">You don't have any roles yet.</div>
          <div className="text-gray-600 mb-6 text-center">Create roles to represent the types of users that access your applications.<br/>Assign permissions to those roles to control what users are allowed to do in your apps.</div>
          <button className="bg-blue-600 text-white font-medium rounded px-5 py-2 text-base hover:bg-blue-700" onClick={() => setShowCreate(true)}>+ Create Role</button>
        </div>
        {/* Modal Create Role */}
        {showCreate && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 relative">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={() => setShowCreate(false)} title="Close">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <h2 className="text-2xl font-bold mb-6">New Role</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" value={desc} onChange={e => setDesc(e.target.value)} />
                </div>
                <div className="flex justify-end gap-3 mt-8">
                  <button type="button" className="px-6 py-2 rounded border border-gray-300 bg-white text-gray-700 font-medium" onClick={() => setShowCreate(false)}>Cancel</button>
                  <button type="submit" className="px-6 py-2 rounded font-semibold bg-blue-600 text-white hover:bg-blue-700">Create</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 