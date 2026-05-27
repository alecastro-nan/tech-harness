"use client";

import { create } from "zustand";

export type AppToastType = "success" | "error" | "info";

export type AppToastMessage = {
  id: string;
  type: AppToastType;
  title: string;
  description?: string;
};

type ToastStore = {
  queue: AppToastMessage[];
  enqueue: (message: Omit<AppToastMessage, "id">) => void;
  dequeue: (id: string) => void;
};

let sequence = 0;

function getToastId(): string {
  sequence += 1;
  return `toast-${Date.now()}-${sequence}`;
}

export const useToastStore = create<ToastStore>()((set) => ({
  queue: [],
  enqueue: (message) => {
    set((state) => ({
      queue: [...state.queue, { ...message, id: getToastId() }],
    }));
  },
  dequeue: (id) => {
    set((state) => ({
      queue: state.queue.filter((item) => item.id !== id),
    }));
  },
}));
