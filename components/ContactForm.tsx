'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formDataObj = new FormData(e.currentTarget);
    const formObject: any = {};
    formDataObj.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: 'd902171e-63be-4c40-a453-6e2171d11bfd',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) { 
      setStatus('error'); 
    }
  };

  const validateField = (name: string, value: string) => {
    const motivationalMessages: { [key: string]: string } = {
      name: "💪 Every champion has a name! Let's hear yours!",
      email: "🎯 Lock in that target! We need a valid email address!",
      message: "🔥 Dig deeper! Share your fitness goals with us!"
    };

    if (name === 'name' && value.trim().length < 2) {
      return motivationalMessages.name;
    }
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return motivationalMessages.email;
    }
    if (name === 'message' && value.trim().length < 10) {
      return motivationalMessages.message;
    }
    return '';
  };

  const handleBlur = (name: string, value: string) => {
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
    setFocusedField(null);
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-slate-900 overflow-hidden py-20">
      {/* Gym Floor Layout Background - Angular Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, #f97316 1px, transparent 1px),
            linear-gradient(-45deg, #10b981 1px, transparent 1px),
            linear-gradient(90deg, #475569 1px, transparent 1px),
            linear-gradient(0deg, #475569 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 40px 40px, 40px 40px',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0'
        }} />
      </div>

      {/* Diagonal Industrial Stripes */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-orange-600/20 via-transparent to-transparent transform -skew-y-3" />
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-tl from-emerald-500/20 via-transparent to-transparent transform skew-y-3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Live Capacity Indicator */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-600/30 mb-6">
            <div className="relative">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
            </div>
            <span className="text-emerald-500 font-bold text-sm uppercase tracking-wider">
              Live: 47/80 Members Training
            </span>
            <div className="h-2 w-32 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-orange-600 rounded-full animate-pulse" style={{ width: '58%' }} />
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 relative inline-block">
            <span className="relative z-10">JOIN THE</span>
            <div className="absolute -bottom-2 left-0 w-full h-4 bg-orange-600 transform -skew-x-12 -z-0" />
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-emerald-500 mb-6">
            WARRIOR TRIBE
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Step up to the front desk. Your transformation journey starts with a single message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info Cards with Gym Equipment Icons */}
          <div className="space-y-6">
            {/* Front Desk Card */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 border-slate-700 hover:border-orange-600 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-orange-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-xl mb-2">HEADQUARTERS</h4>
                <p className="text-slate-400">123 Iron Street, Fitness District</p>
                <p className="text-slate-400">Power City, PC 12345</p>
              </div>
            </div>

            {/* Training Hours Card */}
            <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 border-slate-700 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-xl mb-2">TRAINING HOURS</h4>
                <p className="text-slate-400">Monday - Friday: 5AM - 11PM</p>
                <p className="text-slate-400">Weekend Warriors: 6AM - 10PM</p>
                <p className="text-emerald-500 font-bold mt-2">24/7 for Elite Members 🔥</p>
              </div>
            </div>

            {/* Quick Connect Card */}
            <div className="group relative bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-2xl border-2 border-orange-500 transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-xl mb-2">INSTANT CONNECT</h4>
                <p className="text-orange-100 text-2xl font-bold mb-1">(555) FITFORCE</p>
                <p className="text-orange-100">info@fitforcegym.com</p>
              </div>
            </div>

            {/* Virtual Tour CTA */}
            <div className="group relative bg-slate-950 p-8 rounded-2xl border-2 border-slate-700 hover:border-orange-600 transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/10 to-orange-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">🎥 VIRTUAL TOUR</h4>
                  <p className="text-slate-400">Experience the facility before you commit</p>
                </div>
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form (Front Desk Sign-up) */}
          <div className="relative">
            {/* Form Container with Industrial Design */}
            <div className="relative bg-slate-800 rounded-3xl border-4 border-slate-700 overflow-hidden shadow-2xl">
              {/* Metal Plate Header */}
              <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 border-b-4 border-orange-600">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                }} />
                <div className="relative flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-wider">Sign-Up Form</h3>
                    <p className="text-orange-600 font-bold text-sm">Front Desk Check-In</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    <div className="w-3 h-3 bg-orange-600 rounded-full" />
                    <div className="w-3 h-3 bg-slate-600 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Name Field */}
                <div className="relative group">
                  <label htmlFor="name" className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Warrior Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={(e) => handleBlur('name', e.target.value)}
                      className="w-full bg-slate-900 border-2 border-slate-700 rounded-xl px-4 py-4 text-white font-medium focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 transform focus:scale-[1.02]"
                      placeholder="Enter your full name"
                    />
                    <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'name' ? 'scale-110 rotate-12' : ''}`}>
                      💪
                    </div>
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-orange-600 text-sm font-bold flex items-center gap-2 animate-pulse">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label htmlFor="email" className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Email Target *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={(e) => handleBlur('email', e.target.value)}
                      className="w-full bg-slate-900 border-2 border-slate-700 rounded-xl px-4 py-4 text-white font-medium focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 transform focus:scale-[1.02]"
                      placeholder="your.email@example.com"
                    />
                    <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'email' ? 'scale-110 rotate-12' : ''}`}>
                      🎯
                    </div>
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-emerald-500 text-sm font-bold flex items-center gap-2 animate-pulse">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="relative group">
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Contact Line <span className="text-slate-600">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-slate-900 border-2 border-slate-700 rounded-xl px-4 py-4 text-white font-medium focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 transform focus:scale-[1.02]"
                      placeholder="(555) 123-4567"
                    />
                    <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'phone' ? 'scale-110 rotate-12' : ''}`}>
                      📞
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Your Fitness Goals *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onFocus={() => setFocusedField('message')}
                      onBlur={(e) => handleBlur('message', e.target.value)}
                      className="w-full bg-slate-900 border-2 border-slate-700 rounded-xl px-4 py-4 text-white font-medium focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your fitness journey, goals, and what brought you to FitForce..."
                    />
                    <div className={`absolute right-4 top-4 transition-all duration-300 ${focusedField === 'message' ? 'scale-110 rotate-12' : ''}`}>
                      🔥
                    </div>
                  </div>
                  {errors.message && (
                    <p className="mt-2 text-orange-600 text-sm font-bold flex items-center gap-2 animate-pulse">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="relative pt-4">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group relative w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-black text-lg uppercase tracking-wider py-5 rounded-xl border-4 border-orange-500 hover:border-orange-400 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden shadow-lg hover:shadow-orange-600/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {status === 'loading' ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <span>Start Your Journey</span>
                          <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>

                  {/* Motivational Strip */}
                  <div className="mt-4 text-center">
                    <p className="text-slate-400 text-sm italic">
                      "The hardest lift is lifting yourself off the couch. You've already started! 💪"
                    </p>
                  </div>
                </div>

                {/* Success Message */}
                {status === 'success' && (
                  <div className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 border-2 border-emerald-400 animate-pulse">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-black text-xl mb-1">CHAMPION MOVE! 🏆</h4>
                        <p className="text-emerald-50">You've taken the first step! We'll connect with you within 24 hours. Get ready to transform!</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="relative bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 border-2 border-red-400">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-black text-xl mb-1">DON'T QUIT NOW!</h4>
                        <p className="text-red-50">Technical glitch! Every champion faces setbacks. Try again - you've got this! 💪</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>

              {/* Bottom Stripe */}
              <div className="h-2 bg-gradient-to-r from-orange-600 via-emerald-500 to-orange-600" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-slate-950 border-4 border-orange-600 rounded-2xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
              <p className="text-orange-600 font-black text-3xl">47+</p>
              <p className="text-slate-400 text-sm font-bold">Members Today</p>
            </div>

            <div className="absolute -top-6 -left-6 bg-slate-950 border-4 border-emerald-500 rounded-2xl p-4 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
              <p className="text-emerald-500 font-black text-3xl">98%</p>
              <p className="text-slate-400 text-sm font-bold">Response Rate</p>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof Banner */}
        <div className="mt-20 relative bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-8 border-2 border-slate-700 overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(249, 115, 22, 0.3) 35px, rgba(249, 115, 22, 0.3) 70px)'
          }} />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <Image src="https://i.pravatar.cc/150?img=12" alt="Member" width={56} height={56} className="rounded-full border-4 border-slate-900" />
                <Image src="https://i.pravatar.cc/150?img=13" alt="Member" width={56} height={56} className="rounded-full border-4 border-slate-900" />
                <Image src="https://i.pravatar.cc/150?img=14" alt="Member" width={56} height={56} className="rounded-full border-4 border-slate-900" />
                <Image src="https://i.pravatar.cc/150?img=15" alt="Member" width={56} height={56} className="rounded-full border-4 border-slate-900" />
                <div className="w-14 h-14 rounded-full border-4 border-slate-900 bg-orange-600 flex items-center justify-center text-white font-black text-sm">
                  +500
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-lg">Join 500+ Warriors</p>
                <p className="text-slate-400 text-sm">Who transformed their lives this month</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-black text-orange-600">4.9★</p>
                <p className="text-slate-400 text-sm">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-emerald-500">2.4K</p>
                <p className="text-slate-400 text-sm">Reviews</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-orange-600">10+</p>
                <p className="text-slate-400 text-sm">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}