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

const TenantSettingsEncryptionKeys = () => (
  <div className="min-h-screen bg-white w-full px-8 py-12">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">Tenant Settings</h1>
      <TenantSettingsTabs current={tabs[5].route} tabs={tabs} />
      <div className="bg-white border rounded-xl p-8 mt-8">
        <div className="text-lg font-medium text-gray-900 mb-2">Encryption keys</div>
        <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded mb-6 text-sm">The Customer Managed Keys feature requires the Highly Regulated Identity addon.</div>
        <div className="bg-gray-50 border rounded-lg p-6 flex items-center justify-between">
          <div>
            <div className="font-medium text-gray-900 mb-1">Bring Your Own Key</div>
            <div className="text-gray-500 text-sm mb-2">Upload your own encryption key to manage your tenant's encrypt and decrypt operations. ...</div>
            <button className="px-6 py-2 bg-gray-200 text-gray-500 rounded font-medium cursor-not-allowed flex items-center gap-2" disabled>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/><polyline points="7 9 12 4 17 9"/><line x1="12" y1="4" x2="12" y2="16"/></svg>
              Upload Key
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TenantSettingsEncryptionKeys; 