import type { Metadata } from "next";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BASE_URL } from "@/data/constants";
import { getGalleryImages } from "@/lib/payload";

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
    url: `${BASE_URL}/gallery`,
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
    canonical: `${BASE_URL}/gallery`,
  },
};

const galleryStructuredData = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${BASE_URL}/gallery#gallery`,
  name: "Reena Memorial Photo Gallery",
  description:
    "A collection of cherished memories showcasing Reena's life, from her professional dedication as a nurse to precious moments with family, friends, and the community she loved serving.",
  url: `${BASE_URL}/gallery`,
  about: {
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Reena",
  },
};

export default async function GalleryPage() {
  const galleryImages = await getGalleryImages();

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryStructuredData) }} type="application/ld+json" />
      <main>
        <header className="container relative grid max-w-7xl grid-cols-1 gap-8 border-x pt-16 pb-12 md:grid-cols-2 md:gap-20 md:pt-28 md:pb-20">
          <div>
            <Badge>Photo Gallery</Badge>
            <h1 className="mt-3 font-light font-sans text-3xl md:text-4xl">
              A collection of <br />
              <span className="font-medium">Cherished memories</span>
            </h1>
          </div>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
            From moments at work in her nursing uniform to time spent with family, friends, and the community she loved
            serving.
            <br />
            Through these images, we celebrate not only her professional dedication but also her warmth, joy, and
            vibrant spirit.
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="container relative max-w-7xl columns-1 gap-3 space-y-3 border-x pb-16 sm:columns-2 md:pb-28">
          {galleryImages.length > 0
            ? galleryImages.map((image) => (
                <div className="group relative" key={image.id}>
                  <Image
                    alt={image.alt ?? "Gallery image"}
                    className="h-auto w-full rounded-xl"
                    height={600}
                    src={image.url}
                    width={800}
                  />
                  {image.caption && (
                    <div className="absolute inset-0 flex items-end rounded-xl bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                      <p className="p-4 text-sm text-white">{image.caption}</p>
                    </div>
                  )}
                </div>
              ))
            : null}

          <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
          <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
        </div>
        <Separator />
      </main>
    </>
  );
}
