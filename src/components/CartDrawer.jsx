import React from 'react';

const formatPrice = (n) => `$${n.toFixed(2)}`;

const CartDrawer = ({ open, onClose, items, onRemove, onCheckout }) => {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-slate-200 p-4">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={onClose} className="rounded-full border border-slate-200 px-3 py-1 text-sm">Close</button>
        </div>
        <div className="flex h-[calc(100%-160px)] flex-col overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-slate-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((it) => (
                <li key={it.id} className="flex items-center gap-3">
                  <img src={it.image} alt={it.name} className="h-16 w-16 rounded object-cover" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{it.name}</p>
                    <p className="text-xs text-slate-500">Qty: {it.qty}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{formatPrice(it.price * it.qty)}</p>
                    <button onClick={() => onRemove(it.id)} className="text-xs text-rose-600 hover:underline">Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-slate-200 p-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-semibold">{formatPrice(subtotal)}</span>
          </div>
          <button
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CartDrawer;
