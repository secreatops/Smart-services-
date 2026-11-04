import React, { useState } from 'react';
import { 
  Wind, 
  Flame, 
  Zap, 
  Search, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, AC_MAIN_IMAGE, GEYSER_MAIN_IMAGE, ELECTRICAL_MAIN_IMAGE } from '../data/services';
import { Booking, ServiceItem } from '../types';

interface ServicesPageProps {
  onOpenBooking: (serviceId?: string) => void;
  bookings: Booking[];
  onCancelBooking: (bookingId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ 
  onOpenBooking, 
  bookings,
  onCancelBooking 
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ac' | 'geyser' | 'electrical'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'catalog' | 'my-bookings'>('catalog');

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.categoryTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-20">
      
      {/* PAGE HEADER */}
      <div className="bg-[#102A43] text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#168BEB] block mb-2">
              Transparent Indian Rupee (₹) Rate Card
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Professional Home Services & Upfront Pricing
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Explore our comprehensive range of AC, Geyser, and Electrical solutions. No hidden inspection traps, certified technicians, and a 30-day warranty on every job.
            </p>
          </div>

          {/* Quick Category Summary Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#168BEB]/20 text-[#168BEB] flex items-center justify-center">
                <Wind className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">AC Solutions</div>
                <div className="text-sm font-bold text-white">4 Services · From ₹499</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Water Geyser Care</div>
                <div className="text-sm font-bold text-white">4 Services · From ₹449</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Electrical Repairs</div>
                <div className="text-sm font-bold text-white">4 Services · From ₹199</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Tabs: Service Catalog vs. My Bookings */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'catalog' 
                  ? 'bg-white text-[#102A43] shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Services Catalog ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('my-bookings')}
              className={`py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'my-bookings' 
                  ? 'bg-white text-[#102A43] shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>My Bookings</span>
              <span className="w-5 h-5 rounded-full bg-[#168BEB] text-white text-[11px] font-bold flex items-center justify-center">
                {bookings.length}
              </span>
            </button>
          </div>

          {activeTab === 'catalog' && (
            /* Search and Category Filter */
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search services (e.g., gas, fan, geyser)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168BEB] w-full sm:w-64"
                />
              </div>

              {/* Segmented Filter Buttons */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    activeCategory === 'all' 
                      ? 'bg-[#102A43] text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  All ({SERVICES_DATA.length})
                </button>
                <button
                  onClick={() => setActiveCategory('ac')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    activeCategory === 'ac' 
                      ? 'bg-[#102A43] text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  AC Services
                </button>
                <button
                  onClick={() => setActiveCategory('geyser')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    activeCategory === 'geyser' 
                      ? 'bg-[#102A43] text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Geyser Services
                </button>
                <button
                  onClick={() => setActiveCategory('electrical')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    activeCategory === 'electrical' 
                      ? 'bg-[#102A43] text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Electrical Services
                </button>
              </div>
            </div>
          )}
        </div>

        {/* TAB 1: SERVICES CATALOG */}
        {activeTab === 'catalog' && (
          <div className="space-y-16">
            
            {/* If user filtered, show flat grid; if viewing all without search, show organized category clusters */}
            {searchQuery ? (
              <div>
                <div className="mb-4 text-xs text-slate-500">
                  Showing {filteredServices.length} matching services
                </div>
                {filteredServices.length === 0 ? (
                  <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
                    <p className="text-slate-600 font-medium">No services found matching "{searchQuery}"</p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mt-3 text-xs text-[#168BEB] font-bold hover:underline"
                    >
                      Clear search filter
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredServices.map(service => (
                      <ServiceCard key={service.id} service={service} onBook={() => onOpenBooking(service.id)} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* CATEGORY 1: AC SERVICES */}
                {(activeCategory === 'all' || activeCategory === 'ac') && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <Wind className="w-5 h-5 text-[#168BEB]" />
                          <h2 className="text-xl sm:text-2xl font-bold text-[#102A43]">Air Conditioner (AC) Services</h2>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Split & window AC servicing, precision installation, leak repair, and gas refilling.
                        </p>
                      </div>
                      <div className="text-xs font-semibold text-slate-500">
                        Starting from <span className="font-mono font-bold text-[#102A43]">₹499</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {SERVICES_DATA.filter(s => s.category === 'ac').map(service => (
                        <ServiceCard key={service.id} service={service} onBook={() => onOpenBooking(service.id)} />
                      ))}
                    </div>
                  </div>
                )}

                {/* CATEGORY 2: GEYSER SERVICES */}
                {(activeCategory === 'all' || activeCategory === 'geyser') && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <Flame className="w-5 h-5 text-amber-500" />
                          <h2 className="text-xl sm:text-2xl font-bold text-[#102A43]">Water Geyser Services</h2>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Wall mounting, heating element diagnosis, thermostat calibration, and descaling.
                        </p>
                      </div>
                      <div className="text-xs font-semibold text-slate-500">
                        Starting from <span className="font-mono font-bold text-[#102A43]">₹449</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {SERVICES_DATA.filter(s => s.category === 'geyser').map(service => (
                        <ServiceCard key={service.id} service={service} onBook={() => onOpenBooking(service.id)} />
                      ))}
                    </div>
                  </div>
                )}

                {/* CATEGORY 3: ELECTRICAL SERVICES */}
                {(activeCategory === 'all' || activeCategory === 'electrical') && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-yellow-500" />
                          <h2 className="text-xl sm:text-2xl font-bold text-[#102A43]">Electrical Services</h2>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Ceiling fan assembly, switchboard sparking fix, short circuits, and full house wiring.
                        </p>
                      </div>
                      <div className="text-xs font-semibold text-slate-500">
                        Starting from <span className="font-mono font-bold text-[#102A43]">₹199</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {SERVICES_DATA.filter(s => s.category === 'electrical').map(service => (
                        <ServiceCard key={service.id} service={service} onBook={() => onOpenBooking(service.id)} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

          </div>
        )}

        {/* TAB 2: MY BOOKINGS (Stored in localStorage) */}
        {activeTab === 'my-bookings' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#102A43]">Your Scheduled Bookings</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Stored securely in your local browser session. Active technician assignments and service history.
                </p>
              </div>
              <button
                onClick={() => onOpenBooking()}
                className="py-2 px-4 bg-[#102A43] hover:bg-[#168BEB] text-white text-xs font-bold rounded-xl transition-colors"
              >
                + Book New Service
              </button>
            </div>

            {bookings.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
                <Calendar className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No Bookings Found</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  You haven't booked any home services yet. Choose from our AC, Geyser, or Electrical catalog to get started.
                </p>
                <button
                  onClick={() => setActiveTab('catalog')}
                  className="mt-4 py-2 px-4 bg-[#168BEB] text-white text-xs font-semibold rounded-lg hover:bg-[#168BEB]/90 transition-colors"
                >
                  Browse Service Catalog
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-[#168BEB]/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#102A43] bg-slate-100 px-2.5 py-1 rounded-md">
                          {b.id}
                        </span>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          b.status === 'Confirmed' ? 'bg-blue-50 text-blue-700' :
                          b.status === 'Technician Assigned' ? 'bg-emerald-50 text-emerald-700' :
                          b.status === 'Completed' ? 'bg-slate-100 text-slate-700' :
                          'bg-red-50 text-red-700'
                        }`}>
                          {b.status}
                        </span>
                        <span className="text-xs text-slate-400">·</span>
                        <span className="text-xs text-slate-500 font-medium">{b.categoryTitle}</span>
                      </div>

                      <h3 className="text-base font-bold text-[#102A43]">{b.serviceTitle}</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-600">
                        <div>
                          <span className="text-slate-400">Schedule: </span>
                          <span className="font-medium text-slate-800">{b.preferredDate} ({b.preferredTime})</span>
                        </div>
                        <div>
                          <span className="text-slate-400">Address: </span>
                          <span className="font-medium text-slate-800 truncate">{b.address}</span>
                        </div>
                        {b.assignedTechnician && (
                          <div className="sm:col-span-2 text-slate-700">
                            <span className="text-slate-400">Assigned Tech: </span>
                            <span className="font-semibold text-slate-900">{b.assignedTechnician.name}</span>
                            <span className="text-slate-400"> ({b.assignedTechnician.phone})</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between md:justify-center gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                      <div className="text-right">
                        <span className="text-[11px] text-slate-400 block">Total Est.</span>
                        <span className="text-lg font-bold font-mono text-[#102A43]">₹{b.price}</span>
                      </div>

                      {b.status !== 'Cancelled' && b.status !== 'Completed' && (
                        <button
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to cancel booking ${b.id}?`)) {
                              onCancelBooking(b.id);
                            }
                          }}
                          className="text-xs text-red-600 hover:text-red-700 hover:underline font-semibold"
                        >
                          Cancel Booking
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

// Reusable Service Card Component
const ServiceCard: React.FC<{ service: ServiceItem; onBook: () => void }> = ({ service, onBook }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-[#168BEB]/50 transition-all flex flex-col justify-between">
      <div>
        {/* Service Image */}
        <div className="relative h-44 overflow-hidden bg-slate-100">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
            {service.categoryTitle}
          </div>
          <div className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-xs text-[#102A43] text-xs font-bold px-2 py-0.5 rounded-md font-mono shadow-xs">
            {service.duration}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2.5">
          <h3 className="text-base font-bold text-[#102A43] group-hover:text-[#168BEB] transition-colors leading-snug">
            {service.title}
          </h3>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
            {service.description}
          </p>

          <div className="pt-2 border-t border-slate-100 space-y-1">
            {service.features.slice(0, 2).map((f, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer & Book Now */}
      <div className="p-4 pt-0">
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Starts at</span>
            <span className="text-base font-extrabold text-[#102A43] font-mono">{service.priceText}</span>
          </div>

          <button
            onClick={onBook}
            className="py-2 px-4 bg-[#102A43] hover:bg-[#168BEB] text-white text-xs font-bold rounded-xl transition-all shadow-xs active:scale-95 flex items-center gap-1.5"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3 h-3 text-slate-300" />
          </button>
        </div>
      </div>
    </div>
  );
};
