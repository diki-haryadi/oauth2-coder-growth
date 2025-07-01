import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TABS = [
  'Settings',
  'Attributes',
  'Authentication Methods',
  'Custom Database',
  'Applications',
];

const mockConnection = {
  id: 'con_zuEE2QTvhol7i56L',
  name: 'test',
  type: 'Database',
  identifier: 'con_zuEE2QTvhol7i56L',
  icon: '/icons/database.svg',
};

const mockAttributes = [
  {
    label: 'Username',
    desc: 'Active for Login and Password Reset, Create or Update, Sign Up (Required)',
    icon: '/icons/user.svg',
  },
];

const mockAuthMethods = [
  {
    label: 'Password',
    icon: '/icons/lock.svg',
    enabled: true,
  },
  {
    label: 'Passkey',
    icon: '/icons/key.svg',
    enabled: false,
    badge: 'NEW',
  },
];

const mockApplications = [
  { name: 'API Explorer Application', type: 'Machine to Machine', icon: '/icons/database.svg', enabled: false },
  { name: 'Auth0 Management API (Test Application)', type: 'Machine to Machine', icon: '/icons/database.svg', enabled: false },
  { name: 'Bugsnag', type: 'Generic', icon: '/icons/database.svg', enabled: false },
  { name: 'Default App', type: 'Single Page Applications', icon: '/icons/database.svg', enabled: false },
  { name: 'My App', type: 'Regular Web Applications', icon: '/icons/database.svg', enabled: false },
  { name: 'My App', type: 'Native', icon: '/icons/database.svg', enabled: false },
];

