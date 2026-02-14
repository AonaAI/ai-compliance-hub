import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — AI Compliance Hub",
  description:
    "Learn about AI Compliance Hub's mission, methodology, and how we track AI regulations worldwide. Powered by Aona AI.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, #2d1054 0%, #1a0533 40%, #11021d 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-extrabold mb-4">About AI Compliance Hub</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            The authoritative resource for tracking AI regulations worldwide.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            AI Compliance Hub exists to help compliance professionals, legal teams, and
            technology leaders navigate the rapidly evolving landscape of AI regulation.
            As governments worldwide introduce new laws, standards, and frameworks for
            artificial intelligence, staying informed is both critical and increasingly
            complex.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            We provide clear, detailed, and actionable analysis of every major AI
            regulation — from the EU AI Act and ISO 42001 to the NIST AI RMF and
            emerging state-level legislation. Our goal is to be the single reference
            that compliance teams turn to when they need to understand what's required,
            when it takes effect, and how to prepare.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Methodology</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Our regulation analysis is based on primary sources: official legislative
            texts, regulatory guidance documents, standards publications, and
            enforcement actions. We cross-reference multiple authoritative sources for
            each regulation and track amendments, implementation guidance, and
            enforcement developments.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Each regulation page includes: a comprehensive overview, detailed
            requirements breakdown, key dates and timelines, affected organisations,
            practical readiness checklists, official resources, and frequently asked
            questions. Content is reviewed and updated as regulations evolve.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Update Frequency</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            AI regulation is a fast-moving space. We monitor regulatory developments
            continuously and update our analysis when significant changes occur —
            including new enforcement actions, amended timelines, published guidance,
            and legislative developments. Our timeline and status indicators reflect the
            most current information available.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            AI Compliance Hub provides information for educational and general reference
            purposes. Content does not constitute legal advice. Organisations should
            consult qualified legal counsel for specific compliance guidance. While we
            strive for accuracy, we cannot guarantee that all information is complete or
            current at all times.
          </p>
        </section>

        <section
          className="rounded-2xl p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, #2d1054 0%, #6412A6 100%)",
          }}
        >
          <h2 className="text-2xl font-bold mb-2">Powered by Aona AI</h2>
          <p className="text-gray-200 max-w-lg mx-auto mb-6">
            AI Compliance Hub is a resource created by{" "}
            <a
              href="https://aona.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              Aona AI
            </a>
            , which helps organisations build and maintain AI governance programmes.
            From automated compliance tracking to risk assessment tools, Aona AI
            provides the technology to manage AI compliance at scale.
          </p>
          <a
            href="https://aona.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-white text-brand-900 px-8 py-3 text-sm font-bold hover:bg-gray-100 transition-colors"
          >
            Learn More About Aona AI
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}
