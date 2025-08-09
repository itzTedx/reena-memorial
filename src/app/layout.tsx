import type { Metadata } from "next";
import "./globals.css";

import { didactGothic, helvetica } from "@/assets/fonts";
import { Cta } from "@/components/layout/cta";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BASE_URL } from "@/data/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "Reena Memorial - In Loving Memory of a Compassionate Nurse",
    template: "%s | Reena Memorial",
  },
  description:
    "Honoring the life and legacy of Reena, a dedicated nurse who touched countless lives with compassion and kindness. Supporting nursing students and community health initiatives in her memory.",
  keywords: [
    "Reena memorial",
    "nurse memorial",
    "healthcare hero",
    "nursing scholarships",
    "community health",
    "compassionate care",
    "nursing legacy",
    "memorial tribute",
    "healthcare philanthropy",
    "nursing mentorship",
  ],
  authors: [{ name: "Reena Memorial Foundation" }],
  creator: "Reena Memorial Foundation",
  publisher: "Reena Memorial Foundation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Reena Memorial",
    title: "Reena Memorial - In Loving Memory of a Compassionate Nurse",
    description:
      "Honoring the life and legacy of Reena, a dedicated nurse who touched countless lives with compassion and kindness. Supporting nursing students and community health initiatives in her memory.",
    images: [
      {
        url: "/images/gallery/mother.webp",
        width: 1200,
        height: 630,
        alt: "Portrait of Reena - a compassionate nurse who dedicated her life to caring for others",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reena Memorial - In Loving Memory of a Compassionate Nurse",
    description:
      "Honoring the life and legacy of Reena, a dedicated nurse who touched countless lives with compassion and kindness.",
    images: ["/images/gallery/mother.webp"],
    creator: "@reenamemorial",
    site: "@reenamemorial",
  },
  verification: {
    google: "google-verification-code",
  },
  category: "Memorial",
  classification: "Memorial Website",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Reena Memorial",
    "format-detection": "telephone=no",
  },
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn("scroll-smooth")} lang="en">
      <body className={`${helvetica.variable} ${didactGothic.className} antialiased`}>
        <Navbar />
        <div aria-hidden="true" className="fixed top-0 h-[calc(3.875rem-1px)] w-full bg-sky-100" />
        {children}
        <Cta />
        <Footer />
      </body>
    </html>
  );
}
