'use client';

import React, { useState, useEffect } from 'react';
import { Dumbbell, Users, Clock, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Zap, TrendingUp, Award } from 'lucide-react';

export default function Footer() {
  const [gymCapacity, setGymCapacity] = useState(67);
  const [nextTrainer, setNextTrainer] = useState('Marcus');
  const [timeUntilTrainer, setTimeUntilTrainer] = useState(15);

  // Simulate live gym capacity updates
  useEffect(() => {
    const interval = setInterval(() => {
      setGymCapacity(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + change;
        return Math.max(45, Math.min(95, newVal));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Update time until next trainer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUntilTrainer(prev => {
        if (prev <= 1) {
          const trainers = ['Marcus', 'Sarah', 'Devon', 'Kira'];
          setNextTrainer(trainers[Math.floor(Math.random() * trainers.length)]);
          return 15;
        }
        return prev - 1;
      });
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const getCapacityColor = () => {
    if (gymCapacity < 60) return 'emerald-500';
    if (gymCapacity < 80) return 'orange-600';
    return 'red-500';
  };

  const getCapacityStatus = () => {
    if (gymCapacity < 60) return 'LIGHT LOAD';
    if (gymCapacity < 80) return 'MODERATE';
    return 'PEAK ENERGY';
  };

  return (
    <footer className="bg-slate-900 relative overflow-hidden">
      {/* Angular geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border-l-4 border-t-4 border-orange-600 transform -rotate-12"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border-r-4 border-b-4 border-emerald-500 transform rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent"></div>
      </div>

      {/* Live Capacity Banner - Industrial Steel Bar */}
      <div className="relative border-b-4 border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Gym Capacity Gauge */}
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <div className={`w-16 h-16 rounded-lg bg-slate-800 border-2 border-${getCapacityColor()} flex items-center justify-center relative overflow-hidden`}>
                  <Users className={`w-8 h-8 text-${getCapacityColor()} relative z-10`} />
                  <div 
                    className={`absolute bottom-0 left-0 right-0 bg-${getCapacityColor()} opacity-20 transition-all duration-1000`}
                    style={{ height: `${gymCapacity}%` }}
                  ></div>
                </div>
                <div className={`absolute -top-1 -right-1 w-4 h-4 bg-${getCapacityColor()} rounded-full animate-pulse`}></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-2xl tracking-tight">{gymCapacity}%</span>
                  <span className={`text-xs font-bold text-${getCapacityColor()} tracking-widest`}>
                    {getCapacityStatus()}
                  </span>
                </div>
                <p className="text-slate-400 text-sm font-medium">CURRENT GYM ENERGY</p>
              </div>
            </div>

            {/* Next Available Trainer */}
            <div className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center relative overflow-hidden border-2 border-orange-500">
                <Award className="w-8 h-8 text-white relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-xl">{nextTrainer}</span>
                  <Zap className="w-4 h-4 text-emerald-500" />
                </div>
                <p className="text-slate-400 text-sm">Available in <span className="text-orange-600 font-bold">{timeUntilTrainer}min</span></p>
              </div>
            </div>

            {/* Pulse Indicator */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1 bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ 
                      height: `${Math.random() * 30 + 20}px`,
                      animation: `pulse ${Math.random() * 1 + 0.5}s ease-in-out infinite`
                    }}
                  ></div>
                ))}
              </div>
              <span className="text-emerald-500 text-xs font-bold tracking-widest">LIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content - Organized as Workout Stations */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Station 1: Command Center (About) */}
          <div className="relative group">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-600 via-emerald-500 to-transparent"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <Dumbbell className="w-6 h-6 text-white transform rotate-12 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <h3 className="text-white font-bold text-lg tracking-tight">COMMAND CENTER</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Where warriors are forged and limits are shattered. Join the force that transforms intimidation into empowerment.
            </p>
            <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold">
              <TrendingUp className="w-4 h-4" />
              <span>EST. 2018</span>
            </div>
          </div>

          {/* Station 2: Gym Schedule (Hours) */}
          <div className="relative group">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-orange-600 to-transparent"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <h3 className="text-white font-bold text-lg tracking-tight">GYM SCHEDULE</h3>
            </div>
            <div className="space-y-3">
              {[
                { days: 'MON - FRI', hours: '05:00 - 23:00', status: 'PEAK HOURS' },
                { days: 'SATURDAY', hours: '07:00 - 21:00', status: 'WARRIOR MODE' },
                { days: 'SUNDAY', hours: '08:00 - 20:00', status: 'RECOVERY DAY' }
              ].map((schedule, idx) => (
                <div key={idx} className="flex justify-between items-center group/item hover:translate-x-2 transition-transform duration-200">
                  <div>
                    <p className="text-white font-semibold text-sm">{schedule.days}</p>
                    <p className="text-xs text-slate-500 font-medium">{schedule.status}</p>
                  </div>
                  <span className="text-orange-600 font-bold text-sm">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Station 3: Spot Me (Contact) */}
          <div className="relative group">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-600 via-emerald-500 to-transparent"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-slate-800 border-2 border-orange-600 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                <Phone className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-white font-bold text-lg tracking-tight">SPOT ME</h3>
            </div>
            <div className="space-y-4">
              <a href="tel:+1234567890" className="flex items-start gap-3 group/link hover:translate-x-2 transition-transform duration-200">
                <Phone className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold group-hover/link:text-orange-600 transition-colors">+1 (234) 567-890</p>
                  <p className="text-slate-500 text-xs">MON-FRI 5AM-11PM</p>
                </div>
              </a>
              <a href="mailto:info@fitforce.com" className="flex items-start gap-3 group/link hover:translate-x-2 transition-transform duration-200">
                <Mail className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold group-hover/link:text-orange-600 transition-colors break-all">info@fitforce.com</p>
                  <p className="text-slate-500 text-xs">24/7 RESPONSE</p>
                </div>
              </a>
              <a href="#location" className="flex items-start gap-3 group/link hover:translate-x-2 transition-transform duration-200">
                <MapPin className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold group-hover/link:text-orange-600 transition-colors">123 Warrior Way</p>
                  <p className="text-slate-500 text-xs">FITNESS DISTRICT</p>
                </div>
              </a>
            </div>
          </div>

          {/* Station 4: Cool Down (Quick Links & Social) */}
          <div className="relative group">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-orange-600 to-transparent"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg tracking-tight">COOL DOWN</h3>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-2 mb-6">
              {[
                { label: 'Programs', href: '#programs' },
                { label: 'Trainers', href: '#trainers' },
                { label: 'Membership', href: '#membership' },
                { label: 'Success Stories', href: '#stories' }
              ].map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href}
                  className="block text-slate-400 hover:text-orange-600 font-medium text-sm transition-all duration-200 hover:translate-x-2 hover:font-bold"
                >
                  → {link.label}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-slate-500 text-xs font-bold tracking-widest mb-3">CONNECT WITH THE FORCE</p>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, color: 'hover:bg-orange-600', href: '#instagram' },
                  { Icon: Facebook, color: 'hover:bg-emerald-500', href: '#facebook' },
                  { Icon: Twitter, color: 'hover:bg-orange-600', href: '#twitter' }
                ].map(({ Icon, color, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className={`w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center ${color} transition-all duration-300 hover:scale-110 hover:-rotate-6 border-2 border-transparent hover:border-white`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="relative my-12 h-1 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-600 to-transparent transform -skew-x-12"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent transform skew-x-12 opacity-50"></div>
        </div>

        {/* Bottom Bar - Industrial Steel Plate */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t-2 border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center transform -rotate-6 border-2 border-orange-500">
              <span className="text-white font-black text-xl transform rotate-6">FF</span>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg tracking-tight">FITFORCE</h4>
              <p className="text-slate-500 text-xs font-medium">FORGE YOUR STRENGTH</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#privacy" className="text-slate-400 hover:text-orange-600 transition-colors font-medium">Privacy Policy</a>
            <span className="text-slate-700">|</span>
            <a href="#terms" className="text-slate-400 hover:text-orange-600 transition-colors font-medium">Terms of Service</a>
            <span className="text-slate-700">|</span>
            <a href="#cookies" className="text-slate-400 hover:text-orange-600 transition-colors font-medium">Cookies</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-500 text-sm">
              © 2024 <span className="text-orange-600 font-bold">FitForce Gym</span>
            </p>
            <p className="text-slate-600 text-xs mt-1">Built by warriors, for warriors</p>
          </div>
        </div>
      </div>

      {/* Bottom Angular Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-600 via-emerald-500 to-orange-600"></div>
    </footer>
  );
}