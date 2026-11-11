import Image from "next/image";
import Link from "next/link";
import type { ProjectCategory } from "@/data/projects";

interface ProjectCardProps {
  slug: string;
  title: string;
  categories: ProjectCategory[];
  image: string;
  imageBgColor?: string;
  year: number | string;
  aosDelay?: number;
}

export default function ProjectCard({
  slug,
  title,
  categories,
  image,
  imageBgColor = "#c7d2fe",
  year,
  aosDelay = 0,
}: ProjectCardProps) {
  return (
    <div className="group h-full w-full">
      <Link
        href={`/projects/${slug}`}
        className="block h-full w-full focus:outline-none"
        data-aos="fade-up"
        data-aos-offset="40"
        data-aos-duration="400"
        data-aos-easing="ease-out-cubic"
        data-aos-delay={String(aosDelay)}
      >
        {/* Pastel Stage Container with floating screenshot mockup */}
        <div
          className="relative flex aspect-[16/11] sm:aspect-[16/10.5] w-full items-center justify-center overflow-hidden rounded-[26px] p-4 sm:p-7 md:p-8 transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_45px_-12px_rgba(0,0,0,0.5)]"
          style={{ backgroundColor: imageBgColor }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-xl shadow-[0_14px_34px_rgba(0,0,0,0.32)] sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.025]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        {/* Project Meta details below card */}
        <div className="mt-4 sm:mt-5 space-y-2">
          <h3 className="font-clash-display text-xl sm:text-2xl font-semibold tracking-tight text-text-primary transition-colors duration-300 group-hover:text-highlight-primary">
            {title}
          </h3>

          <div className="flex items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/90 px-3.5 py-1 text-xs font-medium text-zinc-300 shadow-sm transition-colors group-hover:border-zinc-700"
                >
                  {category}
                </span>
              ))}
            </div>
            <span className="text-sm font-medium tabular-nums text-zinc-400">
              {year}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

