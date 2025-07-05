import React from 'react';

const FACTORS = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><path d="M8 12l2 2 4-4" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    label: 'WebAuthn with FIDO Security Keys',
    badge: 'ENTERPRISE MFA',
    desc: 'Use WebAuthn-compliant security keys',
    status: 'Disabled',
    toggle: false,
    arrow: true,
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><path d="M12 8a4 4 0 100 8 4 4 0 000-8z" stroke="#111827" strokeWidth="2"/></svg>
    ),
    label: 'WebAuthn with FIDO Device Biometrics',
    badge: 'ENTERPRISE MFA',
    desc: 'Use WebAuthn-compliant device biometrics',
    status: 'Disabled',
    toggle: false,
    arrow: true,
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><path d="M12 8v4l3 3" stroke="#111827" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    label: 'One-time Password',
    badge: 'PRO MFA',
    desc: 'Provide a one-time password using Google Authenticator or similar.',
    status: 'Disabled',
    toggle: true,
    arrow: false,
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/></svg>
    ),
    label: 'Push Notification using Auth0 Guardian',
    badge: 'ENTERPRISE MFA',
    desc: 'Provide a push notification using the Auth0 Guardian app or SDK.',
    status: 'Disabled',
    toggle: false,
    arrow: true,
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><path d="M8 12h8M8 16h8" stroke="#111827" strokeWidth="2"/></svg>
    ),
    label: 'Phone Message',
    badge: 'ENTERPRISE MFA',
    desc: 'Users will receive a text message or voice call containing a verification code.',
    status: 'Disabled',
    toggle: false,
    arrow: true,
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><path d="M8 12h8" stroke="#111827" strokeWidth="2"/></svg>
    ),
    label: 'Email',
    badge: 'ENTERPRISE MFA',
    desc: 'Users will receive an email message containing a verification code.',
    status: 'Disabled',
    toggle: true,
    arrow: false,
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#F3F4F6"/><circle cx="12" cy="12" r="4" stroke="#111827" strokeWidth="2"/></svg>
    ),
    label: 'Recovery Code',
    badge: 'PRO MFA',
    desc: 'Provide a unique code that allows users to regain access to their account.',
    status: 'Disabled',
    toggle: true,
    arrow: false,
  },
  {
    icon: (
      <img src="https://cdn.auth0.com/manhattan/versions/1.6249.0/assets/logos/duo/duo-avatar.png" alt="Duo" className="w-8 h-8 rounded" />
    ),
    label: 'DUO Security',
    badge: 'PRO MFA',
    desc: 'Use your DUO account for Multi-factor Authentication.',
    status: 'Disabled',
    toggle: false,
    arrow: true,
  },
];

