import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function GalleryPage() {
  return (
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
          Through these images, we celebrate not only her professional dedication but also her warmth, joy, and vibrant
          spirit.
        </p>
      </header>
      <div className="container relative max-w-7xl columns-2 gap-3 space-y-3 border-x pb-28">
        <Image alt="Reena" className="rounded-xl" height={247} src="/images/gallery/mother.webp" width={720} />
        <Image alt="Reena" className="rounded-xl" height={247} src="/images/gallery/family.webp" width={720} />
        <Image alt="Reena" className="rounded-xl" height={247} src="/images/gallery/caring.webp" width={720} />
        <Image alt="Reena" className="rounded-xl" height={247} src="/images/cta-bg.webp" width={720} />
        <Image alt="Reena" className="rounded-xl" height={247} src="/images/gallery/nurse.webp" width={720} />

        <span aria-hidden="true" className="-bottom-1 -left-1 absolute z-1 size-1.5 rounded-full bg-white" />
        <span aria-hidden="true" className="-bottom-1 -right-1 absolute z-1 size-1.5 rounded-full bg-white" />
      </div>
      <Separator />
    </main>
  );
}
