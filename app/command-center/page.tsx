import type { Metadata } from "next";
import { MiniCart } from "@/components/ui/MiniCart";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { TopNav } from "@/components/ui/TopNav";

export const metadata: Metadata = {
  title: "Command Center",
  description:
    "Track hardware links, order logistics, and telemetry snapshots from the Cyber-Run command center.",
  alternates: {
    canonical: "/command-center",
  },
  robots: {
    index: false,
    follow: false,
  },
};

type TelemetryMetric = {
  id: string;
  title: string;
  value: string;
  unit: string;
  accent: "primary" | "secondary";
};

const telemetry: ReadonlyArray<TelemetryMetric> = [
  {
    id: "weekly-mileage",
    title: "Weekly Mileage",
    value: "42",
    unit: "KM",
    accent: "primary",
  },
  {
    id: "avg-pace",
    title: "Avg Pace",
    value: "4:15",
    unit: "MIN/KM",
    accent: "secondary",
  },
  {
    id: "heart-rate",
    title: "Heart Rate Max",
    value: "165",
    unit: "BPM",
    accent: "secondary",
  },
];

export default function CommandCenterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav active="command-center" actions={<MiniCart />} />

      <main className="mx-auto w-full max-w-[1280px] px-4 pb-16 pt-28 md:px-16">
        <header className="mb-8 space-y-3">
          <h1 className="text-3xl uppercase md:text-5xl">Command Center</h1>
          <div className="inline-flex items-center gap-2 border border-secondary/30 bg-secondary/10 px-3 py-1">
            <span className="text-xs uppercase tracking-[0.2em] text-secondary">
              ID: CR-77X-992
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <section className="lg:col-span-8 space-y-6">
            <article className="border border-white/10 bg-surface p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="text-2xl uppercase">Active Logistics</h2>
                <span className="material-symbols-outlined text-secondary">
                  local_shipping
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
                    ORDER #CR-8821
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">
                    EST. ARRIVAL: 24H
                  </p>
                </div>
                <div className="h-1 bg-surface-variant">
                  <div className="h-full w-2/3 bg-secondary shadow-neon-secondary" />
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs uppercase tracking-[0.18em]">
                  <span className="text-secondary">Ordered</span>
                  <span className="text-secondary">Shipped</span>
                  <span className="text-[var(--on-surface-variant)]">
                    Delivery
                  </span>
                </div>
              </div>
            </article>

            <section>
              <h3 className="mb-3 pl-1 text-xs uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
                Telemetry Data
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {telemetry.map((metric) => (
                  <article
                    key={metric.id}
                    className="border border-white/10 bg-surface p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--on-surface-variant)]">
                      {metric.title}
                    </p>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="text-4xl font-bold">{metric.value}</span>
                      <span
                        className={[
                          "text-xs uppercase tracking-[0.2em]",
                          metric.accent === "primary"
                            ? "text-primary"
                            : "text-secondary",
                        ].join(" ")}
                      >
                        {metric.unit}
                      </span>
                    </div>
                    <div className="mt-5 h-1 bg-surface-variant">
                      <div
                        className={[
                          "h-full",
                          metric.accent === "primary"
                            ? "w-3/4 bg-primary"
                            : "w-2/3 bg-secondary",
                        ].join(" ")}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </section>

          <aside className="lg:col-span-4">
            <section className="flex h-full flex-col gap-4 border border-white/10 bg-surface p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="text-2xl uppercase">Hardware Link</h2>
                <span className="material-symbols-outlined text-primary">
                  devices
                </span>
              </div>

              <article className="space-y-2 border border-white/10 bg-black p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.18em]">
                    Apex Pro Watch
                  </p>
                  <span className="material-symbols-outlined text-primary">
                    watch
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-[var(--on-surface-variant)]">
                  <span>Battery</span>
                  <span className="text-primary">85%</span>
                </div>
              </article>

              <article className="space-y-2 border border-white/10 bg-black p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.18em]">
                    Stratos V3 Shoes
                  </p>
                  <span className="material-symbols-outlined text-secondary">
                    directions_run
                  </span>
                </div>
                <div className="inline-flex items-center border border-secondary/30 bg-secondary/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-secondary">
                  Update Available
                </div>
              </article>

              <button
                type="button"
                className="mt-auto border border-secondary px-4 py-3 text-xs uppercase tracking-[0.2em] text-secondary transition-colors hover:bg-secondary/10"
              >
                Add Hardware +
              </button>
            </section>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
