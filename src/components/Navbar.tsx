"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, LayoutDashboard, Send, Smile } from "lucide-react";

const links = [
  { label: "Home", href: "/", mobileIcon: House },
  { label: "About", href: "/about", mobileIcon: Smile },
  { label: "Projects", href: "/projects", mobileIcon: LayoutDashboard },
  { label: "Contact", href: "/contact", mobileIcon: Send },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="animate-nav-enter sticky top-0 z-50 flex justify-center pt-4 sm:pt-6 px-4">
        <nav className="flex w-full max-w-[1240px] items-center justify-between rounded-full border border-zinc-800/90 bg-zinc-950/75 px-5 py-3 backdrop-blur-xl shadow-lg shadow-black/30 sm:px-8">
          <Link
            href="/"
            className="font-clash-display text-xl font-bold tracking-tight text-white hover:text-highlight-primary transition-colors"
          >
            SH
          </Link>

          <ul className="hidden items-center gap-8 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-white ${
                    isActive(link.href)
                      ? "active-link text-white font-semibold"
                      : "text-zinc-400"
                  }`}
                >
                  <span className="nav-link">
                    <span>{link.label}</span>
                    <span aria-hidden="true">{link.label}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-center sm:hidden">
        <div className="flex w-full items-center justify-around rounded-t-3xl border-t border-zinc-800 bg-zinc-950/90 px-6 py-3.5 backdrop-blur-xl shadow-2xl">
          {links.map((link) => {
            const Icon = link.mobileIcon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center gap-1 text-xs font-medium transition-colors duration-300 ${
                  active ? "text-highlight-primary font-semibold" : "text-zinc-400"
                }`}
              >
                <Icon size={20} strokeWidth={active ? 2.4 : 2} />
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

