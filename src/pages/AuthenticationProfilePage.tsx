import React, { useState, useRef } from 'react';

const flows = [
  {
    key: 'identifier-password',
    label: 'Identifier + Password',
    desc: 'A single login screen prompts users for their user identifier and their password. This is the default experience.',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 12h8M8 16h8"/></svg>
    ),
    preview: 'identifier-password',
  },
  {
    key: 'identifier-first',
    label: 'Identifier First',
    desc: 'An initial login screen prompts users for their user identifier, then a different screen prompts users for their password.',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/></svg>
    ),
    preview: 'identifier-first',
  },
  {
    key: 'identifier-biometrics',
    label: 'Identifier First + Biometrics',
    desc: 'When possible, users will be able to choose to sign-in using face or fingerprint recognition instead of a password.',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
    ),
    badge: 'ENTERPRISE',
    preview: 'identifier-biometrics',
  },
];

const flowPreviews = {
  'identifier-password': (
    <g>
      {/* Login card */}
      <rect x="60" y="60" width="180" height="220" rx="20" fill="#fff" stroke="#D1D5DB" strokeWidth="2" />
      <rect x="110" y="110" width="80" height="20" rx="6" fill="#F3F4F6" />
      <rect x="90" y="150" width="120" height="36" rx="8" fill="#F3F4F6" />
      <rect x="90" y="200" width="120" height="36" rx="8" fill="#F3F4F6" />
      <rect x="110" y="250" width="80" height="32" rx="8" fill="#3B82F6" />
      {/* MFA node */}
      <rect x="300" y="120" width="160" height="60" rx="12" fill="#18181B" />
      <text x="380" y="150" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">Multi-factor Auth</text>
      {/* Arrow */}
      <line x1="240" y1="170" x2="300" y2="150" stroke="#A1A1AA" strokeWidth="2" markerEnd="url(#arrow)" />
      {/* Check */}
      <circle cx="500" cy="150" r="24" fill="#22C55E" />
      <path d="M490 150l8 8 14-14" stroke="#fff" strokeWidth="3" fill="none" />
      <line x1="460" y1="150" x2="476" y2="150" stroke="#A1A1AA" strokeWidth="2" markerEnd="url(#arrow)" />
    </g>
  ),
  'identifier-first': (
    <g>
      {/* Identifier card */}
      <rect x="60" y="60" width="180" height="100" rx="20" fill="#fff" stroke="#D1D5DB" strokeWidth="2" />
      <rect x="110" y="110" width="80" height="20" rx="6" fill="#F3F4F6" />
      <rect x="90" y="150" width="120" height="36" rx="8" fill="#F3F4F6" />
      {/* Password card */}
      <rect x="260" y="60" width="180" height="100" rx="20" fill="#fff" stroke="#D1D5DB" strokeWidth="2" />
      <rect x="310" y="110" width="80" height="20" rx="6" fill="#F3F4F6" />
      <rect x="290" y="150" width="120" height="36" rx="8" fill="#F3F4F6" />
      {/* MFA node */}
      <rect x="480" y="80" width="160" height="60" rx="12" fill="#18181B" />
      <text x="560" y="110" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">Multi-factor Auth</text>
      {/* Arrows */}
      <line x1="240" y1="110" x2="260" y2="110" stroke="#A1A1AA" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="440" y1="110" x2="480" y2="110" stroke="#A1A1AA" strokeWidth="2" markerEnd="url(#arrow)" />
      {/* Check */}
      <circle cx="680" cy="110" r="24" fill="#22C55E" />
      <path d="M670 110l8 8 14-14" stroke="#fff" strokeWidth="3" fill="none" />
      <line x1="640" y1="110" x2="656" y2="110" stroke="#A1A1AA" strokeWidth="2" markerEnd="url(#arrow)" />
    </g>
  ),
  'identifier-biometrics': (
    <g>
      {/* Identifier card */}
      <rect x="60" y="60" width="180" height="100" rx="20" fill="#fff" stroke="#D1D5DB" strokeWidth="2" />
      <rect x="110" y="110" width="80" height="20" rx="6" fill="#F3F4F6" />
      <rect x="90" y="150" width="120" height="36" rx="8" fill="#F3F4F6" />
      {/* Biometrics card */}
      <rect x="260" y="60" width="180" height="100" rx="20" fill="#fff" stroke="#D1D5DB" strokeWidth="2" />
      <rect x="310" y="110" width="80" height="20" rx="6" fill="#F3F4F6" />
      <rect x="290" y="150" width="120" height="36" rx="8" fill="#F3F4F6" />
      {/* Password card */}
      <rect x="460" y="60" width="180" height="100" rx="20" fill="#fff" stroke="#D1D5DB" strokeWidth="2" />
      <rect x="510" y="110" width="80" height="20" rx="6" fill="#F3F4F6" />
      <rect x="490" y="150" width="120" height="36" rx="8" fill="#F3F4F6" />
      {/* MFA node */}
      <rect x="680" y="80" width="160" height="60" rx="12" fill="#18181B" />
      <text x="760" y="110" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">Multi-factor Auth</text>
      {/* Arrows */}
      <line x1="240" y1="110" x2="260" y2="110" stroke="#A1A1AA" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="440" y1="110" x2="460" y2="110" stroke="#A1A1AA" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="640" y1="110" x2="680" y2="110" stroke="#A1A1AA" strokeWidth="2" markerEnd="url(#arrow)" />
      {/* Check */}
      <circle cx="880" cy="110" r="24" fill="#22C55E" />
      <path d="M870 110l8 8 14-14" stroke="#fff" strokeWidth="3" fill="none" />
      <line x1="840" y1="110" x2="856" y2="110" stroke="#A1A1AA" strokeWidth="2" markerEnd="url(#arrow)" />
    </g>
  ),
};

