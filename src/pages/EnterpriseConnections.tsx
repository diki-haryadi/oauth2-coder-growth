import React from 'react';
import { useNavigate } from 'react-router-dom';

const samlOpenIdIcon = (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sc-jLqSar"><path d="M10 9H7v2h3V9zM17 15v-2H7v2h10zM17 19v-2H7v2h10z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M6 1a3 3 0 00-3 3v16a3 3 0 003 3h12a3 3 0 003-3V9a1 1 0 00-.293-.707l-7-7A1 1 0 0013 1H6zM5 4a1 1 0 011-1h6v6a1 1 0 001 1h6v10a1 1 0 01-1 1H6a1 1 0 01-1-1V4zm12.586 4L14 4.414V8h3.586z" fill="currentColor"></path></svg>
);

const connections = [
  { section: 'Custom Connections', items: [
    { label: 'SAML', icon: samlOpenIdIcon, path: '#' },
    { label: 'OpenID Connect', icon: samlOpenIdIcon, path: '#' },
  ]},
  { section: 'Identity Provider-Specific Connections', items: [
    { label: 'Okta Workforce', icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>, desc: 'Does not add any cost to your monthly or annual subscription', path: '#' },
    { label: 'Google Workspace', icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>, path: '#' },
    { label: 'Microsoft Azure AD', icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>, path: '#' },
    { label: 'ADFS', icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>, path: '#' },
    { label: 'Active Directory / LDAP', icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>, path: '#' },
    { label: 'Federate', icon: <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>, path: '#' },
  ]},
];

export default function EnterpriseConnections() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-white w-screen">
      {/* Sidebar dummy */}
      <div className="flex-1 p-4 sm:p-8 md:p-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Enterprise Connections</h1>
          <p className="text-gray-700 mb-6 max-w-2xl">Configure Enterprise Connections like to authenticate users in an external, federated identity provider (IdP) such as Okta Workforce, Microsoft Azure AD, and more. Alternatively, configure a custom SAML or OpenID Connect connection for even more versatility. <a href="#" className="text-blue-600 underline">Show more</a></p>
          <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 px-4 py-3 rounded mb-8 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01"/><circle cx="12" cy="12" r="10"/></svg>
            This feature is not included in your current plan. <a href="#" className="underline ml-1">Upgrade your Subscription</a> to use Enterprise connections in production.
          </div>
          {connections.map(section => (
            <div key={section.section} className="mb-8">
              <div className="font-bold text-lg mb-4">{section.section}</div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                {section.items.map((item, idx) => (
                  <div key={item.label} className="flex items-center justify-between px-6 py-5 border-b border-gray-100 last:border-b-0 relative group">
                    <div className="flex items-center gap-4">
                      {item.icon}
                      <div>
                        <div className="text-blue-700 font-medium text-lg leading-tight hover:underline cursor-pointer">{item.label}</div>
                        {item.desc && <div className="text-gray-500 text-base mt-0.5">{item.desc}</div>}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="border border-gray-300 rounded px-5 py-2 text-base font-medium bg-white hover:bg-gray-50" onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/connections/enterprise/saml/create')}>Create</button>
                      <a href="/dashboard/au/dev-1md8m8doz8ynfucb/connections/enterprise/saml" className="flex items-center text-blue-700 font-medium px-2 py-2 hover:underline">
                        Browse
                        <svg className="ml-1" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 