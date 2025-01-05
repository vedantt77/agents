import { Category } from './categories';

export interface Agent {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  image: string;
  category: Category;
  rating: number;
  useCases: string[];
  pricing: {
    free: boolean;
    startingPrice?: number;
  };
  featured?: boolean;
}