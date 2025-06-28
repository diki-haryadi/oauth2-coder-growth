import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CreateApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string, type: string) => { clientId: string };
}

const CreateApplicationModal: React.FC<CreateApplicationModalProps> = ({
  isOpen,
  onClose,
  onCreate
}) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  const applicationTypes = [
    {
      id: 'native',
      name: 'Native',
      description: 'Mobile, desktop, CLI and smart device apps running natively.',
      examples: 'e.g.: iOS, Electron, Apple TV apps',
      icon: (
        <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
          <path d="M12 4v16" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'spa',
      name: 'Single Page Web Applications',
      description: 'A JavaScript front-end app that uses an API.',
      examples: 'e.g.: Angular, React, Vue',
      icon: (
        <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
          <path d="M4 8h16" strokeWidth="2" />
          <circle cx="8" cy="6" r="1" />
        </svg>
      )
    },
    {
      id: 'regular',
      name: 'Regular Web Applications',
      description: 'Traditional web app using redirects.',
      examples: 'e.g.: Node.js Express, ASP.NET, Java, PHP',
      icon: (
        <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
          <path d="M4 8h16M4 12h16M4 16h8" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'm2m',
      name: 'Machine to Machine Applications',
      description: 'CLIs, daemons or services running on your backend.',
      examples: 'e.g.: Shell script',
      icon: (
        <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
          <path d="M4 8h16M8 12h8M8 16h8" strokeWidth="2" />
        </svg>
      )
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const type = formData.get('type') as string;
    const result = onCreate(name, type);
    navigate(`/dashboard/applications/${result.clientId}/quickstart`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl mx-4">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold">Create application</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-6">
            <label className="block mb-2">
              <span className="text-gray-700 font-medium">Name</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="My App"
              required
            />
            <p className="text-gray-500 text-sm mt-1">
              You can change the application name later in the application settings.
            </p>
          </div>

          <div>
            <label className="block mb-4">
              <span className="text-gray-700 font-medium">Choose an application type</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applicationTypes.map((type) => (
                <label
                  key={type.id}
                  className="border rounded-lg p-4 cursor-pointer hover:border-blue-500 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500"
                >
                  <input
                    type="radio"
                    name="type"
                    value={type.id}
                    className="sr-only"
                    required
                  />
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {type.icon}
                    </div>
                    <div>
                      <div className="font-medium">{type.name}</div>
                      <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                      <p className="text-sm text-gray-500 mt-2">{type.examples}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateApplicationModal; 