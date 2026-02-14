import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { regulations } from "@/lib/regulations";

const stats = [
  { label: "Active Regulations", value: "12+" },
  { label: "Countries with AI Policy", value: "50+" },
  { label: "Compliance Deadlines in 2025–2027", value: "25+" },
  { label: "Readiness Checklists", value: "10" },
];

const timelineEvents = [
  { date: "May 2018", label: "GDPR", desc: "EU data protection law applies" },
  { date: "Jan 2023", label: "NIST AI RMF", desc: "US risk framework released" },
  { date: "Oct 2023", label: "US EO on AI", desc: "Executive order signed" },
  { date: "Dec 2023", label: "ISO 42001", desc: "AI management standard published" },
  { date: "May 2024", label: "Colorado AI Act", desc: "First US state AI law signed" },
  { date: "Aug 2024", label: "EU AI Act", desc: "Enters into force" },
  { date: "Feb 2025", label: "EU AI Act", desc: "Prohibited practices ban" },
  { date: "Feb 2026", label: "Colorado AI Act", desc: "Takes effect" },
  { date: "Aug 2026", label: "EU AI Act", desc: "High-risk obligations apply" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, #2d1054 0%, #1a0533 40%, #11021d 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-brand-600/40 bg-brand-900/50 px-4 py-1.5 text-xs font-medium text-brand-300 mb-6">
              Updated for 2025 — Tracking 12+ active AI regulations
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              AI Compliance Hub
              <span className="block text-brand-400 mt-2">
                Track Every AI Regulation That Matters
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              The authoritative reference for compliance professionals. Detailed analysis,
              readiness checklists, and timelines for EU AI Act, ISO 42001, NIST AI RMF,
              and every major AI regulation worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/regulations"
                className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold hover:bg-brand-500 transition-colors"
              >
                Browse Regulations
              </Link>
              <Link
                href="/assess"
                className="rounded-xl border border-white/20 px-8 py-3.5 text-base font-semibold hover:bg-white/5 transition-colors"
              >
                Check Your Readiness
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-brand-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-400">
                  {s.value}
                </div>
                <div className="text-sm text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">
          AI Regulation Timeline
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Key milestones in global AI regulation. Stay ahead of compliance deadlines.
        </p>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-brand-800 hidden md:block" />
          <div className="space-y-8">
            {timelineEvents.map((evt, i) => (
              <div
                key={i}
                className={`md:flex items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="rounded-xl border border-white/10 bg-brand-900/40 p-4">
                    <div className="text-xs font-semibold text-brand-400 mb-1">
                      {evt.date}
                    </div>
                    <div className="font-bold">{evt.label}</div>
                    <div className="text-sm text-gray-400">{evt.desc}</div>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-brand-600 border-2 border-brand-950 z-10 shrink-0" />
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulation Cards */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, #11021d 0%, #1a0533 50%, #11021d 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Tracked Regulations
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            In-depth analysis of every major AI regulation. Requirements, timelines, and
            readiness checklists.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regulations.map((r) => (
              <Link
                key={r.slug}
                href={`/regulations/${r.slug}`}
                className="group rounded-xl border border-white/10 bg-brand-900/30 p-6 hover:border-brand-600/50 hover:bg-brand-900/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      r.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : r.status === "Upcoming"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {r.status}
                  </span>
                  <span className="text-xs text-gray-500">{r.regionCode}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-brand-300 transition-colors">
                  {r.shortName}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                  {r.summary}
                </p>
                <div className="text-xs text-gray-500">
                  {r.effectiveDate === "TBD"
                    ? "Effective date: TBD"
                    : `Effective: ${r.effectiveDate}`}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/regulations"
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold"
            >
              View all regulations →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div
          className="rounded-2xl p-10 sm:p-14 text-center"
          style={{
            background:
              "linear-gradient(135deg, #2d1054 0%, #6412A6 50%, #2d1054 100%)",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Check Your AI Compliance Readiness
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Take our quick assessment to discover which regulations apply to your
            organisation and identify compliance gaps.
          </p>
          <Link
            href="/assess"
            className="inline-flex rounded-xl bg-white text-brand-900 px-8 py-3.5 text-base font-bold hover:bg-gray-100 transition-colors"
          >
            Start Free Assessment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
