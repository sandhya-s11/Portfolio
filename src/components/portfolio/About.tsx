import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  Compass,
  GraduationCap,
  Sparkles,
  Zap,
} from "lucide-react";
import { Section } from "./Section";
import { aboutCards, profile } from "@/lib/portfolio-data";

const icons = [Lightbulb, Users, Compass, GraduationCap, Sparkles, Zap];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="A curious builder turning ideas into software"
      description={profile.about}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {aboutCards.map((c, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative p-6 rounded-2xl glass shadow-card hover:shadow-glow transition-smooth hover:-translate-y-1"
            >
              <div className="size-11 rounded-xl bg-gradient-brand flex items-center justify-center text-white mb-4 shadow-glow">
                <Icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
