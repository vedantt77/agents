
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
          
            <h1 className="ml-3 text-xl font-bold text-gray-900">
              🤖 TopAiAgents.fyi
            </h1>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}