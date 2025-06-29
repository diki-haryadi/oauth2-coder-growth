import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';

const featureCards = [
  {
    icon: (
      <div className="bg-blue-100 p-2 rounded-lg">
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
      </div>
    ),
    title: 'Login Box',
    desc: 'Customize your login box to match your brand identity and try it out to see how it works.',
    primary: 'Customize',
    secondary: 'Try It Out',
    secondaryType: 'link',
  },
  {
    icon: (
      <div className="bg-blue-100 p-2 rounded-lg">
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      </div>
    ),
    title: 'Social Login',
    desc: 'Give your users the ability to login to your app with the identity provider of their choice in one click.',
    primary: 'Customize',
    secondary: 'Learn More',
    secondaryType: 'link',
  },
  {
    icon: (
      <div className="bg-blue-100 p-2 rounded-lg">
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      </div>
    ),
    title: 'Multi-factor Authentication',
    desc: 'Protect your users by enabling an additional factor to the login process.',
    primary: 'Customize',
    secondary: 'Learn More',
    secondaryType: 'link',
  },
];

const devTools = [
  { icon: '/icons/community.svg', title: 'Auth0 Community', desc: 'Forum for expert help and support' },
  { icon: '/icons/jwt.svg', title: 'JWT.io', desc: 'Decode, verify, & debug JWTs' },
  { icon: '/icons/api.svg', title: 'Auth0 API Reference', desc: 'Test drive our API endpoints' },
  { icon: '/icons/templates.svg', title: 'Auth0 Templates', desc: 'Pre-built authentication workflows' },
  { icon: '/icons/flows.svg', title: 'Auth0 Flows', desc: 'Interactive feature showcase' },
  { icon: '/icons/saml.svg', title: 'SAML Tool', desc: 'Inspect & verify SAML messages' },
  { icon: '/icons/webauthn.svg', title: 'Webauthn.me', desc: 'Tutorial & config debugger' },
  { icon: '/icons/cli.svg', title: 'Deploy CLI Tool', desc: 'Manage your Auth0 tenant configuration from the terminal' },
];

export default function Dashboard() {
  const [showGenAI, setShowGenAI] = useState(true);
  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      <main className=" min-w-0 relative">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">Getting Started</h1>
          {/* Info Bar */}
          <div className="bg-white border border-gray-200 rounded-lg px-5 py-3 flex items-center mb-8">
            <svg className="w-5 h-5 text-blue-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-gray-700 text-base">New to Auth0? Try the 4 step guide to get started. <a href="#" className="text-blue-600 underline">Start the guide.</a></span>
          </div>

          {/* Start Building */}
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Start Building</h2>
          <div className="bg-white rounded-lg border border-gray-200 shadow flex flex-col md:flex-row items-stretch md:items-center justify-between mb-10 overflow-hidden">
            <div className="p-8 flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrate Auth0 into your application</h3>
              <p className="text-gray-600 mb-5">Integrate Auth0 into your application or use one of our samples to get started in minutes.</p>
              <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Create Application</button>
                <button className="text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">Learn More</button>
              </div>
            </div>
            <div className="md:w-[380px] flex items-center justify-center bg-gray-50 border-l border-gray-100 h-full p-8">
              <img src="https://cdn.auth0.com/manhattan/versions/1.6226.0/assets/welcome/new-promo-apps.svg" alt="Integrate Auth0" className="w-full max-w-xs" />
            </div>
          </div>

          {/* Explore Features */}
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Explore Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featureCards.map((card, i) => (
              <div key={card.title} className="bg-white rounded-lg border border-gray-200 shadow p-6 flex flex-col">
                <div className="flex items-center mb-4">{card.icon}<h3 className="text-lg font-medium text-gray-900 ml-3">{card.title}</h3></div>
                <p className="text-gray-600 mb-4 flex-1">{card.desc}</p>
                <div className="flex gap-2 mt-auto">
                  <button className="text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">{card.primary}</button>
                  {card.secondaryType === 'link' ? (
                    <button className="text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">{card.secondary}</button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {/* Invite Members Info Bar */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg px-5 py-3 flex items-center mb-10">
            <svg className="w-5 h-5 text-blue-400 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="text-base text-blue-900 font-medium">Invite Members</span>
            <span className="text-base text-blue-900 ml-1">- Add additional admins to help with your integration and act as a backup on your account in case you lose access.</span>
            <a href="#" className="text-blue-700 underline ml-2">Invite</a>
          </div>

          {/* Developer Tools */}
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Developer Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {devTools.map((tool) => (
              <div key={tool.title} className="bg-white rounded-lg border border-gray-200 shadow flex items-center p-6">
                <img src={tool.icon} alt={tool.title} className="w-10 h-10 mr-4" />
                <div>
                  <div className="font-medium text-gray-900">{tool.title}</div>
                  <div className="text-gray-600 text-sm">{tool.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Sticky GenAI Info Bar */}
        {showGenAI && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 shadow">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <span className="text-sm text-gray-600">Auth for GenAI is now available in Developer Preview:</span>
                <a href="#" className="text-sm text-blue-600">Start securing your Gen AI apps here.</a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Learn more about our new product in our</span>
                <a href="#" className="text-sm text-blue-600">announcement blog post.</a>
                <button className="text-gray-400 hover:text-gray-500" onClick={() => setShowGenAI(false)}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 