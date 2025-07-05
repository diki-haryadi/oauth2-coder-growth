import React, { useState } from 'react';
// @ts-ignore
import MonacoEditor from 'react-monaco-editor';

export default function PhoneProvider() {
  const [selected, setSelected] = useState('Twilio');
  const [isEnabled, setIsEnabled] = useState(true);
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-2">Phone Message Provider</h1>
        <div className="text-gray-600 mb-6">
          Customize the delivery method for phone messages sent to your users. <a href="#" className="text-blue-700 underline">Learn More</a>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow p-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="font-semibold text-gray-700 mb-4">Phone Provider</div>
              <div className="text-gray-500 mb-2">Choose a provider</div>
              <div className="flex gap-4">
                <button
                  className={`flex items-center gap-2 border px-6 py-4 rounded-lg font-semibold text-base transition-all ${selected === 'Twilio' ? 'border-blue-600 bg-blue-50 text-blue-700 border-2' : 'border-gray-200 bg-white text-gray-700'}`}
                  onClick={() => setSelected('Twilio')}
                  type="button"
                >
                  <span className="inline-block w-7 h-7"><img src="https://cdn.auth0.com/manhattan/versions/1.6249.0/assets/logos/twilio/twilio-avatar.png" alt="Twilio" className="w-7 h-7" /></span>
                  Twilio
                </button>
                <button
                  className={`flex items-center gap-2 border px-6 py-4 rounded-lg font-semibold text-base transition-all ${selected === 'Custom' ? 'border-blue-600 bg-blue-50 text-blue-700 border-2' : 'border-gray-200 bg-white text-gray-700'}`}
                  onClick={() => setSelected('Custom')}
                  type="button"
                >
                  <span className="inline-block w-7 h-7"><img src="https://cdn.auth0.com/manhattan/versions/1.6249.0/assets/phone-providers/custom.png" alt="Custom" className="w-7 h-7" /></span>
                  Custom
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-700 mb-4">Delivery Methods</div>
              <div className="text-gray-500 mb-2">Choose how phone messages will be delivered to your users. <a href="#" className="text-blue-700 underline">Learn more</a></div>
              <div className="flex flex-col gap-3">
                <label className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer border ${selected === 'Twilio' || selected === 'Custom' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'}`}>
                  <input type="checkbox" checked readOnly className="accent-blue-600 w-5 h-5" />
                  <div>
                    <div className={`font-semibold text-base ${selected === 'Twilio' || selected === 'Custom' ? 'text-blue-700' : 'text-gray-700'}`}>Text</div>
                    <div className="text-gray-500 text-sm">The verification code will be delivered to your users via SMS.</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 border border-gray-200 bg-white px-4 py-3 rounded-lg cursor-pointer">
                  <input type="checkbox" readOnly className="accent-blue-600 w-5 h-5" />
                  <div>
                    <div className="font-semibold text-base text-gray-700">Voice</div>
                    <div className="text-gray-500 text-sm">The verification code will be delivered to your users via Voice Message.</div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          {/* Twilio Provider Settings */}
          {selected === 'Twilio' && (
            <div className="flex flex-col md:flex-row gap-8 mt-4">
              <div className="flex-1">
                <div className="font-semibold text-gray-700 mb-2">Twilio Provider Settings</div>
                <div className="text-gray-500 text-sm mb-2">Your <a href="#" className="text-blue-700 underline">Twilio credentials</a> will always be encrypted in our database. Sign up for a <a href="#" className="text-blue-700 underline">Twilio</a> account.</div>
                <div className="text-gray-500 text-sm mb-2">Need help? <a href="#" className="text-blue-700 underline">Check our instructions</a>.</div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <div className="font-medium text-gray-700 mb-1">SMS Source</div>
                  <div className="flex gap-4 mb-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-blue-700">
                      <input type="radio" checked readOnly className="accent-blue-600" /> Use From
                    </label>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <input type="radio" readOnly className="accent-blue-600" /> Messaging Service
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">From *</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="(555) 555-5555" />
                  <div className="text-xs text-gray-500 mt-1">Twilio Phone Number.</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Twilio SID *</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Twilio String ID" />
                  <div className="text-xs text-gray-500 mt-1">Twilio String Identifier (SID)</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Twilio AuthToken *</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Twilio AuthToken" />
                  <div className="text-xs text-gray-500 mt-1">Twilio Auth Token</div>
                </div>
                <div className="flex justify-end gap-3 mt-2">
                  <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
                  <button className="bg-gray-100 text-gray-400 font-semibold px-6 py-2 rounded-md text-base cursor-not-allowed" disabled>Send Test Message</button>
                </div>
              </div>
            </div>
          )}
          {/* Custom Provider Settings */}
          {selected === 'Custom' && (
            <div className="flex flex-col gap-6 mt-4">
              <div className="font-semibold text-gray-700 mb-2">Provider Configuration</div>
              <div className="text-gray-500 text-sm mb-2">Configure a custom action to run for your phone message provider. Need help? <a href="#" className="text-blue-700 underline">Check our instructions</a>.</div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-2">
                <div className="text-xs text-gray-700 mb-2"><b>Note:</b> To use the Expanded Editor, you must save the Custom Provider by clicking the Save button below. Once the Custom Provider is configured as your chosen Phone Provider, you will have access to the Expanded Editor. To have the changes made in the Expanded Editor reflected in your Custom Provider, you must click either the Deploy button when viewing the Actions code within the Expanded Editor or click the Save button on the Phone Provider configuration page.</div>
                <button className="bg-gray-100 text-gray-700 font-semibold px-4 py-2 rounded-md text-sm border border-gray-300 mb-2" disabled>Edit In Expanded Editor</button>
                <MonacoEditor
                  height="200"
                  language="javascript"
                  value={`/**\n * Handler to be executed while sending a phone notification\n * @param {Event} event - Details about the user and the context in which they are logging in.\n * @param {CustomPhoneProviderAPI} api - Methods and utilities to help change the behavior of sending\n */\nexports.onExecuteCustomPhoneProvider = async (event, api) => {\n  // Code goes here\n  return;\n};`}
                  options={{ readOnly: true, minimap: { enabled: false }, fontSize: 14, scrollBeyondLastLine: false }}
                />
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
                <button className="bg-gray-100 text-gray-400 font-semibold px-6 py-2 rounded-md text-base cursor-not-allowed" disabled>Send Test Message</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 