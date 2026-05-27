import type { StaticImageData } from "next/image";
import Image from "next/image";
import forerunner165MusicBgImage from "@/app/assets/products/garmin-forerunner-165-music-bg-black.webp";
import pulseTracerImage from "@/app/assets/products/pulse-tracer.png";
import velocitaX1Image from "@/app/assets/products/velocita-x1.png";
import { AddToCartButton } from "@/components/ui/AddToCartButton";
import { MiniCart } from "@/components/ui/MiniCart";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { TopNav } from "@/components/ui/TopNav";
import { getARSPrice } from "@/lib/currency";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: StaticImageData;
};

const products: ReadonlyArray<Product> = [
  {
    id: "velocita-x1",
    name: "Velocita X-1",
    description: "Ultra-light marathon racer with embedded telemetry chip.",
    price: 285,
    tags: ["C-PLATE V3", "GPS SYNC"],
    image: velocitaX1Image,
  },
  {
    id: "pulse-tracer",
    name: "Pulse Tracer",
    description: "Daily trainer with integrated biometric feedback loop.",
    price: 220,
    tags: ["HR SENSOR"],
    image: pulseTracerImage,
  },
  {
    id: "garmin-forerunner-165-music",
    name: "Garmin Forerunner 165 Music",
    description:
      "Advanced sports watch with integrated music and fitness tracking.",
    price: 350,
    tags: ["MULTI-GNSS", "MUSIC"],
    image: forerunner165MusicBgImage,
  },
];

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
            {products.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col border border-white/10 bg-surface transition-colors hover:border-primary/60"
              >
                <div className="relative aspect-square overflow-hidden border-b border-white/10 bg-black/40 p-6">
                  <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={`${product.id}-${tag}`}
                        className="border border-primary/40 bg-primary/10 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={640}
                    height={640}
                    className="h-full w-full object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-xl uppercase">{product.name}</h3>
                    <p className="mt-1 text-sm text-[var(--on-surface-variant)]">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-2xl font-semibold text-primary">
                      {getARSPrice(product.price)}
                    </span>
                    <AddToCartButton
                      product={{
                        id: product.id,
                        name: product.name,
                        price: product.price,
                      }}
                      ariaLabel={`Add ${product.name} to cart`}
                      className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-primary hover:text-primary"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
