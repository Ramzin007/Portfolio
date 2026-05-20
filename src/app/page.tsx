import { About } from "@/sections/about";
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
    url: profile.linkedin,
    sameAs: [profile.github, profile.linkedin].filter(Boolean),
    knowsAbout: ["React.js", "Next.js", "Node.js", "Express.js", "REST APIs", "Full Stack Development"],
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
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
