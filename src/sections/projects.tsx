"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, GitBranch, Search } from "lucide-react";
import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { cn } from "@/lib/utils";

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <Image
          src={project.thumbnail}
          alt={`${project.title} interface thumbnail`}
          width={1024}
          height={576}
          className="rounded-2xl border border-zinc-200 bg-zinc-950/60 p-1 object-contain dark:border-white/10"
        />
        <div className="mt-4 grid grid-cols-2 gap-3">
          {project.screenshots.map((screenshot) => (
            <Image
              key={screenshot}
              src={screenshot}
              alt={`${project.title} screenshot`}
              width={512}
              height={288}
              className="rounded-xl border border-zinc-200 bg-zinc-950/60 p-0.5 object-cover object-top aspect-video dark:border-white/10"
            />
          ))}
        </div>
      </div>
      <div>
        <Badge>{project.status}</Badge>
        <DialogTitle className="mt-4 text-3xl font-semibold text-zinc-950 dark:text-white">
          {project.title}
        </DialogTitle>
        <DialogDescription className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {project.description}
        </DialogDescription>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => <Badge key={tech}>{tech}</Badge>)}
        </div>
        <div className="mt-7 grid gap-5">
          {project.features?.length ? (
            <div>
              <h4 className="font-semibold text-zinc-950 dark:text-white">Key Features</h4>
              <ul className="mt-2.5 space-y-2 text-zinc-600 dark:text-zinc-300">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm leading-6">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-500" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {[
            ["Challenge", project.challenges],
            ["Architecture", project.architecture],
            ["Performance", project.performance],
          ].map(([label, value]) => (
            <div key={label}>
              <h4 className="font-semibold text-zinc-950 dark:text-white">{label}</h4>
              <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-300">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          {project.demo ? (
            <Button asChild>
              <a href={project.demo} target="_blank" rel="noreferrer">
                <ExternalLink className="size-4" /> Live Demo
              </a>
            </Button>
          ) : null}
          {project.github ? (
            <Button asChild variant="secondary">
              <a href={project.github} target="_blank" rel="noreferrer">
                <GitBranch className="size-4" /> View Code
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Dialog>
      <Card className={cn(
        "group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-2xl",
        large ? "lg:grid lg:grid-cols-[1.2fr_1fr]" : "flex flex-col h-full"
      )}>
        <div className={cn(
          "relative overflow-hidden bg-zinc-950/80 dark:bg-black/80 flex items-center justify-center",
          large ? "min-h-[280px] sm:min-h-[340px] lg:min-h-full p-2.5 sm:p-4" : "min-h-60 aspect-video p-1"
        )}>
          <Image
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            width={1024}
            height={576}
            className={cn(
              "w-full h-auto max-h-full rounded-xl transition duration-700 group-hover:scale-[1.02]",
              large ? "object-contain" : "h-full object-cover object-top"
            )}
          />
          <div className="absolute left-4 top-4 flex gap-2">
            <Badge className="bg-white/85 text-zinc-900 shadow-sm backdrop-blur-md dark:bg-zinc-900/90 dark:text-zinc-100">{project.status}</Badge>
            {project.featured ? <Badge className="bg-cyan-500/20 text-cyan-700 border border-cyan-500/30 dark:bg-cyan-500/20 dark:text-cyan-300">Featured</Badge> : null}
          </div>
        </div>
        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
            </div>
            {project.title.includes(" — ") ? (
              <div className="mt-4">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
                  {project.title.split(" — ")[0]}
                </h3>
                <p className="mt-1 text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  {project.title.split(" — ")[1]}
                </p>
              </div>
            ) : (
              <h3 className="mt-4 text-2xl font-semibold text-zinc-950 dark:text-white">{project.title}</h3>
            )}
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">{project.description}</p>
            {large && project.features?.length ? (
              <div className="mt-4 border-t border-zinc-200/70 pt-3.5 dark:border-white/10">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Key Highlights
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.slice(0, 4).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs leading-5 text-zinc-600 dark:text-zinc-300">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-500" />
                      <span className="line-clamp-2">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.slice(0, large ? 7 : 4).map((tech) => (
                <span key={tech} className="rounded-md border border-zinc-200/60 bg-zinc-100/80 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
            <DialogTrigger asChild>
              <Button variant="gradient">Case Study</Button>
            </DialogTrigger>
            {project.demo ? (
              <Button asChild variant="secondary">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <ExternalLink className="size-4" /> Live Demo
                </a>
              </Button>
            ) : null}
            {project.github ? (
              <Button asChild variant="secondary">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GitBranch className="size-4" /> View Code
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </Card>
      <DialogContent>
        <ProjectDetails project={project} />
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  const matchesFilters = useCallback((project: Project) => {
    const matchesCategory = category === "All" || project.category === category;
    const haystack = `${project.title} ${project.description} ${project.tech.join(" ")}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase());
  }, [category, query]);
  const featured = useMemo(
    () => projects.filter((project) => project.featured && matchesFilters(project)),
    [matchesFilters],
  );
  const filtered = useMemo(
    () => projects.filter((project) => !project.featured && matchesFilters(project)),
    [matchesFilters],
  );

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Practical web projects with real learning behind the interface."
      description="Each project shows the stack, implementation thinking, challenges, and where I am growing across frontend, backend, APIs, and full-stack architecture."
    >
      <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects by technology, category, or keyword" className="pl-11" />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-cyan-300 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200",
                category === item && "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-10 grid gap-5 lg:grid-cols-3">
        {featured.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05} className={index === 0 ? "lg:col-span-3" : ""}>
            <ProjectCard project={project} large={index === 0} />
          </Reveal>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <motion.div key={project.id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
