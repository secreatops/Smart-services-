import React from 'react';
import { Wrench, Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'services' | 'about-contact' | 'auth') => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#102A43] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#168BEB] flex items-center justify-center text-white shadow-sm">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                SMART <span className="text-[#168BEB]">SERVICES</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your home, our responsibility. Delivering certified and affordable Air Conditioner, Geyser, and Electrical solutions right to your doorstep.
            </p>
            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>All technicians are police-verified, background-checked, and carry genuine tools & spare parts.</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors hover:underline"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors hover:underline"
                >
                  All Services & Rate Card
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about-contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors hover:underline"
                >
                  About Us & Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about-contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors hover:underline"
                >
                  Contact & Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('auth'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors hover:underline"
                >
                  Customer Account & Login
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Categories */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-4">Our Core Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#168BEB] transition-colors"
                >
                  AC Installation & Jet Wash
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#168BEB] transition-colors"
                >
                  AC Gas Refilling & Leak Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#168BEB] transition-colors"
                >
                  Geyser Installation & Descaling
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#168BEB] transition-colors"
                >
                  Geyser Heating Element Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#168BEB] transition-colors"
                >
                  Switchboard & MCB Tripping Fix
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#168BEB] transition-colors"
                >
                  Complete Home Concealed Wiring
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3.5 text-sm">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-4">Contact Info (Demo)</h4>
            <div className="flex items-start gap-3 text-slate-300">
              <MapPin className="w-4 h-4 text-[#168BEB] shrink-0 mt-1" />
              <span>Plot 42, Tech Park Enclave, Okhla Phase III, New Delhi - 110001, India</span>
            </div>
            <div className="flex items-start gap-3 text-slate-300">
              <Phone className="w-4 h-4 text-[#168BEB] shrink-0 mt-0.5" />
              <div className="space-y-0.5 font-mono text-xs">
                <div>+91 80549 64609 (Mobile)</div>
                <div>0161-5026045 (Workshop Desk)</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="w-4 h-4 text-[#168BEB] shrink-0" />
              <span>support@smartservices.demo</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Clock className="w-4 h-4 text-[#168BEB] shrink-0" />
              <span>Mon - Sun: 8:00 AM - 8:00 PM</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 bg-[#168BEB] hover:bg-[#168BEB]/90 text-white font-semibold rounded-xl text-xs transition-colors shadow-sm text-center"
              >
                Schedule Doorstep Technician
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Socials & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 SMART SERVICES. Professional Home Maintenance. Demo College Project.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Facebook</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-500">Instagram</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-500">Twitter / X</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-500">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
