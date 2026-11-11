import type { Metadata } from "next";
import { ArrowUpRight, Hand } from "lucide-react";
import Marquee from "@/components/Marquee";
import SectionLabel from "@/components/SectionLabel";
import GhostText from "@/components/GhostText";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import ExpertiseAccordion from "@/components/ExpertiseAccordion";
import { projects, featuredProjects } from "@/data/projects";
import { socials } from "@/data/socials";

export const metadata: Metadata = {
  title: "Stephanie Hwang — Data Analyst",
  description:
    "Portfolio of Stephanie Hwang, a Data Analyst and UCLA MEng Data Science student (June 2027). SQL, Python, Tableau, and Power BI — from raw data to decisions.",
  alternates: {
    canonical: "/",
  },
};

const heroSocials = [
  { label: "LinkedIn", href: socials.linkedin },
  { label: "GitHub", href: socials.github },
  { label: "Gmail", href: `mailto:${socials.email}` },
];

const marqueeItems = [
  "Data Analysis",
  "Business Intelligence",
  "SQL & Python",
  "Tableau Dashboards",
  "E-commerce Analytics",
  "People Analytics",
];

export default function HomePage() {
  const featured = featuredProjects
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="max-screen pt-10 pb-16 sm:pt-14 sm:pb-20">
        {/* Intro Badge */}
        <div data-aos="fade-up" data-aos-duration="400">
          <div className="mb-6 inline-flex items-center gap-2 text-text-primary">
            <span className="wave inline-block">
              <Hand size={22} className="-rotate-12 text-highlight-primary" />
            </span>
            <span className="font-satoshi text-sm sm:text-base font-medium">
              Hey! It&apos;s me Stephanie,
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
          <h1 className="font-clash-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold leading-[1.08] tracking-tight text-white max-w-5xl">
            Turning{" "}
            <span className="text-highlight-primary">
              raw data into decisions
            </span>{" "}
            people can use.
          </h1>
        </div>

        {/* Subtitle & Divider Row */}
        <div
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-delay="200"
          className="mt-8 sm:mt-10 flex flex-col gap-5 md:flex-row md:items-center"
        >
          <div className="h-px flex-1 bg-zinc-800 hidden md:block" />
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-zinc-400">
            I&apos;m a Data Analyst and UCLA MEng Data Science student (June
            2027) working with SQL, Python, Tableau, and Power BI — focused on
            Data / BI Analyst roles in Los Angeles, Orange County, or remote in
            California.
          </p>
        </div>

        {/* Social Links and Button Row */}
        <div
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-delay="300"
          className="mt-8 sm:mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center"
        >
          <ul className="flex flex-wrap items-center gap-5 sm:gap-7">
            {heroSocials.map((social) => (
              <li key={social.label}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-400 transition-colors duration-300 hover:text-white"
                  href={social.href}
                >
                  <span>{social.label}</span>
                  <ArrowUpRight
                    size={15}
                    className="text-zinc-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight-primary"
                  />
                </a>
              </li>
            ))}
          </ul>

          <Button href="/about" variant="outline" swapText="About Me">
            Know me better
          </Button>
        </div>
      </section>

      {/* ===== Marquee Banner ===== */}
      <Marquee items={marqueeItems} textClassName="text-4xl sm:text-5xl md:text-6xl" />

      {/* ===== About Me Section ===== */}
      <section className="max-screen py-20 sm:py-28 md:py-32 flex flex-col items-center justify-center text-center">
        <div data-aos="fade-up" data-aos-duration="400">
          <SectionLabel pill className="mx-auto">
            About Me
          </SectionLabel>
        </div>

        <div className="mt-6 max-w-4xl lg:max-w-5xl">
          <GhostText
            text="I'm Stephanie Hwang, a Data Analyst and UCLA MEng Data Science '27. I turn messy data into decisions — from raw exports and SQL queries to dashboards and recommendations a non-technical team can act on."
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.38] font-medium text-text-primary"
          />
        </div>
      </section>

      {/* ===== Selected Projects Section ===== */}
      <section className="max-screen py-16 sm:py-20 md:py-28">
        <div data-aos="fade-up" data-aos-duration="400">
          <SectionLabel pill>My Work</SectionLabel>
          <h2 className="font-clash-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mt-2">
            Selected Projects
          </h2>
          <p className="mt-2.5 max-w-lg text-sm sm:text-base text-zinc-400">
            Three end-to-end analytics projects, each with the numbers and
            the method behind them.
          </p>
        </div>

        {/* Balanced 2-Column Grid matching Target Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 mt-10 md:mt-14">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              categories={project.categories}
              image={project.image}
              imageBgColor={project.imageBgColor}
              year={project.year}
              aosDelay={i * 100}
            />
          ))}
        </div>

        <div
          className="mt-12 sm:mt-16 flex justify-center"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <Button href="/projects" variant="outline" swapText="View All">
            View All Projects
          </Button>
        </div>
      </section>

      {/* ===== Speciality / Areas of Expertise ===== */}
      <section className="max-screen py-16 sm:py-20 md:py-28">
        <div data-aos="fade-up" data-aos-duration="400" className="mb-8 sm:mb-10">
          <SectionLabel pill>Speciality</SectionLabel>
          <h2 className="font-clash-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mt-2">
            Areas of Expertise
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-duration="400">
          <ExpertiseAccordion />
        </div>
      </section>

    </>
  );
}
