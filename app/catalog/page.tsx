import type { Metadata } from "next";
import { MiniCart } from "@/components/ui/MiniCart";
import { ProductCard } from "@/components/ui/ProductCard";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { TopNav } from "@/components/ui/TopNav";
import { catalogProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Catalog | Cyber-Run Elite Gear",
  description:
    "Browse Cyber-Run's elite catalog: carbon-plate footwear, biometric wearables, and precision training hardware.",
  alternates: {
    canonical: "/catalog",
  },
  openGraph: {
    title: "Catalog | Cyber-Run Elite Gear",
    description:
      "Explore high-performance products with telemetry-ready design and pro-level durability.",
    url: "/catalog",
    type: "website",
  },
};

const sidebarItems = [
  "Filters",
  "Sort By",
  "GPS Tracking",
  "Weight Class",
  "Carbon Plate",
] as const;

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav active="catalog" actions={<MiniCart />} />

      <main className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 px-4 pb-16 pt-28 md:grid-cols-12 md:px-16">
        <aside className="hidden md:col-span-3 md:block">
          <div className="sticky top-24 border-r border-white/10 pr-6">
            <h1 className="text-2xl uppercase">Specs</h1>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-secondary">
              Precision Calibration
            </p>
            <nav className="mt-6 space-y-2">
              {sidebarItems.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={[
                    "w-full border-l-2 px-4 py-3 text-left text-xs uppercase tracking-[0.2em] transition-colors",
                    index === 0
                      ? "border-primary bg-white/5 text-primary"
                      : "border-transparent text-[var(--on-surface-variant)] hover:border-white/20 hover:text-white",
                  ].join(" ")}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="mt-10 border-t border-white/10 pt-6">
              <div className="flex items-end justify-between text-xs uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
                <span>Stiffness Matrix</span>
                <span className="text-secondary">80%</span>
              </div>
              <div className="mt-3 h-1 bg-surface-variant">
                <div className="h-full w-4/5 bg-secondary" />
              </div>
            </div>
          </div>
        </aside>

        <section className="md:col-span-9">
          <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <h2 className="text-3xl uppercase md:text-5xl">Elite Catalog</h2>
              <p className="mt-2 text-sm text-[var(--on-surface-variant)]">
                Displaying 12 optimized configurations.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] md:hidden"
            >
              <span className="material-symbols-outlined text-base">
                filter_list
              </span>
              Filters
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {catalogProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="catalog"
              />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
