import React, { useState } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';

interface MenuItem {
  icon: JSX.Element;
  label: string;
  path: string;
  hasSubmenu?: boolean;
  badge?: string;
  submenuItems?: {
    label: string;
    path: string;
  }[];
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: 'Getting Started',
    path: '/dashboard',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Activity',
    path: '/dashboard/au/insights'
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    ),
    label: 'Applications',
    path: '/dashboard/applications',
    hasSubmenu: true,
    submenuItems: [
      {
        label: 'Applications',
        path: '/dashboard/applications'
      },
      {
        label: 'APIs',
        path: '/dashboard/au/dev/apis'
      },
      {
        label: 'SSO Integrations',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/externalapps'
      }
    ]
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    label: 'Authentication',
    path: '/dashboard/authentication',
    hasSubmenu: true,
    submenuItems: [
      {
        label: 'Database',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/connections/database',
      },
      {
        label: 'Social',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/connections/social',
      },
      {
        label: 'Enterprise',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/connections/enterprise',
      },
      {
        label: 'Passwordless',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/connections/passwordless',
      },
      {
        label: 'Authentication Profile',
        path: '/dashboard/authentication/profile',
      },
      {
        label: 'Organizations List',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/organizations/list',
      },
      {
        label: 'Create Organization',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/organizations/create',
      },
    ]
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: 'Organizations',
    path: '/dashboard/au/dev-1md8m8doz8ynfucb/organizations/list'
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    label: 'User Management',
    path: '/dashboard',
    hasSubmenu: true,
    submenuItems: [
      {
        label: 'Users',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/users',
      },
      {
        label: 'Roles',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/roles',
      },
    ]
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    label: 'Branding',
    path: '/dashboard/branding',
    hasSubmenu: true,
    children: [
      {
        label: 'Universal Login',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/universal-login/customizations/colors',
        icon: <svg width="16" height="16"><rect width="16" height="16" rx="3" fill="#6366f1" /></svg>,
      },
      {
        label: 'Custom Domains',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/custom_domains',
        icon: <svg width="16" height="16"><circle cx="8" cy="8" r="7" fill="#6366f1" /></svg>,
      },
      {
        label: 'Email Templates',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/templates',
        icon: <svg width="16" height="16"><rect width="16" height="12" y="2" rx="2" fill="#6366f1" /></svg>,
      },
      {
        label: 'Email Provider',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/templates/provider',
        icon: <svg width="16" height="16"><rect width="16" height="16" rx="3" fill="#6366f1" /></svg>,
      },
      {
        label: 'Phone Templates',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/phone/templates',
        icon: <svg width="16" height="16"><rect width="16" height="10" y="3" rx="2" fill="#6366f1" /></svg>,
      },
      {
        label: 'Phone Provider',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/phone/templates/phone/provider',
        icon: <svg width="16" height="16"><circle cx="8" cy="8" r="7" fill="#6366f1" /></svg>,
      },
    ]
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><g><rect x="2.5" y="2.5" width="5" height="5" rx="1.5" fill="#F3F4F6" stroke="#9CA3AF"/><rect x="12.5" y="2.5" width="5" height="5" rx="1.5" fill="#F3F4F6" stroke="#9CA3AF"/><rect x="2.5" y="12.5" width="5" height="5" rx="1.5" fill="#F3F4F6" stroke="#9CA3AF"/><rect x="7.5" y="7.5" width="5" height="5" rx="1.5" fill="#fff" stroke="#6366F1" strokeWidth="1.5"/><rect x="12.5" y="12.5" width="5" height="5" rx="1.5" fill="#F3F4F6" stroke="#9CA3AF"/></g></svg>
    ),
    label: 'Security',
    path: '/dashboard/security',
    hasSubmenu: true,
    children: [
      {
        label: 'Attack Protection',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/security/attack-protection',
        icon: <svg width="16" height="16"><rect width="16" height="16" rx="3" fill="#E5E7EB" /></svg>,
        hasSubmenu: true,
        children: [
          {
            label: 'Bot Detection',
            path: '/dashboard/au/dev-1md8m8doz8ynfucb/security/attack-protection/bot-detection',
            icon: <svg width="16" height="16"><rect width="16" height="16" rx="3" fill="#E5E7EB" /></svg>,
          },
          {
            label: 'Suspicious IP Throttling',
            path: '/dashboard/au/dev-1md8m8doz8ynfucb/security/attack-protection/suspicious-ip-throttling',
            icon: <svg width="16" height="16"><rect width="16" height="16" rx="3" fill="#E5E7EB" /></svg>,
          },
          {
            label: 'Brute-force Protection',
            path: '/dashboard/au/dev-1md8m8doz8ynfucb/security/attack-protection/brute-force-protection',
            icon: <svg width="16" height="16"><rect width="16" height="16" rx="3" fill="#E5E7EB" /></svg>,
          },
          {
            label: 'Breached Password Detection',
            path: '/dashboard/au/dev-1md8m8doz8ynfucb/security/attack-protection/breached-password-detection',
            icon: <svg width="16" height="16"><rect width="16" height="16" rx="3" fill="#E5E7EB" /></svg>,
          },
        ],
      },
      {
        label: 'Multi-factor Auth',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/security/mfa',
        icon: <svg width="16" height="16"><rect width="16" height="16" rx="3" fill="#E5E7EB" /></svg>,
      },
      {
        label: 'Monitoring',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/security/monitoring',
        icon: <svg width="16" height="16"><rect width="16" height="16" rx="3" fill="#E5E7EB" /></svg>,
      },
    ],
  },
  {
    label: 'Actions',
    path: '/dashboard/security/actions',
    hasSubmenu: true,
    icon: <svg width="16" height="16"><rect width="16" height="16" rx="3" fill="#E5E7EB" /></svg>,
    children: [
      {
        label: 'Triggers',
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/actions/triggers',
        icon: <svg width="16" height="16"><rect width="16" height="16" rx="3" fill="#E5E7EB" /></svg>,
      },
      {
        label: 'Forms',
        path: '/dashboard/security/actions/forms',
        icon: <svg width="16" height="16"><rect width="16" height="16" rx="3" fill="#E5E7EB" /></svg>,
      },
      {
        label: 'Library',
        icon: (
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#111827"/></svg>
        ),
        path: '/dashboard/au/dev-1md8m8doz8ynfucb/actions/library?tab=0',
      },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><g><rect x="2.5" y="2.5" width="5" height="5" rx="1.5" fill="#EEF2FF" stroke="#6366F1"/><rect x="12.5" y="2.5" width="5" height="5" rx="1.5" fill="#EEF2FF" stroke="#6366F1"/><rect x="2.5" y="12.5" width="5" height="5" rx="1.5" fill="#EEF2FF" stroke="#6366F1"/><rect x="7.5" y="7.5" width="5" height="5" rx="1.5" fill="#EEF2FF" stroke="#6366F1"/><rect x="12.5" y="12.5" width="5" height="5" rx="1.5" fill="#EEF2FF" stroke="#6366F1"/></g></svg>
    ),
    label: 'Event Streams',
    path: '/dashboard/au/dev-1md8m8doz8ynfucb/events/event-streams',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="7" y="13" width="2" height="5" rx="1" fill="#6366F1" />
        <rect x="11" y="9" width="2" height="9" rx="1" fill="#A5B4FC" />
        <rect x="15" y="6" width="2" height="12" rx="1" fill="#C7D2FE" />
      </svg>
    ),
    
    label: 'Monitoring',
    path: '/dashboard/monitoring',
    hasSubmenu: true,
    submenuItems: [
      { label: 'Logs', path: '/dashboard/au/dev-1md8m8doz8ynfucb/logs' },
      { label: 'Log Streams', path: '/dashboard/au/dev-1md8m8doz8ynfucb/log-streams' },
      { label: 'Action Logs', path: '/dashboard/au/dev-1md8m8doz8ynfucb/action-logs' },
    ]
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    label: 'Marketplace',
    path: '/dashboard/au/dev-1md8m8doz8ynfucb/marketplace'
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    label: 'Extensions',
    path: '/dashboard/au/dev-1md8m8doz8ynfucb/extensions/list'
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Settings',
    path: '/dashboard/au/dev-1md8m8doz8ynfucb/tenant/general'
  },
  
];

