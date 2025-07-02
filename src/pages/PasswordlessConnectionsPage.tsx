import React, { useState } from 'react';

const smsIcon = (
  <span className="bg-gray-100 rounded-lg p-2 flex items-center justify-center mr-4">
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a4 4 0 018 0v2"/></svg>
  </span>
);
const emailIcon = (
  <span className="bg-gray-100 rounded-lg p-2 flex items-center justify-center mr-4">
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
  </span>
);

export default function PasswordlessConnectionsPage() {
  const [modal, setModal] = useState<null | 'sms' | 'email'>(null);
  return (
    <div className="min-h-screen bg-white w-screen py-10 px-2">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Passwordless Connections</h1>
        <p className="text-gray-700 mb-8 max-w-2xl">Configure Passwordless Connections like SMS Login, Email Login and others so that you can let your users login without having to choose yet another password. <a href="#" className="text-blue-600 underline">Show more</a></p>
        <div className="bg-white rounded-xl shadow p-0 overflow-hidden">
          <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 cursor-pointer hover:bg-gray-50" onClick={() => setModal('sms')}>
            <div className="flex items-center">
              {smsIcon}
              <span className="text-lg font-medium text-gray-900">SMS</span>
            </div>
            <span className="text-blue-600 font-medium hover:underline">Configure</span>
          </div>
          <div className="flex items-center justify-between px-8 py-6 cursor-pointer hover:bg-gray-50" onClick={() => setModal('email')}>
            <div className="flex items-center">
              {emailIcon}
              <span className="text-lg font-medium text-gray-900">Email</span>
            </div>
            <span className="text-blue-600 font-medium hover:underline">Configure</span>
          </div>
        </div>
      </div>
      {/* Modal for SMS */}
      {modal === 'sms' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-0 relative flex flex-col">
            <button className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-2xl" onClick={() => setModal(null)}>&times;</button>
            <div className="px-8 pt-8 pb-2">
              <h2 className="text-2xl font-bold mb-2">SMS (Twilio)</h2>
              <div className="flex space-x-6 border-b border-gray-100 mb-6">
                <span className="text-blue-700 font-semibold border-b-2 border-blue-700 pb-2 px-2 rounded-t-md bg-blue-50">Settings</span>
                <span className="text-gray-400 font-medium pb-2 px-2 hover:text-blue-700 cursor-pointer transition">Applications</span>
                <span className="text-gray-400 font-medium pb-2 px-2 hover:text-blue-700 cursor-pointer transition">Try</span>
              </div>
              <div className="text-gray-700 mb-4">Twilio SMS connection is a service that allows your users to use one-time password authentication via text messages. Learn more about integrating <a href="#" className="text-blue-600 underline">SMS connections</a>.</div>
              <div className="bg-yellow-50 border border-yellow-300 text-yellow-900 px-4 py-3 rounded-lg mb-5 flex items-start font-medium">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01"/><circle cx="12" cy="12" r="10"/></svg>
                <div>No Valid Phone Provider Configured: In order to use the SMS connection, you must configure a <a href="#" className="underline ml-1">phone provider</a> that supports 'text' as a delivery method.</div>
              </div>
              <div className="flex items-center gap-2 mb-5">
                <input type="checkbox" className="toggle-checkbox" />
                <span className="font-semibold text-gray-900">Use Tenant-Level Messaging Provider</span>
              </div>
              <div className="mb-5">
                <label className="block font-semibold mb-1 text-gray-900">Connection</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" value="sms" readOnly />
                <div className="text-xs text-gray-500 mt-1">If you are triggering a login manually, this is the identifier you would use on the connection parameter</div>
              </div>
              <div className="mb-8">
                <label className="block font-semibold mb-1 text-gray-900">Twilio SID</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="YOUR_TWILIO_SID" />
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold mb-2">Save</button>
            </div>
          </div>
        </div>
      )}
      {/* Modal for Email */}
      {modal === 'email' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-0 relative flex flex-col">
            <button className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-2xl" onClick={() => setModal(null)}>&times;</button>
            <div className="px-8 pt-8 pb-2">
              <h2 className="text-2xl font-bold mb-2">Email</h2>
              <div className="flex space-x-6 border-b border-gray-100 mb-6">
                <span className="text-blue-700 font-semibold border-b-2 border-blue-700 pb-2 px-2 rounded-t-md bg-blue-50">Settings</span>
                <span className="text-gray-400 font-medium pb-2 px-2 hover:text-blue-700 cursor-pointer transition">Applications</span>
                <span className="text-gray-400 font-medium pb-2 px-2 hover:text-blue-700 cursor-pointer transition">Try</span>
              </div>
              <div className="bg-yellow-50 border border-yellow-300 text-yellow-900 px-4 py-3 rounded-lg mb-5 flex items-start font-medium">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01"/><circle cx="12" cy="12" r="10"/></svg>
                <div><span className="font-semibold">Warning!</span> You are using the <span className="font-semibold">Auth0 Email Provider</span> which is only intended for development/trial use. Any customizations made to this email template will <span className="font-semibold">NOT take</span> effect until a <a href="#" className="underline">Custom Email Provider</a> is configured. All emails sent will use the default Auth0 templates, even if customized. Please enable a <a href="#" className="underline">Custom Email Provider for production use of custom templates</a>.</div>
              </div>
              <div className="text-gray-700 mb-4">Customize the settings and options that will allow your users to use one-time password authentication via email messages. You can also <a href="#" className="text-blue-600 underline">configure a custom e-mail provider</a>. Learn more about integrating <a href="#" className="text-blue-600 underline">Email connections</a>.</div>
              <div className="mb-5">
                <label className="block font-semibold mb-1 text-gray-900">Connection</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" value="email" readOnly />
                <div className="text-xs text-gray-500 mt-1">If you are triggering a login manually, this is the identifier you would use on the connection parameter</div>
              </div>
              <div className="mb-5">
                <label className="block font-semibold mb-1 text-gray-900">From</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" value="{{ application.name }} <root@auth0.com>" readOnly />
              </div>
              <div className="mb-8">
                <label className="block font-semibold mb-1 text-gray-900">Subject</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" value="Welcome to {{ application.name }}" readOnly />
              </div>
              <div className="border-t border-gray-100 my-4"></div>
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold mb-2">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 