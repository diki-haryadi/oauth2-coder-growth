import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BotDetection() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => navigate(-1)} className="text-gray-500 text-sm mb-4 flex items-center gap-1 hover:underline">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to Attack Protection
        </button>
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-4xl font-bold">Bot Detection</h1>
          <span className="bg-gray-100 text-gray-700 font-semibold px-3 py-1 rounded text-base flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-400 inline-block"></span>DISABLED
          </span>
        </div>
        <div className="text-gray-600 mb-6 text-lg">Use Auth0's risk engine to detect bots and scripted attacks and enable a CAPTCHA to block them.</div>
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 rounded-lg px-4 py-3 mb-6 flex items-center gap-3">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#FEF3C7" stroke="#F59E42"/><path d="M8 12h8" stroke="#F59E42" strokeWidth="2" strokeLinecap="round"/></svg>
          <span>Use of Bot Detection requires the purchase of the Attack Protection add-on to your <a href="#" className="text-blue-700 underline">Auth0 subscription</a>. Please <a href="#" className="text-blue-700 underline">contact sales</a> to get started</span>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{background: 'repeating-linear-gradient(120deg, #F3F4F6 0 8px, transparent 8px 24px)'}}></div>
            <div className="relative z-10">
              <h2 className="font-semibold text-2xl mb-2">Auth0's Risk Detection Engine</h2>
              <div className="text-gray-600 mb-2 text-lg">Safeguard your digital assets from DDoS attacks, account takeover, intensive scraping, synthetic accounts and other bot-related threats with unmatched speed and accuracy.</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center w-full max-w-xs">
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2" value="••••••••" readOnly />
              <div className="flex items-center gap-2 mb-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#F3F4F6"/><path d="M7 12h6m-3-3v6" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/></svg>
                <span className="text-green-600 font-medium text-sm">I'm not a robot</span>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#F3F4F6"/><rect x="6" y="6" width="12" height="12" rx="3" fill="#fff" stroke="#2563EB" strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <button className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-md text-base border border-blue-200 w-full">Continue</button>
            </div>
          </div>
        </div>
        {/* Detection Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="font-semibold text-xl">Detection</h2>
            <span className="bg-gray-100 text-gray-700 font-semibold px-2 py-0.5 rounded text-xs">ADD-ON</span>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#D1D5DB" strokeWidth="2"/><path d="M12 8v4m0 4h.01" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-8">
            <div>
              <div className="font-semibold mb-1">Risk Assessment</div>
              <div className="flex items-center gap-3 mb-2">
                <span>Enable tenant logs for Risk Assessment</span>
                <span className="ml-auto inline-flex items-center"><span className="w-8 h-5 bg-gray-200 rounded-full relative"><span className="inline-block w-4 h-4 bg-gray-400 rounded-full absolute left-0.5 top-0.5 shadow" /></span></span>
              </div>
              <div className="text-gray-500 text-sm mb-2">Auth0 will assess the risk profile of users and store relevant data in your tenant logs.</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Manage IP Addresses</div>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" rows={2} placeholder="12.14.100.146, 31.220.2.133, etc" defaultValue="12.14.100.146, 31.220.2.133, etc" />
              <div className="text-xs text-gray-500 mt-1">The IP AllowList gives you the ability to create a list of trusted IP addresses from which your users can access your resources. These IP addresses will not have attack protection enforced against them. This field allows you to specify multiple IP addresses, or ranges, by comma-separating them. You can use IPv4 or IPv6 addresses and CIDR notation.</div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mt-4">
              <div className="flex-1">
                <div className="font-semibold mb-1">Detection Models</div>
                <div className="text-gray-500 text-sm mb-2">Choose the detection models you want to use to detect automated bots in your tenant traffic</div>
              </div>
              <div className="flex-1">
                <div className="font-semibold mb-1">Signup detection models for custom and classic login pages</div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="ml-auto inline-flex items-center"><span className="w-8 h-5 bg-gray-200 rounded-full relative"><span className="inline-block w-4 h-4 bg-gray-400 rounded-full absolute left-0.5 top-0.5 shadow" /></span></span>
                </div>
                <div className="text-gray-500 text-sm mb-2">The machine learning model for signup flows provides increased detection efficacy for Signup Attacks. This helps mitigate future attacks by stopping the automated creation of fake or fraudulent accounts, and protects older endpoints that can be accessed publicly.</div>
                <div className="bg-blue-50 border border-blue-200 text-blue-900 rounded-lg px-4 py-3 mt-2 text-sm">Ensure all applications using Auth0.js and Lock are using the most recent library version before turning this model on</div>
              </div>
            </div>
          </div>
        </div>
        {/* Response Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="font-semibold text-xl">Response</h2>
            <span className="bg-gray-100 text-gray-700 font-semibold px-2 py-0.5 rounded text-xs">ADD-ON</span>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#D1D5DB" strokeWidth="2"/><path d="M12 8v4m0 4h.01" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-8">
            {/* Flows with passwords */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="font-semibold mb-1">Enforce CAPTCHA for flows with passwords <span className="ml-2 bg-gray-100 text-gray-700 font-semibold px-2 py-0.5 rounded text-xs">OFF</span></div>
                <div className="text-gray-500 text-sm mb-2">Block suspected bot traffic by requiring a CAPTCHA during the login and signup process.</div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="border-2 border-blue-600 rounded-lg p-4 cursor-pointer">
                  <div className="font-semibold">Never</div>
                  <div className="text-gray-500 text-sm">Users are not required to complete a CAPTCHA to log in.</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer">
                  <div className="font-semibold">When Risky</div>
                  <div className="text-gray-500 text-sm">Users are required to complete a CAPTCHA if the risk level of the authentication attempt surpasses our Bot Detection threshold.</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer">
                  <div className="font-semibold">Always</div>
                  <div className="text-gray-500 text-sm">Users are always required to complete a CAPTCHA to log in.</div>
                </div>
              </div>
            </div>
            {/* Passwordless flows */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="font-semibold mb-1">Enforce CAPTCHA for passwordless flows <span className="ml-2 bg-gray-100 text-gray-700 font-semibold px-2 py-0.5 rounded text-xs">OFF</span></div>
                <div className="text-gray-500 text-sm mb-2">Block suspected bot traffic by requiring a CAPTCHA during the passwordless login and signup process. This can help reduce excess cost associated with sending emails and SMS to your users.</div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="border-2 border-blue-600 rounded-lg p-4 cursor-pointer">
                  <div className="font-semibold">Never</div>
                  <div className="text-gray-500 text-sm">Users are not required to complete a CAPTCHA to log in.</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer">
                  <div className="font-semibold">When Risky</div>
                  <div className="text-gray-500 text-sm">Users are required to complete a CAPTCHA if the risk level of the authentication attempt surpasses our Bot Detection threshold.</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer">
                  <div className="font-semibold">Always</div>
                  <div className="text-gray-500 text-sm">Users are always required to complete a CAPTCHA to log in.</div>
                </div>
              </div>
            </div>
            {/* Password reset flow */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="font-semibold mb-1">Enforce CAPTCHA for the password reset flow <span className="ml-2 bg-gray-100 text-gray-700 font-semibold px-2 py-0.5 rounded text-xs">OFF</span></div>
                <div className="text-gray-500 text-sm mb-2">Block suspected bot traffic by requiring a CAPTCHA during the password reset flow.</div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="border-2 border-blue-600 rounded-lg p-4 cursor-pointer">
                  <div className="font-semibold">Never</div>
                  <div className="text-gray-500 text-sm">Users are not required to complete a CAPTCHA to reset their password.</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer">
                  <div className="font-semibold">When Risky</div>
                  <div className="text-gray-500 text-sm">Users are required to complete a CAPTCHA if the risk level of the authentication attempt surpasses our Bot Detection threshold.</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 cursor-pointer">
                  <div className="font-semibold">Always</div>
                  <div className="text-gray-500 text-sm">Users are always required to complete a CAPTCHA to reset their password.</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end mt-6">
              <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
              <button className="bg-white border border-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-md text-base">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 