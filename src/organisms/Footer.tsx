import React from 'react';

const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-gray-400 font-medium mb-4 uppercase text-sm tracking-wider">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          {typeof link === 'object' ? (
            <a href={link.href} className="text-gray-300 hover:text-white flex items-center gap-2">
              {link.text}
              {link.badge && (
                <span className="bg-[#635DFF] text-white text-xs px-2 py-1 rounded-md">
                  {link.badge}
                </span>
              )}
            </a>
          ) : (
            <a href="#" className="text-gray-300 hover:text-white">
              {link}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerData = {
    developers: {
      title: "DEVELOPERS",
      links: [
        "Developer Hub",
        "Code Samples and Guides",
        "Blog posts",
        "Identity Unlocked - Podcasts",
        "Zero Index Newsletter"
      ]
    },
    documentation: {
      title: "DOCUMENTATION",
      links: [
        "Articles",
        "Quickstarts",
        "APIs",
        "SDK Libraries",
        "Blog",
        "Reports",
        "Webinars"
      ]
    },
    supportCenter: {
      title: "SUPPORT CENTER",
      links: [
        "Community",
        "Support",
        "Help",
        "FAQs",
        "Auth0 Marketplace"
      ]
    },
    company: {
      title: "COMPANY",
      links: [
        "Our Customers",
        "Compliance - Ensuring privacy and security",
        "Partners",
        { text: "Careers", badge: "We're hiring!" },
        "About us"
      ]
    },
    getInvolved: {
      title: "GET INVOLVED",
      links: [
        "Events",
        "Auth0 Research Program",
      ]
    },
    learning: {
      title: "LEARNING",
      links: [
        "Learn",
        "Intro to IAM (CIAM)",
        "Blog"
      ]
    },
    platform: {
      title: "PLATFORM",
      links: [
        "Auth for GenAI",
        "Access Management",
        "Extensibility",
        "Security",
        "User Management",
        "Authentication",
        "Cloud deployments",
        "Fine-Grained Authorization"
      ]
    },
    features: {
      title: "FEATURES",
      links: [
        "Universal Login",
        "Single Sign On",
        "Multifactor Authentication",
        "Actions",
        "Machine to Machine",
        "Passwordless",
        "Breached Passwords"
      ]
    }
  };

  return (
    <footer className="bg-[#0A1122] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-8">
            <FooterSection {...footerData.developers} />
            <FooterSection {...footerData.getInvolved} />
          </div>
          <div className="space-y-8">
            <FooterSection {...footerData.documentation} />
            <FooterSection {...footerData.learning} />
          </div>
          <div className="space-y-8">
            <FooterSection {...footerData.supportCenter} />
            <FooterSection {...footerData.platform} />
          </div>
          <div className="space-y-8">
            <FooterSection {...footerData.company} />
            <FooterSection {...footerData.features} />
          </div>
        </div>

        {/* Social links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 