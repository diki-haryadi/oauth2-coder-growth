import React from 'react';
import SubMenuSection from '../molecules/SubMenuSection';
import SubMenuItem from '../molecules/SubMenuItem';

const DocumentationMenu = () => {
  return (
    <div className="absolute top-full left-0 w-screen bg-[#0A1122]/95 backdrop-blur-sm border-b border-gray-800/50 py-8 -mt-px">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <SubMenuSection title="DOCUMENTATION">
              <SubMenuItem
                href="#"
                title="Auth0 Docs"
                description="Complete documentation for Auth0 platform"
              />
              <SubMenuItem
                href="#"
                title="Articles"
                description="In-depth technical articles and guides"
              />
              <SubMenuItem
                href="#"
                title="Quickstarts"
                description="Get started with your preferred technology"
              />
              <SubMenuItem
                href="#"
                title="APIs"
                description="API reference and documentation"
              />
              <SubMenuItem
                href="#"
                title="SDK Libraries"
                description="Official SDKs for various platforms"
              />
            </SubMenuSection>
          </div>

          <div>
            <SubMenuSection title="SUPPORT CENTER">
              <SubMenuItem
                href="#"
                title="Community"
                description="Connect with other developers"
              />
              <SubMenuItem
                href="#"
                title="Support"
                description="Get help from our support team"
              />
              <SubMenuItem
                href="#"
                title="Help"
                description="Browse help articles and guides"
              />
              <SubMenuItem
                href="#"
                title="FAQs"
                description="Find answers to common questions"
              />
              <SubMenuItem
                href="#"
                title="Explore Auth0 Marketplace"
                description="Discover integrations and extensions"
              />
              <SubMenuItem
                href="#"
                title="Resources"
                description="Access additional learning materials"
              />
            </SubMenuSection>
          </div>

          <div className="space-y-8">
            <SubMenuSection title="BLOG">
              <div className="bg-[#1A1B26] rounded-lg overflow-hidden">
                <img 
                  src="https://cdn.auth0.com/blog/fine-grained-authorization/header.png" 
                  alt="Blog post thumbnail" 
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <SubMenuItem
                    href="#"
                    title="Getting Unlimited Scalability with Okta Fine-Grained Authorization"
                    description="Learn how to implement scalable authorization"
                  />
                </div>
              </div>
            </SubMenuSection>

            <div className="space-y-4">
              <SubMenuItem
                href="#"
                title="Blog"
                description="Read the latest from Auth0"
              />
              <SubMenuItem
                href="#"
                title="Learn"
                description="Expand your identity knowledge"
              />
              <SubMenuItem
                href="#"
                title="Intro to IAM (CIAM)"
                description="Learn about Identity and Access Management"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationMenu; 