import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const socialConnections = [
  {
    id: 'github',
    name: 'github',
    type: 'GitHub',
    icon: 'https://cdn.auth0.com/marketplace/catalog/content/assets/creators/github/github-avatar.png',
  },
  {
    id: 'google-oauth2',
    name: 'google-oauth2',
    type: 'Google / Gmail',
    icon: 'https://cdn.auth0.com/marketplace/catalog/content/assets/creators/google/google-avatar.png',
  },
];

const menuOptions = [
  { label: 'Settings' },
  { label: 'Applications' },
  { label: 'Try Connection' },
  { label: 'Delete', danger: true },
];

export default function SocialConnections() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white w-screen">
      <div className="max-w-5xl mx-auto pt-14 pb-0 px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Social Connections</h1>
            <div className="text-gray-600 text-base max-w-2xl leading-relaxed">
              Configure social connections like Facebook, Twitter, Github and others so that you can let your users login with them. <a href="#" className="text-blue-600 hover:underline ml-1">Show more</a>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold text-base shadow-none hover:bg-blue-700" style={{minWidth: 180}} onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/connections/social/create')}>
            + Create Connection
          </button>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-3xl">
          {socialConnections.map((conn, idx) => (
            <div key={conn.id} className="flex items-center justify-between px-6 py-5 border-b border-gray-100 last:border-b-0 relative group">
              <div className="flex items-center gap-4">
                <img src={conn.icon} alt={conn.name} className="w-10 h-10 object-contain rounded bg-white border border-gray-200" />
                <div>
                  <div className="text-blue-700 font-medium text-lg leading-tight hover:underline cursor-pointer" onClick={() => navigate(`/dashboard/au/dev-1md8m8doz8ynfucb/connections/social/create/${conn.id}/permissions`)}>{conn.name}</div>
                  <div className="text-gray-500 text-base mt-0.5">{conn.type}</div>
                </div>
              </div>
              <button
                className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-100"
                onClick={() => setOpenMenu(openMenu === conn.id ? null : conn.id)}
                aria-label="Open menu"
                tabIndex={0}
              >
                <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="6" cy="12" r="1.5"/>
                  <circle cx="12" cy="12" r="1.5"/>
                  <circle cx="18" cy="12" r="1.5"/>
                </svg>
              </button>
              {openMenu === conn.id && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 py-2 animate-fade-in">
                  {menuOptions.map(opt => (
                    <div
                      key={opt.label}
                      className={`px-4 py-2 text-gray-800 text-base rounded cursor-pointer select-none flex items-center ${opt.danger ? 'text-red-600 hover:bg-red-50' : 'hover:bg-gray-50'}`}
                      style={{fontWeight: 400, fontSize: 15, lineHeight: '22px'}}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 