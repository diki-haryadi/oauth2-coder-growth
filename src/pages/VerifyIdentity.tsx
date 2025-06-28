import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VerifyIdentity = () => {
  const [code, setCode] = useState('');
  const [rememberDevice, setRememberDevice] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/logo.svg" alt="Auth0" className="h-10 w-auto" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
          Verify Your Identity
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Check your preferred one-time password<br />
          application for a code.
        </p>

        {/* Code Input */}
        <div className="mb-6">
          <label htmlFor="code" className="block text-sm font-medium text-blue-600 mb-1">
            Enter your one-time code*
          </label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter code"
          />
        </div>

        {/* Remember Device Checkbox */}
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberDevice}
              onChange={(e) => setRememberDevice(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-600">
              Remember this device for 30 days
            </span>
          </label>
        </div>

        {/* Continue Button */}
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mb-6">
          Continue
        </button>

        {/* Try Another Method Link */}
        <div className="text-center">
          <Link to="/u/verify/methods" className="text-blue-600 hover:text-blue-800 text-sm">
            Try another method
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyIdentity; 