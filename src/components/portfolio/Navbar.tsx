import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { navItems } from "@/lib/portfolio-data";
import { useTheme } from "@/components/theme-provider";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((n) => document.getElementById(n.id));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "glass-strong shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold text-gradient">
          Sandhya.
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth hover:text-foreground ${
                  active === n.id ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {n.label}
                {active === n.id && (
                  <span className="block h-0.5 mt-1 rounded-full bg-gradient-brand" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-brand text-white text-sm font-medium shadow-glow hover:opacity-90 transition-smooth"
          >
            <Download className="size-4" /> Resume
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-full glass hover:bg-accent transition-smooth"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-full glass"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border">
          <ul className="px-4 py-4 space-y-1">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    active === n.id ? "text-foreground bg-accent" : "text-muted-foreground"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