const DashboardSidebar = () => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <aside className="h-screen flex-none w-64 bg-white border-r border-gray-200 overflow-y-auto ">
      <div className="p-4">

        <nav>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm bg-white ${
                        location.pathname.startsWith(item.path)
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className={location.pathname.startsWith(item.path) ? 'text-blue-600' : 'text-gray-500'}>
                        {item.icon}
                      </span>
                      <span className="flex items-center gap-2">
                        {item.label}
                        {item.label === 'Event Streams' && (
                          <span className="ml-1 px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest" style={{letterSpacing:'0.05em'}}>EARLY</span>
                        )}
                      </span>
                      <svg 
                        className={`w-4 h-4 ml-auto transition-transform ${
                          openSubmenu === item.label ? 'transform rotate-90' : ''
                        } ${location.pathname.startsWith(item.path) ? 'text-blue-600' : 'text-gray-400'}`}
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {openSubmenu === item.label && item.children && (
                      <ul className="mt-1 ml-6 space-y-0.5">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              to={child.path}
                              className={`block px-2 py-1.5 rounded-md text-[15px] ml-2 transition-colors
                                ${location.pathname === child.path ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}
                              `}
                            >
                              <span>{child.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                    {openSubmenu === item.label && item.submenuItems && (
                      <ul className="mt-1 ml-4 space-y-1">
                        {item.submenuItems.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              to={subItem.path}
                              className={`flex items-center px-3 py-2 rounded-md text-sm bg-white ${
                                location.pathname === subItem.path
                                  ? 'text-blue-600'
                                  : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              <span>{subItem.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm bg-white ${
                      location.pathname === item.path
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className={location.pathname === item.path ? 'text-blue-600' : 'text-gray-500'}>
                      {item.icon}
                    </span>
                    <span className="flex items-center gap-2">
                      {item.label}
                      {item.label === 'Event Streams' && (
                        <span className="ml-1 px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs font-semibold tracking-widest" style={{letterSpacing:'0.05em'}}>EARLY</span>
                      )}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <Link
          to="/support"
          className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 bg-white"
        >
          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Get support</span>
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebar;