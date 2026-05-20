"use client";

import { useEffect, useState } from "react";
import { GitBranch } from "lucide-react";
import { githubStats } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";

const days = Array.from({ length: 84 }, (_, index) => {
  const level = (index * 7 + index) % 5;
  return level;
});

interface LiveStats {
  repos: number;
  stars: number;
  contributions: number;
  streak: number;
  languages: { name: string; value: number; color: string }[];
}

export function GithubStats() {
  const [stats, setStats] = useState<LiveStats>(githubStats);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch basic profile info (includes repos count)
        const userRes = await fetch("https://api.github.com/users/Ramzin007");
        if (!userRes.ok) throw new Error("Failed to fetch profile");
        const userData = await userRes.json();

        // Fetch repos to calculate stars and languages
        const reposRes = await fetch("https://api.github.com/users/Ramzin007/repos?per_page=100");
        if (!reposRes.ok) throw new Error("Failed to fetch repositories");
        const reposData = await reposRes.json();

        let totalStars = 0;
        const languageCounts: { [key: string]: number } = {};

        reposData.forEach((repo: any) => {
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

        setStats({
          repos: userData.public_repos ?? githubStats.repos,
          stars: totalStars,
          contributions: githubStats.contributions, // Keep static contributions as fallback (GraphQL needed for live)
          streak: githubStats.streak,
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
