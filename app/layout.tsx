import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Compliance Hub — Track AI Regulations Worldwide",
  description:
    "Your go-to reference for AI regulations worldwide. Track the EU AI Act, ISO 42001, NIST AI RMF, GDPR AI provisions, and more. Readiness checklists, timelines, and expert analysis for compliance professionals.",
  keywords:
    "AI compliance, AI regulation, EU AI Act, ISO 42001, NIST AI RMF, AI governance, artificial intelligence regulation",
  openGraph: {
    title: "AI Compliance Hub — Track AI Regulations Worldwide",
    description:
      "Track every AI regulation that matters. Expert analysis, readiness checklists, and timelines for compliance professionals.",
    type: "website",
    url: "https://aicompliancehub.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AI Compliance Hub",
              url: "https://aicompliancehub.com",
              description:
                "Track every AI regulation that matters. Expert analysis for compliance professionals.",
              publisher: {
                "@type": "Organization",
                name: "Aona AI",
                url: "https://aona.ai",
              },
            }),
          }}
        />
      </head>
      <body className="bg-brand-950 text-white antialiased">{children}</body>
    </html>
  );
}
