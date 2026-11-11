import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  House,
  Link2,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react";
import type { SectionBlock } from "@/data/projects";
import { projects, getProjectBySlug, getProjectNav } from "@/data/projects";
import ProjectTOC from "@/components/ProjectTOC";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project case study could not be found.",
    };
  }

  const imageUrl = project.image.startsWith("http")
    ? project.image
    : `https://stephanie-portfolio-blush.vercel.app${project.image}`;

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Case Study by Stephanie Hwang`,
      description: project.description,
      url: `https://stephanie-portfolio-blush.vercel.app/projects/${project.slug}`,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study by Stephanie Hwang`,
      description: project.description,
      images: [imageUrl],
    },
  };
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function Block({
  block,
  image,
  title,
}: {
  block: SectionBlock;
  image: string;
  title: string;
}) {
  if (block.type === "paragraph") {
    return (
      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed sm:leading-loose mb-4">
        {block.text}
      </p>
    );
  }
  if (block.type === "list") {
    return (
      <ul className="space-y-3 sm:space-y-3.5 my-4 sm:my-5 pl-5 list-disc marker:text-highlight text-sm sm:text-base text-zinc-300 leading-relaxed">
        {block.items.map((item) => (
          <li key={item} className="pl-1">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "code") {
    return (
      <pre className="my-5 overflow-x-auto rounded-xl border border-zinc-800 bg-[#121214] p-4 text-xs sm:text-sm font-mono text-zinc-200 leading-relaxed shadow-inner">
        <code>{block.lines.join("\n")}</code>
      </pre>
    );
  }
  if (block.type === "link") {
    return (
      <a
        href={block.url}
        target="_blank"
        rel="noreferrer"
        className="text-highlight font-medium hover:underline inline-flex items-center gap-1 transition-colors"
      >
        {block.text}
      </a>
    );
  }
  if (block.type === "image") {
    return (
      <figure className="my-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
        <Image
          src={image}
          alt={block.caption ?? title}
          width={1200}
          height={600}
          className="h-auto w-full object-cover"
        />
        {block.caption && (
          <figcaption className="p-3 text-center text-xs sm:text-sm text-zinc-400">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }
  return null;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const { prev, next } = getProjectNav(slug);

  if (!project) {
    return (
      <div className="max-screen py-20 text-center text-zinc-400">
        Project not found.
      </div>
    );
  }

  const detail = project.detail;
  const sections = detail?.sections ?? [];

  const tocItems = sections
    .filter((s) => s.title)
    .map((s) => ({
      title: s.title!,
      slug: slugify(s.title!),
    }));

  return (
    <article className="max-screen pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-24">
      {/* Breadcrumbs Bar */}
      <div className="flex w-full items-center justify-between pb-5 sm:pb-6 border-b border-zinc-800/80">
        <div className="flex min-w-0 flex-1 flex-row items-center gap-2 text-xs sm:text-sm font-medium text-zinc-400">
          <Link
            href="/"
            className="hover:text-white flex items-center transition-colors shrink-0"
            title="Home"
          >
            <House size={16} />
          </Link>
          <ChevronRight size={14} className="shrink-0 text-zinc-600" />
          <Link
            href="/projects"
            className="hover:text-white flex items-center transition-colors shrink-0"
          >
            Projects
          </Link>
          <ChevronRight size={14} className="shrink-0 text-zinc-600" />
          <span className="text-white truncate font-semibold">
            {project.title}
          </span>
        </div>
        <div className="ml-3 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs font-semibold text-zinc-400 shadow-sm shrink-0">
          {project.year}
        </div>
      </div>

      {/* Featured Image Showcase */}
      <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-[28px] border border-zinc-800/90 bg-zinc-950 shadow-2xl mt-6 sm:mt-8 mb-8 sm:mb-12">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={630}
          priority
          className="h-auto w-full object-cover max-h-[560px]"
        />
      </div>

      {/* Two Column Layout on Desktop, Single Column on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-8 flex flex-col min-w-0">
          {/* Project Title */}
          <h1 className="font-clash-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            {project.title}
          </h1>

          {/* Mobile Check It Out Button */}
          {detail?.demoUrl && (
            <div className="flex lg:hidden mt-4">
              <a
                target="_blank"
                href={detail.demoUrl}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/90 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-zinc-700 hover:border-zinc-500 transition-all shadow-md active:scale-95"
              >
                <span>Check it out</span>
                <ChevronRight size={15} />
              </a>
            </div>
          )}

          {/* Hero Description */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
            {detail?.heroDescription ?? project.description}
          </p>

          {/* Mobile Role & Client Card */}
          {detail && (
            <div className="lg:hidden mt-6 flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-[#121214] p-4 sm:p-5 shadow-lg">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-zinc-500 font-medium">Role</span>
                <span className="text-zinc-200 font-semibold text-right">
                  {detail.roles || "—"}
                </span>
              </div>
              <div className="h-px bg-zinc-800/80" />
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-zinc-500 font-medium">Client</span>
                <span className="text-zinc-200 font-semibold text-right">
                  {detail.client || "—"}
                </span>
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          {detail && detail.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {detail.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/90 px-3.5 py-1 text-xs font-medium text-zinc-300 shadow-sm hover:border-zinc-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Content Sections */}
          <div className="mt-8 sm:mt-10">
            {sections.map((section, idx) => {
              const id = section.title
                ? slugify(section.title)
                : `section-${idx}`;
              return (
                <div key={id} className="pt-2">
                  {section.title && (
                    <h2
                      id={id}
                      className="group flex scroll-m-28 items-center gap-2.5 font-clash-display text-xl sm:text-2xl font-bold text-white tracking-tight mt-6 sm:mt-8 mb-3 sm:mb-4"
                    >
                      <a
                        href={`#${id}`}
                        className="hover:text-highlight transition-colors"
                      >
                        {section.title}
                      </a>
                      <Link2
                        size={16}
                        className="text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100 hover:text-highlight shrink-0"
                      />
                    </h2>
                  )}
                  {section.blocks.map((block, i) => (
                    <Block
                      key={i}
                      block={block}
                      image={project.image}
                      title={project.title}
                    />
                  ))}
                  <div className="my-8 sm:my-10 h-px w-full bg-zinc-800/80" />
                </div>
              );
            })}
          </div>

          {/* Share this project */}
          <div className="flex flex-col gap-3 pt-2">
            <p className="text-sm font-medium text-zinc-400">
              Share this project
            </p>
            <div className="flex items-center gap-3 text-zinc-400">
              <a
                aria-label="Twitter"
                title="Share on Twitter / X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all active:scale-95"
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  `https://stephanie-portfolio-blush.vercel.app/projects/${project.slug}`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <Twitter size={16} />
              </a>
              <a
                aria-label="LinkedIn"
                title="Share on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all active:scale-95"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  `https://stephanie-portfolio-blush.vercel.app/projects/${project.slug}`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} />
              </a>
              <a
                aria-label="Email"
                title="Share via Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all active:scale-95"
                href={`mailto:?subject=${encodeURIComponent(
                  project.title
                )}&body=${encodeURIComponent(
                  `https://stephanie-portfolio-blush.vercel.app/projects/${project.slug}`
                )}`}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Previous / Next Project Navigation */}
          <div
            className={`mt-8 sm:mt-10 grid gap-4 grid-cols-1 ${
              prev && next ? "sm:grid-cols-2" : ""
            }`}
          >
            {prev && (
              <Link
                className="flex flex-col gap-1.5 rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-4 sm:p-5 hover:bg-zinc-800/60 hover:border-zinc-700 transition-all group"
                href={`/projects/${prev.slug}`}
              >
                <div className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-medium group-hover:text-zinc-300 transition-colors">
                  <ChevronLeft size={14} className="-ml-0.5 shrink-0" />
                  <span>Previous Page</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-white group-hover:text-highlight transition-colors truncate">
                  {prev.title}
                </p>
              </Link>
            )}
            {next && (
              <Link
                className="flex flex-col gap-1.5 rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-4 sm:p-5 text-right hover:bg-zinc-800/60 hover:border-zinc-700 transition-all group items-end"
                href={`/projects/${next.slug}`}
              >
                <div className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-medium group-hover:text-zinc-300 transition-colors">
                  <span>Next Page</span>
                  <ChevronRight size={14} className="-mr-0.5 shrink-0" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-white group-hover:text-highlight transition-colors truncate">
                  {next.title}
                </p>
              </Link>
            )}
          </div>
        </div>

        {/* Right Column (Desktop Sidebar: Check It Out + Role/Client + Sticky TOC) */}
        <aside className="hidden lg:flex lg:col-span-4 flex-col gap-6 sticky top-28 self-start">
          {/* Desktop Check It Out Button */}
          {detail?.demoUrl && (
            <div className="flex justify-end w-full">
              <a
                target="_blank"
                href={detail.demoUrl}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-zinc-700 hover:border-zinc-500 hover:text-white transition-all shadow-md active:scale-95"
              >
                <span>Check it out</span>
                <ChevronRight size={15} />
              </a>
            </div>
          )}

          {/* Desktop Role & Client Card */}
          {detail && (
            <div className="flex flex-col gap-3.5 rounded-2xl border border-zinc-800 bg-[#121214] p-5 shadow-lg w-full">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-zinc-500 font-medium">Role</span>
                <span className="text-zinc-200 font-semibold text-right">
                  {detail.roles || "—"}
                </span>
              </div>
              <div className="h-px bg-zinc-800/80" />
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-zinc-500 font-medium">Client</span>
                <span className="text-zinc-200 font-semibold text-right">
                  {detail.client || "—"}
                </span>
              </div>
            </div>
          )}

          {/* Desktop Table of Contents */}
          <ProjectTOC items={tocItems} />
        </aside>
      </div>
    </article>
  );
}
