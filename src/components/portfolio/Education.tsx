import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { Section } from "./Section";
import { coursework } from "@/lib/portfolio-data";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl glass shadow-card relative overflow-hidden"
        >
          <div className="absolute -top-16 -right-16 size-48 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <div className="size-14 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-glow mb-5">
            <GraduationCap className="size-7" />
          </div>
          <h3 className="text-2xl font-bold">Bachelor of Technology</h3>
          <p className="text-muted-foreground mt-1">Computer Science & Business Systems (CSBS)</p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-soft text-xs font-medium border border-border">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            Currently Pursuing
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl glass shadow-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="size-5 text-gradient" />
            <h3 className="font-semibold">Relevant Coursework</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {coursework.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent border border-border"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
