import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "highlight" | "outline" | "secondary";
  className?: string;
  swapText?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "outline",
  className = "",
  swapText,
  type = "button",
  onClick,
}: ButtonProps) {
  const attr = swapText ?? (typeof children === "string" ? children : "");
  const classes = `btn btn__${variant} ${className}`;

  if (href) {
    const internal = href.startsWith("/");
    if (internal) {
      return (
        <Link href={href} className={classes} data-attr={attr}>
          <span className="btn__text" data-attr={attr}>
            {children}
          </span>
          <span className="btn__ripple" />
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        data-attr={attr}
      >
        <span className="btn__text" data-attr={attr}>
          {children}
        </span>
        <span className="btn__ripple" />
      </a>
    );
  }

  return (
    <button type={type} className={classes} data-attr={attr} onClick={onClick}>
      <span className="btn__text" data-attr={attr}>
        {children}
      </span>
      <span className="btn__ripple" />
    </button>
  );
}
