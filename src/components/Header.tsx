import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-extrabold text-gray-900 dark:text-white">
            Ready or <span className="text-red-600">Not.</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <a
              href="https://321.readyornot.ai"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Newsletter
            </a>
            <Link
              href="/work-with-me"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Work With Me
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
