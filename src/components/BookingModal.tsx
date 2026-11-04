import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Phone, User, CheckCircle2, ShieldCheck, Wrench } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { storage } from '../utils/storage';
import { Booking, ServiceItem } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string | null;
  currentUser?: { name?: string; phone?: string; email?: string } | null;
  onBookingSuccess?: (booking: Booking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
  currentUser,
  onBookingSuccess
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('New Delhi');
  const [pincode, setPincode] = useState('110001');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('09:00 AM - 11:00 AM');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Prefill or reset whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setConfirmedBooking(null);
      setErrors({});
      if (preselectedServiceId) {
        setSelectedServiceId(preselectedServiceId);
      } else if (!selectedServiceId) {
        setSelectedServiceId(SERVICES_DATA[0].id);
      }
      if (currentUser?.name) {
        setCustomerName(currentUser.name);
      }
      if (currentUser?.phone) {
        setPhoneNumber(currentUser.phone);
      }
      // Set tomorrow as default date if empty
      if (!preferredDate) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        setPreferredDate(tomorrow.toISOString().split('T')[0]);
      }
    }
  }, [isOpen, preselectedServiceId, currentUser]);

  if (!isOpen) return null;

  const currentService: ServiceItem | undefined = SERVICES_DATA.find(s => s.id === selectedServiceId) || SERVICES_DATA[0];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!customerName.trim()) {
      errs.customerName = 'Please enter your full name';
    }
    if (!phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,14}$/.test(phoneNumber.trim())) {
      errs.phoneNumber = 'Enter a valid 10-digit mobile number';
    }
    if (!streetAddress.trim()) {
      errs.streetAddress = 'Door/flat number & street address required';
    }
    if (!preferredDate) {
      errs.preferredDate = 'Please select your preferred service date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const fullAddress = `${streetAddress.trim()}, ${city}, ${pincode}`;
      const newBooking = storage.saveBooking({
        customerName: customerName.trim(),
        phoneNumber: phoneNumber.trim(),
        address: fullAddress,
        city,
        pincode,
        serviceId: currentService.id,
        serviceTitle: currentService.title,
        categoryTitle: currentService.categoryTitle,
        price: currentService.price,
        preferredDate,
        preferredTime,
        notes: notes.trim() || undefined
      });

      setIsSubmitting(false);
      setConfirmedBooking(newBooking);
      if (onBookingSuccess) {
        onBookingSuccess(newBooking);
      }
    }, 450);
  };

  // Get minimum date (today)
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog" 
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#102A43] text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#168BEB]/20 flex items-center justify-center border border-[#168BEB]/40">
              <Wrench className="w-4 h-4 text-[#168BEB]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                {confirmedBooking ? 'Booking Confirmed' : 'Book a Verified Technician'}
              </h3>
              <p className="text-xs text-slate-300">
                {confirmedBooking ? 'Your service order is active' : 'Standard 30-day post-service warranty'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {confirmedBooking ? (
            /* Confirmation View */
            <div className="space-y-6">
              <div className="text-center py-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mb-3 border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#102A43]">Technician Scheduled!</h4>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Your service request has been confirmed. A certified technician has been dispatched to your schedule.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-[#EAF5FF]/60 rounded-xl p-4 border border-[#168BEB]/20 space-y-3">
                <div className="flex items-center justify-between border-b border-blue-100/80 pb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Booking Reference</span>
                  <span className="font-mono font-bold text-[#102A43] text-sm">{confirmedBooking.id}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Selected Service:</span>
                  <span className="font-semibold text-slate-900">{confirmedBooking.serviceTitle}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Estimated Total:</span>
                  <span className="font-bold text-[#102A43] font-mono">₹{confirmedBooking.price}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Appointment Slot:</span>
                  <span className="font-medium text-slate-900">{confirmedBooking.preferredDate} · {confirmedBooking.preferredTime}</span>
                </div>
                <div className="flex items-start justify-between text-sm pt-1">
                  <span className="text-slate-600 shrink-0">Service Address:</span>
                  <span className="font-medium text-slate-900 text-right max-w-xs">{confirmedBooking.address}</span>
                </div>
              </div>

              {/* Technician Info */}
              {confirmedBooking.assignedTechnician && (
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#102A43] text-white flex items-center justify-center font-bold text-sm">
                      {confirmedBooking.assignedTechnician.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Assigned Technician</div>
                      <div className="text-sm font-bold text-slate-900">{confirmedBooking.assignedTechnician.name}</div>
                      <div className="text-xs text-emerald-700 flex items-center gap-1 font-medium">
                        ★ {confirmedBooking.assignedTechnician.rating} · Background Verified
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Contact</div>
                    <div className="text-xs font-mono font-medium text-slate-800">{confirmedBooking.assignedTechnician.phone}</div>
                  </div>
                </div>
              )}

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Pay securely via Cash or UPI after work completion. 30-Day satisfaction warranty included.</span>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 px-4 bg-[#102A43] hover:bg-[#168BEB] text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection Card */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Selected Service
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <select
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full sm:max-w-xs text-sm font-semibold text-slate-900 bg-white border border-slate-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#168BEB]"
                  >
                    <optgroup label="AC Services">
                      {SERVICES_DATA.filter(s => s.category === 'ac').map(s => (
                        <option key={s.id} value={s.id}>{s.title} ({s.priceText})</option>
                      ))}
                    </optgroup>
                    <optgroup label="Geyser Services">
                      {SERVICES_DATA.filter(s => s.category === 'geyser').map(s => (
                        <option key={s.id} value={s.id}>{s.title} ({s.priceText})</option>
                      ))}
                    </optgroup>
                    <optgroup label="Electrical Services">
                      {SERVICES_DATA.filter(s => s.category === 'electrical').map(s => (
                        <option key={s.id} value={s.id}>{s.title} ({s.priceText})</option>
                      ))}
                    </optgroup>
                  </select>

                  <div className="text-right">
                    <span className="text-xs text-slate-500 block">Starting at</span>
                    <span className="text-base font-bold text-[#102A43] font-mono">{currentService?.priceText}</span>
                  </div>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Customer Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Rahul Verma"
                      className={`w-full pl-9 pr-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#168BEB] ${
                        errors.customerName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.customerName && <p className="text-xs text-red-600 mt-1">{errors.customerName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-9 pr-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#168BEB] ${
                        errors.phoneNumber ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && <p className="text-xs text-red-600 mt-1">{errors.phoneNumber}</p>}
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Complete Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    placeholder="House/Flat number, Building, Street, Landmark"
                    className={`w-full pl-9 pr-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#168BEB] ${
                      errors.streetAddress ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                </div>
                {errors.streetAddress && <p className="text-xs text-red-600 mt-1">{errors.streetAddress}</p>}
              </div>

              {/* City and Pincode */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#168BEB]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Pincode</label>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#168BEB]"
                  />
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="date"
                      min={todayStr}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={`w-full pl-9 pr-3 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#168BEB] ${
                        errors.preferredDate ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && <p className="text-xs text-red-600 mt-1">{errors.preferredDate}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#168BEB]"
                    >
                      <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM (Morning)</option>
                      <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM (Noon)</option>
                      <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM (Afternoon)</option>
                      <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM (Evening)</option>
                      <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM (Night)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Issue Details / Special Instructions <span className="text-slate-400">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. AC unit is on 3rd floor balcony, geyser leaking from bottom valve"
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#168BEB]"
                />
              </div>

              {/* Trust badge */}
              <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg text-xs text-slate-600 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero upfront charge. Pay after service inspection. Free cancellation.</span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#102A43] hover:bg-[#168BEB] text-white font-semibold text-sm rounded-xl transition-colors shadow-md disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Scheduling Technician...</span>
                    </>
                  ) : (
                    <span>Confirm Technician Booking</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
