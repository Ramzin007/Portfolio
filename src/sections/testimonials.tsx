"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/shared/section";

export function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Learning & Collaboration" title="How I learn, build, and work with others.">
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex w-max gap-5"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card key={`${testimonial.name}-${index}`} className="w-[20rem] p-6 sm:w-[28rem]">
              <div className="flex gap-2 text-cyan-500">
                {Array.from({ length: testimonial.rating }).map((_, item) => (
                  <Sparkles key={item} className="size-4" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-8 text-zinc-700 dark:text-zinc-200">{testimonial.quote}</p>
              <div className="mt-6">
                <p className="font-semibold text-zinc-950 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-zinc-500">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
