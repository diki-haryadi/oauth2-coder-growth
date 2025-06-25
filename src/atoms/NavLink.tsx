import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href?: string;
  children: React.ReactNode;
  hasSubmenu?: boolean;
}

const NavLink = ({ href, children, hasSubmenu = false }: NavLinkProps) => {
  const commonClasses = "text-white hover:text-gray-300 font-medium flex items-center transition-colors";
  
  if (hasSubmenu) {
    return (
      <button className={commonClasses}>
        {children}
        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    );
  }

  if (href?.startsWith('http')) {
    return (
      <a href={href} className={commonClasses}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href || '/'} className={commonClasses}>
      {children}
    </Link>
  );
};

export default NavLink; 