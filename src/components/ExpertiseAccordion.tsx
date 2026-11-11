"use client";

import { useState } from "react";
import Image from "next/image";
import { BarChart3, ChevronDown, Database, Presentation } from "lucide-react";
import { skills } from "@/data/skills";

const expertiseItems = [
  {
    id: "analysis",
    number: "01",
    title: "Data Analysis",
    icon: Database,
    image: "/images/development.avif",
    description:
      "From raw exports to findings: SQL queries, Python analysis, and honest checks on what the data can and can't say. Every number is reproducible and documented.",
    highlights: ["SQL & Python", "Exploratory Analysis", "Data Quality Checks", "Reproducible Methods"],
  },
  {
    id: "dashboards",
    number: "02",
    title: "Dashboards & BI",
    icon: BarChart3,
    image: "/images/designing.avif",
    description:
      "Tableau and Power BI dashboards that non-technical teams can actually use — one question per chart, no decoration, and the method behind every metric.",
    highlights: ["Tableau", "Power BI", "KPI Design", "Self-Serve Reporting"],
  },
  {
    id: "storytelling",
    number: "03",
    title: "Data Storytelling",
    icon: Presentation,
    image: "/images/branding.avif",
    description:
      "Findings written up so a decision-maker can act on them: the number, the context, the size of the effect — and the limit of what we know.",
    highlights: ["Executive Summaries", "Funnel & Retention Analysis", "Recommendations", "Documentation"],
  },
];

export default function ExpertiseAccordion() {
  const [active, setActive] = useState<string>("analysis");

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* 2-Column Accordion & Photo Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Accordion */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3.5">
          {expertiseItems.map((item) => {
            const isActive = active === item.id;
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-400 ${
                  isActive
                    ? "border-zinc-700 bg-zinc-900/90 shadow-lg shadow-black/20"
                    : "border-zinc-800/80 bg-bg-800/60 hover:border-zinc-700 hover:bg-bg-800"
                }`}
              >
                <button
                  onClick={() => setActive(isActive ? "" : item.id)}
                  aria-expanded={isActive}
                  className="flex w-full cursor-pointer items-center justify-between p-5 text-left transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-clash-display text-sm font-semibold transition-colors ${
                        isActive ? "text-highlight-primary" : "text-zinc-500"
                      }`}
                    >
                      {item.number}
                    </span>
                    <item.icon
                      size={20}
                      className={`transition-colors ${
                        isActive ? "text-highlight-primary" : "text-zinc-400"
                      }`}
                    />
                    <span className="font-clash-display text-lg sm:text-xl font-semibold text-text-primary">
                      {item.title}
                    </span>
                  </div>

                  <div
                    className={`flex size-8 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-highlight/40 bg-highlight/10 text-highlight-primary rotate-180"
                        : "border-zinc-800 bg-zinc-900 text-zinc-400 rotate-0"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {/* Smooth Expandable Content */}
                <div
                  className={`grid transition-all duration-400 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100 px-5 pb-5" : "grid-rows-[0fr] opacity-0 px-5 pb-0"
                  }`}
                >
                  <div className="overflow-hidden space-y-4 pt-1">
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1 text-xs font-medium text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Visual Showcase Photo */}
        <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] w-full overflow-hidden rounded-3xl border border-zinc-800 bg-bg-800 shadow-2xl">
          {expertiseItems.map((item) => (
            <div
              key={item.id}
              className={`absolute inset-0 h-full w-full transition-all duration-700 ease-out ${
                active === item.id
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105 pointer-events-none"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
                priority={item.id === "analysis"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-zinc-300 font-medium">
                <span className="rounded-full bg-black/60 px-3 py-1 backdrop-blur-md border border-white/10">
                  {item.title}
                </span>
                <span className="text-zinc-400">Workspace &amp; Tools</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Marquee Row */}
      <div className="relative pt-4">
        <div className="mask-marquee overflow-hidden">
          <div
            className="flex w-max animate-marquee hover:[animation-play-state:paused]"
            style={{ "--duration": "35s", gap: "14px" } as React.CSSProperties}
          >
            {[...skills, ...skills, ...skills].map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-zinc-800/80 bg-zinc-900/80 px-4 py-2 text-xs sm:text-sm font-medium text-zinc-200 shadow-sm transition-all duration-300 hover:border-highlight/50 hover:bg-zinc-800/90"
              >
                <div className="relative h-[18px] w-[18px] shrink-0">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={18}
                    height={18}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

