import { Agent } from '../types/agent';

export const agents: Agent[] = [
  {
    id: '1',
    name: 'CodeAssist Pro',
    description: 'Advanced AI coding assistant that helps developers write better code faster with real-time suggestions and code analysis.',
    capabilities: ['Code completion', 'Bug detection', 'Code refactoring', 'Documentation generation'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000',
    category: 'Development',
    rating: 4.8,
    useCases: ['Web development', 'Mobile development', 'Code review', 'Learning programming'],
    pricing: {
      free: true,
      startingPrice: 10
    },
    featured: true
  },
  {
    id: '2',
    name: 'DataSense AI',
    description: 'Intelligent data analysis tool that transforms complex datasets into actionable insights.',
    capabilities: ['Data visualization', 'Predictive analytics', 'Pattern recognition', 'Automated reporting'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    category: 'Analytics',
    rating: 4.6,
    useCases: ['Business intelligence', 'Market research', 'Financial analysis', 'Scientific research'],
    pricing: {
      free: false,
      startingPrice: 29
    },
    featured: false
  },
  {
    id: '3',
    name: 'CreativeGenius',
    description: 'AI-powered creative assistant for generating unique designs, artwork, and creative content.',
    capabilities: ['Image generation', 'Design suggestions', 'Style transfer', 'Color palette generation'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000',
    category: 'Creative',
    rating: 4.7,
    useCases: ['Graphic design', 'Digital art', 'Marketing materials', 'Brand identity'],
    pricing: {
      free: true,
      startingPrice: 15
    },
    featured: true
  }
];