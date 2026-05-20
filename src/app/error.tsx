"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">Runtime error</p>
        <h1 className="mt-4 text-4xl font-semibold text-zinc-950 dark:text-white">Something needs attention</h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">Try reloading this view.</p>
        <Button onClick={reset} className="mt-7">Retry</Button>
      </div>
    </main>
  );
}
