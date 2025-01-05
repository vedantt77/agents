import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { agents } from './data/agents';
import { AgentDetail } from './components/AgentDetail';
import { Hero } from './components/Hero';
import { Layout } from './components/Layout';
import { AgentsList } from './components/AgentsList';

export default function App() {
  const featuredAgents = agents.filter(agent => agent.featured);
  const regularAgents = agents.filter(agent => !agent.featured);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
                <AgentsList agents={featuredAgents} title="Featured Agents" />
                <AgentsList agents={regularAgents} title="All Agents" />
              </main>
            </Layout>
          }
        />
        <Route path="/agent/:id" element={<AgentDetail />} />
      </Routes>
    </Router>
  );
}