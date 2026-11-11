"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import Button from "./Button";
import { socials } from "@/data/socials";

const socialIcons = [
  { label: "LinkedIn", href: socials.linkedin, icon: Linkedin },
  { label: "GitHub", href: socials.github, icon: Github },
  { label: "Gmail", href: `mailto:${socials.email}`, icon: Mail },
];

function SocialRow({ className = "" }: { className?: string }) {
  return (
    <div className={`opacity-container text-text-secondary ${className}`}>
      {socialIcons.map((social, i) => (
        <span
          key={social.label}
          data-aos="fade"
          data-aos-offset="0"
          data-aos-duration="300"
          data-aos-easing="ease-in-out-sine"
          data-aos-delay={String(i * 200)}
          data-aos-once="false"
        >
          <a
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            href={social.href}
          >
            <social.icon size={20} className="opacity-container-child" />
          </a>
        </span>
      ))}
    </div>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const simple = pathname === "/contact";

  return (
    <footer className={`max-screen py-8 md:py-12 z-10 ${simple ? "space-y-6" : "space-y-10"}`}>
      {!simple && (
        <div
          className="relative flex flex-col items-center justify-center overflow-hidden rounded-[32px] sm:rounded-[36px] border border-zinc-800/80 bg-zinc-900/60 px-6 py-16 sm:py-20 md:py-24 text-center shadow-2xl backdrop-blur-xl"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          {/* Subtle top ambient glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-highlight/10 blur-3xl" />

          {/* Status badge */}
          <div className="relative mb-6 inline-flex items-center gap-2.5 rounded-full border border-highlight/20 bg-highlight/10 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-highlight opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-highlight" />
            </span>
            <span className="font-clash-display text-xs font-semibold uppercase tracking-wider text-highlight-primary">
              Available for work
            </span>
          </div>

          <AnimatedHeading
            text="Let's turn your data into decisions."
            as="h2"
            className="relative font-clash-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 max-w-2xl mx-auto"
          />

          <Button
            href="/contact"
            variant="outline"
            swapText="Get in Touch"
            className="relative"
          >
            Contact Me
          </Button>

          <SocialRow className="mt-8 gap-5 sm:hidden" />
        </div>
      )}

      <div className="flex flex-col items-center justify-between gap-4 text-xs sm:text-sm text-zinc-400 sm:flex-row pb-6 sm:pb-2">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Stephanie Hwang. All rights reserved.
        </p>
        <SocialRow className="hidden gap-5 sm:flex" />
      </div>
    </footer>
  );
}
