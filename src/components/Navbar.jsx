import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';

const Navbar = ({ onCartOpen, onSearch, query, onQueryChange }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <Menu className="h-6 w-6 text-slate-600 md:hidden" />
          <a href="#" className="text-xl font-black tracking-tight">
            DuelMart
          </a>
        </div>

        <div className="hidden flex-1 items-center justify-center px-6 md:flex">
          <div className="relative w-full max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSearch();
              }}
              placeholder="Search cards, rarities, archetypes..."
              className="h-11 w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none ring-blue-500 transition focus:ring-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onCartOpen}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-slate-50"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden md:inline">Cart</span>
          </button>
        </div>
      </div>

      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSearch();
            }}
            placeholder="Search cards, rarities, archetypes..."
            className="h-11 w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none ring-blue-500 transition focus:ring-2"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
