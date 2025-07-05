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

const TenantSettingsSigningKeys = () => (
  <div className="min-h-screen bg-white w-screen px-8 py-12">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">Tenant Settings</h1>
      <TenantSettingsTabs current={tabs[4].route} tabs={tabs} />
      <div className="bg-white border rounded-xl p-8 mt-8">
        <div className="text-lg font-medium text-gray-900 mb-2">Signing Keys</div>
        <div className="text-gray-700 mb-6">Securely manage signing keys used by the applications in your tenant. <a href="#" className="text-blue-600 underline">Learn more</a></div>
        <div className="font-medium text-gray-900 mb-2">Rotation Settings</div>
        <div className="text-gray-700 mb-6">The actions below allow you to rotate the signing key and certificate used to validate tokens. ...</div>
        <div className="bg-gray-50 border rounded-lg p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900 mb-1">Rotate Signing Key</div>
              <div className="text-gray-500 text-sm">This will only rotate the currently used signing key. All tokens signed with this key will continue to be valid.</div>
            </div>
            <button className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded font-medium hover:bg-gray-50">Rotate Key</button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900 mb-1">Rotate & Revoke Signing Key</div>
              <div className="text-gray-500 text-sm">This will rotate and additionally revoke the currently used signing key and all tokens signed with this key will no longer be valid.</div>
            </div>
            <button className="px-6 py-2 bg-red-600 text-white rounded font-medium hover:bg-red-700">Rotate & Revoke Key</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TenantSettingsSigningKeys; 