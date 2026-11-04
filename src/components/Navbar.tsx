import React, { useState } from 'react';
import { Wrench, PhoneCall, Menu, X, User as UserIcon, LogOut, CheckCircle } from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  currentPage: 'home' | 'services' | 'about-contact' | 'auth';
  onNavigate: (page: 'home' | 'services' | 'about-contact' | 'auth') => void;
  onOpenBooking: () => void;
  currentUser: User | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  currentUser,
  onLogout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'services' | 'about-contact' | 'auth') => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Emergency & Info Banner */}
      <div className="bg-[#102A43] text-slate-200 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[#168BEB] font-semibold">24/7 Helpline:</span>
            <a href="tel:+918054964609" className="hover:text-white transition-colors font-mono font-medium">
              +91 80549 64609
            </a>
            <span className="text-slate-500">·</span>
            <span className="font-mono text-slate-300">0161-5026045</span>
            <span className="hidden md:inline text-slate-500">·</span>
            <span className="hidden md:inline text-slate-300">Direct Workshop & Technician Dispatch</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" />
              Verified & Insured Technicians
            </span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="hidden sm:inline">30-Day Service Warranty</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 gap-4 sm:gap-8">
            
            {/* Zone 1: Brand Wordmark */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left shrink-0 focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-[#102A43] flex items-center justify-center text-white shadow-sm">
                <Wrench className="w-5 h-5 text-[#168BEB]" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#102A43] block leading-none">
                  SMART <span className="text-[#168BEB]">SERVICES</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mt-0.5">
                  Home Maintenance & Repair
                </span>
              </div>
            </button>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <button
                onClick={() => handleNavClick('home')}
                className={`transition-colors whitespace-nowrap hover:text-[#168BEB] ${
                  currentPage === 'home' ? 'text-[#168BEB] font-bold' : 'text-slate-700'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className={`transition-colors whitespace-nowrap hover:text-[#168BEB] ${
                  currentPage === 'services' ? 'text-[#168BEB] font-bold' : 'text-slate-700'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('about-contact')}
                className={`transition-colors whitespace-nowrap hover:text-[#168BEB] ${
                  currentPage === 'about-contact' ? 'text-[#168BEB] font-bold' : 'text-slate-700'
                }`}
              >
                About Us & Contact
              </button>
              <button
                onClick={() => handleNavClick('auth')}
                className={`transition-colors whitespace-nowrap hover:text-[#168BEB] flex items-center gap-1.5 ${
                  currentPage === 'auth' ? 'text-[#168BEB] font-bold' : 'text-slate-700'
                }`}
              >
                <UserIcon className="w-4 h-4 text-slate-400" />
                <span>{currentUser ? currentUser.name.split(' ')[0] : 'Login / Register'}</span>
              </button>
            </nav>

            {/* Zone 3: Primary CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {currentUser && (
                <button
                  onClick={onLogout}
                  title="Logout"
                  className="p-2 text-slate-500 hover:text-red-600 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onOpenBooking}
                className="py-2.5 px-5 text-xs sm:text-sm font-bold text-white bg-[#102A43] hover:bg-[#168BEB] rounded-xl transition-all shadow-sm hover:shadow-md whitespace-nowrap active:scale-95 flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#168BEB]" />
                <span>Book a Service</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="py-2 px-3 text-xs font-bold text-white bg-[#102A43] rounded-lg"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                  currentPage === 'home' ? 'bg-[#EAF5FF] text-[#168BEB] font-bold' : 'text-slate-800'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                  currentPage === 'services' ? 'bg-[#EAF5FF] text-[#168BEB] font-bold' : 'text-slate-800'
                }`}
              >
                Services & Pricing
              </button>
              <button
                onClick={() => handleNavClick('about-contact')}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium ${
                  currentPage === 'about-contact' ? 'bg-[#EAF5FF] text-[#168BEB] font-bold' : 'text-slate-800'
                }`}
              >
                About Us & Contact
              </button>
              <button
                onClick={() => handleNavClick('auth')}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
                  currentPage === 'auth' ? 'bg-[#EAF5FF] text-[#168BEB] font-bold' : 'text-slate-800'
                }`}
              >
                <span className="flex items-center gap-2">
                  <UserIcon className="w-4 h-4" />
                  {currentUser ? `Account: ${currentUser.name}` : 'Login / Sign Up'}
                </span>
                {currentUser && (
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Logged in</span>
                )}
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 text-center font-bold text-sm text-white bg-[#102A43] hover:bg-[#168BEB] rounded-xl transition-colors"
              >
                Book a Service Now
              </button>
              {currentUser && (
                <button
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 text-center text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
