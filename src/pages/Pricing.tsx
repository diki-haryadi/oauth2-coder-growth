import React from 'react';
import PricingFilter from '../components/PricingFilter';
import LogoSlider from '../components/LogoSlider';
import EnterpriseAddons from '../components/EnterpriseAddons';
import FineGrainedAuthSection from '../components/FineGrainedAuthSection';
import SpecialPlansSection from '../components/SpecialPlansSection';
import FAQSection from '../components/FAQSection';

const AddOnBadge = () => (
  <span className="text-xs font-medium bg-[#1A1B26] text-white px-2 py-1 rounded ml-2 border border-gray-700">
    ADD-ON
  </span>
);

const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#0A1122] overflow-x-hidden">
      <div className="pt-32 pb-16">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h1 className="text-6xl font-bold text-white mb-4">
            Flexible pricing for{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              developers
            </span>
            {' '}&{' '}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
              companies
            </span>
          </h1>

          {/* Pricing Filter */}
          <PricingFilter />
        </div>

        {/* Pricing Table */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Plan */}
            <div className="bg-gradient-to-b from-[#1A2233] to-[#0A1122] rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
              <p className="text-gray-400 text-sm mb-4">No credit card needed to sign up.</p>
              
              <button className="w-full py-2 px-4 bg-white hover:bg-gray-100 text-black rounded-lg font-medium transition-all mb-8">
                Start building for free
              </button>

              <div className="text-sm text-gray-400 mb-6">
                Up to 25,000 monthly active users will have:
              </div>

              <ul className="space-y-4">
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Any type of application</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Use your own Custom Domain</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Passwordless with SMS, e-mail, Passkey, and OTP</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited Social Connections</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>5 Organizations (How we model your customers)</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SSO for all your customers using Okta</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Branded forms and custom logic during login, signup, etc. (Actions)</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic Attack Protection</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community Support</span>
                </li>
              </ul>

              <div className="mt-6 text-xs text-gray-500">
                *credit card verification required for custom domains
              </div>
            </div>

            {/* Essentials Plan */}
            <div className="bg-[#0A1122] rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">Essentials</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold text-white">$35</span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">For projects with higher production demands.</p>
              
              <button className="w-full py-2 px-4 border border-gray-600 text-white rounded-lg font-medium hover:bg-white/5 transition-all mb-8">
                Sign up
              </button>

              <div className="text-sm text-gray-400 mb-6">
                Up to 500 monthly active users will have:
              </div>

              <ul className="space-y-4">
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Free, plus...</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Higher Auth, API limits, and Feature limits</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-Factor Authentication (With OTP, Duo)</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Role-based Access Control Per Organization</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>10 Organizations (How we model your customers)</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Stream Auth0 Audit Logs to Datadog, Splunk, AWS, Azure, etc.</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Separate Production & Development Environments</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Standard Support</span>
                </li>
              </ul>
            </div>

            {/* Professional Plan */}
            <div className="bg-[#0A1122] rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold text-white">$240</span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">Best for teams and projects that need added security.</p>
              
              <button className="w-full py-2 px-4 border border-gray-600 text-white rounded-lg font-medium hover:bg-white/5 transition-all mb-8">
                Sign up
              </button>

              <div className="text-sm text-gray-400 mb-6">
                Up to 1,000 monthly active users will have:
              </div>

              <ul className="space-y-4">
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Essentials, plus...</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Use your existing User Database for Logins</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-Factor Authentication (With Phone, Email, WebAuthn, Push via Guardian app)</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>10 Organizations (How we model your customers)</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enhanced Attack Protection</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm group">
                  <span className="flex-1">M2M Tokens</span>
                  <AddOnBadge />
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#0A1122] rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 text-sm mb-10">For enterprises that need to scale. Top-tier SLAs, advanced security, white-glove support and more.</p>
              
              <button className="w-full py-2 px-4 border border-gray-600 text-white rounded-lg font-medium hover:bg-white/5 transition-all mb-8">
                Contact us
              </button>

              <div className="text-sm text-gray-400 mb-6">
                Enterprise users will have:
              </div>

              <ul className="space-y-4">
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Professional plus...</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom User & SSO Tiers</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>99.99% SLA</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enterprise Rate Limits</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm">
                  <svg className="w-5 h-5 text-[#635DFF] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enterprise Administration & Support</span>
                </li>
                <li className="flex items-start text-gray-300 text-sm group">
                  <span className="flex-1">Advanced Security Features</span>
                  <AddOnBadge />
                </li>
                <li className="flex items-start text-gray-300 text-sm group">
                  <span className="flex-1">Private Deployment</span>
                  <AddOnBadge />
                </li>
              </ul>
            </div>
          </div>

          {/* Special Pricing Links */}
          <div className="text-center mt-16 text-gray-400">
            Explore special pricing for{' '}
            <a href="#" className="text-[#635DFF] hover:text-[#8983FF]">startups</a>
            {' '}and{' '}
            <a href="#" className="text-[#635DFF] hover:text-[#8983FF]">nonprofits</a>
          </div>
        </div>
      </div>

      {/* Customer Logos Section */}
      <LogoSlider />

      <EnterpriseAddons />

      <FineGrainedAuthSection />

      <SpecialPlansSection />

      <FAQSection />
    </div>
  );
};

export default Pricing; 