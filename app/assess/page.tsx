"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "Where does your organisation operate or serve customers?",
    options: [
      { label: "European Union / EEA", tags: ["eu-ai-act", "gdpr"] },
      { label: "United States", tags: ["nist-ai-rmf", "us-eo", "colorado", "sec"] },
      { label: "United Kingdom", tags: ["uk-ai-safety"] },
      { label: "Australia", tags: ["au-ai-ethics"] },
      { label: "Canada", tags: ["canada-aida"] },
      { label: "Multiple / Global", tags: ["eu-ai-act", "gdpr", "nist-ai-rmf", "iso-42001"] },
    ],
    multi: true,
  },
  {
    id: 2,
    question: "What type of AI systems does your organisation use or develop?",
    options: [
      { label: "Customer-facing decision-making (credit, hiring, insurance)", tags: ["high-risk"] },
      { label: "Internal analytics and business intelligence", tags: ["low-risk"] },
      { label: "Generative AI (chatbots, content generation)", tags: ["genai"] },
      { label: "Computer vision / biometrics", tags: ["high-risk", "biometric"] },
      { label: "Foundation / large language models", tags: ["gpai", "genai"] },
      { label: "AI-integrated products (medical, automotive, etc.)", tags: ["high-risk", "product"] },
    ],
    multi: true,
  },
  {
    id: 3,
    question: "Is your organisation publicly traded (SEC reporting)?",
    options: [
      { label: "Yes", tags: ["sec"] },
      { label: "No", tags: [] },
    ],
    multi: false,
  },
  {
    id: 4,
    question: "Do your AI systems process personal data?",
    options: [
      { label: "Yes, extensively", tags: ["gdpr", "privacy-high"] },
      { label: "Yes, limited", tags: ["gdpr", "privacy-low"] },
      { label: "No / minimal personal data", tags: [] },
    ],
    multi: false,
  },
  {
    id: 5,
    question: "What is your current AI governance maturity?",
    options: [
      { label: "No formal AI governance", tags: ["maturity-0"] },
      { label: "Basic policies in place", tags: ["maturity-1"] },
      { label: "Structured AI governance programme", tags: ["maturity-2"] },
      { label: "Certified / externally audited (ISO 42001 or similar)", tags: ["maturity-3"] },
    ],
    multi: false,
  },
];

interface RegResult {
  name: string;
  slug: string;
  urgency: "High" | "Medium" | "Low";
  reason: string;
}

function calculateResults(answers: Record<number, string[]>): {
  score: number;
  regulations: RegResult[];
  gaps: string[];
} {
  const allTags = Object.values(answers).flat();
  const regs: RegResult[] = [];

  if (allTags.includes("eu-ai-act") || allTags.includes("gdpr")) {
    regs.push({
      name: "EU AI Act",
      slug: "eu-ai-act",
      urgency: allTags.includes("high-risk") ? "High" : "Medium",
      reason: "You operate in or serve the EU market.",
    });
  }
  if (allTags.includes("gdpr") || allTags.includes("privacy-high")) {
    regs.push({
      name: "GDPR (AI Provisions)",
      slug: "gdpr-ai-provisions",
      urgency: allTags.includes("privacy-high") ? "High" : "Medium",
      reason: "Your AI systems process personal data of EU individuals.",
    });
  }
  if (allTags.includes("nist-ai-rmf")) {
    regs.push({
      name: "NIST AI RMF",
      slug: "nist-ai-rmf",
      urgency: "Medium",
      reason: "Recommended framework for US-based AI governance.",
    });
  }
  if (allTags.includes("colorado") && allTags.includes("high-risk")) {
    regs.push({
      name: "Colorado AI Act",
      slug: "colorado-ai-act",
      urgency: "High",
      reason: "You use high-risk AI affecting Colorado consumers. Effective Feb 2026.",
    });
  }
  if (allTags.includes("sec")) {
    regs.push({
      name: "SEC AI Disclosure",
      slug: "sec-ai-disclosure",
      urgency: "Medium",
      reason: "As a public company, AI risks and governance require disclosure.",
    });
  }
  if (allTags.includes("uk-ai-safety")) {
    regs.push({
      name: "UK AI Safety Framework",
      slug: "uk-ai-safety-framework",
      urgency: "Medium",
      reason: "You operate in the UK market.",
    });
  }
  if (allTags.includes("au-ai-ethics")) {
    regs.push({
      name: "Australia AI Ethics Framework",
      slug: "australia-ai-ethics-framework",
      urgency: "Medium",
      reason: "You operate in Australia. Mandatory guardrails coming.",
    });
  }
  if (allTags.includes("canada-aida")) {
    regs.push({
      name: "Canada AIDA",
      slug: "canada-aida",
      urgency: "Low",
      reason: "Monitor Canadian AI legislation developments.",
    });
  }

  // Always recommend ISO 42001
  regs.push({
    name: "ISO 42001",
    slug: "iso-42001",
    urgency: allTags.includes("maturity-0") ? "High" : "Low",
    reason: "International AI management system standard. Foundation for governance.",
  });

  const gaps: string[] = [];
  if (allTags.includes("maturity-0")) {
    gaps.push("No formal AI governance framework — critical gap for regulatory readiness");
    gaps.push("Recommend implementing ISO 42001 as a governance foundation");
  }
  if (allTags.includes("maturity-1") && allTags.includes("high-risk")) {
    gaps.push("Basic governance may be insufficient for high-risk AI compliance");
  }
  if (allTags.includes("high-risk") && !allTags.includes("maturity-2") && !allTags.includes("maturity-3")) {
    gaps.push("High-risk AI systems require structured risk management and impact assessments");
  }
  if (allTags.includes("genai") || allTags.includes("gpai")) {
    gaps.push("Generative AI systems have specific transparency and labelling obligations under the EU AI Act");
  }
  if (allTags.includes("biometric")) {
    gaps.push("Biometric AI systems face strict restrictions under the EU AI Act — some uses are prohibited");
  }

  const maturityScore = allTags.includes("maturity-3")
    ? 90
    : allTags.includes("maturity-2")
    ? 70
    : allTags.includes("maturity-1")
    ? 40
    : 15;

  const highUrgencyCount = regs.filter((r) => r.urgency === "High").length;
  const score = Math.max(10, maturityScore - highUrgencyCount * 10);

  return { score, regulations: regs, gaps };
}

