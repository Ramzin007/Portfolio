import { githubStats } from "@/data/portfolio";

export const dynamic = "force-dynamic";

const githubUsername = "Ramzin007";
const requestHeaders = {
  Accept: "application/vnd.github+json",
  "User-Agent": "ramzin-portfolio",
};
const githubToken = process.env.GITHUB_TOKEN || process.env.GITHUB_ACCESS_TOKEN;

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
  contributions?: GithubContributionDay[];
};

type GithubContributionLevel = "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE";

type GithubGraphqlContributionDay = {
  date: string;
  contributionCount: number;
  contributionLevel: GithubContributionLevel;
};

type GithubGraphqlResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: {
            contributionDays: GithubGraphqlContributionDay[];
          }[];
        };
      };
    };
  };
  errors?: unknown;
};

const languageColorMap: Record<string, string> = {
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

const contributionLevelMap: Record<GithubContributionLevel, number> = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

function todayIso() {
  return new Date().toISOString().split("T")[0];
}

function dateDaysBefore(dateStr: string, days: number) {
  const date = new Date(`${dateStr}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() - days);
  return date.toISOString().split("T")[0];
}

function calculateCurrentStreak(contributions: GithubContributionDay[], todayStr: string) {
  const contributionsByDate = new Map(contributions.map((day) => [day.date, day.count]));
  const checkDate = new Date(`${todayStr}T00:00:00.000Z`);
  let streak = 0;

  if ((contributionsByDate.get(todayStr) || 0) === 0) {
    checkDate.setUTCDate(checkDate.getUTCDate() - 1);
  }

  while (true) {
    const dateStr = checkDate.toISOString().split("T")[0];
    if ((contributionsByDate.get(dateStr) || 0) <= 0) {
      break;
    }

    streak += 1;
    checkDate.setUTCDate(checkDate.getUTCDate() - 1);
  }

  return streak;
}

function normalizeContributions(contributions: GithubContributionDay[]) {
  return contributions.map((day) => ({
    date: day.date,
    count: day.count,
    level: Math.max(0, Math.min(4, day.level ?? Math.min(day.count, 4))),
  }));
}

async function fetchOfficialContributionCalendar(todayStr: string, sinceLastYear: string) {
  if (!githubToken) {
    return null;
  }

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    cache: "no-store",
    headers: {
      ...requestHeaders,
      Authorization: `Bearer ${githubToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query PortfolioContributionCalendar($login: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $login) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        login: githubUsername,
        from: `${sinceLastYear}T00:00:00Z`,
        to: `${todayStr}T23:59:59Z`,
      },
    }),
  });

  if (!response.ok) {
    return null;
  }

  const result = (await response.json()) as GithubGraphqlResponse;

  if (result.errors) {
    return null;
  }

  const calendar = result.data?.user?.contributionsCollection?.contributionCalendar;

  if (!calendar) {
    return null;
  }

  const contributions = calendar.weeks
    .flatMap((week) => week.contributionDays)
    .map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: contributionLevelMap[day.contributionLevel],
    }))
    .filter((day) => day.date <= todayStr)
    .sort((a, b) => a.date.localeCompare(b.date));

  return {
    contributions: calendar.totalContributions,
    heatmapDays: contributions.slice(-84),
    streak: calculateCurrentStreak(contributions, todayStr),
  };
}

export async function GET() {
  const todayStr = todayIso();
  const sinceLastYear = dateDaysBefore(todayStr, 365);

  const [userResult, reposResult, officialCalendarResult, publicCalendarResult] = await Promise.allSettled([
    fetch(`https://api.github.com/users/${githubUsername}`, {
      cache: "no-store",
      headers: requestHeaders,
    }),
    fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100`, {
      cache: "no-store",
      headers: requestHeaders,
    }),
    fetchOfficialContributionCalendar(todayStr, sinceLastYear),
    fetch(`https://github-contributions-api.jogruber.de/v4/${githubUsername}`, {
      cache: "no-store",
      headers: requestHeaders,
    }),
  ]);

  let repos = githubStats.repos;
  let stars = githubStats.stars;
  let languages = githubStats.languages;
  let contributions = githubStats.contributions;
  let streak = githubStats.streak;
  let heatmapDays: GithubContributionDay[] = [];
  const liveSources: string[] = [];

  if (userResult.status === "fulfilled" && userResult.value.ok) {
    const userData = (await userResult.value.json()) as GithubUserResponse;
    repos = userData.public_repos ?? repos;
    liveSources.push("profile");
  }

  if (reposResult.status === "fulfilled" && reposResult.value.ok) {
    const reposData = (await reposResult.value.json()) as GithubRepoResponse[];
    const languageCounts: Record<string, number> = {};

    stars = reposData.reduce((total, repo) => total + (repo.stargazers_count || 0), 0);

    reposData.forEach((repo) => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
    });

    const totalLanguageCount = Object.values(languageCounts).reduce((total, count) => total + count, 0);

    if (totalLanguageCount > 0) {
      languages = Object.entries(languageCounts)
        .map(([name, count]) => ({
          name,
          value: Math.round((count / totalLanguageCount) * 100),
          color: languageColorMap[name] || "bg-zinc-400",
        }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);
    }

    liveSources.push("repos");
  }

  if (officialCalendarResult.status === "fulfilled" && officialCalendarResult.value) {
    contributions = officialCalendarResult.value.contributions;
    streak = officialCalendarResult.value.streak;
    heatmapDays = officialCalendarResult.value.heatmapDays;
    liveSources.push("official-contributions");
  } else if (publicCalendarResult.status === "fulfilled" && publicCalendarResult.value.ok) {
    const calendarData = (await publicCalendarResult.value.json()) as GithubContributionResponse;
    const normalized = normalizeContributions(calendarData.contributions ?? [])
      .filter((day) => day.date <= todayStr)
      .sort((a, b) => a.date.localeCompare(b.date));

    if (normalized.length > 0) {
      contributions = normalized
        .filter((day) => day.date >= sinceLastYear)
        .reduce((total, day) => total + day.count, 0);
      streak = calculateCurrentStreak(normalized, todayStr);
      heatmapDays = normalized.slice(-84);
      liveSources.push("public-contributions");
    }
  }

  return Response.json(
    {
      stats: {
        repos,
        stars,
        contributions,
        streak,
        languages,
      },
      heatmapDays,
      isLive: liveSources.length > 0,
      liveSources,
      updatedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
