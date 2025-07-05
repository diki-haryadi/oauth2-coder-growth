import React, { useState, useRef, useEffect } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

const LOG_TYPES = [
  {
    group: 'ERROR',
    types: [
      {
        label: 'Actions Execution Failed',
        desc: 'Execution of an Action failed',
        value: 'actions_execution_failed',
      },
      {
        label: 'Blocked Account',
        desc: 'IP blocked for >10 failed attempts to login to single account',
        value: 'blocked_account_1',
      },
      {
        label: 'Blocked Account',
        desc: 'User blocked for >20 login attempts per minute from the same IP address',
        value: 'blocked_account_2',
      },
      {
        label: 'Blocked IP Address',
        desc: 'IP blocked for >100 failed login attempts or >50 signup attempts',
        value: 'blocked_ip',
      },
    ],
  },
];

const dummyLogs = [
  {
    timestamp: '2025-07-05T00:02:11.136Z',
    type: 'API Operation',
    typeValue: 'actions_execution_failed',
    description: 'Create a form',
    connection: 'N/A',
    application: 'N/A',
    occurred: '2 hours ago',
    id: '1',
    details: {
      id: '90020250705000211251717000000000',
      type: 'sapi',
      description: 'Create a form',
      client_id: 'BqIFu5wY8xOw3Togs8h19AOWpwKc5vBu',
      client_name: '',
      ip: '54.201.224.212',
      user_agent: 'Chrome 136.0.0 / Mac OS X 10.15.7',
      occurred: '2 hours ago',
      timestamp: '2025-07-05T00:02:11.136Z',
    },
  },
  {
    timestamp: '2025-07-04T14:27:18.278Z',
    type: 'API Operation',
    typeValue: 'blocked_account_1',
    description: 'Update Breached Password Detection settings',
    connection: 'N/A',
    application: 'N/A',
    occurred: '12 hours ago',
    id: '2',
    details: {},
  },
  {
    timestamp: '2025-07-04T14:27:05.215Z',
    type: 'API Operation',
    typeValue: 'blocked_account_2',
    description: 'Update Breached Password Detection settings',
    connection: 'N/A',
    application: 'N/A',
    occurred: '12 hours ago',
    id: '3',
    details: {},
  },
  {
    timestamp: '2025-07-04T14:26:51.612Z',
    type: 'API Operation',
    typeValue: 'blocked_ip',
    description: 'Update Breached Password Detection settings',
    connection: 'N/A',
    application: 'N/A',
    occurred: '12 hours ago',
    id: '4',
    details: {},
  },
  {
    timestamp: '2025-07-04T06:47:30.108Z',
    type: 'API Operation',
    typeValue: 'actions_execution_failed',
    description: 'Create an action',
    connection: 'N/A',
    application: 'N/A',
    occurred: '19 hours ago',
    id: '5',
    details: {},
  },
  {
    timestamp: '2025-07-04T02:23:22.557Z',
    type: 'API Operation',
    typeValue: 'blocked_account_1',
    description: 'Create an action',
    connection: 'N/A',
    application: 'N/A',
    occurred: 'a day ago',
    id: '6',
    details: {},
  },
];

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
}

