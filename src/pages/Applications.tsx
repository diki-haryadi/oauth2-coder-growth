import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import CreateApplicationModal from '../components/CreateApplicationModal';

interface ApplicationItem {
  name: string;
  type: string;
  clientId: string;
}

const Applications = () => {
  const [showMenu, setShowMenu] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [applications, setApplications] = useState<ApplicationItem[]>([
    {
      name: 'Default App',
      type: 'Single Page Applications',
      clientId: 'YBE7y8V75eJEXkZZJ7kj52Hr8kHRq2XU'
    }
  ]);

  const menuItems = [
    { label: 'Quickstart', badge: 'Quickstart' },
    { label: 'Settings' },
    { label: 'Credentials' },
    { label: 'APIs' },
    { label: 'Addons' },
    { label: 'Connections' },
    { label: 'Login Experience' },
    { label: 'Run Readiness checks' }
  ];

  const handleCreateApplication = (name: string, type: string) => {
    const clientId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    const newApp: ApplicationItem = {
      name,
      type: type === 'spa' ? 'Single Page Applications' : 
            type === 'regular' ? 'Regular Web Applications' :
            type === 'm2m' ? 'Machine to Machine Applications' : 'Native Applications',
      clientId
    };
    setApplications([...applications, newApp]);
    setIsCreateModalOpen(false);
    return { clientId };
  };

  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      
      <div className="flex-1 min-w-0 relative">
        <main className="w-full h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-8 py-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-gray-900">Applications</h1>
              <button 
                onClick={() => setIsCreateModalOpen(true)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Create Application
              </button>
            </div>

            <p className="text-gray-600 mb-2">
              Setup a mobile, web or IoT application to use Auth0 for Authentication.
              <button className="text-blue-600 hover:text-blue-700 ml-1">
                Show more
                <svg className="w-4 h-4 inline-block ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </p>

            <div className="mt-6">
              {applications.map((app) => (
                <div key={app.clientId} className="bg-white rounded-lg border border-gray-200 mb-4">
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-blue-600 hover:text-blue-700 font-medium">{app.name}</h3>
                        <p className="text-sm text-gray-500">{app.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Client ID:</span>
                        <code className="text-sm bg-gray-50 px-2 py-1 rounded">{app.clientId}</code>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                      <div className="relative">
                        <button 
                          onClick={() => setShowMenu(showMenu === app.clientId ? null : app.clientId)}
                          className="p-2 hover:bg-gray-100 rounded-md"
                        >
                          <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                          </svg>
                        </button>
                        {showMenu === app.clientId && (
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                            <div className="py-1">
                              {menuItems.map((item) => (
                                <button
                                  key={item.label}
                                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between"
                                >
                                  {item.label}
                                  {item.badge && (
                                    <span className="bg-gray-800 text-white text-xs px-2 py-0.5 rounded">
                                      {item.badge}
                                    </span>
                                  )}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <CreateApplicationModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateApplication}
      />
    </div>
  );
};

export default Applications; 