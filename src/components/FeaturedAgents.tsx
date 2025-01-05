import { motion } from 'framer-motion';
import { Agent } from '../types/agent';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface FeaturedAgentsProps {
  agents: Agent[];
  currentAgentId: string;
}

export function FeaturedAgents({ agents, currentAgentId }: FeaturedAgentsProps) {
  const otherFeaturedAgents = agents.filter(
    agent => agent.featured && agent.id !== currentAgentId
  );

  if (otherFeaturedAgents.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="text-xl font-bold mb-6">Featured AI Agents</h3>
      <div className="space-y-4">
        {otherFeaturedAgents.map((agent) => (
          <Link
            key={agent.id}
            to={`/agent/${agent.id}`}
            className="block bg-white rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex gap-4">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-gray-900">{agent.name}</h4>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-gray-600">{agent.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {agent.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}