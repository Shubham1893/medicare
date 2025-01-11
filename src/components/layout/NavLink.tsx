import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function NavLink({ to, children }: NavLinkProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isHashLink = to.startsWith('#');

  const handleClick = (e: React.MouseEvent) => {
    if (isHomePage && isHashLink) {
      e.preventDefault();
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-100 ${
        location.pathname === to ? 'text-blue-600' : 'text-gray-700'
      }`}
    >
      {children}
    </Link>
  );
}