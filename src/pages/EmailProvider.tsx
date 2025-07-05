import React, { useState } from 'react';
// @ts-ignore
import MonacoEditor from 'react-monaco-editor';

const PROVIDERS = [
  { name: 'Mandrill', icon: <img src="https://cdn.auth0.com/manhattan/versions/1.6249.0/assets/logos/mandrill/mandrill-avatar.svg" alt="Mandrill" className="w-7 h-7" /> },
  { name: 'Amazon SES', icon: <img src="https://cdn.auth0.com/manhattan/versions/1.6249.0/assets/logos/aws/aws-avatar.svg" alt="Amazon SES" className="w-7 h-7" /> },
  { name: 'Azure Communication Services', icon: <img src="https://cdn.auth0.com/manhattan/versions/1.6249.0/assets/logos/azure-communication-services/azure-communication-services-avatar.svg" alt="Azure Communication Services" className="w-7 h-7" /> },
  { name: 'Microsoft 365', icon: <img src="https://cdn.auth0.com/manhattan/versions/1.6249.0/assets/logos/microsoft/microsoft-avatar.svg" alt="Microsoft 365" className="w-7 h-7" /> },
  { name: 'Sendgrid', icon: <img src="https://cdn.auth0.com/manhattan/versions/1.6249.0/assets/logos/sendgrid/sendgrid-avatar.svg" alt="Sendgrid" className="w-7 h-7" /> },
  { name: 'SparkPost', icon: <img src="https://cdn.auth0.com/manhattan/versions/1.6249.0/assets/logos/sparkpost/sparkpost-avatar.svg" alt="SparkPost" className="w-7 h-7" /> },
  { name: 'Mailgun', icon: <img src="https://cdn.auth0.com/manhattan/versions/1.6249.0/assets/logos/mailgun/mailgun-avatar.svg" alt="Mailgun" className="w-7 h-7" /> },
  { name: 'SMTP Provider', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1 6c0-1.652 1.348-3 3-3h16c1.652 0 3 1.348 3 3v12c0 1.652-1.348 3-3 3H4c-1.652 0-3-1.348-3-3V6zm2.107-.446L12 11.779l8.893-6.225A1.006 1.006 0 0020 5H4c-.388 0-.728.227-.893.554zM21 7.921l-8.427 5.898a1 1 0 01-1.146 0L3 7.921V18c0 .548.452 1 1 1h16c.548 0 1-.452 1-1V7.92z" fill="#6366F1"></path></svg>
  ) },
  { name: 'Custom Provider', icon: <img src="https://cdn.auth0.com/manhattan/versions/1.6249.0/assets/phone-providers/custom.png" alt="Custom Provider" className="w-7 h-7" /> },
];

