import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dbConnections = [
  {
    id: 'con_vZqrH5dwkHF0V3EC',
    name: 'Username-Password-Authentication',
    type: 'Database',
    icon: '/icons/database.svg',
  },
];

const menuItems = [
  'Settings',
  'Attributes',
  'Authentication Methods',
  'Custom Database',
  'Applications',
  'Try',
];

export default function DatabaseConnections() {
  const [menuOpenIdx, setMenuOpenIdx] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white w-screen">
      <div className="max-w-7xl pt-14 pb-0 px-8">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Database Connections</h1>
            <div className="text-gray-600 text-base max-w-2xl leading-relaxed">
              Securely store and manage your customer's authorization credentials in an Auth0 Database or in your own store. We provide passkey authorization, or more traditional methods such as username / password.
              <a href="#" className="text-blue-600 hover:underline ml-1">Show more</a>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold text-base shadow-none hover:bg-blue-700" style={{minWidth: 180}} onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/connections/database/new')}>
            + Create DB Connection
          </button>
        </div>
        <div className="mt-2">
          {dbConnections.map((conn, idx) => (
            <div key={conn.id} className="flex items-center justify-between border-b border-gray-200 relative" style={{minHeight: 80}}>
              <div className="flex items-center gap-5 py-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mr-2">
                  <img src={conn.icon} alt="db" className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <div className="text-blue-700 font-medium text-lg leading-tight">{conn.name}</div>
                  <div className="text-gray-500 text-base mt-0.5">{conn.type}</div>
                </div>
              </div>
              <div className="relative flex items-center h-full">
                <button
                  className="w-12 h-12 flex items-center justify-center border-2 border-blue-400 bg-white rounded-lg focus:outline-none"
                  onClick={() => setMenuOpenIdx(menuOpenIdx === idx ? null : idx)}
                  aria-label="Open menu"
                  tabIndex={0}
                  style={{boxShadow: 'none'}}
                >
                  <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="6" cy="12" r="1.5"/>
                    <circle cx="12" cy="12" r="1.5"/>
                    <circle cx="18" cy="12" r="1.5"/>
                  </svg>
                </button>
                {menuOpenIdx === idx && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg border border-gray-200 z-50 py-1" style={{boxShadow: 'none', minWidth: 180}}>
                    {menuItems.map(item => (
                      <div
                        key={item}
                        className="px-4 py-2 text-gray-800 text-base rounded cursor-pointer select-none"
                        style={{fontWeight: 400, fontSize: 15, lineHeight: '22px'}}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 