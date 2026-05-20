import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-xl border border-zinc-200 bg-white/80 px-4 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 dark:border-white/10 dark:bg-white/[0.06] dark:text-white",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-32 w-full resize-none rounded-xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 dark:border-white/10 dark:bg-white/[0.06] dark:text-white",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
