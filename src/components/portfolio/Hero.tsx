import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, FolderOpen, Github, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { profile } from "@/lib/portfolio-data";

const stats = [
  { value: "180+", label: "LeetCode Problems" },
  { value: "950+", label: "SkillRack Problems" },
  { value: "8.18", label: "CGPA" },
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % profile.roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 size-96 rounded-full bg-brand-purple/30 blur-3xl" />
        <div className="absolute top-1/2 -right-24 size-96 rounded-full bg-brand-blue/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-72 rounded-full bg-brand-cyan/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for internships
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Hi, I'm <span className="text-gradient">{profile.name}</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-muted-foreground font-medium">
              {profile.title}
            </p>

            <div className="mt-6 h-8 flex items-center">
              <span className="text-sm font-semibold text-muted-foreground mr-2">I am a</span>
              <motion.span
                key={idx}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-lg font-bold text-gradient"
              >
                {profile.roles[idx]}
              </motion.span>
            </div>

            <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">{profile.intro}</p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-4">
              {stats.map((s) => (
                <div key={s.label} className="px-5 py-3 rounded-2xl glass shadow-card text-center min-w-[100px]">
                  <p className="text-2xl font-bold text-gradient">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download="Sandhya_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-white font-medium shadow-glow hover:opacity-90 transition-smooth"
              >
                <Download className="size-4" /> Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium hover:bg-accent transition-smooth"
              >
                <FolderOpen className="size-4" /> View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-medium hover:bg-accent transition-smooth"
              >
                <Mail className="size-4" /> Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[
                { href: profile.socials.github, label: "GitHub", Icon: Github },
                { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: profile.socials.email, label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={label === "Email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="p-2.5 rounded-full glass hover:shadow-glow hover:scale-110 transition-smooth"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto"
          >
            <div className="relative size-72 sm:size-80 md:size-96">
              <div className="absolute -inset-4 rounded-full bg-gradient-brand opacity-40 blur-2xl animate-pulse" />
              <div className="relative size-full rounded-full p-1.5 bg-gradient-brand shadow-glow">
                <div className="size-full rounded-full glass-strong p-2">
                  <img
                    src={profileImg}
                    alt="Sandhya - Computer Science & Business Systems Student"
                    width={768}
                    height={768}
                    className="size-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 glass-strong rounded-2xl px-4 py-2 shadow-card">
                <p className="text-xs font-bold text-gradient">CSBS Student</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
