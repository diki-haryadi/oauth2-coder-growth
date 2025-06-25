import React from 'react';

const PlanCard = ({
  icon,
  title,
  description,
  linkText,
  linkHref,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}) => (
  <div className="bg-[#1A1B26] rounded-2xl p-8">
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <a
      href={linkHref}
      className="text-[#635DFF] hover:text-[#8983FF] font-medium"
    >
      {linkText}
    </a>
  </div>
);

const StartupIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="#1F3A5F"/>
    <path
      d="M24 14C19.5817 14 16 17.5817 16 22C16 24.9936 17.7147 27.5974 20.2497 28.7499C20.0995 29.4136 19.75 30 19 30H17C15.8954 30 15 30.8954 15 32V34H33V32C33 30.8954 32.1046 30 31 30H29C28.25 30 27.9005 29.4136 27.7503 28.7499C30.2853 27.5974 32 24.9936 32 22C32 17.5817 28.4183 14 24 14Z"
      stroke="#635DFF"
      strokeWidth="2"
    />
  </svg>
);

const NonProfitIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="#1F3A5F"/>
    <path
      d="M32 20C32 16.6863 29.3137 14 26 14C24.4633 14 23.0615 14.5795 22 15.5294C20.9385 14.5795 19.5367 14 18 14C14.6863 14 12 16.6863 12 20C12 28.0589 22 34 22 34C22 34 32 28.0589 32 20Z"
      stroke="#635DFF"
      strokeWidth="2"
    />
  </svg>
);

const SpecialPlansSection = () => {
  return (
    <div className="w-full bg-[#0A1122] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Special plans for special organizations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlanCard
            icon={<StartupIcon />}
            title="Startups"
            description="Congrats on building something extraordinary. Let us make your customer login experience awesome so you can focus on everything else. Did we mention our startup program is free for a year?"
            linkText="Auth0 for Startups"
            linkHref="#"
          />

          <PlanCard
            icon={<NonProfitIcon />}
            title="Non-Profits"
            description="Our mission is to support your mission. Reduce security and compliance risks, improve your donor and volunteer experience, and enhance your technology investments - all with a simple login box."
            linkText="Auth0 for Nonprofits"
            linkHref="#"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialPlansSection; 