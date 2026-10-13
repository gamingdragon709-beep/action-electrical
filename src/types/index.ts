export type ScreenType = 
  | 'home' 
  | 'services' 
  | 'why-action' 
  | 'about' 
  | 'safety' 
  | 'careers' 
  | 'case-studies' 
  | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  capabilities: string[];
  specs: { label: string; value: string }[];
  certifications: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  compensation: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  facilityType: string;
  scope: string;
  metric: string;
  metricLabel: string;
  summary: string;
  details: string[];
}

export interface ServiceRequest {
  trade: 'electrical' | 'mechanical' | 'controls' | 'generator' | 'diagnostics' | 'general';
  isEmergency: boolean;
  facilityType: string;
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  address: string;
  description: string;
  preferredDate?: string;
  preferredTime?: string;
}
