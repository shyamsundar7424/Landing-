import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '9',
    features: [
      '100 images per month',
      'Basic art styles',
      'Standard resolution',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    price: '29',
    features: [
      '500 images per month',
      'Advanced art styles',
      'HD resolution',
      'Priority support',
      'Commercial usage'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '99',
    features: [
      'Unlimited images',
      'Custom art styles',
      '4K resolution',
      '24/7 dedicated support',
      'API access',
      'Custom integration'
    ]
  }
];

export function Pricing() {
  return (
    <div id="pricing" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your creative needs
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl bg-white p-8 shadow-sm ${
                plan.popular ? 'ring-2 ring-purple-600' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-sm text-gray-500">/month</span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}