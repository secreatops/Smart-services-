import React, { useState } from 'react';
import { 
  User as UserIcon, 
  Mail, 
  Lock, 
  Phone, 
  ShieldAlert, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  LogOut, 
  Wrench,
  Calendar,
  Sparkles
} from 'lucide-react';
import { storage } from '../utils/storage';
import { User, Booking } from '../types';

interface AuthPageProps {
  currentUser: User | null;
  onLoginSuccess: (user: User) => void;
  onLogout: () => void;
  onNavigate: (page: 'home' | 'services' | 'about-contact' | 'auth') => void;
  onOpenBooking: () => void;
  userBookings: Booking[];
}

export const AuthPage: React.FC<AuthPageProps> = ({
  currentUser,
  onLoginSuccess,
  onLogout,
  onNavigate,
  onOpenBooking,
  userBookings
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  // Form Fields
  const [loginEmail, setLoginEmail] = useState('rahul@example.com');
  const [loginPassword, setLoginPassword] = useState('password123');

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

  // Status & Feedback
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Quick fill helper
  const handleFillDemoCredentials = () => {
    setLoginEmail('rahul@example.com');
    setLoginPassword('password123');
    setErrorMsg(null);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!loginEmail.trim() || !loginPassword.trim()) {
      setErrorMsg('Please enter both email and password.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const res = storage.loginUser(loginEmail.trim(), loginPassword);
      setIsLoading(false);
      if (res.success && res.user) {
        setSuccessMsg(res.message);
        onLoginSuccess(res.user);
      } else {
        setErrorMsg(res.message);
      }
    }, 400);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!signupName.trim()) {
      setErrorMsg('Full Name is required.');
      return;
    }
    if (!signupEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupEmail.trim())) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }
    if (signupPassword.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      setErrorMsg('Passwords do not match. Please verify.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const res = storage.registerUser({
        name: signupName.trim(),
        email: signupEmail.trim(),
        phone: signupPhone.trim() || undefined,
        password: signupPassword
      });
      setIsLoading(false);
      if (res.success && res.user) {
        setSuccessMsg(res.message);
        onLoginSuccess(res.user);
      } else {
        setErrorMsg(res.message);
      }
    }, 450);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      
      {/* DEMO NOTICE BANNER (Mandatory) */}
      <div className="bg-amber-50 border border-amber-300/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xs">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          <span className="font-bold block text-amber-950 mb-0.5">Frontend Demo Authentication Notice</span>
          This is a simulated demo authentication system using browser <code className="font-mono bg-amber-100/80 px-1 py-0.5 rounded text-amber-900 font-semibold">localStorage</code>. 
          No backend API or external database is used. Do not enter sensitive production passwords.
        </div>
      </div>

      {currentUser ? (
        /* LOGGED IN USER PROFILE DASHBOARD */
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          
          <div className="bg-[#102A43] p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#168BEB] text-white flex items-center justify-center font-bold text-2xl shadow-md border-2 border-white/20">
                {currentUser.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <span className="text-xs text-[#168BEB] font-bold uppercase tracking-wider block">Customer Account</span>
                <h2 className="text-2xl font-bold text-white">{currentUser.name}</h2>
                <p className="text-xs text-slate-300 font-mono mt-0.5">{currentUser.email}</p>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-2 border border-white/10 self-start sm:self-auto"
            >
              <LogOut className="w-4 h-4 text-red-400" />
              <span>Sign Out</span>
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Account Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 block">Total Services Booked</span>
                <span className="text-2xl font-extrabold text-[#102A43] font-mono mt-1 block">
                  {userBookings.length}
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 block">Active Status</span>
                <span className="text-sm font-bold text-emerald-700 flex items-center gap-1 mt-2">
                  <CheckCircle2 className="w-4 h-4" /> Verified Customer
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 block">Member Since</span>
                <span className="text-sm font-bold text-slate-800 font-mono mt-2 block">
                  {currentUser.createdAt}
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="py-3 px-5 bg-[#102A43] hover:bg-[#168BEB] text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-sm flex items-center gap-2"
              >
                <Wrench className="w-4 h-4" />
                <span>Book a Doorstep Technician</span>
              </button>

              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-3 px-5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors"
              >
                View Services & Rates
              </button>
            </div>

            {/* Bookings Preview */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-[#102A43]">Recent Booking Activity</h3>
              {userBookings.length === 0 ? (
                <p className="text-xs text-slate-500">No bookings associated with this browser session yet.</p>
              ) : (
                <div className="space-y-3">
                  {userBookings.slice(0, 3).map((b) => (
                    <div key={b.id} className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between text-xs bg-slate-50/50">
                      <div>
                        <div className="font-bold text-slate-900">{b.serviceTitle} ({b.id})</div>
                        <div className="text-slate-500">{b.preferredDate} · {b.preferredTime}</div>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-bold text-[#102A43]">₹{b.price}</span>
                        <span className="block text-[10px] text-emerald-700 font-semibold">{b.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      ) : (
        /* LOGIN / SIGNUP TOGGLE FORM */
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-md mx-auto">
          
          {/* Header */}
          <div className="bg-[#102A43] p-6 text-white text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#168BEB] text-white flex items-center justify-center mx-auto mb-3 shadow-sm">
              <UserIcon className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-extrabold text-white">
              {mode === 'login' ? 'Welcome to Smart Services' : 'Create Customer Account'}
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              {mode === 'login' 
                ? 'Sign in to access your bookings and rapid scheduling' 
                : 'Join 35,000+ satisfied homeowners for verified service'}
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex border-b border-slate-200 bg-slate-50">
            <button
              onClick={() => { setMode('login'); setErrorMsg(null); setSuccessMsg(null); }}
              className={`flex-1 py-3 text-center text-xs font-bold transition-colors ${
                mode === 'login' 
                  ? 'bg-white text-[#102A43] border-b-2 border-[#168BEB]' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => { setMode('signup'); setErrorMsg(null); setSuccessMsg(null); }}
              className={`flex-1 py-3 text-center text-xs font-bold transition-colors ${
                mode === 'signup' 
                  ? 'bg-white text-[#102A43] border-b-2 border-[#168BEB]' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              New Registration
            </button>
          </div>

          <div className="p-6 space-y-4">
            
            {/* Alerts */}
            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Quick Demo Helper Button for Login */}
            {mode === 'login' && (
              <div className="bg-[#EAF5FF]/60 border border-blue-200 rounded-xl p-3 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#102A43] block">Demo Account Available:</span>
                  <span className="text-slate-600 font-mono text-[11px]">rahul@example.com / password123</span>
                </div>
                <button
                  type="button"
                  onClick={handleFillDemoCredentials}
                  className="py-1 px-2.5 bg-[#168BEB] hover:bg-[#168BEB]/90 text-white font-bold text-[11px] rounded-lg transition-colors whitespace-nowrap"
                >
                  Quick Fill
                </button>
              </div>
            )}

            {mode === 'login' ? (
              /* LOGIN FORM */
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168BEB]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-slate-700">Password</label>
                    <span className="text-[11px] text-slate-400">Demo pwd: password123</span>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168BEB]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 px-4 bg-[#102A43] hover:bg-[#168BEB] text-white font-bold text-sm rounded-xl transition-all shadow-md disabled:opacity-70 flex items-center justify-center gap-2 mt-2"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>Sign In</span>
                  )}
                </button>
              </form>
            ) : (
              /* SIGNUP FORM */
              <form onSubmit={handleSignupSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      placeholder="e.g. Ramesh Chandra"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168BEB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="email"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      placeholder="ramesh@example.com"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168BEB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number <span className="text-slate-400">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      value={signupPhone}
                      onChange={(e) => setSignupPhone(e.target.value)}
                      placeholder="+91 98765 00000"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168BEB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="password"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      placeholder="Minimum 6 characters"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168BEB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="password"
                      value={signupConfirmPassword}
                      onChange={(e) => setSignupConfirmPassword(e.target.value)}
                      placeholder="Re-type password"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#168BEB]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 px-4 bg-[#102A43] hover:bg-[#168BEB] text-white font-bold text-sm rounded-xl transition-all shadow-md disabled:opacity-70 flex items-center justify-center gap-2 mt-2"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>Register Account</span>
                  )}
                </button>
              </form>
            )}

            {/* Toggle footer text */}
            <div className="pt-3 text-center text-xs text-slate-500 border-t border-slate-100">
              {mode === 'login' ? (
                <span>
                  Don't have an account?{' '}
                  <button
                    onClick={() => { setMode('signup'); setErrorMsg(null); }}
                    className="text-[#168BEB] font-bold hover:underline"
                  >
                    Register for free
                  </button>
                </span>
              ) : (
                <span>
                  Already have an account?{' '}
                  <button
                    onClick={() => { setMode('login'); setErrorMsg(null); }}
                    className="text-[#168BEB] font-bold hover:underline"
                  >
                    Sign in here
                  </button>
                </span>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
