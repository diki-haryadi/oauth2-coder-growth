import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeviceSuccess = () => {
  const navigate = useNavigate();
  const deviceName = 'diki-haryadi\'s Mac'; // This should come from your app state/context

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/logo.svg" alt="Auth0" className="h-10 w-auto" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
          Device registration successful |<br />
          Auth0 Dashboard
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          You have successfully registered your device.
        </p>

        {/* Device Info */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 bg-gray-50 px-4 py-3 rounded-md">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-gray-700">{deviceName}</span>
          </div>
        </div>

        {/* Continue Button */}
        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default DeviceSuccess; 