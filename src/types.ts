export interface ServiceItem {
  id: string;
  category: 'ac' | 'geyser' | 'electrical';
  categoryTitle: string;
  title: string;
  description: string;
  price: number;
  priceText: string;
  duration: string;
  image: string;
  features: string[];
}

export interface Booking {
  id: string;
  customerName: string;
  phoneNumber: string;
  address: string;
  city: string;
  pincode: string;
  serviceId: string;
  serviceTitle: string;
  categoryTitle: string;
  price: number;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status: 'Confirmed' | 'Technician Assigned' | 'In Progress' | 'Completed' | 'Cancelled';
  assignedTechnician?: {
    name: string;
    phone: string;
    rating: number;
  };
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  password?: string;
  createdAt: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  quote: string;
}
