export interface Agent {
  id: string;
  name: string;
  description: string;
  capabilities: string[];
  image: string;
  category: string;
  rating: number;
  useCases: string[];
  pricing: {
    free: boolean;
    startingPrice?: number;
  };
  featured?: boolean;
}