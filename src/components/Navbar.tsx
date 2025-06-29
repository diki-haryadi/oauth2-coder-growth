import React, { useState, useRef } from 'react';

const mockUser = {
  name: 'Diki Haryadi',
  email: 'dk.harryadi@gmail.com',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
};
const mockTenant = {
  id: 'dev-1md8m8doz8ynfucb',
  flag: '🇦🇺',
  env: 'DEVELOPMENT',
  team: 'team-ekvvhxl',
};
const mockLanguages = [
  { label: 'English (US)', value: 'en', checked: true },
  { label: 'Français (CA)', value: 'fr', checked: false, beta: true },
  { label: '日本語', value: 'jp', checked: false, beta: true },
];
const mockNotifications = [
  {
    id: 1,
    title: 'Action Required: Removal of Access to Specific Event Request Properties in Actions',
    desc: 'The service will restrict access to specific properties in the event.request.query & event.request.body objects for the post-login & credentials-exchange action triggers. Tenants identified with actions that may reference impacted properties will maintain access until September 16, 2025.',
    unread: true,
  },
];

const Navbar = () => {
  const [tenantOpen, setTenantOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [docOpen, setDocOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close popovers on outside click (not implemented for brevity)

  return (
    <nav className="bg-black w-full z-50 border-b border-gray-800 fixed top-0 left-0">
      <div className="flex items-center justify-between h-14 px-4 max-w-full">
        {/* Left: Logo & Tenant Switcher */}
        <div className="flex items-center gap-3 min-w-0">
          <img className="h-7 w-7" src="/logo.svg" alt="AuthG" />
          {/* Tenant Switcher */}
          <div className="relative">
            <button
              className="flex items-center gap-2 bg-[#232323] border border-[#232323] rounded px-2 py-1 min-w-[220px] hover:border-gray-600 focus:outline-none"
              onClick={() => setTenantOpen((v) => !v)}
            >
              <span className="text-2xl">{mockTenant.flag}</span>
              <span className="truncate font-medium text-white text-base">{mockTenant.id}</span>
              <span className="ml-2 px-2 py-0.5 rounded bg-blue-600 text-xs font-semibold text-white">DEVELOPMENT</span>
              <svg className="ml-2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </button>
            {tenantOpen && (
              <div className="absolute left-0 mt-2 w-[340px] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{mockTenant.flag}</span>
                    <span className="font-semibold text-gray-900 text-base">{mockTenant.id}</span>
                  </div>
                  <div className="text-gray-500 text-sm mb-2">AU</div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500">Environment</span>
                    <span className="px-2 py-0.5 rounded bg-white border border-blue-600 text-blue-600 text-xs font-semibold">DEVELOPMENT</span>
                    <span className="ml-1 text-gray-400 cursor-pointer" title="Info">?</span>
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded px-2">
                    <svg width="18" height="18" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                    <span className="text-gray-700 text-sm">Settings</span>
                  </div>
                  <div className="py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded px-2">
                    <svg width="18" height="18" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="7" r="4" /></svg>
                    <span className="text-gray-700 text-sm">Invite a member</span>
                  </div>
                  <div className="py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded px-2">
                    <svg width="18" height="18" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 6h8M8 10h8M8 14h8M8 18h8" /></svg>
                    <span className="text-gray-700 text-sm">Run Readiness Checks</span>
                  </div>
                  <div className="py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded px-2">
                    <svg width="18" height="18" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                    <span className="text-gray-700 text-sm">Quota Utilization</span>
                  </div>
                  <div className="py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded px-2">
                    <svg width="18" height="18" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 6h8M8 10h8M8 14h8M8 18h8" /></svg>
                    <span className="text-gray-700 text-sm">Create tenant</span>
                  </div>
                  <div className="py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded px-2">
                    <svg width="18" height="18" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="7" r="4" /></svg>
                    <span className="text-gray-700 text-sm">Switch tenant</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 bg-gray-50 rounded p-2">
                  <span className="bg-gray-200 rounded w-7 h-7 flex items-center justify-center font-bold text-gray-700">T</span>
                  <div>
                    <div className="text-xs text-gray-700 font-semibold">team-ekvvhxl</div>
                    <div className="text-xs text-gray-500">Go To Team</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            <button className="flex items-center gap-1 text-white px-2 py-1 rounded hover:bg-gray-800" onClick={() => setSearchOpen((v) => !v)}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              <span className="hidden md:inline text-sm">Search</span>
            </button>
            {searchOpen && (
              <div className="absolute right-0 mt-2 w-[350px] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-4">
                <div className="flex items-center gap-2 border rounded px-3 py-2 mb-2">
                  <svg width="18" height="18" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
                  <input className="flex-1 outline-none text-gray-900 bg-transparent" placeholder="Search apps, users, and marketplace" />
                </div>
                <div className="text-gray-400 text-center py-4">Start typing to search</div>
              </div>
            )}
          </div>
          {/* Discuss */}
          <button className="text-white px-2 py-1 rounded hover:bg-gray-800 text-sm">Discuss your needs</button>
          {/* Documentation */}
          <div className="relative">
            <button className={`text-white px-2 py-1 rounded hover:bg-gray-800 text-sm flex items-center gap-1 ${docOpen ? 'bg-gray-800' : ''}`} onClick={() => setDocOpen((v) => !v)}>
              Documentation
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </button>
            {docOpen && (
              <div className="absolute right-0 mt-2 w-[260px] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-2">
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-50 rounded">
                  <svg width="18" height="18" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
                  Documentation
                  <svg width="14" height="14" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
                <div className="border-t my-1" />
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-50 rounded">
                  <span className="text-xs">{'<>'}</span> Authentication API
                  <svg width="14" height="14" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-50 rounded">
                  <span className="text-xs">{'<>'}</span> Management API
                  <svg width="14" height="14" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
              </div>
            )}
          </div>
          {/* Notification */}
          <div className="relative">
            <button className="relative text-white px-2 py-1 rounded hover:bg-gray-800" onClick={() => setNotifOpen((v) => !v)}>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
              {mockNotifications.some(n => n.unread) && <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full" />}
            </button>
            {notifOpen && (
              <div className="absolute right-0 mt-2 w-[400px] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">Notifications</span>
                  <div className="flex gap-3 text-xs">
                    <a href="#" className="text-blue-600 hover:underline">View all</a>
                    <a href="#" className="text-blue-600 hover:underline">Mark all as read</a>
                  </div>
                </div>
                {mockNotifications.map(n => (
                  <div key={n.id} className="flex items-start gap-3 p-3 rounded hover:bg-gray-50">
                    <div className="mt-1"><span className="text-red-500"><svg width="18" height="18" fill="none" stroke="#e53e3e" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg></span></div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-1">{n.title} {n.unread && <span className="inline-block w-2 h-2 bg-blue-500 rounded-full ml-1 align-middle" />}</div>
                      <div className="text-gray-600 text-xs">{n.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Language Switcher */}
          <div className="relative">
            <button className={`text-white px-2 py-1 rounded hover:bg-gray-800 ${langOpen ? 'bg-gray-800' : ''}`} onClick={() => setLangOpen((v) => !v)}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10c0 4-1.5 8-4 8s-4-4-4-8a15.3 15.3 0 0 1 4-10z" /></svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-[200px] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-2">
                {mockLanguages.map(lang => (
                  <div key={lang.value} className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-50 rounded cursor-pointer">
                    <span>{lang.label}</span>
                    {lang.beta && <span className="ml-2 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">BETA</span>}
                    {lang.checked && <svg className="ml-auto" width="16" height="16" fill="none" stroke="#10B981" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* User Avatar */}
          <div className="relative">
            <button className="ml-2 flex items-center" onClick={() => setUserOpen((v) => !v)}>
              <img src={mockUser.avatar} alt="avatar" className="w-8 h-8 rounded-full border-2 border-gray-800 object-cover" />
            </button>
            {userOpen && (
              <div className="absolute right-0 mt-2 w-[320px] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-4">
                <div className="flex items-center gap-3 mb-4">
                  <img src={mockUser.avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-900">{mockUser.name}</div>
                    <div className="text-gray-500 text-sm">{mockUser.email}</div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm mb-1">Theme</label>
                  <div className="relative">
                    <select className="w-full border border-gray-200 rounded px-3 py-2 text-gray-900 bg-white">
                      <option>Light</option>
                      <option>Dark</option>
                    </select>
                  </div>
                </div>
                <div className="border-t my-2" />
                <div className="flex flex-col gap-2">
                  <button className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-50 text-gray-800">
                    <svg width="18" height="18" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                    Your profile
                  </button>
                  <button className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-50 text-gray-800">
                    <svg width="18" height="18" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7" /></svg>
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 