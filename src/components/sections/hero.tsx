import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <header className="bg-sky-100" role="banner">
      <div className="container relative grid max-w-7xl grid-cols-1 border-x md:pr-0 lg:grid-cols-12">
        <div className="col-span-1 max-w-xl px-4 py-12 md:py-20 lg:col-span-7 lg:px-0 lg:py-32">
          <Badge aria-label="Mission statement" role="text" variant="outline">
            Empowering People. Enriching Communities.
          </Badge>
          <h1 className="mt-4 font-medium font-sans text-4xl tracking-tight md:text-5xl">
            <span className="font-semibold text-sky-600"> Reena Lives </span> - Continuing a Legacy of Compassion and
            Care
          </h1>
          <p className="mt-3 text-lg leading-relaxed tracking-tight">
            Reena was not only a devoted nurse but also a selfless soul who touched countless lives through her service
            and compassion. Though she has left us, her spirit lives on in every act of kindness we extend.{" "}
            <Link className="font-medium text-sky-600 hover:underline" href="http://reena.org/">
              reena.org
            </Link>{" "}
            is a humble initiative to continue her work - by supporting community health, empowering women in
            healthcare, and spreading hope where it’s needed most.
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
            src="/images/hero.webp"
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
  );
};
