import { TopNav } from "@/components/ui/TopNav";
import { VerificationCodeInput } from "@/components/ui/VerificationCodeInput";
import { convertToARS, formatARS } from "@/lib/currency";

const orderItems = [
  {
    id: "aero-stride",
    name: "Aero-Stride Pro V4",
    meta: "Size 10.5 | Core: Carbon",
    quantity: 1,
    price: 285,
  },
  {
    id: "compression-k12",
    name: "Compression K-12",
    meta: "Size L | Recovery",
    quantity: 2,
    price: 45,
  },
] as const;

export default function CheckoutPage() {
  const subtotal = orderItems.reduce(
    (acc, item) => acc + convertToARS(item.price) * item.quantity,
    0,
  );
  const savings = convertToARS(15);
  const total = subtotal - savings;

  return (
    <div className="relative min-h-screen bg-black text-foreground">
      <div className="pointer-events-none fixed inset-0 cyber-grid opacity-30" />
      <TopNav active="checkout" />

      <main className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 px-4 pb-40 pt-28 md:px-16 lg:grid-cols-2 lg:pb-20">
        <section className="border border-white/10 bg-surface p-5 md:p-6">
          <h1 className="mb-5 text-3xl uppercase">Order Protocol</h1>
          <div className="space-y-3">
            {orderItems.map((item) => (
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
                      {item.meta}
                    </p>
                  </div>
                  <p className="text-sm text-[var(--on-surface-variant)]">
                    QTY {item.quantity}
                  </p>
                </div>
                <p className="mt-2 text-lg text-primary">
                  {formatARS(convertToARS(item.price) * item.quantity)}
                </p>
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
