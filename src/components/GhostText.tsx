"use client";

import { useEffect, useRef, useState } from "react";

interface GhostTextProps {
  text: string;
  className?: string;
  wordDelay?: number;
}

export default function GhostText({
  text,
  className = "",
  wordDelay = 22,
}: GhostTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className={`text-center font-satoshi font-medium leading-[1.38] tracking-tight ${className}`}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block transition-all duration-700 ease-out mr-[0.28em]"
          style={{
            opacity: visible ? 1 : 0.25,
            color: visible ? "var(--text-primary)" : "var(--text-secondary)",
            transform: visible ? "translateY(0)" : "translateY(6px)",
            transitionDelay: visible ? `${i * wordDelay}ms` : "0ms",
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

