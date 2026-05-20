"use client";

import { GitBranch } from "lucide-react";
import { githubStats } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";

const days = Array.from({ length: 84 }, (_, index) => {
  const level = (index * 7 + index) % 5;
  return level;
});

export function GithubStats() {
  return (
    <Section id="github" eyebrow="GitHub" title="Open source rhythm, language mix, and contribution activity.">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <GitBranch className="size-6" />
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Contribution heatmap</h3>
            </div>
            <div className="mt-6 grid grid-cols-12 gap-2" aria-label="GitHub contribution graph">
              {days.map((level, index) => (
                <div
                  key={index}
                  className={[
                    "aspect-square rounded",
                    level === 0 && "bg-zinc-200 dark:bg-white/10",
                    level === 1 && "bg-emerald-200 dark:bg-emerald-900",
                    level === 2 && "bg-emerald-300 dark:bg-emerald-700",
                    level === 3 && "bg-emerald-400 dark:bg-emerald-500",
                    level === 4 && "bg-emerald-500 dark:bg-emerald-300",
                  ].filter(Boolean).join(" ")}
                  title={`${level} contribution level`}
                />
              ))}
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <Card className="p-6">
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Repos", githubStats.repos],
                ["Stars", githubStats.stars],
                ["Contributions", githubStats.contributions],
                ["Day streak", githubStats.streak],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-zinc-50 p-4 dark:bg-white/[0.05]">
                  <p className="text-2xl font-semibold text-zinc-950 dark:text-white">{value}</p>
                  <p className="text-sm text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              {githubStats.languages.map((language) => (
                <div key={language.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{language.name}</span>
                    <span>{language.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-zinc-200 dark:bg-white/10">
                    <div className={`h-full rounded-full ${language.color}`} style={{ width: `${language.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
