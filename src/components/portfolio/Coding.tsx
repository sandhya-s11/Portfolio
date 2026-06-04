import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

function HackerRankIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24C10.715 24 2.25 19.114 1.608 18 .963 16.886.963 7.116 1.608 6 2.25 4.886 10.715 0 12 0zm2.205 6.015V7.5h-1.41c-.424 0-.548.067-.548.549v1.818h1.96l-.229 2.116h-1.73V18h-2.4v-6.017H8.58V9.867h1.267v-1.6c0-1.759 1.187-2.252 2.67-2.252h1.688z" />
    </svg>
  );
}

function CodeChefIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.257.004C5.588.086.414 4.365.033 10.009c-.198 2.939.658 5.506 2.585 7.675 1.927 2.17 4.453 3.4 7.367 3.638.315.026.646.04.992.04 2.69 0 5.26-.826 7.43-2.477 2.17-1.65 3.665-3.916 4.323-6.578.657-2.661.367-5.309-.837-7.656C20.69 2.303 18.28.576 15.312.118 13.958-.1 12.58-.01 11.257.004zm-.155 2.275c.144 0 .288.002.43.007 1.166.04 2.316.357 3.324.944.95.553 1.747 1.34 2.35 2.31l-2.248 1.45a4.18 4.18 0 0 0-1.452-1.424 4.212 4.212 0 0 0-2.043-.534c-2.338 0-4.24 1.9-4.24 4.236S9.164 13.51 11.5 13.51c.74 0 1.456-.197 2.073-.57a4.1 4.1 0 0 0 1.437-1.487l2.246 1.45a6.76 6.76 0 0 1-2.36 2.328 6.74 6.74 0 0 1-3.396.912c-3.724 0-6.748-3.024-6.748-6.749s3.024-6.75 6.748-6.75c.2 0 .402.007.602.02v-.385zm5.327 5.9 1.66-1.073.018.03c.46.745.713 1.614.714 2.497l-1.947.006a3.293 3.293 0 0 0-.445-1.46zm-1.005 3.97.005.007-1.664 1.068a3.307 3.307 0 0 0 .44-1.457l1.946-.006c-.001.135-.007.27-.019.404l-.708-.016z" />
    </svg>
  );
}

function SkillRackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

const platforms = [
  {
    name: "LeetCode",
    desc: "Algorithmic problem solving",
    Icon: LeetCodeIcon,
    href: profile.socials.leetcode,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "HackerRank",
    desc: "Programming challenges & certifications",
    Icon: HackerRankIcon,
    href: profile.socials.hackerrank,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "CodeChef",
    desc: "Competitive programming",
    Icon: CodeChefIcon,
    href: profile.socials.codechef,
    color: "from-amber-600 to-brown-700",
  },
  {
    name: "SkillRack",
    desc: "Coding practice & skill assessment",
    Icon: SkillRackIcon,
    href: profile.socials.skillrack,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "GitHub",
    desc: "Open-source projects & repositories",
    Icon: Github,
    href: profile.socials.github,
    color: "from-gray-700 to-gray-900",
  },
];

export function Coding() {
  return (
    <section id="coding" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gradient mb-3">
            Coding Profiles
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Where I build & practice</h2>
          <p className="mt-4 text-muted-foreground">
            Actively solving problems and building skills across competitive and collaborative coding platforms.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex flex-col p-6 rounded-2xl glass shadow-card hover:shadow-glow hover:-translate-y-1 transition-smooth"
            >
              <div
                className={`size-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white mb-4 shadow-glow`}
              >
                <p.Icon className="size-7" />
              </div>
              <h3 className="font-semibold text-base">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 flex-1">{p.desc}</p>
              <span className="mt-4 inline-block text-xs font-semibold text-gradient group-hover:underline">
                Visit Profile →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
