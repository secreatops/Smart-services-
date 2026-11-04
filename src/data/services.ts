import { ServiceItem, Testimonial } from '../types';

export const AC_MAIN_IMAGE = '/src/assets/images/service_ac_repair_1793768065787.jpg';
export const GEYSER_MAIN_IMAGE = '/src/assets/images/service_geyser_repair_1793768065817.jpg';
export const ELECTRICAL_MAIN_IMAGE = '/src/assets/images/service_electrician_wiring_1793768066142.jpg';
export const HERO_IMAGE = '/src/assets/images/hero_technician_ac_1793768064013.jpg';

// Real service center, workshop & genuine spare parts inventory images uploaded by user
export const REAL_STOREFRONT_IMAGE = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_10.28.31_AM_f7f28d79.jpeg';
export const REAL_WORKSHOP_INVENTORY_IMAGE = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_10.28.29_AM_b16e6615.jpeg';
export const REAL_SPARE_PARTS_COMPRESSORS_IMAGE = '/assets/aistudio/WhatsApp_Image_2026-11-04_at_10.28.30_AM_90c2f5bc.jpeg';

export const SERVICES_DATA: ServiceItem[] = [
  // --- AC SERVICES ---
  {
    id: 'ac-installation',
    category: 'ac',
    categoryTitle: 'AC Services',
    title: 'AC Installation',
    description: 'Professional unboxing, wall mounting, precision outdoor unit bracket fitting, copper pipe connections, and cooling performance calibration.',
    price: 1499,
    priceText: '₹1,499',
    duration: '90 - 120 mins',
    image: HERO_IMAGE,
    features: ['Vibration-free mounting', 'Copper piping inspection', 'Electrical safety check', '30-day installation warranty']
  },
  {
    id: 'ac-repair',
    category: 'ac',
    categoryTitle: 'AC Services',
    title: 'AC Repair',
    description: 'Expert diagnostics and repair for cooling failure, water leakage, strange rattling noises, sensor malfunctions, and PCB controller defects.',
    price: 499,
    priceText: '₹499',
    duration: '45 - 60 mins',
    image: AC_MAIN_IMAGE,
    features: ['Accurate fault diagnosis', 'Original spare parts', 'Coil & compressor test', 'Complete post-repair check']
  },
  {
    id: 'ac-gas-filling',
    category: 'ac',
    categoryTitle: 'AC Services',
    title: 'AC Gas Filling',
    description: 'High-grade refrigerant top-up or full refill (R32, R410A, R22) with nitrogen pressure leak test to restore peak cooling efficiency.',
    price: 2199,
    priceText: '₹2,199',
    duration: '60 - 90 mins',
    image: REAL_SPARE_PARTS_COMPRESSORS_IMAGE,
    features: ['Nitrogen pressure leak test', '100% pure refrigerant gas', 'Compressor amperage testing', 'Chill output verified']
  },
  {
    id: 'ac-cleaning-maintenance',
    category: 'ac',
    categoryTitle: 'AC Services',
    title: 'AC Cleaning and Maintenance',
    description: 'Deep foam jet wash for cooling coils, air filter sanitization, drain tray de-clogging, and outdoor condenser fin power wash.',
    price: 799,
    priceText: '₹799',
    duration: '45 - 60 mins',
    image: HERO_IMAGE,
    features: ['High-pressure jet wash', 'Anti-bacterial coil spray', 'Drain line unclogging', 'Airflow speed boost']
  },

  // --- GEYSER SERVICES ---
  {
    id: 'geyser-installation',
    category: 'geyser',
    categoryTitle: 'Geyser Services',
    title: 'Geyser Installation',
    description: 'Safe wall anchor drilling, cold and hot water inlet/outlet pipe plumbing, pressure release valve installation, and safety earthing check.',
    price: 799,
    priceText: '₹799',
    duration: '60 - 80 mins',
    image: GEYSER_MAIN_IMAGE,
    features: ['Solid wall anchoring', 'Inlet & outlet plumbing', 'Safety pressure valve check', 'Leakage prevention test']
  },
  {
    id: 'geyser-repair',
    category: 'geyser',
    categoryTitle: 'Geyser Services',
    title: 'Geyser Repair',
    description: 'Prompt repair for heating element failure, thermostat tripping, water tank leakage, rust stains, or low water pressure.',
    price: 449,
    priceText: '₹449',
    duration: '45 - 60 mins',
    image: GEYSER_MAIN_IMAGE,
    features: ['Element resistance testing', 'Thermostat replacement', 'Safety cut-off calibration', 'Current leak prevention']
  },
  {
    id: 'geyser-cleaning',
    category: 'geyser',
    categoryTitle: 'Geyser Services',
    title: 'Geyser Cleaning',
    description: 'Thorough descaling of the inner water container, sediment flushing, and anode rod inspection to eliminate hard water build-up.',
    price: 599,
    priceText: '₹599',
    duration: '45 - 60 mins',
    image: GEYSER_MAIN_IMAGE,
    features: ['Inner tank hard-scale removal', 'Heating efficiency renewal', 'Sediment drainage', 'Fresh odor treatment']
  },
  {
    id: 'geyser-maintenance',
    category: 'geyser',
    categoryTitle: 'Geyser Services',
    title: 'Geyser Maintenance',
    description: 'Comprehensive seasonal maintenance package covering thermostat calibration, wiring inspection, pressure relief testing, and anode replacement.',
    price: 699,
    priceText: '₹699',
    duration: '60 mins',
    image: GEYSER_MAIN_IMAGE,
    features: ['Full seasonal health check', 'Thermostat fine-tuning', 'Anode condition check', 'Energy consumption test']
  },

  // --- ELECTRICAL SERVICES ---
  {
    id: 'fan-installation',
    category: 'electrical',
    categoryTitle: 'Electrical Services',
    title: 'Fan Installation',
    description: 'Assembly, heavy-duty ceiling hook attachment, balancing rod leveling, and smooth regulator connection for ceiling, exhaust, or wall fans.',
    price: 249,
    priceText: '₹249',
    duration: '30 - 45 mins',
    image: ELECTRICAL_MAIN_IMAGE,
    features: ['Wobble-free mounting', 'Regulator calibration', 'Earthing connection', 'Blade angle optimization']
  },
  {
    id: 'switchboard-repair',
    category: 'electrical',
    categoryTitle: 'Electrical Services',
    title: 'Switchboard Repair',
    description: 'Fixing burnt sockets, sparking switches, loose connections, loose wires, and replacement with modular switches for high-load appliances.',
    price: 199,
    priceText: '₹199',
    duration: '30 - 45 mins',
    image: ELECTRICAL_MAIN_IMAGE,
    features: ['Spark & spark-risk removal', 'High-grade modular switches', 'Load test for appliances', 'Clean finish plate mounting']
  },
  {
    id: 'home-wiring',
    category: 'electrical',
    categoryTitle: 'Electrical Services',
    title: 'Home Wiring',
    description: 'Complete or partial concealed conduit wiring, phase distribution, distribution board (DB) setup, and earth wire continuity testing.',
    price: 1999,
    priceText: '₹1,999',
    duration: 'Half / Full Day',
    image: ELECTRICAL_MAIN_IMAGE,
    features: ['Fire-retardant copper wires', 'Load balanced MCB panel', 'Earthing safety compliance', 'Short circuit proofing']
  },
  {
    id: 'electrical-fault-repair',
    category: 'electrical',
    categoryTitle: 'Electrical Services',
    title: 'Electrical Fault Repair',
    description: 'Emergency troubleshooting for frequent MCB tripping, voltage fluctuation, power dropouts, short circuits, and neutral line faults.',
    price: 399,
    priceText: '₹399',
    duration: '45 - 60 mins',
    image: ELECTRICAL_MAIN_IMAGE,
    features: ['Digital multimeter diagnosis', 'MCB & RCCB trip analysis', 'Neutral leak resolution', 'Safe surge protection advice']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Priya Sharma',
    location: 'Vasant Kunj, New Delhi',
    service: 'AC Gas Filling & Jet Service',
    rating: 5,
    date: '2 days ago',
    quote: 'Our split AC was barely cooling during peak heat. The Smart Services technician arrived within 40 minutes, tested for leaks with nitrogen, and charged genuine R32 gas. Cooling is ice-cold now! Very professional conduct.'
  },
  {
    id: 'test-2',
    name: 'Vikram Mehta',
    location: 'Sector 54, Gurugram',
    service: 'Geyser Installation & Plumbing',
    rating: 5,
    date: '1 week ago',
    quote: 'Booked a geyser installation in the evening and the technician had all the copper fittings and pressure release valves in his kit. Neat drilling with no wall chipping and clean pipe joints. Transparent pricing with no surprises.'
  },
  {
    id: 'test-3',
    name: 'Ananya Deshmukh',
    location: 'Indirapuram, Ghaziabad',
    service: 'Switchboard Repair & MCB Tripping',
    rating: 5,
    date: '3 weeks ago',
    quote: 'We had persistent switchboard sparking whenever the microwave turned on. The electrician found a loose neutral line inside the concealed box and rectified it in 30 minutes. Extremely polite and safety conscious.'
  }
];
