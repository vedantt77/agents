import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Agent } from '../types/agent';

interface AgentCardProps {
  agent: Agent;
  index: number;
}

export function AgentCard({ agent, index }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={`/agent/${agent.id}`}>
        <div className="relative h-48">
          <img
            src={agent.image}
            alt={agent.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">{agent.rating}</span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              {agent.category}
            </span>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-2">{agent.description}</p>
          <div className="flex flex-wrap gap-2">
            {agent.capabilities.slice(0, 3).map((capability) => (
              <span
                key={capability}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}