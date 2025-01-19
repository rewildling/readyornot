'use client';

import { useState } from 'react';

export default function ContextDemo() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Interactive Context Demo</h3>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Without Context</h4>
            <div className="min-h-[200px] bg-gray-50 rounded p-4">
              {/* Demo content will go here */}
              <p className="text-gray-600">Coming soon...</p>
            </div>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-semibold mb-2">With Context</h4>
            <div className="min-h-[200px] bg-gray-50 rounded p-4">
              {/* Demo content will go here */}
              <p className="text-gray-600">Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 