export default function EmailProvider() {
  const [selected, setSelected] = useState('Sendgrid');
  const [isEnabled, setIsEnabled] = useState(true);
  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-6xl ">
        <h1 className="text-3xl font-bold mb-2">Email Provider</h1>
        <div className="text-gray-600 mb-6">
          Standard welcome, password reset, and account verification email-based workflows, built right into Auth0. <a href="#" className="text-blue-700 underline">Show more</a>
        </div>
        <div className="bg-blue-50 border border-blue-200 text-blue-900 rounded-lg px-4 py-3 mb-8 flex items-start gap-3">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-1"><circle cx="12" cy="12" r="10" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2"/><path d="M12 8v4m0 4h.01" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/></svg>
          <div>
            <b>Heads up!</b> If you are trying to access a service behind a firewall, make sure to open the right ports and allow inbound connections from these IP addresses: <span className="font-mono">13.210.52.131, 54.153.131.0, 13.55.232.24</span>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6 mb-8 flex items-center justify-between">
          <div>
            <div className="font-semibold text-lg mb-1">Use my own email provider</div>
            <div className="text-gray-500">Route all emails that are part of Auth0's authentication workflows through a high-volume email service.</div>
          </div>
          <button
            type="button"
            aria-pressed={isEnabled}
            onClick={() => setIsEnabled(v => !v)}
            className={`w-12 h-7 rounded-full border-2 ${isEnabled ? 'border-blue-600 bg-blue-100' : 'border-gray-300 bg-gray-100'} relative transition-colors`}
          >
            <span className={`inline-block w-6 h-6 rounded-full absolute top-0.5 shadow transition-all duration-200 ${isEnabled ? 'left-5 bg-blue-600' : 'left-0.5 bg-gray-300'}`} />
          </button>
        </div>
        <div className="relative">
          <div className={`bg-white border border-gray-200 rounded-xl shadow p-6 flex flex-col md:flex-row gap-8 mb-8 ${!isEnabled ? 'opacity-60 pointer-events-none select-none' : ''}`}> 
            <div className="w-full md:w-1/3">
              <div className="text-gray-500 font-medium mb-4">Email Provider</div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="text-gray-500 font-medium mb-2">Choose a provider</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-2">
                {PROVIDERS.map(p => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setSelected(p.name)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left font-medium transition-all ${selected===p.name ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'}`}
                  >
                    {p.icon}
                    <span>{p.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Overlay jika disabled */}
          {!isEnabled && <div className="absolute inset-0 bg-white opacity-40 rounded-xl z-10" />}
        </div>
        {/* Settings untuk provider, mockup: Sendgrid aktif, lainnya hidden */}
        {/* Mandrill */}
        {selected === 'Mandrill' && isEnabled && (
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-1/3">
              <div className="font-semibold text-gray-700 mb-2">Mandrill Settings</div>
              <div className="text-gray-500 text-sm mb-2">Your <a href='#' className='text-blue-700 underline'>credentials</a> will always be encrypted in our database. Sign up for a <a href='#' className='text-blue-700 underline'>Mandrill</a> account and create a new API key <a href='#' className='text-blue-700 underline'>in the dashboard</a>.</div>
              <div className="text-gray-500 text-sm">Need help? Check <a href="#" className="text-blue-700 underline">our instructions</a>.</div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Your App &lt;support@yourapp.com&gt;" />
                <div className="text-xs text-gray-500 mt-1">Default from address for emails sent via Auth0. This property is required for any customized email templates to be used when emails are sent.</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">API Key *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Mandrill API Key" />
                <div className="text-xs text-gray-500 mt-1">Your Mandrill API Key</div>
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
                <button className="bg-gray-100 text-gray-400 font-semibold px-6 py-2 rounded-md text-base cursor-not-allowed" disabled>Send Test Email</button>
              </div>
            </div>
          </div>
        )}
        {/* Amazon SES */}
        {selected === 'Amazon SES' && isEnabled && (
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-1/3">
              <div className="font-semibold text-gray-700 mb-2">Amazon SES Settings</div>
              <div className="text-gray-500 text-sm mb-2">Your <a href='#' className='text-blue-700 underline'>credentials</a> will always be encrypted in our database. Sign up for a <a href='#' className='text-blue-700 underline'>Amazon</a> account and <a href='#' className='text-blue-700 underline'>configure Amazon SES</a> by validating your domain and requesting production access.</div>
              <div className="text-gray-500 text-sm">Need help? Check our instructions for <a href='#' className='text-blue-700 underline'>API credentials</a> and <a href='#' className='text-blue-700 underline'>SMTP credentials</a>.</div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Your App &lt;support@yourapp.com&gt;" />
                <div className="text-xs text-gray-500 mt-1">Default from address for emails sent via Auth0. This property is required for any customized email templates to be used when emails are sent.</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Access Key Id *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="AWS Access Key Id" />
                <div className="text-xs text-gray-500 mt-1">AWS Access Key Id</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Secret Access Key *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="AWS Secret Key" />
                <div className="text-xs text-gray-500 mt-1">AWS Secret Key</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Region *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="us-west-2" />
                <div className="text-xs text-gray-500 mt-1">Your AWS default region</div>
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
                <button className="bg-gray-100 text-gray-400 font-semibold px-6 py-2 rounded-md text-base cursor-not-allowed" disabled>Send Test Email</button>
              </div>
            </div>
          </div>
        )}
        {/* Azure Communication Services */}
        {selected === 'Azure Communication Services' && isEnabled && (
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-1/3">
              <div className="font-semibold text-gray-700 mb-2">Azure Communication Services Settings</div>
              <div className="text-gray-500 text-sm mb-2">Your Azure Communication Services Credentials are always encrypted in our database. Before continuing, ensure that you sign up for a <a href='#' className='text-blue-700 underline'>Microsoft Azure account</a> and <a href='#' className='text-blue-700 underline'>create a Communication Services resource</a>.</div>
              <div className="text-gray-500 text-sm mb-2">For more information, see <a href='#' className='text-blue-700 underline'>Configure Azure Communication Services as External SMTP Email Provider</a>.</div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Your App &lt;support@yourapp.com&gt;" />
                <div className="text-xs text-gray-500 mt-1">Default from address for emails sent via Auth0. This property is required for any customized email templates to be used when emails are sent.</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Connection String *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Azure Communication Services Connection String" />
                <div className="text-xs text-gray-500 mt-1">Your Azure Communication Services connection string.</div>
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
                <button className="bg-gray-100 text-gray-400 font-semibold px-6 py-2 rounded-md text-base cursor-not-allowed" disabled>Send Test Email</button>
              </div>
            </div>
          </div>
        )}
        {/* Microsoft 365 */}
        {selected === 'Microsoft 365' && isEnabled && (
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-1/3">
              <div className="font-semibold text-gray-700 mb-2">Microsoft 365 - Exchange Settings</div>
              <div className="text-gray-500 text-sm mb-2">Your Microsoft Client Credentials are always encrypted in our database. Before continuing, ensure that you sign up for a <a href='#' className='text-blue-700 underline'>Microsoft 365 account</a> with an active <a href='#' className='text-blue-700 underline'>Exchange license</a>. Additionally you will require an <a href='#' className='text-blue-700 underline'>Azure AD Application</a> with Mail.Send permissions.</div>
              <div className="text-gray-500 text-sm mb-2">We recommend that your application has proper resource restrictions for additional security.</div>
              <div className="text-gray-500 text-sm mb-2">For more information, see Configure Microsoft 365 Exchange Online as External SMTP Email Provider.</div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="support@yourapp.com" />
                <div className="text-xs text-gray-500 mt-1">Default from address for emails sent via Auth0. This property is required for any customized email templates to be used when emails are sent.</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tenant ID *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Microsoft 365 Tenant ID" />
                <div className="text-xs text-gray-500 mt-1">Your Tenant Identifier for Microsoft 365</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Client ID *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Active Directory Application Client ID" />
                <div className="text-xs text-gray-500 mt-1">The Application Client Identifier for your Active Directory App Registration</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Client Secret *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Active Directory Application Client Secret" />
                <div className="text-xs text-gray-500 mt-1">The Application Client Secret for your Active Directory App Registration</div>
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
                <button className="bg-gray-100 text-gray-400 font-semibold px-6 py-2 rounded-md text-base cursor-not-allowed" disabled>Send Test Email</button>
              </div>
            </div>
          </div>
        )}
        {/* Sendgrid (default mockup) */}
        {selected === 'Sendgrid' && isEnabled && (
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-1/3">
              <div className="font-semibold text-gray-700 mb-2">Sendgrid Settings</div>
              <div className="text-gray-500 text-sm mb-2">Your <a href="#" className="text-blue-700 underline">SendGrid API Key</a> will always be encrypted in our database. Sign up for a <a href="#" className="text-blue-700 underline">SendGrid</a> account, or if you have a Microsoft Azure subscription you can get a free account in the Azure Marketplace.</div>
              <div className="text-gray-500 text-sm">Need help? Check <a href="#" className="text-blue-700 underline">our instructions</a>.</div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Your App &lt;support@yourapp.com&gt;" />
                <div className="text-xs text-gray-500 mt-1">Default from address for emails sent via Auth0. This property is required for any customized email templates to be used when emails are sent.</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">API Key *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Sendgrid API Key" />
                <div className="text-xs text-gray-500 mt-1">Your Sendgrid API Key</div>
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
                <button className="bg-gray-100 text-gray-400 font-semibold px-6 py-2 rounded-md text-base cursor-not-allowed" disabled>Send Test Email</button>
              </div>
            </div>
          </div>
        )}
        {/* SparkPost */}
        {selected === 'SparkPost' && isEnabled && (
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-1/3">
              <div className="font-semibold text-gray-700 mb-2">SparkPost Settings</div>
              <div className="text-gray-500 text-sm mb-2">Your <a href='#' className='text-blue-700 underline'>SparkPost Credentials</a> will always be encrypted in our database. Sign up for a <a href='#' className='text-blue-700 underline'>SparkPost</a> account.</div>
              <div className="text-gray-500 text-sm">Need help? Check <a href="#" className="text-blue-700 underline">our instructions</a>.</div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Your App &lt;support@yourapp.com&gt;" />
                <div className="text-xs text-gray-500 mt-1">Default from address for emails sent via Auth0. This property is required for any customized email templates to be used when emails are sent.</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">API Key *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="SparkPost API Key" />
                <div className="text-xs text-gray-500 mt-1">Your SparkPost API Key</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input type="radio" name="sparkpost-region" className="accent-blue-600" checked readOnly /> SparkPost US
                  </label>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input type="radio" name="sparkpost-region" className="accent-blue-600" readOnly /> SparkPost EU
                  </label>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
                <button className="bg-gray-100 text-gray-400 font-semibold px-6 py-2 rounded-md text-base cursor-not-allowed" disabled>Send Test Email</button>
              </div>
            </div>
          </div>
        )}
        {/* Mailgun */}
        {selected === 'Mailgun' && isEnabled && (
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-1/3">
              <div className="font-semibold text-gray-700 mb-2">Mailgun Settings</div>
              <div className="text-gray-500 text-sm mb-2">Your <a href='#' className='text-blue-700 underline'>Mailgun API Key</a> will always be encrypted in our database. Sign up for a <a href='#' className='text-blue-700 underline'>Mailgun</a> account.</div>
              <div className="text-gray-500 text-sm">Need help? Check <a href="#" className="text-blue-700 underline">our instructions</a>.</div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Your App &lt;support@yourapp.com&gt;" />
                <div className="text-xs text-gray-500 mt-1">Default from address for emails sent via Auth0. This property is required for any customized email templates to be used when emails are sent.</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">API Key *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Mailgun API Key" />
                <div className="text-xs text-gray-500 mt-1">Your Mailgun API Key</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Domain *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Domain" />
                <div className="text-xs text-gray-500 mt-1">Your Domain registered with Mailgun</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input type="radio" name="mailgun-region" className="accent-blue-600" checked readOnly /> Mailgun US
                  </label>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <input type="radio" name="mailgun-region" className="accent-blue-600" readOnly /> Mailgun EU
                  </label>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
                <button className="bg-gray-100 text-gray-400 font-semibold px-6 py-2 rounded-md text-base cursor-not-allowed" disabled>Send Test Email</button>
              </div>
            </div>
          </div>
        )}
        {/* SMTP Provider */}
        {selected === 'SMTP Provider' && isEnabled && (
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 flex flex-col md:flex-row gap-8 mb-8">
            <div className="w-full md:w-1/3">
              <div className="font-semibold text-gray-700 mb-2">SMTP Provider Settings</div>
              <div className="text-gray-500 text-sm mb-2">Your SMTP Credentials will always be encrypted in our database. A few important expectations about your server:</div>
              <ul className="text-gray-500 text-sm mb-2 list-disc ml-5">
                <li>It must support LOGIN authentication</li>
                <li>It must support TLS 1.0 or higher</li>
              </ul>
              <div className="text-gray-500 text-sm mb-2">Please save your settings and use the "send test email" button to test the connection.</div>
              <div className="text-gray-500 text-sm">Need help? Check <a href="#" className="text-blue-700 underline">our instructions</a>.</div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Your App &lt;support@yourapp.com&gt;" />
                <div className="text-xs text-gray-500 mt-1">Default from address for emails sent via Auth0. This property is required for any customized email templates to be used when emails are sent.</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Host *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="your.smtp.host.com" />
                <div className="text-xs text-gray-500 mt-1">Hostname or IP address of your SMTP server.</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Port *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="587" />
                <div className="text-xs text-gray-500 mt-1">Port used by your SMTP server. Common ports include 25, 465, and 587. Please avoid using port 25 if you can, since many providers have limitations on this port.</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="SMTP Username" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="SMTP Password" />
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
                <button className="bg-gray-100 text-gray-400 font-semibold px-6 py-2 rounded-md text-base cursor-not-allowed" disabled>Send Test Email</button>
              </div>
            </div>
          </div>
        )}
        {/* Custom Provider */}
        {selected === 'Custom Provider' && isEnabled && (
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6 flex flex-col gap-6 mb-8">
            <div className="font-semibold text-gray-700 mb-2">Custom Provider Settings</div>
            <div className="text-gray-500 text-sm mb-2">Configure a custom action to run for your email message provider.</div>
            <div className="text-gray-500 text-sm mb-2">Need help? Check <a href="#" className="text-blue-700 underline">our instructions</a>.</div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-2">
              <div className="text-xs text-gray-700 mb-2"><b>Note:</b> To use the Expanded Editor, you must save the Custom Provider by clicking the Save button below. Once the Custom Provider is configured as your chosen Email Provider, you will have access to the Expanded Editor. To have the changes made in the Expanded Editor reflected in your Custom Provider, you must click either the Deploy button when viewing the Actions code within the Expanded Editor or click the Save button on the Email Provider configuration page.</div>
              <button className="bg-gray-100 text-gray-700 font-semibold px-4 py-2 rounded-md text-sm border border-gray-300 mb-2">Edit In Expanded Editor</button>
              <MonacoEditor
                height="200"
                language="javascript"
                value={`/**\n * Handler to be executed while sending an email notification\n * @param {Event} event - Details about the user and the context in which they are logging in.\n * @param {CustomEmailProviderAPI} api - Methods and utilities to help change the behavior of sending\n */\nexports.onExecuteCustomEmailProvider = async (event, api) => {\n  // Code goes here\n  return;\n};`}
                options={{ readOnly: true, minimap: { enabled: false }, fontSize: 14, scrollBeyondLastLine: false }}
              />
            </div>
            <div className="flex justify-end gap-3 mt-2">
              <button className="bg-[#3B5CCC] hover:bg-[#2d4bb3] text-white font-semibold px-6 py-2 rounded-md text-base">Save</button>
              <button className="bg-gray-100 text-gray-400 font-semibold px-6 py-2 rounded-md text-base cursor-not-allowed" disabled>Send Test Email</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 