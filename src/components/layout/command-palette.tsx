"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { commandItems, navItems, projects } from "@/data/portfolio";
import { Input } from "@/components/ui/input";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const items = useMemo(
    () => [
      ...commandItems,
      ...navItems.map((item) => ({ ...item, icon: Search })),
      ...projects.map((project) => ({ label: project.title, href: "#projects", icon: Search })),
    ],
    [],
  );
  const results = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onOpenChange, open]);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open ? (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[90] bg-zinc-950/60 backdrop-blur-sm"
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild>
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.98 }}
                className="fixed left-1/2 top-24 z-[91] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 rounded-3xl border border-zinc-200 bg-white p-3 shadow-2xl dark:border-white/10 dark:bg-zinc-950"
              >
                <DialogPrimitive.Title className="sr-only">Command palette</DialogPrimitive.Title>
                <div className="flex items-center gap-2 border-b border-zinc-200 pb-3 dark:border-white/10">
                  <Search className="ml-2 size-4 text-zinc-500" />
                  <Input
                    autoFocus
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search sections, projects, actions..."
                    className="border-0 bg-transparent focus:ring-0"
                  />
                  <button
                    aria-label="Close command palette"
                    onClick={() => onOpenChange(false)}
                    className="grid size-9 place-items-center rounded-full hover:bg-zinc-100 dark:hover:bg-white/10"
                  >
                    <X className="size-4" />
                  </button>
                </div>
                <div className="max-h-[50vh] overflow-y-auto py-2">
                  {results.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={`${item.href}-${item.label}`}
                        href={item.href}
                        onClick={() => onOpenChange(false)}
                        className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10"
                      >
                        <Icon className="size-4 text-cyan-500" />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        ) : null}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
