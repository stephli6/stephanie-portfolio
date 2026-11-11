import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function RotatingBadge() {
  const text = "Lets Talk • Lets Talk • Lets Talk • Lets Talk • ";
  return (
    <Link href="/contact" aria-label="Contact Stephanie">
      <div className="group bg-bg-800 absolute right-0 bottom-0 grid aspect-square h-fit w-[40%] place-content-center rounded-full p-3 shadow">
        <div className="flex-center border-bg-600 absolute h-[50%] w-[50%] translate-x-1/2 translate-y-1/2 rounded-full border">
          <ArrowUpRight
            size={18}
            strokeWidth={1}
            className="stroke-current transition-all duration-300 group-hover:rotate-45"
          />
        </div>
        <div className="relative aspect-square w-full overflow-hidden rounded-full">
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full animate-spin-slow"
            style={{ animationDuration: "18s" }}
            aria-hidden="true"
          >
            <defs>
              <path
                id="rotate-badge-circle"
                d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
              />
            </defs>
            <text className="fill-text-primary font-clash-display text-[7.2px] font-medium uppercase tracking-[0.14em]">
              <textPath href="#rotate-badge-circle">{text}</textPath>
            </text>
          </svg>
        </div>
      </div>
    </Link>
  );
}
