import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
            {eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
