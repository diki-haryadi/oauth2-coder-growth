import React from 'react';

interface SubMenuItemProps {
  href: string;
  title: string;
  description?: string;
}

const SubMenuItem = ({ href, title, description }: SubMenuItemProps) => {
  return (
    <li>
      <a 
        href={href}
        className="block group"
      >
        <div className="text-white font-medium group-hover:text-[#635DFF] transition-colors">
          {title}
        </div>
        {description && (
          <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            {description}
          </div>
        )}
      </a>
    </li>
  );
};

export default SubMenuItem; 