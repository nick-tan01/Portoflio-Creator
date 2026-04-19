"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled
          ? "bg-ivory/80 backdrop-blur-md border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-page items-center justify-between px-6">
        <a
          href="#top"
          className="font-sans text-[15px] font-medium tracking-wide text-ink"
        >
          Tania Tan
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="relative flex items-center text-[14px] font-medium tracking-wide text-ink link-underline"
            >
              {active === s.id && (
                <span
                  aria-hidden
                  className="mr-2 inline-block h-1 w-1 rounded-full bg-champagne"
                />
              )}
              {s.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden text-ink"
          onClick={() => setMobileOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ivory px-6 pt-6 md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[15px] font-medium text-ink">Tania Tan</span>
            <button
              aria-label="Close menu"
              className="text-ink"
              onClick={() => setMobileOpen(false)}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="mt-16 flex flex-col gap-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-[32px] text-ink"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
