import { Agent } from '../types/agent';
import { Category } from '../types/categories';

export const agents: Agent[] = [
  {
    id: '1',
    name: 'CodeAssist Pro',
    description: 'Advanced AI coding assistant that helps developers write better code faster with real-time suggestions and code analysis.',
    capabilities: ['Code completion', 'Bug detection', 'Code refactoring', 'Documentation generation'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000',
    category: 'Coding' as Category,
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
    name: 'WorkflowMaster',
    description: 'Intelligent workflow automation tool that streamlines your business processes and boosts productivity.',
    capabilities: ['Process automation', 'Task management', 'Integration support', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    category: 'Workflow' as Category,
    rating: 4.6,
    useCases: ['Business automation', 'Project management', 'Team collaboration', 'Process optimization'],
    pricing: {
      free: false,
      startingPrice: 29
    },
    featured: false
  },
  {
    id: '3',
    name: 'ContentGenius',
    description: 'AI-powered content creation assistant for generating engaging and SEO-optimized content.',
    capabilities: ['Content generation', 'SEO optimization', 'Grammar checking', 'Style suggestions'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000',
    category: 'Content Creation' as Category,
    rating: 4.7,
    useCases: ['Blog writing', 'Social media', 'Marketing copy', 'Product descriptions'],
    pricing: {
      free: true,
      startingPrice: 15
    },
    featured: true
  }
];