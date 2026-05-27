"use client";

import { useCartStore } from "@/lib/cart-store";

type AddToCartButtonProps = {
  product: {
    id: string;
    name: string;
    price: number;
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
      className={className}
      aria-label={ariaLabel}
    >
      <span className="material-symbols-outlined">add</span>
    </button>
  );
}
