import type { Metadata } from "next";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Photo Gallery - Cherished Memories of Reena",
  description:
    "A collection of cherished memories showcasing Reena's life, from her professional dedication as a nurse to precious moments with family, friends, and the community she loved serving.",
  keywords: [
    "Reena photos",
    "memorial gallery",
    "nurse memories",
    "family photos",
    "community service",
    "healthcare memories",
    "nursing dedication",
    "compassionate care photos",
  ],
  openGraph: {
    title: "Photo Gallery - Cherished Memories of Reena",
    description:
      "A collection of cherished memories showcasing Reena's life, from her professional dedication as a nurse to precious moments with family, friends, and the community she loved serving.",
    url: "https://reena-memorial.com/gallery",
    type: "website",
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
    title: "Photo Gallery - Cherished Memories of Reena",
    description: "A collection of cherished memories showcasing Reena's life and dedication.",
    images: ["/images/gallery/mother.webp"],
  },
  alternates: {
    canonical: "https://reena-memorial.com/gallery",
  },
};

const galleryStructuredData = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": "https://reena-memorial.com/gallery#gallery",
  name: "Reena Memorial Photo Gallery",
  description:
    "A collection of cherished memories showcasing Reena's life, from her professional dedication as a nurse to precious moments with family, friends, and the community she loved serving.",
  url: "https://reena-memorial.com/gallery",
  about: {
    "@type": "Person",
    "@id": "https://reena-memorial.com/#person",
    name: "Reena",
  },
  image: [
    {
      "@type": "ImageObject",
      url: "https://reena-memorial.com/images/gallery/mother.webp",
      name: "Portrait of Reena",
      description: "Portrait of Reena - a compassionate nurse who dedicated her life to caring for others",
    },
    {
      "@type": "ImageObject",
      url: "https://reena-memorial.com/images/gallery/family.webp",
      name: "Reena with Family",
      description: "Reena surrounded by family, displaying the love and joy she brought to those closest to her",
    },
    {
      "@type": "ImageObject",
      url: "https://reena-memorial.com/images/gallery/caring.webp",
      name: "Reena Caring for Others",
      description: "Reena demonstrating her caring nature, comforting and helping others",
    },
    {
      "@type": "ImageObject",
      url: "https://reena-memorial.com/images/gallery/nurse.webp",
      name: "Reena in Nursing Uniform",
      description: "Reena in her nursing uniform, demonstrating her professional dedication to healthcare",
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryStructuredData) }} type="application/ld+json" />
      <main>
        <header className="container relative grid max-w-7xl grid-cols-2 gap-20 border-x pt-28 pb-20">
          <div>
            <Badge>Photo Gallery</Badge>
            <h1 className="mt-3 font-light font-sans text-4xl">
              A collection of <br />
              <span className="font-medium">Cherished memories</span>
            </h1>
          </div>
          <p className="mt-3 text-muted-foreground text-xl leading-relaxed tracking-tight">
            From moments at work in her nursing uniform to time spent with family, friends, and the community she loved
            serving.
            <br />
            Through these images, we celebrate not only her professional dedication but also her warmth, joy, and
            vibrant spirit.
          </p>
        </header>
        <div className="container relative max-w-7xl columns-2 gap-3 space-y-3 border-x pb-28">
          <Image
            alt="Portrait of Reena - a compassionate nurse who dedicated her life to caring for others"
            className="rounded-xl"
            height={247}
            src="/images/gallery/mother.webp"
            width={720}
          />
          <Image
            alt="Reena surrounded by family, displaying the love and joy she brought to those closest to her"
            className="rounded-xl"
            height={247}
            src="/images/gallery/family.webp"
            width={720}
          />
          <Image
            alt="Reena demonstrating her caring nature, comforting and helping others"
            className="rounded-xl"
            height={247}
            src="/images/gallery/caring.webp"
            width={720}
          />
          <Image
            alt="Reena in her community, showing the warm and caring environment she helped create"
            className="rounded-xl"
            height={247}
            src="/images/cta-bg.webp"
            width={720}
          />
          <Image
            alt="Reena in her nursing uniform, demonstrating her professional dedication to healthcare"
            className="rounded-xl"
            height={247}
            src="/images/gallery/nurse.webp"
            width={720}
          />

          <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
          <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
        </div>
        <Separator />
      </main>
    </>
  );
}
