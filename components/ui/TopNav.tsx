import Link from "next/link";
import type { ReactNode } from "react";

type NavKey = "home" | "catalog" | "command-center" | "checkout";

type TopNavProps = {
  active: NavKey;
  actions?: ReactNode;
};

const navItems: ReadonlyArray<{ key: NavKey; label: string; href: string }> = [
  { key: "home", label: "Tech", href: "/" },
  { key: "catalog", label: "Elite", href: "/catalog" },
  { key: "command-center", label: "Command", href: "/command-center" },
  { key: "checkout", label: "Checkout", href: "/checkout" },
];

export function TopNav({ active, actions }: TopNavProps) {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 md:px-16">
        <Link
          href="/"
          className="relative text-2xl font-bold uppercase tracking-tight text-primary"
        >
          CYBER-RUN
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = item.key === active;
            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={[
                    "text-xs uppercase tracking-[0.2em] transition-colors",
                    isActive
                      ? "border-b border-primary pb-1 text-primary"
                      : "text-[var(--on-surface-variant)] hover:text-primary",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">{actions}</div>
      </div>
    </nav>
  );
}
