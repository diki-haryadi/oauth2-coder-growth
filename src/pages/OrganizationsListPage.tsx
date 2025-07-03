import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Organization = {
  displayName: string;
  name: string;
  identifier: string;
};

const mockOrgs: Organization[] = [
  // Example: { displayName: 'CG', name: 'codergrowth', identifier: 'org_CcLtfNhDrzgJW5yx' },
];

export default function OrganizationsListPage() {
  const [search, setSearch] = useState('');
  const [orgs, setOrgs] = useState(mockOrgs);
  const [menuOpenIdx, setMenuOpenIdx] = useState<number | null>(null);
  const navigate = useNavigate();

  const filteredOrgs = orgs.filter(org => org.displayName.toLowerCase().includes(search.toLowerCase()) || org.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Organizations</h1>
          <button className="bg-blue-600 text-white font-medium rounded px-5 py-2 text-base hover:bg-blue-700" onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/organizations/create')}>+ Create Organization</button>
        </div>
        <div className="mb-8">
          <div className="text-gray-600 mb-2">Manage the organizations you do business with and customize the experience their users have when accessing your applications.</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col items-center" style={{ minHeight: 320 }}>
          <svg className="w-32 h-32 text-blue-200 mb-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48"><rect x="8" y="16" width="32" height="20" rx="2" /><rect x="16" y="8" width="16" height="8" rx="2" /><rect x="20" y="24" width="8" height="12" rx="1" /></svg>
          <div className="text-gray-700 text-lg mb-2 text-center">Manage the organizations you do business with and customize the experience their users have when accessing your applications.</div>
          <button className="mt-6 bg-blue-600 text-white font-medium rounded px-5 py-2 text-base hover:bg-blue-700" onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/organizations/create')}>+ Create Organization</button>
        </div>
      </div>
    </div>
  );
} 