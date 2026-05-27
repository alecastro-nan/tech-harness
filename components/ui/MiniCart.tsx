"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PrimaryActionButton } from "@/components/ui/PrimaryActionButton";
import { SecondActionButton } from "@/components/ui/SecondActionButton";
import { getCartItemCount, useCartStore } from "@/lib/cart-store";
import { convertToARS, formatARS } from "@/lib/currency";

export function MiniCart() {
  const [isOpen, setIsOpen] = useState(false);
  const hasHydrated = useCartStore((state) => state.hasHydrated);
  const items = useCartStore((state) => state.items);
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  const itemCount = getCartItemCount(items);
  const hasItems = itemCount > 0;
  const total = items.reduce(
    (acc, item) => acc + convertToARS(item.price) * item.quantity,
    0,
  );

  return (
    <>
      <button
        type="button"
        aria-label="Open cart drawer"
        onClick={() => setIsOpen(true)}
        className="relative inline-flex h-10 w-10 items-center justify-center border border-white/20 text-[var(--on-surface-variant)] transition-colors hover:border-primary hover:text-primary"
      >
        <span
          className={[
            "material-symbols-outlined transition-colors",
            hasItems ? "text-primary" : "text-[var(--on-surface-variant)]",
          ].join(" ")}
        >
          {hasItems ? "shopping_cart_checkout" : "shopping_cart"}
        </span>
        {itemCount > 0 ? (
          <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-secondary bg-secondary px-1 text-[10px] font-bold text-black">
            {itemCount}
          </span>
        ) : null}
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
          "fixed right-0 top-0 z-[70] flex h-[100dvh] w-full max-w-lg flex-col border-l border-white/10 bg-black/95 shadow-2xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <h2 className="text-lg uppercase tracking-[0.18em] text-white md:text-xl">
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

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="border-b border-white/10 bg-surface px-6 py-3 text-xs uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
            {hasHydrated
              ? `${itemCount} item${itemCount === 1 ? "" : "s"} active`
              : "Syncing cart..."}
          </div>

          <div className="min-h-0 max-h-[calc(100dvh-240px)] flex-1 space-y-4 overflow-y-auto px-6 py-5">
            {hasHydrated && items.length === 0 ? (
              <div className="flex h-full min-h-48 flex-col items-center justify-center border border-dashed border-white/15 bg-surface px-5 text-center">
                <p className="text-sm uppercase tracking-[0.18em] text-white">
                  Cart is empty
                </p>
                <p className="mt-2 text-xs text-[var(--on-surface-variant)]">
                  Add products from Home or Catalog to start your order.
                </p>
              </div>
            ) : null}

            {items.map((item) => (
              <article
                key={item.id}
                className="space-y-3 border border-white/15 bg-surface p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden border border-white/10 bg-black/50">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-[0.14em] text-[var(--on-surface-variant)]">
                          No img
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-sm uppercase tracking-[0.14em] text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--on-surface-variant)]">
                        Qty {item.quantity}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-xs uppercase tracking-[0.16em] text-[var(--on-surface-variant)] transition-colors hover:text-secondary"
                  >
                    Remove
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center border border-white/20">
                    <button
                      type="button"
                      onClick={() => decrementItem(item.id)}
                      className="inline-flex h-8 w-8 items-center justify-center text-white transition-colors hover:bg-white/10"
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      <span className="material-symbols-outlined text-base">
                        remove
                      </span>
                    </button>
                    <span className="inline-flex min-w-10 justify-center px-2 text-sm font-semibold text-white">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => incrementItem(item.id)}
                      className="inline-flex h-8 w-8 items-center justify-center text-white transition-colors hover:bg-white/10"
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      <span className="material-symbols-outlined text-base">
                        add
                      </span>
                    </button>
                  </div>

                  <p className="text-lg font-semibold text-primary">
                    {formatARS(convertToARS(item.price) * item.quantity)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-4 border-t border-white/10 bg-surface p-6">
          <div className="flex items-center justify-between text-sm text-[var(--on-surface-variant)]">
            <span>Total</span>
            <span className="text-xl font-semibold text-primary">
              {formatARS(total)}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <PrimaryActionButton
              href="/checkout"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              Checkout
            </PrimaryActionButton>

            <SecondActionButton
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              Return to Matrix
            </SecondActionButton>
          </div>

          <button
            type="button"
            onClick={clearCart}
            className="w-full border border-white/20 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[var(--on-surface-variant)] transition-colors hover:border-white/40 hover:text-white"
          >
            Clear Cart
          </button>
        </div>
      </aside>
    </>
  );
}
