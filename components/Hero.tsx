"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextClassTime, setNextClassTime] = useState('14:30');
  const [availableSpots, setAvailableSpots] = useState(8);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min((scrollPosition / windowHeight) * 100, 100);
      setScrollProgress(progress);
    };

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  const getStrengthLevel = () => {
    if (scrollProgress < 20) return 'CURIOUS';
    if (scrollProgress < 40) return 'MOTIVATED';
    if (scrollProgress < 60) return 'COMMITTED';
    if (scrollProgress < 80) return 'WARRIOR';
    return 'UNSTOPPABLE';
  };

  const getNextClassMinutes = () => {
    const now = currentTime;
    const [hours, minutes] = nextClassTime.split(':').map(Number);
    const classTime = new Date(now);
    classTime.setHours(hours, minutes, 0);
    
    const diff = classTime.getTime() - now.getTime();
    const minutesLeft = Math.floor(diff / 1000 / 60);
    
    return minutesLeft > 0 ? minutesLeft : 45;
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Diagonal Accent Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-orange-600/20 to-transparent transform skew-x-12 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-emerald-500/10 to-transparent transform -skew-x-12 -translate-x-1/3"></div>

      {/* Strength Meter - Fixed on Left */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-6 h-64 bg-slate-800 border-2 border-slate-700 transform -skew-y-6 overflow-hidden">
            <div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-600 via-orange-500 to-emerald-500 transition-all duration-500 ease-out"
              style={{ height: `${scrollProgress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
            {/* Strength Markers */}
            {[20, 40, 60, 80].map((mark) => (
              <div 
                key={mark}
                className="absolute left-0 right-0 h-0.5 bg-slate-600"
                style={{ bottom: `${mark}%` }}
              ></div>
            ))}
          </div>
          <div className="text-center">
            <div className="text-xs text-slate-500 font-bold tracking-wider mb-1">YOUR FORCE</div>
            <div className="text-lg font-black text-orange-600 transform -skew-x-6 bg-slate-900 px-3 py-1 border-2 border-orange-600">
              {getStrengthLevel()}
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="relative z-10 space-y-8">
            
            {/* Pre-header Badge */}
            <div className="inline-flex items-center space-x-3 bg-slate-800/80 backdrop-blur-sm border border-orange-600/30 px-6 py-3 transform -skew-x-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-500 font-bold text-sm tracking-wider skew-x-6">TRANSFORM. EMPOWER. DOMINATE.</span>
            </div>

            {/* Main Headline with Industrial Edge */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none">
                YOUR FORCE
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 mt-2">
                  STARTS NOW
                </span>
              </h1>
              <div className="flex items-center space-x-4">
                <div className="h-1 w-20 bg-gradient-to-r from-orange-600 to-transparent"></div>
                <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-transparent"></div>
              </div>
            </div>

            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
              Where industrial strength meets human warmth. This isn't just a gym—it's your <span className="text-orange-600 font-bold">transformation headquarters</span>. From curious to unstoppable, we build warriors, not just bodies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-5 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-black text-lg tracking-wider transform -skew-x-6 hover:skew-x-0 transition-all duration-300 shadow-2xl hover:shadow-orange-600/50 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-3 skew-x-6 group-hover:skew-x-0 transition-transform duration-300">
                  <span>CLAIM FREE TRIAL</span>
                  <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-emerald-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
              
              <button className="group px-8 py-5 bg-transparent border-2 border-slate-600 text-white font-black text-lg tracking-wider transform -skew-x-6 hover:border-orange-600 hover:bg-orange-600/10 transition-all duration-300">
                <span className="flex items-center justify-center space-x-3 skew-x-6">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span>WATCH STORY</span>
                </span>
              </button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { value: '2.5K+', label: 'WARRIORS', icon: '💪' },
                { value: '50+', label: 'CLASSES/WEEK', icon: '🔥' },
                { value: '98%', label: 'STAY RATE', icon: '⚡' }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-4 transform -skew-x-6 group-hover:skew-x-0 transition-all duration-300 group-hover:border-orange-600">
                    <div className="skew-x-6 group-hover:skew-x-0 transition-transform duration-300">
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-2xl font-black text-orange-600">{stat.value}</div>
                      <div className="text-xs text-slate-400 font-bold tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Live Workout Visual + Countdown */}
          <div className="relative space-y-6">
            
            {/* Main Image with Angular Cut */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-600/30 to-emerald-500/30 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              <div className="relative overflow-hidden transform -skew-y-3 hover:skew-y-0 transition-all duration-500">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
                    alt="Athlete training with intensity"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  
                  {/* Live Indicator */}
                  <div className="absolute top-6 right-6 flex items-center space-x-2 bg-red-600 px-4 py-2 transform skew-y-3">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white font-black text-sm tracking-wider">LIVE NOW</span>
                  </div>

                  {/* Bottom Label */}
                  <div className="absolute bottom-6 left-6 right-6 transform skew-y-3">
                    <div className="bg-slate-900/90 backdrop-blur-sm border-l-4 border-orange-600 p-4">
                      <p className="text-slate-400 text-sm font-bold mb-1">CURRENT SESSION</p>
                      <p className="text-white text-xl font-black">HIIT WARRIOR CLASS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Countdown Timer Card */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-orange-600/30 p-6 transform -skew-x-3 hover:skew-x-0 transition-all duration-300 shadow-2xl">
              <div className="skew-x-3 hover:skew-x-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-slate-400 text-sm font-bold tracking-wider mb-1">NEXT CLASS STARTS IN</p>
                    <p className="text-white text-2xl font-black">{nextClassTime} PM</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-black text-orange-600">{getNextClassMinutes()}</div>
                    <div className="text-slate-400 text-xs font-bold tracking-wider">MINUTES</div>
                  </div>
                </div>

                <div className="h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-600 to-emerald-500 rounded-full transition-all duration-1000"
                    style={{ width: `${(60 - getNextClassMinutes()) / 60 * 100}%` }}
                  >
                    <div className="h-full bg-white/30 animate-pulse"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 overflow-hidden">
                          <Image
                            src={`https://i.pravatar.cc/150?img=${i + 10}`}
                            alt={`Member ${i}`}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="text-slate-400 text-sm font-bold">+{availableSpots} warriors joined</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-emerald-500 font-black text-sm">{availableSpots} SPOTS LEFT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🎯', label: 'BOOK CLASS', color: 'orange' },
                { icon: '💬', label: 'LIVE CHAT', color: 'emerald' }
              ].map((action, index) => (
                <button 
                  key={index}
                  className={`group bg-slate-800/80 backdrop-blur-sm border-2 ${
                    action.color === 'orange' ? 'border-orange-600/30 hover:border-orange-600' : 'border-emerald-500/30 hover:border-emerald-500'
                  } p-4 transform -skew-x-6 hover:skew-x-0 transition-all duration-300 hover:bg-slate-700`}
                >
                  <div className="skew-x-6 group-hover:skew-x-0 transition-transform duration-300 text-center">
                    <div className="text-3xl mb-2">{action.icon}</div>
                    <div className={`text-sm font-black tracking-wider ${
                      action.color === 'orange' ? 'text-orange-600' : 'text-emerald-500'
                    }`}>
                      {action.label}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 animate-bounce">
        <span className="text-slate-500 text-xs font-bold tracking-wider">SCROLL TO BEGIN</span>
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-orange-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}