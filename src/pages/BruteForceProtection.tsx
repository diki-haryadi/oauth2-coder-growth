import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BruteForceProtection() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate(-1)} className="text-gray-500 text-sm mb-4 flex items-center gap-1 hover:underline">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to Attack Protection
        </button>
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-3xl font-bold">Brute-force Protection</h1>
          <span className="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded text-xs">ENABLED</span>
        </div>
        <div className="text-gray-600 mb-6">Safeguard against brute-force attacks that target a single user account. By default, this feature limits login attempts separately for each source IP address to limit the potential for attackers to lock legitimate users out of their account. Account Lockout mode can be enabled to limit attempts regardless of IP address.</div>
        <div className="mb-8">
          <h2 className="font-semibold text-lg mb-2">Detection</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-8 mb-4">
            <div className="flex-1">
              <div className="font-semibold mb-1">Brute Force Threshold</div>
              <div className="text-gray-500 text-sm mb-2">Manage the number of incorrect login attempts allowed from a single user account before attack mitigation steps are taken. <a href="#" className="text-blue-700 underline">Learn more</a></div>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2 text-sm font-medium text-blue-700 border-2 border-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                  <input type="radio" checked readOnly className="accent-blue-600" /> Default
                </label>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 bg-white px-4 py-2 rounded-lg">
                  <input type="radio" readOnly className="accent-blue-600" /> Custom
                </label>
              </div>
            </div>
            <div className="flex-1">
              <div className="font-semibold mb-1">IP AllowList</div>
              <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" rows={3} placeholder="12.14.100.146, 31.220.2.133, etc" defaultValue="12.14.100.146, 31.220.2.133, etc" />
              <div className="text-xs text-gray-500 mt-1">The IP AllowList gives you the ability to create a list of trusted IP addresses from which your users can access your resources. These IP addresses will not have attack protection enforced against them. This field allows you to specify multiple IP addresses, or ranges, by comma-separating them. You can use IPv4 or IPv6 addresses and CIDR notation.</div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold text-lg mb-2">Response</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="font-semibold mb-1">Block Settings</div>
              <div className="flex items-center gap-3 mb-2">
                <span>Block Brute-force Logins</span>
                <span className="ml-auto inline-flex items-center"><span className="w-8 h-5 bg-green-200 rounded-full relative"><span className="inline-block w-4 h-4 bg-green-500 rounded-full absolute left-4 top-0.5 shadow" /></span></span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span>Account Lockout</span>
                <span className="ml-auto inline-flex items-center"><span className="w-8 h-5 bg-gray-200 rounded-full relative"><span className="inline-block w-4 h-4 bg-gray-400 rounded-full absolute left-0.5 top-0.5 shadow" /></span></span>
              </div>
            </div>
            <div className="flex-1">
              <div className="font-semibold mb-1">Notifications</div>
              <div className="flex items-center gap-3 mb-2">
                <span>Send notifications to the affected users</span>
                <span className="ml-auto inline-flex items-center"><span className="w-8 h-5 bg-green-200 rounded-full relative"><span className="inline-block w-4 h-4 bg-green-500 rounded-full absolute left-4 top-0.5 shadow" /></span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 justify-end mt-6">
          <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
          <button className="bg-white border border-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-md text-base">Cancel</button>
        </div>
      </div>
    </div>
  );
} 