import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface QuickstartDocsProps {
  technology: {
    id: string;
    name: string;
    author?: string;
    timeEstimate?: string;
  };
  onBack: () => void;
}

const QuickstartDocs: React.FC<QuickstartDocsProps> = ({ technology, onBack }) => {
  const steps = [
    { id: 1, title: 'Configure Auth0', link: '#configure-auth0' },
    { id: 2, title: `Configure ${technology.name} to Use Auth0`, link: '#configure-app' },
    { id: 3, title: 'Logging In', link: '#logging-in' },
    { id: 4, title: 'Handling Authentication Callback', link: '#callback' },
    { id: 5, title: 'Displaying User Information', link: '#user-info' },
    { id: 6, title: 'Logging Out', link: '#logout' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="bg-transparent text-[#6E6E6E] hover:text-[#4A4A4A] flex items-center text-sm"
        >
          <svg className="w-4 h-4 mr-2 text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
          </svg>
          Change Technology
        </button>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[32px] font-normal text-gray-900">{technology.name}</h1>
        <div className="space-x-3">
          <a
            href="https://github.com/auth0-samples"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            VIEW ON GITHUB
          </a>
          <button className="inline-block px-4 py-2 bg-[#635DFF] text-white rounded text-sm font-medium hover:bg-blue-700">
            DOWNLOAD SAMPLE
          </button>
        </div>
      </div>

      {technology.author && (
        <div className="flex items-center space-x-2 mb-6">
          <img
            src="https://cdn2.auth0.com/docs/1.14446.0/media/github/sergiu-ghitea.jpg"
            alt={technology.author}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-gray-600">By {technology.author}</span>
        </div>
      )}

      <p className="text-lg text-gray-700 mb-8">
        This tutorial demonstrates how to add user login to a {technology.name} web application using Auth0.
      </p>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">I want to integrate with my app</h2>
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {technology.timeEstimate}
          </div>
          <div className="space-y-3">
            {steps.map(step => (
              <a
                key={step.id}
                href={step.link}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm mr-3">
                  {step.id}
                </span>
                <span className="text-sm">{step.title}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4">I want to explore a sample app</h2>
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            2 MINUTES
          </div>
          <p className="text-gray-600 text-sm mb-6">
            Get a sample configured with your account settings or check it out on Github.
          </p>
          <button className="w-full py-2 bg-[#635DFF] text-white rounded text-sm font-medium hover:bg-blue-700">
            DOWNLOAD SAMPLE
          </button>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-8">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-gray-600 mt-0.5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm text-gray-600">
              New to Auth0? Learn <a href="#" className="text-blue-600 hover:underline">How Auth0 works</a>,
              how it <a href="#" className="text-blue-600 hover:underline">integrates with Regular Web Applications</a> and
              which <a href="#" className="text-blue-600 hover:underline">protocol</a> it uses.
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-blue max-w-none">
        <h2>Configure Auth0</h2>
        <h3>Get Your Application Keys</h3>
        <p>
          When you signed up for Auth0, a new application was created for you, or you could have created a new one.
          You will need some details about that application to communicate with Auth0. You can get these details from
          the <a href="https://manage.auth0.com/#/applications" className="text-blue-600 hover:underline">Application Settings</a> section
          in the Auth0 dashboard.
        </p>
      </div>
    </div>
  );
};

export default QuickstartDocs; 