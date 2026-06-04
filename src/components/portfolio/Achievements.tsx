import { motion } from "framer-motion";
import { achievements } from "@/lib/portfolio-data";

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gradient mb-3">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Milestones & recognition</h2>
          <p className="mt-4 text-muted-foreground">
            Highlights from hackathons, competitions, and technical events.
          </p>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-purple via-brand-blue to-brand-cyan hidden sm:block" />

          <div className="space-y-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                {/* timeline dot */}
                <div className="relative hidden sm:flex flex-shrink-0 size-12 rounded-full bg-gradient-brand items-center justify-center text-2xl shadow-glow z-10">
                  {a.icon}
                </div>

                <div className="flex-1 p-6 rounded-2xl glass shadow-card hover:shadow-glow transition-smooth">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl sm:hidden">{a.icon}</span>
                    <h3 className="text-lg font-bold">{a.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
