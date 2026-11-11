import { Sparkle } from "lucide-react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  pill?: boolean;
}

export default function SectionLabel({
  children,
  className = "",
  pill = false,
}: SectionLabelProps) {
  if (pill) {
    return (
      <div
        className={`mb-5 inline-flex items-center gap-2 rounded-full border border-highlight/20 bg-highlight/10 px-3.5 py-1.5 text-highlight-primary backdrop-blur-md ${className}`}
        data-aos="fade-up"
        data-aos-duration="350"
      >
        <Sparkle size={14} className="fill-highlight-primary/40" />
        <span className="font-clash-display text-xs font-semibold uppercase tracking-wider text-highlight-primary">
          {children}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`mb-3 flex w-fit items-center gap-2 text-highlight-primary ${className}`}
      data-aos="fade-up"
      data-aos-duration="350"
    >
      <Sparkle size={15} className="fill-highlight-primary/40 shrink-0" />
      <span className="font-clash-display text-xs sm:text-sm font-semibold uppercase tracking-wider text-highlight-primary">
        {children}
      </span>
    </div>
  );
}

