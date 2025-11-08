import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-700">
            <Sparkles className="h-4 w-4" />
            New: 2025 Meta Staples just landed
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Buy & sell Yu-Gi-Oh! cards with confidence
          </h1>
          <p className="mt-4 max-w-prose text-slate-600">
            Browse singles, sealed products, and deck cores. Verified sellers, secure checkout, and fast shipping. Power up your deck today.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#catalog" className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700">
              Shop featured cards
            </a>
            <a href="#sell" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
              Sell your cards
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl" aria-hidden />
          <img
            src="https://images.unsplash.com/photo-1556741533-f6acd6478e0e?q=80&w=1200&auto=format&fit=crop"
            alt="Yu-Gi-Oh! cards"
            className="relative z-10 w-full rounded-2xl border border-slate-200 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
