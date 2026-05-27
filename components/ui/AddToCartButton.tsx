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
  disabled?: boolean;
};

export function AddToCartButton({
  product,
  className,
  ariaLabel,
  disabled = false,
}: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      type="button"
      onClick={() => addItem(product)}
      disabled={disabled}
      className={[
        className,
        "transition-transform duration-150 hover:bg-white/5 active:scale-95 active:brightness-110 disabled:cursor-not-allowed disabled:border-white/10 disabled:text-[var(--on-surface-variant)] disabled:hover:bg-transparent disabled:active:scale-100 disabled:active:brightness-100",
      ].join(" ")}
      aria-label={ariaLabel}
    >
      <span className="material-symbols-outlined">add</span>
    </button>
  );
}
