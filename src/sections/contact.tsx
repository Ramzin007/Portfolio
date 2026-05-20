"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, GitBranch, Handshake, Mail, Send, Smartphone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { Toast } from "@/components/ui/toast";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  message: z.string().min(20, "Tell me a little more about the project."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [toastOpen, setToastOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactValues) {
    const response = await fetch("https://formspree.io/f/mvzyzjpe", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      reset();
      setToastOpen(true);
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to internships, freelance projects, and collaborative builds."
      description="Use the form to reach me directly through Formspree, or connect through email, GitHub, and LinkedIn."
    >
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <Card className="h-full p-7">
            <BadgeLike>{profile.availability}</BadgeLike>
            <div className="mt-8 grid gap-5">
              {[
                { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                { icon: Smartphone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
                { icon: GitBranch, label: "GitHub", value: "Ramzin007", href: profile.github },
                { icon: Handshake, label: "LinkedIn", value: "muhammedramzinp", href: profile.linkedin },
                { icon: CalendarDays, label: "Availability", value: profile.availability, href: "#contact" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} className="flex gap-4 rounded-2xl p-2 transition hover:bg-zinc-100 dark:hover:bg-white/10">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">{item.label}</p>
                      <p className="font-semibold text-zinc-950 dark:text-white">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="mt-8 rounded-2xl border border-zinc-200 bg-[linear-gradient(135deg,#dff7ff,#f7e7ff,#ffe8ef)] p-5 dark:border-white/10 dark:bg-[linear-gradient(135deg,#082f49,#2e1065,#4c0519)]">
              <div className="rounded-xl border border-white/50 bg-white/45 p-5 backdrop-blur dark:border-white/10 dark:bg-white/10">
                <p className="font-semibold text-zinc-950 dark:text-white">Current focus</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  Backend systems, API architecture, database fundamentals, DSA, and building practical full-stack applications with clean user experiences.
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <Card className="p-7">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
              <FieldError message={errors.name?.message}>
                <Input {...register("name")} placeholder="Your name" aria-invalid={Boolean(errors.name)} />
              </FieldError>
              <FieldError message={errors.email?.message}>
                <Input {...register("email")} type="email" placeholder="you@example.com" aria-invalid={Boolean(errors.email)} />
              </FieldError>
              <FieldError message={errors.message?.message}>
                <Textarea {...register("message")} placeholder="Tell me about the internship, project, collaboration, or idea." aria-invalid={Boolean(errors.message)} />
              </FieldError>
              <Button type="submit" variant="gradient" disabled={isSubmitting}>
                <Send className="size-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </Reveal>
      </div>
      <Toast open={toastOpen} onOpenChange={setToastOpen} title="Message sent" description="Thanks. Your message has been submitted through Formspree." />
    </Section>
  );
}

function FieldError({ children, message }: { children: React.ReactNode; message?: string }) {
  return (
    <label className="grid gap-2">
      {children}
      {message ? <span className="text-sm font-medium text-rose-500">{message}</span> : null}
    </label>
  );
}

function BadgeLike({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300">{children}</span>;
}
