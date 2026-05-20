"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useMemo, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { useMounted } from "@/hooks/use-mounted";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar({ onCommand }: { onCommand: () => void }) {
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);
  const active = useActiveSection(sectionIds);
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const initials = profile.name
    .split(/\s+/)
    .slice(0, 3)
    .map((part) => part[0])
    .join("");

  const links = (
    <>
      {navItems.map((item) => {
        const isActive = active === item.href.replace("#", "");
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={cn(
              "rounded-full px-3 py-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white",
              isActive && "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950",
            )}
          >
            {item.label}
          </a>
        );
      })}
    </>
  );

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-zinc-200/70 bg-white/75 px-3 py-2 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/65"
      >
        <Link href="#" className="flex items-center gap-3 rounded-full pr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
          <span className="grid size-10 place-items-center rounded-full bg-zinc-950 text-[0.7rem] font-black text-white dark:bg-white dark:text-zinc-950">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold text-zinc-950 dark:text-white sm:block">
            {profile.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">{links}</div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onCommand} aria-label="Open command palette">
            <Search className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={profile.resumeUrl} download>
              <Download className="size-4" />
              Resume
            </a>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 grid max-w-7xl gap-1 rounded-3xl border border-zinc-200/70 bg-white/95 p-3 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/95 lg:hidden"
          >
            {links}
            <Button asChild className="mt-2">
              <a href={profile.resumeUrl} download>
                <Download className="size-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
