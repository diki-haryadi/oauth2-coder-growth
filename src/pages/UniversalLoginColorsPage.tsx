import React, { useState } from 'react';

const COLORS = {
  primary: '#635dff',
  primaryLabel: '#ffffff',
  secondaryBorder: '#c9cace',
  secondaryLabel: '#1e212a',
  baseFocus: '#635dff',
  baseHover: '#000000',
  links: '#635dff',
};

const TABS = [
  { key: 'colors', label: 'Colors', icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#635dff" /></svg>
  ) },
  { key: 'fonts', label: 'Fonts', icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><text x="4" y="16" fontSize="12" fontWeight="bold" fill="#6366f1">abc</text></svg>
  ) },
  { key: 'borders', label: 'Borders', icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#fff" stroke="#6366f1" strokeWidth="2" /></svg>
  ) },
  { key: 'widget', label: 'Widget', icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#fff" stroke="#6366f1" strokeWidth="2" /><rect x="8" y="8" width="8" height="8" rx="2" fill="#6366f1" /></svg>
  ) },
  { key: 'background', label: 'Page Background', icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#fff" stroke="#6366f1" strokeWidth="2" /><rect x="8" y="8" width="8" height="8" rx="2" fill="#6366f1" opacity=".2" /></svg>
  ) },
];

