import Image from "next/image";
import Link from "next/link";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const Gallery = () => {
  return (
    <section aria-labelledby="gallery-preview-heading">
      <div className="container relative max-w-7xl border-x px-0 py-12 md:py-16 lg:py-20">
        <div className="container grid grid-cols-1 gap-4 md:gap-2 lg:grid-cols-2">
          <div className="grid gap-2">
            <div aria-labelledby="preview-images-desc" className="grid h-fit grid-cols-2 gap-2" role="img">
              <div className="relative aspect-6/4 overflow-hidden rounded-xl saturate-0 transition-[filter] duration-300 hover:saturate-100">
                <Image
                  alt="Reena smiling warmly, showing her joyful and caring personality"
                  className="object-cover"
                  fill
                  src="/images/image-1.webp"
                />
              </div>
              <div className="relative aspect-6/4 overflow-hidden rounded-xl saturate-0 transition-[filter] duration-300 hover:saturate-100">
                <Image
                  alt="Reena in her nursing uniform, demonstrating her professional dedication to healthcare"
                  className="object-cover"
                  fill
                  src="/images/nurses.webp"
                />
              </div>
            </div>
            <span className="sr-only" id="preview-images-desc">
              Two preview images from Reena's photo gallery showing her joyful personality and professional dedication
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
                From moments at work in her nursing uniform to time spent with family, friends, and the community she
                loved serving.
                <br />
                Through these images, we celebrate not only her professional dedication but also her warmth, joy, and
                vibrant spirit.
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
            <div className="relative aspect-7/4 overflow-hidden rounded-xl saturate-0 transition-[filter] duration-300 hover:saturate-100">
              <Image
                alt="Reena demonstrating her caring nature, comforting and helping others"
                className="object-cover"
                fill
                src="/images/image-2.webp"
              />
            </div>

            <div className="flex flex-col gap-2 md:flex-row">
              <Image
                alt="Reena with family members, showing her loving relationships and personal connections"
                className="rounded-xl object-cover saturate-0 transition-[filter] duration-300 hover:saturate-100"
                height={247}
                src="/images/image-3.webp"
                width={357}
              />

              <Image
                alt="Reena surrounded by family, displaying the love and joy she brought to those closest to her"
                className="rounded-xl object-cover saturate-0 transition-[filter] duration-300 hover:saturate-100"
                height={247}
                src="/images/image-4.webp"
                width={215}
              />
            </div>
          </div>
        </div>
        <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
        <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
      </div>
    </section>
  );
};
