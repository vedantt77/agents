import { motion } from 'framer-motion';
import { SearchBar } from './SearchBar';
import { Sparkles } from 'lucide-react';

export function Hero() {
  const handleSearch = (query: string) => {
    // TODO: Implement search functionality
    console.log('Search query:', query);
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          className="absolute -inset-[100%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        />
      </div>
      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
              Discover Top AI Agents
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Find the Perfect AI Agent
            <br />
            for Your Needs
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore our curated collection of AI agents designed to enhance your productivity,
            creativity, and problem-solving capabilities.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center"
          >
            <SearchBar onSearch={handleSearch} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}