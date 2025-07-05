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

const TenantSettingsSubscription = () => (
  <div className="min-h-screen bg-white w-full px-8 py-12">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">Tenant Settings</h1>
      <TenantSettingsTabs current={tabs[1].route} tabs={tabs} />
      <div className="bg-white border rounded-xl p-8 mt-8">
        <div className="text-lg font-medium text-gray-900 mb-4">Subscriptions are now managed in Teams</div>
        <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded font-medium flex items-center gap-2 hover:bg-blue-700">Go To Subscription <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
      </div>
    </div>
  </div>
);

export default TenantSettingsSubscription; 