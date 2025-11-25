'use client';

import Image from 'next/image';
import { Dumbbell, Users, Trophy, Calendar, Flame, Zap, Target, Award, Clock, TrendingUp, Heart, Shield } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [liveCapacity] = useState(67); // Simulated live capacity

  const trainers = [
    {
      name: 'Marcus "Tank" Rivera',
      image: 'https://i.pravatar.cc/400?img=12',
      record: 'Deadlift: 705 lbs',
      quote: 'Pain is temporary, pride is forever',
      specialty: 'Strength & Conditioning'
    },
    {
      name: 'Sarah Chen',
      image: 'https://i.pravatar.cc/400?img=45',
      record: 'Clean & Jerk: 285 lbs',
      quote: 'Strong is the new beautiful',
      specialty: 'Olympic Lifting'
    },
    {
      name: 'Devon "Apex" Jackson',
      image: 'https://i.pravatar.cc/400?img=33',
      record: 'Bench Press: 495 lbs',
      quote: 'Outwork your excuses',
      specialty: 'Powerlifting'
    }
  ];

  const classes = [
    { name: 'Iron Warriors', time: '6:00 AM', spots: 3, total: 15, intensity: 'high' },
    { name: 'Core Forge', time: '9:30 AM', spots: 8, total: 20, intensity: 'medium' },
    { name: 'Battle Ropes', time: '12:00 PM', spots: 12, total: 15, intensity: 'high' },
    { name: 'Strength Foundations', time: '5:30 PM', spots: 2, total: 12, intensity: 'medium' },
    { name: 'Evening Grind', time: '7:00 PM', spots: 0, total: 20, intensity: 'high' }
  ];

  const memberships = [
    {
      tier: 'WARRIOR',
      price: 49,
      features: ['24/7 Access', 'Basic Equipment', 'Locker Room', 'Mobile App'],
      color: 'slate'
    },
    {
      tier: 'GLADIATOR',
      price: 89,
      features: ['Everything in Warrior', '2 PT Sessions/month', 'All Classes', 'Nutrition Guide', 'Recovery Zone'],
      color: 'orange',
      popular: true
    },
    {
      tier: 'TITAN',
      price: 149,
      features: ['Everything in Gladiator', 'Unlimited PT Sessions', 'Meal Planning', 'Priority Booking', 'Guest Passes', 'Sauna Access'],
      color: 'emerald'
    }
  ];

  const transformations = [
    {
      name: 'Jake Morrison',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
      duration: '6 months',
      achievement: 'Lost 45 lbs, Gained Confidence',
      stats: '-45 lbs | +30 lbs muscle'
    },
    {
      name: 'Aisha Patel',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80',
      duration: '4 months',
      achievement: 'First Powerlifting Competition',
      stats: '405 lb deadlift PR'
    }
  ];

  return (
    <section id="services" className="relative min-h-screen bg-slate-900 py-24 overflow-hidden">
      {/* Industrial Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      {/* Live Capacity Indicator - Pulsing Energy */}
      <div className="absolute top-8 right-8 z-20">
        <div className="bg-slate-800/90 backdrop-blur-sm border-2 border-orange-600 rounded-lg px-6 py-4 flex items-center gap-4">
          <div className="relative">
            <Flame className={`w-8 h-8 text-orange-600 ${liveCapacity > 60 ? 'animate-pulse' : ''}`} />
            {liveCapacity > 60 && (
              <div className="absolute inset-0 animate-ping">
                <Flame className="w-8 h-8 text-orange-600 opacity-75" />
              </div>
            )}
          </div>
          <div>
            <div className="text-white font-bold text-2xl">{liveCapacity}%</div>
            <div className="text-slate-400 text-xs uppercase tracking-wider">Live Capacity</div>
          </div>
          <div className="flex flex-col gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`h-1 w-12 rounded-full ${
                  i < Math.floor(liveCapacity / 20) ? 'bg-orange-600' : 'bg-slate-700'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-orange-600/20 border border-orange-600/50 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 text-orange-600" />
            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Arsenal of Gains</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-4">
            YOUR <span className="text-orange-600">WEAPONS</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Everything you need to forge an unstoppable version of yourself
          </p>
        </div>

        {/* Asymmetrical Bento Grid - Equipment Rack Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 max-w-7xl mx-auto">
          
          {/* LARGE CARD - Live Class Schedule (Barbell Shape) */}
          <div 
            className="col-span-12 lg:col-span-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border-2 border-slate-700 hover:border-orange-600 transition-all duration-500 group"
            onMouseEnter={() => setHoveredCard('schedule')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-full p-8">
              {/* Diagonal Cut Background */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/5 transform skew-x-12 translate-x-1/4"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-orange-600 rounded-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white">LIVE CLASS SCHEDULE</h3>
                    <p className="text-slate-400">Real-time availability • Book instantly</p>
                  </div>
                </div>

                <div className="grid gap-3">
                  {classes.map((cls, idx) => (
                    <div 
                      key={idx}
                      className="group/class bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-orange-600 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-2 h-12 rounded-full ${
                            cls.intensity === 'high' ? 'bg-orange-600' : 'bg-emerald-500'
                          }`}></div>
                          <div>
                            <h4 className="text-white font-bold text-lg">{cls.name}</h4>
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                              <Clock className="w-4 h-4" />
                              <span>{cls.time}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${
                            cls.spots === 0 ? 'text-red-500' : cls.spots < 5 ? 'text-orange-600' : 'text-emerald-500'
                          }`}>
                            {cls.spots}
                          </div>
                          <div className="text-slate-500 text-xs">/ {cls.total} spots</div>
                          {cls.spots === 0 ? (
                            <div className="mt-2 px-3 py-1 bg-red-500/20 border border-red-500 rounded-full text-red-500 text-xs font-bold">
                              FULL
                            </div>
                          ) : (
                            <button className="mt-2 px-3 py-1 bg-orange-600 hover:bg-orange-700 rounded-full text-white text-xs font-bold transition-colors">
                              BOOK
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trainer Spotlight - Kettlebell Shape */}
          <div 
            className="col-span-12 lg:col-span-4 bg-slate-800 rounded-3xl overflow-hidden border-2 border-slate-700 hover:border-emerald-500 transition-all duration-500 group"
            onMouseEnter={() => setHoveredCard('trainers')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-emerald-500" />
                  <h3 className="text-2xl font-black text-white">ELITE TRAINERS</h3>
                </div>

                <div className="space-y-4">
                  {trainers.map((trainer, idx) => (
                    <div 
                      key={idx}
                      className="group/trainer bg-slate-900/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500 flex-shrink-0">
                          <Image
                            src={trainer.image}
                            alt={trainer.name}
                            fill
                            className="object-cover group-hover/trainer:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold truncate">{trainer.name}</h4>
                          <p className="text-emerald-500 text-xs font-semibold">{trainer.specialty}</p>
                          
                          {/* Hover reveals stats */}
                          <div className="mt-2 max-h-0 group-hover/trainer:max-h-24 overflow-hidden transition-all duration-300">
                            <div className="pt-2 border-t border-slate-700">
                              <div className="flex items-center gap-2 text-orange-600 text-xs font-bold mb-1">
                                <Trophy className="w-3 h-3" />
                                {trainer.record}
                              </div>
                              <p className="text-slate-400 text-xs italic">"{trainer.quote}"</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Membership Tiers - Dumbbell Arrangement */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-slate-800 rounded-3xl p-8 border-2 border-slate-700 hover:border-orange-600 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-8 h-8 text-orange-600" />
                <h3 className="text-3xl font-black text-white">CHOOSE YOUR PATH</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {memberships.map((membership, idx) => (
                  <div 
                    key={idx}
                    className={`relative bg-slate-900 rounded-2xl p-6 border-2 transform hover:-translate-y-2 transition-all duration-300 ${
                      membership.popular 
                        ? 'border-orange-600 scale-105' 
                        : 'border-slate-700 hover:border-' + membership.color + '-500'
                    }`}
                  >
                    {membership.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <div className="bg-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h4 className={`text-${membership.color}-500 font-black text-xl mb-2`}>
                        {membership.tier}
                      </h4>
                      <div className="flex items-end justify-center gap-1">
                        <span className="text-white text-5xl font-black">${membership.price}</span>
                        <span className="text-slate-500 text-lg mb-2">/mo</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {membership.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-slate-300 text-sm">
                          <Zap className={`w-4 h-4 text-${membership.color}-500 flex-shrink-0 mt-0.5`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full mt-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                      membership.popular
                        ? 'bg-orange-600 hover:bg-orange-700 text-white'
                        : `bg-slate-800 hover:bg-${membership.color}-600 text-${membership.color}-500 hover:text-white border border-slate-700`
                    }`}>
                      START NOW
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transformation Stories - Weight Plate Shape */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-3xl overflow-hidden border-2 border-orange-500 h-full">
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                  <h3 className="text-3xl font-black text-white">PROVEN RESULTS</h3>
                </div>

                <div className="flex-1 space-y-4">
                  {transformations.map((story, idx) => (
                    <div 
                      key={idx}
                      className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex gap-4 p-4">
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-white/30 flex-shrink-0">
                          <Image
                            src={story.image}
                            alt={story.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-lg">{story.name}</h4>
                          <p className="text-orange-100 text-sm mb-2">{story.achievement}</p>
                          <div className="flex items-center gap-2 text-white/80 text-xs">
                            <Clock className="w-3 h-3" />
                            {story.duration}
                          </div>
                          <div className="mt-2 inline-block bg-white/20 px-3 py-1 rounded-full text-white text-xs font-bold">
                            {story.stats}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 py-4 bg-white text-orange-600 rounded-xl font-black text-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 group">
                  <span>VIEW ALL STORIES</span>
                  <Heart className="w-5 h-5 group-hover:fill-current transition-all" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats - Small Equipment Cards */}
          <div className="col-span-6 md:col-span-3">
            <div className="bg-emerald-500 rounded-2xl p-6 text-center transform hover:rotate-2 transition-transform duration-300 border-2 border-emerald-400">
              <Users className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-4xl font-black text-white mb-1">500+</div>
              <div className="text-emerald-100 font-semibold text-sm uppercase">Active Warriors</div>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="bg-slate-800 rounded-2xl p-6 text-center transform hover:-rotate-2 transition-transform duration-300 border-2 border-slate-700 hover:border-orange-600">
              <Dumbbell className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <div className="text-4xl font-black text-white mb-1">24/7</div>
              <div className="text-slate-400 font-semibold text-sm uppercase">Always Open</div>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="bg-orange-600 rounded-2xl p-6 text-center transform hover:rotate-2 transition-transform duration-300 border-2 border-orange-500">
              <Target className="w-12 h-12 text-white mx-auto mb-3" />
              <div className="text-4xl font-black text-white mb-1">15+</div>
              <div className="text-orange-100 font-semibold text-sm uppercase">Class Types</div>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="bg-slate-800 rounded-2xl p-6 text-center transform hover:-rotate-2 transition-transform duration-300 border-2 border-slate-700 hover:border-emerald-500">
              <Trophy className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
              <div className="text-4xl font-black text-white mb-1">98%</div>
              <div className="text-slate-400 font-semibold text-sm uppercase">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full px-8 py-5 border-2 border-orange-500 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <span className="text-white font-black text-2xl">START YOUR TRANSFORMATION</span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Equipment Icons */}
      <div className="absolute bottom-10 left-10 opacity-10 animate-bounce">
        <Dumbbell className="w-32 h-32 text-orange-600 transform -rotate-45" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-5 animate-pulse">
        <Target className="w-40 h-40 text-slate-700" />
      </div>
    </section>
  );
}