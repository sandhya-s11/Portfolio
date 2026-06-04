import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Database,
  Brain,
  Cloud,
  Wrench,
  HeartHandshake,
} from "lucide-react";
import { Section } from "./Section";
import { skills } from "@/lib/portfolio-data";

const icons = [Code, Globe, Database, Brain, Cloud, Wrench, HeartHandshake];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="My technical toolkit"
      description="Technologies and tools I work with across the stack."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 rounded-2xl glass shadow-card hover:shadow-glow transition-smooth"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-lg bg-gradient-brand flex items-center justify-center text-white">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent text-accent-foreground border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
