import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import { Input } from '../atoms/Input';
import FeatureCard from '../molecules/FeatureCard';
import { useNavigate } from 'react-router-dom';
import integrationsData from './create.json';

// Always treat integrationsData as an array of integrations
const integrationsArray = Array.isArray(integrationsData.integrations)
  ? integrationsData.integrations
  : Array.isArray(integrationsData)
    ? integrationsData
    : [];

const ssoIntegrations = integrationsArray.map((integration) => ({
  name: integration.name || '',
  description: integration.short_description || '',
  icon: integration.logo ? (
    <img src={integration.logo} alt={integration.name} className="w-10 h-10 object-contain" />
  ) : null,
  url_slug: integration.url_slug || '',
}));

const SSOCreateIntegration = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredIntegrations = ssoIntegrations.filter((integration) =>
    (integration.name ? integration.name.toLowerCase() : '').includes(search.toLowerCase()) ||
    (integration.description ? integration.description.toLowerCase() : '').includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      <div className="flex-1 min-w-0 relative">
        <main className="w-full h-[calc(100vh-64px)] overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full px-2 pt-12">
            <div className="flex items-center mb-8">
              <button onClick={() => navigate(-1)} className="mr-4 text-gray-500 hover:text-gray-700 bg-white border border-gray-200 rounded p-2s">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
              </button>
              <h1 className="text-3xl font-semibold text-gray-900">New Single Sign On Integration</h1>
            </div>
            <div className="mb-8">
              <Input
                placeholder="Search for SSO Integrations"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full max-w-2xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIntegrations.map((integration, idx) => (
                <div key={integration.url_slug || integration.name || idx} onClick={() => navigate(`/dashboard/au/dev-1md8m8doz8ynfucb/externalapps/create/${integration.url_slug}`)} className="cursor-pointer">
                  <FeatureCard
                    title={integration.name}
                    description={integration.description}
                    icon={integration.icon}
                    gradient="bg-white border border-gray-200 shadow-sm"
                    className="hover:shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SSOCreateIntegration; 