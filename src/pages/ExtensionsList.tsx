import React, { useState, useRef, useEffect } from 'react';

const EXTENSIONS = [
  {
    name: 'Custom Social Connections',
    icon: (
      <span className="inline-flex gap-1">
        <span className="bg-white rounded-full p-0.5"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="tw" className="w-4 h-4" /></span>
        <span className="bg-white rounded-full p-0.5"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/soundcloud.svg" alt="sc" className="w-4 h-4" /></span>
        <span className="bg-white rounded-full p-0.5"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="gh" className="w-4 h-4" /></span>
        <span className="bg-white rounded-full p-0.5"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" alt="g" className="w-4 h-4" /></span>
      </span>
    ),
    type: 'APPLICATION',
    installed: false,
    filter: 'End User Applications',
    version: '1.2',
    by: 'auth0',
    desc: 'This application gives Auth0 customers the possibility to manage custom social connections in an easy way.',
    scopes: ['read:clients', 'read:connections'],
  },
  {
    name: 'Auth0 AD/LDAP Connector Health Monitor',
    icon: <span className="inline-block"><svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="13" stroke="#E5E7EB" strokeWidth="2"/><circle cx="14" cy="14" r="2" fill="#111827"/><circle cx="7" cy="14" r="2" fill="#111827"/><circle cx="21" cy="14" r="2" fill="#111827"/><circle cx="14" cy="7" r="2" fill="#111827"/><circle cx="14" cy="21" r="2" fill="#111827"/></svg></span>,
    type: 'APPLICATION',
    installed: false,
    filter: 'Admin Extensions',
    version: '2.2',
    by: 'auth0',
    desc: 'This extension will expose an endpoint you can use from your monitoring tool to monitor your AD/LDAP Connectors',
    scopes: ['read:connections'],
  },
  {
    name: 'Auth0 Account Link',
    icon: <span className="inline-block"><svg width="28" height="28" fill="none"><rect x="4" y="4" width="20" height="20" rx="4" stroke="#E5E7EB" strokeWidth="2"/><rect x="8" y="8" width="12" height="12" rx="2" fill="#F3F4F6"/><rect x="12" y="12" width="4" height="4" rx="1" fill="#111827"/></svg></span>,
    type: 'APPLICATION',
    installed: false,
    filter: 'End User Applications',
    version: '3.1',
    by: 'auth0',
    desc: 'This application gives Auth0 customers the ability to allow their users to link their accounts',
    scopes: ['read:connections', 'read:users'],
  },
  {
    name: 'Auth0 Authorization',
    icon: <span className="inline-block"><svg width="28" height="28" fill="none"><rect x="4" y="4" width="20" height="20" rx="4" stroke="#E5E7EB" strokeWidth="2"/><rect x="8" y="8" width="12" height="12" rx="2" fill="#F3F4F6"/><rect x="12" y="12" width="4" height="4" rx="1" fill="#111827"/></svg></span>,
    type: 'APPLICATION',
    installed: false,
    filter: 'Admin Extensions',
    version: '2.1',
    by: 'auth0',
    desc: 'This extension gives Auth0 customers the possibility to manage group memberships for their users.',
    scopes: ['read:connections', 'read:resource_servers'],
  },
  {
    name: 'SSO Dashboard',
    icon: <span className="inline-block"><svg width="28" height="28" fill="none"><rect x="4" y="4" width="20" height="20" rx="4" stroke="#E5E7EB" strokeWidth="2"/><rect x="8" y="8" width="12" height="12" rx="2" fill="#F3F4F6"/><rect x="12" y="12" width="4" height="4" rx="1" fill="#111827"/></svg></span>,
    type: 'APPLICATION',
    installed: true,
    filter: 'Admin Extensions',
    version: '2.4',
    by: 'auth0',
    desc: 'This extension provides your users with a dashboard for all of their applications.',
    scopes: ['read:clients', 'read:connections'],
    upToDate: true,
  },
  {
    name: 'Delegated Administration Dashboard',
    icon: <span className="inline-block"><svg width="28" height="28" fill="none"><rect x="4" y="4" width="20" height="20" rx="4" stroke="#E5E7EB" strokeWidth="2"/><rect x="8" y="8" width="12" height="12" rx="2" fill="#F3F4F6"/><rect x="12" y="12" width="4" height="4" rx="1" fill="#111827"/></svg></span>,
    type: 'APPLICATION',
    installed: false,
    filter: 'Admin Extensions',
    version: '4.6',
    by: 'auth0',
    desc: 'This extension allows non-dashboard administrators to manage (a subset of) users.',
    scopes: ['read:clients', 'read:connections'],
  },
  {
    name: 'Auth0 Authentication API Debugger',
    icon: <span className="inline-block"><svg width="28" height="28" fill="none"><rect x="4" y="4" width="20" height="20" rx="4" stroke="#E5E7EB" strokeWidth="2"/><rect x="8" y="8" width="12" height="12" rx="2" fill="#F3F4F6"/><rect x="12" y="12" width="4" height="4" rx="1" fill="#111827"/></svg></span>,
    type: 'APPLICATION',
    installed: false,
    filter: 'Logs Export',
    version: '2.1',
    by: 'auth0',
    desc: 'This extension allows you to test and debug the various Authentication API endpoints',
    scopes: ['read:clients', 'read:client_keys'],
  },
  {
    name: 'User Import / Export',
    icon: <span className="inline-block"><svg width="28" height="28" fill="none"><rect x="4" y="4" width="20" height="20" rx="4" stroke="#E5E7EB" strokeWidth="2"/><rect x="8" y="8" width="12" height="12" rx="2" fill="#F3F4F6"/><rect x="12" y="12" width="4" height="4" rx="1" fill="#111827"/></svg></span>,
    type: 'APPLICATION',
    installed: false,
    filter: 'Logs Export',
    version: '2.5',
    by: 'auth0',
    desc: 'This extension allows you to import/export users from/to your account.',
    scopes: ['create:users', 'read:users'],
    new: true,
  },
];

