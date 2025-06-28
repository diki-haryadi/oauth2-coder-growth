import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  const tabs = [
    { name: 'Quickstart', path: '/quickstart' },
    { name: 'Settings', path: '/settings' },
    { name: 'Credentials', path: '/credentials' },
    { name: 'APIs', path: '/apis' },
    { name: 'Addons', path: '/addons' },
    { name: 'Connections', path: '/connections' },
    { name: 'Login Experience', path: '/login-experience' }
  ];

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <Link to="/applications" className="text-[#635DFF] hover:text-[#3B3684] text-sm flex items-center mb-4">
            ← Back to Applications
          </Link>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16m-16 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-[#1A1A1A]">My App</h1>
              <div className="flex items-center text-sm text-gray-600">
                <span>Regular Web Applications</span>
                <span className="mx-2">•</span>
                <span>Client ID <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">iKysfeiLlWthen86y0dM3ylp8qvOibJi</code></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab.path)}
                className={`py-4 px-1 text-sm font-medium border-b-2 ${
                  tab.name === 'Settings' 
                    ? 'border-[#635DFF] text-[#635DFF]' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Basic Information */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-[#1A1A1A] mb-6">Basic Information</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value="My App"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
                />
                <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
                Domain
              </label>
              <div className="relative">
                <input
                  type="text"
                  value="dev-1md8m8doz8ynfucb.au.auth0.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
                  readOnly
                />
                <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
                Client ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  value="iKysfeiLlWthen86y0dM3ylp8qvOibJi"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
                  readOnly
                />
                <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
                Client Secret
              </label>
              <div className="relative">
                <input
                  type="password"
                  value="••••••••••••••••••••••••••••••••••••••••••••••••••••••"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
                  readOnly
                />
                <div className="absolute right-2 top-2 flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-500">The Client Secret is not base64 encoded.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
                Description
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
                rows={4}
                placeholder="Add a description in less than 140 characters"
              ></textarea>
              <p className="mt-1 text-sm text-gray-500">A free text description of the application. Max character count is 140.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Properties */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-[#1A1A1A] mb-6">Application Properties</h2>
        <div className="mb-8">
          <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
            Application Logo
          </label>
          <div className="border border-gray-200 rounded-md p-6">
            <div className="flex items-center justify-center h-40 bg-gray-50 mb-4">
              <svg className="w-12 h-12 text-[#635DFF]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="relative">
              <input
                type="text"
                value="https://path.to/my_logo.png"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
                placeholder="https://path.to/my_logo.png"
              />
              <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              The URL of the logo to display for the application, if none is set the default badge for this type of application will be shown. Recommended size is 150×150 pixels.
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
            Application Type
          </label>
          <div className="relative">
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF] appearance-none pr-10"
              defaultValue="regular"
            >
              <option value="regular">Regular Web Application</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            The type of application will determine which settings you can configure from the dashboard.
          </p>
        </div>
      </div>

      {/* Note Section */}
      <div className="mb-8">
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Note:</span><br />
            If you are looking for the <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">token_endpoint_auth_method</code> field, this has moved to a dedicated credentials tab for easier and more secure management.
            <a href="#" className="text-[#635DFF] hover:text-[#3B3684] ml-1">View Credentials</a>
          </p>
        </div>
      </div>

      {/* Application URLs */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-[#1A1A1A] mb-6">Application URLs</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Application Login URI
            </label>
            <input
              type="text"
              placeholder="https://myapp.org/login"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
            />
            <p className="mt-1 text-sm text-gray-500">
              In some scenarios, Auth0 will need to redirect to your application's login page. This URI needs to point to a route in your application that should redirect to your tenant's <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">/authorize</code> endpoint.
              <a href="#" className="text-[#635DFF] hover:text-[#3B3684] ml-1">Learn more</a>
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Allowed Callback URLs
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
              rows={3}
            ></textarea>
            <p className="mt-1 text-sm text-gray-500">
              After the user authenticates we will only call back to any of these URLs. You can specify multiple valid URLs by comma-separating them (typically to handle different environments like QA or testing). Make sure to specify the protocol (<code className="bg-gray-100 px-1 py-0.5 rounded text-xs">https://</code>) otherwise the callback may fail in some cases. With the exception of custom URI schemes for native clients, all callbacks should use protocol <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">https://</code>. You can use <a href="#" className="text-[#635DFF] hover:text-[#3B3684]">Organization URL</a> parameters in these URLs.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Allowed Logout URLs
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
              rows={3}
            ></textarea>
            <p className="mt-1 text-sm text-gray-500">
              Comma-separated list of allowed logout URLs for redirecting users post-logout. You can use wildcards at the subdomain level (<code className="bg-gray-100 px-1 py-0.5 rounded text-xs">*.google.com</code>). Query strings and hash information are not taken into account when validating these URLs.
              <a href="#" className="text-[#635DFF] hover:text-[#3B3684] ml-1">Learn more about logout</a>
            </p>
          </div>
        </div>
      </div>

      {/* Cross-Origin Authentication */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-[#1A1A1A] mb-6">Cross-Origin Authentication</h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-[#1A1A1A]">
                Allow Cross-Origin Authentication
              </label>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              When allowed, <a href="#" className="text-[#635DFF] hover:text-[#3B3684]">cross-origin authentication</a> allows applications to make authentication requests when the Lock widget or custom HTML is used.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Allowed Origins (CORS)
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
              rows={3}
            ></textarea>
            <div className="mt-1 text-sm text-gray-500">
              <p className="mb-2">List additional origins allowed to make <a href="#" className="text-[#635DFF] hover:text-[#3B3684]">cross-origin resource sharing (CORS)</a> requests. Allowed callback URLs are already included in this list.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>URLs can be comma-separated or added line-by-line</li>
                <li>Use wildcards (*) at the subdomain level (e.g. https://*.contoso.com)</li>
                <li>Query strings and hash information are ignored</li>
                <li><a href="#" className="text-[#635DFF] hover:text-[#3B3684]">Organization URL</a> placeholders are supported</li>
              </ul>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Cross-Origin Verification Fallback URL
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
            />
            <p className="mt-1 text-sm text-gray-500">
              Fallback URL when third-party cookies are not enabled in the browser. URL must use https and be in the same domain as the embedded login widget.
            </p>
          </div>
        </div>
      </div>

      {/* ID Token Expiration */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-[#1A1A1A] mb-6">ID Token Expiration</h2>
        <div>
          <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
            Maximum ID Token Lifetime <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value="36000"
              className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
            />
            <span className="text-gray-500">seconds</span>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Time until an <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">id_token</code> expires regardless of activity.
          </p>
        </div>
      </div>

      {/* Refresh Token Expiration */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-[#1A1A1A] mb-6">Refresh Token Expiration</h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-[#1A1A1A]">
                Set Idle Refresh Token Lifetime
              </label>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Require <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">refresh_tokens</code> to expire after a set period of inactivity.
              <a href="#" className="text-[#635DFF] hover:text-[#3B3684] ml-1">Learn more about refresh token expiration</a>
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Idle Refresh Token Lifetime <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value="2592000"
                className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
              />
              <span className="text-gray-500">seconds</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-[#1A1A1A]">
                Set Maximum Refresh Token Lifetime
              </label>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Require <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">refresh_tokens</code> to expire after a set period regardless of activity.
              Required for refresh token rotation. <a href="#" className="text-[#635DFF] hover:text-[#3B3684]">Learn more about refresh token expiration</a>
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Maximum Refresh Token Lifetime <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value="31557600"
                className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
              />
              <span className="text-gray-500">seconds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Refresh Token Rotation */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-[#1A1A1A] mb-6">Refresh Token Rotation</h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-[#1A1A1A]">
                Allow Refresh Token Rotation
              </label>
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              When allowed, <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">refresh_tokens</code> will automatically be invalidated after use and exchanged for new tokens to prevent replay attacks. Requires a maximum refresh token lifetime. <a href="#" className="text-[#635DFF] hover:text-[#3B3684]">Learn more about refresh token rotation</a>
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-1">
              Rotation Overlap Period <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value="0"
                className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#635DFF] focus:border-[#635DFF]"
              />
              <span className="text-gray-500">seconds</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Period of time the most recently-used <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">refresh_token</code> can be reused without triggering breach detection.
            </p>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-[#1A1A1A] mb-6">Danger Zone</h2>
        <div className="space-y-4 bg-red-50 p-6 rounded-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-red-800">Delete this application</h3>
              <p className="text-sm text-red-600">All your apps using this client will stop working.</p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              Delete
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-medium text-red-800">Rotate secret</h3>
              <p className="text-sm text-red-600">All authorized apps will need to be updated with the new client secret.</p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              Rotate
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-5xl mx-auto flex justify-end space-x-4">
          <button className="px-4 py-2 text-gray-700 hover:text-gray-900 focus:outline-none">
            Discard
          </button>
          <button className="px-4 py-2 bg-[#635DFF] text-white rounded hover:bg-[#3B3684] focus:outline-none focus:ring-2 focus:ring-[#635DFF] focus:ring-offset-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings; 