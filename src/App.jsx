import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';

const MOCK_PRODUCTS = [
  {
    id: 'bp01',
    name: 'Blue-Eyes White Dragon (LOB-001) 1st Edition',
    price: 1299.99,
    rating: 5,
    reviews: 132,
    rarity: 'Ultra Rare',
    set: 'Legend of Blue Eyes White Dragon',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476f?q=80&w=1200&auto=format&fit=crop',
    tag: 'Iconic',
  },
  {
    id: 'dm02',
    name: 'Dark Magician (SDK-001)',
    price: 249.99,
    rating: 4.6,
    reviews: 87,
    rarity: 'Ultra Rare',
    set: 'Starter Deck: Kaiba',
    image:
      'https://images.unsplash.com/photo-1617050355283-6a287f2d354e?q=80&w=1200&auto=format&fit=crop',
    tag: 'Fan Favorite',
  },
  {
    id: 'as03',
    name: 'Ash Blossom & Joyous Spring (DUDE-EN043)',
    price: 29.99,
    rating: 4.8,
    reviews: 420,
    rarity: 'Ultra Rare',
    set: 'Duel Devastator',
    image:
      'https://images.unsplash.com/photo-1609951651739-5d69d0b8e872?q=80&w=1200&auto=format&fit=crop',
    tag: 'Meta',
  },
  {
    id: 'ip04',
    name: 'I:P Masquerena (OP19-EN001) Ultimate Rare',
    price: 159.99,
    rating: 4.9,
    reviews: 210,
    rarity: 'Ultimate Rare',
    set: 'OTS Tournament Pack 19',
    image:
      'https://images.unsplash.com/photo-1587385789096-0197a7b9b43b?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MOCK_PRODUCTS;
    return MOCK_PRODUCTS.filter((p) =>
      [p.name, p.rarity, p.set].some((f) => f.toLowerCase().includes(q))
    );
  }, [query]);

  const addToCart = (product) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id) => setItems((prev) => prev.filter((p) => p.id !== id));

  const checkout = () => {
    alert('Checkout demo — connect payment later.');
    setItems([]);
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar
        onCartOpen={() => setCartOpen(true)}
        onSearch={() => {}}
        query={query}
        onQueryChange={setQuery}
      />
      <Hero />

      <main id="catalog" className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Singles</h2>
          <a href="#sell" className="text-sm font-medium text-indigo-600 hover:underline">Sell your cards</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} />
          ))}
        </div>

        <section id="sell" className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h3 className="text-xl font-bold">Sell your collection</h3>
          <p className="mt-2 text-slate-600">Create a listing in minutes. Add photos, set your price, and reach buyers worldwide.</p>
          <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <input className="h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none ring-indigo-500 focus:ring-2" placeholder="Card name" />
            <input className="h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none ring-indigo-500 focus:ring-2" placeholder="Set code (e.g., LOB-001)" />
            <input className="h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none ring-indigo-500 focus:ring-2" placeholder="Rarity" />
            <input type="number" className="h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none ring-indigo-500 focus:ring-2" placeholder="Price (USD)" />
            <div className="md:col-span-2">
              <input className="h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none ring-indigo-500 focus:ring-2" placeholder="Image URL" />
            </div>
            <div className="md:col-span-2 flex items-center justify-end gap-3">
              <button type="reset" className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium">Clear</button>
              <button type="button" className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">Create listing</button>
            </div>
          </form>
        </section>
      </main>

      <footer className="mt-16 border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} DuelMart. Not affiliated with Konami. Images for demo only.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Support</a>
          </div>
        </div>
      </footer>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        onRemove={removeFromCart}
        onCheckout={checkout}
      />
    </div>
  );
}
