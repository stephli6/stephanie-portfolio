import { Sparkle } from "lucide-react";

interface MarqueeProps {
  items: string[];
  duration?: number;
  className?: string;
  textClassName?: string;
  sparkleClassName?: string;
}

export default function Marquee({
  items,
  duration = 32,
  className = "",
  textClassName = "text-4xl sm:text-5xl md:text-6xl",
  sparkleClassName = "text-zinc-600",
}: MarqueeProps) {
  // Triple the items so seamless looping never has empty blanks
  const row = [...items, ...items, ...items];

  return (
    <div
      className={`relative overflow-hidden border-y border-zinc-800/80 bg-bg-900/50 py-5 sm:py-7 ${className}`}
    >
      <div className="mask-marquee overflow-hidden">
        <div
          className="flex w-max animate-marquee hover:[animation-play-state:paused]"
          style={{ "--duration": `${duration}s`, gap: "28px" } as React.CSSProperties}
        >
          {row.map((item, i) => (
            <div key={`${item}-${i}`} className="flex items-center shrink-0 gap-6 sm:gap-8">
              <span
                className={`font-clash-display font-medium tracking-tight text-zinc-500/80 transition-colors duration-300 hover:text-zinc-300 ${textClassName}`}
              >
                {item}
              </span>
              <Sparkle
                size={18}
                className={`shrink-0 opacity-60 ${sparkleClassName}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

