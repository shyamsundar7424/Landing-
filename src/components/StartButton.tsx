import React from 'react';
import { ArrowRight } from 'lucide-react';

export function StartButton() {
  return (
    <a
      href="https://one-world-one.vercel.app/"
      className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
    >
      Start
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  );
}