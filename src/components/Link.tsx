import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className }: LinkProps) {
  return (
    <a
      href={href}
      className={`${className} text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium`}
    >
      {children}
    </a>
  );
}
