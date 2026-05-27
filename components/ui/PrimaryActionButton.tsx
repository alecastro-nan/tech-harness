import Link from "next/link";
import type { ReactNode } from "react";

const primaryActionButtonClassName =
  "neon-glow-primary neon-glow-primary-hover inline-flex items-center justify-center gap-2 bg-primary px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60";

type SharedProps = {
  children: ReactNode;
  className?: string;
};

type PrimaryActionButtonProps =
  | (SharedProps & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | (SharedProps & {
      href: string;
      onClick?: () => void;
      "aria-label"?: string;
    });

export function PrimaryActionButton(props: PrimaryActionButtonProps) {
  const className = [primaryActionButtonClassName, props.className ?? ""].join(
    " ",
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, onClick, children } = props;

    return (
      <Link
        href={href}
        onClick={onClick}
        aria-label={props["aria-label"]}
        className={className}
      >
        {children}
      </Link>
    );
  }

  const { className: _className, children, ...buttonProps } = props;

  return (
    <button {...buttonProps} className={className}>
      {children}
    </button>
  );
}
