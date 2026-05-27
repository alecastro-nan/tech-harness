"use client";

import { MiniCart } from "@/components/ui/MiniCart";
import { TopNav } from "@/components/ui/TopNav";
import { VerificationCodeInput } from "@/components/ui/VerificationCodeInput";
import { useCartStore } from "@/lib/cart-store";
import { convertToARS, formatARS } from "@/lib/currency";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const hasHydrated = useCartStore((state) => state.hasHydrated);
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  const removeItem = useCartStore((state) => state.removeItem);

  const subtotal = items.reduce(
    (acc, item) => acc + convertToARS(item.price) * item.quantity,
    0,
  );
  const savings = items.length > 0 ? convertToARS(15) : 0;
  const total = subtotal - savings;

  return (
    <div className="relative min-h-screen bg-black text-foreground">
      <div className="pointer-events-none fixed inset-0 cyber-grid opacity-30" />
      <TopNav active="checkout" actions={<MiniCart />} />

      <main className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 px-4 pb-40 pt-28 md:px-16 lg:grid-cols-2 lg:pb-20">
        <section className="border border-white/10 bg-surface p-5 md:p-6">
          <h1 className="mb-5 text-3xl uppercase">Order Protocol</h1>
          <div className="space-y-3">
            {hasHydrated && items.length === 0 ? (
              <article className="border border-dashed border-white/20 bg-black/30 p-5">
                <h2 className="text-sm uppercase tracking-[0.18em] text-white">
                  Cart is empty
                </h2>
                <p className="mt-2 text-xs text-[var(--on-surface-variant)]">
                  Add products from Home or Catalog before finalizing checkout.
                </p>
              </article>
            ) : null}

            {items.map((item) => (
              <article
                key={item.id}
                className="border border-white/10 bg-black/50 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-sm uppercase tracking-[0.18em]">
                      {item.name}
                    </h2>
                    <p className="mt-1 text-xs text-[var(--on-surface-variant)]">
                      Unit price: {formatARS(convertToARS(item.price))}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-xs uppercase tracking-[0.16em] text-[var(--on-surface-variant)] transition-colors hover:text-secondary"
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between gap-3">
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

                  <p className="text-lg text-primary">
                    {formatARS(convertToARS(item.price) * item.quantity)}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-[var(--on-surface-variant)]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatARS(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Logistics</span>
              <span>Calculated at next step</span>
            </div>
            <div className="mt-3 flex items-center justify-between border border-secondary/30 bg-secondary/10 px-3 py-2">
              <span className="text-xs uppercase tracking-[0.2em] text-secondary">
                System Savings
              </span>
              <span className="text-lg text-secondary">
                -{formatARS(savings)}
              </span>
            </div>
            <div className="mt-3 flex items-end justify-between">
              <span className="text-xl uppercase text-white">Total</span>
              <span className="text-4xl font-bold text-white">
                {formatARS(total)}
              </span>
            </div>
          </div>
        </section>

        <section className="space-y-6 border border-white/10 bg-surface p-5 md:p-6">
          <div>
            <h2 className="text-4xl uppercase">Guest Access</h2>
            <p className="mt-2 text-base text-[var(--on-surface-variant)]">
              Frictionless authentication. No permanent record required.
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="checkout-email"
                className="text-xs uppercase tracking-[0.2em] text-secondary"
              >
                Target Communication Vector (Email)
              </label>
              <div className="flex items-center border-b-2 border-white/20 bg-black/50 px-3 py-3 focus-within:border-secondary focus-within:shadow-neon-secondary">
                <span className="material-symbols-outlined mr-2 text-[var(--on-surface-variant)]">
                  mail
                </span>
                <input
                  id="checkout-email"
                  type="email"
                  placeholder="runner@cyber-net.co"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[var(--on-surface-variant)]"
                />
              </div>
            </div>

            <VerificationCodeInput />
          </form>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-black/90 p-4 backdrop-blur-md lg:absolute lg:bottom-6 lg:left-1/2 lg:right-auto lg:w-[min(500px,calc(100%-2rem))] lg:-translate-x-1/2 lg:border">
        <button
          type="button"
          className="neon-glow-primary neon-glow-primary-hover w-full bg-primary px-5 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-colors hover:bg-white"
        >
          Authenticate and Finalize
        </button>
      </div>
    </div>
  );
}