export default function AuthenticationProfilePage() {
  const [selected, setSelected] = useState('identifier-password');
  const [zoom, setZoom] = useState(1);
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="w-full">
        <div className="flex justify-between items-center px-8 md:px-12 pt-10 pb-4 w-full">
          <h1 className="text-3xl font-bold">Authentication Profile</h1>
          <div className="flex gap-2 items-center">
            <button className="bg-white border border-gray-200 rounded px-4 py-2 text-gray-700 font-medium hover:bg-gray-100">Try</button>
            <button className="bg-blue-600 text-white rounded px-4 py-2 font-medium hover:bg-blue-700">Save</button>
          </div>
        </div>
        <div className="flex px-0 md:px-8 pb-12 gap-8 w-full">
          {/* Left panel */}
          <div className="w-[380px] flex-shrink-0">
            <div className="mb-6">
              <div className="text-lg font-semibold mb-2">Choose your login flow</div>
              <div className="text-gray-600 mb-3">Configure how users will log in to your applications.</div>
              <div className="bg-blue-50 border border-blue-200 text-blue-900 px-4 py-3 rounded mb-4 text-sm">
                <div className="font-semibold mb-1">Identifier First must be selected to use:</div>
                <ul className="list-disc ml-5">
                  <li>Passkeys as an authentication method <a href="#" className="text-blue-600 underline">Learn more about passkeys</a>.</li>
                  <li>Phone verification on signup.</li>
                  <li>Email OTP verification on signup.</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {flows.map(flow => (
                <div
                  key={flow.key}
                  className={`rounded-xl border px-4 py-4 flex items-start gap-4 cursor-pointer transition shadow-sm ${selected === flow.key ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-100' : 'border-gray-200 bg-white hover:bg-gray-50'}`}
                  onClick={() => setSelected(flow.key)}
                >
                  <div className="mt-1">{flow.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-900 flex items-center gap-2">{flow.label} {flow.badge && <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded ml-2">{flow.badge}</span>}</div>
                    <div className="text-gray-600 text-sm mt-1">{flow.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right panel: Canvas preview */}
          <div className="flex-1 flex flex-col items-center min-w-0">
            <div className="flex justify-end w-full mb-2 gap-2">
              <button className="bg-white border border-gray-200 rounded p-2 hover:bg-gray-100" onClick={() => setZoom(z => Math.max(0.5, z - 0.2))} title="Zoom out">-</button>
              <button className="bg-white border border-gray-200 rounded p-2 hover:bg-gray-100" onClick={() => setZoom(z => Math.min(2, z + 0.2))} title="Zoom in">+</button>
              <button className="bg-white border border-gray-200 rounded p-2 hover:bg-gray-100" onClick={() => setZoom(1)} title="Reset zoom">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
              </button>
            </div>
            <div className="bg-[#23242a] rounded-2xl shadow-lg p-6 w-full flex justify-center items-center min-h-[420px] overflow-auto">
              <svg
                ref={svgRef}
                width={1000}
                height={350}
                style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s' }}
                viewBox="0 0 1000 350"
              >
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L10,5 L0,10" fill="#A1A1AA" />
                  </marker>
                </defs>
                {flowPreviews[flows.find(f => f.key === selected)?.preview || 'identifier-password']}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 