import { Booking, User, ContactInquiry } from '../types';

const USER_KEY = 'smart_services_current_user';
const USERS_DB_KEY = 'smart_services_registered_users';
const BOOKINGS_KEY = 'smart_services_bookings';
const INQUIRIES_KEY = 'smart_services_inquiries';

// Initial seed demo user
const INITIAL_DEMO_USER: User = {
  id: 'user_demo_101',
  name: 'Rahul Verma',
  email: 'rahul@example.com',
  phone: '+91 98765 00123',
  password: 'password123',
  createdAt: '2026-01-15'
};

// Initial seed demo bookings
const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'SMART-8421',
    customerName: 'Rahul Verma',
    phoneNumber: '+91 98765 00123',
    address: 'Flat 402, Sunshine Apartments, MG Road',
    city: 'New Delhi',
    pincode: '110001',
    serviceId: 'ac-cleaning-maintenance',
    serviceTitle: 'AC Cleaning and Maintenance',
    categoryTitle: 'AC Services',
    price: 799,
    preferredDate: '2026-11-05',
    preferredTime: '11:00 AM - 1:00 PM',
    notes: 'Please check the outdoor compressor bracket as well.',
    status: 'Technician Assigned',
    assignedTechnician: {
      name: 'Manoj Kumar',
      phone: '+91 98111 22334',
      rating: 4.9
    },
    createdAt: '2026-11-02T10:30:00Z'
  },
  {
    id: 'SMART-7190',
    customerName: 'Rahul Verma',
    phoneNumber: '+91 98765 00123',
    address: 'Flat 402, Sunshine Apartments, MG Road',
    city: 'New Delhi',
    pincode: '110001',
    serviceId: 'fan-installation',
    serviceTitle: 'Fan Installation',
    categoryTitle: 'Electrical Services',
    price: 249,
    preferredDate: '2026-10-20',
    preferredTime: '2:00 PM - 4:00 PM',
    status: 'Completed',
    assignedTechnician: {
      name: 'Rakesh Sharma',
      phone: '+91 98222 33445',
      rating: 4.8
    },
    createdAt: '2026-10-19T14:15:00Z'
  }
];

export const storage = {
  // Current logged in user
  getCurrentUser: (): User | null => {
    try {
      const data = localStorage.getItem(USER_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  setCurrentUser: (user: User | null): void => {
    try {
      if (user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(USER_KEY);
      }
    } catch (e) {
      console.error('Failed to save user in localStorage', e);
    }
  },

  // Registered users list for demo login
  getUsers: (): User[] => {
    try {
      const data = localStorage.getItem(USERS_DB_KEY);
      if (!data) {
        localStorage.setItem(USERS_DB_KEY, JSON.stringify([INITIAL_DEMO_USER]));
        return [INITIAL_DEMO_USER];
      }
      return JSON.parse(data);
    } catch {
      return [INITIAL_DEMO_USER];
    }
  },

  registerUser: (newUser: Omit<User, 'id' | 'createdAt'>): { success: boolean; message: string; user?: User } => {
    try {
      const users = storage.getUsers();
      const existing = users.find(u => u.email.toLowerCase() === newUser.email.toLowerCase());
      if (existing) {
        return { success: false, message: 'An account with this email already exists. Please log in.' };
      }
      const user: User = {
        ...newUser,
        id: 'user_' + Date.now(),
        createdAt: new Date().toISOString().split('T')[0]
      };
      users.push(user);
      localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
      storage.setCurrentUser(user);
      return { success: true, message: 'Account created successfully!', user };
    } catch {
      return { success: false, message: 'Failed to save account. Storage error.' };
    }
  },

  loginUser: (email: string, password: string): { success: boolean; message: string; user?: User } => {
    try {
      const users = storage.getUsers();
      const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (!user) {
        return { success: false, message: 'No account found with this email. Please sign up.' };
      }
      if (user.password !== password) {
        return { success: false, message: 'Incorrect password. Try "password123" for demo.' };
      }
      storage.setCurrentUser(user);
      return { success: true, message: `Welcome back, ${user.name}!`, user };
    } catch {
      return { success: false, message: 'Login failed due to storage error.' };
    }
  },

  // Bookings
  getBookings: (): Booking[] => {
    try {
      const data = localStorage.getItem(BOOKINGS_KEY);
      if (!data) {
        localStorage.setItem(BOOKINGS_KEY, JSON.stringify(INITIAL_BOOKINGS));
        return INITIAL_BOOKINGS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_BOOKINGS;
    }
  },

  saveBooking: (bookingData: Omit<Booking, 'id' | 'status' | 'assignedTechnician' | 'createdAt'>): Booking => {
    const bookings = storage.getBookings();
    const technicians = [
      { name: 'Manoj Kumar', phone: '+91 98111 22334', rating: 4.9 },
      { name: 'Rakesh Sharma', phone: '+91 98222 33445', rating: 4.8 },
      { name: 'Sunil Verma', phone: '+91 98333 44556', rating: 4.9 },
      { name: 'Amit Patel', phone: '+91 98444 55667', rating: 4.7 }
    ];
    const randomTech = technicians[Math.floor(Math.random() * technicians.length)];

    const newBooking: Booking = {
      ...bookingData,
      id: 'SMART-' + Math.floor(1000 + Math.random() * 9000),
      status: 'Confirmed',
      assignedTechnician: randomTech,
      createdAt: new Date().toISOString()
    };

    bookings.unshift(newBooking);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    return newBooking;
  },

  cancelBooking: (bookingId: string): boolean => {
    try {
      const bookings = storage.getBookings();
      const updated = bookings.map(b => b.id === bookingId ? { ...b, status: 'Cancelled' as const } : b);
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
      return true;
    } catch {
      return false;
    }
  },

  // Inquiries
  saveInquiry: (inquiry: Omit<ContactInquiry, 'id' | 'createdAt'>): ContactInquiry => {
    try {
      const data = localStorage.getItem(INQUIRIES_KEY);
      const inquiries: ContactInquiry[] = data ? JSON.parse(data) : [];
      const newInquiry: ContactInquiry = {
        ...inquiry,
        id: 'INQ-' + Date.now(),
        createdAt: new Date().toISOString()
      };
      inquiries.unshift(newInquiry);
      localStorage.setItem(INQUIRIES_KEY, JSON.stringify(inquiries));
      return newInquiry;
    } catch {
      return {
        ...inquiry,
        id: 'INQ-' + Date.now(),
        createdAt: new Date().toISOString()
      };
    }
  }
};
