import { useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "./Section";
import { certifications, certCategories } from "@/lib/portfolio-data";

export function Certifications() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? certifications : certifications.filter((c) => c.category === filter);

  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Credentials & continuous learning"
      description="Certifications across programming, IoT, databases, and software development."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {certCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
              filter === c ? "bg-gradient-brand text-white shadow-glow" : "glass hover:bg-accent"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((c, i) => (
          <motion.div
            key={c.name}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group p-6 rounded-2xl glass shadow-card hover:shadow-glow hover:-translate-y-1 transition-smooth flex flex-col"
          >
            <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-violet-400/80 to-purple-500/80 flex flex-col items-center justify-center mb-4 shadow-glow gap-2">
              <Award className="size-10 text-white" />
              <span className="text-white/80 text-xs font-bold tracking-widest uppercase px-3 text-center">
                {c.org}
              </span>
            </div>
            <h3 className="font-semibold leading-snug flex-1 text-white">{c.name}</h3>
            <p className="text-sm font-medium mt-1 text-violet-400">{c.org}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
