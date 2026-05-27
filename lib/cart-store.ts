"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const CART_STORAGE_KEY = "kinetic-cart-v1";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type AddCartItemInput = {
  id: string;
  name: string;
  price: number;
};

type CartStore = {
  hasHydrated: boolean;
  items: CartItem[];
  setHasHydrated: (value: boolean) => void;
  addItem: (item: AddCartItemInput) => void;
  removeItem: (id: string) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

function sanitizeQuantity(quantity: number): number {
  if (!Number.isFinite(quantity)) {
    return 1;
  }

  return Math.max(0, Math.floor(quantity));
}

function replaceCartItem(
  items: CartItem[],
  id: string,
  updater: (item: CartItem) => CartItem,
): CartItem[] {
  return items.map((item) => (item.id === id ? updater(item) : item));
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      hasHydrated: false,
      items: [],
      setHasHydrated: (value) => {
        set({ hasHydrated: value });
      },
      addItem: (item) => {
        set((state) => {
          const existing = state.items.find((entry) => entry.id === item.id);

          if (existing) {
            return {
              items: replaceCartItem(state.items, item.id, (entry) => ({
                ...entry,
                quantity: entry.quantity + 1,
              })),
            };
          }

          return {
            items: [
              ...state.items,
              {
                ...item,
                quantity: 1,
              },
            ],
          };
        });
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      incrementItem: (id) => {
        set((state) => ({
          items: replaceCartItem(state.items, id, (item) => ({
            ...item,
            quantity: item.quantity + 1,
          })),
        }));
      },
      decrementItem: (id) => {
        set((state) => {
          const target = state.items.find((item) => item.id === id);

          if (!target) {
            return state;
          }

          if (target.quantity <= 1) {
            return {
              items: state.items.filter((item) => item.id !== id),
            };
          }

          return {
            items: replaceCartItem(state.items, id, (item) => ({
              ...item,
              quantity: item.quantity - 1,
            })),
          };
        });
      },
      setQuantity: (id, quantity) => {
        const normalized = sanitizeQuantity(quantity);

        if (normalized === 0) {
          set((state) => ({
            items: state.items.filter((item) => item.id !== id),
          }));
          return;
        }

        set((state) => ({
          items: replaceCartItem(state.items, id, (item) => ({
            ...item,
            quantity: normalized,
          })),
        }));
      },
      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: CART_STORAGE_KEY,
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
      }),
      onRehydrateStorage: () => {
        return (state) => {
          state?.setHasHydrated(true);
        };
      },
    },
  ),
);

export function getCartItemCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}

export function getCartSubtotal(items: CartItem[]): number {
  return items.reduce(
    (subtotal, item) => subtotal + item.price * item.quantity,
    0,
  );
}
