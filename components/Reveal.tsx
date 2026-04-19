"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reveal immediately if already in viewport on mount
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      node.classList.add("is-visible");
      return;
    }

    // Safety fallback: reveal after 400ms regardless
    const timer = setTimeout(() => node.classList.add("is-visible"), 400);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearTimeout(timer);
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={`reveal ${className}`}>
      {children}
    </Component>
  );
}
