"use client";

import { useEffect, useState } from "react";
import { GitBranch } from "lucide-react";
import { githubStats } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";

type GithubContributionDay = {
  date: string;
  count: number;
  level: number;
};

const placeholderEndDate = "2026-05-23";
const heatmapDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const mockHeatmapDays = Array.from({ length: 84 }, (_, index) => {
  const date = new Date(`${placeholderEndDate}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() - (83 - index));
  const dateStr = date.toISOString().split("T")[0];
  const level = (index * 7 + index) % 5;
  return { date: dateStr, count: level * 2, level };
});

const formatDateStr = (dateStr: string) => {
  const date = new Date(`${dateStr}T00:00:00.000Z`);
  return heatmapDateFormatter.format(date);
};

interface LiveStats {
  repos: number;
  stars: number;
  contributions: number;
  streak: number;
  languages: { name: string; value: number; color: string }[];
}

type GithubStatsApiResponse = {
  stats: LiveStats;
  heatmapDays: GithubContributionDay[];
  isLive: boolean;
};

export function GithubStats() {
  const [stats, setStats] = useState<LiveStats>(githubStats);
  const [heatmapDays, setHeatmapDays] = useState<GithubContributionDay[]>(mockHeatmapDays);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchStats() {
      try {
        const response = await fetch("/api/github-stats", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub stats");
        }

        const data = (await response.json()) as GithubStatsApiResponse;

        setStats(data.stats);
        if (data.heatmapDays.length > 0) {
          setHeatmapDays(data.heatmapDays);
        }
        setIsLive(data.isLive);
      } catch (err) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("Error fetching live GitHub stats:", err);
      }
    }

    fetchStats();
    const refreshInterval = window.setInterval(fetchStats, 10 * 60 * 1000);

    return () => {
      controller.abort();
      window.clearInterval(refreshInterval);
    };
  }, []);

  return (
    <Section id="github" eyebrow="GitHub" title="Open source rhythm, language mix, and contribution activity.">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <GitBranch className="size-6" />
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Contribution heatmap</h3>
              {isLive && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              )}
            </div>
            <div className="mt-6 grid grid-cols-12 gap-2" aria-label="GitHub contribution graph">
              {heatmapDays.map((day, index) => (
                <div
                  key={index}
                  className={[
                    "aspect-square rounded transition-colors duration-200",
                    day.level === 0 && "bg-zinc-200 dark:bg-white/10",
                    day.level === 1 && "bg-emerald-200 dark:bg-emerald-900",
                    day.level === 2 && "bg-emerald-300 dark:bg-emerald-700",
                    day.level === 3 && "bg-emerald-400 dark:bg-emerald-500",
                    day.level === 4 && "bg-emerald-500 dark:bg-emerald-300",
                  ].filter(Boolean).join(" ")}
                  title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDateStr(day.date)}`}
                />
              ))}
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <Card className="p-6">
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Repos", stats.repos],
                ["Stars", stats.stars],
                ["Contributions", stats.contributions],
                ["Day streak", stats.streak],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-zinc-50 p-4 dark:bg-white/[0.05]">
                  <p className="text-2xl font-semibold text-zinc-950 dark:text-white">{value}</p>
                  <p className="text-sm text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              {stats.languages.map((language) => (
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
