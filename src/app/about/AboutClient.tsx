"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BrainCircuit,
  BriefcaseBusiness,
  BookOpen,
  CodeXml,
  HeartHandshake,
  MessageCircleMore,
  PenLine,
  PencilRuler,
  ShieldCheck,
} from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import AnimatedHeading from "@/components/AnimatedHeading";
import RotatingBadge from "@/components/RotatingBadge";
import Button from "@/components/Button";
import CountUp from "@/components/CountUp";
import { experience, communityOffers, communityStats, designProcess } from "@/data/site";
import { skills } from "@/data/skills";
import { socials } from "@/data/socials";

const offerIcons = [MessageCircleMore, BriefcaseBusiness, BookOpen, HeartHandshake];

const processIcons = [
  BrainCircuit,
  PenLine,
  PencilRuler,
  CodeXml,
  ShieldCheck,
];

export default function AboutClient() {
  const [showMore, setShowMore] = useState(false);
  const displayedExperience = showMore ? experience : experience.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 md:space-y-28 pb-16 sm:pb-24">
      {/* ===== Hero Section ===== */}
      <section className="max-screen pt-8 sm:pt-12 md:pt-16 flex flex-col items-center gap-8 overflow-x-hidden sm:flex-row md:gap-16">
        <div className="relative w-full max-w-[340px] sm:max-w-none sm:w-1/2 flex justify-center">
          <div className="h-full w-full max-w-[380px] overflow-hidden rounded-b-full border border-bg-700 shadow-2xl">
            <Image
              src="/images/hero.webp"
              alt="Stephanie Hwang"
              width={400}
              height={600}
              priority
              className="aspect-3/4 h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
            />
          </div>
          <RotatingBadge />
        </div>

        <div className="w-full sm:w-1/2 space-y-6">
          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-clash-display font-semibold leading-tight">
            An <span className="text-highlight-primary">Data Analyst</span>{" "}
            turning raw data into decisions
          </h1>
          <p className="text-balance text-text-secondary leading-relaxed">
            I&apos;m Stephanie Hwang, a Data Analyst and UCLA MEng Data Science
            student (June 2027). I work with SQL, Python, Tableau, and Power BI —
            from messy exports to dashboards and recommendations a team can act on.
          </p>
          <Button
            href={socials.resume}
            variant="outline"
            swapText="My Resume"
          >
            My Resume
          </Button>
        </div>
      </section>

      {/* ===== Skills Infinite Marquee ===== */}
      <div className="relative flex-col overflow-hidden border-y border-bg-700 py-4 sm:py-6 bg-bg-900/40">
        <div className="mask-marquee overflow-hidden">
          <div
            className="flex w-max animate-marquee hover:[animation-play-state:paused]"
            style={{ "--duration": "30s", gap: "16px" } as React.CSSProperties}
          >
            {[...skills, ...skills, ...skills].map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="inline-flex w-fit min-w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm shadow transition-colors border-transparent bg-bg-800 text-text-primary dark:bg-bg-700"
              >
                <div className="relative h-[18px] w-[18px] shrink-0">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={18}
                    height={18}
                    className="object-contain h-full w-full"
                  />
                </div>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Work History (Experience) ===== */}
      <section className="max-screen flex flex-col gap-8 sm:flex-row sm:gap-14 items-start">
        <div className="w-full sm:w-1/3 sm:sticky sm:top-28">
          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="0"
          >
            <SectionLabel>Work History</SectionLabel>
          </span>
          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="200"
          >
            <AnimatedHeading text="Experience" as="h2" className="mb-4 text-3xl sm:text-4xl md:text-5xl font-clash-display font-bold" />
          </span>
          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="400"
          >
            <p className="text-balance text-text-secondary leading-relaxed">
              Data analysis, tutoring, and research work — from raw data to
              decisions people can use.
            </p>
          </span>
        </div>

        <div className="flex w-full sm:w-2/3 flex-col items-center">
          <div className="w-full transition-all duration-300 space-y-2">
            {displayedExperience.map((job) => (
              <span
                key={job.company}
                data-aos="fade"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-easing="ease-in-out-sine"
                data-aos-delay="0"
                className="block"
              >
                <div className="border-b border-bg-700 bg-transparent py-4">
                  <h3 className="flex">
                    <div className="font-satoshi text-text-primary flex w-full flex-1 items-center justify-between gap-3 text-left text-base font-medium">
                      <Image
                        src={job.logo}
                        alt={job.company}
                        width={50}
                        height={50}
                        className="border-bg-600 bg-bg-800 mr-2 aspect-square h-10 w-10 shrink-0 rounded-full border object-contain p-1"
                      />
                      <div className="w-full min-w-0">
                        <h6 className="text-text-primary font-semibold truncate">{job.role}</h6>
                        <div className="flex justify-between items-center gap-2 pt-0.5">
                          <span className="text-sm text-text-secondary truncate">
                            @{job.company}
                          </span>
                          <p className="text-xs text-text-secondary shrink-0">
                            {job.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  </h3>
                </div>
              </span>
            ))}
          </div>
          {experience.length > 3 && (
            <span
              data-aos="fade"
              data-aos-offset="0"
              data-aos-duration="300"
              data-aos-easing="ease-in-out-sine"
              data-aos-delay="0"
              className="mt-6"
            >
              <button
                onClick={() => setShowMore(!showMore)}
                className="cursor-pointer m-auto inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-highlight-primary underline-offset-4 hover:underline"
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            </span>
          )}
        </div>
      </section>

      {/* ===== Design Process ===== */}
      <section className="max-screen">
        <div className="w-full mb-8">
          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="0"
          >
            <SectionLabel>Steps I follow</SectionLabel>
          </span>
          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="200"
          >
            <AnimatedHeading text="My Analysis Process" as="h2" className="text-3xl sm:text-4xl md:text-5xl font-clash-display font-bold mt-1" />
          </span>
          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="400"
          >
            <p className="text-balance text-text-secondary mt-2">
              Every analysis follows the same five steps — from the business
              question to a recommendation a team can act on.
            </p>
          </span>
        </div>

        <div className="no-visible-scrollbar flex gap-5 overflow-x-auto pb-6 scroll-smooth">
          {designProcess.map((step, i) => {
            const Icon = processIcons[i];
            return (
              <span
                key={step.step}
                data-aos="fade"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-easing="ease-in-out-sine"
                data-aos-delay={String(i * 150)}
                className="shrink-0"
              >
                <div className="w-full min-w-[280px] sm:min-w-[320px] max-w-[340px] rounded-3xl border border-bg-700 bg-bg-800 p-6 shadow-md transition-transform duration-300 hover:-translate-y-1">
                  <div className="border-bg-600 bg-bg-700 text-highlight-primary mb-4 w-fit rounded-full border p-4 shadow-sm">
                    <Icon size={20} />
                  </div>
                  <h5 className="font-satoshi text-lg font-semibold text-text-primary mb-2">
                    {step.step} {step.title}
                  </h5>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </span>
            );
          })}
        </div>
      </section>

      {/* ===== Community Work ===== */}
      <section className="max-screen flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
        <div className="w-full md:w-1/2">
          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="0"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {communityOffers.map((offer, i) => {
                const Icon = offerIcons[i];
                return (
                  <span
                    key={offer.title}
                    data-aos="fade"
                    data-aos-offset="0"
                    data-aos-duration="300"
                    data-aos-easing="ease-in-out-sine"
                    data-aos-delay="0"
                    className="block"
                  >
                    <div className="h-fit w-full rounded-3xl border border-bg-700 bg-bg-800 p-6 sm:even:mt-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                      <div className="border-bg-600 bg-bg-700 text-highlight-primary mb-4 w-fit rounded-full border p-3.5 shadow-inner">
                        <Icon size={18} />
                      </div>
                      <h5 className="font-satoshi text-base font-semibold text-text-primary mb-1">{offer.title}</h5>
                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{offer.description}</p>
                    </div>
                  </span>
                );
              })}
            </div>
          </span>
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="0"
          >
            <SectionLabel>Community Work</SectionLabel>
          </span>
          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="200"
          >
            <AnimatedHeading text="Analysis, Tutoring & Real Projects" as="h2" className="text-3xl sm:text-4xl md:text-5xl font-clash-display font-bold leading-tight" />
          </span>
          <span
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="300"
            data-aos-easing="ease-in-out-sine"
            data-aos-delay="400"
          >
            <p className="text-text-secondary leading-relaxed">
              Alongside my studies I tutor mathematics one-on-one and in small groups,
              volunteer on analytics for USC&apos;s National Center on Elder Abuse, and build
              end-to-end portfolio projects — most recently an e-commerce revenue analysis and an
              Amazon People Analytics externship on attrition risk. The numbers on this page come
              from that real work.
            </p>
          </span>

          <div className="py-4 flex flex-wrap gap-8">
            {communityStats.map((stat, i) => (
              <span
                key={stat.label}
                data-aos="fade"
                data-aos-offset="0"
                data-aos-duration="300"
                data-aos-easing="ease-in-out-sine"
                data-aos-delay={String(i * 200)}
              >
                <div>
                  <div className="font-clash-display text-4xl sm:text-5xl font-medium text-text-primary">
                    <CountUp
                      value={stat.value}
                      className="text-text-primary inline-block tracking-wider tabular-nums"
                    />
                    <span className="inline">{stat.suffix}</span>
                  </div>
                  <p className="text-text-secondary text-xs sm:text-sm">{stat.label}</p>
                </div>
              </span>
            ))}
          </div>

          <div className="pt-2">
            <Button href={socials.community} variant="outline" swapText="View Extern Portfolio">
              View Extern Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
