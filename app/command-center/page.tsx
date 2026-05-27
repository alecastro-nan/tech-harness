import type { Metadata } from "next";
import { MiniCart } from "@/components/ui/MiniCart";
import { SecondActionButton } from "@/components/ui/SecondActionButton";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { TopNav } from "@/components/ui/TopNav";

export const metadata: Metadata = {
  title: "Command Center",
  description:
    "Command Center is under construction while Cyber-Run prepares telemetry and hardware management tools.",
  alternates: {
    canonical: "/command-center",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CommandCenterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav active="command-center" actions={<MiniCart />} />

      <main className="mx-auto flex w-full max-w-[1280px] flex-1 items-center px-4 pb-16 pt-28 md:px-16">
        <section className="w-full border border-white/10 bg-surface p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 border border-secondary/30 bg-secondary/10 px-3 py-1">
              <span className="text-xs uppercase tracking-[0.2em] text-secondary">
                Coming Soon
              </span>
            </div>
            <h1 className="mt-6 text-4xl uppercase md:text-6xl">
              Command Center is in calibration
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--on-surface-variant)] md:text-lg">
              We are actively wiring telemetry, hardware links, and logistics
              intelligence into this section so you can use it as soon as
              possible.
            </p>
            <div className="mt-10 grid gap-4 border border-white/10 bg-black/40 p-5 text-left md:grid-cols-3">
              <article className="border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                  Telemetry
                </p>
                <p className="mt-3 text-sm text-[var(--on-surface-variant)]">
                  Training signals and recovery metrics are being prepared.
                </p>
              </article>
              <article className="border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                  Hardware
                </p>
                <p className="mt-3 text-sm text-[var(--on-surface-variant)]">
                  Connected devices and firmware workflows are under active
                  development.
                </p>
              </article>
              <article className="border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                  Logistics
                </p>
                <p className="mt-3 text-sm text-[var(--on-surface-variant)]">
                  Order visibility and shipment automation will land in a future
                  update.
                </p>
              </article>
            </div>
            <div className="mt-8 flex justify-center">
              <SecondActionButton href="/catalog" className="px-6 py-4">
                Return to Shop
              </SecondActionButton>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
