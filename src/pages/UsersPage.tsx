import React, { useState } from 'react';

const MOCK_USERS = [
  {
    name: 'unpam.dik@gmail.com',
    email: 'unpam.dik@gmail.com',
    userId: 'auth0|6796583d339e91902c701b94',
    connection: 'Username-Password-Authentication',
    logins: 1,
    latestLogin: '5 months ago',
    avatar: '',
  },
];

const MOCK_CONNECTIONS = [
  { label: 'test', value: 'test' },
  { label: 'Username-Password-Authentication', value: 'Username-Password-Authentication' },
];

export default function UsersPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('User');
  const [showCreate, setShowCreate] = useState(false);
  const [showCreateDropdown, setShowCreateDropdown] = useState(false);
  const [showMenuIdx, setShowMenuIdx] = useState<number | null>(null);
  const [createMode, setCreateMode] = useState<'ui' | 'json'>('ui');
  const [connection, setConnection] = useState(MOCK_CONNECTIONS[0].value);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [jsonProfile, setJsonProfile] = useState(`{
  "app_metadata": {},
  "email": "user@example.com",
  "password": "string",
  "phone_number": "string",
  "user_metadata": {},
  "username": "string"
}`);

  const filteredUsers = MOCK_USERS.filter(u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Users</h1>
          <div className="relative">
            <button className="bg-blue-600 text-white font-medium rounded px-5 py-2 text-base hover:bg-blue-700 flex items-center gap-2" onClick={() => setShowCreateDropdown(v => !v)}>
              + Create User
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showCreateDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                <button className="w-full bg-white text-left px-4 py-2 hover:bg-gray-50" onClick={() => { setShowCreate(true); setCreateMode('ui'); setShowCreateDropdown(false); }}>Create via UI</button>
                <button className="w-full bg-white text-left px-4 py-2 hover:bg-gray-50" onClick={() => { setShowCreate(true); setCreateMode('json'); setShowCreateDropdown(false); }}>Create via JSON</button>
              </div>
            )}
          </div>
        </div>
        <div className="mb-4 flex gap-2 items-center">
          <input className="flex-1 border rounded px-3 py-2 text-gray-900 bg-white" placeholder="Search for a user's name, email address, or Auth0 user ID" value={search} onChange={e => setSearch(e.target.value)} />
          <select className="border rounded px-3 py-2 text-gray-900 bg-white" value={filter} onChange={e => setFilter(e.target.value)}>
            <option>User</option>
          </select>
          <button className="border rounded px-3 py-2 text-gray-900 bg-white" onClick={() => setSearch('')}>× Reset</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-t border-b border-gray-200 mb-4">
            <thead>
              <tr className="text-left text-gray-500 text-sm">
                <th className="py-2">Name</th>
                <th className="py-2">User ID</th>
                <th className="py-2">Connection</th>
                <th className="py-2">Logins</th>
                <th className="py-2">Latest Login</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u, idx) => (
                <tr key={u.userId} className="hover:bg-gray-50">
                  <td className="py-2 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-lg font-bold text-white">UN</span>
                    <div>
                      <a href="#" className="text-blue-700 font-medium hover:underline">{u.email}</a>
                      <div className="text-xs text-gray-500">{u.email}</div>
                    </div>
                  </td>
                  <td className="py-2">
                    <span className="bg-gray-100 rounded px-2 py-0.5 font-mono text-xs">{u.userId}</span>
                    <button className="ml-1 text-gray-400 hover:text-gray-700"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="6" height="6" rx="1" /><path d="M5 12h14" /></svg></button>
                  </td>
                  <td className="py-2">{u.connection}</td>
                  <td className="py-2">{u.logins}</td>
                  <td className="py-2">{u.latestLogin}</td>
                  <td className="py-2 relative">
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 bg-white" onClick={() => setShowMenuIdx(idx === showMenuIdx ? null : idx)}>
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                    </button>
                    {showMenuIdx === idx && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                        <button className="w-full bg-white text-left px-4 py-2 hover:bg-gray-50">View Details</button>
                        <button className="w-full bg-white text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 01-8 0" /><path d="M12 3v4" /></svg>Assign Roles</button>
                        <button className="w-full bg-white text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4" /></svg>Assign Permissions</button>
                        <button className="w-full bg-white text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 01-8 0" /><path d="M12 3v4" /></svg>Send Verification Email</button>
                        <div className="border-t my-1" />
                        <button className="w-full bg-white text-left px-4 py-2 hover:bg-gray-50">Change Email</button>
                        <button className="w-full bg-white text-left px-4 py-2 hover:bg-gray-50">Change Password</button>
                        <div className="border-t my-1" />
                        <button className="w-full bg-white text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="8" y1="12" x2="16" y2="12" /></svg>Block</button>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-red-600 flex items-center gap-2"><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 9l6 6M15 9l-6 6" /></svg>Delete</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Create User Modal */}
        {showCreate && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl p-8 relative">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={() => setShowCreate(false)}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <h2 className="text-2xl font-bold mb-6">Create user</h2>
              {createMode === 'ui' ? (
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Connection *</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value={connection} onChange={e => setConnection(e.target.value)}>
                      {MOCK_CONNECTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="email@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Username *</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="+15555555555" value={phone} onChange={e => setPhone(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                    <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value={password} onChange={e => setPassword(e.target.value)} />
                  </div>
                  <div className="flex justify-end gap-3 mt-8">
                    <button type="button" className="px-6 py-2 rounded border border-gray-300 bg-white text-gray-700 font-medium" onClick={() => setShowCreate(false)}>Cancel</button>
                    <button type="button" className="px-6 py-2 rounded border border-gray-300 bg-white text-gray-700 font-medium">Create Another</button>
                    <button type="submit" className="px-6 py-2 rounded font-semibold bg-blue-600 text-white hover:bg-blue-700">Create</button>
                  </div>
                </form>
              ) : (
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Connection *</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value={connection} onChange={e => setConnection(e.target.value)}>
                      {MOCK_CONNECTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">User Profile</label>
                    <textarea rows={8} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white font-mono text-sm" value={jsonProfile} onChange={e => setJsonProfile(e.target.value)} />
                    <button type="button" className="bg-white mt-2 text-xs text-blue-600 underline" onClick={() => setJsonProfile(`{\n  \"app_metadata\": {},\n  \"email\": \"user@example.com\",\n  \"password\": \"string\",\n  \"phone_number\": \"string\",\n  \"user_metadata\": {},\n  \"username\": \"string\"\n}`)}>Reset to Default</button>
                  </div>
                  <div className="flex justify-end gap-3 mt-8">
                    <button type="button" className="px-6 py-2 rounded border border-gray-300 bg-white text-gray-700 font-medium" onClick={() => setShowCreate(false)}>Cancel</button>
                    <button type="button" className="px-6 py-2 rounded border border-gray-300 bg-white text-gray-700 font-medium">Create Another</button>
                    <button type="submit" className="px-6 py-2 rounded font-semibold bg-blue-600 text-white hover:bg-blue-700">Create</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 