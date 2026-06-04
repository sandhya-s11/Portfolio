import { motion } from "framer-motion";
import { Section } from "./Section";
import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Leadership"
      title="My journey so far"
      description="Academic projects, leadership, and continuous learning."
    >
      <div className="relative max-w-3xl">
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-brand opacity-30" />
        {experience.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className={`relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 mb-10 ${
              i % 2 === 0 ? "" : "sm:[&>div]:col-start-2"
            }`}
          >
            <div className="absolute left-2.5 sm:left-1/2 sm:-translate-x-1/2 top-2 size-3 rounded-full bg-gradient-brand shadow-glow" />
            <div className="p-6 rounded-2xl glass shadow-card">
              <h3 className="font-semibold text-lg">{e.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{e.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
