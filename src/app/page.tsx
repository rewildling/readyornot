import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          <span className="block">Ready or Not,</span>
          <span className="block text-blue-600">Here It Comes</span>
        </h1>
        
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Don't just get more efficient at doing the wrong things. Learn how to develop the right context for AI to truly understand and help achieve your goals.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="#demo" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg">
            Try Demo
          </a>
          <a href="#learn-more" className="px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:text-lg">
            Learn More
          </a>
        </div>
      </main>

      {/* Feature Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Why Context Matters
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Discover how proper context development can transform your AI interactions from generic to genuinely helpful.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
