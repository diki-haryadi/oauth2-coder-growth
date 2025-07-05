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

const TenantSettingsAdvanced = () => (
  <div className="min-h-screen bg-white w-full px-8 py-12">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">Tenant Settings</h1>
      <TenantSettingsTabs current={tabs[6].route} tabs={tabs} />
      {/* Login and Logout */}
      <div className="bg-white border rounded-xl p-8 mt-8 mb-8">
        <div className="font-medium text-gray-900 mb-2">Login and Logout</div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tenant Login URI</label>
        <input className="w-full border border-gray-300 rounded px-3 py-2 mb-2" placeholder="https://mycompany.org/login" />
        <div className="text-xs text-gray-500 mb-4">In some scenarios, Auth0 will need to redirect to your tenant's login page. ...</div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Allowed Logout URLs</label>
        <input className="w-full border border-gray-300 rounded px-3 py-2 mb-2" placeholder="https://mycompany.org/logoutCallback" />
        <div className="text-xs text-gray-500 mb-4">A set of URLs that are valid to redirect to after logout from Auth0 ...</div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Allowed ACR Values <span className="ml-2 px-2 py-0.5 rounded bg-gray-100 text-xs font-semibold">ADD-ON</span></label>
        <input className="w-full border border-gray-300 rounded px-3 py-2 mb-2" placeholder="" />
        <div className="text-xs text-gray-500 mb-4">Comma-separated list of allowed Authentication Context Class Reference (ACR) values ...</div>
        <div className="flex items-center gap-4 mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600" checked readOnly /> RP-Initiated Logout End Session Endpoint Discovery
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600" checked readOnly /> RP-Initiated Logout End-User Confirmation
          </label>
        </div>
        <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded font-medium">Save</button>
      </div>
      {/* Session Expiration */}
      <div className="bg-white border rounded-xl p-8 mb-8">
        <div className="font-medium text-gray-900 mb-2">Session Expiration</div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Session Policy</label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center border rounded-lg px-4 py-3 cursor-pointer gap-3 bg-blue-50 border-blue-600">
              <input type="radio" name="sessionpolicy" checked readOnly className="accent-blue-600" />
              <span className="font-medium text-blue-700">Persistent</span>
              <span className="text-xs text-gray-500">Keep users logged in after they close and reopen their browser.</span>
            </label>
            <label className="flex items-center border rounded-lg px-4 py-3 cursor-pointer gap-3">
              <input type="radio" name="sessionpolicy" className="accent-gray-400" />
              <span className="font-medium text-gray-700">Non-persistent</span>
              <span className="text-xs text-gray-500">Require users to log in again after they close and reopen their browser.</span>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Idle Session Lifetime *</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2 mb-2" value="4320" />
            <div className="text-xs text-gray-500 mb-4">Time until users are required to log in again due to inactivity. ...</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Session Lifetime *</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2 mb-2" value="10080" />
            <div className="text-xs text-gray-500 mb-4">Time until users are required to log in again regardless of activity. ...</div>
          </div>
        </div>
        <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded font-medium">Save</button>
      </div>
      {/* Device Flow User Code Format */}
      <div className="bg-white border rounded-xl p-8 mb-8">
        <div className="font-medium text-gray-900 mb-2">Device Flow User Code Format</div>
        <div className="grid grid-cols-2 gap-8 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">User Code Character Set *</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 mb-2">
              <option>Base-20 (BCDFGHJKLMNPQRSTVWXZ)</option>
            </select>
            <div className="text-xs text-gray-500 mb-4">The character set for generating a User Code.</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">User Code Mask *</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2 mb-2" value="****-****" />
            <div className="text-xs text-gray-500 mb-4">The mask is used to define the length of the User Code ...</div>
          </div>
        </div>
        <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded font-medium">Save</button>
      </div>
      {/* Global Client Information */}
      <div className="bg-white border rounded-xl p-8 mb-8">
        <div className="font-medium text-gray-900 mb-2">Global Client Information</div>
        <div className="grid grid-cols-2 gap-8 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Global Client ID</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2 mb-2" value="TThuxpNEn9JNZTcSx6IgPvskSRYbyaeX" readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Global Client Secret</label>
            <input className="w-full border border-gray-300 rounded px-3 py-2 mb-2" value="••••••••••••••••••••••••••••••••••••••••••••••••••••••" readOnly />
          </div>
        </div>
        <div className="text-xs text-gray-500 mb-4">The global client ID and secret are used to generate tokens for legacy Auth0 APIs. ...</div>
      </div>
      {/* Settings (switch, dsb) */}
      <div className="bg-white border rounded-xl p-8 mb-8">
        <div className="font-medium text-gray-900 mb-2">Settings</div>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600" checked readOnly /> Change Password flow v2
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600" /> OIDC Dynamic Application Registration
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600" checked readOnly /> Enable Application Connections
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600" checked readOnly /> Use a generic response in public signup API error message
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600" checked readOnly /> Enable Publishing of Enterprise Connections Information with IdP domains
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default TenantSettingsAdvanced; 