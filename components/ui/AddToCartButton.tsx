"use client";

import { useCartStore } from "@/lib/cart-store";

type AddToCartButtonProps = {
  product: {
    id: string;
    name: string;
    price: number;
    image?: string;
  };
  className: string;
  ariaLabel: string;
};

export function AddToCartButton({
  product,
  className,
  ariaLabel,
}: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      type="button"
      onClick={() => addItem(product)}
      className={[
        className,
        "transition-transform duration-150 active:scale-95 active:brightness-110",
      ].join(" ")}
      aria-label={ariaLabel}
    >
      <span className="material-symbols-outlined">add</span>
    </button>
  );
}
