export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization?: string;
}

export interface Project {
  id: string; // essential
  num: string; // essential
  category: 'IMPLEMENT' | 'ENABLE' | 'BUILD' | 'RESEARCH'; // essential, with FILTER support
  title: string; // essential
  domain: string; // essential
  year: string; // essential
  shortDescription?: string;
  
  // Optional detailed fields for Case Study
  client?: string;
  role?: string;
  context?: string;
  challenge?: string;
  approach?: string;
  contribution?: string;
  outcome?: string;
  heroImage?: string;
  galleryImages?: string[];
  tools?: string[];
  tags?: string[];
  testimonial?: Testimonial;
  externalLink?: string;
  caseStudyStatus?: 'Active' | 'Completed' | 'In Progress' | 'Archived';
  imageType?: 'build' | 'position' | 'transform' | 'enable' | 'pulseai' | 'smartcall' | 'tseacademy'; // keeping for visualizations
  problemPoints?: { title: string; desc: string }[];
  solutionOverview?: string;
  keyFeatures?: { title: string; desc: string; bulletPoints?: string[] }[];
  behindTheScenes?: { step: string; title: string; desc: string }[];
  impactStatement?: string;
}

export interface Capability {
  id: string;
  intersection: string;
  title: string;
  description: string;
  focusAreas: string[];
  methodologies: string[];
  tools: string[];
}

export interface EvolutionChapter {
  id: string;
  step: string;
  label: 'MAKE' | 'LEAD' | 'THINK' | 'MULTIPLY';
  headline: string;
  quote: string; // context
  narrative: string; // short description
  timeframe: string; // period
  milestones: string[]; // evidence
  period: string; // explicit period field
  context: string; // explicit context field
  shortDescription: string; // explicit short description field
  image?: string; // optional visual image identifier
  evidence?: string[]; // explicit optional evidence field
  projectLinks?: { label: string; url: string }[]; // optional project links
}

export interface StructuredContribution {
  id: string;
  organization: string;
  role: string;
  programName: string;
  topic: string;
  date: string;
  description: string;
  media?: string;
  evidence?: string;
  quote?: string;
}

export interface WorkshopVideo {
  id: string;
  title: string;
  duration: string;
  category: string;
  scriptSnippet: string;
  terminalOutput: string[];
  description: string;
  url?: string;
}

export interface ContributionItem {
  id: string;
  type: 'PUBLICATION' | 'CURRICULUM' | 'SPEAKING';
  title: string;
  platform: string;
  year: string;
  link?: string;
  abstract?: string;
}

export interface ContextualProof {
  id: string;
  metric?: string;
  label: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
}
