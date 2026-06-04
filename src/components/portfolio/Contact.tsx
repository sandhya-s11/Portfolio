import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Check } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/lib/portfolio-data";

function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
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

const contactLinks = [
  { Icon: Mail, label: "Email", href: profile.socials.email, value: "sandhyasakthivel11@gmail.com" },
  { Icon: Linkedin, label: "LinkedIn", href: profile.socials.linkedin, value: "linkedin.com/in/sandhya-s-61b79134b" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(fd.get("subject") || ""));
    const body = encodeURIComponent(
      `Hi Sandhya,\n\n${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`,
    );
    window.location.href = `${profile.socials.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let's build something together"
      description="Open to internships, collaborations, and interesting conversations."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {contactLinks.map(({ Icon, label, href, value }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl glass shadow-card hover:shadow-glow transition-smooth"
            >
              <div className="size-11 rounded-xl bg-gradient-brand flex items-center justify-center text-white shadow-glow flex-shrink-0">
                <Icon className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="font-medium truncate text-sm">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-2xl glass shadow-card space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Name" />
            <Field name="email" label="Email" type="email" />
          </div>
          <Field name="subject" label="Subject" />
          <div>
            <label className="text-xs font-medium text-muted-foreground">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-white font-medium shadow-glow hover:opacity-90 transition-smooth"
          >
            {sent ? (
              <><Check className="size-4" /> Opening email client...</>
            ) : (
              <><Send className="size-4" /> Send Message</>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ name, label, type = "text" }: { name: string; label: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="mt-1.5 w-full px-4 py-3 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
      />
    </div>
  );
}