export default function DatabaseConnectionSettings() {
  const navigate = useNavigate();
  const { connectionId } = useParams();
  const [activeTab, setActiveTab] = useState('Settings');
  const [importUsers, setImportUsers] = useState(false);
  const [disableSignups, setDisableSignups] = useState(false);

  return (
    <div className="min-h-screen bg-white w-screen">
      <div className="max-w-5xl pt-14 pb-0 px-8">
        <button className="bg-white flex items-center text-gray-600 text-sm mb-6 hover:underline" onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/connections/database')}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mr-1"><path d="M15 19l-7-7 7-7" /></svg>
          Back to Database Connections
        </button>
        <div className="flex items-center gap-4 mb-2">
          <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center">
            <img src={mockConnection.icon} alt="db" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{mockConnection.name}</div>
            <div className="text-gray-500 text-base flex items-center gap-2">
              Database
              <span className="mx-2">Identifier</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-xs">{mockConnection.identifier}</code>
            </div>
          </div>
          <div className="flex-1" />
          <button className="ml-auto px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 font-medium">Try Connection</button>
        </div>
        <div className="border-b border-gray-200 mt-8 mb-8">
          <div className="flex gap-2">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-5 text-sm font-medium relative rounded-t-lg ${tab === activeTab ? 'text-blue-600 bg-white border-t border-l border-r border-gray-200' : 'text-gray-500 hover:text-blue-600 bg-white'}`}
              >
                {tab}
                {tab === activeTab && (<div className="absolute -bottom-px left-0 right-0 h-0.5 bg-blue-600" />)}
                {tab === 'Authentication Methods' && <span className="ml-2 px-2 py-0.5 rounded bg-blue-100 text-blue-600 text-xs font-semibold">NEW</span>}
              </button>
            ))}
          </div>
        </div>
        {/* Tab Content */}
        {activeTab === 'Settings' && (
          <div>
            <div className="text-gray-600 text-base mb-6">These settings will only affect this particular database connection. If you need to add custom behavior, you can use a rule.</div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-2xl p-8 mb-8">
              <div className="font-semibold text-lg text-gray-900 mb-4">Import Users to Auth0</div>
              <div className="text-gray-500 text-sm mb-4">Gradually migrate your legacy user store to the Auth0 user store. <a href="#" className="text-blue-600 hover:underline">Learn More.</a></div>
              <div className="flex items-center mb-4">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={importUsers} onChange={() => setImportUsers(v => !v)} className="sr-only peer" />
                  <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-all duration-200 relative`}>
                    <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${importUsers ? 'translate-x-5' : ''}`}></span>
                  </div>
                </label>
              </div>
              <div className="bg-blue-50 border border-blue-100 text-blue-800 rounded px-4 py-3 mb-2 text-sm flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
                You need to use your <a href="#" className="text-blue-600 underline ml-1">own database</a> to enable this option.
              </div>
              <div className="bg-blue-50 border border-blue-100 text-blue-800 rounded px-4 py-3 mb-2 text-sm flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
                Use my own database and Import Users to Auth0 must be enabled when passkeys are used as an authentication method for a Custom Database Connection. <a href="#" className="text-blue-600 underline ml-1">Learn more about passkeys.</a>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-2xl p-8 mb-8">
              <div className="font-semibold text-lg text-gray-900 mb-4">Disable Sign Ups</div>
              <div className="text-gray-500 text-sm mb-4">Prevent new user signups to your application from public (unauthenticated) endpoints. You will still be able to create users with your API credentials or from the Management dashboard. Disabling signups will not impact organization signup.</div>
              <div className="flex items-center mb-4">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={disableSignups} onChange={() => setDisableSignups(v => !v)} className="sr-only peer" />
                  <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-all duration-200 relative`}>
                    <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${disableSignups ? 'translate-x-5' : ''}`}></span>
                  </div>
                </label>
              </div>
            </div>
            {/* Danger Zone */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 flex items-center justify-between max-w-2xl mb-8">
              <div>
                <div className="font-semibold text-lg text-red-700 mb-1">Delete this connection</div>
                <div className="text-red-700 text-base">Warning! Once confirmed, this operation can't be undone!</div>
              </div>
              <button className="px-6 py-2 bg-red-600 text-white rounded-md font-semibold text-base hover:bg-red-700">Delete</button>
            </div>
          </div>
        )}
        {activeTab === 'Attributes' && (
          <div className="mt-8">
            <div className="font-semibold text-xl text-gray-900 mb-6">Attributes</div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-2xl p-8">
              {mockAttributes.map(attr => (
                <div key={attr.label} className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4 border border-blue-100">
                    <img src={attr.icon} alt={attr.label} className="w-6 h-6 object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900 font-medium">{attr.label}</div>
                    <div className="text-gray-500 text-sm">{attr.desc}</div>
                  </div>
                  <button className="ml-4 px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 font-medium">Configure</button>
                </div>
              ))}
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded font-semibold">+ Add Attribute</button>
            </div>
          </div>
        )}
        {activeTab === 'Authentication Methods' && (
          <div className="mt-8">
            <div className="font-semibold text-xl text-gray-900 mb-6">Authentication Methods</div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-2xl p-8">
              {mockAuthMethods.map(method => (
                <div key={method.label} className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4 border border-blue-100">
                    <img src={method.icon} alt={method.label} className="w-6 h-6 object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900 font-medium flex items-center gap-2">{method.label} {method.badge && <span className="ml-2 px-2 py-0.5 rounded bg-blue-100 text-blue-600 text-xs font-semibold">{method.badge}</span>}</div>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={method.enabled} disabled className="sr-only peer" />
                    <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-green-200 transition-all duration-200 relative ${method.enabled ? 'bg-green-200' : ''}`}>
                      <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${method.enabled ? 'translate-x-5' : ''}`}></span>
                    </div>
                  </label>
                  <button className="ml-4 px-4 py-2 border border-gray-300 rounded bg-white text-blue-600 font-medium">Configure</button>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'Custom Database' && (
          <div className="mt-8">
            <div className="font-semibold text-xl text-gray-900 mb-6">Custom Database</div>
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded px-4 py-3 mb-8 flex items-center">
              <svg className="w-5 h-5 mr-3 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" /></svg>
              Node 12 and 16 runtimes are deprecated, and their planned end-of-life (EOL) is August 15, 2025. After this date, tenants configured with a deprecated runtime in their advanced settings will run on Node 22, potentially causing failures in extensibility-dependent features such as Custom Databases, Custom Social Connections, and legacy extensibility (Rules and Hooks).
            </div>
            <div className="bg-blue-50 border border-blue-100 text-blue-800 rounded px-4 py-3 mb-2 text-sm flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
              This feature is not included in your current plan. Refer to the subscription page for available plan options to use this feature.
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-2xl p-8 mt-8">
              <div className="font-semibold text-lg text-gray-900 mb-4">Use my own database</div>
              <div className="text-gray-500 text-sm mb-4">By default, Auth0 will provide the infrastructure to store users on our own database. Enable if you have a legacy database or if you want to use your own database (MySql, Mongo, SQL Server, etc.). <a href="#" className="text-blue-600 hover:underline">Learn more.</a></div>
              <div className="flex items-center mb-4">
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={false} disabled className="sr-only peer" />
                  <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer transition-all duration-200 relative`}>
                    <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200`}></span>
                  </div>
                </label>
              </div>
              <div className="bg-blue-50 border border-blue-100 text-blue-800 rounded px-4 py-3 mb-2 text-sm flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
                You won't be able to read/delete the users if disabled. Delete all users before doing so.
              </div>
            </div>
            {/* Database Action Scripts */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-2xl p-8 mt-8">
              <div className="font-semibold text-lg text-gray-900 mb-4">Database Action Scripts</div>
              <div className="border-b border-gray-200 mb-4 flex gap-4">
                {['Login', 'Create', 'Verify', 'Change Password', 'Get User', 'Delete'].map(tab => (
                  <button key={tab} className="py-2 px-3 text-sm font-medium text-gray-600 border-b-2 border-transparent focus:outline-none">{tab}</button>
                ))}
              </div>
              <div className="bg-gray-100 rounded p-4 text-xs font-mono text-gray-700 mb-2" style={{minHeight: 180}}>
                <pre>{`function login(identifierValue, password, callback) {
  // This script should authenticate a user against the credentials stored in your database.
  // It is executed when a user attempts to log in or immediately after signing up (as a verification that the user was successfully signed up).
  //
  // Everything returned by this script will be set as part of the user profile
  // and will be visible by any of the tenant admins. Avoid adding attributes
  // with values such as passwords, keys, secrets, etc.
  //
  // The \u001b[1mpassword\u001b[22m parameter of this function is in plain text. It must be
  // hashed/salted to match whatever is stored in your database. For example:
  // ...
}`}</pre>
              </div>
              <div className="text-gray-500 text-xs mt-2">Heads up! If you are trying to access a service behind a firewall, make sure to open the right ports and allow inbound connections from the IP addresses listed in <a href="#" className="text-blue-600 underline">Auth0 IP Addresses for Allow Lists</a>.</div>
            </div>
            {/* Database settings */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-2xl p-8 mt-8">
              <div className="font-semibold text-lg text-gray-900 mb-4">Database settings</div>
              <div className="flex gap-4 mb-4">
                <input className="flex-1 border border-gray-300 rounded px-4 py-2 text-gray-900 bg-white" placeholder="Key" />
                <input className="flex-1 border border-gray-300 rounded px-4 py-2 text-gray-900 bg-white" placeholder="Value (will be encrypted)" />
                <button className="px-4 py-2 bg-blue-600 text-white rounded font-semibold">+ Add</button>
              </div>
              <div className="border-t border-gray-200 pt-4 text-gray-500 text-sm">No variables have been set yet</div>
            </div>
          </div>
        )}
        {activeTab === 'Applications' && (
          <div className="mt-8">
            <div className="font-semibold text-xl text-gray-900 mb-6">Applications using this connection.</div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-2xl p-8">
              {mockApplications.map(app => (
                <div key={app.name + app.type} className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img src={app.icon} alt={app.name} className="w-8 h-8 object-contain" />
                    <div>
                      <div className="font-medium text-gray-900">{app.name}</div>
                      <div className="text-gray-500 text-sm">{app.type}</div>
                    </div>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={app.enabled} disabled className="sr-only peer" />
                    <div className={`w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer transition-all duration-200 relative`}>
                      <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200`}></span>
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 