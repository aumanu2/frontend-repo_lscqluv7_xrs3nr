import React from 'react';
import { Star } from 'lucide-react';

const formatPrice = (price) => `$${price.toFixed(2)}`;

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover transition group-hover:scale-[1.02]"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white shadow">
            {product.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-1 text-xs text-slate-500">{product.rarity} • {product.set}</p>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'fill-current' : 'fill-transparent'} `} />
          ))}
          <span className="ml-1 text-xs text-slate-500">({product.reviews})</span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-lg font-bold">{formatPrice(product.price)}</span>
          <button
            onClick={() => onAdd(product)}
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
