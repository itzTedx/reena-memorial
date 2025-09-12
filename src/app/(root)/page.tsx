import type { Metadata } from "next";

import { Donation } from "@/components/sections/donation";
import { Gallery } from "@/components/sections/gallery";
import { Mission } from "@/components/sections/mission";
import { Overview } from "@/components/sections/overview";
import { Story } from "@/components/sections/story";
import { Separator } from "@/components/ui/separator";
import { BASE_URL } from "@/data/constants";

import { Hero } from "../../components/sections/hero";

export const metadata: Metadata = {
  title: "Reena Memorial - In Loving Memory of a Compassionate Nurse",
  description:
    "Reena was more than a nurse — she was a friend, a mentor, and a source of hope for everyone she met. Her compassion and dedication live on through nursing scholarships, community health projects, and acts of kindness.",
  openGraph: {
    title: "Reena Memorial - Honoring a Compassionate Nurse's Legacy",
    description:
      "Reena was more than a nurse — she was a friend, a mentor, and a source of hope for everyone she met. Her compassion and dedication live on through nursing scholarships, community health projects, and acts of kindness.",
    url: BASE_URL,
    type: "website",
  },
  twitter: {
    title: "Reena Memorial - Honoring a Compassionate Nurse's Legacy",
    description: "Reena was more than a nurse — she was a friend, a mentor, and a source of hope for everyone she met.",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Reena",
      jobTitle: "Nurse",
      description:
        "A dedicated nurse who touched countless lives with compassion and kindness, known for her warm heart, professional dedication, and commitment to caring for others.",
      knowsAbout: ["Nursing", "Healthcare", "Patient Care", "Community Service", "Mentorship"],
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/gallery/mother.webp`,
        description: "Portrait of Reena - a compassionate nurse who dedicated her life to caring for others",
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Reena Memorial Foundation",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/gallery/mother.webp`,
      },
      description:
        "A memorial foundation dedicated to continuing Reena's legacy through nursing scholarships, community health projects, and acts of kindness.",
      foundingDate: "2024",
      mission: "Empowering People. Enriching Communities.",
      areaServed: "Global",
      knowsAbout: [
        "Nursing Education",
        "Healthcare Scholarships",
        "Community Health",
        "Charitable Giving",
        "Memorial Services",
      ],
      programMembership: [
        {
          "@type": "ProgramMembership",
          programName: "Nursing Student Scholarships",
          description:
            "Providing scholarships, mentorship programs, and resources for those entering the nursing profession.",
        },
        {
          "@type": "ProgramMembership",
          programName: "Community Health Projects",
          description:
            "Offering medical assistance, health awareness programs, and support to underprivileged communities.",
        },
        {
          "@type": "ProgramMembership",
          programName: "Acts of Kindness",
          description: "Funding small but impactful initiatives that bring comfort and hope to those in need.",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Reena Memorial",
      description:
        "Honoring the life and legacy of Reena, a dedicated nurse who touched countless lives with compassion and kindness.",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Home - Honoring Reena's Legacy of Compassionate Care",
      description:
        "Reena was more than a nurse — she was a friend, a mentor, and a source of hope for everyone she met. Her compassion and dedication live on through nursing scholarships, community health projects, and acts of kindness.",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      about: {
        "@id": `${BASE_URL}/#person`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/gallery/mother.webp`,
        description: "Portrait of Reena - a compassionate nurse who dedicated her life to caring for others",
      },
      datePublished: "2024-01-01T00:00:00Z",
      dateModified: new Date().toISOString(),
      inLanguage: "en-US",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />
      <main className="overflow-hidden" id="main-content">
        <Hero />
        <Overview />
        <Separator aria-label="Section divider" role="separator" />
        <Story />
        <Separator aria-label="Section divider" role="separator" />
        <Mission />
        <Separator aria-label="Section divider" role="separator" />
        <Donation />
        <Separator aria-label="Section divider" role="separator" />
        <Gallery />
        <Separator aria-label="Section divider" role="separator" />
      </main>
    </>
  );
}
