import Link from "next/link";
import type { ReactNode } from "react";

const secondActionButtonClassName =
  "inline-flex items-center justify-center gap-2 border border-secondary px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-secondary transition-colors hover:bg-secondary/10 disabled:cursor-not-allowed disabled:opacity-60";

type SharedProps = {
  children: ReactNode;
  className?: string;
};

type SecondActionButtonProps =
  | (SharedProps & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | (SharedProps & {
      href: string;
      onClick?: () => void;
      "aria-label"?: string;
    });

export function SecondActionButton(props: SecondActionButtonProps) {
  const className = [secondActionButtonClassName, props.className ?? ""].join(
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
