import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrganizationsCreatePage() {
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const navigate = useNavigate();

  const isValid = name.trim().length > 0;

  const handleAdd = () => {
    // Simulasi pembuatan org baru
    const newOrgId = 'org_CcLtfNhDrzgJW5yx';
    const newOrg = {
      displayName,
      name,
      identifier: newOrgId,
    };
    // Simpan ke localStorage/mock (opsional)
    navigate(`/dashboard/au/dev-1md8m8doz8ynfucb/organizations/${newOrgId}/overview`, { state: newOrg });
  };

  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-3xl mx-auto">
        <button className="text-gray-700 bg-white text-sm flex items-center hover:underline mb-8" onClick={() => navigate(-1)}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mr-1"><path d="M15 19l-7-7 7-7" /></svg>
          Back to Organizations
        </button>
        <div className="flex items-center mb-10">
          <span className="bg-gray-100 rounded-xl p-4 mr-5 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><rect x="6" y="8" width="12" height="8" rx="2" /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /></svg>
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Add Organization</h1>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Info</h2>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter a human-readable identifier for this organization" value={name} onChange={e => setName(e.target.value)} />
            <div className="text-xs text-gray-500 mt-1">This is any human-readable identifier for the organization that will be used by end-users to direct them to their organization in your application.</div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter a friendly name for this organization" value={displayName} onChange={e => setDisplayName(e.target.value)} />
            <div className="text-xs text-gray-500 mt-1">If set, this is the name that will be displayed to end-users for this organization in any interaction with them.</div>
          </div>
          <button className={`px-6 py-2 rounded font-semibold ${isValid ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`} disabled={!isValid} onClick={handleAdd}>Add Organization</button>
        </div>
      </div>
    </div>
  );
} 