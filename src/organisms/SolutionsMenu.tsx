import React from 'react';
import SubMenuSection from '../molecules/SubMenuSection';
import SubMenuItem from '../molecules/SubMenuItem';

const SolutionsMenu = () => {
  return (
    <div className="absolute top-full left-0 w-screen bg-[#0A1122]/95 backdrop-blur-sm border-b border-gray-800/50 py-8 -mt-px">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <SubMenuSection title="INDUSTRIES">
              <SubMenuItem
                href="#"
                title="Retail"
              />
              <SubMenuItem
                href="#"
                title="Financial Services"
              />
              <SubMenuItem
                href="#"
                title="Nonprofits & Charities"
              />
              <SubMenuItem
                href="#"
                title="Startups"
              />
            </SubMenuSection>

            <div className="mt-12">
              <SubMenuSection title="YOUR GOALS">
                <SubMenuItem
                  href="#"
                  title="Enterprise-Grade Identity at Scale"
                />
                <SubMenuItem
                  href="#"
                  title="</secure smarter>"
                />
              </SubMenuSection>
            </div>
          </div>

          <div>
            <SubMenuSection title="USE CASES">
              <SubMenuItem
                href="#"
                title="Consumer Applications"
              />
              <SubMenuItem
                href="#"
                title="B2B SaaS Applications"
              />
            </SubMenuSection>

            <div className="mt-12">
              <SubMenuSection title="CASE STUDIES">
                <SubMenuItem
                  href="#"
                  title="Read our customers stories"
                />
              </SubMenuSection>
            </div>
          </div>

          <div>
            <div className="bg-[#1A1B26] rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-gray-400 mb-2">CIAM ROI CALCULATOR</h3>
                  <p className="text-lg font-medium text-white leading-snug">
                    Estimate the revenue impact to your customer-facing business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsMenu; 