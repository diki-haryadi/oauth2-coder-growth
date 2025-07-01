import React, { useState } from 'react';
import integrationsData from './ListIntegrations.json';
import { useNavigate, useParams } from 'react-router-dom';

// Mock: these are the catalog_ids of already added connections
const alreadyAdded = ['google-oauth2', 'github'];

export default function SocialConnectionsCreate({ step }: { step?: 'permissions' | 'setup' }) {
  const navigate = useNavigate();
  const { social } = useParams();
  const [search, setSearch] = useState('');
  const socialIntegrations = integrationsData.integrations.filter(
    (item) => item.feature_type === 'FEATURE_TYPE_SOCIAL_CONNECTION'
  );
  const filtered = socialIntegrations.filter((item) => {
    const name = item.name || item.partner?.display_name || '';
    return name.toLowerCase().includes(search.toLowerCase());
  });

  if (step === 'permissions') {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8">
          {/* Logo & Title */}
          <div className="flex items-center mb-8">
            <img src="/public/icons/linkedin.svg" alt="LinkedIn" className="h-10 w-10 mr-4" />
            <h2 className="text-2xl font-semibold text-gray-900">New LinkedIn Social Connection</h2>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">LinkedIn Social Connection by Auth0</h3>
            <p className="text-gray-700 mb-4">LinkedIn will need access to:</p>
            <ul className="mb-6 border rounded divide-y">
              <li className="p-3">Redirect users to login at LinkedIn</li>
              <li className="p-3">Receive and store user identities from LinkedIn</li>
              <li className="p-3">Update user root profiles with data from LinkedIn</li>
            </ul>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded" onClick={() => navigate(`/dashboard/au/dev-1md8m8doz8ynfucb/connections/social/create/${social}/setup`)}>Continue</button>
              <button className="border px-6 py-2 rounded" onClick={() => navigate(-1)}>Cancel</button>
            </div>
            <p className="text-xs text-gray-500 mt-6">By continuing, you grant the integration access to the permissions listed above and consent to the integration's <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>.</p>
          </div>
        </div>
      </div>
    );
  }

  // Step: setup (form)
  return (
    <div className="min-h-screen bg-white w-screen">
      <div className="max-w-6xl mx-auto pt-14 pb-0 px-8">
        <button className="bg-white flex items-center text-gray-600 text-sm mb-6 hover:underline" onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/connections/social')}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mr-1"><path d="M15 19l-7-7 7-7" /></svg>
          Social Connections
        </button>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">New Social Connection</h1>
        <input
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 bg-white mb-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search for Social Connections"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((item) => {
            const name = item.name || item.partner?.display_name || '';
            const desc = item.short_description || item.description || '';
            const logo = item.logo || item.partner?.logo;
            const added = alreadyAdded.includes(item.catalog_id);
            return (
              <div key={item.catalog_id} className={`rounded-xl border border-gray-200 bg-white p-6 flex flex-col gap-2 relative ${added ? 'opacity-60' : 'hover:shadow-lg transition-shadow duration-200 cursor-pointer'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <img src={logo} alt={name} className="w-10 h-10 object-contain rounded" />
                  <div>
                    <div className="text-lg font-semibold text-gray-900 leading-tight">{name}</div>
                    <div className="text-xs text-gray-500 font-medium tracking-widest">SOCIAL CONNECTIONS</div>
                  </div>
                  {added && <span className="ml-auto px-3 py-1 rounded bg-gray-100 text-gray-400 text-xs font-semibold">ADDED</span>}
                </div>
                <div className="text-gray-500 text-sm line-clamp-2">{desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 