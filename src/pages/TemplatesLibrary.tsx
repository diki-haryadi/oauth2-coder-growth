import React from 'react';
import { useNavigate } from 'react-router-dom';
import templatesData from './Templates.json';

const useCaseLabels = {
  MULTIFACTOR: 'Multifactor',
  'ACTION_FEATURE': 'Action Feature',
  'ENRICH_PROFILE': 'Enrich Profile',
  'ACCESS_CONTROL': 'Access Control',
};

const triggerLabels = {
  'post-login': 'post-login',
  'credentials-exchange': 'credentials-exchange',
  'pre-user-registration': 'pre-user-registration',
  'post-user-registration': 'post-user-registration',
  'post-change-password': 'post-change-password',
  'send-phone-message': 'send-phone-message',
  'password-reset-post-challenge': 'password-reset-post-challenge',
  'login-post-identifier': 'login-post-identifier',
  'custom-phone-provider': 'custom-phone-provider',
  'custom-email-provider': 'custom-email-provider',
  'custom-token-exchange': 'custom-token-exchange',
};

function formatTrigger(trigger) {
  // Try to match the trigger to the label, fallback to original
  return triggerLabels[trigger.toLowerCase()] || trigger.toLowerCase();
}

export default function TemplatesLibrary() {
  const navigate = useNavigate();
  const templates = templatesData.templates || [];
  // Collect all unique use cases and triggers
  const useCases = Array.from(new Set(templates.flatMap(t => t.useCases || [])));
  const triggers = Array.from(new Set(templates.flatMap(t => t.triggers || [])));

  const [selectedUseCases, setSelectedUseCases] = React.useState<string[]>([]);
  const [selectedTriggers, setSelectedTriggers] = React.useState<string[]>([]);

  // Filtering logic
  const filteredTemplates = templates.filter(tpl => {
    const useCaseMatch = selectedUseCases.length === 0 || (tpl.useCases || []).some(uc => selectedUseCases.includes(uc));
    const triggerMatch = selectedTriggers.length === 0 || (tpl.triggers || []).some(tr => selectedTriggers.includes(tr));
    return useCaseMatch && triggerMatch;
  });

  const toggleUseCase = uc => {
    setSelectedUseCases(prev => prev.includes(uc) ? prev.filter(x => x !== uc) : [...prev, uc]);
  };
  const toggleTrigger = tr => {
    setSelectedTriggers(prev => prev.includes(tr) ? prev.filter(x => x !== tr) : [...prev, tr]);
  };

  return (
    <div className="min-h-screen bg-white w-screen p-0">
      <div className="max-w-6xl mx-auto pt-12 pb-12 px-4">
        <button
          className="text-sm text-gray-500 mb-6 flex items-center gap-1 hover:underline focus:outline-none"
          onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/library?tab=0')}
          type="button"
        >
          <span className="text-lg">&larr;</span> Actions Library
        </button>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Templates For Actions</h1>
          <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold text-base shadow hover:bg-blue-700 transition" onClick={()=>{}}>
            Build From Scratch
          </button>
        </div>
        <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
          <div className="font-semibold mb-2">Use Cases</div>
          <div className="mb-4 flex flex-wrap gap-2">
            {useCases.map(uc => (
              <button
                key={uc}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border transition
                  ${selectedUseCases.includes(uc)
                    ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-sm'
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => toggleUseCase(uc)}
                type="button"
              >
                {useCaseLabels[uc] || uc}
              </button>
            ))}
          </div>
          <div className="font-semibold mb-2">Triggers</div>
          <div className="mb-4 flex flex-wrap gap-2">
            {triggers.map(tr => (
              <button
                key={tr}
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-mono border transition
                  ${selectedTriggers.includes(tr)
                    ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-sm'
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => toggleTrigger(tr)}
                type="button"
              >
                {formatTrigger(tr)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredTemplates.map((tpl, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => navigate(`/dashboard/au/dev-1md8m8doz8ynfucb/actions/library/templates/templates/${tpl.id}`)}
            >
              <div className="mb-2">
                {tpl.triggers && tpl.triggers.map(tr => (
                  <span key={tr} className="inline-block bg-gray-100 text-gray-700 font-mono text-xs px-2 py-1 rounded mr-2 mb-1 uppercase tracking-wide">{formatTrigger(tr)}</span>
                ))}
              </div>
              <div className="font-semibold text-base mb-1">{tpl.name}</div>
              <div className="text-gray-600 text-sm mb-2">{tpl.description}</div>
              <div className="text-xs text-gray-500 font-mono">
                {(tpl.useCases || []).map(uc => (
                  <span key={uc} className="inline-block mr-2">{useCaseLabels[uc] || uc}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 