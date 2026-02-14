"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { regulations } from "@/lib/regulations";
import { useState } from "react";

const regions = ["All", "EU", "US", "UK", "AU", "CA", "Global"];
const statuses = ["All", "Active", "Upcoming", "Draft"];
const types = ["All", "Law", "Standard", "Framework", "Executive Order"];

export default function RegulationsPage() {
  const [region, setRegion] = useState("All");
  const [status, setStatus] = useState("All");
  const [type, setType] = useState("All");

  const filtered = regulations.filter((r) => {
    if (region !== "All" && r.regionCode !== region) return false;
    if (status !== "All" && r.status !== status) return false;
    if (type !== "All" && r.type !== type) return false;
    return true;
  });

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
          <h1 className="text-4xl font-extrabold mb-4">AI Regulations Directory</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Comprehensive coverage of every major AI regulation worldwide. Filter by
            region, status, or type to find what applies to your organisation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-6 mb-10">
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 font-medium">Region</label>
            <div className="flex flex-wrap gap-1.5">
              {regions.map((r) => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    region === r
                      ? "bg-brand-600 text-white"
                      : "bg-brand-900/50 text-gray-400 hover:bg-brand-900"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 font-medium">Status</label>
            <div className="flex flex-wrap gap-1.5">
              {statuses.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    status === s
                      ? "bg-brand-600 text-white"
                      : "bg-brand-900/50 text-gray-400 hover:bg-brand-900"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1.5 font-medium">Type</label>
            <div className="flex flex-wrap gap-1.5">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    type === t
                      ? "bg-brand-600 text-white"
                      : "bg-brand-900/50 text-gray-400 hover:bg-brand-900"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => (
            <Link
              key={r.slug}
              href={`/regulations/${r.slug}`}
              className="group rounded-xl border border-white/10 bg-brand-900/30 p-6 hover:border-brand-600/50 hover:bg-brand-900/50 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    r.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : r.status === "Upcoming"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {r.status}
                </span>
                <span className="rounded-full bg-brand-800/50 px-2.5 py-0.5 text-xs text-gray-300">
                  {r.regionCode}
                </span>
                <span className="rounded-full bg-brand-800/50 px-2.5 py-0.5 text-xs text-gray-300">
                  {r.type}
                </span>
              </div>
              <h2 className="font-bold text-lg mb-2 group-hover:text-brand-300 transition-colors">
                {r.shortName}
              </h2>
              <p className="text-sm text-gray-400 mb-4">{r.summary}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{r.region}</span>
                <span>
                  {r.effectiveDate === "TBD" ? "TBD" : r.effectiveDate}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No regulations match the selected filters.
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