const FILTERS = ['All', 'Admin Extensions', 'End User Applications', 'Logs Export', 'Webhooks'];

const EXTENSION_FORMS = {
  'Custom Social Connections': [
    { label: 'No settings required for this extension.', type: 'info' }
  ],
  'Auth0 AD/LDAP Connector Health Monitor': [
    { label: 'No settings required for this extension.', type: 'info' }
  ],
  'Auth0 Account Link': [
    { label: 'Custom css', type: 'text', placeholder: 'https://my.cdn.com/my-css.css' }
  ],
  'Auth0 Authorization': [
    { label: 'Storage type *', type: 'select', options: ['Webtask Storage', 'Other Storage'] },
    { label: 'User search engine', type: 'select', options: ['v3', 'v2'] }
  ],
  'SSO Dashboard': [
    { label: 'Extension client id *', type: 'text', placeholder: '' },
    { label: 'Title', type: 'text', placeholder: 'Custom title for the dashboard' },
    { label: 'Custom css', type: 'text', placeholder: 'https://cdn.fabrikam.com/static/extensions/theme/fabrikam.css' }
  ],
  'Delegated Administration Dashboard': [
    { label: 'Extension client id *', type: 'text', placeholder: '' },
    { label: 'Title', type: 'text', placeholder: 'Custom title for the dashboard' },
    { label: 'Custom css', type: 'text', placeholder: 'https://cdn.fabrikam.com/static/extensions/theme/fabrikam.css' }
  ],
  'Auth0 Authentication API Debugger': [
    { label: 'No settings required for this extension.', type: 'info' }
  ],
  'User Import / Export': [
    { label: 'No settings required for this extension.', type: 'info' }
  ],
};

