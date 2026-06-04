import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Coding } from "@/components/portfolio/Coding";
import { Achievements } from "@/components/portfolio/Achievements";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollUtils } from "@/components/portfolio/ScrollUtils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandhya — Computer Science & Business Systems Student" },
      {
        name: "description",
        content:
          "Personal portfolio of Sandhya — CSBS student, software developer, and AI enthusiast building practical software through modern technologies.",
      },
      { property: "og:title", content: "Sandhya — Software Developer & AI Enthusiast" },
      {
        property: "og:description",
        content: "Portfolio showcasing projects, skills, and certifications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Coding />
        <Achievements />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <ScrollUtils />
      </main>
    </ThemeProvider>
  );
}
