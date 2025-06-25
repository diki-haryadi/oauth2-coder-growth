import React from 'react';

interface SubMenuSectionProps {
  title: string;
  children: React.ReactNode;
}

const SubMenuSection = ({ title, children }: SubMenuSectionProps) => {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-3">
        {children}
      </ul>
    </div>
  );
};

export default SubMenuSection; 