const ExtensionsList: React.FC = () => {
  const [tab, setTab] = useState('All Extensions');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  const [modal, setModal] = useState<any | null>(null);

  const filtered = EXTENSIONS.filter(e =>
    (tab === 'All Extensions' || (tab === 'Installed Extensions' && e.installed)) &&
    (filter === 'All' || e.filter === filter) &&
    (e.name.toLowerCase().includes(search.toLowerCase()))
  );

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    }
    if (dropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdown]);

  // Modal close on outside
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modal && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModal(null);
      }
    }
    if (modal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [modal]);

  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-1">Extensions</h1>
        <div className="text-gray-500 mb-8">Extend the Auth0 platform with official and 3rd party add-ons.</div>
        <div className="flex gap-8 border-b mb-8">
          {['All Extensions', 'Installed Extensions'].map(t => (
            <button key={t} onClick={() => setTab(t)} className={`px-2 pb-2 border-b-2 text-base font-medium transition-all ${tab === t ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-500 hover:text-blue-700'}`}>{t}</button>
          ))}
        </div>
        <div className="flex items-center gap-3 mb-8">
          <div className="relative flex-1 max-w-lg">
            <input className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-900 placeholder-gray-400" placeholder="Search all extensions" value={search} onChange={e => setSearch(e.target.value)} />
            <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
          </div>
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdown(v => !v)} className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 flex items-center gap-2 min-w-[160px]">
              Filter by {filter}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdown && (
              <div className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                {FILTERS.map(f => (
                  <div key={f} className={`px-4 py-2 cursor-pointer hover:bg-gray-50 ${filter === f ? 'bg-gray-100 font-semibold' : ''}`} onClick={() => { setFilter(f); setDropdown(false); }}>{f}</div>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => { setSearch(''); setFilter('All'); }} className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700">Reset</button>
          <span className="text-gray-500 text-sm">Showing {filtered.length} of {EXTENSIONS.filter(e => tab === 'All Extensions' || e.installed).length} extensions</span>
        </div>
        {filtered.length === 0 ? (
          <div className="bg-gray-50 border rounded-lg py-16 text-center text-gray-400 text-lg">There are no items to display.</div>
        ) : tab === 'Installed Extensions' ? (
          <div className="divide-y">
            {filtered.map((e, i) => (
              <div key={e.name} className="flex items-center gap-6 py-6">
                <div className="flex items-center gap-4">
                  <span>{e.icon}</span>
                  <div>
                    <a href="#" className="text-blue-700 hover:underline font-medium text-base flex items-center gap-1">{e.name} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 3h7v7m0-7L10 14M5 19h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
                    <div className="text-xs text-gray-500">Version {e.version}</div>
                  </div>
                </div>
                <div className="flex-1" />
                <div className="flex items-center gap-4">
                  <span className="text-green-600 text-sm flex items-center gap-1">{e.upToDate && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}Up to date</span>
                  <div className="relative">
                    <button onClick={() => setMenuOpen(i === menuOpen ? null : i)} className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></svg>
                    </button>
                    {menuOpen === i && (
                      <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                        <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Settings</div>
                        <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">Uninstall</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {filtered.map(e => (
              <div key={e.name} className="rounded-xl border bg-white p-5 flex flex-col items-start gap-3 relative cursor-pointer" onClick={() => setModal(e)}>
                <span>{e.icon}</span>
                <div className="font-semibold text-base text-gray-900 mb-0.5">{e.name}</div>
                <div className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-widest">{e.type}</div>
                {e.new && <span className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">New</span>}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Modal Install/Configure */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div ref={modalRef} className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center gap-4">
                <span>{modal.icon}</span>
                <div>
                  <div className="font-semibold text-lg text-gray-900 mb-0.5">{modal.name}</div>
                  <div className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-widest">{modal.type} {modal.version && <span className="ml-2">Version {modal.version}</span>}</div>
                </div>
              </div>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            </div>
            <div className="p-6">
              <div className="mb-4 text-gray-700">{modal.desc}</div>
              <div className="mb-4">
                <div className="mb-2 text-xs text-gray-500 font-semibold">Required scopes</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {modal.scopes.map((s: string) => <span key={s} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-mono">{s}</span>)}
                </div>
              </div>
              <form className="space-y-4">
                {(EXTENSION_FORMS[modal.name] || []).map((f, idx) => (
                  f.type === 'info' ? (
                    <div key={idx} className="bg-gray-50 text-gray-500 rounded px-4 py-3 text-sm">{f.label}</div>
                  ) : f.type === 'select' ? (
                    <div key={idx}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 bg-white">
                        {f.options.map((o: string) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  ) : (
                    <div key={idx}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                      <input className="w-full border border-gray-300 rounded px-3 py-2 bg-white" placeholder={f.placeholder || ''} />
                    </div>
                  )
                ))}
                <div className="flex justify-end gap-3 pt-4">
                  <button type="button" onClick={() => setModal(null)} className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Cancel</button>
                  <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Install</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExtensionsList; 