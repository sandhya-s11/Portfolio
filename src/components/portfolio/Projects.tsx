import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, Cpu, Lightbulb, Layers } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/lib/portfolio-data";

const categories = ["All", "AI", "Full Stack"];

type Project = (typeof projects)[number];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full glass-strong rounded-2xl shadow-card overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <div className="h-36 bg-gradient-brand flex items-center justify-center relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_1px),radial-gradient(circle_at_80%_70%,white_1px,transparent_1px)] bg-[length:24px_24px]" />
          <h2 className="relative text-2xl font-bold text-white text-center px-8">{project.title}</h2>
        </div>

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-smooth"
        >
          <X className="size-4" />
        </button>

        <div className="p-6 space-y-6">
          <div>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers className="size-4 text-gradient" />
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Technologies Used</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-accent border border-border">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="size-4 text-gradient" />
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Features</h3>
            </div>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 rounded-full bg-gradient-brand flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="size-4 text-gradient" />
              <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Learning Outcomes</h3>
            </div>
            <ul className="space-y-2">
              {project.learnings.map((l) => (
                <li key={l} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 rounded-full bg-brand-cyan flex-shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [modal, setModal] = useState<Project | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Projects I've built"
      description="A selection of recent work spanning AI, full-stack development, and real-world systems."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
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

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <motion.div
            key={p.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group flex flex-col rounded-2xl glass shadow-card hover:shadow-glow transition-smooth overflow-hidden"
          >
            <div className="relative h-48 bg-gradient-brand flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_1px),radial-gradient(circle_at_80%_70%,white_1px,transparent_1px)] bg-[length:24px_24px]" />
              <h3 className="relative text-2xl font-bold text-white font-display text-center px-6">
                {p.title}
              </h3>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium bg-accent border border-border">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <button
                  onClick={() => setModal(p)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-gradient-brand text-white shadow-glow hover:opacity-90 transition-smooth"
                >
                  <Eye className="size-4" /> View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </Section>
  );
}
