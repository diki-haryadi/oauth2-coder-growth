import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';
import integrationsData from './create.json';

const SSOChooseIntegration = () => {
  const { url_slug } = useParams();
  const navigate = useNavigate();
  // Always treat integrationsData as an array of integrations
  const integrationsArray = Array.isArray(integrationsData.integrations)
    ? integrationsData.integrations
    : Array.isArray(integrationsData)
      ? integrationsData
      : [];
  const integration = integrationsArray.find(i => i.url_slug === url_slug);
  const [step, setStep] = useState<'permissions' | 'setup' | 'tutorial'>('permissions');
  const [name, setName] = useState(integration ? integration.name : '');
  const [callbackUrl, setCallbackUrl] = useState('');
  const [guideIndex, setGuideIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(true);
  const [activeTab, setActiveTab] = useState<'Settings' | 'Connections' | 'Tutorial'>('Tutorial');
  // Copy feedback state
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  if (!integration) {
    return (
      <div className="flex min-h-screen w-screen bg-gray-50">
        <DashboardSidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-gray-500">Integration not found.</div>
        </div>
      </div>
    );
  }

  // Example permissions, you can adjust this to use real data if available
  const permissions = [
    `Accept login requests from ${integration.name}`,
    `Share user profile information with ${integration.name}`
  ];

  // Setup Guide Slides
  const guideSlides = Array.isArray(integration.install_guide_json)
    ? integration.install_guide_json.filter((item: any) => typeof item.content === 'string')
    : [];
  const guideTotal = guideSlides.length;
  const guideProgress = guideTotal > 0 ? ((guideIndex + 1) / guideTotal) * 100 : 0;
  const guideContent = guideSlides[guideIndex]?.content || '';

  // Reset guideIndex and showGuide to default when entering setup step
  React.useEffect(() => {
    if (step === 'setup') {
      setGuideIndex(0);
      setShowGuide(true);
    }
  }, [step]);

  // Dummy SAML parameters for the tutorial tab (replace with real data as needed)
  const samlParams = [
    { label: 'SAML Version', value: '2.0' },
    { label: 'Issuer', value: 'urn:dev-1md8m8doz8ynfucb.au.auth0.com' },
    { label: 'Identity Provider Certificate', value: 'https://dev-1md8m8doz8ynfucb.au.auth0.com/pem' },
    { label: 'Identity Provider SHA1 fingerprint', value: '80:81:F1:2F:C3:01:B1:79:9E:22:95:F7:36:8A:DD:5C:08:7F:2B' },
    { label: 'Identity Provider Login URL', value: 'https://dev-1md8m8doz8ynfucb.au.auth0.com/samlp/aHoLZaDrYrjAQ0D1ELNAU7L22wYs13HX' },
    { label: 'Identity Provider Metadata', value: 'https://dev-1md8m8doz8ynfucb.au.auth0.com/samlp/metadata/aHoLZaDrYrjAQ0D1ELNAU7L22wYs13HX' },
  ];

  // Copy handler
  const handleCopy = async (value: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1000);
    } catch (e) {
      // fallback or error
    }
  };

  // Handle Save: show tutorial tab
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('tutorial');
    setActiveTab('Tutorial');
  };

  // Dummy/mock connections data for the Connections tab
  const mockConnections = [
    {
      category: 'Database',
      connections: [
        {
          id: 'db-1',
          name: 'Username-Password-Authentication',
          type: 'Database',
          icon: 'https://cdn.auth0.com/styleguide/components/1.0.8/media/logos/icon-database.svg',
          enabled: true,
        },
      ],
    },
    {
      category: 'Social',
      connections: [
        {
          id: 'social-github',
          name: 'github',
          type: 'GitHub',
          icon: 'https://cdn.auth0.com/marketplace/catalog/content/assets/creators/github/github-avatar.png',
          enabled: true,
        },
        {
          id: 'social-google',
          name: 'google-oauth2',
          type: 'Google / Gmail',
          icon: 'https://cdn.auth0.com/marketplace/catalog/content/assets/creators/google/google-avatar.png',
          enabled: true,
        },
      ],
    },
    {
      category: 'Enterprise',
      connections: [],
    },
    {
      category: 'Passwordless',
      connections: [],
    },
  ];

  // Main render logic
  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 min-w-0 relative">
        <main className="w-full h-[calc(100vh-64px)] overflow-y-auto">
          {step !== 'tutorial' ? (
            <div className="max-w-5xl mx-auto w-full px-2 pt-12 flex flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <button onClick={() => navigate(-1)} className="mr-2 text-gray-500 hover:text-gray-700 bg-white border border-gray-200 rounded p-2s">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <span className="text-gray-500 text-sm">Choose SSO Integration</span>
                </div>
                <div className="flex items-center mb-8">
                  <img src={integration.logo} alt={integration.name} className="w-12 h-12 object-contain mr-4" />
                  <h1 className="text-3xl font-semibold text-gray-900">New {integration.name} SSO Integration</h1>
                </div>
                {step === 'permissions' ? (
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-2xl p-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{integration.name} SSO Integration by Auth0</h2>
                    <p className="text-gray-700 mb-6">{integration.short_description || integration.description}</p>
                    <div className="mb-6">
                      {permissions.map((perm, idx) => (
                        <div key={idx} className="border border-gray-200 rounded px-4 py-3 mb-2 bg-gray-50 text-gray-900">
                          {perm}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3 mb-6">
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold text-base hover:bg-blue-700" onClick={() => setStep('setup')}>Continue</button>
                      <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md font-semibold text-base bg-white hover:bg-gray-100" onClick={() => navigate(-1)}>Cancel</button>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      By continuing, you grant the integration access to the permissions listed above and consent to the integration's <a href={integration.terms_of_use_url} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Terms of Use</a> and <a href={integration.partner.privacy_policy_url} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. By continuing you also agree to Auth0's Marketplace <a href="https://cdn.auth0.com/website/legal/files/mktplace/auth0-integration.pdf" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Terms of Use</a>.
                    </p>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-2xl p-8">
                    <div className="flex justify-between items-center mb-6">
                      <div className="text-lg font-semibold text-gray-900">General</div>
                      <button
                        className="px-4 py-2 bg-gray-100 border border-gray-200 rounded text-gray-700 text-sm font-medium flex items-center gap-2"
                        onClick={() => setShowGuide(v => !v)}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 2v4M8 2v4"/></svg>
                        Setup Guide
                      </button>
                    </div>
                    <form className="space-y-6" onSubmit={handleSave}>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Name<span className="text-red-500">*</span></label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900" required />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">Callback URL<span className="text-red-500">*</span></label>
                        <input type="text" value={callbackUrl} onChange={e => setCallbackUrl(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900" placeholder="Your callback URL" required />
                      </div>
                      <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold text-base hover:bg-blue-700">Save</button>
                    </form>
                  </div>
                )}
              </div>
              {/* Setup Guide Floating Card */}
              {step === 'setup' && guideSlides.length > 0 && showGuide && (
                <div className="fixed bottom-6 right-6 z-50 w-[350px]">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <img src={integration.logo} alt={integration.name} className="w-7 h-7 object-contain" />
                        <span className="font-semibold text-gray-900">{integration.name}</span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600" onClick={() => setShowGuide(false)}>✕</button>
                    </div>
                    <div className="prose prose-sm max-w-none mb-6" dangerouslySetInnerHTML={{ __html: guideContent }} />
                    <div className="mt-6 text-xs text-gray-500">
                      <div className="mb-2 font-semibold">YOUR PROGRESS</div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${guideProgress}%` }} />
                      </div>
                      <div className="flex justify-end mt-2 gap-2">
                        <button
                          className="w-7 h-7 flex items-center justify-center rounded bg-gray-100 text-gray-500"
                          onClick={() => setGuideIndex(i => Math.max(0, i - 1))}
                          disabled={guideIndex === 0}
                          aria-label="Previous"
                        >&lt;</button>
                        <button
                          className="w-7 h-7 flex items-center justify-center rounded bg-gray-100 text-gray-500"
                          onClick={() => setGuideIndex(i => Math.min(guideTotal - 1, i + 1))}
                          disabled={guideIndex === guideTotal - 1}
                          aria-label="Next"
                        >&gt;</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // TUTORIAL PAGE UI
            <div className="max-w-5xl mx-auto w-full px-2 pt-12">
              <div className="flex items-center mb-6">
                <button onClick={() => setStep('setup')} className="mr-2 text-gray-700 hover:text-blue-600 text-sm flex items-center bg-white border border-gray-300 rounded px-4 py-2 font-medium shadow-sm">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                  Back to Single Sign On Integrations
                </button>
              </div>
              <div className="flex items-center mb-4">
                <img src={integration.logo} alt={integration.name} className="w-12 h-12 object-contain mr-4" />
                <div>
                  <div className="text-2xl font-semibold text-gray-900">{integration.name}</div>
                  <div className="text-gray-500 text-sm flex items-center gap-2">
                    <span>Custom</span>
                    <span className="mx-1">|</span>
                    <span>Client ID</span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded font-mono text-xs">aHoLZaDrYrjAQ0D1ELNAU7L22wYs13HX</span>
                  </div>
                </div>
              </div>
              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-8 gap-8">
                {['Settings', 'Connections', 'Tutorial'].map(tab => (
                  <button
                    key={tab}
                    className={`py-2 px-4 text-base font-medium border-b-2 rounded transition-all duration-150 bg-white ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => setActiveTab(tab as any)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {/* Tab Content */}
              {activeTab === 'Settings' && (
                <div>
                  <div className="text-gray-600 text-base mb-6">These settings will only affect this particular integration. If you need to add custom behavior, you can use a action.</div>
                  <div className="bg-white rounded-xl border border-gray-200 shadow-sm w-full max-w-2xl p-8 mb-8">
                    <div className="text-lg font-semibold text-gray-900 mb-6">General</div>
                    <form className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <label className="block text-gray-700 text-sm font-medium mb-1">Name<span className="text-red-500">*</span></label>
                          <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900" required />
                        </div>
                        <div className="flex-1">
                          <label className="block text-gray-700 text-sm font-medium mb-1">Callback URL<span className="text-red-500">*</span></label>
                          <input type="text" value={callbackUrl} onChange={e => setCallbackUrl(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-gray-900" required />
                        </div>
                      </div>
                      <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold text-base hover:bg-blue-700 mt-2">Save</button>
                    </form>
                  </div>
                  {/* Danger Zone */}
                  <div className="mt-8">
                    <div className="text-lg font-semibold text-gray-900 mb-2">Danger Zone</div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-red-700 mb-1">Delete {integration.name} SSO integration</div>
                        <div className="text-red-700 text-sm">Once confirmed, this operation can't be undone!</div>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold">Delete</button>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'Connections' && (
                <div>
                  <div className="text-gray-600 text-base mb-6">Connections are sources of users. They are categorized into Database, Social and Enterprise and can be shared among different applications.</div>
                  {mockConnections.map(cat => (
                    <div key={cat.category} className="mb-6">
                      <div className="font-semibold text-gray-900 mb-2">{cat.category}</div>
                      {cat.connections.length === 0 ? (
                        <div className="bg-gray-50 text-gray-500 text-center py-4 rounded">There are no connections</div>
                      ) : (
                        cat.connections.map(conn => (
                          <div key={conn.id} className="flex items-center justify-between bg-white border border-gray-200 rounded mb-2 px-4 py-3">
                            <div className="flex items-center gap-4">
                              <img src={conn.icon} alt={conn.name} className="w-8 h-8 object-contain" />
                              <div>
                                <div className="font-medium text-gray-900">{conn.name}</div>
                                <div className="text-gray-500 text-sm">{conn.type}</div>
                              </div>
                            </div>
                            <button
                              className={`w-10 h-6 flex items-center bg-gray-200 rounded-full p-1 transition-colors duration-200 ${conn.enabled ? 'bg-green-400' : 'bg-gray-200'}`}
                              // onClick={() => handleToggleConnection(conn.id)}
                              style={{ cursor: 'pointer' }}
                            >
                              <span
                                className={`h-4 w-4 bg-white rounded-full shadow transform transition-transform duration-200 ${conn.enabled ? 'translate-x-4' : ''}`}
                              />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'Tutorial' && (
                <div>
                  <div className="text-xl font-semibold mb-4">SAML Protocol Configuration Parameters</div>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-xl border border-gray-200 shadow-sm">
                      <thead>
                        <tr>
                          <th className="text-left px-6 py-3 font-semibold text-gray-900 border-b border-gray-200">SAML Version</th>
                          <th className="text-left px-6 py-3 font-semibold text-gray-900 border-b border-gray-200">2.0</th>
                          <th className="w-12 border-b border-gray-200"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {samlParams.slice(1).map((param, idx) => (
                          <tr key={param.label}>
                            <td className="px-6 py-3 text-gray-900 border-b border-gray-200 bg-white whitespace-nowrap font-medium">{param.label}</td>
                            <td className="px-6 py-3 text-gray-900 border-b border-gray-200 bg-white">
                              <span className="truncate block">{param.value}</span>
                            </td>
                            <td className="px-2 py-3 border-b border-gray-200 bg-white">
                              <button
                                className="p-2 rounded hover:bg-gray-100 focus:outline-none bg-white border border-gray-200"
                                title="Copy"
                                onClick={() => handleCopy(param.value, idx)}
                              >
                                {copiedIdx === idx ? (
                                  <svg width="18" height="18" fill="none" stroke="#10B981" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                                ) : (
                                  <svg width="18" height="18" fill="#242424" stroke="#242424" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>
                                )}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="text-gray-600 text-sm mt-6">
                    Alternatively, you can add a connection parameter:<br /><br />
                    In this case, Auth0 will redirect users to the specified <span className="bg-gray-100 px-1 rounded font-mono">connection</span> and will not display the Login Widget. Make sure you send the SAMLRequest using ...
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SSOChooseIntegration; 