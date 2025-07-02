import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import integrationsData from './ListIntegrations.json';

export default function SocialConnectionPermissions() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const integration = integrationsData.integrations.find((item: any) => item.catalog_id === slug);

  if (!integration) {
    return <div className="min-h-screen flex items-center justify-center">Social connection not found.</div>;
  }

  const name = integration.name || integration.partner?.display_name || slug;
  const logo = integration.logo || integration.partner?.logo || '/public/icons/linkedin.svg';

  // Permissions list, bisa diubah sesuai kebutuhan
  const permissions = [
    `Redirect users to login at ${name}`,
    `Receive and store user identities from ${name}`,
    `Update user root profiles with data from ${name}`,
  ];

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-screen bg-white rounded-lg shadow-lg p-8">
        {/* Logo & Title */}
        <div className="flex items-center mb-8">
          <img src={logo} alt={name} className="h-10 w-10 mr-4 rounded" />
          <h2 className="text-2xl font-semibold text-gray-900">New {name} Social Connection</h2>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">{name} Social Connection by Auth0</h3>
          <p className="text-gray-700 mb-4">{name} will need access to:</p>
          <ul className="mb-6 border rounded divide-y">
            {permissions.map((perm, idx) => (
              <li key={idx} className="p-3">{perm}</li>
            ))}
          </ul>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded" onClick={() => navigate(`/dashboard/au/dev-1md8m8doz8ynfucb/connections/social/create/${slug}/setup`)}>Continue</button>
            <button className="border px-6 py-2 rounded bg-white text-gray-900 border-gray-200" onClick={() => navigate(-1)}>Cancel</button>
          </div>
          <p className="text-xs text-gray-500 mt-6">By continuing, you grant the integration access to the permissions listed above and consent to the integration's <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>. By continuing you also agree to Auth0's Marketplace <a href="#" className="underline">Terms of Use</a>.</p>
        </div>
      </div>
    </div>
  );
} 