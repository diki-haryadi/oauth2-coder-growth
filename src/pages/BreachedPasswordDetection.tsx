import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BreachedPasswordDetection() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate(-1)} className="text-gray-500 text-sm mb-4 flex items-center gap-1 hover:underline">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to Attack Protection
        </button>
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-3xl font-bold">Breached Password Detection</h1>
          <span className="bg-green-100 text-yellow-800 font-semibold px-3 py-1 rounded text-xs">MONITORING</span>
        </div>
        <div className="text-gray-600 mb-6">Auth0 can detect if a specific user's credentials were included in a major public security breach.</div>
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 rounded-lg px-4 py-3 mb-6 flex items-start gap-3">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="mt-1"><rect x="4" y="4" width="16" height="16" rx="3" fill="#FEF3C7" stroke="#F59E42"/><path d="M8 12h8" stroke="#F59E42" strokeWidth="2" strokeLinecap="round"/></svg>
          <div>In Monitoring mode, Auth0 records related events in your tenant logs, but executes no further actions.</div>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold text-lg mb-2">Detection</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-8 mb-4">
            <div className="flex-1">
              <div className="font-semibold mb-1">Breached Password Detection Method</div>
              <div className="text-gray-500 text-sm mb-2">Protect user accounts and applications from account takeovers by detecting and resetting stolen passwords.</div>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="font-semibold mb-1">As soon as possible based on data received from the dark web, with Credential Guard</div>
                <div className="text-gray-500 text-sm mb-2">Our security researchers infiltrate criminal communities and gain access to breach data that isn't available otherwise, giving you greater — and faster — visibility of exposed credentials that threaten the security of your users' accounts. <a href="#" className="text-blue-700 underline">Learn more</a></div>
              </div>
              <div className="border-2 border-blue-600 rounded-lg p-4">
                <div className="font-semibold mb-1">When breach data is published</div>
                <div className="text-gray-500 text-sm mb-2">We scan the dark web for user credentials that have been made public after a breach of a third party. <a href="#" className="text-blue-700 underline">Learn more</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold text-lg mb-2">Response</h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <span>Block compromised credential use upon signup</span>
              <span className="ml-auto inline-flex items-center"><span className="w-8 h-5 bg-gray-200 rounded-full relative"><span className="inline-block w-4 h-4 bg-gray-400 rounded-full absolute left-0.5 top-0.5 shadow" /></span></span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <span>Block compromised credential use upon password reset</span>
              <span className="ml-auto inline-flex items-center"><span className="w-8 h-5 bg-gray-200 rounded-full relative"><span className="inline-block w-4 h-4 bg-gray-400 rounded-full absolute left-0.5 top-0.5 shadow" /></span></span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <span>Block compromised credential use upon login</span>
              <span className="ml-auto inline-flex items-center"><span className="w-8 h-5 bg-gray-200 rounded-full relative"><span className="inline-block w-4 h-4 bg-gray-400 rounded-full absolute left-0.5 top-0.5 shadow" /></span></span>
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