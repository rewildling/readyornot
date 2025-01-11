import Image from "next/image";
import { ContextDemo } from "@/components/ContextDemo";
import { ChatInterface } from "@/components/ChatInterface";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl text-left">
            <span>Ready or <span className="text-red-600">Not.</span></span>
          </h1>
          
          <div className="mt-8 space-y-6">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Are you ready for the massive changes AI is bringing?
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Most people aren't. They're throwing prompts at AI and hoping for magic. But there's a massive opportunity for those who know how to use it effectively.
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Here's what most are missing: <span className="font-bold text-gray-900 dark:text-white">context is everything</span>. Without clear context, you're just getting random outputs faster. With it, AI becomes a tool for real progress.
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Our thesis is simple: successfully communicating your context - personal or business - is critical if you want to do more than waste time with AI.
            </p>
          </div>

          <div className="mt-10">
            <ChatInterface />
          </div>
        </div>
      </main>

      {/* Feature Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Why Context Matters
            </h2>
            <div className="mt-8 max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                AI is powerful. But power without direction just creates chaos faster.
              </p>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                The difference between getting random outputs and getting actual results comes down to one thing: context.
              </p>

              <div className="text-left mb-8">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  We're here to help you:
                </p>
                <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">1.</span>
                    <span><strong>Develop your context</strong> (what matters, what you're trying to achieve, what you have to work with)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">2.</span>
                    <span><strong>Document it effectively</strong> (capture the important parts in a usable way)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">3.</span>
                    <span><strong>Communicate it to AI</strong> (so you get aligned, meaningful results)</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Want to see the difference context makes? Try the demo below. Same question, same AI - but one has context, one doesn't.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                We've built a simple system for developing and communicating the context AI needs to actually help you make progress. No hype, no complexity - just clear frameworks and real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Letter Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose dark:prose-invert prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready or Not...
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              AI is coming whether we're ready or not. But here's the thing - throwing AI at random problems won't make you more effective. It'll just make you more efficient at doing the wrong things.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Context is the dark matter of intelligence. Without it, AI is just pattern matching. With it, it becomes a tool for actual progress.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I learned this while developing a holistic context for our farm. The process made something clear: before you can make good decisions, you need to understand your:
            </p>

            <ul className="list-none space-y-4 mb-6">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-blue-600 mr-2">•</span>
                <strong>Mission</strong> (what you're actually trying to do)
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-blue-600 mr-2">•</span>
                <strong>Principles</strong> (what you won't compromise on)
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-blue-600 mr-2">•</span>
                <strong>Resources</strong> (what you have to work with)
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="text-blue-600 mr-2">•</span>
                <strong>Constraints</strong> (what's holding you back)
              </li>
            </ul>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              This isn't just theory. This is about getting results.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Want to see the difference context makes? Try our demo below. Same question, same AI models - but one has context, one doesn't. The results speak for themselves.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I built this site to help people develop and articulate their context. Not through fancy sales pitches or manipulation. Just through clear frameworks and real examples.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Because ready or not, AI is here. The only question is: will you use it effectively?
            </p>

            <p className="text-gray-600 dark:text-gray-300 font-semibold">
              Let's figure this out together.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800" id="demo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              See the Difference Context Makes
            </h2>
            <div className="mt-4 max-w-2xl mx-auto">
              <p className="text-xl text-gray-500 dark:text-gray-400 font-mono">
                Prompt: Help me optimize my marketing strategy...
              </p>
              <p className="mt-2 text-sm text-red-600 font-semibold">
                DEMO, FILL IN WITH REAL
              </p>
            </div>
          </div>
          <ContextDemo />
        </div>
      </section>

      {/* Framework Section */}
      <section className="py-16 bg-white dark:bg-gray-900" id="framework">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            The Context Framework
          </h2>
          
          <div className="prose dark:prose-invert prose-lg mx-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Here's what we've learned about developing context that actually works - not just for AI, but for any complex decision-making:
            </p>

            {/* Holistic Context Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Holistic Context
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Start here. This is your foundation:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Your mission statement</strong> (what success actually looks like)</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Your core values</strong> (what you won't compromise on)</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Your principles</strong> (how you operate)</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Your available resources</strong> (what you have to work with)</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Your constraints</strong> (what's holding you back)</span>
                </li>
              </ul>
            </div>

            {/* Theory of Constraints Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Theory of Constraints
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Once you know where you are, map out:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Your current reality</strong> (what's actually happening now)</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Your desired future</strong> (where you want to go)</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Your transition path</strong> (how to get there)</span>
                </li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                This isn't just theory - it's about identifying what's actually blocking progress and dealing with it systematically.
              </p>
            </div>

            {/* Forms of Capital Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Forms of Capital
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Know what you're working with:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Financial</strong> (money, assets)</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Material</strong> (physical resources)</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Living</strong> (biological assets)</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Social</strong> (relationships, networks)</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Intellectual</strong> (knowledge, skills)</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Experiential</strong> (what you've learned)</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Cultural</strong> (shared understanding)</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span><strong>Spiritual</strong> (purpose, meaning)</span>
                </li>
              </ul>
            </div>

            {/* Q2 Time Management Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Q2 Time Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Focus on what matters:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span>Important but not urgent</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span>Strategic rather than reactive</span>
                </li>
                <li className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 mr-2 text-lg">•</span>
                  <span>Building rather than fixing</span>
                </li>
              </ul>
            </div>

            {/* Why This Matters Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Why This Matters for AI
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                AI amplifies whatever you feed it. Poor context = poor results, just faster.<br />
                Good context = AI that actually helps you move toward your goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
