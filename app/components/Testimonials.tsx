'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Testimonials() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      age: 28,
      journey: "3 Months",
      avatar: "https://i.pravatar.cc/150?img=47",
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80",
      level: "Beginner Victory",
      quote: "I walked in terrified of the weights section. Now I'm the one giving encouraging nods to newcomers.",
      metrics: {
        weightLifted: "95 lbs → 185 lbs deadlift",
        classesCompleted: 47,
        confidenceBefore: 3,
        confidenceAfter: 9
      },
      story: "Started with just bodyweight exercises in the corner. The community here never made me feel judged. Now I'm training for my first powerlifting meet and I've found a strength I didn't know existed - mentally and physically.",
      color: "from-orange-600 to-orange-700"
    },
    {
      id: 2,
      name: "Marcus Rivera",
      age: 35,
      journey: "8 Months",
      avatar: "https://i.pravatar.cc/150?img=12",
      beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=800&q=80",
      level: "Intermediate Breakthrough",
      quote: "Lost 45 pounds, but gained something more valuable - a routine that actually fits my chaotic life.",
      metrics: {
        weightLifted: "225 lbs → 315 lbs squat",
        classesCompleted: 132,
        confidenceBefore: 4,
        confidenceAfter: 9
      },
      story: "Corporate burnout had me at my heaviest. FitForce's 5am crew became my therapy. The trainers adapted everything around my travel schedule. Now my kids say I'm 'the strong dad' and honestly, that hits different.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: 3,
      name: "Tasha Williams",
      age: 42,
      journey: "14 Months",
      avatar: "https://i.pravatar.cc/150?img=38",
      beforeImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
      level: "Advanced Warrior",
      quote: "They told me 40+ meant slowing down. FitForce taught me I was just getting started.",
      metrics: {
        weightLifted: "135 lbs → 265 lbs bench press",
        classesCompleted: 287,
        confidenceBefore: 5,
        confidenceAfter: 10
      },
      story: "Competed in my first CrossFit competition at 42. Set a gym record for my age group. The industrial vibe here reminds me daily that we're all forging something - our best selves. This place doesn't coddle you, it empowers you.",
      color: "from-slate-700 to-slate-800"
    }
  ];

  const handleCardClick = (id: number) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Industrial Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
        }}></div>
      </div>

      {/* Diagonal Accent Strips */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-600/10 to-transparent transform rotate-45 translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-500/10 to-transparent transform -rotate-45 -translate-x-48 translate-y-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 bg-slate-800/50 px-6 py-3 rounded-full border-2 border-orange-600/30">
              <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
              <span className="text-orange-600 font-bold text-sm tracking-wider uppercase">Transformation Timeline</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-600 to-emerald-500">
              Forged Warriors
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real people. Real transformations. Real strength built from the inside out.
          </p>
          
          {/* Progress Timeline Bar */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-emerald-500 to-slate-700 rounded-full"></div>
            </div>
            <div className="flex justify-between mt-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Advanced</span>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative perspective-1000"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Container */}
              <div
                className={`relative h-[600px] cursor-pointer transition-transform duration-700 transform-style-3d ${
                  flippedCard === testimonial.id ? 'rotate-y-180' : ''
                }`}
                onClick={() => handleCardClick(testimonial.id)}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCard === testimonial.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* FRONT SIDE - Before/After Preview */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="h-full bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-orange-600/50 transition-all duration-300 shadow-2xl group-hover:shadow-orange-600/20">
                    {/* Level Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className={`bg-gradient-to-r ${testimonial.color} px-4 py-2 rounded-lg text-white font-bold text-xs uppercase tracking-wider shadow-lg clip-path-diagonal`}>
                        {testimonial.level}
                      </div>
                    </div>

                    {/* Flip Indicator */}
                    <div className="absolute top-4 right-4 z-20 bg-slate-900/80 backdrop-blur-sm p-2 rounded-full border border-orange-600/50 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>

                    {/* Split Before/After Images */}
                    <div className="relative h-64 overflow-hidden">
                      {/* Before (Left Half) */}
                      <div className="absolute inset-0 w-1/2 left-0 grayscale opacity-70">
                        <Image
                          src={testimonial.beforeImage}
                          alt={`${testimonial.name} before`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900"></div>
                        <div className="absolute bottom-2 left-2 bg-slate-900/90 px-2 py-1 rounded text-xs font-bold text-slate-400">
                          BEFORE
                        </div>
                      </div>
                      
                      {/* After (Right Half) */}
                      <div className="absolute inset-0 w-1/2 right-0">
                        <Image
                          src={testimonial.afterImage}
                          alt={`${testimonial.name} after`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900"></div>
                        <div className="absolute bottom-2 right-2 bg-orange-600 px-2 py-1 rounded text-xs font-bold text-white">
                          AFTER
                        </div>
                      </div>

                      {/* Center Divider */}
                      <div className="absolute inset-y-0 left-1/2 w-1 bg-gradient-to-b from-orange-600 via-emerald-500 to-orange-600 transform -translate-x-1/2 shadow-lg shadow-orange-600/50"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Avatar & Name */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-orange-600 shadow-lg shadow-orange-600/30">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center border-2 border-slate-800">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-white">{testimonial.name}</h3>
                          <p className="text-sm text-slate-400">{testimonial.age} • {testimonial.journey}</p>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="relative">
                        <svg className="absolute -top-2 -left-2 w-8 h-8 text-orange-600/20" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                        </svg>
                        <p className="text-white font-medium leading-relaxed pl-6 italic">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Key Metrics Preview */}
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t-2 border-slate-700">
                        <div className="text-center bg-slate-900/50 rounded-lg p-3">
                          <div className="text-2xl font-black text-orange-600">{testimonial.metrics.classesCompleted}</div>
                          <div className="text-xs text-slate-400 uppercase font-bold">Sessions</div>
                        </div>
                        <div className="text-center bg-slate-900/50 rounded-lg p-3">
                          <div className="text-2xl font-black text-emerald-500">
                            {testimonial.metrics.confidenceAfter}/10
                          </div>
                          <div className="text-xs text-slate-400 uppercase font-bold">Confidence</div>
                        </div>
                      </div>

                      {/* Click to Flip Hint */}
                      <div className="text-center pt-2">
                        <span className="text-xs text-slate-500 uppercase tracking-wider font-bold group-hover:text-orange-600 transition-colors">
                          Click to reveal full story →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BACK SIDE - Full Story */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className={`h-full bg-gradient-to-br ${testimonial.color} rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl`}>
                    <div className="h-full p-8 flex flex-col justify-between relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,.1) 20px, rgba(255,255,255,.1) 40px)`
                        }}></div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 space-y-6">
                        {/* Header */}
                        <div className="text-center">
                          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              width={80}
                              height={80}
                              className="object-cover"
                            />
                          </div>
                          <h3 className="text-2xl font-black text-white mb-1">{testimonial.name}</h3>
                          <p className="text-white/80 font-bold">{testimonial.level}</p>
                        </div>

                        {/* Story */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <p className="text-white leading-relaxed font-medium">
                            {testimonial.story}
                          </p>
                        </div>

                        {/* Detailed Metrics */}
                        <div className="space-y-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white/80 text-sm font-bold uppercase">Strength Gain</span>
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M4 8V6a6 6 0 0112 0v2h1a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8a2 2 0 012-2h1zm6-4a4 4 0 00-4 4v2h8V8a4 4 0 00-4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="text-white font-black text-lg">{testimonial.metrics.weightLifted}</p>
                          </div>

                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-white/80 text-sm font-bold uppercase">Confidence Growth</span>
                            </div>
                            <div className="flex gap-1">
                              {[...Array(10)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-8 flex-1 rounded ${
                                    i < testimonial.metrics.confidenceAfter
                                      ? 'bg-white shadow-lg'
                                      : i < testimonial.metrics.confidenceBefore
                                      ? 'bg-white/20'
                                      : 'bg-white/10'
                                  }`}
                                ></div>
                              ))}
                            </div>
                            <div className="flex justify-between mt-2 text-xs text-white/70 font-bold">
                              <span>Before: {testimonial.metrics.confidenceBefore}</span>
                              <span>After: {testimonial.metrics.confidenceAfter}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Click to Flip Back */}
                      <div className="relative z-10 text-center">
                        <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-full border-2 border-white/40 transition-all uppercase text-sm tracking-wider shadow-lg">
                          ← Back to Preview
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Lift Shadow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl transform group-hover:-translate-y-2 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-orange-600/30">
            <h3 className="text-3xl font-black text-white mb-4">
              Ready to Write Your Story?
            </h3>
            <p className="text-slate-300 mb-6 max-w-lg mx-auto">
              Every warrior starts somewhere. Your transformation begins with a single decision.
            </p>
            <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-black py-4 px-8 rounded-lg shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all transform hover:scale-105 uppercase tracking-wider">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Additional Geometric Accents */}
      <div className="absolute top-1/4 left-8 w-16 h-16 border-4 border-emerald-500/20 transform rotate-45"></div>
      <div className="absolute bottom-1/4 right-8 w-20 h-20 border-4 border-orange-600/20 transform rotate-12"></div>
    </section>
  );
}
