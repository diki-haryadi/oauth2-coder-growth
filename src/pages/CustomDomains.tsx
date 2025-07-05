import React from 'react';

export default function CustomDomains() {
  return (
    <div className="min-h-screen bg-white w-screen p-8">
    <div className="max-w-6xl bg-white mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Custom Domains</h1>
      <div className="text-gray-600 mb-8">
        Using a custom domain with Auth0 allows you to maintain a consistent user experience. Your users will <span className='text-blue-700 underline'>remain in your domain</span> instead of <b>dev-1md8m8doz8ynfucb.au.auth0.com</b>. For more information about custom domains, please refer to our{' '}
        <a href="#" className="text-blue-700 underline border border-blue-200 rounded px-1 py-0.5 inline-flex items-center" target="_blank" rel="noopener noreferrer">documentation <svg className="ml-1" width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M14 3h7v7m0-7L10 14" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 12v7a2 2 0 002 2h7" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>.
      </div>
      <div className="flex justify-center">
        <div className="relative w-full max-w-3xl rounded-xl overflow-hidden shadow-lg flex min-h-[220px]"
          style={{
            backgroundImage: "url('https://cdn.auth0.com/manhattan/versions/1.6246.0/assets/universal-login/universal-login-preview.svg'), linear-gradient(100deg, #6C47FF 0%, #4F8CFF 100%)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="flex-1 p-8 text-white flex flex-col justify-center">
            <div className="text-xl font-semibold mb-2">Enable custom domain</div>
            <div className="mb-6 text-base font-normal">
              Using a custom domain helps your users feel confident that they're providing their credentials to the right party. To set up a free custom domain with Auth0, we will need to do a credit card verification for fraud prevention. <b>Don't worry, you won't be charged.</b>
            </div>
            <div className="flex gap-3">
              <button className="bg-white text-[#6C47FF] font-semibold px-4 py-2 rounded shadow hover:bg-gray-100">Add Credit Card</button>
              <button className="bg-white/20 text-white font-semibold px-4 py-2 rounded border border-white/30 hover:bg-white/10">Learn More</button>
            </div>
          </div>
          <div className="hidden md:flex items-end justify-end flex-1">
            <img src="/custom-domain-browser.png" alt="browser" className="w-72 h-44 object-contain mr-8 mb-4" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
} 