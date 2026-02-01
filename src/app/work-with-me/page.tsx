export default function WorkWithMe() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl">
          Strategic Roadmapping
        </h1>

        <div className="mt-8 space-y-6">
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A focused engagement to clarify your path forward.
          </p>

          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We&apos;ll work together to:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-600 dark:text-gray-300">
                <span className="text-blue-600 mr-3 font-bold">1.</span>
                <span><strong>Audit your business</strong> &mdash; understand where you are today</span>
              </li>
              <li className="flex items-start text-gray-600 dark:text-gray-300">
                <span className="text-blue-600 mr-3 font-bold">2.</span>
                <span><strong>Identify constraints</strong> &mdash; find what&apos;s actually blocking progress</span>
              </li>
              <li className="flex items-start text-gray-600 dark:text-gray-300">
                <span className="text-blue-600 mr-3 font-bold">3.</span>
                <span><strong>Create an action plan</strong> &mdash; clear next steps to move forward</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              Starting at $3,000
            </p>
          </div>

          <div className="pt-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Ready to get started?
            </p>
            <a
              href="mailto:dylan@dunderblixem.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
