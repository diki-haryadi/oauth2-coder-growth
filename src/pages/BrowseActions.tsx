import React from 'react';
import { useNavigate } from 'react-router-dom';

const actions = [
  { name: 'Infobip', desc: 'Global SMS messaging built for scale, speed, and deliverability', icon: null },
  { name: '1-Click ZERO TRUST IDENTITY', desc: 'iVALT uses mobile phone biometrics to verify login identity.', icon: null },
  { name: 'Alice Bot Prevention', desc: 'Block access to bots in your sign up and login processes', icon: null },
  { name: 'Alice Face Login', desc: 'Make a selfie validation to ensure your login process', icon: null },
  { name: 'Alice KYC', desc: 'Verify users identity as part of your registration process', icon: null },
  { name: 'Amazon SNS', desc: 'Fully managed pub/sub messaging for microservices and serverless...', icon: null },
  { name: 'Aura Smart Profiles', desc: 'Deploy smart wallets for interactive Web3 user experiences', icon: null },
  { name: 'CLEAR1 - Account Recovery', desc: 'Verify the person beyond the device with CLEAR.', icon: null },
  { name: 'CLEAR1 - Login', desc: 'Enable secure login experiences with CLEAR.', icon: null },
  { name: 'ClickSend', desc: 'Global SMS using direct routes for rapid, reliable delivery', icon: null },
  { name: 'Country-based Access control', desc: 'Restrict access to users by country', icon: null },
  { name: 'Create a Web3 wallet', desc: 'Deploy invisible, embedded NFT wallet directly in your app', icon: null },
];

export default function BrowseActions() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white w-screen p-0">
      <div className="max-w-5xl mx-auto pt-10 pb-12 px-4">
        <button
          className="text-sm text-gray-500 mb-6 flex items-center gap-1 hover:underline focus:outline-none"
          onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/triggers')}
          type="button"
        >
          <span className="text-lg">&larr;</span> Back to triggers
        </button>
        <h1 className="text-3xl font-bold mb-6">Browse Actions</h1>
        <input
          className="w-full border border-gray-200 rounded px-4 py-3 mb-8 text-base"
          placeholder="Search for Packaged Actions"
          disabled
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {actions.map((action, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                {/* Placeholder for icon */}
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-lg">
                  {action.icon || action.name[0]}
                </div>
                <div className="font-semibold text-base">{action.name}</div>
              </div>
              <div className="text-xs text-gray-500 font-mono mb-1">ACTION</div>
              <div className="text-gray-600 text-sm">{action.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 