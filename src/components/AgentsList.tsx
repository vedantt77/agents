import { motion } from 'framer-motion';
import { Agent } from '../types/agent';
import { AgentCard } from './AgentCard';
import { agents } from '../data/agents';
import { useSearch } from '../contexts/SearchContext';

function AgentsList() {
  const { searchQuery } = useSearch();
  
  const filteredAgents = agents.filter(agent => {
    const searchLower = searchQuery.toLowerCase();
    return (
      agent.name.toLowerCase().includes(searchLower) ||
      agent.category.toLowerCase().includes(searchLower) ||
      agent.capabilities.some(cap => cap.toLowerCase().includes(searchLower)) ||
      agent.description.toLowerCase().includes(searchLower)
    );
  });

  const featuredAgents = filteredAgents.filter(agent => agent.featured);
  const regularAgents = filteredAgents.filter(agent => !agent.featured);

  const renderSection = (agents: Agent[], title: string) => {
    if (agents.length === 0) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index} />
          ))}
        </div>
      </motion.div>
    );
  };

  if (filteredAgents.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No agents found matching your search.</p>
      </div>
    );
  }

  return (
    <>
      {renderSection(featuredAgents, "Featured Agents")}
      {renderSection(regularAgents, "All Agents")}
    </>
  );
}

export default AgentsList;