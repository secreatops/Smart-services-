import React, { useState } from 'react';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Users, 
  Award, 
  Wrench, 
  Sparkles,
  PackageCheck,
  PhoneCall
} from 'lucide-react';
import { storage } from '../utils/storage';
import { 
  REAL_STOREFRONT_IMAGE, 
  REAL_WORKSHOP_INVENTORY_IMAGE, 
  REAL_SPARE_PARTS_COMPRESSORS_IMAGE 
} from '../data/services';

export const AboutContactPage: React.FC = () => {
  // Contact Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Service Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Full name is required';
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please provide a valid email format';
    }
    if (!message.trim()) {
      errs.message = 'Please enter your message';
    } else if (message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      storage.saveInquiry({
        name: name.trim(),
        email: email.trim(),
        subject,
        message: message.trim()
      });

      setIsSubmitting(false);
      setSubmittedMessage(`Thank you, ${name}! Your inquiry regarding "${subject}" has been received. Our team will contact you shortly.`);
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }, 400);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* HERO / INTRO HEADER */}
      <section className="bg-[#102A43] text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#168BEB] block mb-2">
              Who We Are
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              About Smart Services
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Founded with the vision to standardize home maintenance in India, Smart Services bridges the gap between chaotic local repairmen and homeowners needing punctual, honest, and certified technical solutions.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-10 border-t border-white/10 text-center sm:text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">35,000+</div>
              <div className="text-xs text-slate-400 mt-0.5">Homes Serviced</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">60+</div>
              <div className="text-xs text-slate-400 mt-0.5">Certified Technicians</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">4.9 ★</div>
              <div className="text-xs text-slate-400 mt-0.5">Average Customer Rating</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">45 Mins</div>
              <div className="text-xs text-slate-400 mt-0.5">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#102A43] mb-3">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To deliver reliable, high-grade AC, geyser, and electrical repair services directly to customer doorsteps with full cost transparency, certified safety, and unmatched customer care. We eliminate the uncertainty of unverified handymen.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#168BEB]" />
              <span>Standardized rates in Indian Rupees across all neighborhoods</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center mb-5">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#102A43] mb-3">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To become India’s premier and most trusted home infrastructure maintenance partner, empowering homeowners with transparent service tracking, guaranteed technical workmanship, and respectable livelihoods for technicians.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#168BEB]" />
              <span>Building trust through 30-day no-questions-asked warranty</span>
            </div>
          </div>

        </div>
      </section>

      {/* PHYSICAL FACILITY, SERVICE WORKSHOP & SPARE INVENTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#168BEB] block mb-1">
              Real Operations & Facilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
              Our Workshop, Service Storefront & Spare Parts Hub
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Take a look inside our real workshop location. We maintain dedicated testing benches, diagnostic instruments, and verified spare part inventories for immediate customer dispatches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* 1. Storefront */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={REAL_STOREFRONT_IMAGE}
                  alt="Smart Services & Alamgir Electrical Works authorized storefront and service desk"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#102A43]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Physical Service Center
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-bold text-sm text-[#102A43]">Main Storefront & Walk-in Center</h4>
                <p className="text-xs text-slate-600">
                  Fully operational service hub with authorized partner branding, billing desk, and walk-in technical consultation.
                </p>
                <div className="pt-2 text-[11px] font-mono text-slate-500">
                  Phone: 80549-64609 / 0161-5026045
                </div>
              </div>
            </div>

            {/* 2. Workshop Racks */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={REAL_WORKSHOP_INVENTORY_IMAGE}
                  alt="In-house repair workshop with multimeters, toolkits, and diagnostic racks"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#102A43]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Tooling & Inspection Racks
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-bold text-sm text-[#102A43]">Testing Benches & Multimeters</h4>
                <p className="text-xs text-slate-600">
                  Equipped with calibrated multimeters, safety equipment, electrical toolkits, and appliance diagnostics.
                </p>
                <div className="pt-2 text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Calibrated testing gear
                </div>
              </div>
            </div>

            {/* 3. Spares Stock */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={REAL_SPARE_PARTS_COMPRESSORS_IMAGE}
                  alt="Spare parts stock with rotary compressors, refrigerant gas cylinders and brand spares"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#102A43]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Genuine Spares Inventory
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-bold text-sm text-[#102A43]">Compressors & Refrigerant Stock</h4>
                <p className="text-xs text-slate-600">
                  Ready stock of brand-new rotary compressors, certified refrigerant canisters (R32 / R410A), and OEM fittings.
                </p>
                <div className="pt-2 text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% genuine guaranteed
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CUSTOMERS TRUST US */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#168BEB] block mb-1">
              Safety & Integrity
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A43]">
              Why Customers Trust Smart Services
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our 4-point safety and service protocol protects your family and your appliances.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#102A43] mb-1.5">Police Verified Staff</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every technician undergoes criminal background verification, identity checks, and carries an official Smart Services ID badge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center mb-3">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#102A43] mb-1.5">100% Genuine Spares</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We only source factory-certified parts: OEM copper coils, brass valves, certified capacitors, and genuine heating elements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#102A43] mb-1.5">Fixed Rate Card</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transparent published prices in Indian Rupees. Technicians cannot arbitrarily quote inflated rates after dismantling equipment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#102A43] mb-1.5">Dedicated Support</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct phone and online resolution. If you are not satisfied with any aspect of the service, our operations team intervenes immediately.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION & INTERACTIVE CONTACT FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Demo Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#168BEB] block mb-1">
                Reach Out To Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#102A43]">
                Contact Information
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Have questions about an upcoming installation, complex wiring, or enterprise servicing? Reach our support desk directly.
              </p>
            </div>

            {/* Clear Demo Details Box */}
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Clearly Marked Demo Details:</span>
                <p className="mt-0.5">
                  The telephone number, address, and email below are demonstration placeholders for this project.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Helpline & Service Desk</div>
                  <div className="space-y-0.5">
                    <a href="tel:+918054964609" className="text-sm font-bold text-[#102A43] hover:text-[#168BEB] font-mono block">
                      +91 80549 64609 <span className="text-xs text-slate-500 font-normal">(Mobile)</span>
                    </a>
                    <a href="tel:01615026045" className="text-sm font-bold text-[#102A43] hover:text-[#168BEB] font-mono block">
                      0161-5026045 <span className="text-xs text-slate-500 font-normal">(Workshop Line)</span>
                    </a>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Direct workshop & technician dispatch line</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email (Demo)</div>
                  <a href="mailto:support@smartservices.demo" className="text-sm font-bold text-[#102A43] hover:text-[#168BEB]">
                    support@smartservices.demo
                  </a>
                  <div className="text-xs text-slate-500">Replies within 2 to 4 business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Business Address (Demo)</div>
                  <div className="text-sm font-bold text-[#102A43]">
                    Plot 42, Tech Park Enclave, Okhla Phase III
                  </div>
                  <div className="text-xs text-slate-600">New Delhi - 110001, India</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#EAF5FF] text-[#168BEB] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Operating Hours</div>
                  <div className="text-sm font-bold text-[#102A43]">
                    Monday - Sunday: 8:00 AM - 8:00 PM IST
                  </div>
                  <div className="text-xs text-slate-600">Emergency breakdown team active 24/7</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
            <h3 className="text-xl font-bold text-[#102A43] mb-1">Send Us a Message</h3>
            <p className="text-xs text-slate-600 mb-6">
              Fill out the form below and our customer support supervisor will get in touch with you.
            </p>

            {submittedMessage && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-900">Message Submitted!</h4>
                  <p className="text-xs text-emerald-800 mt-0.5">{submittedMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168BEB] ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="priya@example.com"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168BEB] ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168BEB]"
                >
                  <option value="General Service Inquiry">General Service Inquiry</option>
                  <option value="AC Maintenance Consultation">AC Maintenance Consultation</option>
                  <option value="Geyser Repair / Descaling Inquiry">Geyser Repair / Descaling Inquiry</option>
                  <option value="Complete Home Wiring Quote">Complete Home Wiring Quote</option>
                  <option value="Feedback / Warranty Claim">Feedback / Warranty Claim</option>
                  <option value="Corporate / Office Maintenance">Corporate / Office Maintenance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the issue or question you have..."
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168BEB] ${
                    errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-5 bg-[#102A43] hover:bg-[#168BEB] text-white font-bold text-sm rounded-xl transition-all shadow-md disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Support</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};
