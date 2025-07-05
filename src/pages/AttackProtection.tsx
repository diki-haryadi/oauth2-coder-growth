import React from 'react';
import { useNavigate } from 'react-router-dom';

const protections = [
  {
    key: 'bot-detection',
    icon: (
      <span className="bg-gray-100 rounded-lg p-2 mr-3">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/><circle cx="10.5" cy="12" r="1" fill="#111827"/><circle cx="13.5" cy="12" r="1" fill="#111827"/></svg>
      </span>
    ),
    title: 'Bot Detection',
    desc: `Use Auth0's risk engine to detect bots and scripted attacks and enable a CAPTCHA to block them.`,
    status: 'Disabled',
    statusColor: 'bg-gray-400',
    to: 'bot-detection',
  },
  {
    key: 'suspicious-ip-throttling',
    icon: (
      <span className="bg-gray-100 rounded-lg p-2 mr-3">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 20l16-16M4 4h16v16" stroke="#111827" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </span>
    ),
    title: 'Suspicious IP Throttling',
    desc: `Protect your tenant against suspicious logins targeting too many accounts from a single IP address.`,
    status: 'Enabled',
    statusColor: 'bg-green-500',
    to: 'suspicious-ip-throttling',
  },
  {
    key: 'brute-force-protection',
    icon: (
      <span className="bg-gray-100 rounded-lg p-2 mr-3">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="6" y="10" width="12" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/><path d="M12 14v-2a2 2 0 114 0v2" stroke="#111827" strokeWidth="1.5"/></svg>
      </span>
    ),
    title: 'Brute-force Protection',
    desc: `Safeguard against brute-force attacks that target a single user account.`,
    status: 'Enabled',
    statusColor: 'bg-green-500',
    to: 'brute-force-protection',
  },
  {
    key: 'breached-password-detection',
    icon: (
      <span className="bg-gray-100 rounded-lg p-2 mr-3">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 0v8" stroke="#111827" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#111827"/></svg>
      </span>
    ),
    title: 'Breached Password Detection',
    desc: `Auth0 can detect if a specific user's credentials were included in a major public security breach.`,
    status: 'Disabled',
    statusColor: 'bg-gray-400',
    to: 'breached-password-detection',
  },
];

export default function AttackProtection() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-2">Attack Protection</h1>
        <div className="text-gray-600 mb-8 text-lg">Auth0 uses a variety of threat intelligence signals to protect your users from automated attacks.</div>
        <div className="flex flex-col gap-6">
          {protections.map((item) => (
            <button
              key={item.key}
              onClick={() => navigate(`/dashboard/au/dev-1md8m8doz8ynfucb/security/attack-protection/${item.to}`)}
              className="flex items-center justify-between w-full bg-white border border-gray-200 rounded-xl px-6 py-5 shadow-sm hover:shadow-md transition group text-left"
            >
              <div className="flex items-center">
                {item.icon}
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-0.5">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center text-sm font-medium ${item.statusColor} rounded-full px-2.5 py-0.5`}> 
                  <span className={`w-2 h-2 rounded-full mr-2 ${item.statusColor} inline-block`}></span>
                  {item.status}
                </span>
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-gray-400 group-hover:text-blue-600"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 