import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MOCK_ROLE = {
  id: 'rol_ljWb5fuUVta4ZEwD',
  name: 'admin',
  description: 'admin',
};
const MOCK_USERS = [
  { email: 'unpam.dik@gmail.com', connection: 'USERNAME-PASSWORD-AUTHENTICATION' },
];

export default function RoleSettingsPage() {
  const { roleId } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState<'Settings'|'Permissions'|'Users'>('Settings');
  const [showAddPerm, setShowAddPerm] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [searchUser, setSearchUser] = useState('');

  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-5xl mx-auto">
        <button className="text-gray-700 bg-white text-sm flex items-center hover:underline mb-6" onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/roles')}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mr-1"><path d="M15 19l-7-7 7-7" /></svg>
          Back to Roles
        </button>
        <div className="mb-2">
          <div className="text-3xl font-bold mb-1">{MOCK_ROLE.name}</div>
          <div className="text-gray-500 text-base flex items-center gap-2">Role ID <span className="bg-gray-100 rounded px-2 py-0.5 font-mono text-xs ml-2">{MOCK_ROLE.id}</span></div>
        </div>
        <div className="flex border-b border-gray-200 mb-8 gap-8">
          {['Settings','Permissions','Users'].map(t => (
            <button key={t} className={`pb-2 px-1 text-base font-medium ${tab === t ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-600 hover:text-blue-700'}`} onClick={() => setTab(t as any)}>{t}</button>
          ))}
        </div>
        {tab === 'Settings' && (
          <div>
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white mb-4" value={MOCK_ROLE.name} readOnly />
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value={MOCK_ROLE.description} readOnly />
              <button className="mt-6 bg-blue-600 text-white font-medium rounded px-6 py-2 text-base hover:bg-blue-700">Save</button>
            </div>
            <div className="mt-12">
              <div className="text-lg font-semibold mb-2">Danger Zone</div>
              <div className="bg-red-50 border border-red-200 rounded p-6 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-red-700 mb-1">Delete Role</div>
                  <div className="text-red-700 text-sm">Once confirmed, this operation can't be undone!</div>
                </div>
                <button className="bg-red-600 text-white font-medium rounded px-5 py-2 text-base hover:bg-red-700">Remove This Role</button>
              </div>
            </div>
          </div>
        )}
        {tab === 'Permissions' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-700">Add Permissions to this Role. Users who have this Role will receive all Permissions below that match the API of their login request.</div>
              <button className="bg-blue-600 text-white font-medium rounded px-5 py-2 text-base hover:bg-blue-700" onClick={()=>setShowAddPerm(true)}>Add Permissions</button>
            </div>
            <table className="w-full border-t border-b border-gray-200 mb-4">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="py-2">Permission</th>
                  <th className="py-2">Description</th>
                  <th className="py-2">API</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="text-center text-gray-500 py-8">No Permissions assigned</td>
                </tr>
              </tbody>
            </table>
            {showAddPerm && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 relative">
                  <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={()=>setShowAddPerm(false)} title="Close">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                  <h2 className="text-2xl font-bold mb-6">Add Permissions</h2>
                  <div className="mb-4">Select permissions from existing APIs</div>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white mb-6">
                    <option>Select an API...</option>
                  </select>
                  <div className="flex justify-end gap-3 mt-8">
                    <button type="button" className="px-6 py-2 rounded font-semibold bg-blue-600 text-white hover:bg-blue-700" onClick={()=>setShowAddPerm(false)}>Add Permissions</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {tab === 'Users' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-700">Users that have this role directly assigned.</div>
              <button className="bg-blue-600 text-white font-medium rounded px-5 py-2 text-base hover:bg-blue-700" onClick={()=>setShowAddUser(true)}>Add Users</button>
            </div>
            <table className="w-full border-t border-b border-gray-200 mb-4">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="py-2">User</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center text-gray-500 py-8">There are no users assigned to this role</td>
                </tr>
              </tbody>
            </table>
            {showAddUser && (
              <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 relative">
                  <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={()=>setShowAddUser(false)} title="Close">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                  <h2 className="text-2xl font-bold mb-6">Assign {MOCK_ROLE.name} role to users</h2>
                  <div className="mb-4">Select users you want to assign this role to.</div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Users</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white mb-4" placeholder="Search user..." value={searchUser} onChange={e=>setSearchUser(e.target.value)} />
                  <div className="bg-gray-50 rounded p-2 flex items-center gap-3 mb-2">
                    <span className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-400">O</span>
                    <div>
                      <div className="font-medium">unpam.dik@gmail.com</div>
                      <div className="text-xs text-gray-500">unpam.dik@gmail.com</div>
                    </div>
                    <span className="ml-auto px-2 py-0.5 rounded bg-gray-100 text-xs font-semibold text-gray-700">USERNAME-PASSWORD-AUTHENTICATION</span>
                  </div>
                  <div className="flex justify-end gap-3 mt-8">
                    <button type="button" className="px-6 py-2 rounded font-semibold bg-blue-600 text-white hover:bg-blue-700" onClick={()=>{setShowAddUser(false);navigate('/dashboard/au/dev-1md8m8doz8ynfucb/roles');}}>Add Users</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 