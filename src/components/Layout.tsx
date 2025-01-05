import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <h1 className="text-xl font-bold text-gray-900">
                🤖 TopAiAgents.fyi
              </h1>
            </Link>
            <a 
              href="#" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              + Submit
            </a>
          </div>
        </div>
      </nav>
      {children}
      <footer className="mt-auto py-6 text-center text-gray-600">
        made with ❤️ by <a href="https://x.com/kamblivedant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Vedant</a>
      </footer>
    </div>
  );
}