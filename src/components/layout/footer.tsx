import { ArrowUp, GitBranch, Link, Mail } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white/70 py-10 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-zinc-950 dark:text-white">{profile.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Radix/shadcn-style components, and Lucide Icons.
          </p>
          <p className="mt-4 text-sm text-zinc-500">© 2026 {profile.name}. All rights reserved.</p>
        </div>
        <div className="grid gap-5">
          <nav className="flex flex-wrap gap-3" aria-label="Footer">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-zinc-600 transition hover:text-cyan-600 dark:text-zinc-300">
                {item.label}
              </a>
            ))}
            <a href={profile.resumeUrl} download className="text-sm font-medium text-zinc-600 transition hover:text-cyan-600 dark:text-zinc-300">
              Resume
            </a>
          </nav>
          <div className="flex items-center gap-3 lg:justify-end">
            {[
              { href: profile.github, label: "GitHub", icon: GitBranch },
              { href: profile.linkedin, label: "LinkedIn", icon: Link },
              { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
              { href: "#", label: "Back to top", icon: ArrowUp },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} aria-label={item.label} className="grid size-10 place-items-center rounded-full border border-zinc-200 text-zinc-600 transition hover:-translate-y-1 hover:text-cyan-600 dark:border-white/10 dark:text-zinc-300">
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
