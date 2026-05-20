"use client";

import { counters, highlights } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A BTech IT student building toward strong full-stack and backend engineering."
      description="I am focused on turning hands-on project work into practical engineering skill: responsive products, clean architecture, APIs, databases, and scalable system fundamentals."
    >
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <Card className="h-full p-6 sm:p-8">
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              I am a BTech IT student at CUSAT focused on full-stack development, backend engineering, and scalable web applications. I started with frontend-heavy projects and I am now intentionally moving deeper into backend systems, API architecture, and system design fundamentals.
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              My goal is to build software products that are technically solid, user-focused, and scalable. I keep improving through real projects, problem solving, collaborative hackathon work, and consistent hands-on learning.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {counters.map((counter) => (
                <div key={counter.label} className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-5 dark:border-white/10 dark:bg-white/[0.05]">
                  <p className="text-3xl font-semibold text-zinc-950 dark:text-white">
                    {counter.value.toLocaleString()}{counter.suffix}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{counter.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <div className="grid gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <Card>
                  <CardContent className="flex gap-4 p-6">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
                      <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-300">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
