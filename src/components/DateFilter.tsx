import React, { useState } from 'react';
import { format } from 'date-fns';

interface DateFilterProps {
  onApply: (range: { from: Date; to: Date }) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ onApply }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [compareLastPeriod, setCompareLastPeriod] = useState(false);
  const [selectedRange, setSelectedRange] = useState('Last 30 Days');

  const ranges = [
    'Last 7 Days',
    'Last 14 Days',
    'Last 30 Days',
    'Last 60 Days',
    'Custom Range'
  ];

  const currentDate = new Date();
  const currentMonth = format(currentDate, 'MMMM yyyy');
  
  // Generate calendar days
  const daysInMonth = 31; // Simplified for example
  const firstDayOfMonth = 3; // Assuming first day starts on Wednesday (0 = Sunday)
  
  const days: Array<Array<number | null>> = [];
  let dayCounter = 1;
  
  for (let i = 0; i < 6; i++) {
    const week: Array<number | null> = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        week.push(null);
      } else if (dayCounter <= daysInMonth) {
        week.push(dayCounter);
        dayCounter++;
      } else {
        week.push(null);
      }
    }
    days.push(week);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 border border-blue-600 rounded-md bg-white text-sm font-medium text-blue-600 hover:bg-blue-50"
      >
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
        <span>Last 30 Days</span>
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[600px] bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
              <div className="w-1/3">
                <div className="text-blue-600 bg-blue-50 px-3 py-2 rounded-md text-sm">
                  Custom Range
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 bg-gray-100 rounded">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <span className="text-lg font-medium">May 2025</span>
                <button className="p-2 text-gray-400 hover:text-gray-600 bg-gray-100 rounded">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex mb-4">
              <div className="w-1/3 pr-4 space-y-1 bg-white">
                {ranges.map((range) => (
                  <button
                    key={range}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      selectedRange === range
                        ? 'bg-blue-50 text-blue-600'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedRange(range)}
                  >
                    {range}
                  </button>
                ))}
              </div>
              <div className="w-2/3 bg-white">
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                    <div key={day} className="text-xs text-gray-500 font-medium">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {days.flat().map((day, index) => (
                    <button
                      key={index}
                      disabled={!day}
                      className={`
                        p-2 text-sm rounded-full
                        ${!day ? 'invisible' : 'bg-white text-gray-900 hover:bg-gray-50'}
                        ${day === 28 ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
                        ${day && day >= 29 && day <= 31 ? 'bg-blue-50 hover:bg-blue-100' : ''}
                      `}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <input
                  type="text"
                  value="UTC 2025-05-28"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
                  readOnly
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">To</label>
                  <button className="text-sm text-blue-600 hover:text-blue-700 bg-black bg-opacity-10 px-3 py-1 rounded">Set to latest</button>
                </div>
                <input
                  type="text"
                  value="UTC 2025-06-26"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
                  readOnly
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={compareLastPeriod}
                  onChange={(e) => setCompareLastPeriod(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Compare to last period</span>
              </label>
              <div className="space-x-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onApply({
                      from: new Date('2025-05-28'),
                      to: new Date('2025-06-26')
                    });
                  }}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateFilter; 