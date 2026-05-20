"use client";

import { Check } from "lucide-react";
import { services } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Engineering Focus"
      title="What I am building, learning, and applying through real projects."
      description="A practical, honest snapshot of the areas I can contribute to now and the engineering skills I am actively strengthening."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 0.05}>
              <Card className="flex h-full flex-col p-6">
                <div className="grid size-12 place-items-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-zinc-950 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white">{service.price}</p>
                <p className="mt-4 flex-1 leading-7 text-zinc-600 dark:text-zinc-300">{service.description}</p>
                <ul className="mt-5 grid gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-2"><Check className="mt-0.5 size-4 text-emerald-500" /> {feature}</li>
                  ))}
                </ul>
                <Button asChild className="mt-6" variant={index === 1 ? "gradient" : "secondary"}>
                  <a href="#contact">Connect</a>
                </Button>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
