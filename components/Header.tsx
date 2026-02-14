"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
              <span className="text-sm font-bold">AI</span>
            </div>
            <span className="text-lg font-bold">
              AI Compliance Hub
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/regulations" className="text-sm text-gray-300 hover:text-white transition-colors">
              Regulations
            </Link>
            <Link href="/assess" className="text-sm text-gray-300 hover:text-white transition-colors">
              Assessment
            </Link>
            <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <a
              href="https://aona.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold hover:bg-brand-500 transition-colors"
            >
              Get Help from Aona AI
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-300"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link href="/regulations" className="text-sm text-gray-300 hover:text-white" onClick={() => setOpen(false)}>
              Regulations
            </Link>
            <Link href="/assess" className="text-sm text-gray-300 hover:text-white" onClick={() => setOpen(false)}>
              Assessment
            </Link>
            <Link href="/about" className="text-sm text-gray-300 hover:text-white" onClick={() => setOpen(false)}>
              About
            </Link>
            <a
              href="https://aona.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-center hover:bg-brand-500"
            >
              Get Help from Aona AI
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
