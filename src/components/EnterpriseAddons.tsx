import React from 'react';

interface AddonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  darkBg?: boolean;
}

const AddonCard = ({ icon, title, description, darkBg = false }: AddonCardProps) => (
  <div className={`rounded-2xl p-8 ${darkBg ? 'bg-[#1A2233]' : 'bg-[#1A1B26]'}`}>
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-400 text-sm mb-4">{description}</p>
    <a href="#" className="text-[#635DFF] hover:text-[#8983FF] text-sm font-medium">
      Read the docs
    </a>
  </div>
);

const EnterpriseAddons = () => {
  return (
    <div className="w-full bg-[#0A1122] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Enterprise add-ons to fit your needs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fine-Grained Authorization */}
          <AddonCard
            icon={
              <svg className="w-12 h-12 text-[#635DFF]" viewBox="0 0 48 48" fill="none">
                <path d="M24 12C24 7.58172 27.5817 4 32 4C36.4183 4 40 7.58172 40 12C40 16.4183 36.4183 20 32 20H24V12Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M24 36C24 31.5817 27.5817 28 32 28C36.4183 28 40 31.5817 40 36C40 40.4183 36.4183 44 32 44C27.5817 44 24 40.4183 24 36Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M24 20C24 24.4183 20.4183 28 16 28C11.5817 28 8 24.4183 8 20C8 15.5817 11.5817 12 16 12C20.4183 12 24 15.5817 24 20Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            }
            title="Fine-Grained Authorization"
            description="A highly scalable authorization service for developers that helps them implement authorization for any kind of application, and enable user collaboration and granular access control using easy-to-use APIs. Available in Public Cloud and Private Cloud AWS."
          />

          {/* Attack Protection */}
          <AddonCard
            icon={
              <svg className="w-12 h-12 text-[#635DFF]" viewBox="0 0 48 48" fill="none">
                <path d="M24 4L4 12V22C4 32.9 12.1 43.1 24 46C35.9 43.1 44 32.9 44 22V12L24 4Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 23L22 29L32 19" stroke="currentColor" strokeWidth="2"/>
              </svg>
            }
            title="Attack Protection"
            description="Keep your users and services safe from password leaks, intruders, and scripted attacks from bots. Protect and notify your users when credentials are leaked or during an attempted account takeover."
            darkBg
          />

          {/* Private Cloud */}
          <AddonCard
            icon={
              <svg className="w-12 h-12 text-[#635DFF]" viewBox="0 0 48 48" fill="none">
                <path d="M12 20C7.58172 20 4 23.5817 4 28C4 32.4183 7.58172 36 12 36H36C40.4183 36 44 32.4183 44 28C44 23.5817 40.4183 20 36 20C36 13.3726 30.6274 8 24 8C17.3726 8 12 13.3726 12 20Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            }
            title="Private Cloud"
            description="A low-friction, dedicated Auth0 deployment model for enhanced performance, security, and compliance over our standard public cloud offering."
          />

          {/* Adaptive MFA */}
          <AddonCard
            icon={
              <svg className="w-12 h-12 text-[#635DFF]" viewBox="0 0 48 48" fill="none">
                <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M24 12V24L32 28" stroke="currentColor" strokeWidth="2"/>
              </svg>
            }
            title="Adaptive MFA"
            description="Protect against malicious attacks with minimal impact to your users. Adaptive MFA is designed to only be triggered when a login is suspected to be risky via different risk profiles."
            darkBg
          />

          {/* Machine to Machine Tokens */}
          <AddonCard
            icon={
              <svg className="w-12 h-12 text-[#635DFF]" viewBox="0 0 48 48" fill="none">
                <path d="M8 12H40V36H8V12Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 20H32M16 28H24" stroke="currentColor" strokeWidth="2"/>
              </svg>
            }
            title="Machine to Machine Tokens"
            description="Easily facilitate secure communication between your API and both non interactive external clients as well as internal APIs with the flip of a switch and standard based protocols. M2M add-ons are also available on Professional self-service plans."
          />

          {/* Highly Regulated Identity */}
          <AddonCard
            icon={
              <svg className="w-12 h-12 text-[#635DFF]" viewBox="0 0 48 48" fill="none">
                <path d="M24 4L4 12V22C4 32.9 12.1 43.1 24 46C35.9 43.1 44 32.9 44 22V12L24 4Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 24H32M16 32H28" stroke="currentColor" strokeWidth="2"/>
              </svg>
            }
            title="Highly Regulated Identity"
            description="Secure sensitive customer operations beyond login with Financial Grade IdentityTM controls (Strong Customer Authentication, FAPI protocols) and Customer Managed Keys."
            darkBg
          />

          {/* Advanced Extensibility */}
          <AddonCard
            icon={
              <svg className="w-12 h-12 text-[#635DFF]" viewBox="0 0 48 48" fill="none">
                <path d="M24 4V44M4 24H44" stroke="currentColor" strokeWidth="2"/>
                <circle cx="24" cy="24" r="4" fill="currentColor"/>
              </svg>
            }
            title="Advanced Extensibility"
            description="Unlock deep customization to meet your unique needs for Customer Identity. With Actions, Forms, and Auth0 Marketplace, leverage the maximum number of Actions and Forms (within platform performance limits) to customize and extend identity with both pro- and no-code solutions."
          />

          {/* HIPAA BAA & PCI */}
          <AddonCard
            icon={
              <svg className="w-12 h-12 text-[#635DFF]" viewBox="0 0 48 48" fill="none">
                <path d="M24 4V44M4 24H44" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 16L32 32M32 16L16 32" stroke="currentColor" strokeWidth="2"/>
              </svg>
            }
            title="HIPAA BAA & PCI"
            description="Auth0 can provide compliance for several standards including HIPAA via a Business Associate Agreement and PCI compliant environments."
            darkBg
          />
        </div>
      </div>
    </div>
  );
};

export default EnterpriseAddons; 