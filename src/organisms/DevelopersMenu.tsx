import React from 'react';
import SubMenuSection from '../molecules/SubMenuSection';
import SubMenuItem from '../molecules/SubMenuItem';

const DevelopersMenu = () => {
  return (
    <div className="absolute top-full left-0 w-screen bg-[#0A1122]/95 backdrop-blur-sm border-b border-gray-800/50 py-8 -mt-px">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          <SubMenuSection title="DEVELOPERS">
            <SubMenuItem
              href="#"
              title="Developer Center"
              description="Start building with Auth0"
            />
            <SubMenuItem
              href="#"
              title="Code Samples"
              description="Browse sample projects and code"
            />
            <SubMenuItem
              href="#"
              title="Guides"
              description="In-depth development guides"
            />
            <SubMenuItem
              href="#"
              title="Identity Unlocked - Podcasts"
              description="Listen to identity experts"
            />
            <SubMenuItem
              href="#"
              title="Zero Index Newsletter"
              description="Stay updated with Auth0 news"
            />
          </SubMenuSection>

          <SubMenuSection title="DEVELOPER TOOLS">
            <SubMenuItem
              href="#"
              title="OIDC Connect Playground"
              description="Test OpenID Connect flows"
            />
            <SubMenuItem
              href="#"
              title="SAML Tool"
              description="Debug SAML configurations"
            />
            <SubMenuItem
              href="#"
              title="JWT.io"
              description="Debug and explore JWTs"
            />
            <SubMenuItem
              href="#"
              title="Webauthn.me"
              description="Test WebAuthn implementations"
            />
          </SubMenuSection>

          <SubMenuSection title="GET INVOLVED">
            <SubMenuItem
              href="#"
              title="Events"
              description="Join our developer events"
            />
            <SubMenuItem
              href="#"
              title="Auth0 Research Program"
              description="Help shape our products"
            />
          </SubMenuSection>
        </div>
      </div>
    </div>
  );
};

export default DevelopersMenu; 