export default function MultiFactorAuth() {
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Multi-factor Authentication</h1>
        <div className="text-gray-600 mb-8 text-lg">Multi-factor Authentication works by requiring additional factors during the login process to prevent unauthorized access.</div>
        {/* Step 1: Factors */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 font-bold text-lg">1</span>
            <span className="font-semibold text-lg">Factors</span>
            <span className="text-gray-500 ml-2">Utilize push, SMS, email, one-time password, or a combination of different methods and easily enable them across all users and applications.</span>
          </div>
          <div className="flex flex-col gap-4">
            {FACTORS.map((f, i) => (
              <div key={f.label} className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-6 py-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <span>{f.icon}</span>
                  <div>
                    <div className="font-semibold text-base flex items-center gap-2">{f.label} {f.badge && <span className="ml-2 bg-gray-100 text-gray-700 font-semibold px-2 py-0.5 rounded text-xs">{f.badge}</span>}</div>
                    <div className="text-gray-500 text-sm">{f.desc}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-gray-700 font-medium"><span className="w-2 h-2 rounded-full bg-gray-400 inline-block"></span>Disabled</span>
                  {f.toggle && <span className="ml-2 inline-flex items-center"><span className="w-10 h-6 rounded-full bg-gray-200 relative"><span className="inline-block w-5 h-5 bg-gray-400 rounded-full absolute left-0.5 top-0.5 shadow" /></span></span>}
                  {f.arrow && <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-gray-400"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Step 2: Define policies */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 font-bold text-lg">2</span>
            <span className="font-semibold text-lg">Define policies</span>
            <span className="text-gray-500 ml-2">Policies determine when a user will be prompted to complete additional steps to prove they own a particular account. Use policies to define your level of acceptable risk. You can achieve more refined multi-factor configurations (ex. per application, per user, etc.) by using Actions. <a href="#" className="text-blue-700 underline">Learn More</a></span>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-8 mb-6">
            <div>
              <div className="font-semibold mb-1">Require Multi-factor Auth</div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <div className="border-2 border-blue-600 rounded-lg p-4 cursor-pointer">
                    <div className="font-semibold">Never</div>
                    <div className="text-gray-500 text-sm">Users are not required to use an additional factor to login.</div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 cursor-pointer flex flex-col gap-1">
                    <div className="flex items-center gap-2 font-semibold">Use Adaptive MFA <span className="ml-2 bg-gray-100 text-gray-700 font-semibold px-2 py-0.5 rounded text-xs">ADD-ON</span></div>
                    <div className="text-gray-500 text-sm">Users are required to have an additional factor if the login appears to be a high risk.<a href="#" className="text-blue-700 underline ml-1">Contact Sales.</a></div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 cursor-pointer">
                    <div className="font-semibold">Always</div>
                    <div className="text-gray-500 text-sm">Users are always required to use an additional factor to log in.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="font-semibold mb-1">MFA Risk Assessors</div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">Enable Adaptive MFA Risk Assessment</span>
                  <span className="ml-2 bg-gray-100 text-gray-700 font-semibold px-2 py-0.5 rounded text-xs">ADD-ON</span>
                  <span className="ml-auto inline-flex items-center"><span className="w-8 h-5 bg-gray-200 rounded-full relative"><span className="inline-block w-4 h-4 bg-gray-400 rounded-full absolute left-0.5 top-0.5 shadow" /></span></span>
                </div>
                <div className="text-gray-500 text-sm mb-2">Risk will be assessed and recorded for all login transactions in your tenant logs. Adaptive MFA Risk Assessment is required for enabling the Adaptive MFA policy, but can also be used to implement custom MFA policies using Actions. <a href="#" className="text-blue-700 underline">Go to Actions.</a></div>
                <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 rounded-lg px-4 py-3 mt-2 text-sm">
                  <div className="font-semibold mb-1">Adaptive MFA requires specific Database Connection settings before it is compatible with phone as an identifier. <a href="#" className="text-blue-700 underline">Learn more about the limitations</a></div>
                  <ul className="list-disc ml-6">
                    <li>Email as an Identifier is on</li>
                    <li>Allow Signup with Email is required</li>
                    <li>Verify Email on Sign Up is on</li>
                    <li>Require Email on User Profile is on</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 justify-end mt-2">
            <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
            <button className="bg-white border border-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-md text-base">Cancel</button>
          </div>
        </div>
        {/* Additional Settings */}
        <div className="mb-10">
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="font-semibold mb-1">Additional Settings</div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Show Multi-factor Authentication options</span>
                <span className="ml-auto inline-flex items-center"><span className="w-8 h-5 bg-gray-200 rounded-full relative"><span className="inline-block w-4 h-4 bg-gray-400 rounded-full absolute left-0.5 top-0.5 shadow" /></span></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Customize MFA Factors using Actions</span>
                <span className="ml-auto inline-flex items-center"><span className="w-8 h-5 bg-gray-200 rounded-full relative"><span className="inline-block w-4 h-4 bg-gray-400 rounded-full absolute left-0.5 top-0.5 shadow" /></span></span>
                <a href="#" className="text-blue-700 underline ml-2">Learn more.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 