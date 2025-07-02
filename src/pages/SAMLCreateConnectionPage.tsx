import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function SAMLCreateConnectionPage() {
  const navigate = useNavigate();
  const { type = 'SAML' } = useParams();
  const typeLabel = type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="min-h-screen bg-gray-50 w-full py-10 px-2 w-screen">
      <div className="max-w-3xl mx-auto">
        <button className="text-gray-700 bg-white text-sm flex items-center hover:underline mb-8" onClick={() => navigate(`/dashboard/au/dev-1md8m8doz8ynfucb/connections/enterprise/${type}`)}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mr-1"><path d="M15 19l-7-7 7-7" /></svg>
          Back to {typeLabel}
        </button>
        <div className="flex items-center mb-10">
          <span className="bg-gray-100 rounded-xl p-4 mr-5 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M10 9H7v2h3V9zM17 15v-2H7v2h10zM17 19v-2H7v2h10z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M6 1a3 3 0 00-3 3v16a3 3 0 003 3h12a3 3 0 003-3V9a1 1 0 00-.293-.707l-7-7A1 1 0 0013 1H6zM5 4a1 1 0 011-1h6v6a1 1 0 001 1h6v10a1 1 0 01-1 1H6a1 1 0 01-1-1V4zm12.586 4L14 4.414V8h3.586z" fill="currentColor"></path></svg>
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">New {typeLabel} Connection</h1>
        </div>
        <form className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 flex flex-col gap-8">
          <div className="font-bold text-xl mb-2 text-gray-900">General</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
              <div>
                <label className="block font-semibold mb-1 text-gray-900">Connection name *</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="" />
                <div className="text-xs text-gray-500 mt-1">This is a logical identifier of the connection. This name cannot be changed.</div>
              </div>
              <div>
                <label className="block font-semibold mb-1 text-gray-900">Sign In URL *</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder={`https://${type.toLowerCase()}.example.com/login`} />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-gray-900">X509 Signing Certificate *</label>
                <div className="flex items-center gap-3">
                  <button type="button" className="border border-gray-300 rounded-lg px-3 py-1.5 bg-white font-medium hover:bg-gray-100 transition" onClick={() => fileInputRef.current?.click()}>+ Choose File</button>
                  <span className="text-gray-500 text-sm">No files selected</span>
                  <input ref={fileInputRef} type="file" className="hidden" />
                </div>
                <div className="text-xs text-gray-500 mt-1">{typeLabel} server public key encoded in PEM or CER format</div>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <label className="font-semibold text-gray-900">Enable Sign Out</label>
                <span className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" checked readOnly className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer left-0 top-0 shadow" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.04)'}} />
                  <span className="block overflow-hidden h-6 rounded-full bg-green-400"></span>
                </span>
              </div>
              <div>
                <label className="block font-semibold mb-1 text-gray-900">Sign Out URL</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder={`https://${type.toLowerCase()}.example.com/logout`} />
                <div className="text-xs text-gray-500 mt-1">Optional: when empty this field defaults to the Sign In URL.</div>
              </div>
              <div>
                <label className="block font-semibold mb-1 text-gray-900">User ID Attribute</label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" placeholder="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier" />
                <div className="text-xs text-gray-500 mt-1">Optional: This is the attribute in the {typeLabel} token that will be mapped to the user_id property in Auth0.</div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <label className="font-semibold text-gray-900">Debug Mode</label>
                <span className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer left-0 top-0 shadow" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.04)'}} />
                  <span className="block overflow-hidden h-6 rounded-full bg-gray-200"></span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <label className="font-semibold text-gray-900">Sign Request</label>
                <span className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" checked readOnly className="absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer left-0 top-0 shadow" style={{boxShadow: '0 1px 3px rgba(0,0,0,0.04)'}} />
                  <span className="block overflow-hidden h-6 rounded-full bg-green-400"></span>
                </span>
              </div>
              <div>
                <label className="block font-semibold mb-1 text-gray-900">Sign Request Algorithm</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                  <option value="">Select algorithm</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1 text-gray-900">Sign Request Algorithm Digest</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                  <option value="">Select digest</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1 text-gray-900">Protocol Binding</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                  <option value="">Select binding</option>
                </select>
                <div className="text-xs text-gray-500 mt-1">Applies only to the {typeLabel} Request Binding. The {typeLabel} Response Binding only supports HTTP-POST.</div>
              </div>
              <div>
                <label className="block font-semibold mb-1 text-gray-900">Request Template (optional)</label>
                <pre className="bg-gray-900 text-white rounded-xl p-4 text-sm overflow-x-auto min-h-[180px] font-mono">
{`<samlp:AuthnRequest xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol"\n  AssertionConsumerServiceURL="@@AssertServiceURLAndDestination@@"\n  ID="@@ID@@"\n  IssueInstant="@@IssueInstant@@"\n  ProtocolBinding="@@ProtocolBinding@@" Version="2.0">\n  <saml:Issuer xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion">@@Issuer@@</saml:Issuer>\n</samlp:AuthnRequest>`}
                </pre>
              </div>
            </div>
          </div>
          <button className="w-48 mx-auto mt-10 bg-blue-600 text-white font-semibold rounded-lg px-8 py-3 text-lg hover:bg-blue-700 transition">Create</button>
        </form>
      </div>
    </div>
  );
} 