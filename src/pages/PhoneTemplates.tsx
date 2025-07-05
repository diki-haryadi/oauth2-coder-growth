import React from 'react';
// @ts-ignore
import MonacoEditor from 'react-monaco-editor';

const TEMPLATES = [
  'Blocked Account',
  'Change Password',
  'One Time Password – Enrollment',
  'One Time Password – Verify',
];

const TEMPLATE_CONTENT = {
  'Blocked Account': {
    text: `We detected suspicious activity on your account from the ip {{user.source_ip}}{% if user.city %} from {{user.city}}, {{user.country}}{% elsif user.country %} from {{user.country}}{% endif %}. Logins from this IP have been blocked on your account. If this is your IP, please reset your password to unblock your account. Otherwise, disregard this message.`,
    voice: `Hello. Your account has been blocked due to suspicious activity from the ip {{user.source_ip}}. If this is your activity, please reset your password to unblock your account. Otherwise, disregard this message.`
  },
  'Change Password': {
    text: `{{ code | escape }} is your password change code for {{ friendly_name | escape }}.`,
    voice: `Hello. Your password change code for {{ friendly_name | escape }} is {{ pause }} {{ code | escape }}. I repeat, your password change code is {{ pause }} {{ code | escape }}.`
  },
  'One Time Password – Enrollment': {
    text: `{{ code | escape }} is your verification code for {{ friendly_name | escape }}. Please enter this code to verify your enrollment.`,
    voice: `Hello. Your verification code for {{ friendly_name | escape }} is {{ pause }} {{ code | escape }}. I repeat, your verification code is {{ pause }} {{ code | escape }}.`
  },
  'One Time Password – Verify': {
    text: `{{ code | escape }} is your verification code for {{ friendly_name | escape }}.`,
    voice: `Hello. Your verification code for {{ friendly_name | escape }} is {{ pause }} {{ code | escape }}. I repeat, your verification code is {{ pause }} {{ code | escape }}.`
  },
};

export default function PhoneTemplates() {
  const [selectedTemplate, setSelectedTemplate] = React.useState(TEMPLATES[0]);
  const textMsg = TEMPLATE_CONTENT[selectedTemplate].text;
  const voiceMsg = TEMPLATE_CONTENT[selectedTemplate].voice;
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Phone Messaging Templates</h1>
        <div className="text-gray-600 mb-6">
          Standard welcome, password reset, and account verification phone-based workflows, built right into Auth0. <a href="#" className="text-blue-700 underline">Show more</a>
        </div>
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 rounded-lg px-4 py-3 mb-8 flex items-start gap-3">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-1"><circle cx="12" cy="12" r="10" fill="#FEF3C7" stroke="#F59E42" strokeWidth="2"/><path d="M12 8v4m0 4h.01" stroke="#F59E42" strokeWidth="2" strokeLinecap="round"/></svg>
          <div>
            <b>Warning!</b> You currently do <b>NOT</b> have a phone provider configured. Please enable a <a href="#" className="text-blue-700 underline">Custom Phone Provider</a> to be able to customize and utilize phone templates.
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6 flex flex-col gap-6">
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Template *</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
              value={selectedTemplate}
              onChange={e => setSelectedTemplate(e.target.value)}
            >
              {TEMPLATES.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-medium text-gray-700">Status</span>
            <span className="ml-2 flex items-center gap-2">
              <span className="inline-block w-10 h-6 rounded-full bg-green-200 relative">
                <span className="inline-block w-5 h-5 bg-green-500 rounded-full absolute left-5 top-0.5 shadow" />
              </span>
              <span className="text-green-700 font-medium">Template enabled</span>
            </span>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" value="(555) 555-5555" readOnly disabled />
          </div>
          <div className="flex flex-col md:flex-row gap-8 mt-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Text Message Template</label>
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <MonacoEditor
                  height="180"
                  language="text"
                  value={textMsg}
                  options={{ readOnly: true, minimap: { enabled: false }, fontSize: 14, scrollBeyondLastLine: false }}
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <label className="block text-sm font-medium text-gray-700 mb-2">Text Message Preview</label>
              <div className="bg-black rounded-2xl p-4 w-full flex flex-col items-center" style={{maxWidth: 320}}>
                <div className="bg-white rounded-lg w-full p-4 flex flex-col items-center">
                  <div className="text-xs text-gray-500 mb-2">+X (XXX) XXXX XXXX</div>
                  <div className="bg-indigo-50 rounded-lg px-3 py-2 text-sm text-gray-800 w-full">
                    {textMsg}
                  </div>
                  <div className="text-xs text-gray-400 mt-2">Max 200 character limit</div>
                </div>
                <div className="text-xs text-gray-500 mt-2">Example text message customer would receive.</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mt-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Voice Message Template</label>
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <MonacoEditor
                  height="120"
                  language="text"
                  value={voiceMsg}
                  options={{ readOnly: true, minimap: { enabled: false }, fontSize: 14, scrollBeyondLastLine: false }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
            <button className="bg-gray-100 text-gray-400 font-semibold px-6 py-2 rounded-md text-base cursor-not-allowed" disabled>Try</button>
            <button className="bg-white border border-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-md text-base">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
} 