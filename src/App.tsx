import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import { Layout } from './components/Layout';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Head } from './components/Head';
import { SearchProvider } from './contexts/SearchContext';

const Hero = lazy(() => import('./components/Hero'));
const AgentsList = lazy(() => import('./components/AgentsList'));
const AgentDetail = lazy(() => import('./components/AgentDetail'));

export default function App() {
  return (
    <HelmetProvider>
      <SearchProvider>
        <Router>
          <Head />
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Hero />
                    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
                      <AgentsList />
                    </main>
                  </Suspense>
                </Layout>
              }
            />
            <Route
              path="/agent/:id"
              element={
                <Layout>
                  <Suspense fallback={<LoadingSpinner />}>
                    <AgentDetail />
                  </Suspense>
                </Layout>
              }
            />
          </Routes>
        </Router>
      </SearchProvider>
    </HelmetProvider>
  );
}