"use client";

import { useEffect, useState } from "react";
import { GitBranch } from "lucide-react";
import { githubStats } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";

const mockHeatmapDays = Array.from({ length: 84 }, (_, index) => {
  const date = new Date();
  date.setDate(date.getDate() - (83 - index));
  const dateStr = date.toISOString().split("T")[0];
  const level = (index * 7 + index) % 5;
  return { date: dateStr, count: level * 2, level };
});

const formatDateStr = (dateStr: string) => {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
};

interface LiveStats {
  repos: number;
  stars: number;
  contributions: number;
  streak: number;
  languages: { name: string; value: number; color: string }[];
}

type GithubUserResponse = {
  public_repos?: number;
};

type GithubRepoResponse = {
  stargazers_count?: number;
  language?: string | null;
};

type GithubContributionDay = {
  date: string;
  count: number;
  level: number;
};

type GithubContributionResponse = {
  total?: Record<string, number>;
  contributions?: GithubContributionDay[];
};

export function GithubStats() {
  const [stats, setStats] = useState<LiveStats>(githubStats);
  const [heatmapDays, setHeatmapDays] = useState<{ date: string; count: number; level: number }[]>(mockHeatmapDays);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch basic profile info (includes repos count)
        const userRes = await fetch("https://api.github.com/users/Ramzin007");
        if (!userRes.ok) throw new Error("Failed to fetch profile");
        const userData = (await userRes.json()) as GithubUserResponse;

        // Fetch repos to calculate stars and languages
        const reposRes = await fetch("https://api.github.com/users/Ramzin007/repos?per_page=100");
        if (!reposRes.ok) throw new Error("Failed to fetch repositories");
        const reposData = (await reposRes.json()) as GithubRepoResponse[];

        let totalStars = 0;
        const languageCounts: { [key: string]: number } = {};

        reposData.forEach((repo) => {
          totalStars += repo.stargazers_count || 0;
          if (repo.language) {
            languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
          }
        });

        const languageColorMap: { [key: string]: string } = {
          JavaScript: "bg-yellow-400",
          TypeScript: "bg-blue-500",
          HTML: "bg-orange-500",
          CSS: "bg-pink-500",
          "C++": "bg-sky-500",
          Python: "bg-emerald-500",
          Go: "bg-cyan-500",
          Java: "bg-red-500",
          Rust: "bg-orange-600",
          C: "bg-zinc-500",
          Shell: "bg-slate-500",
        };

        const totalLangCount = Object.values(languageCounts).reduce((a, b) => a + b, 0);
        const sortedLanguages = Object.entries(languageCounts)
          .map(([name, count]) => {
            const pct = Math.round((count / totalLangCount) * 100);
            return {
              name,
              value: pct,
              color: languageColorMap[name] || "bg-zinc-400",
            };
          })
          .sort((a, b) => b.value - a.value)
          .slice(0, 5);

        // Fetch live contribution calendar
        let liveContributionsCount = githubStats.contributions;
        let liveStreak = githubStats.streak;

        try {
          const calendarRes = await fetch("https://github-contributions-api.jogruber.de/v4/Ramzin007");
          if (calendarRes.ok) {
            const calendarData = (await calendarRes.json()) as GithubContributionResponse;

            // Calculate total contributions
            if (calendarData.total) {
              liveContributionsCount = Object.values(calendarData.total).reduce(
                (sum, val) => sum + val,
                0
              );
            }

            // Calculate current streak
            if (calendarData.contributions) {
              const sorted = [...calendarData.contributions].sort((a, b) =>
                a.date.localeCompare(b.date)
              );
              const todayStr = new Date().toISOString().split("T")[0];
              const filtered = sorted.filter((contribution) => contribution.date <= todayStr);

              let currentStreak = 0;
              const checkDate = new Date(todayStr);
              const contribMap = new Map<string, number>(filtered.map((contribution) => [contribution.date, contribution.count]));

              if ((contribMap.get(todayStr) || 0) > 0) {
                currentStreak = 1;
                while (true) {
                  checkDate.setDate(checkDate.getDate() - 1);
                  const dateStr = checkDate.toISOString().split("T")[0];
                  if ((contribMap.get(dateStr) || 0) > 0) {
                    currentStreak++;
                  } else {
                    break;
                  }
                }
              } else {
                checkDate.setDate(checkDate.getDate() - 1);
                const yesterdayStr = checkDate.toISOString().split("T")[0];
                if ((contribMap.get(yesterdayStr) || 0) > 0) {
                  currentStreak = 1;
                  while (true) {
                    checkDate.setDate(checkDate.getDate() - 1);
                    const dateStr = checkDate.toISOString().split("T")[0];
                    if ((contribMap.get(dateStr) || 0) > 0) {
                      currentStreak++;
                    } else {
                      break;
                    }
                  }
                }
              }
              liveStreak = currentStreak || githubStats.streak;

              // Set heatmap days (last 84 days)
              const finalContributions = filtered.length >= 84 ? filtered.slice(-84) : sorted.slice(-84);
              setHeatmapDays(finalContributions);
            }
          }
        } catch (calErr) {
          console.error("Error fetching live GitHub contribution calendar:", calErr);
        }

        setStats({
          repos: userData.public_repos ?? githubStats.repos,
          stars: totalStars,
          contributions: liveContributionsCount,
          streak: liveStreak,
          languages: sortedLanguages.length > 0 ? sortedLanguages : githubStats.languages,
        });
        setIsLive(true);
      } catch (err) {
        console.error("Error fetching live GitHub stats:", err);
      }
    }
    fetchStats();
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