export default function AssessPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [done, setDone] = useState(false);

  const current = questions[step];

  function select(tags: string[]) {
    if (current.multi) {
      const prev = answers[current.id] || [];
      const allNew = [...prev];
      tags.forEach((t) => {
        if (allNew.includes(t)) {
          allNew.splice(allNew.indexOf(t), 1);
        } else {
          allNew.push(t);
        }
      });
      setAnswers({ ...answers, [current.id]: allNew });
    } else {
      setAnswers({ ...answers, [current.id]: tags });
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setDone(true);
      }
    }
  }

  function next() {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  }

  const results = done ? calculateResults(answers) : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="relative flex-1">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, #2d1054 0%, #1a0533 40%, #11021d 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          {!done ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold mb-2">
                  AI Compliance Readiness Assessment
                </h1>
                <p className="text-gray-400">
                  Question {step + 1} of {questions.length}
                </p>
                <div className="mt-4 h-1.5 rounded-full bg-brand-900 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-brand-600 transition-all"
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-brand-900/40 p-8">
                <h2 className="text-xl font-bold mb-6">{current.question}</h2>
                {current.multi && (
                  <p className="text-sm text-gray-400 mb-4">Select all that apply</p>
                )}
                <div className="space-y-3">
                  {current.options.map((opt, i) => {
                    const selected = current.multi
                      ? opt.tags.some((t) => (answers[current.id] || []).includes(t))
                      : false;
                    return (
                      <button
                        key={i}
                        onClick={() => select(opt.tags)}
                        className={`w-full text-left rounded-lg border p-4 text-sm font-medium transition-all ${
                          selected
                            ? "border-brand-600 bg-brand-600/20 text-white"
                            : "border-white/10 bg-brand-950/50 text-gray-300 hover:border-white/20"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
                {current.multi && (
                  <button
                    onClick={next}
                    className="mt-6 rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold hover:bg-brand-500 transition-colors"
                  >
                    {step < questions.length - 1 ? "Next" : "See Results"}
                  </button>
                )}
              </div>
            </>
          ) : results ? (
            <div>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-extrabold mb-4">
                  Your Compliance Readiness Report
                </h1>
                <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-4 border-brand-600 mb-4">
                  <span className="text-3xl font-extrabold">{results.score}%</span>
                </div>
                <p className="text-gray-400">
                  {results.score >= 70
                    ? "Good foundation — focus on specific regulation gaps."
                    : results.score >= 40
                    ? "Moderate readiness — several areas need attention."
                    : "Significant gaps — prioritise governance framework implementation."}
                </p>
              </div>

              {results.gaps.length > 0 && (
                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-6 mb-8">
                  <h2 className="font-bold text-lg mb-3 text-yellow-400">
                    ⚠️ Identified Gaps
                  </h2>
                  <ul className="space-y-2">
                    {results.gaps.map((g, i) => (
                      <li key={i} className="text-sm text-yellow-200 flex gap-2">
                        <span>•</span>
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <h2 className="text-xl font-bold mb-4">
                Applicable Regulations ({results.regulations.length})
              </h2>
              <div className="space-y-3 mb-10">
                {results.regulations
                  .sort((a, b) => {
                    const order = { High: 0, Medium: 1, Low: 2 };
                    return order[a.urgency] - order[b.urgency];
                  })
                  .map((reg, i) => (
                    <a
                      key={i}
                      href={`/regulations/${reg.slug}`}
                      className="flex items-center gap-4 rounded-xl border border-white/10 bg-brand-900/30 p-5 hover:border-brand-600/50 transition-all"
                    >
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                          reg.urgency === "High"
                            ? "bg-red-500/20 text-red-400"
                            : reg.urgency === "Medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {reg.urgency}
                      </span>
                      <div>
                        <div className="font-bold">{reg.name}</div>
                        <div className="text-sm text-gray-400">{reg.reason}</div>
                      </div>
                    </a>
                  ))}
              </div>

              <div
                className="rounded-2xl p-8 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, #2d1054 0%, #6412A6 100%)",
                }}
              >
                <h3 className="text-xl font-bold mb-2">
                  Get Expert AI Compliance Support
                </h3>
                <p className="text-gray-200 mb-6 text-sm">
                  Aona AI helps organisations navigate AI compliance with automated
                  governance, risk assessment, and regulatory tracking.
                </p>
                <a
                  href="https://aona.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-lg bg-white text-brand-900 px-8 py-3 text-sm font-bold hover:bg-gray-100 transition-colors"
                >
                  Get Help from Aona AI
                </a>
              </div>

              <button
                onClick={() => {
                  setStep(0);
                  setAnswers({});
                  setDone(false);
                }}
                className="mt-6 text-sm text-gray-400 hover:text-white mx-auto block"
              >
                ← Retake Assessment
              </button>
            </div>
          ) : null}
        </div>
      </section>

      <Footer />
    </div>
  );
}
