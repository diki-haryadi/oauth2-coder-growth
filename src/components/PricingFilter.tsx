import React, { useState } from 'react';

interface ToggleButtonProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const ToggleButton = ({ options, value, onChange }: ToggleButtonProps) => (
  <div className="bg-[#1A1B26] rounded-full p-1 flex">
    {options.map((option) => (
      <button
        key={option}
        className={`px-6 py-2 rounded-full transition-all ${
          value === option
            ? 'bg-white text-black'
            : 'text-white hover:text-gray-200'
        }`}
        onClick={() => onChange(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

const PricingFilter = () => {
  const [useCase, setUseCase] = useState('B2C');
  const [billing, setBilling] = useState('Monthly');
  const [users, setUsers] = useState(500);

  return (
    <div className="mb-16">
      <div className="grid grid-cols-3 gap-8 items-center mb-8">
        <div>
          <label className="block text-white mb-3">What is your use case?</label>
          <ToggleButton
            options={['B2C', 'B2B']}
            value={useCase}
            onChange={setUseCase}
          />
        </div>

        <div>
          <label className="block text-white mb-3">Billing</label>
          <ToggleButton
            options={['Monthly', 'Yearly']}
            value={billing}
            onChange={setBilling}
          />
        </div>

        <div>
          <div className="flex items-center mb-3">
            <label className="block text-white">How many monthly active users?</label>
            <button className="ml-2 text-gray-400 hover:text-white">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="relative">
            <input
              type="range"
              min={500}
              max={30000}
              step={500}
              value={users}
              onChange={(e) => setUsers(Number(e.target.value))}
              className="w-full h-2 bg-[#1A1B26] rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #635DFF ${(users - 500) / 295}%, #1A1B26 ${(users - 500) / 295}%)`
              }}
            />
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>500</span>
              <span>1,000</span>
              <span>2,500</span>
              <span>5,000</span>
              <span>7,500</span>
              <span>10,000</span>
              <span>20,000</span>
              <span>30,000+</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center space-x-4">
        <button className="px-6 py-2 bg-white hover:bg-gray-100 text-black rounded-lg font-medium transition-all">
          Start building for free
        </button>
        <button className="px-6 py-2 border border-gray-600 text-white rounded-lg font-medium hover:bg-white/5 transition-all">
          Talk to our Sales team
        </button>
      </div>
      <div className="text-right mt-2 text-gray-400">
        Add authentication to your application today
      </div>
    </div>
  );
};

export default PricingFilter; 