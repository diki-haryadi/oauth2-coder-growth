import React from 'react';
import { useNavigate } from 'react-router-dom';

const TRIGGERS = [
  {
    section: 'Sign Up & Login',
    desc: `When a user is added to a database, passwordless connection, or as part of a user's authentication transaction.`,
    items: [
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><path d="M12 8v4m0 4h.01" stroke="#111827" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="4" stroke="#111827" strokeWidth="2"/></svg>
        ),
        code: 'pre-user-registration',
        desc: 'Triggers before a user is created',
      },
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><path d="M12 8v4m0 4h.01" stroke="#111827" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="4" stroke="#111827" strokeWidth="2"/></svg>
        ),
        code: 'post-user-registration',
        desc: 'Triggers asynchronously after a user is created',
      },
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><path d="M8 12h8" stroke="#111827" strokeWidth="2"/><path d="M12 8v8" stroke="#111827" strokeWidth="2"/></svg>
        ),
        code: 'post-login',
        desc: 'Triggers after a user is authenticated but before token is issued.',
      },
    ],
  },
  {
    section: 'MFA Notifications',
    desc: 'When using SMS as a factor for Multi-factor Authentication (MFA) or to configure a custom provider.',
    items: [
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><path d="M8 12h8" stroke="#111827" strokeWidth="2"/><path d="M12 8v8" stroke="#111827" strokeWidth="2"/></svg>
        ),
        code: 'send-phone-message',
        desc: 'Triggers when using a custom provider to send the messages for the enrollment and the challenge process',
      },
    ],
  },
  {
    section: 'Password Reset',
    desc: 'When a password reset request is initiated.',
    items: [
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><circle cx="12" cy="12" r="4" stroke="#111827" strokeWidth="2"/></svg>
        ),
        code: 'password-reset-post-challenge',
        desc: 'Triggers after the first challenge',
      },
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/></svg>
        ),
        code: 'post-change-password',
        desc: 'Triggers after a password is changed',
      },
    ],
  },
  {
    section: 'Machine to Machine',
    desc: 'When an application, instead of a user, is authenticated and authorized to use your APIs.',
    items: [
      {
        icon: (
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/></svg>
        ),
        code: 'credentials-exchange',
        desc: 'Triggers before an access token is returned',
      },
    ],
  },
];

export default function Triggers() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 rounded-lg px-4 py-3 mb-6 flex items-start gap-3">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="mt-1"><rect x="4" y="4" width="16" height="16" rx="3" fill="#FEF3C7" stroke="#F59E42"/><path d="M8 12h8" stroke="#F59E42" strokeWidth="2" strokeLinecap="round"/></svg>
          <div>Your Free plan includes 5 total active Actions and Forms across your tenants. For more customization, purchase the Advanced Extensibility SKU. Learn more about <a href="#" className="text-blue-700 underline">Advanced Extensibility benefits</a> *<a href="#" className="text-blue-700 underline">Within platform performance limits</a></div>
        </div>
        <h1 className="text-4xl font-bold mb-2">Triggers</h1>
        <div className="text-gray-600 mb-6 text-lg">Trigger is a specific event in the authentication or authorization transaction that can be used to initiate a set of Actions. An <a href="#" className="text-blue-700 underline">Action</a> can be added either from the <a href="#" className="text-blue-700 underline">Marketplace</a> or be built with custom code. <a href="#" className="text-blue-700 underline">Read more</a></div>
        {TRIGGERS.map(section => (
          <div key={section.section} className="mb-8">
            <div className="font-semibold text-xl mb-2">{section.section}</div>
            <div className="text-gray-500 mb-4">{section.desc}</div>
            <div className="flex flex-col md:flex-row gap-4">
              {section.items.map(item => (
                <div
                  key={item.code}
                  className="flex-1 bg-white border border-gray-200 rounded-xl px-6 py-5 flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-50 transition"
                  onClick={() => {
                    if (item.code === 'pre-user-registration') {
                      navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/triggers/pre-user-registration');
                    } else if (item.code === 'post-user-registration') {
                      navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/triggers/post-user-registration');
                    } else if (item.code === 'post-login') {
                      navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/triggers/post-login');
                    } else if (item.code === 'send-phone-message') {
                      navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/triggers/send-phone-message');
                    } else if (item.code === 'password-reset-post-challenge') {
                      navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/triggers/password-reset-post-challenge');
                    } else if (item.code === 'post-change-password') {
                      navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/triggers/post-change-password');
                    } else if (item.code === 'credentials-exchange') {
                      navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/triggers/credentials-exchange');
                    }
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span>{item.icon}</span>
                    <div>
                      <div className="inline-block bg-gray-100 text-gray-800 font-mono px-2 py-1 rounded text-base mb-1">{item.code}</div>
                      <div className="text-gray-500 text-sm">{item.desc}</div>
                    </div>
                  </div>
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-gray-400"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 