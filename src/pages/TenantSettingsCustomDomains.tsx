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

const TenantSettingsCustomDomains = () => (
  <div className="min-h-screen bg-white w-full px-8 py-12">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">Tenant Settings</h1>
      <TenantSettingsTabs current={tabs[3].route} tabs={tabs} />
      <div className="bg-white border rounded-xl p-8 mt-8 flex gap-8 items-center">
        <div className="flex-1">
          <div className="text-lg font-medium text-gray-900 mb-2">Enable custom domain</div>
          <div className="text-gray-700 mb-4">Using a custom domain helps your users feel confident that they're providing their credentials to the right party. To set up a free custom domain with Auth0, we will need to do a credit card verification for fraud prevention. <span className="font-semibold">Don't worry, you won't be charged.</span></div>
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700">Add Credit Card</button>
            <button className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded font-medium hover:bg-gray-50">Learn More</button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-72 h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
            <svg className="w-24 h-24 text-blue-600" fill="none" viewBox="0 0 48 48"><rect x="8" y="16" width="32" height="20" rx="4" fill="#fff" stroke="#6366f1" strokeWidth="2"/><rect x="16" y="24" width="16" height="4" rx="2" fill="#6366f1"/><circle cx="24" cy="20" r="2" fill="#6366f1"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TenantSettingsCustomDomains; 