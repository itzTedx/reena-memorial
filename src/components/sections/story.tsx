import { Artwork } from "@/assets/artwork";
import { IconHeart } from "@/assets/icons/heart";

import { Badge } from "../ui/badge";

export const Story = () => {
  return (
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
          <h2 className="text-lg tracking-tight md:text-xl" id="story-heading">
            A Life of Healing, A Heart of Service
          </h2>
          <div className="mt-3 whitespace-pre-line font-light font-sans text-sky-950/80 text-xl leading-relaxed md:text-2xl lg:text-3xl">
            <p>
              <span className="font-medium text-sky-950">Reena Mathew dedicated her life to nursing</span> — not just as
              a profession, but as a calling. Her care extended beyond hospital walls. She volunteered in rural clinics,
              mentored young women to enter the medical field, and stood as a pillar of support in her community during
              times of crisis. Her warmth, dedication, and humility made her unforgettable.
            </p>
            <br />
            <br />
            <p>
              Reena believed that small acts of kindness could create waves of change. Her life’s mission was simple: to
              heal, to serve, and to uplift. Through this platform, we carry forward that mission.
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
  );
};
