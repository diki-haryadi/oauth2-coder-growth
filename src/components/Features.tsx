import { ShieldCheckIcon, KeyIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Universal Authentication',
    description: 'Implement authentication in minutes and give your users a secure, frictionless experience.',
    icon: KeyIcon,
  },
  {
    name: 'Multi-factor Authentication',
    description: 'Add an extra layer of security to your applications with our easy-to-implement MFA solutions.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'User Management',
    description: 'Manage your users, their roles, and their access rights from a single dashboard.',
    icon: UserGroupIcon,
  },
  {
    name: 'Customizable Solutions',
    description: 'Tailor the authentication experience to match your brand and requirements.',
    icon: CogIcon,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for authentication
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Secure, scalable, and developer-friendly authentication solutions for any application.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute h-12 w-12 flex items-center justify-center rounded-md bg-primary text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 