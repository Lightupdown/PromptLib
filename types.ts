
export type Language = 'en' | 'zh';

export interface Prompt {
  id: string;
  title: string;
  titleCn?: string;
  description: string;
  descriptionCn?: string;
  promptText: string;
  promptTextCn?: string;
  tags: string[];
  category: CategoryId;
  likes: number;
  imageUrl?: string;
}

export type CategoryId = 'all' | 'landing' | 'dashboard' | 'ecommerce' | 'mobile' | 'portfolio' | 'builder' | 'suffixes' | 'icons' | 'illustrations' | 'logos' | 'backgrounds' | 'mockups' | 'saas_tech' | 'ecommerce_retail' | 'creative_portfolio' | 'corporate_services' | 'experimental_trendy' | 'mobile_social' | 'mobile_productivity' | 'mobile_fintech' | 'mobile_health' | 'mobile_ecommerce' | 'gaming_esports' | 'futuristic_fui' | 'web_sections_hero' | 'web_sections_utility' | 'creative_404' | 'ui_components_micro' | 'data_visualization' | 'login_auth_screens' | 'marketing_assets' | 'design_systems';

export interface Category {
  id: CategoryId;
  label: string; // English label
  labelCn: string; // Chinese label
  icon: string;
}

export interface NavGroup {
  title: string;
  titleCn: string;
  items: CategoryId[];
}

export interface OptionItem {
  value: string;
  label: string;
  labelCn: string;
}

export interface PromptBuilderState {
  // Universal
  model: string;
  type: string;
  subject: string;
  style: string;
  mood: string;
  material: string;
  lighting: string;
  camera: string;
  color: string;
  negative: string;
  
  // Web/App Specific
  framework: string;
  device: string;
  
  // Midjourney Specific
  ar: string;
  stylize: number;
  chaos: number;
  niji: boolean;
  
  // Legacy
  quality: string; 
}

export interface SuffixItem {
  code: string;
  description: string;
  descriptionCn: string;
}

export interface SuffixGroup {
  category: string;
  categoryCn: string;
  suffixes: SuffixItem[];
}