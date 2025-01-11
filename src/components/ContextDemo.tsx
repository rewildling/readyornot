'use client';

import { Card, CardContent } from '@/components/ui/card';

export function ContextDemo() {
  const withoutContextResponse = `I'll help optimize your marketing strategy. Here's a generic plan:
1. Increase social media presence
2. Start email marketing
3. Create more content
4. Run paid ads`;

  const withContextResponse = `Based on your regenerative farm context, your values of sustainability, and your goal of building community:
1. Partner with local food co-ops
2. Create educational content about regenerative practices
3. Host farm-to-table events
4. Build relationships with local chefs`;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Without Context Card */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
            Without Context
          </h3>
          <Card>
            <CardContent>
              <div className="whitespace-pre-wrap font-mono text-sm text-gray-700 dark:text-gray-300">
                {withoutContextResponse}
              </div>
            </CardContent>
          </Card>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
            Without context, the AI can only provide generic, one-size-fits-all advice.
          </p>
        </div>

        {/* With Context Card */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
            With Context
          </h3>
          <Card>
            <CardContent>
              <div className="whitespace-pre-wrap font-mono text-sm text-gray-700 dark:text-gray-300">
                {withContextResponse}
              </div>
            </CardContent>
          </Card>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
            Notice how the AI understands your specific situation and values, providing targeted advice.
          </p>
        </div>
      </div>
    </div>
  );
} 