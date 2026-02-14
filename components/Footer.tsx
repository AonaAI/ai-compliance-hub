import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
                <span className="text-sm font-bold">AI</span>
              </div>
              <span className="text-lg font-bold">AI Compliance Hub</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Your go-to reference for AI regulations worldwide. Track compliance requirements,
              timelines, and readiness checklists for every major AI regulation.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Powered by{" "}
              <a
                href="https://aona.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-300"
              >
                Aona AI
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Regulations</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/regulations/eu-ai-act" className="hover:text-white">EU AI Act</Link></li>
              <li><Link href="/regulations/iso-42001" className="hover:text-white">ISO 42001</Link></li>
              <li><Link href="/regulations/nist-ai-rmf" className="hover:text-white">NIST AI RMF</Link></li>
              <li><Link href="/regulations/gdpr-ai-provisions" className="hover:text-white">GDPR (AI)</Link></li>
              <li><Link href="/regulations/colorado-ai-act" className="hover:text-white">Colorado AI Act</Link></li>
              <li><Link href="/regulations" className="text-brand-400 hover:text-brand-300">View all →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/assess" className="hover:text-white">Readiness Assessment</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li>
                <a href="https://aona.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Aona AI
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} AI Compliance Hub. All rights reserved.
          Content is for informational purposes only and does not constitute legal advice.
        </div>
      </div>
    </footer>
  );
}
