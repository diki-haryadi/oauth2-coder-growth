import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import { useNavigate } from 'react-router-dom';

const SSOIntegrations = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      <div className="flex-1 min-w-0 relative">
        <main className="w-full h-[calc(100vh-64px)] overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full px-2 pt-12">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-semibold text-gray-900 mb-2">Single Sign On Integrations</h1>
                <p className="text-gray-600 text-lg mt-2">Single sign on for purchased applications and SaaS services such as Office 365, Salesforce, and others. <span className="text-blue-600 cursor-pointer">Show more</span></p>
              </div>
              <button onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/externalapps/create')} className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold text-base hover:bg-blue-700">+ Create SSO Integration</button>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm max-w-4xl w-full flex flex-col items-center py-16 px-4">
                <div className="mb-8">
                  {/* Placeholder illustration */}
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="30" width="80" height="60" rx="8" fill="#F3F4F6"/>
                    <rect x="35" y="45" width="50" height="30" rx="4" fill="#A5B4FC"/>
                    <rect x="60" y="60" width="20" height="10" rx="2" fill="#6366F1"/>
                    <circle cx="60" cy="80" r="8" fill="#F472B6"/>
                    <rect x="50" y="90" width="20" height="6" rx="3" fill="#FBBF24"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Single sign on for purchased applications and SaaS services such as Office 365, Salesforce, and others.</h2>
                <p className="text-gray-600 text-base mb-8 text-center">SSO enables users to authenticate at Auth0 with one set of credentials to access any number of service provider applications.</p>
                <button onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/externalapps/create')} className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold text-base hover:bg-blue-700">+ Create SSO Integration</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SSOIntegrations; 