import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import templatesData from './Templates.json';

const useCaseLabels = {
  MULTIFACTOR: 'Enrich Profile',
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
  return triggerLabels[trigger.toLowerCase()] || trigger.toLowerCase();
}

export default function TemplateDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const template = (templatesData.templates || []).find(t => t.id === id);

  if (!template) {
    return <div className="p-12">Template not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white w-screen p-0">
      <div className="max-w-6xl mx-auto pt-10 pb-12 px-4">
        <div className="text-sm text-gray-500 mb-2 flex items-center gap-1">
          <button className="hover:underline" onClick={() => navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/library/templates')}>&larr; Actions Templates</button>
        </div>
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-bold mb-1">{template.name}</h1>
            <div className="text-gray-500 text-base mb-4">{(template.useCases || []).map(uc => useCaseLabels[uc] || uc).join(', ')}</div>
            <div className="bg-black rounded-lg overflow-x-auto mb-6">
              <pre className="text-xs leading-5 text-gray-100 p-4" style={{background:'#18181b', fontFamily:'Menlo, monospace', minHeight:320}}>
                {template.code}
              </pre>
            </div>
          </div>
          <div className="w-full md:w-80 flex-shrink-0 flex flex-col gap-4">
            <div className="flex gap-2">
              {template.sourceUrl && (
                <a href={template.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white border border-gray-200 rounded px-4 py-2 text-gray-700 font-semibold text-sm text-center hover:bg-gray-50 transition">View Source</a>
              )}
              <button className="flex-1 bg-blue-600 text-white rounded px-4 py-2 font-semibold text-sm hover:bg-blue-700 transition">Use This Template</button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="font-semibold mb-2">Description</div>
              <div className="text-gray-700 text-sm mb-4">{template.description}</div>
              <div className="font-semibold mb-2">Trigger</div>
              <div className="flex flex-wrap gap-2">
                {(template.triggers || []).map(tr => (
                  <span key={tr} className="inline-block bg-gray-100 text-gray-700 font-mono text-xs px-2 py-1 rounded uppercase tracking-wide">{formatTrigger(tr)}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 