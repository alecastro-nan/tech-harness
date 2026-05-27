"use client";

import { useEffect } from "react";
import { Toaster, toast } from "sonner";
import { useToastStore } from "@/lib/toast-store";

export function ToastManager() {
  const queue = useToastStore((state) => state.queue);
  const dequeue = useToastStore((state) => state.dequeue);

  useEffect(() => {
    if (queue.length === 0) {
      return;
    }

    const next = queue[0];

    if (next.type === "success") {
      toast.success(next.title, { description: next.description, id: next.id });
    } else if (next.type === "error") {
      toast.error(next.title, { description: next.description, id: next.id });
    } else {
      toast(next.title, { description: next.description, id: next.id });
    }

    dequeue(next.id);
  }, [queue, dequeue]);

  return <Toaster position="top-right" richColors theme="dark" />;
}
