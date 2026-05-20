"use client";

import { Mail, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { blogPosts } from "@/data/portfolio";
import { readingTime } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";

export function Blog() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => blogPosts.filter((post) => `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <Section
      id="blog"
      eyebrow="Blog"
      title="Sharp notes on product interfaces, performance, and AI workflows."
      description="The structure is MDX-ready: the data source can be swapped for file-based content or a headless CMS without changing the section UI."
    >
      <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles, tags, categories" className="pl-11" />
        </div>
        <form className="flex gap-2" aria-label="Newsletter subscription">
          <Input type="email" placeholder="Email for new essays" aria-label="Email address" />
          <Button type="submit" variant="gradient"><Mail className="size-4" /> Join</Button>
        </form>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {filtered.map((post, index) => (
          <Reveal key={post.title} delay={index * 0.05}>
            <Card className="h-full p-6 transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-wrap gap-2">
                <Badge>{post.category}</Badge>
                <Badge>{readingTime(post.content)} min read</Badge>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-zinc-950 dark:text-white">{post.title}</h3>
              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => <span key={tag} className="text-xs font-semibold text-cyan-600 dark:text-cyan-300">#{tag}</span>)}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
