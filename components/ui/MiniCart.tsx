"use client";

import { useEffect, useState } from "react";
import { convertToARS, formatARS } from "@/lib/currency";

type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

const mockItems: ReadonlyArray<CartItem> = [
  { id: "velocita-x1", name: "Velocita X-1", quantity: 1, price: 285 },
  { id: "compression-k12", name: "Compression K-12", quantity: 2, price: 45 },
];

export function MiniCart() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  const total = mockItems.reduce(
    (acc, item) => acc + convertToARS(item.price) * item.quantity,
    0,
  );

  return (
    <>
      <button
        type="button"
        aria-label="Open cart drawer"
        onClick={() => setIsOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-[var(--on-surface-variant)] transition-colors hover:border-primary hover:text-primary"
      >
        <span className="material-symbols-outlined">shopping_cart</span>
      </button>

      <button
        type="button"
        className={[
          "fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={() => setIsOpen(false)}
        aria-label="Close cart overlay"
      />

      <aside
        className={[
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-white/10 bg-surface transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="text-xl uppercase tracking-tight text-white">
            Access Node: Cart
          </h2>
          <button
            type="button"
            aria-label="Close cart drawer"
            onClick={() => setIsOpen(false)}
            className="text-[var(--on-surface-variant)] transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-6">
          {mockItems.map((item) => (
            <article
              key={item.id}
              className="border border-white/10 bg-black/40 p-4"
            >
              <h3 className="text-sm uppercase tracking-[0.18em] text-white">
                {item.name}
              </h3>
              <p className="mt-1 text-xs text-[var(--on-surface-variant)]">
                QTY {item.quantity}
              </p>
              <p className="mt-2 text-lg font-semibold text-primary">
                {formatARS(convertToARS(item.price) * item.quantity)}
              </p>
            </article>
          ))}
        </div>

        <div className="space-y-4 border-t border-white/10 p-6">
          <div className="flex items-center justify-between text-sm text-[var(--on-surface-variant)]">
            <span>Total</span>
            <span className="text-xl font-semibold text-primary">
              {formatARS(total)}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="neon-glow-primary neon-glow-primary-hover w-full bg-primary px-4 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-white"
          >
            Return to Matrix
          </button>
        </div>
      </aside>
    </>
  );
}
