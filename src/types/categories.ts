export const CATEGORIES = [
  'Coding',
  'Productivity',
  'Customer Service',
  'Personal Assistant',
  'Workflow',
  'Digital Workers',
  'Content Creation'
] as const;

export type Category = typeof CATEGORIES[number];