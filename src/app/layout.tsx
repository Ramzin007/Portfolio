import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { ThemeProvider } from "@/components/shared/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aarav.dev"),
  title: {
    default: "Aarav Mehta | Frontend Engineer & Product Designer",
    template: "%s | Aarav Mehta",
  },
  description:
    "Premium personal portfolio for a frontend-focused full stack developer specializing in modern SaaS interfaces, Next.js, TypeScript, UI/UX, and product engineering.",
  keywords: [
    "Frontend Engineer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Full Stack Developer",
    "UI UX Designer",
  ],
  authors: [{ name: "Aarav Mehta" }],
  creator: "Aarav Mehta",
  openGraph: {
    title: "Aarav Mehta | Frontend Engineer & Product Designer",
    description:
      "Modern recruiter and client focused portfolio with detailed projects, services, GitHub stats, and contact flow.",
    url: "https://aarav.dev",
    siteName: "Aarav Mehta Portfolio",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Aarav Mehta portfolio preview" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarav Mehta | Frontend Engineer & Product Designer",
    description: "Modern portfolio for SaaS-grade frontend and full stack product work.",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
