import React from 'react';

const features = [
  { label: 'Actions', href: '#' },
  { label: 'Social Connections', href: '#' },
  { label: 'Enterprise Connections', href: '#' },
  { label: 'SSO Integrations', href: '#' },
  { label: 'Log Streaming', href: '#' },
  { label: 'See All Integrations', href: '#' },
];
const categories = [
  'Consent Management', 'Security', 'IT & Business Applications', 'Communications', 'Decentralized Identity', 'SMS & MFA Providers', 'Fraud Prevention',
  'Identity Proofing', 'Developer Tools', 'Customer Success & Sales', 'Social Login', 'Deployment', 'Web3 and Blockchain',
];
const discover = [
  { img: 'https://placehold.co/320x160?text=Blog', title: 'Marketplace Integrations Blog Series', desc: 'Spotlight on a few recent additions to the marketplace' },
  { img: 'https://placehold.co/320x160?text=Identity+Proofing', title: 'Identity Proofing', desc: 'Verify identity using life history, biometrics, among other...' },
];
const staffPicks = [
  { logo: 'https://placehold.co/40x40?text=K', title: 'Klarna', category: 'SOCIAL CONNECTIONS', desc: 'Allow your users to Sign in with their Klarna account' },
  { logo: 'https://placehold.co/40x40?text=CA', title: 'Country-based Access control', category: 'ACTIONS', desc: 'Restrict access to users by country' },
  { logo: 'https://placehold.co/40x40?text=DG', title: 'DataGuard', category: 'ACTIONS', desc: 'Capture, retain and grow consent for GDPR compliance' },
  { logo: 'https://placehold.co/40x40?text=ID', title: 'ID DataWeb Verification', category: 'ACTIONS', desc: 'Real time & self service global identity verification' },
  { logo: 'https://placehold.co/40x40?text=LN', title: 'LexisNexis', category: 'ACTIONS', desc: 'Confidently recognize genuine users, detect fraud' },
  { logo: 'https://placehold.co/40x40?text=OT', title: 'OneTrust', category: 'ACTIONS', desc: 'Enhance user profiles with consent and communication preferences' },
];

const Marketplace: React.FC = () => {
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Marketplace</h1>
        <div className="text-gray-500 text-lg mb-8">Explore integrations that help your business do more with Auth0.</div>
        <div className="mb-10">
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white max-w-3xl">
            <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            <input className="flex-1 bg-transparent outline-none text-lg text-gray-900" placeholder="Search Auth0 Marketplace..." />
          </div>
        </div>
        <div className="bg-white border rounded-xl p-8 mb-12">
          <div className="font-semibold text-2xl mb-6">Browse by</div>
          <div className="flex flex-wrap gap-12">
            <div>
              <div className="text-xs text-gray-500 font-semibold mb-2">FEATURES</div>
              <div className="flex flex-col gap-1">
                {features.map(f => (
                  <a key={f.label} href={f.href} className="text-blue-700 hover:underline text-base font-medium">{f.label}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 font-semibold mb-2">CATEGORIES</div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                {categories.map(c => (
                  <a key={c} href="#" className="text-blue-700 hover:underline text-base font-medium">{c}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="font-semibold text-2xl mb-6">Discover</div>
          <div className="grid grid-cols-2 gap-8 mb-8">
            {discover.map(d => (
              <div key={d.title} className="rounded-xl border bg-white overflow-hidden shadow-sm">
                <img src={d.img} alt={d.title} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <div className="font-semibold text-lg text-gray-900 mb-1">{d.title}</div>
                  <div className="text-gray-500 text-base">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="font-semibold text-2xl">Staff Picks</div>
            <a href="#" className="text-blue-700 hover:underline font-medium flex items-center">See all <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {staffPicks.map(s => (
              <div key={s.title} className="rounded-xl border bg-white p-5 flex gap-4 items-start">
                <img src={s.logo} alt={s.title} className="w-10 h-10 rounded" />
                <div>
                  <div className="font-semibold text-base text-gray-900 mb-0.5">{s.title}</div>
                  <div className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-widest">{s.category}</div>
                  <div className="text-gray-500 text-sm">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-8">
          <a href="#" className="hover:underline">Marketplace Terms of Use</a>
        </div>
      </div>
    </div>
  );
};

export default Marketplace; 