import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-200/80 bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-zinc-200",
        className,
      )}
      {...props}
    />
  );
}
