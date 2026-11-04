import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutContactPage } from './pages/AboutContactPage';
import { AuthPage } from './pages/AuthPage';
import { storage } from './utils/storage';
import { User, Booking } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'about-contact' | 'auth'>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Initialize from storage on mount
  useEffect(() => {
    const user = storage.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    const storedBookings = storage.getBookings();
    setBookings(storedBookings);
  }, []);

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedServiceId(serviceId || null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedServiceId(null);
  };

  const handleBookingSuccess = (newBooking: Booking) => {
    setBookings(prev => [newBooking, ...prev.filter(b => b.id !== newBooking.id)]);
  };

  const handleCancelBooking = (bookingId: string) => {
    const success = storage.cancelBooking(bookingId);
    if (success) {
      setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: 'Cancelled' } : b));
    }
  };

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    storage.setCurrentUser(null);
    setCurrentUser(null);
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#273444] font-sans antialiased selection:bg-[#168BEB]/20 selection:text-[#102A43]">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenBooking={() => handleOpenBooking()}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Main Content Pages */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenBooking={handleOpenBooking}
            bookings={bookings}
            onCancelBooking={handleCancelBooking}
          />
        )}

        {currentPage === 'about-contact' && (
          <AboutContactPage />
        )}

        {currentPage === 'auth' && (
          <AuthPage
            currentUser={currentUser}
            onLoginSuccess={handleLoginSuccess}
            onLogout={handleLogout}
            onNavigate={setCurrentPage}
            onOpenBooking={() => handleOpenBooking()}
            userBookings={bookings}
          />
        )}
      </main>

      {/* Booking Modal Dialog */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={preselectedServiceId}
        currentUser={currentUser}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenBooking={() => handleOpenBooking()}
      />

    </div>
  );
}
