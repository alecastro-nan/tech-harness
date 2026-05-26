import Link from "next/link";

const footerLinks = [
  "Privacy Protocol",
  "Terms of Engagement",
  "Return Logistics",
  "Sustainability Matrix",
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-14 md:px-16">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <p className="text-2xl font-bold uppercase tracking-tight text-primary">
            CYBER-RUN
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
            System Status: Optimal
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {footerLinks.map((label) => (
            <Link
              key={label}
              href="/"
              className="text-sm text-[var(--on-surface-variant)] transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-end md:justify-end">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
            © 2026 CYBER-RUN TECH
          </p>
        </div>
      </div>
    </footer>
  );
}
