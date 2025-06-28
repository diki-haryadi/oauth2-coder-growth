import React from 'react';
import { useParams } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import DateFilter from '../components/DateFilter';
import DashboardSidebar from '../components/DashboardSidebar';

const data = [
  { name: 'May 28', users: 12 },
  { name: 'May 30', users: 18 },
  { name: 'Jun 1', users: 16 },
  { name: 'Jun 2', users: 22 },
  { name: 'Jun 3', users: 25 },
  { name: 'Jun 4', users: 20 },
  { name: 'Jun 5', users: 19 },
  { name: 'Jun 6', users: 23 },
  { name: 'Jun 7', users: 28 },
  { name: 'Jun 8', users: 30 },
  { name: 'Jun 9', users: 27 },
  { name: 'Jun 10', users: 32 },
  { name: 'Jun 11', users: 35 },
  { name: 'Jun 12', users: 30 },
  { name: 'Jun 13', users: 28 },
  { name: 'Jun 14', users: 33 },
  { name: 'Jun 15', users: 37 },
  { name: 'Jun 16', users: 35 },
  { name: 'Jun 17', users: 30 },
  { name: 'Jun 18', users: 32 },
  { name: 'Jun 19', users: 38 },
  { name: 'Jun 21', users: 35 },
  { name: 'Jun 23', users: 42 },
  { name: 'Jun 26', users: 43 }
];

const ActivityInsights = () => {
  const { tenantId } = useParams();

  const stats = [
    {
      label: 'Total Users',
      value: '1',
      tooltip: 'Total number of users in your tenant'
    },
    {
      label: 'Applications',
      value: '0',
      tooltip: 'Number of applications'
    },
    {
      label: 'APIs',
      value: '0',
      tooltip: 'Number of APIs'
    },
    {
      label: 'Connections',
      value: '3',
      tooltip: 'Number of connections'
    }
  ];

  const handleDateRangeChange = (range: { from: Date; to: Date }) => {
    console.log('Date range changed:', range);
  };

  // Calculate average daily active users
  const averageDAU = Math.round(data.reduce((acc, curr) => acc + curr.users, 0) / data.length);

  return (
    <div className="flex min-h-screen w-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 min-w-0 relative">
        <main className="w-full h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-8 py-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900">Activity</h1>
              <DateFilter onApply={handleDateRangeChange} />
            </div>

            <div className="grid grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                    {stat.tooltip && (
                      <div className="ml-2 text-gray-400 hover:text-gray-500">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-6">
                <h2 className="text-base font-medium text-gray-900">Daily Active Users</h2>
                <div className="ml-2 text-gray-400 hover:text-gray-500">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <div className="text-3xl font-semibold text-gray-900 mb-6">{averageDAU}</div>

              <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#2563EB" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </main>

        <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-gray-200">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm text-gray-600">Auth for GenAI is now available in Developer Preview:</span>
                <a href="#" className="text-sm text-blue-600">Start securing your Gen AI apps here.</a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Learn more about our new product in our</span>
                <a href="#" className="text-sm text-blue-600">announcement blog post.</a>
                <button className="text-gray-400 hover:text-gray-500">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityInsights; 