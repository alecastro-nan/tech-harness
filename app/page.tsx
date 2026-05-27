import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MiniCart } from "@/components/ui/MiniCart";
import { ProductCard } from "@/components/ui/ProductCard";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { TopNav } from "@/components/ui/TopNav";
import { featuredProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Cyber-Run Tech | Elite Running Gear",
  description:
    "Discover elite running technology, cyber-performance footwear, and precision gear engineered for high-output training.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cyber-Run Tech | Elite Running Gear",
    description:
      "High-performance running footwear and wearable tech built for speed, telemetry, and consistency.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 cyber-grid opacity-30" />
      <TopNav active="home" actions={<MiniCart />} />

      <main className="relative z-10 pt-20">
        <section className="relative border-b border-white/10 py-16 md:py-24">
          <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-4 md:grid-cols-12 md:px-16">
            <div className="md:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 border border-secondary/30 bg-secondary/10 px-3 py-1">
                <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
                <span className="text-xs uppercase tracking-[0.2em] text-secondary">
                  System Online V2.4
                </span>
              </div>
              <h1 className="text-5xl font-bold uppercase leading-none text-primary md:text-7xl">
                Evolve Your
                <br />
                Gait
              </h1>
              <p className="max-w-md text-base text-[var(--on-surface-variant)] md:text-lg">
                Precision-engineered carbon fiber integration meets
                hyper-responsive energy return systems. Calibrate your
                performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/catalog"
                  className="neon-glow-primary neon-glow-primary-hover inline-flex items-center gap-2 bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-all hover:bg-white"
                >
                  Explore Elite Series
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/command-center"
                  className="inline-flex items-center gap-2 border border-secondary px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-secondary transition-colors hover:bg-secondary/10"
                >
                  Command Center
                </Link>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="relative border border-white/10 bg-surface p-3">
                <div className="relative overflow-hidden border border-white/10 bg-black/50">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW-XXxhqyWVO_tfgNKIy83VO43fUdawMQhui2u3MnaY_U2VQojOU5W_GkNejRjW3KpaiAtpwat_xj2dwQ35BbZUtzXz9mip5iqCe-OlBY_7RdaK-qZiMwCLvPKUwKxac8Av31D653Iu-RhM3nPX3UPCagkcKp0mQmgNXBbfy93DB-ThTr0aI3P-2DjCjBCM8TvU6trkdqYZ4SepKh4NGqtso9wA2fpol4aK9q_lN_x_jpGfv5mo8zfrFo9G7CkVqAXRWvSgFad9HwU"
                    alt="3D carbon-fiber running shoe render"
                    width={1280}
                    height={960}
                    className="h-full max-h-[540px] w-full object-cover"
                  />
                  <div className="absolute right-4 top-4 text-xs uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
                    DAT::592.X
                  </div>
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
                    <span className="material-symbols-outlined text-base">
                      sensors
                    </span>
                    Syncing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1280px] px-4 py-16 md:px-16 md:py-20">
          <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-3xl uppercase md:text-5xl">Elite Catalog</h2>
              <p className="mt-2 text-sm text-[var(--on-surface-variant)]">
                High-fidelity imports from Stitch translated into App Router
                views.
              </p>
            </div>
            <Link
              href="/catalog"
              className="text-xs uppercase tracking-[0.18em] text-secondary hover:text-primary"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="featured"
              />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
