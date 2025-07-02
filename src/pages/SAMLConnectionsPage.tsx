import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function SAMLConnectionsPage() {
  const navigate = useNavigate();
  const { type = 'SAML' } = useParams();
  const typeLabel = type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return (
    <div className="min-h-screen bg-white w-screen p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button className="text-gray-700 bg-white text-sm flex items-center hover:underline" onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/connections/enterprise')}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mr-1"><path d="M15 19l-7-7 7-7" /></svg>
            Back to Enterprise Connections
          </button>
          <button className="bg-blue-600 text-white font-medium rounded px-5 py-2 text-base hover:bg-blue-700" onClick={() => navigate(`/dashboard/au/dev-1md8m8doz8ynfucb/connections/enterprise/${type}/create`)}>+ Create Connection</button>
        </div>
        <h1 className="text-3xl font-bold mb-8">{typeLabel}</h1>
        <div className="bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center py-12 px-4 shadow-md">
          <div className="mb-6">
            <div className="relative w-96 h-56 mx-auto">
              <img src="https://pendo-static-4750601711124480.storage.googleapis.com/qZeVRwSk4dqH6MIHxxzdpjIStxM/guide-media-185abcc1-6da6-42d8-8870-82fd96f20854" alt={`How ${typeLabel} Authentication Works`} className="rounded-lg w-full h-full object-cover" />
              <button className="absolute inset-0 flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="white" fillOpacity="0.8" />
                  <polygon points="26,20 48,32 26,44" fill="#635DFF" />
                </svg>
              </button>
            </div>
          </div>
          <div className="text-gray-500 mb-6">No items have been added to this section.</div>
          <button className="bg-blue-600 text-white font-medium rounded px-6 py-3 text-base hover:bg-blue-700 mb-2" onClick={() => navigate(`/dashboard/au/dev-1md8m8doz8ynfucb/connections/enterprise/${type}/create`)}>+ Create Connection</button>
          <a href="#" className="text-blue-700 text-base hover:underline">Learn More</a>
        </div>
      </div>
    </div>
  );
} 