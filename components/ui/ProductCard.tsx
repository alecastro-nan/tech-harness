import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/ui/AddToCartButton";
import { ProductPrice } from "@/components/ui/ProductPrice";
import { ProductTag } from "@/components/ui/ProductTag";
import type { Product } from "@/lib/products";
import {
  getProductCardImage,
  getProductHref,
  toCartProduct,
} from "@/lib/products";

type ProductCardVariant = "featured" | "catalog";

type ProductCardProps = {
  product: Product;
  variant: ProductCardVariant;
};

export function ProductCard({ product, variant }: ProductCardProps) {
  const isCatalog = variant === "catalog";
  const productHref = getProductHref(product.id);

  return (
    <article
      className={[
        "group border border-white/10 bg-surface transition-colors hover:border-primary/60",
        isCatalog ? "flex flex-col" : "",
      ].join(" ")}
    >
      <div className="relative aspect-square overflow-hidden border-b border-white/10 bg-black/40 p-6">
        {isCatalog ? (
          <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
            {product.tags.map((tag) => (
              <ProductTag key={`${product.id}-${tag}`} tag={tag} />
            ))}
            {product.soldOut ? <ProductTag tag="Sold Out" /> : null}
          </div>
        ) : null}

        <Image
          src={getProductCardImage(product)}
          alt={product.name}
          width={640}
          height={640}
          className="h-full w-full object-contain grayscale transition-all duration-500 group-hover:grayscale-0"
        />
      </div>

      <div
        className={[
          "gap-4 p-5",
          isCatalog ? "flex flex-1 flex-col justify-between" : "space-y-4",
        ].join(" ")}
      >
        <div>
          <h3 className="text-xl uppercase">
            <Link
              href={productHref}
              className="transition-colors hover:text-primary"
            >
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-[var(--on-surface-variant)]">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          {product.soldOut ? (
            <span
              className={[
                "uppercase tracking-[0.2em] text-secondary",
                isCatalog ? "text-sm font-semibold" : "text-sm font-bold",
              ].join(" ")}
            >
              Sold Out
            </span>
          ) : (
            <ProductPrice
              amountUsd={product.price}
              className={[
                "text-primary",
                isCatalog ? "text-2xl font-semibold" : "text-2xl font-bold",
              ].join(" ")}
            />
          )}

          <AddToCartButton
            product={toCartProduct(product)}
            ariaLabel={`Add ${product.name} to cart`}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-primary hover:text-primary"
            disabled={product.soldOut}
          />
        </div>
      </div>
    </article>
  );
}
