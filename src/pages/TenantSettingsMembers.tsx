import React from 'react';
import TenantSettingsTabs from '../components/TenantSettingsTabs';

const tabs = [
  { label: 'General', route: '/dashboard/au/dev-1md8m8doz8ynfucb/tenant/general' },
  { label: 'Subscription', route: '/dashboard/au/dev-1md8m8doz8ynfucb/tenant/billing/subscription' },
  { label: 'Tenant Members', route: '/dashboard/au/dev-1md8m8doz8ynfucb/tenant/admins' },
  { label: 'Custom Domains', route: '/dashboard/au/dev-1md8m8doz8ynfucb/tenant/custom_domains' },
  { label: 'Signing Keys', route: '/dashboard/au/dev-1md8m8doz8ynfucb/tenant/signing_keys' },
  { label: 'Encryption Keys', route: '/dashboard/au/dev-1md8m8doz8ynfucb/tenant/encryption_keys' },
  { label: 'Advanced', route: '/dashboard/au/dev-1md8m8doz8ynfucb/tenant/advanced' },
];

const TenantSettingsMembers = () => (
  <div className="min-h-screen bg-white w-full px-8 py-12">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">Tenant Settings</h1>
      <TenantSettingsTabs current={tabs[2].route} tabs={tabs} />
      <div className="bg-white border rounded-xl p-8 mt-8">
        <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded mb-6 text-sm">Heads up! Tenant Members can only be added through <a href="#" className="underline">Teams</a>.</div>
        <table className="w-full text-left">
          <thead>
            <tr className="text-xs text-gray-500 border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Roles</th>
              <th className="py-2">MFA</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-3 flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <div className="font-medium text-gray-900">Diki Haryadi</div>
                  <div className="text-xs text-gray-500">dk.harryadi@gmail.com (github)</div>
                </div>
              </td>
              <td className="py-3">Admin</td>
              <td className="py-3"><span className="inline-block px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-semibold">ENABLED</span></td>
              <td className="py-3 text-right">
                <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default TenantSettingsMembers; 