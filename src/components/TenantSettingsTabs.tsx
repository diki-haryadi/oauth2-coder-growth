import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Tab {
  label: string;
  route: string;
}

interface TenantSettingsTabsProps {
  current: string;
  onTabChange?: (route: string) => void;
  tabs: Tab[];
}

const TenantSettingsTabs: React.FC<TenantSettingsTabsProps> = ({ current, onTabChange, tabs }) => {
  const navigate = useNavigate();
  return (
    <nav className="border-b border-gray-200 mb-8">
      <ul className="flex gap-8">
        {tabs.map(tab => (
          <li key={tab.route}>
            <button
              className={` bg-white py-3 px-1 text-base font-medium border-b-2 transition-colors ${
                current === tab.route
                  ? 'border-blue-600 text-blue-700'
                  : 'border-transparent text-gray-500 hover:text-blue-700 hover:border-gray-300'
              }`}
              onClick={() => {
                if (onTabChange) onTabChange(tab.route);
                navigate(tab.route);
              }}
              type="button"
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TenantSettingsTabs; 