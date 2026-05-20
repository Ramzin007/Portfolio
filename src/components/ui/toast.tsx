"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { CheckCircle2 } from "lucide-react";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <ToastPrimitive.Provider swipeDirection="right">{children}</ToastPrimitive.Provider>;
}

export function Toast({
  open,
  onOpenChange,
  title,
  description,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
}) {
  return (
    <>
      <ToastPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        className="fixed bottom-5 right-5 z-[60] grid max-w-sm gap-2 rounded-2xl border border-zinc-200 bg-white p-4 text-zinc-950 shadow-2xl data-[state=open]:animate-in dark:border-white/10 dark:bg-zinc-950 dark:text-white"
      >
        <ToastPrimitive.Title className="flex items-center gap-2 text-sm font-semibold">
          <CheckCircle2 className="size-4 text-emerald-500" />
          {title}
        </ToastPrimitive.Title>
        <ToastPrimitive.Description className="text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </ToastPrimitive.Description>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport />
    </>
  );
}
