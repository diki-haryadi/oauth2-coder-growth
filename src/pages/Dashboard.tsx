import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">Getting Started</h1>
          
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center text-blue-600 mb-4">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>New to Auth0? Try the 4 step guide to get started. <a href="#" className="underline">Start the guide.</a></p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">Start Building</h2>
          
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Integrate Auth0 into your application</h3>
                  <p className="text-gray-600 mb-4">Integrate Auth0 into your application or use one of our samples to get started in minutes.</p>
                  <div className="space-x-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                      Create Application
                    </button>
                    <button className="text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 max-w-md">
                  <img src="/icons/react.svg" alt="React" className="w-8 h-8" />
                  <img src="/icons/android.svg" alt="Android" className="w-8 h-8" />
                  <img src="/icons/ios.svg" alt="iOS" className="w-8 h-8" />
                  <img src="/icons/javascript.svg" alt="JavaScript" className="w-8 h-8" />
                  <img src="/icons/php.svg" alt="PHP" className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">Explore Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 ml-3">Login Box</h3>
              </div>
              <p className="text-gray-600 mb-4">Customize your login box to match your brand identity and try it out to see how it works.</p>
              <div className="space-x-3">
                <button className="text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  Customize
                </button>
                <button className="text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">
                  Try It Out
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 ml-3">Social Login</h3>
              </div>
              <p className="text-gray-600 mb-4">Give your users the ability to login to your app with the identity provider of their choice in one click.</p>
              <div className="space-x-3">
                <button className="text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  Customize
                </button>
                <button className="text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 ml-3">Multi-factor Authentication</h3>
              </div>
              <p className="text-gray-600 mb-4">Protect your users by enabling an additional factor to the login process.</p>
              <div className="space-x-3">
                <button className="text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  Customize
                </button>
                <button className="text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-gray-200 p-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm text-gray-600">Auth for GenAI is now available in Developer Preview:</span>
                <a href="#" className="text-sm text-blue-600">Start securing your Gen AI apps here.</a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Learn more about our new product in our</span>
                <a href="#" className="text-sm text-blue-600">announcement blog post.</a>
                <button className="text-gray-400 hover:text-gray-500">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 