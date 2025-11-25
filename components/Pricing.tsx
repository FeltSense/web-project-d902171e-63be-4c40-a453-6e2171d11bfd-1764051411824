"use client";

import Image from "next/image";
import { useState } from "react";

export default function Pricing() {
  const [selectedWeight, setSelectedWeight] = useState(45);
  const [isCalculating, setIsCalculating] = useState(false);

  const weightTiers = [
    {
      weight: 25,
      name: "STARTER PLATE",
      subtitle: "Foundation Builder",
      price: 29,
      features: [
        "Unlimited 24/7 gym access",
        "All equipment & free weights",
        "Locker room & showers",
        "Mobile app workout tracking",
        "Community group challenges",
      ],
      plateColor: "from-slate-600 to-slate-800",
      glowColor: "group-hover:shadow-slate-500/50",
    },
    {
      weight: 45,
      name: "FORCE PLATE",
      subtitle: "Power Developer",
      price: 29,
      features: [
        "Everything in Starter +",
        "2 personal training sessions/month",
        "Nutrition planning consultation",
        "Recovery zone access (sauna/cold plunge)",
        "Guest passes (4/month)",
        "Priority equipment reservation",
      ],
      plateColor: "from-orange-600 to-orange-800",
      glowColor: "group-hover:shadow-orange-500/50",
      popular: true,
    },
    {
      weight: 100,
      name: "ELITE OLYMPIC",
      subtitle: "Warrior Status",
      price: 29,
      features: [
        "Everything in Force +",
        "Unlimited personal training",
        "Custom meal prep delivery weekly",
        "Private training pod access",
        "Bring unlimited guests",
        "Supplement stack included",
        "Body composition scan monthly",
        "FitForce apparel package",
      ],
      plateColor: "from-emerald-600 to-emerald-800",
      glowColor: "group-hover:shadow-emerald-500/50",
    },
  ];

  const handleWeightSelect = (weight: number) => {
    setIsCalculating(true);
    setSelectedWeight(weight);
    setTimeout(() => setIsCalculating(false), 600);
  };

  const calculateValue = () => {
    const baseValue = selectedWeight === 25 ? 79 : selectedWeight === 45 ? 149 : 299;
    return baseValue;
  };

  return (
    <section id="pricing" className="relative bg-slate-900 py-24 overflow-hidden">
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Diagonal Cut Accent */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-orange-600/20 to-transparent transform -skew-y-2"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-tl from-emerald-500/20 to-transparent transform skew-y-2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with Barbell Visual */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 text-orange-600 font-bold tracking-wider text-sm mb-2">
              <div className="w-8 h-0.5 bg-orange-600"></div>
              LOAD YOUR JOURNEY
              <div className="w-8 h-0.5 bg-orange-600"></div>
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            ONE PRICE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-emerald-500">
              INFINITE STRENGTH.
            </span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            No games. No tiers. Just <span className="text-orange-600 font-bold">$29/month</span> for everything you need to become unstoppable.
          </p>
        </div>

        {/* Interactive Barbell Weight Selector */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-800/50 backdrop-blur border-2 border-slate-700 rounded-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              🏋️ CHOOSE YOUR COMMITMENT LEVEL
            </h3>
            
            {/* Barbell Visual */}
            <div className="flex items-center justify-center gap-4 mb-8">
              {/* Left End Cap */}
              <div className="w-4 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-l-lg"></div>
              
              {/* Weight Plates */}
              {weightTiers.map((tier, index) => (
                <button
                  key={tier.weight}
                  onClick={() => handleWeightSelect(tier.weight)}
                  className={`group relative transition-all duration-500 ${
                    selectedWeight === tier.weight
                      ? 'scale-110 z-20'
                      : 'scale-100 opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Plate */}
                  <div className={`
                    w-20 h-20 md:w-24 md:h-24 rounded-full 
                    bg-gradient-to-br ${tier.plateColor}
                    border-4 ${selectedWeight === tier.weight ? 'border-white' : 'border-slate-600'}
                    shadow-xl ${tier.glowColor}
                    flex flex-col items-center justify-center
                    transition-all duration-500
                    ${isCalculating && selectedWeight === tier.weight ? 'animate-pulse' : ''}
                  `}>
                    <div className="text-white font-black text-2xl">{tier.weight}</div>
                    <div className="text-white/80 text-xs font-bold">LBS</div>
                  </div>
                  
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                      MOST POPULAR
                    </div>
                  )}
                </button>
              ))}
              
              {/* Center Bar */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2/3 h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 -z-10 rounded-full"></div>
              
              {/* Right End Cap */}
              <div className="w-4 h-16 bg-gradient-to-l from-slate-600 to-slate-700 rounded-r-lg"></div>
            </div>

            {/* Value Calculator */}
            <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-600">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-slate-400 text-sm font-semibold mb-2">TYPICAL MARKET VALUE</div>
                  <div className="text-3xl font-black text-slate-500 line-through">
                    ${calculateValue()}
                    <span className="text-lg">/mo</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-orange-600 text-4xl font-black animate-pulse">→</div>
                </div>
                <div>
                  <div className="text-emerald-500 text-sm font-semibold mb-2">YOUR PRICE TODAY</div>
                  <div className="text-5xl font-black text-white">
                    $29
                    <span className="text-lg text-slate-400">/mo</span>
                  </div>
                  <div className="text-emerald-500 text-sm font-bold mt-1">
                    SAVE ${calculateValue() - 29}/MONTH
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Single Unified Pricing Card - Premium Design */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Animated Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-emerald-500 to-orange-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            
            {/* Main Card */}
            <div className="relative bg-slate-800 border-2 border-slate-700 rounded-3xl overflow-hidden">
              {/* Header Section */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 border-b-2 border-orange-600">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <div className="inline-block bg-orange-600 text-white text-xs font-black px-4 py-1 rounded-full mb-3">
                      🔥 WARRIOR ACCESS - ALL LEVELS
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-2">
                      FITFORCE UNLIMITED
                    </h3>
                    <p className="text-slate-400 text-lg">
                      Everything. Everyone. One unstoppable community.
                    </p>
                  </div>
                  <div className="text-center bg-slate-900/50 px-8 py-6 rounded-2xl border-2 border-orange-600/30">
                    <div className="text-slate-400 text-sm font-semibold mb-1">ONLY</div>
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-emerald-500">
                      $29
                    </div>
                    <div className="text-slate-400 text-sm mt-1">per month</div>
                    <div className="text-emerald-500 text-xs font-bold mt-2">
                      Cancel anytime • No commitment
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Column 1 - Foundation */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-6 bg-orange-600"></div>
                      <h4 className="text-xl font-black text-white">FOUNDATION ACCESS</h4>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "🔓 Unlimited 24/7 gym access",
                        "🏋️ All equipment & free weights",
                        "🚿 Premium locker rooms & showers",
                        "📱 Mobile app workout tracking",
                        "🏆 Community group challenges",
                        "🎯 Goal setting & progress tracking"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 group/item hover:text-white transition-colors">
                          <span className="text-emerald-500 text-xl flex-shrink-0 group-hover/item:scale-125 transition-transform">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2 - Elite Features */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-6 bg-emerald-500"></div>
                      <h4 className="text-xl font-black text-white">ELITE PERKS</h4>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "👨‍🏫 2 Personal training sessions/month",
                        "🥗 Nutrition planning consultation",
                        "♨️ Recovery zone (sauna/cold plunge)",
                        "👥 4 Guest passes monthly",
                        "⚡ Priority equipment reservation",
                        "📊 Body composition assessments"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 group/item hover:text-white transition-colors">
                          <span className="text-emerald-500 text-xl flex-shrink-0 group-hover/item:scale-125 transition-transform">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bonus Section */}
                <div className="bg-gradient-to-r from-orange-600/10 to-emerald-500/10 border-2 border-orange-600/30 rounded-xl p-6 mb-8">
                  <h4 className="text-lg font-black text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎁</span>
                    BONUS: JOIN TODAY & GET
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">👕</div>
                      <div className="text-white font-bold text-sm">FitForce Welcome Kit</div>
                      <div className="text-slate-400 text-xs">$50 value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">🎯</div>
                      <div className="text-white font-bold text-sm">Free Goal Assessment</div>
                      <div className="text-slate-400 text-xs">$75 value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">📸</div>
                      <div className="text-white font-bold text-sm">Progress Photo Package</div>
                      <div className="text-slate-400 text-xs">$40 value</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white font-black text-xl py-6 rounded-xl transform hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-orange-600/50 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    🚀 START YOUR TRANSFORMATION - $29/MONTH
                  </span>
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                </button>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-slate-400 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 text-lg">✓</span>
                    <span>Cancel anytime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 text-lg">✓</span>
                    <span>No signup fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 text-lg">✓</span>
                    <span>First week satisfaction guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-slate-800/30 backdrop-blur border border-slate-700 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-around gap-6 text-center">
              <div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-emerald-500">
                  2,847+
                </div>
                <div className="text-slate-400 text-sm font-semibold">Active Warriors</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-slate-700"></div>
              <div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-emerald-500">
                  4.9★
                </div>
                <div className="text-slate-400 text-sm font-semibold">Average Rating</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-slate-700"></div>
              <div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-emerald-500">
                  94%
                </div>
                <div className="text-slate-400 text-sm font-semibold">Hit Their Goals</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Push Section */}
        <div className="text-center mt-16">
          <div className="inline-block bg-slate-800/50 backdrop-blur border-2 border-slate-700 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              STILL CALCULATING? <span className="text-orange-600">HERE'S THE MATH.</span>
            </h3>
            <div className="text-slate-300 text-lg space-y-2 mb-6">
              <p>☕ That's <span className="text-orange-600 font-bold">less than 1 coffee per day</span></p>
              <p>🍔 Same as <span className="text-orange-600 font-bold">2 fast food meals</span></p>
              <p>🎬 Cheaper than <span className="text-orange-600 font-bold">most streaming services</span></p>
            </div>
            <p className="text-white text-xl font-bold">
              But worth? <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-emerald-500">PRICELESS.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
