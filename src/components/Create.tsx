import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';

export function Create() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
          Create Your Image
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
              Describe your image
            </label>
            <textarea
              id="prompt"
              rows={4}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 text-base"
              placeholder="A serene landscape with mountains at sunset..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={isGenerating || !prompt.trim()}
            className={`w-full flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 border border-transparent text-base font-medium rounded-md text-white ${
              isGenerating || !prompt.trim()
                ? 'bg-purple-400 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700'
            } transition-colors duration-200`}
          >
            <Wand2 className="mr-2 h-5 w-5" />
            {isGenerating ? 'Generating...' : 'Generate Image'}
          </button>
        </form>
      </div>
    </div>
  );
}