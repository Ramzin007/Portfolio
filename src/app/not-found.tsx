import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-zinc-950 dark:text-white">Page not found</h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">The page moved, or the link needs a second look.</p>
        <Button asChild className="mt-7"><Link href="/">Back home</Link></Button>
      </div>
    </main>
  );
}
