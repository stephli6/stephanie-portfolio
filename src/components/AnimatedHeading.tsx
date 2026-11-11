"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedHeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  highlight?: string;
  highlightClassName?: string;
  delay?: number;
  charDelay?: number;
  paragraph?: boolean;
}

export default function AnimatedHeading({
  text,
  as: Tag = "h2",
  className = "",
  highlight,
  highlightClassName = "text-highlight-primary",
  delay = 0,
  charDelay = 28,
  paragraph = false,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLElement | null>(null);
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
  let charIndex = 0;

  const renderWord = (word: string, key: string, highlighted: boolean) => {
    const chars = word.split("");
    const spans = chars.map((char, i) => {
      const idx = charIndex++;
      return (
        <span
          key={`${key}-${i}`}
          className={`inline-block ${highlighted ? highlightClassName : ""}`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)`,
            transitionDelay: `${delay + idx * charDelay}ms`,
          }}
        >
          {char}
        </span>
      );
    });
    return (
      <span
        key={key}
        className="mr-[0.25em] inline-block overflow-y-hidden whitespace-nowrap"
      >
        {spans}
      </span>
    );
  };

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>}
      className={className}
      style={{ opacity: visible ? 1 : 0 }}
    >
      {highlight && text.includes(highlight) ? (
        <>
          {text.split(highlight)[0].trim().split(" ").map((w, i) =>
            renderWord(w, `pre-${i}`, false)
          )}
          {highlight.split(" ").map((w, i) => renderWord(w, `hl-${i}`, true))}
          {(text.split(highlight)[1] ?? "").trim().split(" ").map((w, i) =>
            renderWord(w, `post-${i}`, false)
          )}
        </>
      ) : (
        words.map((w, i) => renderWord(w, `all-${i}`, false))
      )}
      {paragraph ? <span> </span> : null}
    </Tag>
  );
}
