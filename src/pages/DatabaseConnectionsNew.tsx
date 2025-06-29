import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const identifierOptions = [
  { label: 'Email Address', icon: '/icons/email.svg' },
  { label: 'Phone Number', icon: '/icons/phone.svg' },
  { label: 'Username', icon: '/icons/user.svg' },
];
const authMethods = [
  { label: 'Password', icon: '/icons/lock.svg', enabled: true },
  { label: 'Passkey', icon: '/icons/key.svg', enabled: false, desc: 'After creating the connection, you can activate passkeys by adding it as an authentication method.' },
];

export default function DatabaseConnectionsNew() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(true);
  const [identifiers, setIdentifiers] = useState([false, false, false]);
  const [methods, setMethods] = useState([true, false]);
  const [disableSignups, setDisableSignups] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 w-screen flex flex-row pt-12 px-0 pl-64">
      <div className="w-full max-w-2xl bg-white">
        <button className="bg-white flex items-center text-gray-600 text-sm mb-6 hover:underline" onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/connections/database')}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mr-1"><path d="M15 19l-7-7 7-7" /></svg>
          Back to Database Connections
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">New Database Connection</h1>
        <div className="bg-white rounded-xl shadow border border-gray-200 p-8 mb-8">
          {/* 1. Name */}
          <div className="mb-8">
            <div className="font-semibold text-lg text-gray-900 mb-2">1. Enter a name for this database connection</div>
            <label className="block text-sm font-medium text-red-700 mb-1">Name</label>
            <input
              className="w-full border border-red-400 rounded px-4 py-2 text-gray-900 bg-white mb-1 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Connection name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <div className="text-red-600 text-sm mb-1">A connection name is required. Please enter a name for the connection.</div>
            <div className="text-gray-500 text-xs">Must start and end with an alphanumeric character and can only contain alphanumeric characters and '-'. Can't have more than 35 characters.</div>
          </div>
          {/* 2. Identifiers */}
          <div className="mb-8">
            <div className="font-semibold text-lg text-gray-900 mb-2">2. Choose one or more attributes as user identifiers</div>
            <div className="text-gray-600 text-sm mb-4">Toggling on an attribute will make it an identifier for this connection.</div>
            <div className="space-y-3">
              {identifierOptions.map((opt, i) => (
                <div key={opt.label} className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-4 border border-gray-100">
                    <img src={opt.icon} alt={opt.label} className="w-6 h-6 object-contain" />
                  </div>
                  <div className="flex-1 text-gray-900 font-medium">{opt.label}</div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={identifiers[i]} onChange={() => setIdentifiers(ids => ids.map((v, idx) => idx === i ? !v : v))} className="sr-only peer" />
                    <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-all duration-200 relative`}>
                      <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${identifiers[i] ? 'translate-x-5' : ''}`}></span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* 3. Auth Methods */}
          <div className="mb-8">
            <div className="font-semibold text-lg text-gray-900 mb-2">3. Choose one or more authentication methods</div>
            <div className="text-gray-600 text-sm mb-4">Toggling on an authentication method will allow it to be used to challenge users.</div>
            <div className="space-y-3">
              {authMethods.map((opt, i) => (
                <div key={opt.label} className={`flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 ${!opt.enabled ? 'opacity-60' : ''}`}>
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-4 border border-gray-100">
                    <img src={opt.icon} alt={opt.label} className="w-6 h-6 object-contain" />
                  </div>
                  <div className="flex-1 text-gray-900 font-medium">
                    {opt.label}
                    {opt.desc && <div className="text-gray-500 text-xs font-normal mt-1">{opt.desc}</div>}
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={methods[i]} disabled={!opt.enabled} onChange={() => setMethods(m => m.map((v, idx) => idx === i ? !v : v))} className="sr-only peer" />
                    <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-green-200 transition-all duration-200 relative ${opt.enabled && methods[i] ? 'bg-green-200' : ''}`}>
                      <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${methods[i] ? 'translate-x-5' : ''}`}></span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* 4. Disable Sign Ups */}
          <div className="mb-8">
            <div className="font-semibold text-lg text-gray-900 mb-2">Disable Sign Ups</div>
            <div className="text-gray-600 text-sm mb-4">Prevent new user signups to your application from public (unauthenticated) endpoints. You will still be able to create users with your API credentials or from the Management dashboard. Disabling signups will not impact organization signup.</div>
            <div className="flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={disableSignups} onChange={() => setDisableSignups(v => !v)} className="sr-only peer" />
                <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-all duration-200 relative`}>
                  <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${disableSignups ? 'translate-x-5' : ''}`}></span>
                </div>
              </label>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8">
            <button className="px-6 py-2 rounded border border-gray-300 bg-white text-gray-700 font-medium">Cancel</button>
            <button className="px-6 py-2 rounded bg-gray-200 text-gray-400 font-semibold cursor-not-allowed" disabled>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
} 