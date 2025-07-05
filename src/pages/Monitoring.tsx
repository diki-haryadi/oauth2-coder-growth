import React, { useState } from 'react';

const SETUP_GUIDES = [
  {
    key: 'datadog',
    icon: <img src="https://cdn.auth0.com/manhattan/versions/1.6250.0/assets/security/monitoring.svg" alt="Datadog" className="w-10 h-10" />, // Replace with actual Datadog icon if available
    label: 'Datadog',
    desc: 'Improve your security posture with out-of-the-box threat detection rules.',
    steps: [
      {
        icon: <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/></svg>,
        title: 'Integrate Your Logs',
        desc: 'You can access pre-built security monitoring dashboards when you integrate your Auth0 logs with Datadog.',
        link: { label: 'Configure Log Stream', href: '#' },
      },
      {
        icon: <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/></svg>,
        title: 'Install Dashboard',
        desc: 'After you integrate your Auth0 logs with Datadog, learn how to access and set up your pre-built dashboard.',
        link: { label: 'Installation Instructions', href: '#' },
      },
      {
        icon: <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/></svg>,
        title: 'Customize Dashboard',
        desc: 'Learn how to spot trending issues and detect anomalies using your Auth0 log data with custom visualizations.',
        link: { label: 'View Guide', href: '#' },
      },
    ],
  },
  {
    key: 'splunk',
    icon: <svg width="40" height="40" viewBox="0 0 40 40"><text x="0" y="30" fontSize="32" fill="#6DB33F">&gt;</text></svg>,
    label: 'Splunk',
    desc: 'Implement security visualizations across a wide array of data sources.',
    steps: [
      {
        icon: <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/></svg>,
        title: 'Integrate Your Logs',
        desc: 'You can access pre-built security monitoring dashboards when you integrate your Auth0 logs with Splunk.',
        link: { label: 'Configure Log Stream', href: '#' },
      },
      {
        icon: <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/></svg>,
        title: 'Install Dashboard',
        desc: 'After you integrate your Auth0 logs with Splunk, learn how to access and set up your pre-built dashboard.',
        link: { label: 'Installation Instructions', href: '#' },
      },
      {
        icon: <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/></svg>,
        title: 'Customize Dashboard',
        desc: 'Learn how to spot trending issues and detect anomalies using your Auth0 log data with custom visualizations.',
        link: { label: 'View Guide', href: '#' },
      },
    ],
  },
  {
    key: 'sumologic',
    icon: <span className="font-bold text-blue-900 text-2xl">su<br />mo</span>,
    label: 'Sumo Logic',
    desc: 'Visualize your logs and detect threats faster with security insights.',
    steps: [
      {
        icon: <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/></svg>,
        title: 'Integrate Your Logs',
        desc: 'You can access pre-built security monitoring dashboards when you integrate with Sumo Logic.',
        link: { label: 'Configure Log Stream', href: '#' },
      },
      {
        icon: <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/></svg>,
        title: 'Install Dashboard',
        desc: 'Once your Auth0 logs are integrated with Sumo Logic, learn how to access and set up your dashboard.',
        link: { label: 'Installation Instruction', href: '#' },
      },
      {
        icon: <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#F3F4F6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff" stroke="#111827" strokeWidth="1.5"/></svg>,
        title: 'Customize Dashboard',
        desc: 'Learn how to create your own custom data visualization widgets in your dashboard.',
        link: { label: 'View Guide', href: '#' },
      },
    ],
  },
];

export default function Monitoring() {
  const [open, setOpen] = useState('');
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Monitoring</h1>
        <div className="text-gray-600 mb-8 text-lg">Monitor threat intelligence events with one of our data visualization and alerting integrations.</div>
        {/* Real-time Detection Card */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl p-8 flex items-center gap-8 mb-10 relative overflow-hidden shadow-lg">
          <div className="flex-1 z-10">
            <div className="text-white text-2xl font-semibold mb-2">Real-time Detection</div>
            <div className="text-white text-base mb-4">Use your existing security analytics tools to analyze Auth0 log event data and enable real-time threat detection monitoring.</div>
            <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-md text-base shadow hover:bg-blue-50 transition flex items-center gap-2">Learn More <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          </div>
          <div className="flex-1 flex justify-end z-10">
            <img src="https://cdn.auth0.com/manhattan/versions/1.6250.0/assets/security/monitoring.svg" alt="Monitoring" className="w-72 h-32 object-contain" />
          </div>
          <div className="absolute inset-0 z-0" style={{background: 'repeating-linear-gradient(120deg, rgba(255,255,255,0.05) 0 8px, transparent 8px 24px)'}}></div>
        </div>
        {/* Setup Guides */}
        <div>
          <h2 className="font-semibold text-xl mb-4">Setup Guides</h2>
          <div className="flex flex-col gap-6">
            {SETUP_GUIDES.map((guide) => (
              <div key={guide.key} className={`bg-white border border-gray-200 rounded-xl shadow-sm transition-all ${open === guide.key ? 'ring-2 ring-blue-600' : ''}`}>
                <button
                  className="flex items-center bg-white w-full px-6 py-5 text-left gap-4"
                  onClick={() => setOpen(open === guide.key ? '' : guide.key)}
                >
                  <span>{guide.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-lg flex items-center gap-2">{guide.label}</div>
                    <div className="text-gray-500 text-sm">{guide.desc}</div>
                  </div>
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className={`text-gray-400 transition-transform ${open === guide.key ? 'rotate-180' : ''}`}><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                {open === guide.key && (
                  <div className="border-t border-gray-100 bg-white px-6 py-5 flex flex-col md:flex-row gap-4 bg-gray-50">
                    {guide.steps.map((step) => (
                      <div key={step.title} className="flex-1 bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-2 min-w-[220px]">
                        <div className="flex items-center gap-2 font-semibold mb-1">{step.icon}{step.title}</div>
                        <div className="text-gray-500 text-sm mb-2">{step.desc}</div>
                        <a href={step.link.href} className="text-blue-700 font-medium flex items-center gap-1 hover:underline">{step.link.label} <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 