"use client";

import { certifications, education, experiences } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";

export function ExperienceEducation() {
  const EduIcon = education.icon;

  return (
    <>
      <Section id="experience" eyebrow="Experience" title="Self-directed project work, hackathon collaboration, and continuous technical growth.">
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-zinc-200 dark:bg-white/10 sm:block" />
          <div className="grid gap-6">
            {experiences.map((item, index) => (
              <Reveal key={`${item.role}-${item.company}`} delay={index * 0.08}>
                <Card className="relative sm:ml-12">
                  <span className="absolute -left-[3.25rem] top-7 hidden size-4 rounded-full border-4 border-white bg-cyan-500 dark:border-zinc-950 sm:block" />
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <Badge>{item.type}</Badge>
                        <h3 className="mt-3 text-2xl font-semibold text-zinc-950 dark:text-white">{item.role}</h3>
                        <p className="mt-1 text-zinc-600 dark:text-zinc-300">{item.company}</p>
                      </div>
                      <span className="text-sm font-semibold text-zinc-500">{item.period}</span>
                    </div>
                    <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">{item.summary}</p>
                    <ul className="mt-4 grid gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                      {item.achievements.map((achievement) => <li key={achievement}>• {achievement}</li>)}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tech.map((tech) => <Badge key={tech}>{tech}</Badge>)}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="education" eyebrow="Education" title="Information Technology foundation with strong project-building momentum.">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Card className="h-full p-7">
              <div className="grid size-14 place-items-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                <EduIcon className="size-7" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-zinc-950 dark:text-white">{education.degree}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">{education.college}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Badge>{education.period}</Badge>
                <Badge>CGPA {education.cgpa}</Badge>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="p-7">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-zinc-950 dark:text-white">Relevant coursework</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {education.coursework.map((course) => <Badge key={course}>{course}</Badge>)}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-950 dark:text-white">Achievements</h4>
                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {education.achievements.map((achievement) => <li key={achievement}>• {achievement}</li>)}
                  </ul>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section id="certifications" eyebrow="Certifications" title="Certificates and workshops that support my full-stack learning path.">
        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((certification, index) => (
            <Reveal key={certification.title} delay={index * 0.06}>
              <Card className="h-full p-6 transition hover:-translate-y-1 hover:shadow-2xl">
                <Badge>{certification.date}</Badge>
                <h3 className="mt-5 text-xl font-semibold text-zinc-950 dark:text-white">{certification.title}</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300">{certification.issuer}</p>
                <Button asChild variant="secondary" className="mt-6">
                  <a href={certification.credential} target="_blank" rel="noreferrer">Verify Credential</a>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
