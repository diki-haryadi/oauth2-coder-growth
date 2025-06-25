import React from 'react';

const logos = [
  {
    name: 'Pfizer',
    logo: 'https://cdn.auth0.com/website/cic-homepage/customer-logos/pfizer.svg',
  },
  {
    name: 'Blue Cross Blue Shield',
    logo: 'https://cdn.auth0.com/website/cic-homepage/customer-logos/bluecross.svg',
  },
  {
    name: 'Sage',
    logo: 'https://cdn.auth0.com/website/cic-homepage/customer-logos/sage.svg',
  },
  {
    name: 'Carrefour',
    logo: 'https://cdn.auth0.com/website/cic-homepage/customer-logos/carrefour.svg',
  },
  {
    name: '1800 Flowers',
    logo: 'https://cdn.auth0.com/website/cic-homepage/customer-logos/1800flowers.svg',
  },
  {
    name: 'Polaris',
    logo: 'https://cdn.auth0.com/website/cic-homepage/customer-logos/polaris.svg',
  },
  {
    name: 'Mercado Libre',
    logo: 'https://cdn.auth0.com/website/cic-homepage/customer-logos/mercadolibre.svg',
  },
  {
    name: 'Generali',
    logo: 'https://cdn.auth0.com/website/cic-homepage/customer-logos/generali.svg',
  },
  {
    name: 'Electrolux',
    logo: 'https://cdn.auth0.com/website/cic-homepage/customer-logos/electrolux.svg',
  },
  {
    name: 'AXA',
    logo: 'https://cdn.auth0.com/website/cic-homepage/customer-logos/axa.svg',
  },
  {
    name: 'Mazda',
    logo: 'https://cdn.auth0.com/website/cic-homepage/customer-logos/mazda.svg',
  }
];

const LogoSlider = () => {
  return (
    <div className="w-full bg-[#0A1122] py-16">
      <div className="max-w-[100vw] overflow-hidden">
        {/* Logo row */}
        <div className="flex whitespace-nowrap animate-scroll">
          <div className="flex">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="mx-8 flex items-center justify-center group flex-shrink-0"
              >
                <div className="relative w-32 h-12">
                  <img
                    src={logo.logo}
                    alt={`${logo.name} logo`}
                    className="w-full h-full object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Read Customer Stories button */}
        <div className="text-center mt-12">
          <button className="px-6 py-2 bg-white hover:bg-gray-100 text-black rounded-lg font-medium transition-all">
            Read Customer Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider; 