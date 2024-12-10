import React from 'react';
import { Zap, Clock, Palette, Lock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate high-quality images in seconds with our optimized AI models.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Create stunning images whenever inspiration strikes, day or night.'
  },
  {
    icon: Palette,
    title: 'Style Variety',
    description: 'Choose from multiple artistic styles and customize to your needs.'
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Your creations are protected with enterprise-grade security.'
  }
];

export function Features() {
  return (
    <div id="features" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            Why Choose ImageAI?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Experience the future of image generation with our powerful features.
          </p>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-purple-600 rounded-full p-3">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>
              <h3 className="mt-8 text-base sm:text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}