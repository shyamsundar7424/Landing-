import React, { useState } from 'react';
import { ImageIcon, Menu, X } from 'lucide-react';
import { Link } from './Link';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ImageIcon className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">OneWorld</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="#features">Features</Link>
              <Link href="#examples">Examples</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#about">About</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#features" className="block px-3 py-2 text-base">Features</Link>
            <Link href="#examples" className="block px-3 py-2 text-base">Examples</Link>
            <Link href="#pricing" className="block px-3 py-2 text-base">Pricing</Link>
            <Link href="#about" className="block px-3 py-2 text-base">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
