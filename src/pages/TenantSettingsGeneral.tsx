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

const TenantSettingsGeneral = () => {
  return (
    <div className="min-h-screen bg-white w-screen px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Tenant Settings</h1>
        <TenantSettingsTabs current={tabs[0].route} tabs={tabs} />
        {/* Tenant Information */}
        <div className="bg-white border rounded-xl p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="font-semibold text-lg text-gray-900 mb-2">Tenant Information</div>
            <button className="bg-white border border-blue-600 text-blue-700 px-4 py-2 rounded font-medium flex items-center gap-2 hover:bg-blue-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 6h8M8 10h8M8 14h8M8 18h8"/></svg>
              Run Readiness Check
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-xs text-gray-500 mb-1">Tenant Name</div>
              <div className="text-gray-900">dev-1md8m8doz8ynfucb</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Region</div>
              <div className="flex items-center gap-2"><span className="text-2xl">🇦🇺</span> AU</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Environment</div>
              <div className="text-gray-900">Development</div>
            </div>
          </div>
        </div>
        {/* Settings */}
        <div className="bg-white border rounded-xl p-8 mb-8">
          <div className="font-semibold text-lg text-gray-900 mb-6">Settings</div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Friendly Name</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 mb-6" placeholder="My Company Inc." />
              <label className="block text-sm font-medium text-gray-700 mb-1">Logo URL</label>
              <div className="border rounded-lg flex flex-col items-center justify-center py-6 mb-2">
                <svg className="w-16 h-16 text-blue-500 mb-2" fill="none" viewBox="0 0 48 48"><path d="M24 4L4 12V22C4 32.9 12.1 43.1 24 46C35.9 43.1 44 32.9 44 22V12L24 4Z" stroke="currentColor" strokeWidth="2"/><path d="M16 24H32M16 32H28" stroke="currentColor" strokeWidth="2"/></svg>
                <input className="w-full border-0 text-center text-gray-500 bg-transparent" placeholder="Your logo URL" />
              </div>
              <div className="text-xs text-gray-500 mb-6">If a URL is not provided, the Auth0 logo will be used.</div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 mb-6" placeholder="support@my-company.com" />
              <label className="block text-sm font-medium text-gray-700 mb-1">Support URL</label>
              <input className="w-full border border-gray-300 rounded px-3 py-2 mb-6" placeholder="https://my-company.com/support/" />
              <button className="bg-white mt-2 px-6 py-2 bg-gray-200 text-gray-500 rounded font-medium cursor-not-allowed">Save</button>
            </div>
            <div>
              {/* Environment Tag */}
              <div className="mb-8">
                <div className="font-medium text-gray-900 mb-2">Environment Tag</div>
                <div className="text-sm text-gray-500 mb-4">Assign an environment tag to your tenant to differentiate between development, staging and production environments.<br/>Higher rate limits are applied to public cloud tenants tagged as Production with a paid subscription. <a href="#" className="text-blue-600 underline">Learn more</a></div>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center border rounded-lg px-4 py-3 cursor-pointer gap-3 bg-blue-50 border-blue-600">
                    <input type="radio" name="env" checked readOnly className="accent-blue-600" />
                    <span className="font-medium text-blue-700">Development</span>
                    <span className="text-xs text-gray-500">The tenant is mainly used by engineers as a working environment to make configuration changes.</span>
                  </label>
                  <label className="flex items-center border rounded-lg px-4 py-3 cursor-pointer gap-3">
                    <input type="radio" name="env" className="accent-yellow-400" />
                    <span className="font-medium text-yellow-700">Staging</span>
                    <span className="text-xs text-gray-500">The tenant is mainly used by your testing team and is used to test changes before releasing them to Production.</span>
                  </label>
                  <label className="flex items-center border rounded-lg px-4 py-3 cursor-pointer gap-3">
                    <input type="radio" name="env" className="accent-green-600" />
                    <span className="font-medium text-green-700">Production</span>
                    <span className="text-xs text-gray-500">The tenant is pointed to a production instance used by your end users. This environment should be treated carefully since it could break your application.</span>
                  </label>
                </div>
                <button className="bg-white mt-4 px-6 py-2 bg-gray-200 text-gray-500 rounded font-medium cursor-not-allowed">Save</button>
              </div>
              {/* API Authorization Settings, Error Pages, Languages, dsb. (mockup) */}
              <div className="mb-8">
                <div className="font-medium text-gray-900 mb-2">API Authorization Settings</div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Default Audience</label>
                <input className="w-full border border-gray-300 rounded px-3 py-2 mb-2" placeholder="https://your-default-endpoint/" />
                <div className="text-xs text-gray-500 mb-4">API Audience to use by default for <a href="#" className="text-blue-600 underline">API Authorization flows</a>. ...</div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Default Directory</label>
                <input className="w-full border border-gray-300 rounded px-3 py-2 mb-2" placeholder="Connection Name" />
                <div className="text-xs text-gray-500 mb-4">Name of the connection to be use for Password Grant exchanges. ...</div>
                <button className="bg-white mt-2 px-6 py-2 bg-gray-200 text-gray-500 rounded font-medium cursor-not-allowed">Save</button>
              </div>
              <div className="mb-8">
                <div className="font-medium text-gray-900 mb-2">Error Pages</div>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center border rounded-lg px-4 py-3 cursor-pointer gap-3 bg-blue-50 border-blue-600">
                    <input type="radio" name="errorpage" checked readOnly className="accent-blue-600" />
                    <span className="font-medium text-blue-700">Generic</span>
                    <span className="text-xs text-gray-500">Use a generic error page generated from your account data</span>
                  </label>
                  <label className="flex items-center border rounded-lg px-4 py-3 cursor-pointer gap-3">
                    <input type="radio" name="errorpage" className="accent-gray-400" />
                    <span className="font-medium text-gray-700">Custom</span>
                    <span className="text-xs text-gray-500">Redirect users to a specified URL instead of showing the default error page</span>
                  </label>
                </div>
                <button className="mt-4 px-6 py-2 bg-gray-200 text-gray-500 rounded font-medium cursor-not-allowed">Save</button>
              </div>
              <div className="mb-8">
                <div className="font-medium text-gray-900 mb-2">Languages</div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Default Language</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 mb-2">
                  <option>English (en)</option>
                </select>
                <div className="text-xs text-gray-500 mb-2">Supported Languages</div>
                <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto border rounded p-2 bg-gray-50">
                  {['Albanian (sq)','Amharic (am)','Armenian (hy)','Azerbaijani (az)','Basque (eu-ES)','Bengali (bn)','Bosnian (bs)','Bulgarian (bg)','Catalan (ca-ES)','Chinese - Simplified (zh-CN)','Chinese - Hong Kong (zh-HK)','Chinese - Traditional (zh-TW)','Croatian (hr)','Czech (cs)','Danish (da)','Dutch (nl)','English - Canada (en-CA)','English (en)','Estonian (et)','Finnish (fi)','French - Canada (fr-CA)','French (fr-FR)','Galician (gl-ES)','Georgian (ka)','German (de)','Greek (el)','Gujarati (gu)','Hindi (hi)','Hungarian (hu)','Icelandic (is)','Indonesian (id)','Italian (it)','Japanese (ja)','Kannada (kn)','Kazakh (kk)','Korean (ko)','Latvian (lv)','Lithuanian (lt)','Macedonian (mk)','Malay (ms)','Malayalam (ml)','Marathi (mr)','Mongolian (mn)','Montenegrine (cnr)','Myanmar (my)','Norwegian (no)','Norwegian Bokmål (nb)','Norwegian Nynorsk (nn)','Polish (pl)','Portuguese (pt-PT)','Portuguese - Brazilian (pt-BR)','Punjabi (pa)','Romanian (ro)','Russian (ru)','Serbian (sr)','Slovak (sk)','Slovenian (sl)','Somali (so)','Spanish - Argentina (es-AR)','Spanish - Latin America (es-419)','Spanish - Mexico (es-MX)','Spanish (es)','Swahili (sw)','Swedish (sv)','Tagalog (tl)','Tamil (ta)','Telugu (te)','Thai (th)','Turkish (tr)','Ukrainian (uk)','Vietnamese (vi)','Welsh (cy)','Tamazight (zgh)'].map(lang => (
                    <label key={lang} className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" className="accent-blue-600" /> {lang}
                    </label>
                  ))}
                </div>
                <button className="bg-white mt-4 px-6 py-2 bg-gray-200 text-gray-500 rounded font-medium cursor-not-allowed">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantSettingsGeneral; 