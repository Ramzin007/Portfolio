"use client";

import { skillCategories } from "@/data/portfolio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Modern stack, organized by how real products get built."
      description="Each category includes the technologies I reach for most, with practical confidence levels based on shipped work and hands-on projects."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.category} delay={index * 0.04}>
              <Card className="h-full transition hover:-translate-y-1 hover:shadow-2xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="grid size-11 place-items-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{category.category}</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                        <span className="text-zinc-500">{skill.experience}</span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