export default function UniversalLoginColorsPage() {
  const [color] = useState(COLORS);
  const [tab, setTab] = useState('colors');

  // Preview screens: 5 cards, or 1 card for background tab
  const renderPreview = () => {
    if (tab === 'background') {
      return (
        <div className="bg-black rounded-lg flex items-center justify-center mb-4 shadow-lg w-full h-[420px]">
          <div className="bg-white rounded-lg shadow p-4 w-56 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#635dff" /></svg>
            </div>
            <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
            <div className="h-4 w-40 bg-gray-100 rounded mb-2" />
            <div className="h-4 w-40 bg-gray-100 rounded mb-2" />
            <div className="h-10 w-40 bg-[#635dff] rounded mt-4" />
          </div>
        </div>
      );
    }
    // 2 row: 3 cards (row 1), 2 cards (row 2)
    return (
      <div className="bg-gray-900 rounded-lg p-8 flex flex-col items-center justify-center mb-4 shadow-lg w-full" style={{ minHeight: 440 }}>
        <div className="flex flex-col gap-6 w-full items-center">
          <div className="flex gap-6 justify-center w-full">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white rounded-lg shadow p-4 w-56 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#635dff" /></svg>
                </div>
                <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-40 bg-gray-100 rounded mb-2" />
                <div className="h-4 w-40 bg-gray-100 rounded mb-2" />
                <div className="h-10 w-40 bg-[#635dff] rounded mt-4" />
              </div>
            ))}
          </div>
          <div className="flex gap-6 justify-center w-full">
            {[4,5].map(i => (
              <div key={i} className="bg-white rounded-lg shadow p-4 w-56 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" fill="#635dff" /></svg>
                </div>
                <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                <div className="h-4 w-40 bg-gray-100 rounded mb-2" />
                <div className="h-4 w-40 bg-gray-100 rounded mb-2" />
                <div className="h-10 w-40 bg-[#635dff] rounded mt-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Form for each tab
  const renderForm = () => {
    if (tab === 'colors') {
      return (
        <div className="w-full md:w-80 max-w-xs md:max-w-none">
          <div className="font-semibold text-lg mb-4">Colors</div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary button</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value={color.primary} readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary button label</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value={color.primaryLabel} readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Secondary button border</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value={color.secondaryBorder} readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Secondary button label</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value={color.secondaryLabel} readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Base Focus Color</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value={color.baseFocus} readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Base Hover Color</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value={color.baseHover} readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Links & focused components</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value={color.links} readOnly />
            </div>
          </div>
        </div>
      );
    }
    if (tab === 'fonts') {
      return (
        <div className="w-full md:w-80 max-w-xs md:max-w-none">
          <div className="font-semibold text-lg mb-4">Fonts</div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Font URL</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="https://..." readOnly />
              <div className="text-xs text-gray-500 mt-1">This URL must point directly to a <b>woff</b> or <b>woff2</b> font file.</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Reference text size</label>
              <div className="flex items-center gap-2">
                <input type="range" min="10" max="30" value={15} readOnly className="w-32" />
                <input type="text" value="15" className="w-14 px-2 py-1 border border-gray-300 rounded-md bg-white" readOnly />
                <span className="text-gray-500">px</span>
              </div>
            </div>
            {['Title','Subtitle','Body text','Buttons text','Input Labels','Links'].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <button className="w-7 h-7 border border-gray-300 rounded bg-white font-bold text-gray-700">B</button>
                <label className="block text-sm font-medium text-gray-700 flex-1">{label}</label>
                <input type="text" value={label==='Title'?'150':label==='Subtitle'||label==='Body text'||label==='Links'?'87,5':'100'} className="w-16 px-2 py-1 border border-gray-300 rounded-md bg-white text-right" readOnly />
                <span className="text-gray-500">%</span>
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Links style</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" disabled>
                <option>Normal</option>
              </select>
            </div>
          </div>
        </div>
      );
    }
    if (tab === 'borders') {
      return (
        <div className="w-full md:w-80 max-w-xs md:max-w-none">
          <div className="font-semibold text-lg mb-4">Borders</div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Button border weight</label>
              <div className="flex items-center gap-2">
                <input type="range" min="0" max="5" value={1} readOnly className="w-32" />
                <input type="text" value="1" className="w-14 px-2 py-1 border border-gray-300 rounded-md bg-white" readOnly />
                <span className="text-gray-500">px</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Buttons style</label>
              <div className="flex gap-2">
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"> <svg width="20" height="20"><rect x="4" y="9" width="12" height="2" fill="#6366f1" /></svg> </button>
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"> <svg width="20" height="20"><rect x="4" y="4" width="12" height="12" fill="#6366f1" /></svg> </button>
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"> <svg width="20" height="20"><circle cx="10" cy="10" r="8" fill="#6366f1" /></svg> </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Button border radius</label>
              <div className="flex items-center gap-2">
                <input type="range" min="0" max="10" value={3} readOnly className="w-32" />
                <input type="text" value="3" className="w-14 px-2 py-1 border border-gray-300 rounded-md bg-white" readOnly />
                <span className="text-gray-500">px</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Input border weight</label>
              <div className="flex items-center gap-2">
                <input type="range" min="0" max="5" value={1} readOnly className="w-32" />
                <input type="text" value="1" className="w-14 px-2 py-1 border border-gray-300 rounded-md bg-white" readOnly />
                <span className="text-gray-500">px</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Inputs style</label>
              <div className="flex gap-2">
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"> <svg width="20" height="20"><rect x="4" y="9" width="12" height="2" fill="#6366f1" /></svg> </button>
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"> <svg width="20" height="20"><rect x="4" y="4" width="12" height="12" fill="#6366f1" /></svg> </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Input border radius</label>
              <div className="flex items-center gap-2">
                <input type="range" min="0" max="10" value={3} readOnly className="w-32" />
                <input type="text" value="3" className="w-14 px-2 py-1 border border-gray-300 rounded-md bg-white" readOnly />
                <span className="text-gray-500">px</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Widget corner radius</label>
              <div className="flex items-center gap-2">
                <input type="range" min="0" max="10" value={5} readOnly className="w-32" />
                <input type="text" value="5" className="w-14 px-2 py-1 border border-gray-300 rounded-md bg-white" readOnly />
                <span className="text-gray-500">px</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (tab === 'widget') {
      return (
        <div className="w-full md:w-80 max-w-xs md:max-w-none">
          <div className="font-semibold text-lg mb-4">Widget</div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Logo position</label>
              <div className="flex gap-2">
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"><svg width="20" height="20"><rect x="4" y="4" width="12" height="12" fill="#6366f1" /></svg></button>
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"><svg width="20" height="20"><rect x="4" y="4" width="12" height="12" fill="#6366f1" /></svg></button>
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"><svg width="20" height="20"><rect x="4" y="4" width="12" height="12" fill="#6366f1" /></svg></button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Logo url</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="https://..." readOnly />
              <div className="text-xs text-gray-500 mt-1">If a URL is not provided, the Auth0 logo will be used.</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
              <div className="flex items-center gap-2">
                <input type="range" min="10" max="100" value={52} readOnly className="w-32" />
                <input type="text" value="52" className="w-14 px-2 py-1 border border-gray-300 rounded-md bg-white" readOnly />
                <span className="text-gray-500">px</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Header text alignment</label>
              <div className="flex gap-2">
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"><svg width="20" height="20"><rect x="4" y="9" width="12" height="2" fill="#6366f1" /></svg></button>
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"><svg width="20" height="20"><rect x="4" y="4" width="12" height="12" fill="#6366f1" /></svg></button>
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"><svg width="20" height="20"><circle cx="10" cy="10" r="8" fill="#6366f1" /></svg></button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Social buttons layout</label>
              <div className="flex gap-2">
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"><svg width="20" height="20"><rect x="4" y="9" width="12" height="2" fill="#6366f1" /></svg></button>
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"><svg width="20" height="20"><rect x="4" y="4" width="12" height="12" fill="#6366f1" /></svg></button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (tab === 'background') {
      return (
        <div className="w-full md:w-80 max-w-xs md:max-w-none">
          <div className="font-semibold text-lg mb-4">Page Background</div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Page Layout</label>
              <div className="flex gap-2">
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"><svg width="20" height="20"><rect x="4" y="9" width="12" height="2" fill="#6366f1" /></svg></button>
                <button className="w-8 h-8 border border-gray-300 rounded bg-white flex items-center justify-center"><svg width="20" height="20"><rect x="4" y="4" width="12" height="12" fill="#6366f1" /></svg></button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Background color</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" value="#000000" readOnly />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Background image url</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="https://..." readOnly />
              <div className="text-xs text-gray-500 mt-1">This URL must start with https:// and be at least <b>2000px</b> wide.</div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white w-screen p-0">
      <div className="max-w-[1600px] mx-auto px-8">
        <button className="text-gray-700 bg-white text-sm flex items-center hover:underline mb-6 mt-8" onClick={() => window.history.back()}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mr-1"><path d="M15 19l-7-7 7-7" /></svg>
          Back to Universal Login
        </button>
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold">Customization options</h1>
          <div className="flex gap-2 items-center">
            <button className="border px-4 py-2 rounded text-gray-700 bg-white hover:bg-gray-50">Try</button>
            <button className="border px-4 py-2 rounded text-gray-700 bg-white hover:bg-gray-50">Discard</button>
            <button className="px-4 py-2 rounded bg-blue-600 text-white font-semibold">Save And Publish</button>
          </div>
        </div>
        <div className="text-gray-600 mb-8">Customize your login experience by selecting colors, fonts, and more.</div>
        <div className="flex gap-8 items-start overflow-x-auto">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0 sticky top-8 self-start">
            <div className="flex flex-col gap-2">
              {TABS.map(t => (
                <button
                  key={t.key}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium border ${tab===t.key ? 'border-2 border-blue-600 bg-blue-50 text-blue-700 shadow-sm' : 'border-gray-200 bg-white text-gray-700 shadow-sm'}`}
                  onClick={()=>setTab(t.key)}
                >
                  {t.icon}
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          {/* Preview & Form */}
          <div className="flex-1 flex flex-col md:flex-row gap-8 min-w-0">
            {/* Preview */}
            <div className="flex-1 flex flex-col items-center min-w-0">
              {renderPreview()}
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked readOnly className="accent-blue-600" /> Focus</label>
                <label className="flex items-center gap-2 text-sm"><input type="checkbox" readOnly className="accent-blue-600" /> Hover</label>
              </div>
              <div className="text-xs text-gray-500 mt-2">Example screens for preview.</div>
            </div>
            {/* Form */}
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );
} 