import React from 'react';
import { Button } from '../atoms/Button';

const FineGrainedAuthSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A1D54] via-[#1F3A5F] to-[#1A1B26]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Fine-Grained Authorization
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Enable user collaboration and granular access control in your applications using easy-to-use APIs.
            </p>
            <p className="text-gray-400 mb-8">
              Get in touch with our team to learn more about pricing.
            </p>
            <Button variant="outline">Contact us</Button>
          </div>

          {/* Right Content - Banner Image */}
          <div className="relative">
            <img
              src="https://cdn.auth0.com/website/website/pricing/FGABanner/fga_banner.svg"
              alt="Fine-Grained Authorization Banner"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FineGrainedAuthSection; 