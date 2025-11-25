"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [gymCapacity, setGymCapacity] = useState(67);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Simulate live gym capacity updates
    const capacityInterval = setInterval(() => {
      setGymCapacity(prev => {
        const change = Math.floor(Math.random() * 10) - 5;
        return Math.max(45, Math.min(95, prev + change));
      });
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(capacityInterval);
    };
  }, []);

  const getCapacityColor = () => {
    if (gymCapacity < 60) return 'bg-emerald-500';
    if (gymCapacity < 80) return 'bg-orange-600';
    return 'bg-red-500';
  };

  const getEnergyLevel = () => {
    if (gymCapacity < 60) return 'LOW ENERGY';
    if (gymCapacity < 80) return 'PEAK FLOW';
    return 'MAX INTENSITY';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-orange-600/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with Industrial Edge */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 transform -skew-x-12 flex items-center justify-center shadow-lg group-hover:skew-x-0 transition-transform duration-300">
                <span className="text-white font-black text-2xl skew-x-12 group-hover:skew-x-0 transition-transform duration-300">F</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 transform rotate-45"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">
                FIT<span className="text-orange-600">FORCE</span>
              </h1>
              <div className="h-0.5 bg-gradient-to-r from-orange-600 to-transparent transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Live Gym Capacity Indicator - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 absolute left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className={`w-3 h-3 rounded-full ${getCapacityColor()} ${isPulsing ? 'animate-pulse' : ''}`}></div>
              <div className={`absolute inset-0 w-3 h-3 rounded-full ${getCapacityColor()} animate-ping opacity-75`}></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-semibold tracking-wider">LIVE STATUS</span>
              <div className="flex items-center space-x-2">
                <span className="text-white font-black text-lg">{gymCapacity}%</span>
                <span className="text-orange-600 text-xs font-bold">{getEnergyLevel()}</span>
              </div>
            </div>
            <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div 
                className={`h-full ${getCapacityColor()} transition-all duration-1000 ease-out relative`}
                style={{ width: `${gymCapacity}%` }}
              >
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: 'SERVICES', href: '#services' },
              { name: 'PRICING', href: '#pricing' },
              { name: 'CONTACT', href: '#contact' }
            ].map((link, index) => (
              <Link 
                key={link.name}
                href={link.href}
                className="relative px-6 py-2 text-slate-300 font-bold text-sm tracking-wider hover:text-white transition-colors duration-300 group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 bg-orange-600/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>
            ))}
            
            <button className="ml-4 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-black text-sm tracking-wider transform -skew-x-6 hover:skew-x-0 transition-all duration-300 shadow-lg hover:shadow-orange-600/50 relative overflow-hidden group">
              <span className="relative z-10 block skew-x-6 group-hover:skew-x-0 transition-transform duration-300">
                START NOW
              </span>
              <div className="absolute inset-0 bg-emerald-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-orange-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-slate-900 border-t border-orange-600/20">
          {/* Mobile Capacity Indicator */}
          <div className="px-4 py-4 border-b border-slate-800 flex items-center justify-between">
            <span className="text-slate-400 text-xs font-semibold tracking-wider">GYM STATUS</span>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${getCapacityColor()} animate-pulse`}></div>
              <span className="text-white font-black">{gymCapacity}%</span>
              <span className="text-orange-600 text-xs font-bold">{getEnergyLevel()}</span>
            </div>
          </div>
          
          <div className="px-4 py-6 space-y-4">
            {[
              { name: 'SERVICES', href: '#services' },
              { name: 'PRICING', href: '#pricing' },
              { name: 'CONTACT', href: '#contact' }
            ].map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-slate-300 font-bold text-sm tracking-wider hover:text-white hover:bg-orange-600/10 transition-all duration-300 border-l-4 border-transparent hover:border-orange-600"
              >
                {link.name}
              </Link>
            ))}
            
            <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-black text-sm tracking-wider transform -skew-x-3 hover:skew-x-0 transition-all duration-300 shadow-lg">
              <span className="block skew-x-3">START NOW</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}