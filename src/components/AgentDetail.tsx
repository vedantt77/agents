import { motion } from 'framer-motion';
import { ArrowLeft, Star, Check, X } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { agents } from '../data/agents';
import { Newsletter } from './Newsletter';
import { FeaturedAgents } from './FeaturedAgents';

export function AgentDetail() {
  const { id } = useParams();
  const agent = agents.find((a) => a.id === id);

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Agent not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Agents
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold text-white mb-4"
                  >
                    {agent.name}
                  </motion.h1>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
                      {agent.category}
                    </span>
                    <div className="flex items-center gap-1 text-white">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{agent.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-4">About</h2>
                  <p className="text-gray-600 mb-6">{agent.description}</p>

                  <h3 className="text-xl font-bold mb-3">Capabilities</h3>
                  <ul className="space-y-2 mb-6">
                    {agent.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <Check className="w-5 h-5 text-green-500" />
                        {capability}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold mb-3">Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {agent.useCases.map((useCase) => (
                      <span
                        key={useCase}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6">Pricing</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {agent.pricing.free ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-red-500" />
                  )}
                  <span className="text-gray-600">Free Tier Available</span>
                </div>
                {agent.pricing.startingPrice && (
                  <div className="border-t pt-4">
                    <p className="text-gray-600">Starting from</p>
                    <p className="text-3xl font-bold text-gray-900">
                      ${agent.pricing.startingPrice}
                      <span className="text-base font-normal text-gray-600">
                        /month
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            <Newsletter />
            <FeaturedAgents agents={agents} currentAgentId={agent.id} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}