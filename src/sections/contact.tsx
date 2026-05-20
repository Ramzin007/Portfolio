"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, Mail, MapPin, Send, Smartphone } from "lucide-react";
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
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
      title="Have a product surface that needs to feel unmistakably better?"
      description="The form validates on the client, posts to an API route, and is ready to connect to Resend, Postmark, SendGrid, or your preferred email service."
    >
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <Card className="h-full p-7">
            <BadgeLike>Open to internship, freelance, and startup roles</BadgeLike>
            <div className="mt-8 grid gap-5">
              {[
                { icon: Mail, label: "Email", value: profile.email },
                { icon: Smartphone, label: "Phone", value: profile.phone },
                { icon: MapPin, label: "Location", value: profile.location },
                { icon: CalendarDays, label: "Availability", value: profile.availability },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cyan-100 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">{item.label}</p>
                      <p className="font-semibold text-zinc-950 dark:text-white">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 h-64 overflow-hidden rounded-2xl border border-zinc-200 bg-[linear-gradient(135deg,#dff7ff,#f7e7ff,#ffe8ef)] p-5 dark:border-white/10 dark:bg-[linear-gradient(135deg,#082f49,#2e1065,#4c0519)]">
              <div className="grid h-full place-items-center rounded-xl border border-white/50 bg-white/45 text-center backdrop-blur dark:border-white/10 dark:bg-white/10">
                <div>
                  <MapPin className="mx-auto mb-3 size-8 text-cyan-600 dark:text-cyan-300" />
                  <p className="font-semibold text-zinc-950 dark:text-white">Bengaluru, India</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">Remote-friendly across time zones</p>
                </div>
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
                <Textarea {...register("message")} placeholder="Tell me about the role, project, timeline, or problem you want solved." aria-invalid={Boolean(errors.message)} />
              </FieldError>
              <Button type="submit" variant="gradient" disabled={isSubmitting}>
                <Send className="size-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </Reveal>
      </div>
      <Toast open={toastOpen} onOpenChange={setToastOpen} title="Message queued" description="Thanks. The API route received your message and is ready for email provider wiring." />
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
