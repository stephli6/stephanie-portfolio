"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import AnimatedHeading from "@/components/AnimatedHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

type Filter = "All" | "Development" | "Design";

const filters: Filter[] = ["All", "Development", "Design"];

export default function ProjectsClient() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const visible = projects.filter((project) => {
    const matchesFilter =
      filter === "All" || project.categories.includes(filter as "Development" | "Design");
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q || project.title.toLowerCase().includes(q) || project.description.toLowerCase().includes(q);
    return matchesFilter && matchesQuery;
  });

  return (
    <section className="max-screen pt-10 sm:pt-14 md:pt-20 pb-20 md:pb-28">
      <span
        data-aos="fade"
        data-aos-offset="0"
        data-aos-duration="300"
        data-aos-easing="ease-in-out-sine"
        data-aos-delay="0"
      >
        <SectionLabel>My Work</SectionLabel>
      </span>

      <span
        data-aos="fade"
        data-aos-offset="0"
        data-aos-duration="300"
        data-aos-easing="ease-in-out-sine"
        data-aos-delay="200"
      >
        <AnimatedHeading
          text="Creating next level digital products"
          as="h2"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-clash-display text-text-primary"
        />
      </span>

      <span
        data-aos="fade"
        data-aos-offset="0"
        data-aos-duration="300"
        data-aos-easing="ease-in-out-sine"
        data-aos-delay="400"
      >
        <div className="mt-8 sm:mt-10 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="no-visible-scrollbar relative flex flex-row items-center gap-1 overflow-auto perspective-[1000px] sm:overflow-visible">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="relative rounded-full px-5 sm:px-6 py-2 cursor-pointer transition-colors"
                style={{ transformStyle: "preserve-3d" }}
              >
                {filter === f && (
                  <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-zinc-800 shadow-sm transition-all" />
                )}
                <span
                  className={`relative block whitespace-nowrap text-sm font-medium ${
                    filter === f ? "text-text-primary font-semibold" : "text-text-secondary"
                  }`}
                >
                  {f}
                </span>
              </button>
            ))}
          </div>

          <label className="bg-bg-800 text-text-primary hover:bg-bg-700/80 border-bg-600 flex items-center gap-2 rounded-full border px-4 py-2.5 transition sm:px-5 sm:py-2">
            <Search size={18} className="text-text-secondary shrink-0" />
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-text-secondary sm:w-48"
            />
          </label>
        </div>
      </span>

      {/* Projects Grid */}
      <div className="py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
        {visible.map((project, i) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            categories={project.categories}
            image={project.image}
            imageBgColor={project.imageBgColor}
            year={project.year}
            aosDelay={(i % 2) * 100}
          />
        ))}
      </div>
    </section>
  );
}
