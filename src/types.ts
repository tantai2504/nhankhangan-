export interface Award {
  id: string;
  title: string;
  year: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  isFeatured?: boolean;
  industryTag?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  products: Product[];
}

export interface Testimonial {
  id: string;
  company: string;
  content: string;
  author: string;
  position: string;
  logo?: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: string;
}
