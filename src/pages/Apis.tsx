import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import { useNavigate } from 'react-router-dom';

const apiList = [
  {
    name: 'Auth0 Management API',
    subtitle: 'System API',
    audience: 'https://dev-1md8m8doz8ynfucb.au.auth0.com/api/v2/',
    icon: (
      <span className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded mr-4">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
      </span>
    )
  }
];

const Apis = () => {
  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCopy = (audience: string, idx: number) => {
    navigator.clipboard.writeText(audience);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 min-w-0 relative">
        <main className="w-full h-[calc(100vh-64px)] overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-10">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-semibold text-gray-900 mb-1">APIs</h1>
                <p className="text-gray-600 text-base">Define APIs that you can consume from your authorized applications.</p>
              </div>
              <button className="flex items-center px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-base font-medium shadow-sm">
                + Create API
              </button>
            </div>

            <div className="mt-6">
              {apiList.map((api, idx) => (
                <div key={api.name} className="flex items-center py-4 border-b border-gray-200 group relative">
                  {api.icon}
                  <div className="flex-1 min-w-0">
                    <a
                      className="text-blue-700 font-medium hover:underline text-base cursor-pointer"
                      onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/apis/679657da55b41ef859333806/settings')}
                    >
                      {api.name}
                    </a>
                    <div className="text-gray-500 text-sm">{api.subtitle}</div>
                  </div>
                  <div className="flex items-center ml-4">
                    <span className="text-gray-500 text-sm mr-2">API Audience:</span>
                    <span className="bg-gray-100 border border-gray-200 rounded px-2 py-1 text-xs font-mono text-gray-600 select-all mr-2">
                      {api.audience.length > 40 ? api.audience.slice(0, 40) + '…' : api.audience}
                    </span>
                    <button onClick={() => handleCopy(api.audience, idx)} className="bg-white border border-gray-200 text-gray-500 hover:text-blue-600 p-2 rounded" title="Copy audience">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" /></svg>
                    </button>
                    {copiedIdx === idx && <span className="ml-2 text-xs text-green-600">Copied!</span>}
                  </div>
                  <div className="ml-4 relative">
                    <button onClick={() => setMenuOpen(menuOpen === idx ? null : idx)} className="p-2 bg-white border border-gray-200 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                    </button>
                    {menuOpen === idx && (
                      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow border border-gray-200 z-10">
                        <button className="w-full text-left px-4 py-2 text-sm bg-white text-gray-900 border-0 hover:bg-gray-50" onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/apis/679657da55b41ef859333806/settings')}>Settings</button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Apis; 