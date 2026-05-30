import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { ThemeProvider } from "@/components/shared/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aarav.dev"),
  title: {
    default: "Muhammed Ramzin P | Full Stack Developer",
    template: "%s | Muhammed Ramzin P",
  },
  description:
    "Personal portfolio of Muhammed Ramzin P, a BTech IT student and full stack developer focused on backend engineering, APIs, and scalable web applications.",
  keywords: [
    "Muhammed Ramzin P",
    "Full Stack Developer",
    "BTech IT Student",
    "Next.js Developer",
    "React Developer",
    "Backend Learner",
    "Portfolio",
  ],
  authors: [{ name: "Muhammed Ramzin P" }],
  creator: "Muhammed Ramzin P",
  openGraph: {
    title: "Muhammed Ramzin P | Full Stack Developer",
    description:
      "Modern portfolio with projects, backend-focused learning, certifications, and contact flow.",
    url: "https://www.linkedin.com/in/muhammedramzinp/",
    siteName: "Muhammed Ramzin P Portfolio",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Muhammed Ramzin P portfolio preview" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Ramzin P | Full Stack Developer",
    description: "Portfolio for full stack projects, backend learning, and internship opportunities.",
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
      <body suppressHydrationWarning className="min-h-full bg-background text-foreground">
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
