import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const TABS = [
  'Overview',
  'Members',
  'Invitations',
  'Connections',
  'Machine To Machine Access',
];

const MOCK_ORG = {
  displayName: 'CG',
  name: 'codergrowth',
  identifier: 'org_CcLtfNhDrzgJW5yx',
};

export default function OrganizationsOverviewPage() {
  const { orgId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState('Overview');
  // Ambil data org dari state jika ada, fallback ke mock
  const org = location.state || MOCK_ORG;

  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-5xl mx-auto">
        <button className="text-gray-700 bg-white text-sm flex items-center hover:underline mb-6" onClick={() => navigate(-1)}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mr-1"><path d="M15 19l-7-7 7-7" /></svg>
          Back to Organizations
        </button>
        <div className="flex items-center mb-4">
          <span className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center text-3xl font-bold mr-5">{org.displayName?.[0] || 'O'}</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">{org.displayName}</span>
            </div>
            <div className="text-gray-500 text-base mt-1 flex items-center gap-2">
              Organization ID <span className="bg-gray-100 rounded px-2 py-0.5 font-mono text-xs ml-2">{org.identifier}</span>
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8 gap-8 ">
          {TABS.map((t) => (
            <button
              key={t}
              className={`pb-2 bg-white px-1 text-base font-medium ${tab === t ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-600 hover:text-blue-700'}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        {tab === 'Overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Basic Info</h2>
                <div className="text-gray-600 mb-4">These are basic details needed to set up your new organization.</div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value={org.name} readOnly />
                  <div className="text-xs text-gray-500 mt-1">This is any human-readable identifier for the organization that will be used by end-users to direct them to their organization in your application.</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value={org.displayName} readOnly />
                  <div className="text-xs text-gray-500 mt-1">If set, this is the name that will be displayed to end-users for this organization in any interaction with them.</div>
                </div>
              </div>
              {/* Branding */}
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Branding</h2>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Organization Logo</label>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-20 border border-gray-200 rounded flex items-center justify-center bg-gray-50">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><rect x="6" y="8" width="12" height="8" rx="2" /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /></svg>
                    </div>
                    <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="https://path.to/my_logo.png" readOnly />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">If set, this is the logo that will be displayed to end-users for this organization in any interaction with them.</div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value="#0059d6" readOnly />
                  <div className="text-xs text-gray-500 mt-1">If set, this will be the primary color for CTAs that will be displayed to end-users for this organization in your application's authentication flows.</div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Page Background Color</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value="#000000" readOnly />
                  <div className="text-xs text-gray-500 mt-1">If set, this will be the page background color that will be displayed to end-users for this organization in in your application's authentication flows.</div>
                </div>
                <button className="bg-blue-600 text-white font-medium rounded px-5 py-2 text-base hover:bg-blue-700 mt-2">Save Changes</button>
              </div>
            </div>
            {/* Mock UI Preview */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-full flex justify-center">
                <div className="bg-black rounded-lg p-6" style={{ width: 400, height: 400 }}>
                  <div className="bg-white rounded-lg p-8 flex flex-col items-center" style={{ height: '100%' }}>
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl font-bold mb-4">{org.displayName?.[0] || 'O'}</div>
                    <div className="h-6 w-32 bg-gray-200 rounded mb-4" />
                    <div className="h-4 w-48 bg-gray-100 rounded mb-2" />
                    <div className="h-4 w-48 bg-gray-100 rounded mb-2" />
                    <div className="h-4 w-48 bg-gray-100 rounded mb-2" />
                    <div className="h-4 w-48 bg-gray-100 rounded mb-2" />
                    <div className="h-10 w-64 bg-blue-500 rounded mt-8" />
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-600 mt-2 text-center">Mock UI Preview<br />For organization branding representation only, any other customization will not be visible.</div>
            </div>
          </div>
        )}
        {tab === 'Members' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Members</h2>
              <button className="bg-blue-600 text-white font-medium rounded px-5 py-2 text-base hover:bg-blue-700">Add Members</button>
            </div>
            <div className="text-gray-600 mb-4">Add users directly from your tenant to become members of your organization. <a href="#" className="text-blue-600 underline">Learn More</a></div>
            <table className="w-full border-t border-b border-gray-200 mb-4">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="py-2">Member</th>
                  <th className="py-2">Identifier</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className="text-center text-gray-500 py-8">You don't have any members in your organization at the moment.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {tab === 'Invitations' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Invitations</h2>
              <button className="bg-blue-600 text-white font-medium rounded px-5 py-2 text-base hover:bg-blue-700">Invite Members</button>
            </div>
            <div className="text-gray-600 mb-4">Invite users to become members of your organization. <a href="#" className="text-blue-600 underline">Learn More</a></div>
            <table className="w-full border-t border-b border-gray-200 mb-4">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="py-2">Email</th>
                  <th className="py-2">Status</th>
                  <th className="py-2">Created At</th>
                  <th className="py-2">Expires At</th>
                  <th className="py-2">Created By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 py-8">You don't have any invitations to your organization at the moment.</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <button className="px-3 py-1 rounded bg-gray-100 text-gray-400 cursor-not-allowed">&lt; Newer</button>
              <span>Page 1</span>
              <button className="px-3 py-1 rounded bg-gray-100 text-gray-400 cursor-not-allowed">Older &gt;</button>
            </div>
          </div>
        )}
        {tab === 'Connections' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Enabled Connections</h2>
              <button className="bg-blue-600 text-white font-medium rounded px-5 py-2 text-base hover:bg-blue-700">Enable Connections</button>
            </div>
            <div className="text-gray-600 mb-4">Enable connections to allow organization members to access your applications. These connections will be displayed on the {org.displayName} organization's log-in prompt. <a href="#" className="text-blue-600 underline">Learn More</a></div>
            <table className="w-full border-t border-b border-gray-200 mb-4">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="py-2">Connection</th>
                  <th className="py-2">Identifier</th>
                  <th className="py-2">Configuration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="text-center text-gray-500 py-8">You don't have any connections enabled for this organization.</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {tab === 'Machine To Machine Access' && (
          <div>
            <div className="text-sm bg-blue-50 border border-blue-200 rounded p-4 mb-4">Want to use this feature in production? <a href="#" className="text-blue-600 underline font-medium">Upgrade Plan</a></div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Machine to Machine Access</h2>
            <div className="text-gray-600 mb-4">Allow applications to scope machine to machine access to your organization. <a href="#" className="text-blue-600 underline">Learn more about machine to machine access using organizations</a></div>
            <table className="w-full border-t border-b border-gray-200 mb-4">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="py-2">Application Name</th>
                  <th className="py-2">Client ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className="text-center text-gray-500 py-8">You don't have any access added for this organization.</td>
                </tr>
              </tbody>
            </table>
            <button className="bg-gray-200 text-gray-400 font-medium rounded px-5 py-2 text-base cursor-not-allowed">Add Access</button>
          </div>
        )}
      </div>
    </div>
  );
} 