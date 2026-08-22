export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  category: 'immobiliare' | 'nautica' | 'consulenza' | 'commerciale';
}

export interface PropertyListing {
  id: string;
  title: string;
  location: string;
  price: string;
  type: 'villa' | 'attico' | 'appartamento' | 'commerciale' | 'yacht';
  category: 'residenziale' | 'prestigio' | 'commerciale' | 'nautica';
  surface: string;
  rooms?: string;
  bathrooms?: string;
  year?: string;
  length?: string; // for yachts
  image: string;
  badge?: string;
  description: string;
  highlights: string[];
}

export interface ValuationFormData {
  propertyType: string;
  location: string;
  surface: string;
  rooms: string;
  condition: string;
  timeline: string;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface PropertySearchFormData {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  targetLocation: string;
  budgetRange: string;
  specificRequirements: string;
}
