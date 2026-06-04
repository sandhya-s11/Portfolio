import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          {eyebrow && (
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gradient mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
          {description && (
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
