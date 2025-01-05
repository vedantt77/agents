import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function Newsletter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-blue-50 rounded-2xl p-8"
    >
      <div className="flex items-center gap-3 mb-4">
        <Mail className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900">Stay Updated</h3>
      </div>
      <p className="text-gray-600 mb-6">
        Subscribe to our newsletter for the latest AI agent updates and insights.
      </p>
      <a
        href="#newsletter-signup"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Join Newsletter
      </a>
    </motion.div>
  );
}