const Logs: React.FC = () => {
  const [selected, setSelected] = useState<any | null>(null);
  const [liveMode, setLiveMode] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [searchType, setSearchType] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [tempTypes, setTempTypes] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<{from: string, to: string}>({from: '', to: ''});
  const [tempDate, setTempDate] = useState<{from: string, to: string}>({from: '', to: ''});

  const filterRef = useRef(null);
  const dateRef = useRef(null);
  useOnClickOutside(filterRef, () => setFilterOpen(false));
  useOnClickOutside(dateRef, () => setDateOpen(false));

  // Filtering logic
  let filteredLogs = dummyLogs.filter(log => {
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(log.typeValue);
    // Date filter: just a placeholder, real logic would parse and compare
    return typeMatch;
  });

  // Filter dropdown logic
  const allTypeValues = LOG_TYPES.flatMap(g => g.types.map(t => t.value));
  const allSelected = tempTypes.length === allTypeValues.length;
  const visibleTypes = LOG_TYPES.flatMap(g => g.types.filter(t => t.label.toLowerCase().includes(searchType.toLowerCase()) || t.desc.toLowerCase().includes(searchType.toLowerCase())));

  return (
    <div className="min-h-screen bg-white w-screen p-8">
      <div className="max-w-4xl mx-auto">
    <div className="flex h-full">
      <div className={`flex-1 px-16 pt-10 pb-10 ${selected ? 'pr-0' : ''}`}> 
        <h1 className="text-3xl font-semibold text-gray-900 mb-1">Logs</h1>
        <div className="text-gray-500 mb-6">Storage of log data of both actions taken in the dashboard by the administrators, as well as authentications made by your users. <a href="#" className="text-blue-600 hover:underline ml-1">Show more</a></div>
        <div className="flex items-center gap-3 mb-4">
          <Input placeholder={'Ex: type:"s" AND date:[2019-05-22 TO *]'} className="w-[340px] bg-white text-gray-900" />
          {/* Filter Dropdown */}
          <div className="relative" ref={filterRef}>
            <Button variant="outline" className="px-4 min-w-[120px] bg-white flex items-center justify-between" onClick={() => { setFilterOpen(v => !v); setTempTypes(selectedTypes); }}>
              Filter: {selectedTypes.length === 0 ? 'All' : `${selectedTypes.length} selected`}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </Button>
            {filterOpen && (
              <div className="absolute left-0 mt-2 w-[400px] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-4">
                <Input placeholder="Search for log types..." value={searchType} onChange={e => setSearchType(e.target.value)} className="mb-3 bg-white text-gray-900" />
                <div className="mb-2 text-xs font-semibold text-gray-500">ERROR <button className="text-xs text-blue-600 ml-2" onClick={() => setTempTypes(allSelected ? [] : allTypeValues)}>{allSelected ? 'Unselect All' : 'Select All'}</button></div>
                <div className="max-h-48 overflow-y-auto">
                  {visibleTypes.map(t => (
                    <label key={t.value} className="block cursor-pointer mb-2">
                      <input type="checkbox" className="mr-2" checked={tempTypes.includes(t.value)} onChange={() => setTempTypes(tempTypes.includes(t.value) ? tempTypes.filter(v => v !== t.value) : [...tempTypes, t.value])} />
                      <span className="font-semibold text-gray-900">{t.label}</span>
                      <span className="block text-xs text-gray-500 ml-6">{t.desc}</span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" className='bg-white' onClick={() => setFilterOpen(false)}>Cancel</Button>
                  <Button className='bg-white' onClick={() => { setSelectedTypes(tempTypes); setFilterOpen(false); }}>Apply</Button>
                </div>
              </div>
            )}
          </div>
          {/* Date Picker Dropdown (UI only, no real filtering) */}
          <div className="relative" ref={dateRef}>
            <Button variant="outline" className="px-4 min-w-[120px] bg-white flex items-center justify-between" onClick={() => { setDateOpen(v => !v); setTempDate(dateRange); }}>
              All Dates
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </Button>
            {dateOpen && (
              <div className="absolute left-0 mt-2 w-[340px] bg-white rounded-xl shadow-2xl border border-gray-100 z-50 p-4">
                <div className="mb-2 font-semibold text-gray-700">July 2025</div>
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => <div key={d} className="text-xs text-gray-500 font-medium">{d}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {Array.from({length: 31}, (_, i) => i + 1).map(day => (
                    <button key={day} className="p-2 text-sm rounded-full bg-white text-gray-900 hover:bg-gray-50">{day}</button>
                  ))}
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                  <input type="text" value={tempDate.from} onChange={e => setTempDate({...tempDate, from: e.target.value})} placeholder="UTC YYYY-MM-DD HH:mm:ss.SSS" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white" />
                </div>
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium text-gray-700">To</label>
                    <button className="text-sm text-blue-600 hover:text-blue-700 px-2 py-1 rounded" onClick={() => setTempDate({...tempDate, to: new Date().toISOString().replace('T', ' ').slice(0, 23)})}>Set to now</button>
                  </div>
                  <input type="text" value={tempDate.to} onChange={e => setTempDate({...tempDate, to: e.target.value})} placeholder="UTC YYYY-MM-DD HH:mm:ss.SSS" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white" />
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline"className='bg-white' onClick={() => setDateOpen(false)}>Cancel</Button>
                  <Button className='bg-white' onClick={() => { setDateRange(tempDate); setDateOpen(false); }}>Apply</Button>
                </div>
              </div>
            )}
          </div>
          <button onClick={() => setLiveMode(v => !v)} className={`flex items-center px-4 h-10 rounded border text-sm font-medium ml-2 ${liveMode ? 'border-red-300 bg-red-50 text-red-600' : 'border-gray-200 bg-white text-gray-700'}`}> <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke={liveMode ? '#ef4444' : '#6b7280'} strokeWidth="2" fill={liveMode ? '#fee2e2' : 'none'} /><circle cx="12" cy="12" r="4" fill={liveMode ? '#ef4444' : '#6b7280'} /></svg> Live Mode</button>
          <button className="ml-2 p-2 rounded border border-gray-200 bg-white hover:bg-gray-50"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582M20 20v-5h-.581M5 19A9 9 0 0019 5M19 19A9 9 0 005 5" /></svg></button>
        </div>
        <div className="text-xs text-gray-500 mb-2">To perform your search, press <span className="font-semibold">enter</span>. Need help querying? Check out our <a href="#" className="text-blue-600 hover:underline">query syntax</a>.</div>
        <div className="border rounded-xl overflow-hidden bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="font-medium text-left px-4 py-2 text-gray-700">Timestamp</th>
                <th className="font-medium text-left px-4 py-2 text-gray-700">Type</th>
                <th className="font-medium text-left px-4 py-2 text-gray-700">Description</th>
                <th className="font-medium text-left px-4 py-2 text-gray-700">Connection</th>
                <th className="font-medium text-left px-4 py-2 text-gray-700">Application</th>
                <th className="font-medium text-left px-4 py-2 text-gray-700">Occurred</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log, i) => (
                <tr key={log.id} className={`border-b last:border-0 cursor-pointer hover:bg-gray-50 ${selected?.id === log.id ? 'bg-blue-50' : ''}`} onClick={() => setSelected(log)}>
                  <td className="px-4 py-2 whitespace-nowrap">{log.timestamp}</td>
                  <td className="px-4 py-2 text-blue-600 hover:underline"><span className="inline-flex items-center"><svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" fill="#dcfce7" /><path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>{log.type}</span></td>
                  <td className="px-4 py-2">{log.description}</td>
                  <td className="px-4 py-2">{log.connection}</td>
                  <td className="px-4 py-2">{log.application}</td>
                  <td className="px-4 py-2 flex items-center gap-2">{log.occurred} <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <Button variant="outline" className="px-4" disabled>{'< Newer'}</Button>
          <span>Page 1</span>
          <Button variant="outline" className="px-4" disabled>{'Older >'}</Button>
        </div>
      </div>
      {/* Detail Panel */}
      {selected && (
        <div className="w-[420px] bg-white border-l border-gray-200 h-full fixed right-0 top-0 pt-10 px-8 pb-8 z-30 flex flex-col" style={{minHeight:'100vh'}}>
          <div className="flex items-center justify-between mb-6">
            <div className="text-lg font-semibold">API Operation</div>
            <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
          </div>
          <div className="text-sm text-gray-500 mb-2">Occurred <span className="text-gray-900 ml-2">{selected.details.occurred || selected.occurred}</span></div>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1"><span className="text-gray-500">Timestamp</span><span className="text-gray-900">{selected.details.timestamp || selected.timestamp}</span></div>
            <div className="flex justify-between text-sm mb-1"><span className="text-gray-500">Description</span><span className="text-gray-900">{selected.details.description || selected.description}</span></div>
            <div className="flex justify-between text-sm mb-1"><span className="text-gray-500">ID</span><span className="text-gray-900">{selected.details.id || '...'}</span></div>
            <div className="flex justify-between text-sm mb-1"><span className="text-gray-500">Type</span><span className="text-gray-900">{selected.details.type || 'sapi'}</span></div>
            <div className="flex justify-between text-sm mb-1"><span className="text-gray-500">Client Name</span><span className="text-gray-900">{selected.details.client_name || 'N/A'}</span></div>
            <div className="flex justify-between text-sm mb-1"><span className="text-gray-500">Client ID</span><span className="text-gray-900">{selected.details.client_id || 'N/A'}</span></div>
            <div className="flex justify-between text-sm mb-1"><span className="text-gray-500">Connection</span><span className="text-gray-900">{selected.details.connection || 'N/A'}</span></div>
            <div className="flex justify-between text-sm mb-1"><span className="text-gray-500">Hostname</span><span className="text-gray-900">{selected.details.hostname || 'N/A'}</span></div>
            <div className="flex justify-between text-sm mb-1"><span className="text-gray-500">IP Address</span><span className="text-gray-900">{selected.details.ip || 'N/A'}</span></div>
            <div className="flex justify-between text-sm mb-1"><span className="text-gray-500">User-Agent</span><span className="text-gray-900">{selected.details.user_agent || 'N/A'}</span></div>
            <div className="flex justify-between text-sm mb-1"><span className="text-gray-500">User's Name</span><span className="text-gray-900">{selected.details.user_name || 'N/A'}</span></div>
          </div>
          <div className="flex gap-2 mb-2">
            <Button variant="outline" className="flex-1">Raw Data</Button>
            <Button variant="outline" className="flex-1">Context Data</Button>
          </div>
          <div className="bg-gray-900 text-white rounded-lg p-3 text-xs font-mono overflow-x-auto mb-4">
            {JSON.stringify(selected.details, null, 2)}
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Open Details</Button>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default Logs; 