import React from 'react';
import { StartButton } from './StartButton';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="relative pt-16 pb-20 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block mb-2">Transform Your Words</span>
              <span className="block text-purple-600">Into Stunning Images</span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-gray-600 px-4">
              Experience the power of AI-driven image generation. Turn your imagination into reality
              with our cutting-edge text-to-image technology.
            </p>
            <div className="mt-8 sm:mt-10">
              <StartButton />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative h-48 sm:h-64 overflow-hidden rounded-lg">
            <img
              src={`https://source.unsplash.com/random/800x600?ai,digital,art&sig=${i}`}
              alt="AI Generated Art Example"
              className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}