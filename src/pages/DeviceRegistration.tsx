import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeviceRegistration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/logo.svg" alt="Auth0" className="h-10 w-auto" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
          Log In Faster on This Device
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Trust this device? You can quickly and securely<br />
          log in the next time using this device's fingerprint<br />
          or face recognition.
        </p>

        {/* Continue Button */}
        <button 
          onClick={() => navigate('/u/device/success')}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mb-4"
        >
          Continue
        </button>

        {/* Remind Later Button */}
        <button 
          onClick={() => navigate('/dashboard')}
          className="w-full bg-white text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors mb-4"
        >
          Remind me later
        </button>

        {/* Not on this device Link */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Not on this device
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceRegistration; 