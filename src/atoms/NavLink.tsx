import React from 'react';
import { cn } from '../utils/cn';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  hasSubmenu?: boolean;
}

const NavLink = ({ href, children, className, hasSubmenu }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      className={cn(
        "text-gray-300 hover:text-white flex items-center gap-1",
        className
      )}
    >
      {children}
      {hasSubmenu && (
        <svg 
          className="w-4 h-4 opacity-50" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      )}
    </a>
  );
};

export default NavLink; 