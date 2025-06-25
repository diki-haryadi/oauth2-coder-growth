import React from 'react';
import SubMenuSection from '../molecules/SubMenuSection';
import SubMenuItem from '../molecules/SubMenuItem';

const ProductMenu = () => {
  return (
    <div className="absolute top-full left-0 w-screen bg-[#0A1122]/95 backdrop-blur-sm border-b border-gray-800/50 py-8 -mt-px">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <SubMenuSection title="PLATFORM">
              <SubMenuItem
                href="#"
                title="Auth for GenAI"
              />
              <SubMenuItem
                href="#"
                title="Access Management"
              />
              <SubMenuItem
                href="#"
                title="Extensibility"
              />
              <SubMenuItem
                href="#"
                title="Security"
              />
              <SubMenuItem
                href="#"
                title="User Management"
              />
              <SubMenuItem
                href="#"
                title="Authentication"
              />
              <SubMenuItem
                href="#"
                title="Fine-Grained Authorization"
              />
            </SubMenuSection>
          </div>

          <div>
            <SubMenuSection title="FEATURES">
              <SubMenuItem
                href="#"
                title="Universal Login"
              />
              <SubMenuItem
                href="#"
                title="Single Sign On"
              />
              <SubMenuItem
                href="#"
                title="Multifactor Authentication"
              />
              <SubMenuItem
                href="#"
                title="Actions"
              />
              <SubMenuItem
                href="#"
                title="Machine to Machine"
              />
              <SubMenuItem
                href="#"
                title="Passwordless"
              />
              <SubMenuItem
                href="#"
                title="Breached Passwords"
              />
            </SubMenuSection>
          </div>

          <div className="space-y-8">
            <div className="bg-[#1A1B26] rounded-lg p-4">
              <h3 className="text-lg font-medium text-white mb-1">Technology Overview</h3>
              <p className="text-sm text-gray-400 mb-0">Watch a walkthrough of the Auth0 Platform</p>
            </div>

            <div className="bg-[#1A1B26] rounded-lg p-4">
              <h3 className="text-lg font-medium text-white mb-1">Cloud Deployments</h3>
              <p className="text-sm text-gray-400 mb-0">Deploy to the cloud, your way</p>
            </div>

            <div className="bg-[#1A1B26] rounded-lg p-4">
              <h3 className="text-lg font-medium text-white mb-1">Auth0 Marketplace</h3>
              <p className="text-sm text-gray-400 mb-0">Discover the integrations you need to solve identity</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-8">
          <a href="#" className="text-[#635DFF] hover:text-[#8983FF] text-sm font-medium flex items-center">
            View platform
            <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none">
              <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className="text-[#635DFF] hover:text-[#8983FF] text-sm font-medium flex items-center">
            View features
            <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none">
              <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductMenu; 