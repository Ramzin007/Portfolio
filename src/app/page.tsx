import { About } from "@/sections/about";
import { Blog } from "@/sections/blog";
import { Contact } from "@/sections/contact";
import { ExperienceEducation } from "@/sections/experience";
import { GithubStats } from "@/sections/github-stats";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Services } from "@/sections/services";
import { Skills } from "@/sections/skills";
import { Testimonials } from "@/sections/testimonials";
import { Footer } from "@/components/layout/footer";
import { profile } from "@/data/portfolio";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    address: profile.location,
    url: "https://aarav.dev",
    sameAs: [profile.github, profile.linkedin, profile.twitter],
    knowsAbout: ["Next.js", "TypeScript", "React", "UI/UX Design", "Full Stack Development"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Services />
        <Testimonials />
        <Blog />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
