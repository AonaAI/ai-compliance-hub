import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { regulations, getRegulation, getRegulationSlugs } from "@/lib/regulations";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getRegulationSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const r = getRegulation(params.slug);
  if (!r) return {};
  return {
    title: `${r.shortName} — Requirements & Compliance Checklist | AI Compliance Hub`,
    description: `${r.summary} Detailed requirements, timeline, readiness checklist, and FAQ for ${r.shortName} compliance.`,
    keywords: `${r.shortName} requirements, ${r.shortName} compliance, ${r.shortName} checklist, AI regulation, ${r.region}`,
  };
}

export default function RegulationPage({ params }: { params: { slug: string } }) {
  const r = getRegulation(params.slug);
  if (!r) notFound();

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${r.name} — Requirements & Compliance Guide`,
    description: r.summary,
    datePublished: "2025-02-15",
    dateModified: "2025-02-15",
    publisher: { "@type": "Organization", name: "AI Compliance Hub" },
  };

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: r.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* Hero */}
      <section className="relative">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, #2d1054 0%, #1a0533 40%, #11021d 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/regulations" className="hover:text-white">
              Regulations
            </Link>
            <span>/</span>
            <span className="text-gray-300">{r.shortName}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                r.status === "Active"
                  ? "bg-green-500/20 text-green-400"
                  : r.status === "Upcoming"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-gray-500/20 text-gray-400"
              }`}
            >
              {r.status}
            </span>
            <span className="rounded-full bg-brand-800/50 px-3 py-1 text-xs text-gray-300">
              {r.region}
            </span>
            <span className="rounded-full bg-brand-800/50 px-3 py-1 text-xs text-gray-300">
              {r.type}
            </span>
            <span className="text-xs text-gray-400">
              Effective: {r.effectiveDate === "TBD" ? "TBD" : r.effectiveDate}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {r.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">{r.summary}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-brand-400">📋</span> Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                {r.overview.split("\n\n").map((p, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
            </section>

            {/* Key Requirements */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-brand-400">⚖️</span> Key Requirements
              </h2>
              <div className="space-y-3">
                {r.keyRequirements.map((req, i) => (
                  <div
                    key={i}
                    className="flex gap-3 rounded-lg border border-white/5 bg-brand-900/30 p-4"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600/30 text-xs font-bold text-brand-300">
                      {i + 1}
                    </div>
                    <p className="text-sm text-gray-300">{req}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Timeline */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-brand-400">📅</span> Key Dates & Timeline
              </h2>
              <div className="relative pl-6 border-l-2 border-brand-800 space-y-6">
                {r.timeline.map((t, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-brand-600 border-2 border-brand-950" />
                    <div className="text-xs font-semibold text-brand-400 mb-1">
                      {t.date}
                    </div>
                    <div className="text-sm text-gray-300">{t.event}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Who It Affects */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-brand-400">🏢</span> Who It Affects
              </h2>
              <ul className="space-y-2">
                {r.whoItAffects.map((w, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-300">
                    <span className="text-brand-400 shrink-0">→</span>
                    {w}
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-brand-400">❓</span> Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {r.faq.map((f, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-brand-900/30 p-5"
                  >
                    <h3 className="font-semibold mb-2">{f.question}</h3>
                    <p className="text-sm text-gray-400">{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Readiness Checklist */}
            <div className="rounded-xl border border-white/10 bg-brand-900/30 p-6 sticky top-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-brand-400">✅</span> Readiness Checklist
              </h3>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {r.readinessChecklist.map((item, i) => (
                  <label
                    key={i}
                    className="flex gap-2 text-sm text-gray-300 cursor-pointer hover:text-white"
                  >
                    <input type="checkbox" className="mt-0.5 accent-brand-600 shrink-0" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="rounded-xl border border-white/10 bg-brand-900/30 p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-brand-400">🔗</span> Resources
              </h3>
              <ul className="space-y-3">
                {r.resources.map((res, i) => (
                  <li key={i}>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-400 hover:text-brand-300 underline underline-offset-2"
                    >
                      {res.title} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div
              className="rounded-xl p-6 text-center"
              style={{
                background:
                  "linear-gradient(135deg, #2d1054 0%, #6412A6 100%)",
              }}
            >
              <h3 className="font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-sm text-gray-200 mb-4">
                Get expert AI compliance support from Aona AI.
              </p>
              <a
                href="https://aona.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-white text-brand-900 px-6 py-2.5 text-sm font-bold hover:bg-gray-100 transition-colors"
              >
                Talk to Aona AI
              </a>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
