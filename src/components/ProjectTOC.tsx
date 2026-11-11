"use client";

import { useEffect, useState } from "react";
import { ListTree } from "lucide-react";

interface TOCItem {
  title: string;
  slug: string;
}

export default function ProjectTOC({ items }: { items: TOCItem[] }) {
  const [activeSlug, setActiveSlug] = useState<string>(items[0]?.slug ?? "");

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveSlug(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    const el = document.getElementById(slug);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", `#${slug}`);
      setActiveSlug(slug);
    }
  };

  return (
    <div className="flex flex-col gap-3 pt-2">
      <h3 className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400">
        <ListTree size={16} className="text-highlight" />
        <span>On this page</span>
      </h3>
      <nav className="relative flex flex-col space-y-1 text-sm border-l border-zinc-800 pl-3.5">
        {items.map((item) => {
          const isActive = activeSlug === item.slug;
          return (
            <a
              key={item.slug}
              href={`#${item.slug}`}
              onClick={(e) => scrollTo(e, item.slug)}
              className={`block py-1 transition-all duration-200 text-sm ${
                isActive
                  ? "text-highlight font-medium translate-x-1"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
