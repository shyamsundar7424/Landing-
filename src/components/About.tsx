import React from 'react';
import { Users, Brain, Shield, Globe } from 'lucide-react';

const stats = [
  { label: 'Active Users', value: '100K+', icon: Users },
  { label: 'Images Generated', value: '10M+', icon: Brain },
  { label: 'Success Rate', value: '99.9%', icon: Shield },
  { label: 'Countries', value: '150+', icon: Globe }
];

export function About() {
  return (
    <div id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About ImageAI
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're pioneering the future of AI-powered image generation, making it accessible to
              everyone. Our mission is to empower creators, businesses, and individuals to bring
              their visual ideas to life with unprecedented ease and quality.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Founded by a team of AI researchers and artists, ImageAI combines cutting-edge
              technology with artistic vision to deliver stunning results. We believe in the power
              of AI to augment human creativity, not replace it.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}