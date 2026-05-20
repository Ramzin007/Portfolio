"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, BriefcaseBusiness, Download, GitBranch, Link, Mail, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data/portfolio";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 90]);

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:px-8" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(244,63,94,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,247,251,0.95))] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.16),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(244,63,94,0.12),transparent_30%),linear-gradient(180deg,#08080b,#101015)]" />
      <div className="noise absolute inset-0 -z-10 opacity-40" />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-24 -z-10 h-72 w-72 sm:h-[28rem] sm:w-[28rem] -translate-x-1/2 rounded-full border border-cyan-300/30"
        style={{ y }}
      />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <Badge className="mb-6 gap-2">
            <span className="size-2 rounded-full bg-emerald-400" />
            {profile.availability}
          </Badge>
          <h1 id="hero-title" className="text-balance text-5xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
            {profile.name}
            <span className="mt-3 block bg-[linear-gradient(135deg,#06b6d4,#8b5cf6,#f43f5e)] bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-650 dark:text-zinc-300 sm:text-xl">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="gradient">
              <a href="#contact"><BriefcaseBusiness className="size-4" /> Hire Me</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={profile.resumeUrl} download><Download className="size-4" /> Download Resume</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#projects"><Play className="size-4" /> View Projects</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-3">
            {[
              { href: profile.github, label: "GitHub", icon: GitBranch },
              { href: profile.linkedin, label: "LinkedIn", icon: Link },
              { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="grid size-11 place-items-center rounded-full border border-zinc-200/70 bg-white/70 text-zinc-700 shadow-soft transition hover:-translate-y-1 hover:text-cyan-600 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[34rem]"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-[conic-gradient(from_120deg,#06b6d4,#8b5cf6,#f43f5e,#06b6d4)] opacity-25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/70 p-4 shadow-2xl backdrop-blur-2xl dark:bg-white/[0.07]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-zinc-100 dark:bg-zinc-900">
              <Image
                src="/images/profile.jpg"
                alt="Portrait of Muhammed Ramzin P"
                width={640}
                height={800}
                priority
                className="h-full w-full object-cover object-[center_24%]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-[linear-gradient(180deg,transparent_55%,rgba(8,8,11,0.18))]" />
            </div>
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/25 bg-white/80 p-4 shadow-soft backdrop-blur-xl dark:bg-zinc-950/75">
              <div className="flex items-center gap-3">
                <Sparkles className="size-5 text-cyan-500" />
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">Building practical web products while growing deeper in backend engineering.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce rounded-full p-2 text-zinc-500 sm:block"
      >
        <ArrowDown className="size-5" />
      </a>
    </section>
  );
}
