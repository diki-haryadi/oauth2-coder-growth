import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Library() {
  const [tab, setTab] = useState(0); // 0: Custom, 1: Installed
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    // Read tab from query param
    const params = new URLSearchParams(location.search);
    const t = params.get('tab');
    if (t === '1') setTab(1);
    else setTab(0);
  }, [location.search]);

  return (
    <div className="min-h-screen bg-white w-screen p-0">
      <div className="max-w-6xl mx-auto pt-12 pb-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Library</h1>
            <div className="text-gray-500 text-base">Manage your actions and configuration.</div>
          </div>
          <div className="relative">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded font-semibold text-base shadow hover:bg-blue-700 transition flex items-center gap-2"
              onClick={() => setDropdown(d => !d)}
              onBlur={() => setTimeout(() => setDropdown(false), 150)}
            >
              Create Action
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            {dropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-10">
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700" onClick={() => {setDropdown(false);}}>Use a Marketplace Integration</button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700" onClick={() => {setDropdown(false);navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/library/templates');}}>Choose a template</button>
                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700" onClick={() => {setDropdown(false);}}>Build from scratch</button>
              </div>
            )}
          </div>
        </div>
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 rounded-lg px-6 py-4 mb-8 flex items-start gap-3">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="mt-1"><circle cx="12" cy="12" r="10" stroke="#F59E42" strokeWidth="2"/><path d="M12 8v4m0 4h.01" stroke="#F59E42" strokeWidth="2" strokeLinecap="round"/></svg>
          <div>
            Node 12 and 16 runtimes are deprecated, and their planned end-of-life (EOL) is August 15, 2025. After this date, Actions targeting a deprecated runtime may default to run on Node 22, potentially causing failures.<br/><br/>
            After completing the necessary testing, upgrade individual Actions to the Node 22 runtime. Actions targeting Node 18 will continue to execute on that runtime, but upgrading to Node 22 is recommended.
          </div>
        </div>
        <div className="flex gap-8 border-b border-gray-200 mb-2">
          <button className={`py-2 px-2 text-base font-medium ${tab===0?'text-blue-700 border-b-2 border-blue-700':'text-gray-500'}`} onClick={()=>{setTab(0);navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/library?tab=0')}}>Custom</button>
          <button className={`py-2 px-2 text-base font-medium ${tab===1?'text-blue-700 border-b-2 border-blue-700':'text-gray-500'}`} onClick={()=>{setTab(1);navigate('/dashboard/au/dev-1md8m8doz8ynfucb/actions/library?tab=1')}}>Installed</button>
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-200 mt-4">
          {tab === 0 ? (
            <table className="min-w-full bg-white">
              <thead>
                <tr className="text-gray-500 text-left text-sm">
                  <th className="py-3 px-6 font-medium">Name <span className="align-middle">^</span></th>
                  <th className="py-3 px-6 font-medium">Trigger</th>
                  <th className="py-3 px-6 font-medium">Last Update</th>
                  <th className="py-3 px-6 font-medium">Last Deploy</th>
                  <th className="py-3 px-6 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} className="text-center text-gray-400 py-8">There are no items to display.</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className="min-w-full bg-white">
              <thead>
                <tr className="text-gray-500 text-left text-sm">
                  <th className="py-3 px-6 font-medium">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center text-gray-400 py-8" colSpan={1}>There are no items to display.</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        <div className="text-gray-400 text-sm mt-2">{tab === 0 ? '0 actions' : '0 integrations'}</div>
      </div>
    </div>
  );
} 