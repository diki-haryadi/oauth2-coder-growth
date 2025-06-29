import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';
import QuickstartDocs from '../components/QuickstartDocs';

interface Technology {
  id: string;
  name: string;
  icon: string;
  author?: string;
  timeEstimate?: string;
}

const ApplicationQuickstart = () => {
  const { clientId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Quickstart');
  const [selectedTechnology, setSelectedTechnology] = useState<Technology | null>(null);
  const applicationType = "machine_to_machine";
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});
  const [selectedUserType, setSelectedUserType] = useState<'individuals' | 'business' | 'both'>('individuals');
  const [selectedLoginFlow, setSelectedLoginFlow] = useState<'credentials' | 'organization' | 'noprompt'>('credentials');
  const [flowStep, setFlowStep] = useState(1);

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopyStatus((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => setCopyStatus((prev) => ({ ...prev, [key]: false })), 1200);
    });
  };

  const regularTechnologies: Technology[] = [
    { id: 'dotnet-android-ios', name: '.NET Android and iOS', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/dotnet.svg' },
    { id: 'android', name: 'Android', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/android.svg' },
    { id: 'android-facebook', name: 'Android - Facebook Login', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/android.svg' },
    { id: 'device-flow', name: 'Device Authorization Flow', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/device-flow.svg' },
    { id: 'expo', name: 'Expo', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/react.svg' },
    { id: 'flutter', name: 'Flutter', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/flutter.svg' },
    { id: 'ionic-angular', name: 'Ionic & Capacitor (Angular)', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/ionic.svg' },
    { id: 'ionic-react', name: 'Ionic & Capacitor (React)', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/ionic.svg' },
    { id: 'ionic-vue', name: 'Ionic & Capacitor (Vue)', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/ionic.svg' },
    { id: 'ios', name: 'iOS / macOS', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/apple.svg' },
    { id: 'maui', name: 'MAUI', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/dotnet.svg' },
    { id: 'react-native', name: 'React Native', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/react-native.svg' },
    { id: 'uwp', name: 'UWP', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/windows.svg' },
    { id: 'wpf', name: 'WPF / Winforms', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/windows.svg' },
    { id: 'xamarin', name: 'Xamarin', icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/xamarin.svg' }
  ];

  const m2mTechnologies: Technology[] = [
    { 
      id: 'apache', 
      name: 'Apache', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/apache.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'aspnet-owin', 
      name: 'ASP.NET (OWIN)', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/asp.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'aspnet-core-blazor', 
      name: 'ASP.NET Core Blazor Server', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/dotnet.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'aspnet-core-mvc', 
      name: 'ASP.NET Core MVC', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/dotnet.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'django', 
      name: 'Django', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/python.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'express', 
      name: 'Express', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/js.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'go', 
      name: 'Go', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/golang.svg',
      timeEstimate: '15 MINUTES',
      author: 'Sergiu Ghitea'
    },
    { 
      id: 'java', 
      name: 'Java', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/java.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'java-ee', 
      name: 'Java EE', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/java.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'java-spring-boot', 
      name: 'Java Spring Boot', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/spring.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'laravel', 
      name: 'Laravel', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/laravel.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'nextjs', 
      name: 'Next.js', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/nextjs.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'nginx-plus', 
      name: 'NGINX Plus', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/nginx.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'php', 
      name: 'PHP', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/php.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'python', 
      name: 'Python', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/python.svg',
      timeEstimate: '15 MINUTES'
    },
    { 
      id: 'ruby-on-rails', 
      name: 'Ruby On Rails', 
      icon: 'https://cdn2.auth0.com/docs/1.14446.0/img/platforms/rails.svg',
      timeEstimate: '15 MINUTES'
    }
  ];

  const technologies = applicationType === 'machine_to_machine' ? m2mTechnologies : regularTechnologies;
  const tabs = ['Quickstart', 'Settings', 'Credentials','APIs','Addons', 'Connections', 'Login Experience'];

  const filteredTechnologies = technologies.filter(tech =>
    tech.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mapping preview content for each userType and loginFlow
  const flowPreviews = {
    individuals: {
      credentials: [
        // Step 1
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="i-c-1">
          <div className="flex flex-col items-center w-full">
            <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M6 20c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded mb-4"></div>
            <input type="text" value="" placeholder="Email address" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
            <div className="relative w-full mb-3">
              <input type="password" value="" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /></svg>
            </div>
            <button className="w-full py-2 bg-blue-600 text-white rounded opacity-60 cursor-not-allowed mt-2">&nbsp;</button>
          </div>
        </div>,
        // Step 2
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="i-c-2">
          <svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
          <div className="text-gray-900 font-semibold text-xl">Success!</div>
        </div>
      ],
      organization: [
        // Step 1
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="i-o-1">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /></svg>
            <svg className="w-6 h-6 text-gray-400 mx-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14" /></svg>
            <svg className="w-8 h-8 text-blue-500 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
          </div>
          <div className="text-gray-900 font-semibold mb-2">Organization ID:</div>
          <div className="bg-gray-100 rounded px-4 py-2 font-mono text-gray-500">org_xxxxxxxxxxxxxxxxxx</div>
        </div>,
        // Step 2
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="i-o-2">
          <svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
          <div className="text-gray-900 font-semibold text-xl">Success!</div>
        </div>
      ],
      noprompt: [
        // Step 1
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="i-n-1">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /></svg>
            <svg className="w-6 h-6 text-gray-400 mx-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14" /></svg>
            <svg className="w-8 h-8 text-blue-500 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
          </div>
          <div className="text-gray-900 font-semibold mb-2">Organization ID:</div>
          <div className="bg-gray-100 rounded px-4 py-2 font-mono text-gray-500">org_xxxxxxxxxxxxxxxxxx</div>
        </div>,
        // Step 2
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="i-n-2">
          <div className="flex flex-col items-center w-full">
            <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /></svg>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded mb-4"></div>
            <input type="text" value="" placeholder="Email address" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
            <div className="relative w-full mb-3">
              <input type="password" value="" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /></svg>
            </div>
            <button className="w-full py-2 bg-blue-600 text-white rounded opacity-60 cursor-not-allowed mt-2">&nbsp;</button>
          </div>
        </div>,
        // Step 3
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="i-n-3">
          <svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
          <div className="text-gray-900 font-semibold text-xl">Success!</div>
        </div>
      ]
    },
    business: {
      credentials: [
        // Step 1
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="b-c-1">
          <div className="flex flex-col items-center w-full">
            <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /></svg>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded mb-4"></div>
            <input type="text" value="" placeholder="Email address" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
            <div className="relative w-full mb-3">
              <input type="password" value="" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /></svg>
            </div>
            <button className="w-full py-2 bg-blue-600 text-white rounded opacity-60 cursor-not-allowed mt-2">&nbsp;</button>
          </div>
        </div>,
        // Step 2
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="b-c-2">
          <svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
          <div className="text-gray-900 font-semibold text-xl">Success!</div>
        </div>
      ],
      organization: [
        // Step 1
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="b-o-1">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /></svg>
            <svg className="w-6 h-6 text-gray-400 mx-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14" /></svg>
            <svg className="w-8 h-8 text-blue-500 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
          </div>
          <div className="text-gray-900 font-semibold mb-2">Organization ID:</div>
          <div className="bg-gray-100 rounded px-4 py-2 font-mono text-gray-500">org_xxxxxxxxxxxxxxxxxx</div>
        </div>,
        // Step 2
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="b-o-2">
          <div className="flex flex-col items-center w-full">
            <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /></svg>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded mb-4"></div>
            <input type="text" value="" placeholder="Email address" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
            <div className="relative w-full mb-3">
              <input type="password" value="" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /></svg>
            </div>
            <button className="w-full py-2 bg-blue-600 text-white rounded opacity-60 cursor-not-allowed mt-2">&nbsp;</button>
          </div>
        </div>,
        // Step 3
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="b-o-3">
          <svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
          <div className="text-gray-900 font-semibold text-xl">Success!</div>
        </div>
      ],
      noprompt: [
        // Step 1
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="b-n-1">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /></svg>
            <svg className="w-6 h-6 text-gray-400 mx-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14" /></svg>
            <svg className="w-8 h-8 text-blue-500 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
          </div>
          <div className="text-gray-900 font-semibold mb-2">Organization ID:</div>
          <div className="bg-gray-100 rounded px-4 py-2 font-mono text-gray-500">org_xxxxxxxxxxxxxxxxxx</div>
        </div>,
        // Step 2
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="b-n-2">
          <div className="flex flex-col items-center w-full">
            <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /></svg>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded mb-4"></div>
            <input type="text" value="" placeholder="Email address" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
            <div className="relative w-full mb-3">
              <input type="password" value="" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /></svg>
            </div>
            <button className="w-full py-2 bg-blue-600 text-white rounded opacity-60 cursor-not-allowed mt-2">&nbsp;</button>
          </div>
        </div>,
        // Step 3
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="b-n-3">
          <svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
          <div className="text-gray-900 font-semibold text-xl">Success!</div>
        </div>
      ]
    },
    both: {
      credentials: [
        // Step 1
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="bo-c-1">
          <div className="flex flex-col items-center w-full">
            <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M6 20c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded mb-4"></div>
            <input type="text" value="" placeholder="Email address" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
            <div className="relative w-full mb-3">
              <input type="password" value="" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /></svg>
            </div>
            <button className="w-full py-2 bg-blue-600 text-white rounded opacity-60 cursor-not-allowed mt-2">&nbsp;</button>
          </div>
        </div>,
        // Step 2
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="bo-c-2">
          <svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
          <div className="text-gray-900 font-semibold text-xl">Success!</div>
        </div>
      ],
      organization: [
        // Step 1
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="bo-o-1">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /></svg>
            <svg className="w-6 h-6 text-gray-400 mx-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14" /></svg>
            <svg className="w-8 h-8 text-blue-500 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
          </div>
          <div className="text-gray-900 font-semibold mb-2">Organization ID:</div>
          <div className="bg-gray-100 rounded px-4 py-2 font-mono text-gray-500">org_xxxxxxxxxxxxxxxxxx</div>
        </div>,
        // Step 2
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="bo-o-2">
          <div className="flex flex-col items-center w-full">
            <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /></svg>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded mb-4"></div>
            <input type="text" value="" placeholder="Email address" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
            <div className="relative w-full mb-3">
              <input type="password" value="" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /></svg>
            </div>
            <button className="w-full py-2 bg-blue-600 text-white rounded opacity-60 cursor-not-allowed mt-2">&nbsp;</button>
          </div>
        </div>,
        // Step 3
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="bo-o-3">
          <svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
          <div className="text-gray-900 font-semibold text-xl">Success!</div>
        </div>
      ],
      noprompt: [
        // Step 1
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="bo-n-1">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /></svg>
            <svg className="w-6 h-6 text-gray-400 mx-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14" /></svg>
            <svg className="w-8 h-8 text-blue-500 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
          </div>
          <div className="text-gray-900 font-semibold mb-2">Organization ID:</div>
          <div className="bg-gray-100 rounded px-4 py-2 font-mono text-gray-500">org_xxxxxxxxxxxxxxxxxx</div>
        </div>,
        // Step 2
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="bo-n-2">
          <div className="flex flex-col items-center w-full">
            <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /></svg>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded mb-4"></div>
            <input type="text" value="" placeholder="Email address" className="w-full mb-3 px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
            <div className="relative w-full mb-3">
              <input type="password" value="" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 placeholder-gray-400" disabled />
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /></svg>
            </div>
            <button className="w-full py-2 bg-blue-600 text-white rounded opacity-60 cursor-not-allowed mt-2">&nbsp;</button>
          </div>
        </div>,
        // Step 3
        <div className="bg-white rounded-lg p-6 flex flex-col items-center mb-6 w-80" key="bo-n-3">
          <svg className="w-12 h-12 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" /></svg>
          <div className="text-gray-900 font-semibold text-xl">Success!</div>
        </div>
      ]
    }
  };

  // Reset login flow and step when user type changes
  const handleUserTypeChange = (type) => {
    setSelectedUserType(type);
    setSelectedLoginFlow('credentials');
    setFlowStep(1);
  };
  // Reset step when login flow changes
  const handleLoginFlowChange = (flow) => {
    setSelectedLoginFlow(flow);
    setFlowStep(1);
  };

  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 bg-white">
        <div className="px-10 py-8">
          <div className="mb-6">
            <Link to="/dashboard/applications" className="text-blue-600 hover:text-blue-700 flex items-center">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Applications
            </Link>
          </div>

          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">My App</h1>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <span>{applicationType === 'machine_to_machine' ? 'Machine to Machine' : 'Native'}</span>
                <span className="mx-2">•</span>
                <span>Client ID: {clientId}</span>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 -mx-10 bg-white">
            <div className="px-10">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3 px-5 text-sm font-medium relative rounded-t-lg ${
                      activeTab === tab
                        ? 'text-blue-600 bg-white border-t border-l border-r border-gray-200'
                        : 'text-gray-500 hover:text-gray-700 bg-transparent'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {activeTab === 'Quickstart' && (
            selectedTechnology ? (
            <div className="mt-6">
              <button
                onClick={() => setSelectedTechnology(null)}
                className="flex items-center bg-[#2A2A2A] hover:bg-[#3A3A3A] text-[#CCCCCC] text-base mb-8 font-normal rounded-md px-4 py-2"
              >
                <svg className="w-5 h-5 mr-2 stroke-current" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Change Technology</span>
              </button>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold mb-4 text-[#1A1A1A]">I want to integrate with my app</h2>
                  <div className="flex items-center text-sm text-[#6E6E6E] mb-6">
                    <svg className="w-4 h-4 mr-2 stroke-current" viewBox="0 0 24 24" fill="none">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {selectedTechnology.timeEstimate}
                  </div>
                  <div className="space-y-3">
                    {[
                      'Configure Auth0',
                      `Configure ${selectedTechnology.name} to Use Auth0`,
                      'Logging In',
                      'Handling Authentication Callback',
                      'Displaying User Information',
                      'Logging Out'
                    ].map((step, index) => (
                      <a
                        key={step}
                        href={`#${step.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center text-[#635DFF] hover:text-[#3B3684]"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#F5F5F5] flex items-center justify-center text-sm mr-3 text-[#6E6E6E]">
                          {index + 1}
                        </span>
                        <span className="text-sm">{step}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h2 className="text-xl font-semibold mb-4 text-[#1A1A1A]">I want to explore a sample app</h2>
                  <div className="flex items-center text-sm text-[#6E6E6E] mb-6">
                    <svg className="w-4 h-4 mr-2 stroke-current" viewBox="0 0 24 24" fill="none">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    2 MINUTES
                  </div>
                  <p className="text-[#6E6E6E] text-sm mb-6">
                    Get a sample configured with your account settings or check it out on Github.
                  </p>
                  <button className="w-full py-2 bg-[#635DFF] text-white rounded text-sm font-medium hover:bg-[#3B3684]">
                    DOWNLOAD SAMPLE
                  </button>
                </div>
              </div>

              <div className="bg-[#F5F5F5] border border-gray-200 rounded p-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[#6E6E6E] mt-0.5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-[#6E6E6E]">
                      New to Auth0? Learn <a href="#" className="text-[#635DFF] hover:text-[#3B3684] hover:underline">How Auth0 works</a>,
                      how it <a href="#" className="text-[#635DFF] hover:text-[#3B3684] hover:underline">integrates with Regular Web Applications</a> and
                      which <a href="#" className="text-[#635DFF] hover:text-[#3B3684] hover:underline">protocol</a> it uses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-[#1A1A1A] text-2xl font-semibold mb-4">Configure Auth0</h2>
                <h3 className="text-[#1A1A1A] text-xl font-semibold mb-3">Get Your Application Keys</h3>
                <p className="text-[#6E6E6E]">
                  When you signed up for Auth0, a new application was created for you, or you could have created a new one.
                  You will need some details about that application to communicate with Auth0. You can get these details from
                  the <a href="https://manage.auth0.com/#/applications" className="text-[#635DFF] hover:text-[#3B3684] hover:underline">Application Settings</a> section
                  in the Auth0 dashboard.
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-8 bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                What technology are you using for your project?
              </h2>

              <div className="mb-8">
                <div className="max-w-xl relative">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search by technology name"
                      className="w-full pl-10 pr-4 py-2.5 bg-white text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <svg
                      className="absolute left-3 top-3 w-5 h-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTechnologies.map((tech) => (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTechnology(tech)}
                    className={`flex items-center space-x-3 p-4 rounded-lg focus:outline-none ${
                      tech.id === 'flutter' 
                        ? 'border border-blue-600 bg-white' 
                        : 'border border-gray-200 bg-white hover:border-blue-600'
                    }`}
                  >
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                    <span className="text-gray-900 text-left">{tech.name}</span>
                  </button>
                ))}
              </div>
            </div>
            )
          )}

          {activeTab === 'Settings' && (
            <div className="mt-8 bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Application Settings</h2>
              <form className="space-y-10">
                {/* Basic Information */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Basic Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <div className="relative flex items-center">
                          <input type="text" defaultValue="My App" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                          <button
                            type="button"
                            onClick={() => handleCopy('name', 'My App')}
                            className="ml-2 p-2 rounded bg-white border border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                            tabIndex={-1}
                          >
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                              <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                              <rect x="3" y="3" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                          </button>
                          {copyStatus['name'] && <span className="absolute right-12 text-xs text-green-600">Copied!</span>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Domain</label>
                        <div className="relative flex items-center">
                          <input type="text" value="dev-1md8m8doz8ynfucb.au.auth0.com" readOnly className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-100 text-gray-500" />
                          <button
                            type="button"
                            onClick={() => handleCopy('domain', 'dev-1md8m8doz8ynfucb.au.auth0.com')}
                            className="ml-2 p-2 rounded bg-white border border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                            tabIndex={-1}
                          >
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                              <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                              <rect x="3" y="3" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                          </button>
                          {copyStatus['domain'] && <span className="absolute right-12 text-xs text-green-600">Copied!</span>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Client ID</label>
                        <div className="relative flex items-center">
                          <input type="text" value="iKysfeilL1Wthen86y0dM3ylp8qvOibJi" readOnly className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-100 text-gray-500" />
                          <button
                            type="button"
                            onClick={() => handleCopy('clientId', 'iKysfeilL1Wthen86y0dM3ylp8qvOibJi')}
                            className="ml-2 p-2 rounded bg-white border border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                            tabIndex={-1}
                          >
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                              <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                              <rect x="3" y="3" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                          </button>
                          {copyStatus['clientId'] && <span className="absolute right-12 text-xs text-green-600">Copied!</span>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Client Secret</label>
                        <div className="relative flex items-center">
                          <input type="password" value="••••••••••••••••••••••••••••••••" readOnly className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-100 text-gray-500" />
                          <button
                            type="button"
                            onClick={() => handleCopy('clientSecret', 'secret-value-here')}
                            className="ml-2 p-2 rounded bg-white border border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                              <path stroke="currentColor" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCopy('clientSecret', 'secret-value-here')}
                            className="ml-2 p-2 rounded bg-white border border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                              <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                              <rect x="3" y="3" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">The Client Secret is not base64 encoded.</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea rows={2} placeholder="Add a description in less than 140 characters" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <p className="text-xs text-gray-500 mt-1">A free text description of the application. Max character count is 140.</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Application Logo</label>
                        <div className="border border-gray-200 rounded-md p-4 flex flex-col items-center">
                          <img src="https://path.to/my_logo.png" alt="logo" className="w-16 h-16 mb-2" />
                          <div className="relative w-full">
                            <input type="text" value="https://path.to/my_logo.png" className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-100 text-gray-500" readOnly />
                            <span className="absolute left-2 top-2 text-gray-400">
                              <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M7 17l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">The URL of the logo to display for the application, if none is set the default badge for this type of application will be shown. Recommended size is 150×150 pixels.</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Application Type</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>Regular Web Application</option>
                          <option>Single Page Application</option>
                          <option>Machine to Machine</option>
                          <option>Native</option>
                        </select>
                        <p className="text-xs text-gray-500 mt-1">The type of application will determine which settings you can configure from the dashboard.</p>
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mt-4">
                        <span className="block text-xs text-gray-700 font-semibold mb-1">Note:</span>
                        <span className="text-xs text-gray-600">If you are looking for the <span className="bg-gray-100 px-1 rounded font-mono">token_endpoint_auth_method</span> field, this has moved to a dedicated credentials tab for easier and more secure management.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Application URIs */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Application URIs</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Application Login URI</label>
                      <input type="text" value="https://myapp.org/login" className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-100 text-gray-500" readOnly />
                      <p className="text-xs text-gray-500 mt-1">In some scenarios, Auth0 will need to redirect to your application's login page. This URI needs to point to a route in your application that should redirect to your tenant's <span className="font-mono">/authorize</span> endpoint. <a href="#" className="text-blue-600 underline">Learn more</a></p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Allowed Callback URLs</label>
                      <textarea rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <p className="text-xs text-gray-500 mt-1">After the user authenticates we will only call back to any of these URLs. You can specify multiple valid URLs by comma-separating them (typically to handle different environments like QA or testing). Make sure to specify the protocol (<span className="font-mono">https://</span>) otherwise the callback may fail in some cases. With the exception of custom URI schemes for native clients, all callbacks should use protocol <span className="font-mono">https://</span>.You can use <a href="#" className="text-blue-600 underline">Organization URL</a> parameters in these URLs.</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Allowed Logout URLs</label>
                      <textarea rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <p className="text-xs text-gray-500 mt-1">Comma-separated list of allowed logout URLs for redirecting users post-logout. You can use wildcards at the subdomain level (<span className="font-mono">*.google.com</span>). Query strings and hash information are not taken into account when validating these URLs. <a href="#" className="text-blue-600 underline">Learn more about logout</a></p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Allowed Web Origins</label>
                      <textarea rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      <p className="text-xs text-gray-500 mt-1">Comma-separated list of allowed origins for use with <a href="#" className="text-blue-600 underline">Cross-Origin Authentication</a>, <a href="#" className="text-blue-600 underline">Device Flow</a>, and <a href="#" className="text-blue-600 underline">web message response mode</a>, in the form of <span className="font-mono">&lt;scheme&gt;://&lt;host&gt;[:&lt;port&gt;]</span>, such as <span className="font-mono">https://login.mydomain.com</span> or <span className="font-mono">http://localhost:3000</span>. You can use wildcards at the subdomain level (e.g.: <span className="font-mono">https://*.contoso.com</span>). Query strings and hash information are ignored. <a href="#" className="text-blue-600 underline">Organization URL</a> placeholders are supported.</p>
                    </div>
                  </div>
                </div>

                {/* OpenID Connect Back-Channel Logout */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mr-3">OpenID Connect Back-Channel Logout</h3>
                    <span className="px-2 py-0.5 bg-gray-200 text-xs rounded font-semibold text-gray-700">ENTERPRISE</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">Back-Channel Logout URI</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-100 text-gray-500" readOnly />
                      <p className="text-xs text-gray-500 mt-1">Enterprise subscription is required.</p>
                    </div>
                    <div>
                      <label className="block text-base font-medium text-gray-700 mb-2">Back-Channel Logout Initiators</label>
                      <div className="flex flex-col space-y-2 mb-1">
                        <label className="inline-flex items-center text-sm font-normal">
                          <input type="radio" name="initiators" className="form-radio bg-white mr-2" />
                          Selected initiators only
                        </label>
                        <label className="inline-flex items-center text-sm font-normal">
                          <input type="radio" name="initiators" className="form-radio bg-white mr-2" />
                          All supported initiators
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">Enterprise subscription is required.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-8 mt-2">
                    <label className="inline-flex items-center text-sm font-normal">
                      <input type="checkbox" className="form-checkbox bg-white mr-2" />
                      IdP-Logout <span className="ml-2 px-2 py-0.5 bg-gray-100 text-xs rounded text-gray-700 font-semibold">REQUIRED</span>
                    </label>
                    <label className="inline-flex items-center text-sm font-normal">
                      <input type="checkbox" className="form-checkbox bg-white mr-2" />
                      RP-Logout <span className="ml-2 px-2 py-0.5 bg-gray-100 text-xs rounded text-gray-700 font-semibold">REQUIRED</span>
                    </label>
                    <label className="inline-flex items-center text-sm font-normal">
                      <input type="checkbox" className="form-checkbox bg-white mr-2" />
                      Password Changed
                    </label>
                    <label className="inline-flex items-center text-sm font-normal">
                      <input type="checkbox" className="form-checkbox bg-white mr-2" />
                      Session Expired
                    </label>
                    <label className="inline-flex items-center text-sm font-normal">
                      <input type="checkbox" className="form-checkbox bg-white mr-2" />
                      Account Deleted
                    </label>
                    <label className="inline-flex items-center text-sm font-normal">
                      <input type="checkbox" className="form-checkbox bg-white mr-2" />
                      Email Changed
                    </label>
                  </div>
                </div>

                {/* Cross-Origin Authentication */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Cross-Origin Authentication</h3>
                  <div className="flex items-center mb-4">
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox bg-white mr-2" />
                      <span className="text-sm">Allow Cross-Origin Authentication</span>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">When allowed, <a href="#" className="text-blue-600 underline">cross-origin authentication</a> allows applications to make authentication requests when the Lock widget or custom HTML is used.</p>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Allowed Origins (CORS)</label>
                    <textarea rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <p className="text-xs text-gray-500 mt-1">List additional origins allowed to make <a href="#" className="text-blue-600 underline">cross-origin resource sharing (CORS)</a> requests. Allowed callback URLs are already included in this list.<br />URLs can be comma-separated or added line-by-line<br />Use wildcards (*) at the subdomain level (e.g. <span className="font-mono">https://*.contoso.com</span>)<br />Query strings and hash information are ignored<br /><a href="#" className="text-blue-600 underline">Organization URL</a> placeholders are supported</p>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cross-Origin Verification Fallback URL</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-100 text-gray-500" readOnly />
                    <p className="text-xs text-gray-500 mt-1">Fallback URL when third-party cookies are not enabled in the browser. URL must use https and be in the same domain as the embedded login widget.</p>
                  </div>
                </div>

                {/* ID Token Expiration */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">ID Token Expiration</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Maximum ID Token Lifetime *</label>
                    <input type="number" value="36000" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <p className="text-xs text-gray-500 mt-1">Time until an <span className="font-mono">id_token</span> expires regardless of activity.</p>
                  </div>
                </div>

                {/* Refresh Token Expiration */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Refresh Token Expiration</h3>
                  <div className="space-y-6">
                    <div className="flex items-center mb-2">
                      <input type="checkbox" className="form-checkbox bg-white mr-2" />
                      <span className="text-sm">Set Idle Refresh Token Lifetime</span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Idle Refresh Token Lifetime *</label>
                      <input type="number" value="2592000" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex items-center mb-2">
                      <input type="checkbox" className="form-checkbox bg-white mr-2" />
                      <span className="text-sm">Set Maximum Refresh Token Lifetime</span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Refresh Token Lifetime *</label>
                      <input type="number" value="31557600" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                </div>

                {/* Refresh Token Rotation */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Refresh Token Rotation</h3>
                  <div className="flex items-center mb-2">
                    <input type="checkbox" className="form-checkbox bg-white mr-2" />
                    <span className="text-sm">Allow Refresh Token Rotation</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">When allowed, <span className="font-mono">refresh tokens</span> will automatically be invalidated after use and exchanged for new tokens to prevent replay attacks. Requires a maximum refresh token lifetime. <a href="#" className="text-blue-600 underline">Learn more about refresh token rotation</a></p>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rotation Overlap Period *</label>
                    <input type="number" value="0" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <p className="text-xs text-gray-500 mt-1">Period of time the most recently-used <span className="font-mono">refresh token</span> can be reused without triggering breach detection.</p>
                  </div>
                </div>

                {/* Token Sender-Constraining */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Token Sender-Constraining</h3>
                  <div className="flex items-center mb-2">
                    <input type="checkbox" className="form-checkbox bg-white mr-2" />
                    <span className="text-sm">Require Token Sender-Constraining <span className="ml-1 px-2 py-0.5 bg-gray-100 text-xs rounded font-semibold text-gray-700">ADD-ON</span></span>
                  </div>
                  <p className="text-xs text-gray-500">When required, <span className="font-mono">access tokens</span> must be constrained to this application to prevent unauthorized use of leaked or stolen tokens. <a href="#" className="text-blue-600 underline">Learn more about token sender-constraining</a></p>
                </div>

                {/* Authorization Requests */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Authorization Requests</h3>
                  <div className="flex items-center mb-2">
                    <input type="checkbox" className="form-checkbox bg-white mr-2" />
                    <span className="text-sm">Require Pushed Authorization Requests (PAR) <span className="ml-1 px-2 py-0.5 bg-gray-100 text-xs rounded font-semibold text-gray-700">ADD-ON</span></span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">When required, authorization request parameters must be sent using back-channel communication for confidentiality and integrity protection. Requires tenant to allow PAR. <a href="#" className="text-blue-600 underline">Learn more about Pushed Authorization Requests (PAR)</a></p>
                  <div className="flex items-center mb-2">
                    <input type="checkbox" className="form-checkbox bg-white mr-2" />
                    <span className="text-sm">Require JWT-Secured Authorization Requests (JAR) <span className="ml-1 px-2 py-0.5 bg-gray-100 text-xs rounded font-semibold text-gray-700">ADD-ON</span></span>
                  </div>
                  <p className="text-xs text-gray-500">When required, authorization request parameters must be wrapped in a signed JSON Web Token (JWT) for cryptographically confirmed non-repudiation. <a href="#" className="text-blue-600 underline">Learn more about JWT-Secured Authorization Requests (JAR)</a></p>
                </div>

                {/* Advanced Settings */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Advanced Settings</h3>
                  {/* You can add more advanced settings fields here if needed */}
                </div>

                {/* Danger Zone */}
                <div className="border border-red-200 bg-red-50 rounded-lg p-6 mt-10">
                  <h3 className="text-lg font-semibold text-red-700 mb-6">Danger Zone</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-base font-medium text-red-700">Delete this application</p>
                        <p className="text-sm text-red-700">All your apps using this client will stop working.</p>
                      </div>
                      <button type="button" className="px-6 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700">Delete</button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-base font-medium text-red-700">Rotate secret</p>
                        <p className="text-sm text-red-700">All authorized apps will need to be updated with the new client secret.</p>
                      </div>
                      <button type="button" className="px-6 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700">Rotate</button>
                    </div>
                  </div>
                </div>

                {/* Save/Discard Buttons */}
                <div className="flex justify-end space-x-3 mt-8">
                  <button type="button" className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Discard</button>
                  <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">Save</button>
                </div>
              </form>
            </div>
          )}

          {activeTab == 'Credentials' && (
            <div className="mt-8 bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Credentials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Authentication Method</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-2">
                    <button className="flex items-center justify-center px-3 py-2 rounded border border-gray-300 bg-gray-100 text-gray-700 text-sm font-medium cursor-not-allowed">
                      mTLS (CA-signed)
                      <span className="ml-2 px-2 py-0.5 bg-gray-200 text-xs rounded font-semibold text-gray-700">ADD-ON</span>
                    </button>
                    <button className="flex items-center justify-center px-3 py-2 rounded border border-gray-300 bg-gray-100 text-gray-700 text-sm font-medium cursor-not-allowed">
                      mTLS (self-signed)
                      <span className="ml-2 px-2 py-0.5 bg-gray-200 text-xs rounded font-semibold text-gray-700">ADD-ON</span>
                    </button>
                    <button className="flex items-center justify-center px-3 py-2 rounded border border-gray-300 bg-gray-100 text-gray-700 text-sm font-medium cursor-not-allowed">
                      Private Key JWT
                      <span className="ml-2 px-2 py-0.5 bg-gray-200 text-xs rounded font-semibold text-gray-700">ENTERPRISE</span>
                    </button>
                    <button className="flex items-center justify-center px-3 py-2 rounded border-2 border-blue-600 bg-white text-blue-700 text-sm font-medium">
                      Client Secret (Post)
                    </button>
                    <button className="flex items-center justify-center px-3 py-2 rounded border border-gray-300 bg-white text-gray-700 text-sm font-medium">
                      Client Secret (Basic)
                    </button>
                    <button className="flex items-center justify-center px-3 py-2 rounded border border-gray-300 bg-white text-gray-700 text-sm font-medium">
                      None
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">Method used to authenticate your application with the authorization server. <a href="#" className="text-blue-600 underline">Learn more about authentication methods</a></p>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Client Secret</label>
                    <div className="relative flex items-center">
                      <input type="password" value="••••••••••••••••••••••••••••••••" readOnly className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-100 text-gray-500" />
                      <button
                        type="button"
                        onClick={() => handleCopy('clientSecret', 'secret-value-here')}
                        className="ml-2 p-2 rounded bg-white border border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                          <path stroke="currentColor" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCopy('clientSecret', 'secret-value-here')}
                        className="ml-2 p-2 rounded bg-white border border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                          <rect x="3" y="3" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">The Client Secret is not base64 encoded.</p>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <button type="button" className="px-4 py-2 rounded bg-gray-200 text-gray-400 font-semibold cursor-not-allowed" disabled>Save</button>
                    <button type="button" className="px-4 py-2 rounded bg-gray-200 text-gray-400 font-semibold cursor-not-allowed" disabled>Cancel</button>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Danger Zone</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg flex items-center justify-between p-6">
                  <div>
                    <p className="text-base font-medium text-red-700 mb-1">Rotate secret</p>
                    <p className="text-sm text-red-700">All authorized apps will need to be updated with the new client secret.</p>
                  </div>
                  <button type="button" className="px-6 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700">Rotate</button>
                </div>
              </div>
            </div>
          )}

          {activeTab == 'APIs' && (
            <div className="mt-8 bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">APIs</h2>
              <p className="mb-6 text-gray-700 text-base">Here is a list of your APIs. You can authorize this application to request access tokens for these APIs by executing a client credentials exchange.</p>
              <input
                type="text"
                placeholder="Filter by API Name or Identifier"
                className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg bg-white !bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex flex-col border-b border-gray-200 pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                  <div>
                    <a href="#" className="text-blue-700 font-semibold text-lg hover:underline">Auth0 Management API</a>
                    <div className="mt-1 text-sm text-gray-700">
                      API Identifier: <span className="bg-gray-100 px-2 py-0.5 rounded font-mono text-gray-700">https://dev-1md8m8doz8ynfucb.au.auth0.com/api/v2/</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 md:mt-0">
                    <span className="mr-3 text-gray-700 text-sm">Unauthorized</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Addons' && (
            <div className="mt-8 bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Addons & Integrations</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Available Addons</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: 'Auth0 Management API', description: 'Access to Auth0 Management API', enabled: true },
                      { name: 'Auth0 Deploy CLI', description: 'Deploy Auth0 configuration', enabled: false },
                      { name: 'Auth0 Extensions', description: 'Custom extensions and rules', enabled: false },
                      { name: 'Auth0 Actions', description: 'Custom authentication flows', enabled: true },
                      { name: 'Auth0 Organizations', description: 'Multi-tenant organization support', enabled: false },
                      { name: 'Auth0 Branding', description: 'Custom branding and themes', enabled: false }
                    ].map((addon, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{addon.name}</h4>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked={addon.enabled}
                              className="form-checkbox bg-white mr-2"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                        <p className="text-sm text-gray-600">{addon.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Third-party Integrations</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Slack</h4>
                          <p className="text-sm text-gray-600">Send notifications to Slack channels</p>
                        </div>
                      </div>
                      <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                        Configure
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Zapier</h4>
                          <p className="text-sm text-gray-600">Connect with 3000+ apps via Zapier</p>
                        </div>
                      </div>
                      <button className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                        Configure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Connections' && (
            <div className="mt-8 bg-white rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Database & Social Connections</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Database Connections</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Username-Password-Authentication</h4>
                          <p className="text-sm text-gray-600">Default database connection</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-green-600">Enabled</span>
                        <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                          Configure
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Social Connections</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: 'Google', icon: '🔍', enabled: true },
                      { name: 'Facebook', icon: '📘', enabled: false },
                      { name: 'Twitter', icon: '🐦', enabled: false },
                      { name: 'GitHub', icon: '🐙', enabled: true },
                      { name: 'LinkedIn', icon: '💼', enabled: false },
                      { name: 'Microsoft', icon: '🪟', enabled: false }
                    ].map((social, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{social.icon}</span>
                          <span className="font-medium text-gray-900">{social.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm ${social.enabled ? 'text-green-600' : 'text-gray-500'}`}>
                            {social.enabled ? 'Enabled' : 'Disabled'}
                          </span>
                          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                            {social.enabled ? 'Configure' : 'Enable'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Enterprise Connections</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Active Directory</h4>
                          <p className="text-sm text-gray-600">Connect to your AD/LDAP directory</p>
                        </div>
                      </div>
                      <button className="px-3 py-1 text-sm bg-purple-600 text-white rounded hover:bg-purple-700">
                        Configure
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">SAML</h4>
                          <p className="text-sm text-gray-600">SAML 2.0 identity provider</p>
                        </div>
                      </div>
                      <button className="px-3 py-1 text-sm bg-orange-600 text-white rounded hover:bg-orange-700">
                        Configure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-white rounded-lg p-6">
              <p className="mb-6 text-gray-700 text-base">Connections are sources of users. They are categorized into Database, Social and Enterprise and can be shared among different applications.</p>

              {/* Database Section */}
              <div className="mb-2 text-xs font-semibold text-gray-700">Database</div>
              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded mr-4">
                    {/* Database icon */}
                    <svg className="w-7 h-7 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" /><path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" /></svg>
                  </span>
                  <div>
                    <div className="font-semibold text-gray-900">Username-Password-Authentication</div>
                    <div className="text-sm text-gray-500">Database</div>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>

              {/* Social Section */}
              <div className="mt-6 mb-2 text-xs font-semibold text-gray-700">Social</div>
              {/* Github */}
              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-white rounded mr-4">
                    {/* GitHub icon */}
                    <svg className="w-7 h-7 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
                  </span>
                  <div>
                    <div className="font-semibold text-gray-900">github</div>
                    <div className="text-sm text-gray-500">GitHub</div>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>
              {/* Google */}
              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-white rounded mr-4">
                    {/* Google icon */}
                    <svg className="w-7 h-7" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303C34.89 32.062 29.865 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.69 0 5.164.896 7.163 2.671l6.084-6.084C33.527 5.099 28.979 3 24 3c-7.732 0-14.41 4.41-17.694 11.691z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.108 19.008 13 24 13c2.69 0 5.164.896 7.163 2.671l6.084-6.084C33.527 5.099 28.979 3 24 3c-7.732 0-14.41 4.41-17.694 11.691z"/><path fill="#FBBC05" d="M24 43c5.798 0 10.627-1.924 14.163-5.217l-6.522-5.348C29.865 35 24 35 24 35c-5.865 0-10.89-2.938-13.303-7.062l-6.571 4.819C9.59 40.59 16.268 45 24 45z"/><path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303c-1.938 3.938-6.963 6.875-11.303 6.875-6.627 0-12-5.373-12-12s5.373-12 12-12c2.69 0 5.164.896 7.163 2.671l6.084-6.084C33.527 5.099 28.979 3 24 3c-7.732 0-14.41 4.41-17.694 11.691z"/></g></svg>
                  </span>
                  <div>
                    <div className="font-semibold text-gray-900">google-oauth2</div>
                    <div className="text-sm text-gray-500">Google / Gmail</div>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
              </div>

              {/* Enterprise Section */}
              <div className="mt-6 mb-2 text-xs font-semibold text-gray-700">Enterprise</div>
              <div className="bg-gray-50 text-gray-500 text-center py-8 rounded">There are no connections</div>

              {/* Passwordless Section */}
              <div className="mt-6 mb-2 text-xs font-semibold text-gray-700">Passwordless</div>
              <div className="bg-gray-50 text-gray-500 text-center py-8 rounded">There are no connections</div>
            </div>
            </div>
          )}

          {activeTab === 'Login Experience' && (
            <div className="mt-8 bg-white rounded-lg p-6">
              {/* Banner info */}
              <div className="flex items-center bg-blue-50 border border-blue-200 rounded px-4 py-3 mb-8">
                <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" /></svg>
                <span className="text-sm text-blue-900">If you were previously using classic Universal Login templates for Login, Password Reset, or MFA, they may override the new Universal Login experience. Please disable them for the most seamless experience with Organizations. <a href="#" className="underline text-blue-700">Learn More</a></span>
              </div>

              {/* Types of Users */}
              <div className="mb-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Types of Users</h2>
                <p className="text-gray-600 mb-6">Define the type of users that will log in to this application.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Individuals */}
                  <button type="button" onClick={() => handleUserTypeChange('individuals')} className={`border-2 rounded-lg p-8 flex flex-col items-center bg-white transition-colors ${selectedUserType === 'individuals' ? 'border-blue-500' : 'border-gray-200'}`}> 
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${selectedUserType === 'individuals' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      <svg className={`w-10 h-10 ${selectedUserType === 'individuals' ? 'text-blue-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M6 20c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                    </div>
                    <div className={`font-semibold text-lg mb-1 ${selectedUserType === 'individuals' ? 'text-blue-600' : 'text-gray-700'}`}>Individuals</div>
                    <div className="text-gray-600 text-sm mb-4 text-center">Users may sign up and access the application directly.</div>
                    <div className="flex gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${selectedUserType === 'individuals' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>NETFLIX</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${selectedUserType === 'individuals' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>SPOTIFY</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${selectedUserType === 'individuals' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>TWITCH</span>
                    </div>
                  </button>
                  {/* Business Users */}
                  <button type="button" onClick={() => handleUserTypeChange('business')} className={`border-2 rounded-lg p-8 flex flex-col items-center bg-white transition-colors ${selectedUserType === 'business' ? 'border-blue-500' : 'border-gray-200'}`}> 
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${selectedUserType === 'business' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      <svg className={`w-10 h-10 ${selectedUserType === 'business' ? 'text-blue-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /></svg>
                    </div>
                    <div className={`font-semibold text-lg mb-1 ${selectedUserType === 'business' ? 'text-blue-600' : 'text-gray-700'}`}>Business Users</div>
                    <div className="text-gray-600 text-sm mb-4 text-center">Users must be a member of an organization to access the application.</div>
                    <div className="flex gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${selectedUserType === 'business' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>SLACK</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${selectedUserType === 'business' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>SENTRY</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${selectedUserType === 'business' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>SALESFORCE</span>
                    </div>
                  </button>
                  {/* Both */}
                  <button type="button" onClick={() => handleUserTypeChange('both')} className={`border-2 rounded-lg p-8 flex flex-col items-center bg-white transition-colors ${selectedUserType === 'both' ? 'border-blue-500' : 'border-gray-200'}`}> 
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${selectedUserType === 'both' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      <svg className={`w-10 h-10 ${selectedUserType === 'both' ? 'text-blue-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="2" /><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /><g><circle cx="8" cy="6" r="2" /><circle cx="16" cy="6" r="2" /></g></svg>
                    </div>
                    <div className={`font-semibold text-lg mb-1 ${selectedUserType === 'both' ? 'text-blue-600' : 'text-gray-700'}`}>Both</div>
                    <div className="text-gray-600 text-sm mb-4 text-center">Users may sign up with a personal account and be affiliated with one or more organizations.</div>
                    <div className="flex gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${selectedUserType === 'both' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>GITHUB</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${selectedUserType === 'both' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>DROPBOX</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${selectedUserType === 'both' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>FIGMA</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Login Flow */}
              {selectedUserType !== 'individuals' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">Login Flow</h2>
                    <p className="text-gray-600 mb-6">Define how to initiate the login flow for your application's users. The tenant's <a href="#" className="text-blue-600 underline">Authentication Profile</a> will affect this setting.</p>
                    <div className="flex flex-col gap-4">
                      <button type="button" onClick={() => handleLoginFlowChange('credentials')} className={`border-2 rounded-lg p-4 text-left transition-colors ${selectedLoginFlow === 'credentials' ? 'border-blue-500' : 'border-gray-200'} bg-white`}> 
                        <div className="font-semibold text-gray-900 mb-1">Prompt for Credentials</div>
                        <div className="text-gray-600 text-sm">Users are prompted for their own credentials first.</div>
                      </button>
                      {selectedUserType !== 'both' && (
                        <button type="button" onClick={() => handleLoginFlowChange('organization')} className={`border-2 rounded-lg p-4 text-left transition-colors ${selectedLoginFlow === 'organization' ? 'border-blue-500' : 'border-gray-200'} bg-white`}>
                          <div className="font-semibold text-gray-900 mb-1">Prompt for Organization</div>
                          <div className="text-gray-600 text-sm">Users are prompted for the organization they need to login to first.</div>
                        </button>
                      )}
                      <button type="button" onClick={() => handleLoginFlowChange('noprompt')} className={`border-2 rounded-lg p-4 text-left transition-colors ${selectedLoginFlow === 'noprompt' ? 'border-blue-500' : 'border-gray-200'} bg-white`}>
                        <div className="font-semibold text-gray-900 mb-1">No Prompt</div>
                        <div className="text-gray-600 text-sm">Your application handles sending us the required parameters.</div>
                      </button>
                    </div>
                  </div>
                  {/* Flow Preview */}
                  <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center w-full">
                    <div className="text-white text-lg font-semibold mb-6">Flow Preview</div>
                    {flowPreviews[selectedUserType][selectedLoginFlow][flowStep-1]}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-50"
                        onClick={() => setFlowStep((s) => Math.max(1, s - 1))}
                        disabled={flowStep === 1}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                      </button>
                      <div className="text-gray-400 text-sm">
                        Step {flowStep} of {flowPreviews[selectedUserType][selectedLoginFlow].length}
                      </div>
                      <button
                        className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-50"
                        onClick={() => setFlowStep((s) => Math.min(flowPreviews[selectedUserType][selectedLoginFlow].length, s + 1))}
                        disabled={flowStep === flowPreviews[selectedUserType][selectedLoginFlow].length}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-start mt-8">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">Save Changes</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationQuickstart; 