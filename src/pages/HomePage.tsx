import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  BadgePercent, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  PhoneCall, 
  Zap, 
  Flame, 
  Wind,
  Sparkles,
  Building2,
  PackageCheck,
  Wrench as WrenchIcon
} from 'lucide-react';
import { 
  HERO_IMAGE, 
  AC_MAIN_IMAGE, 
  GEYSER_MAIN_IMAGE, 
  ELECTRICAL_MAIN_IMAGE, 
  TESTIMONIALS_DATA,
  REAL_STOREFRONT_IMAGE,
  REAL_WORKSHOP_INVENTORY_IMAGE,
  REAL_SPARE_PARTS_COMPRESSORS_IMAGE
} from '../data/services';

interface HomePageProps {
  onNavigate: (page: 'home' | 'services' | 'about-contact' | 'auth') => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#EAF5FF]/70 via-white to-white pt-8 pb-14 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#102A43] bg-white px-3.5 py-1.5 rounded-full border border-blue-200/70 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#168BEB]"></span>
                <span>Top-Rated Home Repair & Appliance Maintenance</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#102A43] leading-tight text-balance">
                Your Home, <br className="hidden sm:inline" />
                <span className="text-[#168BEB]">Our Responsibility!</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Reliable AC, Geyser & Electrical Services at Your Doorstep. Professional certified technicians, upfront transparent pricing, and genuine spare parts backed by a 30-day warranty.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="py-3 px-6 text-sm sm:text-base font-bold text-white bg-[#102A43] hover:bg-[#168BEB] rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2.5"
                >
                  <PhoneCall className="w-4 h-4 text-[#168BEB]" />
                  <span>Book a Service</span>
                </button>

                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-3 px-6 text-sm sm:text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all hover:border-[#168BEB] flex items-center gap-2"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>On-Time Arrival (45 Mins)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fixed Upfront Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>30-Day Work Warranty</span>
                </div>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-4/3 lg:aspect-auto lg:h-[440px]">
                <img
                  src={HERO_IMAGE}
                  alt="Smart Services HVAC technician servicing air conditioner unit"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>4.9 / 5.0</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Over 25,000+ Verified Homes</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-[#168BEB] block uppercase tracking-wider">Fast Response</span>
                    <span className="text-xs font-mono font-bold text-slate-900">Within 45 - 60 Mins</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THREE MAIN SERVICE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#168BEB] block mb-1">
            Our Core Specialization
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102A43]">
            Comprehensive Home Maintenance Solutions
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Specialized engineering and repair technicians for your climate, hot water, and electrical infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: AC Services */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#168BEB]/40 transition-all duration-300 flex flex-col">
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <img
                src={AC_MAIN_IMAGE}
                alt="Air Conditioner technician repairing outdoor AC unit"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#102A43]/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5 text-[#168BEB]" />
                <span>AC Services</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#102A43] text-xs font-bold px-2.5 py-1 rounded-md font-mono shadow-xs">
                From ₹499
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#102A43] group-hover:text-[#168BEB] transition-colors">
                  Air Conditioner Services
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                  Full lifecycle care for split and window ACs: installation, gas charging, jet wash sanitization, and compressor repairs.
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168BEB]"></span>
                    AC Installation & Uninstallation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168BEB]"></span>
                    AC Gas Filling (R32 / R410A)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168BEB]"></span>
                    Deep Foam Jet Cleaning & Maintenance
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-[#168BEB] hover:underline flex items-center gap-1"
                >
                  <span>View 4 AC Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenBooking('ac-repair')}
                  className="py-2 px-3.5 bg-[#102A43] hover:bg-[#168BEB] text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Book AC Tech
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Geyser Services */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#168BEB]/40 transition-all duration-300 flex flex-col">
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <img
                src={GEYSER_MAIN_IMAGE}
                alt="Plumber technician inspecting wall mounted water heater geyser"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#102A43]/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Geyser Services</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#102A43] text-xs font-bold px-2.5 py-1 rounded-md font-mono shadow-xs">
                From ₹449
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#102A43] group-hover:text-[#168BEB] transition-colors">
                  Water Geyser Services
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                  Certified technicians for instant and storage geysers. Tank descaling, thermostat repairs, heating coil renewal, and valve plumbing.
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Geyser Wall Mounting & Plumbing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Heating Element & Thermostat Fix
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    Inner Tank Sediment Flushing
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-[#168BEB] hover:underline flex items-center gap-1"
                >
                  <span>View 4 Geyser Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenBooking('geyser-repair')}
                  className="py-2 px-3.5 bg-[#102A43] hover:bg-[#168BEB] text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Book Geyser Tech
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Electrical Services */}
          <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#168BEB]/40 transition-all duration-300 flex flex-col">
            <div className="relative h-48 overflow-hidden bg-slate-100">
              <img
                src={ELECTRICAL_MAIN_IMAGE}
                alt="Electrician testing circuit breaker switchboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#102A43]/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                <span>Electrical Services</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#102A43] text-xs font-bold px-2.5 py-1 rounded-md font-mono shadow-xs">
                From ₹199
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#102A43] group-hover:text-[#168BEB] transition-colors">
                  Electrical Services
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-3">
                  Licensed electricians for switchboard repairs, ceiling fan installations, short circuit troubleshooting, and full house wiring.
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                    Ceiling & Exhaust Fan Installation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                    Switchboard & Socket Sparking Fix
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                    Short Circuit & MCB Tripping Diagnostic
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-[#168BEB] hover:underline flex items-center gap-1"
                >
                  <span>View 4 Electrical Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenBooking('switchboard-repair')}
                  className="py-2 px-3.5 bg-[#102A43] hover:bg-[#168BEB] text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Book Electrician
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#168BEB] block mb-1">
              Standard of Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A43]">
              Why Choose Smart Services?
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We treat your home with the care, precision, and respect it deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#168BEB]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Experienced Technicians</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every technician holds certified trade credentials, undergoes rigorous background checks, and brings an average of 6+ years of field experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#168BEB]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center mb-4">
                <BadgePercent className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Affordable Pricing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standardized, transparent rate card in Indian Rupees (₹). No hidden visit fees, no inflated spare part estimates, and complete cost approval before work begins.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#168BEB]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Fast Service</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Local neighborhood dispatch hubs guarantee a technician at your doorstep within 45 to 60 minutes for urgent repairs and flexible scheduled slots.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#168BEB]/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2">Customer Satisfaction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                100% money-back guarantee backed by a 30-day post-service warranty. If any issue reoccurs within 30 days, we revisit and resolve it completely free of charge.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* REAL PHYSICAL WORKSHOP & GENUINE SPARE PARTS FACILITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#168BEB] flex items-center gap-1.5 mb-1.5">
                <Building2 className="w-4 h-4 text-[#168BEB]" />
                Physical Service Hub & Inventory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
                Our Authorized Workshop & Spare Parts Center
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Unlike online aggregators who subcontract to strangers, Smart Services operates our own authorized workshop facility with ready stocks of OEM compressors, genuine refrigerant cylinders, and certified diagnostic multimeters.
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('about-contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-2.5 px-5 bg-slate-100 hover:bg-[#102A43] hover:text-white text-[#102A43] text-xs font-bold rounded-xl transition-all self-start md:self-auto flex items-center gap-2"
            >
              <span>Visit Service Center Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Real Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Image 1: Real Storefront */}
            <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col hover:border-[#168BEB] transition-colors">
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={REAL_STOREFRONT_IMAGE}
                  alt="Smart Services & Alamgir Electrical Works authorized storefront and service center"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#102A43]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Authorized Service Center
                </div>
              </div>
              <div className="p-4 space-y-1.5 bg-white flex-1">
                <div className="text-xs font-bold text-[#102A43] flex items-center justify-between">
                  <span>Physical Storefront & Hub</span>
                  <span className="text-emerald-700 text-[11px] font-semibold">Walk-in Welcome</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our established service center & workshop facility. Customers can drop off appliances or consult with master technicians.
                </p>
                <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#168BEB]" />
                  <span>Call: 80549-64609 / 0161-5026045</span>
                </div>
              </div>
            </div>

            {/* Image 2: Workshop Diagnostic Racks */}
            <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col hover:border-[#168BEB] transition-colors">
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={REAL_WORKSHOP_INVENTORY_IMAGE}
                  alt="Workshop storage racks with testing multimeters and electrical toolkits"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#102A43]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Testing & Diagnostic Racks
                </div>
              </div>
              <div className="p-4 space-y-1.5 bg-white flex-1">
                <div className="text-xs font-bold text-[#102A43] flex items-center justify-between">
                  <span>In-House Tooling & Diagnostics</span>
                  <span className="text-[#168BEB] text-[11px] font-semibold">Calibrated Gear</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every technician toolkit is verified and stocked from our central toolroom with high-precision digital multimeters and safety gear.
                </p>
                <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <PackageCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Full trade inspection before every dispatch</span>
                </div>
              </div>
            </div>

            {/* Image 3: Spare Parts Compressors & Refrigerants */}
            <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col hover:border-[#168BEB] transition-colors">
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={REAL_SPARE_PARTS_COMPRESSORS_IMAGE}
                  alt="Genuine AC compressors, refrigerant gas cylinders and brand spares stock"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#102A43]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Ready OEM Parts Stock
                </div>
              </div>
              <div className="p-4 space-y-1.5 bg-white flex-1">
                <div className="text-xs font-bold text-[#102A43] flex items-center justify-between">
                  <span>Compressors & Gas Inventory</span>
                  <span className="text-emerald-700 text-[11px] font-semibold">100% Genuine</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct stock of rotary compressors, certified refrigerant canisters (R32/R410A), capacitors, and Daikin/Whirlpool OEM parts.
                </p>
                <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Guaranteed authentic components only</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* HOW IT WORKS (3 SIMPLE STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#168BEB] block mb-1">
            Easy & Transparent
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102A43]">
            How Smart Services Works
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Get your home appliances fixed in three quick steps without phone tags or delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center relative">
            <div className="w-10 h-10 rounded-full bg-[#102A43] text-white font-mono font-bold flex items-center justify-center mx-auto mb-4">
              01
            </div>
            <h3 className="text-base font-bold text-[#102A43] mb-1.5">Select Service & Time</h3>
            <p className="text-xs text-slate-600">
              Pick your required repair or maintenance package, enter your location, and pick a convenient 2-hour window.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center relative">
            <div className="w-10 h-10 rounded-full bg-[#168BEB] text-white font-mono font-bold flex items-center justify-center mx-auto mb-4">
              02
            </div>
            <h3 className="text-base font-bold text-[#102A43] mb-1.5">Doorstep Inspection</h3>
            <p className="text-xs text-slate-600">
              A background-verified technician arrives with diagnostic gear, performs safety checks, and confirms the repair estimate.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center relative">
            <div className="w-10 h-10 rounded-full bg-emerald-700 text-white font-mono font-bold flex items-center justify-center mx-auto mb-4">
              03
            </div>
            <h3 className="text-base font-bold text-[#102A43] mb-1.5">Service & Warranty</h3>
            <p className="text-xs text-slate-600">
              Job is completed using genuine spare parts. Inspect the work, pay conveniently via Cash/UPI, and get a 30-day warranty.
            </p>
          </div>

        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#102A43] rounded-3xl p-8 sm:p-12 text-white">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#168BEB] block mb-1">
              Real Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Trusted by 35,000+ Happy Homeowners
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              See what our customers have to say about our prompt service, technical expertise, and respectful conduct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div 
                key={t.id} 
                className="bg-white/10 backdrop-blur-xs p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="font-bold text-sm text-white">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.location}</div>
                  <div className="text-[11px] text-[#168BEB] font-medium mt-1">
                    Service: {t.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK CTA CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EAF5FF] rounded-2xl p-8 sm:p-10 border border-[#168BEB]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#102A43]">
              Need Immediate AC, Geyser or Electrical Repair?
            </h3>
            <p className="text-sm text-slate-600">
              Our certified technicians are on standby across the city. Average arrival time is 45 minutes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+919876543210"
              className="py-3 px-5 text-sm font-bold text-[#102A43] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors shadow-xs"
            >
              Call: +91 98765 43210
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="py-3 px-6 text-sm font-bold text-white bg-[#102A43] hover:bg-[#168BEB] rounded-xl transition-colors shadow-md"
            >
              Book Doorstep Technician
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
