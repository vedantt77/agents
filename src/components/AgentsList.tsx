import { motion } from 'framer-motion';
import { Agent } from '../types/agent';
import { AgentCard } from './AgentCard';

interface AgentsListProps {
  agents: Agent[];
  title: string;
}

export function AgentsList({ agents, title }: AgentsListProps) {
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
}