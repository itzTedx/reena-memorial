import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Artwork } from "@/assets/artwork";
import { IconHeart } from "@/assets/icons/heart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BASE_URL } from "@/data/constants";

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
        <header className="bg-sky-100" role="banner">
          <div className="container relative grid max-w-7xl grid-cols-1 border-x md:pr-0 lg:grid-cols-12">
            <div className="col-span-1 max-w-xl px-4 py-12 md:py-20 lg:col-span-7 lg:px-0 lg:py-32">
              <Badge aria-label="Mission statement" role="text" variant="outline">
                Empowering People. Enriching Communities.
              </Badge>
              <h1 className="mt-4 font-sans text-4xl md:text-5xl lg:text-7xl">
                In loving memory of <span className="font-medium text-sky-600">Reena</span>
              </h1>
              <p className="mt-3 text-lg leading-relaxed tracking-tight md:text-xl">
                Reena was more than a nurse — she was a friend, a mentor, and a source of hope for everyone she met. Her
                compassion and dedication live on through the lives she touched and the causes she cared about.
              </p>
              <div className="mt-6 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
                <Button aria-describedby="story-button-desc" asChild className="w-full sm:w-auto">
                  <Link href="#story">About her story</Link>
                </Button>
                <span className="sr-only" id="story-button-desc">
                  Learn about Reena's life and legacy
                </span>
                <Button aria-describedby="mission-button-desc" asChild className="w-full sm:w-auto" variant="outline">
                  <Link href="#mission">Our Mission</Link>
                </Button>
                <span className="sr-only" id="mission-button-desc">
                  Discover our mission and causes
                </span>
              </div>
            </div>
            <div className="relative col-span-1 h-64 md:h-80 md:border-l lg:col-span-5 lg:h-auto">
              <Image
                alt="Portrait of Reena - a compassionate nurse who dedicated her life to caring for others"
                className="object-cover"
                fill
                priority
                src="/images/gallery/mother.webp"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10 bg-gradient-to-t from-background to-50% to-transparent"
              />
              <div aria-hidden="true" className="-top-1 -left-1 absolute z-1999 size-1.5 rounded-full bg-white" />
              <div
                aria-hidden="true"
                className="-top-1 -right-1 absolute z-1999 block size-1.5 rounded-full bg-white md:hidden"
              />
            </div>
          </div>
        </header>

        <section
          aria-labelledby="overview-heading"
          className="relative bg-gradient-to-b from-50% from-sky-100 to-50% to-background"
        >
          <div className="container relative max-w-7xl border-x px-0 pb-8 md:pb-12 lg:pb-16">
            <h2 className="sr-only" id="overview-heading">
              Overview of Reena's Impact and Legacy
            </h2>
            <div className="relative mx-2 bg-sky-200 p-2.5 md:mx-0">
              <article className="grid grid-cols-1 rounded-2xl bg-white lg:grid-cols-12">
                <div className="col-span-1 flex flex-col justify-between border-b p-4 md:p-6 lg:col-span-5 lg:border-r lg:border-b-0 lg:p-7">
                  <div className="flex items-center gap-2">
                    <div aria-hidden="true" className="size-6 rounded-full bg-red-50" />
                    <h3 className="font-medium">Mrs. Reena</h3>
                  </div>
                  <p className="mt-4 text-lg text-muted-foreground tracking-tight md:text-xl lg:mt-0 lg:text-2xl">
                    Reena was more than a nurse - she was a friend, a mentor, and a source of hope for everyone she met.
                    Her compassion and dedication live on through the lives she touched and the causes she cared about.
                  </p>
                </div>
                <div className="col-span-1 grid border-b lg:col-span-4 lg:border-r lg:border-b-0">
                  <article className="flex flex-col gap-2 border-b p-4 md:p-6 lg:p-7">
                    <div aria-hidden="true" className="size-9 self-end rounded-full bg-sky-100" />
                    <div>
                      <h4 className="text-pretty font-medium font-sans text-lg md:text-xl">
                        Remembering Reena's Compassionate Care
                      </h4>
                      <p className="text-sm md:text-base">
                        Honoring a devoted nurse who touched countless lives with kindness and dedication.
                      </p>
                    </div>
                  </article>
                  <article className="flex flex-col gap-2 p-4 md:p-6 lg:p-7">
                    <div aria-hidden="true" className="size-9 self-end rounded-full bg-sky-100" />
                    <div>
                      <h4 className="text-pretty font-medium font-sans text-lg md:text-xl">
                        Supporting Nursing Students & Community Causes
                      </h4>
                      <p className="text-sm md:text-base">
                        Continuing her legacy through scholarships, mentorship, and charitable projects.
                      </p>
                    </div>
                  </article>
                </div>
                <article className="col-span-1 flex flex-col justify-between p-4 md:p-6 lg:col-span-3 lg:p-7">
                  <div aria-hidden="true" className="size-9 self-end rounded-full bg-sky-100" />
                  <div className="mt-4 lg:mt-0">
                    <h4 className="text-pretty font-medium font-sans text-lg md:text-xl">
                      Sharing Memories & Inspiring Hope
                    </h4>
                    <p className="text-sm md:text-base">
                      A place to celebrate Reena's life, stories, and the positive impact she made.
                    </p>
                  </div>
                </article>
              </article>
              <div aria-hidden="true" className="absolute bottom-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
              <div aria-hidden="true" className="absolute right-1.5 bottom-1.5 z-1 size-1.5 rounded-full bg-white" />
              <div aria-hidden="true" className="absolute top-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
              <div aria-hidden="true" className="absolute top-1.5 right-1.5 z-1 size-1.5 rounded-full bg-white" />
            </div>
            <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
            <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
          </div>
        </section>

        <Separator aria-label="Section divider" role="separator" />

        <section
          aria-labelledby="story-heading"
          className="relative mx-auto max-w-7xl scroll-mt-12 border-x py-12 md:py-16 lg:py-20"
          id="story"
        >
          <div className="container grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-3">
            <div className="space-y-3">
              <Badge>About Her Story</Badge>
              <Artwork className="mx-auto hidden opacity-75 md:block" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-lg md:text-xl" id="story-heading">
                Healing Hands, Warm Hearts
              </h2>
              <div className="mt-3 whitespace-pre-line font-light font-sans text-sky-950/80 text-xl leading-relaxed md:text-2xl lg:text-3xl">
                <p>
                  <span className="font-medium text-sky-950">
                    Reena dedicated her life to caring for others. As a nurse, she went beyond her professional duties
                  </span>{" "}
                  - offering comfort, a listening ear, and a reassuring smile to patients and families during their most
                  difficult moments.
                </p>
                <br />
                <br />
                <p>
                  Born with a heart for service, she believed that even the smallest act of kindness could make a
                  difference. Whether she was working long hours in the hospital, mentoring new nursing students, or
                  simply visiting a neighbour in need, Reena lived a life guided by compassion.
                </p>
              </div>
            </div>
          </div>
          <aside
            aria-labelledby="tribute-heading"
            className="mx-4 mt-12 text-pretty rounded-3xl bg-muted-foreground p-8 text-center font-sans text-muted text-xl leading-relaxed md:mx-0 md:mt-16 md:p-12 md:text-2xl lg:mt-20 lg:p-20 lg:text-3xl"
          >
            <Badge className="font-light text-muted text-sm tracking-wide md:text-base" variant="outline">
              Remembered with <IconHeart aria-label="heart icon" className="!size-4 md:!size-6 shrink-0" />
            </Badge>
            <h3 className="sr-only" id="tribute-heading">
              Tribute to Reena's Legacy
            </h3>
            <p className="mt-4">
              She is remembered not only for her skill and dedication but for her warmth, humility, and the way she made
              everyone feel seen and valued. Her legacy continues to inspire those who knew her and those who hear her
              story.
            </p>
          </aside>
          <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
          <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
        </section>

        <Separator aria-label="Section divider" role="separator" />

        <section aria-labelledby="mission-heading" className="scroll-mt-12" id="mission">
          <div className="container relative max-w-7xl border-x px-0 py-12 md:py-16 lg:py-20">
            <h2
              className="mb-6 px-4 text-center font-medium font-sans text-xl md:px-0 md:text-2xl"
              id="mission-heading"
            >
              Mission & Causes
            </h2>
            <div className="relative mx-2 bg-sky-200 p-2.5 md:mx-0">
              <article className="grid grid-cols-1 divide-y rounded-2xl bg-white md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="border-b p-4 md:border-b-0 md:p-6 lg:p-9">
                  <h3 className="text-balance font-sans text-lg md:text-xl lg:text-2xl">
                    Our mission is to <span className="font-medium">carry forward</span> her values by:
                  </h3>
                </div>
                <div className="col-span-1 border-b p-4 md:col-span-2 md:border-r-0 md:border-b-0 md:p-6 lg:p-9">
                  <p className="text-balance text-lg md:text-xl lg:text-2xl">
                    Reena's work and spirit live on through the charitable initiatives started in her memory.
                  </p>
                </div>
                <div className="p-4 md:p-6 lg:p-9">
                  <h4 className="mb-3 text-balance font-bold text-xl md:text-2xl lg:text-3xl">
                    Supporting Nursing Students
                  </h4>
                  <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
                    Providing scholarships, mentorship programs, and resources for those entering the nursing
                    profession.
                  </p>
                </div>
                <div className="p-4 md:p-6 lg:p-9">
                  <h4 className="mb-3 text-balance font-bold text-xl md:text-2xl lg:text-3xl">
                    Community Health Projects
                  </h4>
                  <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
                    Offering medical assistance, health awareness programs, and support to underprivileged communities.
                  </p>
                </div>
                <div className="p-4 md:p-6 lg:p-9">
                  <h4 className="mb-3 text-balance font-bold text-xl md:text-2xl lg:text-3xl">Acts of Kindness</h4>
                  <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
                    Funding small but impactful initiatives that bring comfort and hope to those in need.
                  </p>
                </div>
              </article>
              <div aria-hidden="true" className="absolute bottom-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
              <div aria-hidden="true" className="absolute right-1.5 bottom-1.5 z-1 size-1.5 rounded-full bg-white" />
              <div aria-hidden="true" className="absolute top-1.5 left-1.5 z-1 size-1.5 rounded-full bg-white" />
              <div aria-hidden="true" className="absolute top-1.5 right-1.5 z-1 size-1.5 rounded-full bg-white" />
            </div>
            <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
            <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
          </div>
        </section>

        <Separator aria-label="Section divider" role="separator" />

        <section aria-labelledby="gallery-preview-heading">
          <div className="container relative max-w-7xl border-x px-0 py-12 md:py-16 lg:py-20">
            <div className="container grid grid-cols-1 gap-4 md:gap-2 lg:grid-cols-2">
              <div className="grid gap-2">
                <div aria-labelledby="preview-images-desc" className="grid h-fit grid-cols-2 gap-2" role="img">
                  <div className="relative aspect-6/4 overflow-hidden rounded-xl">
                    <Image
                      alt="Reena smiling warmly, showing her joyful and caring personality"
                      className="object-cover"
                      fill
                      src="/images/happy-person.webp"
                    />
                  </div>
                  <div className="relative aspect-6/4 overflow-hidden rounded-xl">
                    <Image
                      alt="Reena in her nursing uniform, demonstrating her professional dedication to healthcare"
                      className="object-cover"
                      fill
                      src="/images/nurse.webp"
                    />
                  </div>
                </div>
                <span className="sr-only" id="preview-images-desc">
                  Two preview images from Reena's photo gallery showing her joyful personality and professional
                  dedication
                </span>
                <article className="rounded-xl bg-white p-6 md:p-8 lg:p-10">
                  <Badge>Photo Gallery</Badge>
                  <h2
                    className="mt-3 text-pretty font-light font-sans text-2xl md:text-3xl lg:text-4xl"
                    id="gallery-preview-heading"
                  >
                    A collection of <br />
                    <span className="font-medium">Cherished memories</span>
                  </h2>
                  <p className="mt-3 text-balance text-base tracking-tight md:text-lg">
                    From moments at work in her nursing uniform to time spent with family, friends, and the community
                    she loved serving.
                    <br />
                    Through these images, we celebrate not only her professional dedication but also her warmth, joy,
                    and vibrant spirit.
                  </p>
                  <Button aria-describedby="gallery-button-desc" asChild className="mt-6 w-full sm:w-auto">
                    <Link href="/gallery">View gallery</Link>
                  </Button>
                  <span className="sr-only" id="gallery-button-desc">
                    Navigate to the full photo gallery to see more memories of Reena
                  </span>
                </article>
              </div>
              <div className="space-y-2">
                <div className="relative aspect-7/4 overflow-hidden rounded-xl">
                  <Image
                    alt="Reena demonstrating her caring nature, comforting and helping others"
                    className="object-cover"
                    fill
                    src="/images/caring.webp"
                  />
                </div>

                <div className="flex gap-2">
                  <Image
                    alt="Reena with family members, showing her loving relationships and personal connections"
                    className="rounded-xl object-cover"
                    height={247}
                    src="/images/mother.webp"
                    width={357}
                  />

                  <Image
                    alt="Reena surrounded by family, displaying the love and joy she brought to those closest to her"
                    className="rounded-xl object-cover"
                    height={247}
                    src="/images/family.webp"
                    width={215}
                  />
                </div>
              </div>
            </div>
            <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
            <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
          </div>
        </section>

        <Separator aria-label="Section divider" role="separator" />
      </main>
    </>
  );
}
