export type CategoryType = 
  | 'Cameras'
  | 'Lenses'
  | 'Photography Accessories'
  | 'Lighting'
  | 'Audio'
  | 'Video Production'
  | 'Drones'
  | 'Studio Equipment';

export type SubCategoryType = 
  // Cameras
  | 'Mirrorless' | 'DSLR' | 'Cinema' | 'Compact' | 'Action' | 'Instant' | 'Camcorders'
  // Lenses
  | 'Prime' | 'Zoom' | 'Wide Angle' | 'Telephoto' | 'Macro' | 'Portrait' | 'Cine'
  // Accessories
  | 'Camera Bags' | 'Memory Cards' | 'Batteries' | 'Chargers' | 'Camera Straps' | 'Filters' | 'Cleaning Kits' | 'Remote Shutters' | 'Camera Cages' | 'Lens Hoods'
  // Lighting
  | 'LED Lights' | 'Studio Flash' | 'Speedlights' | 'Softboxes' | 'Reflectors' | 'Light Stands' | 'Ring Lights' | 'Continuous Lights'
  // Audio
  | 'Wireless Microphones' | 'Shotgun Microphones' | 'Lavalier Microphones' | 'Audio Recorders' | 'Headphones' | 'Accessories'
  // Video Production
  | 'Gimbals' | 'Tripods' | 'Sliders' | 'External Monitors' | 'Teleprompters' | 'Follow Focus' | 'Camera Rigs'
  // Drones
  | 'Professional Drones' | 'Batteries & Power' | 'Drone Accessories' | 'Propellers' | 'Carry Cases'
  // Studio Equipment
  | 'Backgrounds' | 'Green Screens' | 'Backdrop Stands' | 'Product Tables' | 'Ceiling Mount Systems';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: CategoryType;
  subCategory: SubCategoryType;
  description: string;
  image: string;
  keySpecs: string[];
  featured?: boolean;
  priceTag?: string;
  inStock?: boolean;
}

export interface Brand {
  id: string;
  name: string;
  logoText: string;
  category: string;
  description: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
}

export interface ProductEnquiry {
  productId: string;
  productName: string;
  productBrand: string;
  productImage: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  message: string;
}
