import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/ui/AddToCartButton";
import { MiniCart } from "@/components/ui/MiniCart";
import { ProductPrice } from "@/components/ui/ProductPrice";
import { ProductTag } from "@/components/ui/ProductTag";
import { SecondActionButton } from "@/components/ui/SecondActionButton";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { TopNav } from "@/components/ui/TopNav";
import {
  getProductById,
  getProductCardImage,
  products,
  toCartProduct,
} from "@/lib/products";

type ProductDetailPageProps = {
  params: Promise<{
    productId: string;
  }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.detailSummary,
    alternates: {
      canonical: `/catalog/${product.id}`,
    },
    openGraph: {
      title: product.name,
      description: product.detailSummary,
      url: `/catalog/${product.id}`,
      type: "article",
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav active="catalog" actions={<MiniCart />} />

      <main className="mx-auto w-full max-w-[1280px] px-4 pb-16 pt-28 md:px-16">
        <section className="grid gap-8 border border-white/10 bg-surface p-5 md:grid-cols-12 md:p-8">
          <div className="md:col-span-7">
            <div className="relative overflow-hidden border border-white/10 bg-black/40 p-6">
              <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
                {product.tags.map((tag) => (
                  <ProductTag key={`${product.id}-${tag}`} tag={tag} />
                ))}
                {product.soldOut ? <ProductTag tag="Sold Out" /> : null}
              </div>
              <div className="absolute right-4 top-4 text-xs uppercase tracking-[0.2em] text-secondary">
                DAT::{product.id.toUpperCase()}
              </div>
              <Image
                src={getProductCardImage(product)}
                alt={product.name}
                width={960}
                height={960}
                className="mx-auto h-full max-h-[620px] w-full object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 md:col-span-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                Elite Detail Node
              </p>
              <h1 className="mt-3 text-4xl uppercase md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg text-[var(--on-surface-variant)]">
                {product.detailHeadline}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--on-surface-variant)]">
                {product.detailSummary}
              </p>
            </div>

            <div className="grid gap-3 border border-white/10 bg-black/40 p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
                  Purchase State
                </span>
                {product.soldOut ? (
                  <span className="text-sm uppercase tracking-[0.2em] text-secondary">
                    Sold Out
                  </span>
                ) : (
                  <ProductPrice
                    amountUsd={product.price}
                    className="text-3xl font-bold text-primary"
                  />
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <AddToCartButton
                  product={toCartProduct(product)}
                  ariaLabel={`Add ${product.name} to cart`}
                  disabled={product.soldOut}
                  className="inline-flex h-12 items-center justify-center border border-white/20 px-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-primary hover:text-primary"
                />
                <SecondActionButton href="/catalog" className="h-12 px-4">
                  Return to Shop
                </SecondActionButton>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-12">
          <article className="border border-white/10 bg-surface p-5 md:p-6 lg:col-span-7">
            <h2 className="text-2xl uppercase">Mission Profile</h2>
            <div className="mt-5 grid gap-3">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="border border-white/10 bg-black/30 p-4 text-sm text-[var(--on-surface-variant)]"
                >
                  {feature}
                </div>
              ))}
            </div>
          </article>

          <aside className="space-y-8 lg:col-span-5">
            <section className="border border-white/10 bg-surface p-5 md:p-6">
              <h2 className="text-2xl uppercase">Technical Specs</h2>
              <div className="mt-5 space-y-3">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between border border-white/10 bg-black/30 px-4 py-3 text-sm"
                  >
                    <span className="uppercase tracking-[0.18em] text-[var(--on-surface-variant)]">
                      {spec.label}
                    </span>
                    <span className="text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="border border-white/10 bg-surface p-5 md:p-6">
              <h2 className="text-2xl uppercase">Signal Metrics</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {product.metrics.map((metric) => (
                  <article
                    key={metric.label}
                    className="border border-white/10 bg-black/30 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
                      {metric.label}
                    </p>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-3xl font-bold text-white">
                        {metric.value}
                      </span>
                      <span
                        className={[
                          "text-xs uppercase tracking-[0.2em]",
                          metric.accent === "primary"
                            ? "text-primary"
                            : "text-secondary",
                        ].join(" ")}
                      >
                        ACTIVE
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </aside>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
